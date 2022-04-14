const node = 'https://rinkeby.infura.io/v3/05c89ae096c24d3e9cb7d6ea3d951a1e';

const mysql = require('mysql');
const util = require('util');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider(node));

const contractAddress = '0x1Ae32902bD06741E00FA660d1df557b992B2D057';
const abi = require('./abinew.js');
let contract = new web3.eth.Contract(abi, contractAddress);

const timeout = 5;

function sleep(milliseconds) {
   return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function poll (fn) {
   await fn();
   await sleep(timeout*1000);
   await poll(fn);
}
 
let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Susan20*',
    database: 'charging_pile'
})

pool.query = util.promisify(pool.query);

async function writeEvent(event) {    
    try {
        console.log(event);
        const { chargingPileID, pileWorkingStatus, changingTime } = event.returnValues;
        const queryString = `Insert into pile_working_status (charging_pile_id, working_status, \`current_time\`, txHash, logIndex) VALUES (${chargingPileID}, ${pileWorkingStatus}, ${changingTime}, '${event.transactionHash}', '${event.logIndex}')`;
        console.log(queryString);
        await pool.query(
            queryString
        );
    } catch(e) {
        if(e.code != 'ER_DUP_ENTRY') {
            throw e; 
        }
    }   
}

async function getLatestCachedBlock() {
    const defaultInitialBlock = 10497164;
   return defaultInitialBlock;
}

async function cacheEvents(fromBlock, toBlock) {
    let events = await contract.getPastEvents(
        "PileWorkingStatusChanged",
        { filter: {}, fromBlock: fromBlock, toBlock: toBlock }
    );

    for(let event of events) {
        await writeEvent(event);
    }
}

async function scan() {
    const MaxBlockRange = 10000;
    
    let latestCachedBlock = await getLatestCachedBlock();
    let latestEthBlock = 0;

    await poll(async () => {
        try {
            latestEthBlock = await web3.eth.getBlockNumber();
            latestEthBlock = Math.min(latestEthBlock, latestCachedBlock + MaxBlockRange);

            if(latestEthBlock > latestCachedBlock) {
                await cacheEvents(latestCachedBlock, latestEthBlock);

                latestCachedBlock = latestEthBlock + 1;
            }
        } catch (e) {
            console.log(e.toString());
        }
    });
} 

scan()
.then(() => {
    pool.end();
})
.catch(e => {
    console.log(`Unexpected error. Work stopped. ${e}. ${e.stack}`);
    pool.end();
});