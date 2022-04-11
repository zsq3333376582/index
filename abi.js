module.exports = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "chargingPileID",
          "type": "uint256"
        }
      ],
      "name": "ChargingStarted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "chargingPileID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "pileHealth",
          "type": "bool"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "currentTime",
          "type": "uint256"
        }
      ],
      "name": "PileHealthReported",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "chargingPileID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "chargingTimeInMinutes",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "chargingFinishTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "energyUsed",
          "type": "uint256"
        }
      ],
      "name": "chargingFinished",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "PileHealth",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "PileWorkingStatus",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_chargingPileID",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_pileHealth",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_currentTime",
          "type": "uint256"
        }
      ],
      "name": "ReportingPileHealth",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "chargingDatas",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "chargingPileID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "chargingTimeInMinutes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "chargingFinishTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "energyUsed",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_chargingPileID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_chargingTimeInMinutes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_chargingFinishTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_energyUsed",
          "type": "uint256"
        }
      ],
      "name": "finishCharging",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getChargingData",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_chargingPileID",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_chargingTimeInMinutes",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_chargingFinishTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_energyUsed",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getPileHealth",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "_chargingPileID",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "_pileHealth",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "_currentTime",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "pileHealthDatas",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "chargingPileID",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "pileHealth",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "currentTime",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_chargingPileID",
          "type": "uint256"
        }
      ],
      "name": "startCharging",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]