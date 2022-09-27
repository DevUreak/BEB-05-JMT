const TOKEN = {
	"contractName": "JMToken",
	"abi": [
	  {
		"inputs": [
		  {
			"internalType": "address payable",
			"name": "treasury",
			"type": "address"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "address",
			"name": "owner",
			"type": "address"
		  },
		  {
			"indexed": true,
			"internalType": "address",
			"name": "spender",
			"type": "address"
		  },
		  {
			"indexed": false,
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
		  }
		],
		"name": "Approval",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [],
		"name": "FundsMoved",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [],
		"name": "OwnerAction",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": false,
			"internalType": "bool",
			"name": "result",
			"type": "bool"
		  }
		],
		"name": "TokenRewarded",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "address",
			"name": "_account",
			"type": "address"
		  },
		  {
			"indexed": false,
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "TokensBought",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [
		  {
			"indexed": true,
			"internalType": "address",
			"name": "from",
			"type": "address"
		  },
		  {
			"indexed": true,
			"internalType": "address",
			"name": "to",
			"type": "address"
		  },
		  {
			"indexed": false,
			"internalType": "uint256",
			"name": "value",
			"type": "uint256"
		  }
		],
		"name": "Transfer",
		"type": "event"
	  },
	  {
		"anonymous": false,
		"inputs": [],
		"name": "_MovedStakingReward",
		"type": "event"
	  },
	  {
		"inputs": [],
		"name": "MAX_SUPPLY",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "MapleItems",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "MapleMarket",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "MapleNFT",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "MapleUser",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "Router",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "Staking",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "TAX",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "owner",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "spender",
			"type": "address"
		  }
		],
		"name": "allowance",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "spender",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "approve",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  }
		],
		"name": "balanceOf",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"name": "balancesToClaim",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"name": "contributionsOf",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "decimals",
		"outputs": [
		  {
			"internalType": "uint8",
			"name": "",
			"type": "uint8"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "spender",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "subtractedValue",
			"type": "uint256"
		  }
		],
		"name": "decreaseAllowance",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "fundsAlreadyMoved",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "spender",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "addedValue",
			"type": "uint256"
		  }
		],
		"name": "increaseAllowance",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "isContractPaused",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "isTaxOn",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"name": "isWhitelisted",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "name",
		"outputs": [
		  {
			"internalType": "string",
			"name": "",
			"type": "string"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "owner",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "symbol",
		"outputs": [
		  {
			"internalType": "string",
			"name": "",
			"type": "string"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "totalContributed",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
		  {
			"internalType": "uint256",
			"name": "",
			"type": "uint256"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "to",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "transfer",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "from",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "to",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "transferFrom",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "treasuryWallet",
		"outputs": [
		  {
			"internalType": "address payable",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [],
		"name": "winRewardAddr",
		"outputs": [
		  {
			"internalType": "address",
			"name": "",
			"type": "address"
		  }
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_router",
			"type": "address"
		  }
		],
		"name": "setRouterAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_mapleNft",
			"type": "address"
		  }
		],
		"name": "setMapleNFTAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_mapleItems",
			"type": "address"
		  }
		],
		"name": "setMapleItemsAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_mapleMarket",
			"type": "address"
		  }
		],
		"name": "setMapleMarketAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_mapleUser",
			"type": "address"
		  }
		],
		"name": "setMapleUserAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_staking",
			"type": "address"
		  }
		],
		"name": "setStakingAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "contribute",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function",
		"payable": true
	  },
	  {
		"inputs": [],
		"name": "claimTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "togglePauseContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [],
		"name": "toggleTax",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  }
		],
		"name": "addToWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "account",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "amount",
			"type": "uint256"
		  }
		],
		"name": "marketBurn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_owner",
			"type": "address"
		  },
		  {
			"internalType": "address",
			"name": "_spender",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "_amount",
			"type": "uint256"
		  }
		],
		"name": "increaseContractAllowance",
		"outputs": [
		  {
			"internalType": "bool",
			"name": "",
			"type": "bool"
		  }
		],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "contract LiquidityPool",
			"name": "liquidityPool",
			"type": "address"
		  }
		],
		"name": "sendLiquidityToLPContract",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  },
	  {
		"inputs": [
		  {
			"internalType": "address",
			"name": "_addr",
			"type": "address"
		  },
		  {
			"internalType": "uint256",
			"name": "_amount",
			"type": "uint256"
		  }
		],
		"name": "randRewardToken",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	  }
	],
	"metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"treasury\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"FundsMoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"OwnerAction\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"result\",\"type\":\"bool\"}],\"name\":\"TokenRewarded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TokensBought\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"_MovedStakingReward\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_SUPPLY\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MapleItems\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MapleMarket\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MapleNFT\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MapleUser\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"Router\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"Staking\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"TAX\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addToWhitelist\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balancesToClaim\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contribute\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"contributionsOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fundsAlreadyMoved\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"increaseContractAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isContractPaused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isTaxOn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"isWhitelisted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"marketBurn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"randRewardToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract LiquidityPool\",\"name\":\"liquidityPool\",\"type\":\"address\"}],\"name\":\"sendLiquidityToLPContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_mapleItems\",\"type\":\"address\"}],\"name\":\"setMapleItemsAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_mapleMarket\",\"type\":\"address\"}],\"name\":\"setMapleMarketAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_mapleNft\",\"type\":\"address\"}],\"name\":\"setMapleNFTAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_mapleUser\",\"type\":\"address\"}],\"name\":\"setMapleUserAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_router\",\"type\":\"address\"}],\"name\":\"setRouterAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_staking\",\"type\":\"address\"}],\"name\":\"setStakingAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"togglePauseContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"toggleTax\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalContributed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"treasuryWallet\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"winRewardAddr\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/JMToken.sol\":\"JMToken\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/security/ReentrancyGuard.sol\":{\"keccak256\":\"0x0e9621f60b2faabe65549f7ed0f24e8853a45c1b7990d47e8160e523683f3935\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://287a2f8d5814dd0f05f22b740f18ca8321acc21c9bd03a6cb2203ea626e2f3f2\",\"dweb:/ipfs/QmZRQv9iuwU817VuqkA2WweiaibKii69x9QxYBBEfbNEud\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xd15c3e400531f00203839159b2b8e7209c5158b35618f570c695b7e47f12e9f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b600b852e0597aa69989cc263111f02097e2827edc1bdc70306303e3af5e9929\",\"dweb:/ipfs/QmU4WfM28A1nDqghuuGeFmN3CnVrk6opWtiF65K4vhFPeC\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/JMToken.sol\":{\"keccak256\":\"0x6d46ba35a03980a62eb23b06bc1c9b4c381fb5cec22d24e22ef99187254378c3\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://89f07d0c627d6a08242969b011154e7620ff962753b147e64dc3b0870832db30\",\"dweb:/ipfs/Qmcdew5EtewTCyojfBihLYMB1Lge8Si9PSugNDyiofp1HY\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0x02add59a18b8f9012f2043575b93d04fde563e3b940ccf50b5358e1cbe9e6ebd\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://feb1b5de36d206ec0be059e8e5110936a9a5e13f73b0cb375b3a35e87819ebd0\",\"dweb:/ipfs/QmSX53o3uqjeSaaDofNKswHREGfbf13CXXfnsxye1yHF68\"]},\"project:/contracts/VJMToken.sol\":{\"keccak256\":\"0xe2f8a326fd1fbe8e2bf0e7365ad261285fde71804fe77694ce986d47c106f061\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://f6ee599ebeff106e2eb9d3a6b0c01915cfc6f76e0916b4215e9c80c5c992e475\",\"dweb:/ipfs/QmXz1MZL3nGq7C8o1JW57rgYr6Z4iDV4Kba279dw4Smt4M\"]}},\"version\":1}",
	"bytecode": "0x60806040526007805462ff00001916620100001790556000601055605a6011553480156200002c57600080fd5b50604051620028c1380380620028c18339810160408190526200004f9162000235565b604051806040016040528060098152602001682526aa102a37b5b2b760b91b8152506040518060400160405280600381526020016212935560ea1b81525081600390816200009e91906200030b565b506004620000ad82826200030b565b50620000ba915050601290565b620000c790600a620004ec565b620000d690620f4240620004fd565b6005819055620000e890309062000148565b600780546301000000600160b81b0319163363010000009081029190911791829055600880546001600160a01b0319166001600160a01b039485161790559004166000908152601560205260409020805460ff191660011790556200052d565b6001600160a01b038216620001a35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001b7919062000517565b90915550506001600160a01b03821660009081526020819052604081208054839290620001e690849062000517565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b505050565b6000602082840312156200024857600080fd5b81516001600160a01b03811681146200026057600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200029257607f821691505b602082108103620002b357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200023057600081815260208120601f850160051c81016020861015620002e25750805b601f850160051c820191505b818110156200030357828155600101620002ee565b505050505050565b81516001600160401b0381111562000327576200032762000267565b6200033f816200033884546200027d565b84620002b9565b602080601f8311600181146200037757600084156200035e5750858301515b600019600386901b1c1916600185901b17855562000303565b600085815260208120601f198616915b82811015620003a85788860151825594840194600190910190840162000387565b5085821015620003c75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600181815b808511156200042e578160001904821115620004125762000412620003d7565b808516156200042057918102915b93841c9390800290620003f2565b509250929050565b6000826200044757506001620004e6565b816200045657506000620004e6565b81600181146200046f57600281146200047a576200049a565b6001915050620004e6565b60ff8411156200048e576200048e620003d7565b50506001821b620004e6565b5060208310610133831016604e8410600b8410161715620004bf575081810a620004e6565b620004cb8383620003ed565b8060001904821115620004e257620004e2620003d7565b0290505b92915050565b60006200026060ff84168362000436565b8082028115828204841417620004e657620004e6620003d7565b80820180821115620004e657620004e6620003d7565b612384806200053d6000396000f3fe6080604052600436106102fd5760003560e01c80636eefec111161018f578063cf4bfd6a116100e1578063ec71ef891161008a578063f4e0d9ac11610064578063f4e0d9ac14610895578063f57df22e146108b5578063f6d7eade146108d557600080fd5b8063ec71ef891461083b578063ee753dec1461085b578063f4ab29281461087b57600080fd5b8063d83a2bf3116100bb578063d83a2bf3146107b5578063dd62ed3e146107d5578063e43252d71461081b57600080fd5b8063cf4bfd6a14610778578063d1cabc3514610798578063d7bb99ba146107ad57600080fd5b806395d89b4111610143578063a9059cbb1161011d578063a9059cbb1461070b578063b70f21c71461072b578063be07d17d1461075857600080fd5b806395d89b41146106b65780639dc29fac146106cb578063a457c2d7146106eb57600080fd5b80638392546011610174578063839254601461064f57806385b1fb8e1461066f5780638da5cb5b1461068f57600080fd5b80636eefec11146105f957806370a082311461061957600080fd5b806332cb6b0c116102535780634626402b116101fc5780636171ba64116101d65780636171ba64146105a557806365acacfe146105c557806368f58b03146105e457600080fd5b80634626402b1461055057806346c586c21461057057806348c54b9d1461059057600080fd5b80633af32abf1161022d5780633af32abf146104e057806340c10f191461051057806341cb87fc1461053057600080fd5b806332cb6b0c1461047d57806339509351146104935780633af0dbc1146104b357600080fd5b80631690bb4e116102b55780631d057bd91161028f5780631d057bd91461042157806323b872dd14610441578063313ce5671461046157600080fd5b80631690bb4e146103b457806318160ddd146103d45780631b9631fc146103e957600080fd5b8063095ea7b3116102e6578063095ea7b31461034d5780630ff85a331461037d57806310bf60291461039f57600080fd5b8063023f41471461030257806306fdde031461032b575b600080fd5b34801561030e57600080fd5b5061031860065481565b6040519081526020015b60405180910390f35b34801561033757600080fd5b506103406108f5565b604051610322919061204a565b34801561035957600080fd5b5061036d6103683660046120ad565b610987565b6040519015158152602001610322565b34801561038957600080fd5b5061039d6103983660046120d9565b6109a1565b005b3480156103ab57600080fd5b5061039d610a5d565b3480156103c057600080fd5b5061039d6103cf3660046120d9565b610af3565b3480156103e057600080fd5b50600254610318565b3480156103f557600080fd5b50600a54610409906001600160a01b031681565b6040516001600160a01b039091168152602001610322565b34801561042d57600080fd5b5061039d61043c3660046120ad565b610c95565b34801561044d57600080fd5b5061036d61045c3660046120fd565b610d23565b34801561046d57600080fd5b5060405160128152602001610322565b34801561048957600080fd5b5061031860055481565b34801561049f57600080fd5b5061036d6104ae3660046120ad565b610d47565b3480156104bf57600080fd5b506103186104ce3660046120d9565b60146020526000908152604090205481565b3480156104ec57600080fd5b5061036d6104fb3660046120d9565b60156020526000908152604090205460ff1681565b34801561051c57600080fd5b5061039d61052b3660046120ad565b610d88565b34801561053c57600080fd5b5061039d61054b3660046120d9565b610eb0565b34801561055c57600080fd5b50600854610409906001600160a01b031681565b34801561057c57600080fd5b50600e54610409906001600160a01b031681565b34801561059c57600080fd5b5061039d610f67565b3480156105b157600080fd5b5061039d6105c03660046120d9565b611086565b3480156105d157600080fd5b5060075461036d90610100900460ff1681565b3480156105f057600080fd5b50610318600181565b34801561060557600080fd5b50600b54610409906001600160a01b031681565b34801561062557600080fd5b506103186106343660046120d9565b6001600160a01b031660009081526020819052604090205490565b34801561065b57600080fd5b5061039d61066a3660046120d9565b61113d565b34801561067b57600080fd5b5061039d61068a3660046120ad565b6111f4565b34801561069b57600080fd5b5060075461040990630100000090046001600160a01b031681565b3480156106c257600080fd5b506103406112b6565b3480156106d757600080fd5b5061039d6106e63660046120ad565b6112c5565b3480156106f757600080fd5b5061036d6107063660046120ad565b611332565b34801561071757600080fd5b5061036d6107263660046120ad565b6113dc565b34801561073757600080fd5b506103186107463660046120d9565b60136020526000908152604090205481565b34801561076457600080fd5b5060075461036d9062010000900460ff1681565b34801561078457600080fd5b50600c54610409906001600160a01b031681565b3480156107a457600080fd5b5061039d6113ea565b61039d611475565b3480156107c157600080fd5b5061036d6107d03660046120fd565b6115bf565b3480156107e157600080fd5b506103186107f036600461213e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b34801561082757600080fd5b5061039d6108363660046120d9565b6116a4565b34801561084757600080fd5b5061039d6108563660046120d9565b611716565b34801561086757600080fd5b50600d54610409906001600160a01b031681565b34801561088757600080fd5b5060075461036d9060ff1681565b3480156108a157600080fd5b5061039d6108b03660046120d9565b6117cd565b3480156108c157600080fd5b50601254610409906001600160a01b031681565b3480156108e157600080fd5b50600954610409906001600160a01b031681565b60606003805461090490612177565b80601f016020809104026020016040519081016040528092919081815260200182805461093090612177565b801561097d5780601f106109525761010080835404028352916020019161097d565b820191906000526020600020905b81548152906001019060200180831161096057829003601f168201915b5050505050905090565b600033610995818585611884565b60019150505b92915050565b600754630100000090046001600160a01b031633146109f45760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064015b60405180910390fd5b600d546001600160a01b031615610a3b5760405162461bcd60e51b815260206004820152600b60248201526a57524954455f4f4e43452160a81b60448201526064016109eb565b600d80546001600160a01b0319166001600160a01b0392909216919091179055565b600754630100000090046001600160a01b03163314610aab5760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b6007805462ff0000198116620100009182900460ff16159091021790556040517fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d390600090a1565b600754630100000090046001600160a01b03163314610b415760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b600754610100900460ff1615610b8d5760405162461bcd60e51b8152602060048201526011602482015270046554e44535f4d4f5645445f544f5f4c5607c1b60448201526064016109eb565b6007805461ff001916610100179055600654600090610bad9060646121c7565b9050610bba3083836119dc565b6006546040517f6e553f65000000000000000000000000000000000000000000000000000000008152600481018390523060248201526001600160a01b03841691636e553f65916044016000604051808303818588803b158015610c1d57600080fd5b505af1158015610c31573d6000803e3d6000fd5b5050505050816001600160a01b0316632770d9016040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610c7157600080fd5b505af1158015610c85573d6000803e3d6000fd5b50505050610c91611bf5565b5050565b600a546001600160a01b0316331480610cb85750600b546001600160a01b031633145b80610ccd5750600c546001600160a01b031633145b610d195760405162461bcd60e51b815260206004820152600d60248201527f4d41504c454e46545f4f4e4c590000000000000000000000000000000000000060448201526064016109eb565b610c918282611c51565b600033610d31858285611dd6565b610d3c858585611e62565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190610995908290869086905b610d8391906121de565b611884565b600754630100000090046001600160a01b03163314610dd65760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b6001600160a01b038216610e2c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016109eb565b60055481610e3960025490565b610e4391906121de565b1115610e915760405162461bcd60e51b815260206004820152601060248201527f41424f56455f4d41585f535550504c590000000000000000000000000000000060448201526064016109eb565b610c9182610ea16012600a6122d5565b610eab90846121c7565b611ec8565b600754630100000090046001600160a01b03163314610efe5760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b6009546001600160a01b031615610f455760405162461bcd60e51b815260206004820152600b60248201526a57524954455f4f4e43452160a81b60448201526064016109eb565b600980546001600160a01b0319166001600160a01b0392909216919091179055565b60075460ff1615610fba5760405162461bcd60e51b815260206004820152600f60248201527f434f4e54524143545f504155534544000000000000000000000000000000000060448201526064016109eb565b600754610100900460ff16156110065760405162461bcd60e51b8152602060048201526011602482015270046554e44535f4d4f5645445f544f5f4c5607c1b60448201526064016109eb565b336000908152601360205260409020546110625760405162461bcd60e51b815260206004820152601260248201527f4e4f5f415641494c41424c455f46554e4453000000000000000000000000000060448201526064016109eb565b336000818152601360205260408120805491905590611083903090836119dc565b50565b600754630100000090046001600160a01b031633146110d45760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b600c546001600160a01b03161561111b5760405162461bcd60e51b815260206004820152600b60248201526a57524954455f4f4e43452160a81b60448201526064016109eb565b600c80546001600160a01b0319166001600160a01b0392909216919091179055565b600754630100000090046001600160a01b0316331461118b5760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b600a546001600160a01b0316156111d25760405162461bcd60e51b815260206004820152600b60248201526a57524954455f4f4e43452160a81b60448201526064016109eb565b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b600e80546001600160a01b0319166001600160a01b038416179055600f81905560006112206064611fa7565b9050601154811161128557600854600e54600f5461124b926001600160a01b039081169216906119dc565b604051600181527fe3bf9628d38f54d735cbc07db121eaef41935c08353bba9b8c8772d4ebba2d99906020015b60405180910390a1505050565b604051600081527fe3bf9628d38f54d735cbc07db121eaef41935c08353bba9b8c8772d4ebba2d9990602001611278565b60606004805461090490612177565b600754630100000090046001600160a01b031633146113135760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b610c91826113236012600a6122d5565b61132d90846121c7565b611c51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156113cf5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016109eb565b610d3c8286868403611884565b600033610995818585611e62565b600754630100000090046001600160a01b031633146114385760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b6007805460ff19811660ff909116151790556040517fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d390600090a1565b60075460ff16156114c85760405162461bcd60e51b815260206004820152600f60248201527f434f4e54524143545f504155534544000000000000000000000000000000000060448201526064016109eb565b600754610100900460ff16156115145760405162461bcd60e51b8152602060048201526011602482015270046554e44535f4d4f5645445f544f5f4c5607c1b60448201526064016109eb565b60006115213460646121c7565b336000908152601360205260408120805492935083929091906115459084906121de565b909155505033600090815260146020526040812080543492906115699084906121de565b92505081905550346006600082825461158291906121de565b909155505060405181815233907f745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a9060200160405180910390a250565b6009546000906001600160a01b03163314806115e55750600a546001600160a01b031633145b806115fa5750600b546001600160a01b031633145b8061160f5750600c546001600160a01b031633145b806116245750600d546001600160a01b031633145b6116705760405162461bcd60e51b815260206004820152601460248201527f524f555445525f4f525f4d41504c455f4f4e4c5900000000000000000000000060448201526064016109eb565b33600090815260016020908152604080832030845290915290205461169a90859085908590610d79565b5060019392505050565b600754630100000090046001600160a01b031633146116f25760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b6001600160a01b03166000908152601560205260409020805460ff19166001179055565b600754630100000090046001600160a01b031633146117645760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b600b546001600160a01b0316156117ab5760405162461bcd60e51b815260206004820152600b60248201526a57524954455f4f4e43452160a81b60448201526064016109eb565b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b600754630100000090046001600160a01b0316331461181b5760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b6012546001600160a01b0316156118625760405162461bcd60e51b815260206004820152600b60248201526a57524954455f4f4e43452160a81b60448201526064016109eb565b601280546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0383166118ff5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016109eb565b6001600160a01b03821661197b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016109eb565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316611a585760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016109eb565b6001600160a01b038216611ad45760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016109eb565b6001600160a01b03831660009081526020819052604090205481811015611b635760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016109eb565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290611b9a9084906121de565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611be691815260200190565b60405180910390a35b50505050565b611bfd612014565b306000818152602081905260409020546008549091611c25916001600160a01b0316836119dc565b6040517fa01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e190600090a150565b6001600160a01b038216611ccd5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016109eb565b6001600160a01b03821660009081526020819052604090205481811015611d5c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016109eb565b6001600160a01b0383166000908152602081905260408120838303905560028054849290611d8b9084906122e4565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114611bef5781811015611e555760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016109eb565b611bef8484848403611884565b60075460009062010000900460ff1615611e90576064611e838360016121c7565b611e8d919061230d565b90505b6000611e9c82846122e4565b9050611ea98585836119dc565b600854611ec19086906001600160a01b0316846119dc565b5050505050565b6001600160a01b038216611f1e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016109eb565b8060026000828254611f3091906121de565b90915550506001600160a01b03821660009081526020819052604081208054839290611f5d9084906121de565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6010805460009182611fb883612321565b9091555050601054604080514260208201526bffffffffffffffffffffffff193360601b1691810191909152605481019190915282906074016040516020818303038152906040528051906020012060001c61099b919061233a565b60006120226012600a6122d5565b61202f90620493e06121c7565b6012549091506110839030906001600160a01b0316836119dc565b600060208083528351808285015260005b818110156120775785810183015185820160400152820161205b565b506000604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b038116811461108357600080fd5b600080604083850312156120c057600080fd5b82356120cb81612098565b946020939093013593505050565b6000602082840312156120eb57600080fd5b81356120f681612098565b9392505050565b60008060006060848603121561211257600080fd5b833561211d81612098565b9250602084013561212d81612098565b929592945050506040919091013590565b6000806040838503121561215157600080fd5b823561215c81612098565b9150602083013561216c81612098565b809150509250929050565b600181811c9082168061218b57607f821691505b6020821081036121ab57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761099b5761099b6121b1565b8082018082111561099b5761099b6121b1565b600181815b8085111561222c578160001904821115612212576122126121b1565b8085161561221f57918102915b93841c93908002906121f6565b509250929050565b6000826122435750600161099b565b816122505750600061099b565b816001811461226657600281146122705761228c565b600191505061099b565b60ff841115612281576122816121b1565b50506001821b61099b565b5060208310610133831016604e8410600b84101617156122af575081810a61099b565b6122b983836121f1565b80600019048211156122cd576122cd6121b1565b029392505050565b60006120f660ff841683612234565b8181038181111561099b5761099b6121b1565b634e487b7160e01b600052601260045260246000fd5b60008261231c5761231c6122f7565b500490565b600060018201612333576123336121b1565b5060010190565b600082612349576123496122f7565b50069056fea26469706673582212205f4c87a3ce8d3306430c7eb92550b42ebf4c11621d1540dfc7df9e67c113a48e64736f6c63430008110033",
	"deployedBytecode": "0x6080604052600436106102fd5760003560e01c80636eefec111161018f578063cf4bfd6a116100e1578063ec71ef891161008a578063f4e0d9ac11610064578063f4e0d9ac14610895578063f57df22e146108b5578063f6d7eade146108d557600080fd5b8063ec71ef891461083b578063ee753dec1461085b578063f4ab29281461087b57600080fd5b8063d83a2bf3116100bb578063d83a2bf3146107b5578063dd62ed3e146107d5578063e43252d71461081b57600080fd5b8063cf4bfd6a14610778578063d1cabc3514610798578063d7bb99ba146107ad57600080fd5b806395d89b4111610143578063a9059cbb1161011d578063a9059cbb1461070b578063b70f21c71461072b578063be07d17d1461075857600080fd5b806395d89b41146106b65780639dc29fac146106cb578063a457c2d7146106eb57600080fd5b80638392546011610174578063839254601461064f57806385b1fb8e1461066f5780638da5cb5b1461068f57600080fd5b80636eefec11146105f957806370a082311461061957600080fd5b806332cb6b0c116102535780634626402b116101fc5780636171ba64116101d65780636171ba64146105a557806365acacfe146105c557806368f58b03146105e457600080fd5b80634626402b1461055057806346c586c21461057057806348c54b9d1461059057600080fd5b80633af32abf1161022d5780633af32abf146104e057806340c10f191461051057806341cb87fc1461053057600080fd5b806332cb6b0c1461047d57806339509351146104935780633af0dbc1146104b357600080fd5b80631690bb4e116102b55780631d057bd91161028f5780631d057bd91461042157806323b872dd14610441578063313ce5671461046157600080fd5b80631690bb4e146103b457806318160ddd146103d45780631b9631fc146103e957600080fd5b8063095ea7b3116102e6578063095ea7b31461034d5780630ff85a331461037d57806310bf60291461039f57600080fd5b8063023f41471461030257806306fdde031461032b575b600080fd5b34801561030e57600080fd5b5061031860065481565b6040519081526020015b60405180910390f35b34801561033757600080fd5b506103406108f5565b604051610322919061204a565b34801561035957600080fd5b5061036d6103683660046120ad565b610987565b6040519015158152602001610322565b34801561038957600080fd5b5061039d6103983660046120d9565b6109a1565b005b3480156103ab57600080fd5b5061039d610a5d565b3480156103c057600080fd5b5061039d6103cf3660046120d9565b610af3565b3480156103e057600080fd5b50600254610318565b3480156103f557600080fd5b50600a54610409906001600160a01b031681565b6040516001600160a01b039091168152602001610322565b34801561042d57600080fd5b5061039d61043c3660046120ad565b610c95565b34801561044d57600080fd5b5061036d61045c3660046120fd565b610d23565b34801561046d57600080fd5b5060405160128152602001610322565b34801561048957600080fd5b5061031860055481565b34801561049f57600080fd5b5061036d6104ae3660046120ad565b610d47565b3480156104bf57600080fd5b506103186104ce3660046120d9565b60146020526000908152604090205481565b3480156104ec57600080fd5b5061036d6104fb3660046120d9565b60156020526000908152604090205460ff1681565b34801561051c57600080fd5b5061039d61052b3660046120ad565b610d88565b34801561053c57600080fd5b5061039d61054b3660046120d9565b610eb0565b34801561055c57600080fd5b50600854610409906001600160a01b031681565b34801561057c57600080fd5b50600e54610409906001600160a01b031681565b34801561059c57600080fd5b5061039d610f67565b3480156105b157600080fd5b5061039d6105c03660046120d9565b611086565b3480156105d157600080fd5b5060075461036d90610100900460ff1681565b3480156105f057600080fd5b50610318600181565b34801561060557600080fd5b50600b54610409906001600160a01b031681565b34801561062557600080fd5b506103186106343660046120d9565b6001600160a01b031660009081526020819052604090205490565b34801561065b57600080fd5b5061039d61066a3660046120d9565b61113d565b34801561067b57600080fd5b5061039d61068a3660046120ad565b6111f4565b34801561069b57600080fd5b5060075461040990630100000090046001600160a01b031681565b3480156106c257600080fd5b506103406112b6565b3480156106d757600080fd5b5061039d6106e63660046120ad565b6112c5565b3480156106f757600080fd5b5061036d6107063660046120ad565b611332565b34801561071757600080fd5b5061036d6107263660046120ad565b6113dc565b34801561073757600080fd5b506103186107463660046120d9565b60136020526000908152604090205481565b34801561076457600080fd5b5060075461036d9062010000900460ff1681565b34801561078457600080fd5b50600c54610409906001600160a01b031681565b3480156107a457600080fd5b5061039d6113ea565b61039d611475565b3480156107c157600080fd5b5061036d6107d03660046120fd565b6115bf565b3480156107e157600080fd5b506103186107f036600461213e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b34801561082757600080fd5b5061039d6108363660046120d9565b6116a4565b34801561084757600080fd5b5061039d6108563660046120d9565b611716565b34801561086757600080fd5b50600d54610409906001600160a01b031681565b34801561088757600080fd5b5060075461036d9060ff1681565b3480156108a157600080fd5b5061039d6108b03660046120d9565b6117cd565b3480156108c157600080fd5b50601254610409906001600160a01b031681565b3480156108e157600080fd5b50600954610409906001600160a01b031681565b60606003805461090490612177565b80601f016020809104026020016040519081016040528092919081815260200182805461093090612177565b801561097d5780601f106109525761010080835404028352916020019161097d565b820191906000526020600020905b81548152906001019060200180831161096057829003601f168201915b5050505050905090565b600033610995818585611884565b60019150505b92915050565b600754630100000090046001600160a01b031633146109f45760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064015b60405180910390fd5b600d546001600160a01b031615610a3b5760405162461bcd60e51b815260206004820152600b60248201526a57524954455f4f4e43452160a81b60448201526064016109eb565b600d80546001600160a01b0319166001600160a01b0392909216919091179055565b600754630100000090046001600160a01b03163314610aab5760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b6007805462ff0000198116620100009182900460ff16159091021790556040517fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d390600090a1565b600754630100000090046001600160a01b03163314610b415760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b600754610100900460ff1615610b8d5760405162461bcd60e51b8152602060048201526011602482015270046554e44535f4d4f5645445f544f5f4c5607c1b60448201526064016109eb565b6007805461ff001916610100179055600654600090610bad9060646121c7565b9050610bba3083836119dc565b6006546040517f6e553f65000000000000000000000000000000000000000000000000000000008152600481018390523060248201526001600160a01b03841691636e553f65916044016000604051808303818588803b158015610c1d57600080fd5b505af1158015610c31573d6000803e3d6000fd5b5050505050816001600160a01b0316632770d9016040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610c7157600080fd5b505af1158015610c85573d6000803e3d6000fd5b50505050610c91611bf5565b5050565b600a546001600160a01b0316331480610cb85750600b546001600160a01b031633145b80610ccd5750600c546001600160a01b031633145b610d195760405162461bcd60e51b815260206004820152600d60248201527f4d41504c454e46545f4f4e4c590000000000000000000000000000000000000060448201526064016109eb565b610c918282611c51565b600033610d31858285611dd6565b610d3c858585611e62565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190610995908290869086905b610d8391906121de565b611884565b600754630100000090046001600160a01b03163314610dd65760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b6001600160a01b038216610e2c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016109eb565b60055481610e3960025490565b610e4391906121de565b1115610e915760405162461bcd60e51b815260206004820152601060248201527f41424f56455f4d41585f535550504c590000000000000000000000000000000060448201526064016109eb565b610c9182610ea16012600a6122d5565b610eab90846121c7565b611ec8565b600754630100000090046001600160a01b03163314610efe5760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b6009546001600160a01b031615610f455760405162461bcd60e51b815260206004820152600b60248201526a57524954455f4f4e43452160a81b60448201526064016109eb565b600980546001600160a01b0319166001600160a01b0392909216919091179055565b60075460ff1615610fba5760405162461bcd60e51b815260206004820152600f60248201527f434f4e54524143545f504155534544000000000000000000000000000000000060448201526064016109eb565b600754610100900460ff16156110065760405162461bcd60e51b8152602060048201526011602482015270046554e44535f4d4f5645445f544f5f4c5607c1b60448201526064016109eb565b336000908152601360205260409020546110625760405162461bcd60e51b815260206004820152601260248201527f4e4f5f415641494c41424c455f46554e4453000000000000000000000000000060448201526064016109eb565b336000818152601360205260408120805491905590611083903090836119dc565b50565b600754630100000090046001600160a01b031633146110d45760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b600c546001600160a01b03161561111b5760405162461bcd60e51b815260206004820152600b60248201526a57524954455f4f4e43452160a81b60448201526064016109eb565b600c80546001600160a01b0319166001600160a01b0392909216919091179055565b600754630100000090046001600160a01b0316331461118b5760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b600a546001600160a01b0316156111d25760405162461bcd60e51b815260206004820152600b60248201526a57524954455f4f4e43452160a81b60448201526064016109eb565b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b600e80546001600160a01b0319166001600160a01b038416179055600f81905560006112206064611fa7565b9050601154811161128557600854600e54600f5461124b926001600160a01b039081169216906119dc565b604051600181527fe3bf9628d38f54d735cbc07db121eaef41935c08353bba9b8c8772d4ebba2d99906020015b60405180910390a1505050565b604051600081527fe3bf9628d38f54d735cbc07db121eaef41935c08353bba9b8c8772d4ebba2d9990602001611278565b60606004805461090490612177565b600754630100000090046001600160a01b031633146113135760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b610c91826113236012600a6122d5565b61132d90846121c7565b611c51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156113cf5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016109eb565b610d3c8286868403611884565b600033610995818585611e62565b600754630100000090046001600160a01b031633146114385760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b6007805460ff19811660ff909116151790556040517fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d390600090a1565b60075460ff16156114c85760405162461bcd60e51b815260206004820152600f60248201527f434f4e54524143545f504155534544000000000000000000000000000000000060448201526064016109eb565b600754610100900460ff16156115145760405162461bcd60e51b8152602060048201526011602482015270046554e44535f4d4f5645445f544f5f4c5607c1b60448201526064016109eb565b60006115213460646121c7565b336000908152601360205260408120805492935083929091906115459084906121de565b909155505033600090815260146020526040812080543492906115699084906121de565b92505081905550346006600082825461158291906121de565b909155505060405181815233907f745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a9060200160405180910390a250565b6009546000906001600160a01b03163314806115e55750600a546001600160a01b031633145b806115fa5750600b546001600160a01b031633145b8061160f5750600c546001600160a01b031633145b806116245750600d546001600160a01b031633145b6116705760405162461bcd60e51b815260206004820152601460248201527f524f555445525f4f525f4d41504c455f4f4e4c5900000000000000000000000060448201526064016109eb565b33600090815260016020908152604080832030845290915290205461169a90859085908590610d79565b5060019392505050565b600754630100000090046001600160a01b031633146116f25760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b6001600160a01b03166000908152601560205260409020805460ff19166001179055565b600754630100000090046001600160a01b031633146117645760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b600b546001600160a01b0316156117ab5760405162461bcd60e51b815260206004820152600b60248201526a57524954455f4f4e43452160a81b60448201526064016109eb565b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b600754630100000090046001600160a01b0316331461181b5760405162461bcd60e51b815260206004820152600a6024820152694f574e45525f4f4e4c5960b01b60448201526064016109eb565b6012546001600160a01b0316156118625760405162461bcd60e51b815260206004820152600b60248201526a57524954455f4f4e43452160a81b60448201526064016109eb565b601280546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0383166118ff5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016109eb565b6001600160a01b03821661197b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016109eb565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038316611a585760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016109eb565b6001600160a01b038216611ad45760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016109eb565b6001600160a01b03831660009081526020819052604090205481811015611b635760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016109eb565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290611b9a9084906121de565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611be691815260200190565b60405180910390a35b50505050565b611bfd612014565b306000818152602081905260409020546008549091611c25916001600160a01b0316836119dc565b6040517fa01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e190600090a150565b6001600160a01b038216611ccd5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016109eb565b6001600160a01b03821660009081526020819052604090205481811015611d5c5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016109eb565b6001600160a01b0383166000908152602081905260408120838303905560028054849290611d8b9084906122e4565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114611bef5781811015611e555760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016109eb565b611bef8484848403611884565b60075460009062010000900460ff1615611e90576064611e838360016121c7565b611e8d919061230d565b90505b6000611e9c82846122e4565b9050611ea98585836119dc565b600854611ec19086906001600160a01b0316846119dc565b5050505050565b6001600160a01b038216611f1e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016109eb565b8060026000828254611f3091906121de565b90915550506001600160a01b03821660009081526020819052604081208054839290611f5d9084906121de565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6010805460009182611fb883612321565b9091555050601054604080514260208201526bffffffffffffffffffffffff193360601b1691810191909152605481019190915282906074016040516020818303038152906040528051906020012060001c61099b919061233a565b60006120226012600a6122d5565b61202f90620493e06121c7565b6012549091506110839030906001600160a01b0316836119dc565b600060208083528351808285015260005b818110156120775785810183015185820160400152820161205b565b506000604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b038116811461108357600080fd5b600080604083850312156120c057600080fd5b82356120cb81612098565b946020939093013593505050565b6000602082840312156120eb57600080fd5b81356120f681612098565b9392505050565b60008060006060848603121561211257600080fd5b833561211d81612098565b9250602084013561212d81612098565b929592945050506040919091013590565b6000806040838503121561215157600080fd5b823561215c81612098565b9150602083013561216c81612098565b809150509250929050565b600181811c9082168061218b57607f821691505b6020821081036121ab57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761099b5761099b6121b1565b8082018082111561099b5761099b6121b1565b600181815b8085111561222c578160001904821115612212576122126121b1565b8085161561221f57918102915b93841c93908002906121f6565b509250929050565b6000826122435750600161099b565b816122505750600061099b565b816001811461226657600281146122705761228c565b600191505061099b565b60ff841115612281576122816121b1565b50506001821b61099b565b5060208310610133831016604e8410600b84101617156122af575081810a61099b565b6122b983836121f1565b80600019048211156122cd576122cd6121b1565b029392505050565b60006120f660ff841683612234565b8181038181111561099b5761099b6121b1565b634e487b7160e01b600052601260045260246000fd5b60008261231c5761231c6122f7565b500490565b600060018201612333576123336121b1565b5060010190565b600082612349576123496122f7565b50069056fea26469706673582212205f4c87a3ce8d3306430c7eb92550b42ebf4c11621d1540dfc7df9e67c113a48e64736f6c63430008110033",
	"immutableReferences": {},
	"generatedSources": [
	  {
		"ast": {
		  "nodeType": "YulBlock",
		  "src": "0:5395:38",
		  "statements": [
			{
			  "nodeType": "YulBlock",
			  "src": "6:3:38",
			  "statements": []
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "103:209:38",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "149:16:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "158:1:38",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "161:1:38",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "151:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "151:12:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "151:12:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "124:7:38"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "133:9:38"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "120:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "120:23:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "145:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "116:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "116:32:38"
					},
					"nodeType": "YulIf",
					"src": "113:52:38"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "174:29:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "193:9:38"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "187:5:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "187:16:38"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "178:5:38",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "266:16:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "275:1:38",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "278:1:38",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "268:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "268:12:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "268:12:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "225:5:38"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "236:5:38"
								},
								{
								  "arguments": [
									{
									  "arguments": [
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "251:3:38",
										  "type": "",
										  "value": "160"
										},
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "256:1:38",
										  "type": "",
										  "value": "1"
										}
									  ],
									  "functionName": {
										"name": "shl",
										"nodeType": "YulIdentifier",
										"src": "247:3:38"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "247:11:38"
									},
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "260:1:38",
									  "type": "",
									  "value": "1"
									}
								  ],
								  "functionName": {
									"name": "sub",
									"nodeType": "YulIdentifier",
									"src": "243:3:38"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "243:19:38"
								}
							  ],
							  "functionName": {
								"name": "and",
								"nodeType": "YulIdentifier",
								"src": "232:3:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "232:31:38"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "222:2:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "222:42:38"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "215:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "215:50:38"
					},
					"nodeType": "YulIf",
					"src": "212:70:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "291:15:38",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "301:5:38"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "291:6:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_address_payable_fromMemory",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "69:9:38",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "80:7:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "92:6:38",
				  "type": ""
				}
			  ],
			  "src": "14:298:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "349:95:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "366:1:38",
						  "type": "",
						  "value": "0"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "373:3:38",
							  "type": "",
							  "value": "224"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "378:10:38",
							  "type": "",
							  "value": "0x4e487b71"
							}
						  ],
						  "functionName": {
							"name": "shl",
							"nodeType": "YulIdentifier",
							"src": "369:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "369:20:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "359:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "359:31:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "359:31:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "406:1:38",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "409:4:38",
						  "type": "",
						  "value": "0x41"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "399:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "399:15:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "399:15:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "430:1:38",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "433:4:38",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "423:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "423:15:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "423:15:38"
				  }
				]
			  },
			  "name": "panic_error_0x41",
			  "nodeType": "YulFunctionDefinition",
			  "src": "317:127:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "504:325:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "514:22:38",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "528:1:38",
						  "type": "",
						  "value": "1"
						},
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "531:4:38"
						}
					  ],
					  "functionName": {
						"name": "shr",
						"nodeType": "YulIdentifier",
						"src": "524:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "524:12:38"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "514:6:38"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "545:38:38",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "575:4:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "581:1:38",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "571:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "571:12:38"
					},
					"variables": [
					  {
						"name": "outOfPlaceEncoding",
						"nodeType": "YulTypedName",
						"src": "549:18:38",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "622:31:38",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "624:27:38",
						  "value": {
							"arguments": [
							  {
								"name": "length",
								"nodeType": "YulIdentifier",
								"src": "638:6:38"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "646:4:38",
								"type": "",
								"value": "0x7f"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "634:3:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "634:17:38"
						  },
						  "variableNames": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "624:6:38"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "602:18:38"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "595:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "595:26:38"
					},
					"nodeType": "YulIf",
					"src": "592:61:38"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "712:111:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "733:1:38",
								"type": "",
								"value": "0"
							  },
							  {
								"arguments": [
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "740:3:38",
									"type": "",
									"value": "224"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "745:10:38",
									"type": "",
									"value": "0x4e487b71"
								  }
								],
								"functionName": {
								  "name": "shl",
								  "nodeType": "YulIdentifier",
								  "src": "736:3:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "736:20:38"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "726:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "726:31:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "726:31:38"
						},
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "777:1:38",
								"type": "",
								"value": "4"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "780:4:38",
								"type": "",
								"value": "0x22"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "770:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "770:15:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "770:15:38"
						},
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "805:1:38",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "808:4:38",
								"type": "",
								"value": "0x24"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "798:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "798:15:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "798:15:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "668:18:38"
						},
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "691:6:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "699:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "lt",
							"nodeType": "YulIdentifier",
							"src": "688:2:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "688:14:38"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "665:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "665:38:38"
					},
					"nodeType": "YulIf",
					"src": "662:161:38"
				  }
				]
			  },
			  "name": "extract_byte_array_length",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "484:4:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "493:6:38",
				  "type": ""
				}
			  ],
			  "src": "449:380:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "890:65:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "907:1:38",
						  "type": "",
						  "value": "0"
						},
						{
						  "name": "ptr",
						  "nodeType": "YulIdentifier",
						  "src": "910:3:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "900:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "900:14:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "900:14:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "923:26:38",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "941:1:38",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "944:4:38",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "keccak256",
						"nodeType": "YulIdentifier",
						"src": "931:9:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "931:18:38"
					},
					"variableNames": [
					  {
						"name": "data",
						"nodeType": "YulIdentifier",
						"src": "923:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "array_dataslot_string_storage",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "ptr",
				  "nodeType": "YulTypedName",
				  "src": "873:3:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "881:4:38",
				  "type": ""
				}
			  ],
			  "src": "834:121:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1041:464:38",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1074:425:38",
					  "statements": [
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "1088:11:38",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "1098:1:38",
							"type": "",
							"value": "0"
						  },
						  "variables": [
							{
							  "name": "_1",
							  "nodeType": "YulTypedName",
							  "src": "1092:2:38",
							  "type": ""
							}
						  ]
						},
						{
						  "expression": {
							"arguments": [
							  {
								"name": "_1",
								"nodeType": "YulIdentifier",
								"src": "1119:2:38"
							  },
							  {
								"name": "array",
								"nodeType": "YulIdentifier",
								"src": "1123:5:38"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "1112:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "1112:17:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1112:17:38"
						},
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "1142:31:38",
						  "value": {
							"arguments": [
							  {
								"name": "_1",
								"nodeType": "YulIdentifier",
								"src": "1164:2:38"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1168:4:38",
								"type": "",
								"value": "0x20"
							  }
							],
							"functionName": {
							  "name": "keccak256",
							  "nodeType": "YulIdentifier",
							  "src": "1154:9:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "1154:19:38"
						  },
						  "variables": [
							{
							  "name": "data",
							  "nodeType": "YulTypedName",
							  "src": "1146:4:38",
							  "type": ""
							}
						  ]
						},
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "1186:57:38",
						  "value": {
							"arguments": [
							  {
								"name": "data",
								"nodeType": "YulIdentifier",
								"src": "1209:4:38"
							  },
							  {
								"arguments": [
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "1219:1:38",
									"type": "",
									"value": "5"
								  },
								  {
									"arguments": [
									  {
										"name": "startIndex",
										"nodeType": "YulIdentifier",
										"src": "1226:10:38"
									  },
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "1238:2:38",
										"type": "",
										"value": "31"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "1222:3:38"
									},
									"nodeType": "YulFunctionCall",
									"src": "1222:19:38"
								  }
								],
								"functionName": {
								  "name": "shr",
								  "nodeType": "YulIdentifier",
								  "src": "1215:3:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "1215:27:38"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "1205:3:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "1205:38:38"
						  },
						  "variables": [
							{
							  "name": "deleteStart",
							  "nodeType": "YulTypedName",
							  "src": "1190:11:38",
							  "type": ""
							}
						  ]
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "1280:23:38",
							"statements": [
							  {
								"nodeType": "YulAssignment",
								"src": "1282:19:38",
								"value": {
								  "name": "data",
								  "nodeType": "YulIdentifier",
								  "src": "1297:4:38"
								},
								"variableNames": [
								  {
									"name": "deleteStart",
									"nodeType": "YulIdentifier",
									"src": "1282:11:38"
								  }
								]
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "startIndex",
								"nodeType": "YulIdentifier",
								"src": "1262:10:38"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1274:4:38",
								"type": "",
								"value": "0x20"
							  }
							],
							"functionName": {
							  "name": "lt",
							  "nodeType": "YulIdentifier",
							  "src": "1259:2:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "1259:20:38"
						  },
						  "nodeType": "YulIf",
						  "src": "1256:47:38"
						},
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "1316:41:38",
						  "value": {
							"arguments": [
							  {
								"name": "data",
								"nodeType": "YulIdentifier",
								"src": "1330:4:38"
							  },
							  {
								"arguments": [
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "1340:1:38",
									"type": "",
									"value": "5"
								  },
								  {
									"arguments": [
									  {
										"name": "len",
										"nodeType": "YulIdentifier",
										"src": "1347:3:38"
									  },
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "1352:2:38",
										"type": "",
										"value": "31"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "1343:3:38"
									},
									"nodeType": "YulFunctionCall",
									"src": "1343:12:38"
								  }
								],
								"functionName": {
								  "name": "shr",
								  "nodeType": "YulIdentifier",
								  "src": "1336:3:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "1336:20:38"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "1326:3:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "1326:31:38"
						  },
						  "variables": [
							{
							  "name": "_2",
							  "nodeType": "YulTypedName",
							  "src": "1320:2:38",
							  "type": ""
							}
						  ]
						},
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "1370:24:38",
						  "value": {
							"name": "deleteStart",
							"nodeType": "YulIdentifier",
							"src": "1383:11:38"
						  },
						  "variables": [
							{
							  "name": "start",
							  "nodeType": "YulTypedName",
							  "src": "1374:5:38",
							  "type": ""
							}
						  ]
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "1468:21:38",
							"statements": [
							  {
								"expression": {
								  "arguments": [
									{
									  "name": "start",
									  "nodeType": "YulIdentifier",
									  "src": "1477:5:38"
									},
									{
									  "name": "_1",
									  "nodeType": "YulIdentifier",
									  "src": "1484:2:38"
									}
								  ],
								  "functionName": {
									"name": "sstore",
									"nodeType": "YulIdentifier",
									"src": "1470:6:38"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "1470:17:38"
								},
								"nodeType": "YulExpressionStatement",
								"src": "1470:17:38"
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "start",
								"nodeType": "YulIdentifier",
								"src": "1418:5:38"
							  },
							  {
								"name": "_2",
								"nodeType": "YulIdentifier",
								"src": "1425:2:38"
							  }
							],
							"functionName": {
							  "name": "lt",
							  "nodeType": "YulIdentifier",
							  "src": "1415:2:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "1415:13:38"
						  },
						  "nodeType": "YulForLoop",
						  "post": {
							"nodeType": "YulBlock",
							"src": "1429:26:38",
							"statements": [
							  {
								"nodeType": "YulAssignment",
								"src": "1431:22:38",
								"value": {
								  "arguments": [
									{
									  "name": "start",
									  "nodeType": "YulIdentifier",
									  "src": "1444:5:38"
									},
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "1451:1:38",
									  "type": "",
									  "value": "1"
									}
								  ],
								  "functionName": {
									"name": "add",
									"nodeType": "YulIdentifier",
									"src": "1440:3:38"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "1440:13:38"
								},
								"variableNames": [
								  {
									"name": "start",
									"nodeType": "YulIdentifier",
									"src": "1431:5:38"
								  }
								]
							  }
							]
						  },
						  "pre": {
							"nodeType": "YulBlock",
							"src": "1411:3:38",
							"statements": []
						  },
						  "src": "1407:82:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "len",
						  "nodeType": "YulIdentifier",
						  "src": "1057:3:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1062:2:38",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "1054:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1054:11:38"
					},
					"nodeType": "YulIf",
					"src": "1051:448:38"
				  }
				]
			  },
			  "name": "clean_up_bytearray_end_slots_string_storage",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "array",
				  "nodeType": "YulTypedName",
				  "src": "1013:5:38",
				  "type": ""
				},
				{
				  "name": "len",
				  "nodeType": "YulTypedName",
				  "src": "1020:3:38",
				  "type": ""
				},
				{
				  "name": "startIndex",
				  "nodeType": "YulTypedName",
				  "src": "1025:10:38",
				  "type": ""
				}
			  ],
			  "src": "960:545:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1595:81:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1605:65:38",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "data",
							  "nodeType": "YulIdentifier",
							  "src": "1620:4:38"
							},
							{
							  "arguments": [
								{
								  "arguments": [
									{
									  "arguments": [
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "1638:1:38",
										  "type": "",
										  "value": "3"
										},
										{
										  "name": "len",
										  "nodeType": "YulIdentifier",
										  "src": "1641:3:38"
										}
									  ],
									  "functionName": {
										"name": "shl",
										"nodeType": "YulIdentifier",
										"src": "1634:3:38"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "1634:11:38"
									},
									{
									  "arguments": [
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "1651:1:38",
										  "type": "",
										  "value": "0"
										}
									  ],
									  "functionName": {
										"name": "not",
										"nodeType": "YulIdentifier",
										"src": "1647:3:38"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "1647:6:38"
									}
								  ],
								  "functionName": {
									"name": "shr",
									"nodeType": "YulIdentifier",
									"src": "1630:3:38"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "1630:24:38"
								}
							  ],
							  "functionName": {
								"name": "not",
								"nodeType": "YulIdentifier",
								"src": "1626:3:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1626:29:38"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "1616:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1616:40:38"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1662:1:38",
							  "type": "",
							  "value": "1"
							},
							{
							  "name": "len",
							  "nodeType": "YulIdentifier",
							  "src": "1665:3:38"
							}
						  ],
						  "functionName": {
							"name": "shl",
							"nodeType": "YulIdentifier",
							"src": "1658:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1658:11:38"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "1613:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1613:57:38"
					},
					"variableNames": [
					  {
						"name": "used",
						"nodeType": "YulIdentifier",
						"src": "1605:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "extract_used_part_and_set_length_of_short_byte_array",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "1572:4:38",
				  "type": ""
				},
				{
				  "name": "len",
				  "nodeType": "YulTypedName",
				  "src": "1578:3:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "used",
				  "nodeType": "YulTypedName",
				  "src": "1586:4:38",
				  "type": ""
				}
			  ],
			  "src": "1510:166:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1777:1256:38",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1787:24:38",
					"value": {
					  "arguments": [
						{
						  "name": "src",
						  "nodeType": "YulIdentifier",
						  "src": "1807:3:38"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "1801:5:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1801:10:38"
					},
					"variables": [
					  {
						"name": "newLen",
						"nodeType": "YulTypedName",
						"src": "1791:6:38",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1854:22:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x41",
							  "nodeType": "YulIdentifier",
							  "src": "1856:16:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "1856:18:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1856:18:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "newLen",
						  "nodeType": "YulIdentifier",
						  "src": "1826:6:38"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "1842:2:38",
								  "type": "",
								  "value": "64"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "1846:1:38",
								  "type": "",
								  "value": "1"
								}
							  ],
							  "functionName": {
								"name": "shl",
								"nodeType": "YulIdentifier",
								"src": "1838:3:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1838:10:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1850:1:38",
							  "type": "",
							  "value": "1"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "1834:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1834:18:38"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "1823:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1823:30:38"
					},
					"nodeType": "YulIf",
					"src": "1820:56:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "slot",
						  "nodeType": "YulIdentifier",
						  "src": "1929:4:38"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "slot",
								  "nodeType": "YulIdentifier",
								  "src": "1967:4:38"
								}
							  ],
							  "functionName": {
								"name": "sload",
								"nodeType": "YulIdentifier",
								"src": "1961:5:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1961:11:38"
							}
						  ],
						  "functionName": {
							"name": "extract_byte_array_length",
							"nodeType": "YulIdentifier",
							"src": "1935:25:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1935:38:38"
						},
						{
						  "name": "newLen",
						  "nodeType": "YulIdentifier",
						  "src": "1975:6:38"
						}
					  ],
					  "functionName": {
						"name": "clean_up_bytearray_end_slots_string_storage",
						"nodeType": "YulIdentifier",
						"src": "1885:43:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1885:97:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1885:97:38"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1991:18:38",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "2008:1:38",
					  "type": "",
					  "value": "0"
					},
					"variables": [
					  {
						"name": "srcOffset",
						"nodeType": "YulTypedName",
						"src": "1995:9:38",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2018:23:38",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "2037:4:38",
					  "type": "",
					  "value": "0x20"
					},
					"variables": [
					  {
						"name": "srcOffset_1",
						"nodeType": "YulTypedName",
						"src": "2022:11:38",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2050:24:38",
					"value": {
					  "name": "srcOffset_1",
					  "nodeType": "YulIdentifier",
					  "src": "2063:11:38"
					},
					"variableNames": [
					  {
						"name": "srcOffset",
						"nodeType": "YulIdentifier",
						"src": "2050:9:38"
					  }
					]
				  },
				  {
					"cases": [
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "2120:656:38",
						  "statements": [
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "2134:35:38",
							  "value": {
								"arguments": [
								  {
									"name": "newLen",
									"nodeType": "YulIdentifier",
									"src": "2153:6:38"
								  },
								  {
									"arguments": [
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "2165:2:38",
										"type": "",
										"value": "31"
									  }
									],
									"functionName": {
									  "name": "not",
									  "nodeType": "YulIdentifier",
									  "src": "2161:3:38"
									},
									"nodeType": "YulFunctionCall",
									"src": "2161:7:38"
								  }
								],
								"functionName": {
								  "name": "and",
								  "nodeType": "YulIdentifier",
								  "src": "2149:3:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "2149:20:38"
							  },
							  "variables": [
								{
								  "name": "loopEnd",
								  "nodeType": "YulTypedName",
								  "src": "2138:7:38",
								  "type": ""
								}
							  ]
							},
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "2182:49:38",
							  "value": {
								"arguments": [
								  {
									"name": "slot",
									"nodeType": "YulIdentifier",
									"src": "2226:4:38"
								  }
								],
								"functionName": {
								  "name": "array_dataslot_string_storage",
								  "nodeType": "YulIdentifier",
								  "src": "2196:29:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "2196:35:38"
							  },
							  "variables": [
								{
								  "name": "dstPtr",
								  "nodeType": "YulTypedName",
								  "src": "2186:6:38",
								  "type": ""
								}
							  ]
							},
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "2244:10:38",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2253:1:38",
								"type": "",
								"value": "0"
							  },
							  "variables": [
								{
								  "name": "i",
								  "nodeType": "YulTypedName",
								  "src": "2248:1:38",
								  "type": ""
								}
							  ]
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "2331:172:38",
								"statements": [
								  {
									"expression": {
									  "arguments": [
										{
										  "name": "dstPtr",
										  "nodeType": "YulIdentifier",
										  "src": "2356:6:38"
										},
										{
										  "arguments": [
											{
											  "arguments": [
												{
												  "name": "src",
												  "nodeType": "YulIdentifier",
												  "src": "2374:3:38"
												},
												{
												  "name": "srcOffset",
												  "nodeType": "YulIdentifier",
												  "src": "2379:9:38"
												}
											  ],
											  "functionName": {
												"name": "add",
												"nodeType": "YulIdentifier",
												"src": "2370:3:38"
											  },
											  "nodeType": "YulFunctionCall",
											  "src": "2370:19:38"
											}
										  ],
										  "functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "2364:5:38"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "2364:26:38"
										}
									  ],
									  "functionName": {
										"name": "sstore",
										"nodeType": "YulIdentifier",
										"src": "2349:6:38"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "2349:42:38"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2349:42:38"
								  },
								  {
									"nodeType": "YulAssignment",
									"src": "2408:24:38",
									"value": {
									  "arguments": [
										{
										  "name": "dstPtr",
										  "nodeType": "YulIdentifier",
										  "src": "2422:6:38"
										},
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "2430:1:38",
										  "type": "",
										  "value": "1"
										}
									  ],
									  "functionName": {
										"name": "add",
										"nodeType": "YulIdentifier",
										"src": "2418:3:38"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "2418:14:38"
									},
									"variableNames": [
									  {
										"name": "dstPtr",
										"nodeType": "YulIdentifier",
										"src": "2408:6:38"
									  }
									]
								  },
								  {
									"nodeType": "YulAssignment",
									"src": "2449:40:38",
									"value": {
									  "arguments": [
										{
										  "name": "srcOffset",
										  "nodeType": "YulIdentifier",
										  "src": "2466:9:38"
										},
										{
										  "name": "srcOffset_1",
										  "nodeType": "YulIdentifier",
										  "src": "2477:11:38"
										}
									  ],
									  "functionName": {
										"name": "add",
										"nodeType": "YulIdentifier",
										"src": "2462:3:38"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "2462:27:38"
									},
									"variableNames": [
									  {
										"name": "srcOffset",
										"nodeType": "YulIdentifier",
										"src": "2449:9:38"
									  }
									]
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "i",
									"nodeType": "YulIdentifier",
									"src": "2278:1:38"
								  },
								  {
									"name": "loopEnd",
									"nodeType": "YulIdentifier",
									"src": "2281:7:38"
								  }
								],
								"functionName": {
								  "name": "lt",
								  "nodeType": "YulIdentifier",
								  "src": "2275:2:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "2275:14:38"
							  },
							  "nodeType": "YulForLoop",
							  "post": {
								"nodeType": "YulBlock",
								"src": "2290:28:38",
								"statements": [
								  {
									"nodeType": "YulAssignment",
									"src": "2292:24:38",
									"value": {
									  "arguments": [
										{
										  "name": "i",
										  "nodeType": "YulIdentifier",
										  "src": "2301:1:38"
										},
										{
										  "name": "srcOffset_1",
										  "nodeType": "YulIdentifier",
										  "src": "2304:11:38"
										}
									  ],
									  "functionName": {
										"name": "add",
										"nodeType": "YulIdentifier",
										"src": "2297:3:38"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "2297:19:38"
									},
									"variableNames": [
									  {
										"name": "i",
										"nodeType": "YulIdentifier",
										"src": "2292:1:38"
									  }
									]
								  }
								]
							  },
							  "pre": {
								"nodeType": "YulBlock",
								"src": "2271:3:38",
								"statements": []
							  },
							  "src": "2267:236:38"
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "2551:166:38",
								"statements": [
								  {
									"nodeType": "YulVariableDeclaration",
									"src": "2569:43:38",
									"value": {
									  "arguments": [
										{
										  "arguments": [
											{
											  "name": "src",
											  "nodeType": "YulIdentifier",
											  "src": "2596:3:38"
											},
											{
											  "name": "srcOffset",
											  "nodeType": "YulIdentifier",
											  "src": "2601:9:38"
											}
										  ],
										  "functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "2592:3:38"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "2592:19:38"
										}
									  ],
									  "functionName": {
										"name": "mload",
										"nodeType": "YulIdentifier",
										"src": "2586:5:38"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "2586:26:38"
									},
									"variables": [
									  {
										"name": "lastValue",
										"nodeType": "YulTypedName",
										"src": "2573:9:38",
										"type": ""
									  }
									]
								  },
								  {
									"expression": {
									  "arguments": [
										{
										  "name": "dstPtr",
										  "nodeType": "YulIdentifier",
										  "src": "2636:6:38"
										},
										{
										  "arguments": [
											{
											  "name": "lastValue",
											  "nodeType": "YulIdentifier",
											  "src": "2648:9:38"
											},
											{
											  "arguments": [
												{
												  "arguments": [
													{
													  "arguments": [
														{
														  "arguments": [
															{
															  "kind": "number",
															  "nodeType": "YulLiteral",
															  "src": "2675:1:38",
															  "type": "",
															  "value": "3"
															},
															{
															  "name": "newLen",
															  "nodeType": "YulIdentifier",
															  "src": "2678:6:38"
															}
														  ],
														  "functionName": {
															"name": "shl",
															"nodeType": "YulIdentifier",
															"src": "2671:3:38"
														  },
														  "nodeType": "YulFunctionCall",
														  "src": "2671:14:38"
														},
														{
														  "kind": "number",
														  "nodeType": "YulLiteral",
														  "src": "2687:3:38",
														  "type": "",
														  "value": "248"
														}
													  ],
													  "functionName": {
														"name": "and",
														"nodeType": "YulIdentifier",
														"src": "2667:3:38"
													  },
													  "nodeType": "YulFunctionCall",
													  "src": "2667:24:38"
													},
													{
													  "arguments": [
														{
														  "kind": "number",
														  "nodeType": "YulLiteral",
														  "src": "2697:1:38",
														  "type": "",
														  "value": "0"
														}
													  ],
													  "functionName": {
														"name": "not",
														"nodeType": "YulIdentifier",
														"src": "2693:3:38"
													  },
													  "nodeType": "YulFunctionCall",
													  "src": "2693:6:38"
													}
												  ],
												  "functionName": {
													"name": "shr",
													"nodeType": "YulIdentifier",
													"src": "2663:3:38"
												  },
												  "nodeType": "YulFunctionCall",
												  "src": "2663:37:38"
												}
											  ],
											  "functionName": {
												"name": "not",
												"nodeType": "YulIdentifier",
												"src": "2659:3:38"
											  },
											  "nodeType": "YulFunctionCall",
											  "src": "2659:42:38"
											}
										  ],
										  "functionName": {
											"name": "and",
											"nodeType": "YulIdentifier",
											"src": "2644:3:38"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "2644:58:38"
										}
									  ],
									  "functionName": {
										"name": "sstore",
										"nodeType": "YulIdentifier",
										"src": "2629:6:38"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "2629:74:38"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2629:74:38"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "loopEnd",
									"nodeType": "YulIdentifier",
									"src": "2522:7:38"
								  },
								  {
									"name": "newLen",
									"nodeType": "YulIdentifier",
									"src": "2531:6:38"
								  }
								],
								"functionName": {
								  "name": "lt",
								  "nodeType": "YulIdentifier",
								  "src": "2519:2:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "2519:19:38"
							  },
							  "nodeType": "YulIf",
							  "src": "2516:201:38"
							},
							{
							  "expression": {
								"arguments": [
								  {
									"name": "slot",
									"nodeType": "YulIdentifier",
									"src": "2737:4:38"
								  },
								  {
									"arguments": [
									  {
										"arguments": [
										  {
											"kind": "number",
											"nodeType": "YulLiteral",
											"src": "2751:1:38",
											"type": "",
											"value": "1"
										  },
										  {
											"name": "newLen",
											"nodeType": "YulIdentifier",
											"src": "2754:6:38"
										  }
										],
										"functionName": {
										  "name": "shl",
										  "nodeType": "YulIdentifier",
										  "src": "2747:3:38"
										},
										"nodeType": "YulFunctionCall",
										"src": "2747:14:38"
									  },
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "2763:1:38",
										"type": "",
										"value": "1"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "2743:3:38"
									},
									"nodeType": "YulFunctionCall",
									"src": "2743:22:38"
								  }
								],
								"functionName": {
								  "name": "sstore",
								  "nodeType": "YulIdentifier",
								  "src": "2730:6:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "2730:36:38"
							  },
							  "nodeType": "YulExpressionStatement",
							  "src": "2730:36:38"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "2113:663:38",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2118:1:38",
						  "type": "",
						  "value": "1"
						}
					  },
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "2793:234:38",
						  "statements": [
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "2807:14:38",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2820:1:38",
								"type": "",
								"value": "0"
							  },
							  "variables": [
								{
								  "name": "value",
								  "nodeType": "YulTypedName",
								  "src": "2811:5:38",
								  "type": ""
								}
							  ]
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "2856:67:38",
								"statements": [
								  {
									"nodeType": "YulAssignment",
									"src": "2874:35:38",
									"value": {
									  "arguments": [
										{
										  "arguments": [
											{
											  "name": "src",
											  "nodeType": "YulIdentifier",
											  "src": "2893:3:38"
											},
											{
											  "name": "srcOffset",
											  "nodeType": "YulIdentifier",
											  "src": "2898:9:38"
											}
										  ],
										  "functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "2889:3:38"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "2889:19:38"
										}
									  ],
									  "functionName": {
										"name": "mload",
										"nodeType": "YulIdentifier",
										"src": "2883:5:38"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "2883:26:38"
									},
									"variableNames": [
									  {
										"name": "value",
										"nodeType": "YulIdentifier",
										"src": "2874:5:38"
									  }
									]
								  }
								]
							  },
							  "condition": {
								"name": "newLen",
								"nodeType": "YulIdentifier",
								"src": "2837:6:38"
							  },
							  "nodeType": "YulIf",
							  "src": "2834:89:38"
							},
							{
							  "expression": {
								"arguments": [
								  {
									"name": "slot",
									"nodeType": "YulIdentifier",
									"src": "2943:4:38"
								  },
								  {
									"arguments": [
									  {
										"name": "value",
										"nodeType": "YulIdentifier",
										"src": "3002:5:38"
									  },
									  {
										"name": "newLen",
										"nodeType": "YulIdentifier",
										"src": "3009:6:38"
									  }
									],
									"functionName": {
									  "name": "extract_used_part_and_set_length_of_short_byte_array",
									  "nodeType": "YulIdentifier",
									  "src": "2949:52:38"
									},
									"nodeType": "YulFunctionCall",
									"src": "2949:67:38"
								  }
								],
								"functionName": {
								  "name": "sstore",
								  "nodeType": "YulIdentifier",
								  "src": "2936:6:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "2936:81:38"
							  },
							  "nodeType": "YulExpressionStatement",
							  "src": "2936:81:38"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "2785:242:38",
						"value": "default"
					  }
					],
					"expression": {
					  "arguments": [
						{
						  "name": "newLen",
						  "nodeType": "YulIdentifier",
						  "src": "2093:6:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2101:2:38",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "2090:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2090:14:38"
					},
					"nodeType": "YulSwitch",
					"src": "2083:944:38"
				  }
				]
			  },
			  "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "slot",
				  "nodeType": "YulTypedName",
				  "src": "1762:4:38",
				  "type": ""
				},
				{
				  "name": "src",
				  "nodeType": "YulTypedName",
				  "src": "1768:3:38",
				  "type": ""
				}
			  ],
			  "src": "1681:1352:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3070:95:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3087:1:38",
						  "type": "",
						  "value": "0"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "3094:3:38",
							  "type": "",
							  "value": "224"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "3099:10:38",
							  "type": "",
							  "value": "0x4e487b71"
							}
						  ],
						  "functionName": {
							"name": "shl",
							"nodeType": "YulIdentifier",
							"src": "3090:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3090:20:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "3080:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3080:31:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3080:31:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3127:1:38",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3130:4:38",
						  "type": "",
						  "value": "0x11"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "3120:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3120:15:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3120:15:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3151:1:38",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3154:4:38",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "3144:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3144:15:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3144:15:38"
				  }
				]
			  },
			  "name": "panic_error_0x11",
			  "nodeType": "YulFunctionDefinition",
			  "src": "3038:127:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3234:358:38",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3244:16:38",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "3259:1:38",
					  "type": "",
					  "value": "1"
					},
					"variables": [
					  {
						"name": "power_1",
						"nodeType": "YulTypedName",
						"src": "3248:7:38",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3269:16:38",
					"value": {
					  "name": "power_1",
					  "nodeType": "YulIdentifier",
					  "src": "3278:7:38"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "3269:5:38"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3294:13:38",
					"value": {
					  "name": "_base",
					  "nodeType": "YulIdentifier",
					  "src": "3302:5:38"
					},
					"variableNames": [
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "3294:4:38"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3358:228:38",
					  "statements": [
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "3403:22:38",
							"statements": [
							  {
								"expression": {
								  "arguments": [],
								  "functionName": {
									"name": "panic_error_0x11",
									"nodeType": "YulIdentifier",
									"src": "3405:16:38"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "3405:18:38"
								},
								"nodeType": "YulExpressionStatement",
								"src": "3405:18:38"
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "3378:4:38"
							  },
							  {
								"arguments": [
								  {
									"arguments": [
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "3392:1:38",
										"type": "",
										"value": "0"
									  }
									],
									"functionName": {
									  "name": "not",
									  "nodeType": "YulIdentifier",
									  "src": "3388:3:38"
									},
									"nodeType": "YulFunctionCall",
									"src": "3388:6:38"
								  },
								  {
									"name": "base",
									"nodeType": "YulIdentifier",
									"src": "3396:4:38"
								  }
								],
								"functionName": {
								  "name": "div",
								  "nodeType": "YulIdentifier",
								  "src": "3384:3:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "3384:17:38"
							  }
							],
							"functionName": {
							  "name": "gt",
							  "nodeType": "YulIdentifier",
							  "src": "3375:2:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "3375:27:38"
						  },
						  "nodeType": "YulIf",
						  "src": "3372:53:38"
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "3464:29:38",
							"statements": [
							  {
								"nodeType": "YulAssignment",
								"src": "3466:25:38",
								"value": {
								  "arguments": [
									{
									  "name": "power",
									  "nodeType": "YulIdentifier",
									  "src": "3479:5:38"
									},
									{
									  "name": "base",
									  "nodeType": "YulIdentifier",
									  "src": "3486:4:38"
									}
								  ],
								  "functionName": {
									"name": "mul",
									"nodeType": "YulIdentifier",
									"src": "3475:3:38"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "3475:16:38"
								},
								"variableNames": [
								  {
									"name": "power",
									"nodeType": "YulIdentifier",
									"src": "3466:5:38"
								  }
								]
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "3445:8:38"
							  },
							  {
								"name": "power_1",
								"nodeType": "YulIdentifier",
								"src": "3455:7:38"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "3441:3:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "3441:22:38"
						  },
						  "nodeType": "YulIf",
						  "src": "3438:55:38"
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "3506:23:38",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "3518:4:38"
							  },
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "3524:4:38"
							  }
							],
							"functionName": {
							  "name": "mul",
							  "nodeType": "YulIdentifier",
							  "src": "3514:3:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "3514:15:38"
						  },
						  "variableNames": [
							{
							  "name": "base",
							  "nodeType": "YulIdentifier",
							  "src": "3506:4:38"
							}
						  ]
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "3542:34:38",
						  "value": {
							"arguments": [
							  {
								"name": "power_1",
								"nodeType": "YulIdentifier",
								"src": "3558:7:38"
							  },
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "3567:8:38"
							  }
							],
							"functionName": {
							  "name": "shr",
							  "nodeType": "YulIdentifier",
							  "src": "3554:3:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "3554:22:38"
						  },
						  "variableNames": [
							{
							  "name": "exponent",
							  "nodeType": "YulIdentifier",
							  "src": "3542:8:38"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "3327:8:38"
						},
						{
						  "name": "power_1",
						  "nodeType": "YulIdentifier",
						  "src": "3337:7:38"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "3324:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3324:21:38"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "3346:3:38",
					  "statements": []
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "3320:3:38",
					  "statements": []
					},
					"src": "3316:270:38"
				  }
				]
			  },
			  "name": "checked_exp_helper",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "_base",
				  "nodeType": "YulTypedName",
				  "src": "3198:5:38",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "3205:8:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "3218:5:38",
				  "type": ""
				},
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "3225:4:38",
				  "type": ""
				}
			  ],
			  "src": "3170:422:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3656:747:38",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3694:52:38",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "3708:10:38",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "3717:1:38",
							"type": "",
							"value": "1"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "3708:5:38"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "3731:5:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "3676:8:38"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "3669:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3669:16:38"
					},
					"nodeType": "YulIf",
					"src": "3666:80:38"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3779:52:38",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "3793:10:38",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "3802:1:38",
							"type": "",
							"value": "0"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "3793:5:38"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "3816:5:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "3765:4:38"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "3758:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3758:12:38"
					},
					"nodeType": "YulIf",
					"src": "3755:76:38"
				  },
				  {
					"cases": [
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "3867:52:38",
						  "statements": [
							{
							  "nodeType": "YulAssignment",
							  "src": "3881:10:38",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3890:1:38",
								"type": "",
								"value": "1"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "3881:5:38"
								}
							  ]
							},
							{
							  "nodeType": "YulLeave",
							  "src": "3904:5:38"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "3860:59:38",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3865:1:38",
						  "type": "",
						  "value": "1"
						}
					  },
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "3935:123:38",
						  "statements": [
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "3970:22:38",
								"statements": [
								  {
									"expression": {
									  "arguments": [],
									  "functionName": {
										"name": "panic_error_0x11",
										"nodeType": "YulIdentifier",
										"src": "3972:16:38"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "3972:18:38"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3972:18:38"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "3955:8:38"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "3965:3:38",
									"type": "",
									"value": "255"
								  }
								],
								"functionName": {
								  "name": "gt",
								  "nodeType": "YulIdentifier",
								  "src": "3952:2:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "3952:17:38"
							  },
							  "nodeType": "YulIf",
							  "src": "3949:43:38"
							},
							{
							  "nodeType": "YulAssignment",
							  "src": "4005:25:38",
							  "value": {
								"arguments": [
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "4018:8:38"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "4028:1:38",
									"type": "",
									"value": "1"
								  }
								],
								"functionName": {
								  "name": "shl",
								  "nodeType": "YulIdentifier",
								  "src": "4014:3:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "4014:16:38"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "4005:5:38"
								}
							  ]
							},
							{
							  "nodeType": "YulLeave",
							  "src": "4043:5:38"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "3928:130:38",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3933:1:38",
						  "type": "",
						  "value": "2"
						}
					  }
					],
					"expression": {
					  "name": "base",
					  "nodeType": "YulIdentifier",
					  "src": "3847:4:38"
					},
					"nodeType": "YulSwitch",
					"src": "3840:218:38"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4156:70:38",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "4170:28:38",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "4183:4:38"
							  },
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "4189:8:38"
							  }
							],
							"functionName": {
							  "name": "exp",
							  "nodeType": "YulIdentifier",
							  "src": "4179:3:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "4179:19:38"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "4170:5:38"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "4211:5:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "base",
								  "nodeType": "YulIdentifier",
								  "src": "4080:4:38"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4086:2:38",
								  "type": "",
								  "value": "11"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "4077:2:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4077:12:38"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "4094:8:38"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4104:2:38",
								  "type": "",
								  "value": "78"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "4091:2:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4091:16:38"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "4073:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4073:35:38"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "base",
								  "nodeType": "YulIdentifier",
								  "src": "4117:4:38"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4123:3:38",
								  "type": "",
								  "value": "307"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "4114:2:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4114:13:38"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "4132:8:38"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4142:2:38",
								  "type": "",
								  "value": "32"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "4129:2:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4129:16:38"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "4110:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4110:36:38"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "4070:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4070:77:38"
					},
					"nodeType": "YulIf",
					"src": "4067:159:38"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "4235:57:38",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "4277:4:38"
						},
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "4283:8:38"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_helper",
						"nodeType": "YulIdentifier",
						"src": "4258:18:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4258:34:38"
					},
					"variables": [
					  {
						"name": "power_1",
						"nodeType": "YulTypedName",
						"src": "4239:7:38",
						"type": ""
					  },
					  {
						"name": "base_1",
						"nodeType": "YulTypedName",
						"src": "4248:6:38",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4337:22:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "4339:16:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "4339:18:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4339:18:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "power_1",
						  "nodeType": "YulIdentifier",
						  "src": "4307:7:38"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4324:1:38",
								  "type": "",
								  "value": "0"
								}
							  ],
							  "functionName": {
								"name": "not",
								"nodeType": "YulIdentifier",
								"src": "4320:3:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4320:6:38"
							},
							{
							  "name": "base_1",
							  "nodeType": "YulIdentifier",
							  "src": "4328:6:38"
							}
						  ],
						  "functionName": {
							"name": "div",
							"nodeType": "YulIdentifier",
							"src": "4316:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4316:19:38"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "4304:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4304:32:38"
					},
					"nodeType": "YulIf",
					"src": "4301:58:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "4368:29:38",
					"value": {
					  "arguments": [
						{
						  "name": "power_1",
						  "nodeType": "YulIdentifier",
						  "src": "4381:7:38"
						},
						{
						  "name": "base_1",
						  "nodeType": "YulIdentifier",
						  "src": "4390:6:38"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "4377:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4377:20:38"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "4368:5:38"
					  }
					]
				  }
				]
			  },
			  "name": "checked_exp_unsigned",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "3627:4:38",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "3633:8:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "3646:5:38",
				  "type": ""
				}
			  ],
			  "src": "3597:806:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4476:72:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4486:56:38",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "4516:4:38"
						},
						{
						  "arguments": [
							{
							  "name": "exponent",
							  "nodeType": "YulIdentifier",
							  "src": "4526:8:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4536:4:38",
							  "type": "",
							  "value": "0xff"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "4522:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4522:19:38"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_unsigned",
						"nodeType": "YulIdentifier",
						"src": "4495:20:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4495:47:38"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "4486:5:38"
					  }
					]
				  }
				]
			  },
			  "name": "checked_exp_t_uint256_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "4447:4:38",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "4453:8:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "4466:5:38",
				  "type": ""
				}
			  ],
			  "src": "4408:140:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4605:116:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4615:20:38",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "4630:1:38"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "4633:1:38"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "4626:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4626:9:38"
					},
					"variableNames": [
					  {
						"name": "product",
						"nodeType": "YulIdentifier",
						"src": "4615:7:38"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4693:22:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "4695:16:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "4695:18:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4695:18:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "x",
								  "nodeType": "YulIdentifier",
								  "src": "4664:1:38"
								}
							  ],
							  "functionName": {
								"name": "iszero",
								"nodeType": "YulIdentifier",
								"src": "4657:6:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4657:9:38"
							},
							{
							  "arguments": [
								{
								  "name": "y",
								  "nodeType": "YulIdentifier",
								  "src": "4671:1:38"
								},
								{
								  "arguments": [
									{
									  "name": "product",
									  "nodeType": "YulIdentifier",
									  "src": "4678:7:38"
									},
									{
									  "name": "x",
									  "nodeType": "YulIdentifier",
									  "src": "4687:1:38"
									}
								  ],
								  "functionName": {
									"name": "div",
									"nodeType": "YulIdentifier",
									"src": "4674:3:38"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "4674:15:38"
								}
							  ],
							  "functionName": {
								"name": "eq",
								"nodeType": "YulIdentifier",
								"src": "4668:2:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4668:22:38"
							}
						  ],
						  "functionName": {
							"name": "or",
							"nodeType": "YulIdentifier",
							"src": "4654:2:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4654:37:38"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "4647:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4647:45:38"
					},
					"nodeType": "YulIf",
					"src": "4644:71:38"
				  }
				]
			  },
			  "name": "checked_mul_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "4584:1:38",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "4587:1:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "product",
				  "nodeType": "YulTypedName",
				  "src": "4593:7:38",
				  "type": ""
				}
			  ],
			  "src": "4553:168:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4900:181:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4917:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4928:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4910:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4910:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4910:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4951:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4962:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4947:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4947:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4967:2:38",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4940:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4940:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4940:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4990:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5001:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4986:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4986:18:38"
						},
						{
						  "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "5006:33:38",
						  "type": "",
						  "value": "ERC20: mint to the zero address"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4979:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4979:61:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4979:61:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "5049:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5061:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5072:2:38",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5057:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5057:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "5049:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4877:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "4891:4:38",
				  "type": ""
				}
			  ],
			  "src": "4726:355:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5134:77:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5144:16:38",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "5155:1:38"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "5158:1:38"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5151:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5151:9:38"
					},
					"variableNames": [
					  {
						"name": "sum",
						"nodeType": "YulIdentifier",
						"src": "5144:3:38"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "5183:22:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "5185:16:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "5185:18:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "5185:18:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "5175:1:38"
						},
						{
						  "name": "sum",
						  "nodeType": "YulIdentifier",
						  "src": "5178:3:38"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "5172:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5172:10:38"
					},
					"nodeType": "YulIf",
					"src": "5169:36:38"
				  }
				]
			  },
			  "name": "checked_add_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "5117:1:38",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "5120:1:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "sum",
				  "nodeType": "YulTypedName",
				  "src": "5126:3:38",
				  "type": ""
				}
			  ],
			  "src": "5086:125:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5317:76:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5327:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5339:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5350:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5335:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5335:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "5327:4:38"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5369:9:38"
						},
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "5380:6:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5362:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5362:25:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5362:25:38"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "5286:9:38",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "5297:6:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "5308:4:38",
				  "type": ""
				}
			  ],
			  "src": "5216:177:38"
			}
		  ]
		},
		"contents": "{\n    { }\n    function abi_decode_tuple_t_address_payable_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n        value0 := value\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function array_dataslot_string_storage(ptr) -> data\n    {\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n    }\n    function clean_up_bytearray_end_slots_string_storage(array, len, startIndex)\n    {\n        if gt(len, 31)\n        {\n            let _1 := 0\n            mstore(_1, array)\n            let data := keccak256(_1, 0x20)\n            let deleteStart := add(data, shr(5, add(startIndex, 31)))\n            if lt(startIndex, 0x20) { deleteStart := data }\n            let _2 := add(data, shr(5, add(len, 31)))\n            let start := deleteStart\n            for { } lt(start, _2) { start := add(start, 1) }\n            { sstore(start, _1) }\n        }\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used\n    {\n        used := or(and(data, not(shr(shl(3, len), not(0)))), shl(1, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src)\n    {\n        let newLen := mload(src)\n        if gt(newLen, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        clean_up_bytearray_end_slots_string_storage(slot, extract_byte_array_length(sload(slot)), newLen)\n        let srcOffset := 0\n        let srcOffset_1 := 0x20\n        srcOffset := srcOffset_1\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(31))\n            let dstPtr := array_dataslot_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, srcOffset_1) }\n            {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, srcOffset_1)\n            }\n            if lt(loopEnd, newLen)\n            {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, and(lastValue, not(shr(and(shl(3, newLen), 248), not(0)))))\n            }\n            sstore(slot, add(shl(1, newLen), 1))\n        }\n        default {\n            let value := 0\n            if newLen\n            {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_exp_helper(_base, exponent) -> power, base\n    {\n        let power_1 := 1\n        power := power_1\n        base := _base\n        for { } gt(exponent, power_1) { }\n        {\n            if gt(base, div(not(0), base)) { panic_error_0x11() }\n            if and(exponent, power_1) { power := mul(power, base) }\n            base := mul(base, base)\n            exponent := shr(power_1, exponent)\n        }\n    }\n    function checked_exp_unsigned(base, exponent) -> power\n    {\n        if iszero(exponent)\n        {\n            power := 1\n            leave\n        }\n        if iszero(base)\n        {\n            power := 0\n            leave\n        }\n        switch base\n        case 1 {\n            power := 1\n            leave\n        }\n        case 2 {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := shl(exponent, 1)\n            leave\n        }\n        if or(and(lt(base, 11), lt(exponent, 78)), and(lt(base, 307), lt(exponent, 32)))\n        {\n            power := exp(base, exponent)\n            leave\n        }\n        let power_1, base_1 := checked_exp_helper(base, exponent)\n        if gt(power_1, div(not(0), base_1)) { panic_error_0x11() }\n        power := mul(power_1, base_1)\n    }\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power\n    {\n        power := checked_exp_unsigned(base, and(exponent, 0xff))\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 31)\n        mstore(add(headStart, 64), \"ERC20: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n}",
		"id": 38,
		"language": "Yul",
		"name": "#utility.yul"
	  }
	],
	"deployedGeneratedSources": [
	  {
		"ast": {
		  "nodeType": "YulBlock",
		  "src": "0:13857:38",
		  "statements": [
			{
			  "nodeType": "YulBlock",
			  "src": "6:3:38",
			  "statements": []
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "115:76:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "125:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "137:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "148:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "133:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "133:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "125:4:38"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "167:9:38"
						},
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "178:6:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "160:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "160:25:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "160:25:38"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "84:9:38",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "95:6:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "106:4:38",
				  "type": ""
				}
			  ],
			  "src": "14:177:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "317:427:38",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "327:12:38",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "337:2:38",
					  "type": "",
					  "value": "32"
					},
					"variables": [
					  {
						"name": "_1",
						"nodeType": "YulTypedName",
						"src": "331:2:38",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "355:9:38"
						},
						{
						  "name": "_1",
						  "nodeType": "YulIdentifier",
						  "src": "366:2:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "348:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "348:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "348:21:38"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "378:27:38",
					"value": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "398:6:38"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "392:5:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "392:13:38"
					},
					"variables": [
					  {
						"name": "length",
						"nodeType": "YulTypedName",
						"src": "382:6:38",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "425:9:38"
							},
							{
							  "name": "_1",
							  "nodeType": "YulIdentifier",
							  "src": "436:2:38"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "421:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "421:18:38"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "441:6:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "414:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "414:34:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "414:34:38"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "457:10:38",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "466:1:38",
					  "type": "",
					  "value": "0"
					},
					"variables": [
					  {
						"name": "i",
						"nodeType": "YulTypedName",
						"src": "461:1:38",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "526:90:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"arguments": [
								  {
									"arguments": [
									  {
										"name": "headStart",
										"nodeType": "YulIdentifier",
										"src": "555:9:38"
									  },
									  {
										"name": "i",
										"nodeType": "YulIdentifier",
										"src": "566:1:38"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "551:3:38"
									},
									"nodeType": "YulFunctionCall",
									"src": "551:17:38"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "570:2:38",
									"type": "",
									"value": "64"
								  }
								],
								"functionName": {
								  "name": "add",
								  "nodeType": "YulIdentifier",
								  "src": "547:3:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "547:26:38"
							  },
							  {
								"arguments": [
								  {
									"arguments": [
									  {
										"arguments": [
										  {
											"name": "value0",
											"nodeType": "YulIdentifier",
											"src": "589:6:38"
										  },
										  {
											"name": "i",
											"nodeType": "YulIdentifier",
											"src": "597:1:38"
										  }
										],
										"functionName": {
										  "name": "add",
										  "nodeType": "YulIdentifier",
										  "src": "585:3:38"
										},
										"nodeType": "YulFunctionCall",
										"src": "585:14:38"
									  },
									  {
										"name": "_1",
										"nodeType": "YulIdentifier",
										"src": "601:2:38"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "581:3:38"
									},
									"nodeType": "YulFunctionCall",
									"src": "581:23:38"
								  }
								],
								"functionName": {
								  "name": "mload",
								  "nodeType": "YulIdentifier",
								  "src": "575:5:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "575:30:38"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "540:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "540:66:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "540:66:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "i",
						  "nodeType": "YulIdentifier",
						  "src": "487:1:38"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "490:6:38"
						}
					  ],
					  "functionName": {
						"name": "lt",
						"nodeType": "YulIdentifier",
						"src": "484:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "484:13:38"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "498:19:38",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "500:15:38",
						  "value": {
							"arguments": [
							  {
								"name": "i",
								"nodeType": "YulIdentifier",
								"src": "509:1:38"
							  },
							  {
								"name": "_1",
								"nodeType": "YulIdentifier",
								"src": "512:2:38"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "505:3:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "505:10:38"
						  },
						  "variableNames": [
							{
							  "name": "i",
							  "nodeType": "YulIdentifier",
							  "src": "500:1:38"
							}
						  ]
						}
					  ]
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "480:3:38",
					  "statements": []
					},
					"src": "476:140:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "headStart",
								  "nodeType": "YulIdentifier",
								  "src": "640:9:38"
								},
								{
								  "name": "length",
								  "nodeType": "YulIdentifier",
								  "src": "651:6:38"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "636:3:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "636:22:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "660:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "632:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "632:31:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "665:1:38",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "625:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "625:42:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "625:42:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "676:62:38",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "692:9:38"
							},
							{
							  "arguments": [
								{
								  "arguments": [
									{
									  "name": "length",
									  "nodeType": "YulIdentifier",
									  "src": "711:6:38"
									},
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "719:2:38",
									  "type": "",
									  "value": "31"
									}
								  ],
								  "functionName": {
									"name": "add",
									"nodeType": "YulIdentifier",
									"src": "707:3:38"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "707:15:38"
								},
								{
								  "arguments": [
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "728:2:38",
									  "type": "",
									  "value": "31"
									}
								  ],
								  "functionName": {
									"name": "not",
									"nodeType": "YulIdentifier",
									"src": "724:3:38"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "724:7:38"
								}
							  ],
							  "functionName": {
								"name": "and",
								"nodeType": "YulIdentifier",
								"src": "703:3:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "703:29:38"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "688:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "688:45:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "735:2:38",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "684:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "684:54:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "676:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "286:9:38",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "297:6:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "308:4:38",
				  "type": ""
				}
			  ],
			  "src": "196:548:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "794:109:38",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "881:16:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "890:1:38",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "893:1:38",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "883:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "883:12:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "883:12:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "value",
							  "nodeType": "YulIdentifier",
							  "src": "817:5:38"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "828:5:38"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "835:42:38",
								  "type": "",
								  "value": "0xffffffffffffffffffffffffffffffffffffffff"
								}
							  ],
							  "functionName": {
								"name": "and",
								"nodeType": "YulIdentifier",
								"src": "824:3:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "824:54:38"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "814:2:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "814:65:38"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "807:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "807:73:38"
					},
					"nodeType": "YulIf",
					"src": "804:93:38"
				  }
				]
			  },
			  "name": "validator_revert_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "783:5:38",
				  "type": ""
				}
			  ],
			  "src": "749:154:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "995:228:38",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1041:16:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1050:1:38",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1053:1:38",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "1043:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "1043:12:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1043:12:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "1016:7:38"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1025:9:38"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "1012:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1012:23:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1037:2:38",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "1008:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1008:32:38"
					},
					"nodeType": "YulIf",
					"src": "1005:52:38"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1066:36:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1092:9:38"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "1079:12:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1079:23:38"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "1070:5:38",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "1136:5:38"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_address",
						"nodeType": "YulIdentifier",
						"src": "1111:24:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1111:31:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1111:31:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1151:15:38",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "1161:5:38"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "1151:6:38"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1175:42:38",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1202:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1213:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1198:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1198:18:38"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "1185:12:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1185:32:38"
					},
					"variableNames": [
					  {
						"name": "value1",
						"nodeType": "YulIdentifier",
						"src": "1175:6:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "953:9:38",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "964:7:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "976:6:38",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "984:6:38",
				  "type": ""
				}
			  ],
			  "src": "908:315:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1323:92:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1333:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1345:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1356:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "1341:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1341:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "1333:4:38"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1375:9:38"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "value0",
								  "nodeType": "YulIdentifier",
								  "src": "1400:6:38"
								}
							  ],
							  "functionName": {
								"name": "iszero",
								"nodeType": "YulIdentifier",
								"src": "1393:6:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1393:14:38"
							}
						  ],
						  "functionName": {
							"name": "iszero",
							"nodeType": "YulIdentifier",
							"src": "1386:6:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1386:22:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1368:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1368:41:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1368:41:38"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "1292:9:38",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "1303:6:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "1314:4:38",
				  "type": ""
				}
			  ],
			  "src": "1228:187:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1490:177:38",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1536:16:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1545:1:38",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1548:1:38",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "1538:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "1538:12:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1538:12:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "1511:7:38"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1520:9:38"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "1507:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1507:23:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1532:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "1503:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1503:32:38"
					},
					"nodeType": "YulIf",
					"src": "1500:52:38"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1561:36:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1587:9:38"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "1574:12:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1574:23:38"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "1565:5:38",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "1631:5:38"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_address",
						"nodeType": "YulIdentifier",
						"src": "1606:24:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1606:31:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1606:31:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1646:15:38",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "1656:5:38"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "1646:6:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "1456:9:38",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "1467:7:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "1479:6:38",
				  "type": ""
				}
			  ],
			  "src": "1420:247:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1764:177:38",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1810:16:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1819:1:38",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1822:1:38",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "1812:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "1812:12:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1812:12:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "1785:7:38"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1794:9:38"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "1781:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1781:23:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1806:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "1777:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1777:32:38"
					},
					"nodeType": "YulIf",
					"src": "1774:52:38"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1835:36:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1861:9:38"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "1848:12:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1848:23:38"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "1839:5:38",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "1905:5:38"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_address",
						"nodeType": "YulIdentifier",
						"src": "1880:24:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1880:31:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1880:31:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1920:15:38",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "1930:5:38"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "1920:6:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_contract$_LiquidityPool_$7043",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "1730:9:38",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "1741:7:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "1753:6:38",
				  "type": ""
				}
			  ],
			  "src": "1672:269:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2047:125:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2057:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2069:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2080:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "2065:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2065:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "2057:4:38"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2099:9:38"
						},
						{
						  "arguments": [
							{
							  "name": "value0",
							  "nodeType": "YulIdentifier",
							  "src": "2114:6:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2122:42:38",
							  "type": "",
							  "value": "0xffffffffffffffffffffffffffffffffffffffff"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "2110:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2110:55:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "2092:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2092:74:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2092:74:38"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "2016:9:38",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "2027:6:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "2038:4:38",
				  "type": ""
				}
			  ],
			  "src": "1946:226:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2281:352:38",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2327:16:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2336:1:38",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2339:1:38",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "2329:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "2329:12:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2329:12:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "2302:7:38"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2311:9:38"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "2298:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2298:23:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2323:2:38",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "2294:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2294:32:38"
					},
					"nodeType": "YulIf",
					"src": "2291:52:38"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2352:36:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2378:9:38"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2365:12:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2365:23:38"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "2356:5:38",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "2422:5:38"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_address",
						"nodeType": "YulIdentifier",
						"src": "2397:24:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2397:31:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2397:31:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2437:15:38",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "2447:5:38"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "2437:6:38"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2461:47:38",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2493:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2504:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2489:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2489:18:38"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2476:12:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2476:32:38"
					},
					"variables": [
					  {
						"name": "value_1",
						"nodeType": "YulTypedName",
						"src": "2465:7:38",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value_1",
						  "nodeType": "YulIdentifier",
						  "src": "2542:7:38"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_address",
						"nodeType": "YulIdentifier",
						"src": "2517:24:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2517:33:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2517:33:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2559:17:38",
					"value": {
					  "name": "value_1",
					  "nodeType": "YulIdentifier",
					  "src": "2569:7:38"
					},
					"variableNames": [
					  {
						"name": "value1",
						"nodeType": "YulIdentifier",
						"src": "2559:6:38"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2585:42:38",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2612:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2623:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2608:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2608:18:38"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2595:12:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2595:32:38"
					},
					"variableNames": [
					  {
						"name": "value2",
						"nodeType": "YulIdentifier",
						"src": "2585:6:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_addresst_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "2231:9:38",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "2242:7:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "2254:6:38",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "2262:6:38",
				  "type": ""
				},
				{
				  "name": "value2",
				  "nodeType": "YulTypedName",
				  "src": "2270:6:38",
				  "type": ""
				}
			  ],
			  "src": "2177:456:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2735:87:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2745:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2757:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2768:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "2753:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2753:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "2745:4:38"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2787:9:38"
						},
						{
						  "arguments": [
							{
							  "name": "value0",
							  "nodeType": "YulIdentifier",
							  "src": "2802:6:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2810:4:38",
							  "type": "",
							  "value": "0xff"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "2798:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2798:17:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "2780:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2780:36:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2780:36:38"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "2704:9:38",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "2715:6:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "2726:4:38",
				  "type": ""
				}
			  ],
			  "src": "2638:184:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2944:125:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2954:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2966:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2977:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "2962:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2962:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "2954:4:38"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2996:9:38"
						},
						{
						  "arguments": [
							{
							  "name": "value0",
							  "nodeType": "YulIdentifier",
							  "src": "3011:6:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "3019:42:38",
							  "type": "",
							  "value": "0xffffffffffffffffffffffffffffffffffffffff"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "3007:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3007:55:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "2989:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2989:74:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2989:74:38"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "2913:9:38",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "2924:6:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "2935:4:38",
				  "type": ""
				}
			  ],
			  "src": "2827:242:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3161:301:38",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3207:16:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3216:1:38",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3219:1:38",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "3209:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "3209:12:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3209:12:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "dataEnd",
							  "nodeType": "YulIdentifier",
							  "src": "3182:7:38"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "3191:9:38"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "3178:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3178:23:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3203:2:38",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "3174:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3174:32:38"
					},
					"nodeType": "YulIf",
					"src": "3171:52:38"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3232:36:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "3258:9:38"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "3245:12:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3245:23:38"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "3236:5:38",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "3302:5:38"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_address",
						"nodeType": "YulIdentifier",
						"src": "3277:24:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3277:31:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3277:31:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3317:15:38",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "3327:5:38"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "3317:6:38"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3341:47:38",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "3373:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "3384:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "3369:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3369:18:38"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "3356:12:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3356:32:38"
					},
					"variables": [
					  {
						"name": "value_1",
						"nodeType": "YulTypedName",
						"src": "3345:7:38",
						"type": ""
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "value_1",
						  "nodeType": "YulIdentifier",
						  "src": "3422:7:38"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_address",
						"nodeType": "YulIdentifier",
						"src": "3397:24:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3397:33:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3397:33:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3439:17:38",
					"value": {
					  "name": "value_1",
					  "nodeType": "YulIdentifier",
					  "src": "3449:7:38"
					},
					"variableNames": [
					  {
						"name": "value1",
						"nodeType": "YulIdentifier",
						"src": "3439:6:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_addresst_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "3119:9:38",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "3130:7:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "3142:6:38",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "3150:6:38",
				  "type": ""
				}
			  ],
			  "src": "3074:388:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3522:382:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3532:22:38",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3546:1:38",
						  "type": "",
						  "value": "1"
						},
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "3549:4:38"
						}
					  ],
					  "functionName": {
						"name": "shr",
						"nodeType": "YulIdentifier",
						"src": "3542:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3542:12:38"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "3532:6:38"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3563:38:38",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "3593:4:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3599:1:38",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "3589:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3589:12:38"
					},
					"variables": [
					  {
						"name": "outOfPlaceEncoding",
						"nodeType": "YulTypedName",
						"src": "3567:18:38",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3640:31:38",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "3642:27:38",
						  "value": {
							"arguments": [
							  {
								"name": "length",
								"nodeType": "YulIdentifier",
								"src": "3656:6:38"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3664:4:38",
								"type": "",
								"value": "0x7f"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "3652:3:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "3652:17:38"
						  },
						  "variableNames": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "3642:6:38"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "3620:18:38"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "3613:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3613:26:38"
					},
					"nodeType": "YulIf",
					"src": "3610:61:38"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3730:168:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3751:1:38",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3754:77:38",
								"type": "",
								"value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "3744:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "3744:88:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3744:88:38"
						},
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3852:1:38",
								"type": "",
								"value": "4"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3855:4:38",
								"type": "",
								"value": "0x22"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "3845:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "3845:15:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3845:15:38"
						},
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3880:1:38",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3883:4:38",
								"type": "",
								"value": "0x24"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "3873:6:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "3873:15:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3873:15:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "3686:18:38"
						},
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "3709:6:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "3717:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "lt",
							"nodeType": "YulIdentifier",
							"src": "3706:2:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3706:14:38"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "3683:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3683:38:38"
					},
					"nodeType": "YulIf",
					"src": "3680:218:38"
				  }
				]
			  },
			  "name": "extract_byte_array_length",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "3502:4:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "3511:6:38",
				  "type": ""
				}
			  ],
			  "src": "3467:437:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4083:160:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4100:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4111:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4093:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4093:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4093:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4134:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4145:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4130:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4130:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4150:2:38",
						  "type": "",
						  "value": "10"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4123:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4123:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4123:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4173:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4184:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4169:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4169:18:38"
						},
						{
						  "hexValue": "4f574e45525f4f4e4c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "4189:12:38",
						  "type": "",
						  "value": "OWNER_ONLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4162:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4162:40:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4162:40:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "4211:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4223:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4234:2:38",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "4219:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4219:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "4211:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4060:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "4074:4:38",
				  "type": ""
				}
			  ],
			  "src": "3909:334:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4422:161:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4439:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4450:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4432:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4432:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4432:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4473:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4484:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4469:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4469:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4489:2:38",
						  "type": "",
						  "value": "11"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4462:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4462:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4462:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4512:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4523:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4508:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4508:18:38"
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "4528:13:38",
						  "type": "",
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4501:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4501:41:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4501:41:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "4551:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4563:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4574:2:38",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "4559:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4559:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "4551:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4399:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "4413:4:38",
				  "type": ""
				}
			  ],
			  "src": "4248:335:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4762:167:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4779:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4790:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4772:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4772:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4772:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4813:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4824:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4809:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4809:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4829:2:38",
						  "type": "",
						  "value": "17"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4802:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4802:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4802:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4852:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4863:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4848:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4848:18:38"
						},
						{
						  "hexValue": "46554e44535f4d4f5645445f544f5f4c50",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "4868:19:38",
						  "type": "",
						  "value": "FUNDS_MOVED_TO_LP"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4841:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4841:47:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4841:47:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "4897:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4909:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4920:2:38",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "4905:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4905:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "4897:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4739:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "4753:4:38",
				  "type": ""
				}
			  ],
			  "src": "4588:341:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4966:152:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4983:1:38",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4986:77:38",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4976:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4976:88:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4976:88:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5080:1:38",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5083:4:38",
						  "type": "",
						  "value": "0x11"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5073:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5073:15:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5073:15:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5104:1:38",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5107:4:38",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "5097:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5097:15:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5097:15:38"
				  }
				]
			  },
			  "name": "panic_error_0x11",
			  "nodeType": "YulFunctionDefinition",
			  "src": "4934:184:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5175:116:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5185:20:38",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "5200:1:38"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "5203:1:38"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "5196:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5196:9:38"
					},
					"variableNames": [
					  {
						"name": "product",
						"nodeType": "YulIdentifier",
						"src": "5185:7:38"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "5263:22:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "5265:16:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "5265:18:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "5265:18:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "x",
								  "nodeType": "YulIdentifier",
								  "src": "5234:1:38"
								}
							  ],
							  "functionName": {
								"name": "iszero",
								"nodeType": "YulIdentifier",
								"src": "5227:6:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "5227:9:38"
							},
							{
							  "arguments": [
								{
								  "name": "y",
								  "nodeType": "YulIdentifier",
								  "src": "5241:1:38"
								},
								{
								  "arguments": [
									{
									  "name": "product",
									  "nodeType": "YulIdentifier",
									  "src": "5248:7:38"
									},
									{
									  "name": "x",
									  "nodeType": "YulIdentifier",
									  "src": "5257:1:38"
									}
								  ],
								  "functionName": {
									"name": "div",
									"nodeType": "YulIdentifier",
									"src": "5244:3:38"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "5244:15:38"
								}
							  ],
							  "functionName": {
								"name": "eq",
								"nodeType": "YulIdentifier",
								"src": "5238:2:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "5238:22:38"
							}
						  ],
						  "functionName": {
							"name": "or",
							"nodeType": "YulIdentifier",
							"src": "5224:2:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5224:37:38"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "5217:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5217:45:38"
					},
					"nodeType": "YulIf",
					"src": "5214:71:38"
				  }
				]
			  },
			  "name": "checked_mul_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "5154:1:38",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "5157:1:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "product",
				  "nodeType": "YulTypedName",
				  "src": "5163:7:38",
				  "type": ""
				}
			  ],
			  "src": "5123:168:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5425:168:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5435:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5447:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5458:2:38",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5443:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5443:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "5435:4:38"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5477:9:38"
						},
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "5488:6:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5470:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5470:25:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5470:25:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5515:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5526:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "5511:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5511:18:38"
						},
						{
						  "arguments": [
							{
							  "name": "value1",
							  "nodeType": "YulIdentifier",
							  "src": "5535:6:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5543:42:38",
							  "type": "",
							  "value": "0xffffffffffffffffffffffffffffffffffffffff"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "5531:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5531:55:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5504:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5504:83:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5504:83:38"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "5386:9:38",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "5397:6:38",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "5405:6:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "5416:4:38",
				  "type": ""
				}
			  ],
			  "src": "5296:297:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5772:163:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5789:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5800:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5782:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5782:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5782:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5823:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5834:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "5819:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5819:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5839:2:38",
						  "type": "",
						  "value": "13"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5812:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5812:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5812:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5862:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5873:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "5858:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5858:18:38"
						},
						{
						  "hexValue": "4d41504c454e46545f4f4e4c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "5878:15:38",
						  "type": "",
						  "value": "MAPLENFT_ONLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5851:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5851:43:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5851:43:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "5903:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5915:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5926:2:38",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5911:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5911:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "5903:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "5749:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "5763:4:38",
				  "type": ""
				}
			  ],
			  "src": "5598:337:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5988:77:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5998:16:38",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "6009:1:38"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "6012:1:38"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "6005:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6005:9:38"
					},
					"variableNames": [
					  {
						"name": "sum",
						"nodeType": "YulIdentifier",
						"src": "5998:3:38"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "6037:22:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "6039:16:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "6039:18:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "6039:18:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "6029:1:38"
						},
						{
						  "name": "sum",
						  "nodeType": "YulIdentifier",
						  "src": "6032:3:38"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "6026:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6026:10:38"
					},
					"nodeType": "YulIf",
					"src": "6023:36:38"
				  }
				]
			  },
			  "name": "checked_add_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "5971:1:38",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "5974:1:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "sum",
				  "nodeType": "YulTypedName",
				  "src": "5980:3:38",
				  "type": ""
				}
			  ],
			  "src": "5940:125:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6244:181:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "6261:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6272:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6254:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6254:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6254:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6295:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6306:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6291:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6291:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6311:2:38",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6284:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6284:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6284:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6334:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6345:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6330:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6330:18:38"
						},
						{
						  "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "6350:33:38",
						  "type": "",
						  "value": "ERC20: mint to the zero address"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6323:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6323:61:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6323:61:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "6393:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "6405:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6416:2:38",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "6401:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6401:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "6393:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "6221:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "6235:4:38",
				  "type": ""
				}
			  ],
			  "src": "6070:355:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6604:166:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "6621:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6632:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6614:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6614:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6614:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6655:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6666:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6651:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6651:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6671:2:38",
						  "type": "",
						  "value": "16"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6644:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6644:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6644:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6694:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6705:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6690:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6690:18:38"
						},
						{
						  "hexValue": "41424f56455f4d41585f535550504c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "6710:18:38",
						  "type": "",
						  "value": "ABOVE_MAX_SUPPLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6683:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6683:46:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6683:46:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "6738:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "6750:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6761:2:38",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "6746:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6746:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "6738:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "6581:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "6595:4:38",
				  "type": ""
				}
			  ],
			  "src": "6430:340:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6839:358:38",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "6849:16:38",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "6864:1:38",
					  "type": "",
					  "value": "1"
					},
					"variables": [
					  {
						"name": "power_1",
						"nodeType": "YulTypedName",
						"src": "6853:7:38",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "6874:16:38",
					"value": {
					  "name": "power_1",
					  "nodeType": "YulIdentifier",
					  "src": "6883:7:38"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "6874:5:38"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "6899:13:38",
					"value": {
					  "name": "_base",
					  "nodeType": "YulIdentifier",
					  "src": "6907:5:38"
					},
					"variableNames": [
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "6899:4:38"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "6963:228:38",
					  "statements": [
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "7008:22:38",
							"statements": [
							  {
								"expression": {
								  "arguments": [],
								  "functionName": {
									"name": "panic_error_0x11",
									"nodeType": "YulIdentifier",
									"src": "7010:16:38"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "7010:18:38"
								},
								"nodeType": "YulExpressionStatement",
								"src": "7010:18:38"
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "6983:4:38"
							  },
							  {
								"arguments": [
								  {
									"arguments": [
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "6997:1:38",
										"type": "",
										"value": "0"
									  }
									],
									"functionName": {
									  "name": "not",
									  "nodeType": "YulIdentifier",
									  "src": "6993:3:38"
									},
									"nodeType": "YulFunctionCall",
									"src": "6993:6:38"
								  },
								  {
									"name": "base",
									"nodeType": "YulIdentifier",
									"src": "7001:4:38"
								  }
								],
								"functionName": {
								  "name": "div",
								  "nodeType": "YulIdentifier",
								  "src": "6989:3:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "6989:17:38"
							  }
							],
							"functionName": {
							  "name": "gt",
							  "nodeType": "YulIdentifier",
							  "src": "6980:2:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "6980:27:38"
						  },
						  "nodeType": "YulIf",
						  "src": "6977:53:38"
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "7069:29:38",
							"statements": [
							  {
								"nodeType": "YulAssignment",
								"src": "7071:25:38",
								"value": {
								  "arguments": [
									{
									  "name": "power",
									  "nodeType": "YulIdentifier",
									  "src": "7084:5:38"
									},
									{
									  "name": "base",
									  "nodeType": "YulIdentifier",
									  "src": "7091:4:38"
									}
								  ],
								  "functionName": {
									"name": "mul",
									"nodeType": "YulIdentifier",
									"src": "7080:3:38"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "7080:16:38"
								},
								"variableNames": [
								  {
									"name": "power",
									"nodeType": "YulIdentifier",
									"src": "7071:5:38"
								  }
								]
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "7050:8:38"
							  },
							  {
								"name": "power_1",
								"nodeType": "YulIdentifier",
								"src": "7060:7:38"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "7046:3:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "7046:22:38"
						  },
						  "nodeType": "YulIf",
						  "src": "7043:55:38"
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "7111:23:38",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "7123:4:38"
							  },
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "7129:4:38"
							  }
							],
							"functionName": {
							  "name": "mul",
							  "nodeType": "YulIdentifier",
							  "src": "7119:3:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "7119:15:38"
						  },
						  "variableNames": [
							{
							  "name": "base",
							  "nodeType": "YulIdentifier",
							  "src": "7111:4:38"
							}
						  ]
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "7147:34:38",
						  "value": {
							"arguments": [
							  {
								"name": "power_1",
								"nodeType": "YulIdentifier",
								"src": "7163:7:38"
							  },
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "7172:8:38"
							  }
							],
							"functionName": {
							  "name": "shr",
							  "nodeType": "YulIdentifier",
							  "src": "7159:3:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "7159:22:38"
						  },
						  "variableNames": [
							{
							  "name": "exponent",
							  "nodeType": "YulIdentifier",
							  "src": "7147:8:38"
							}
						  ]
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "6932:8:38"
						},
						{
						  "name": "power_1",
						  "nodeType": "YulIdentifier",
						  "src": "6942:7:38"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "6929:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6929:21:38"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "6951:3:38",
					  "statements": []
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "6925:3:38",
					  "statements": []
					},
					"src": "6921:270:38"
				  }
				]
			  },
			  "name": "checked_exp_helper",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "_base",
				  "nodeType": "YulTypedName",
				  "src": "6803:5:38",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "6810:8:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "6823:5:38",
				  "type": ""
				},
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "6830:4:38",
				  "type": ""
				}
			  ],
			  "src": "6775:422:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7261:747:38",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7299:52:38",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "7313:10:38",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "7322:1:38",
							"type": "",
							"value": "1"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "7313:5:38"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "7336:5:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "7281:8:38"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "7274:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7274:16:38"
					},
					"nodeType": "YulIf",
					"src": "7271:80:38"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7384:52:38",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "7398:10:38",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "7407:1:38",
							"type": "",
							"value": "0"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "7398:5:38"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "7421:5:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "7370:4:38"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "7363:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7363:12:38"
					},
					"nodeType": "YulIf",
					"src": "7360:76:38"
				  },
				  {
					"cases": [
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "7472:52:38",
						  "statements": [
							{
							  "nodeType": "YulAssignment",
							  "src": "7486:10:38",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "7495:1:38",
								"type": "",
								"value": "1"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "7486:5:38"
								}
							  ]
							},
							{
							  "nodeType": "YulLeave",
							  "src": "7509:5:38"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "7465:59:38",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7470:1:38",
						  "type": "",
						  "value": "1"
						}
					  },
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "7540:123:38",
						  "statements": [
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "7575:22:38",
								"statements": [
								  {
									"expression": {
									  "arguments": [],
									  "functionName": {
										"name": "panic_error_0x11",
										"nodeType": "YulIdentifier",
										"src": "7577:16:38"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "7577:18:38"
									},
									"nodeType": "YulExpressionStatement",
									"src": "7577:18:38"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "7560:8:38"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "7570:3:38",
									"type": "",
									"value": "255"
								  }
								],
								"functionName": {
								  "name": "gt",
								  "nodeType": "YulIdentifier",
								  "src": "7557:2:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "7557:17:38"
							  },
							  "nodeType": "YulIf",
							  "src": "7554:43:38"
							},
							{
							  "nodeType": "YulAssignment",
							  "src": "7610:25:38",
							  "value": {
								"arguments": [
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "7623:8:38"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "7633:1:38",
									"type": "",
									"value": "1"
								  }
								],
								"functionName": {
								  "name": "shl",
								  "nodeType": "YulIdentifier",
								  "src": "7619:3:38"
								},
								"nodeType": "YulFunctionCall",
								"src": "7619:16:38"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "7610:5:38"
								}
							  ]
							},
							{
							  "nodeType": "YulLeave",
							  "src": "7648:5:38"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "7533:130:38",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7538:1:38",
						  "type": "",
						  "value": "2"
						}
					  }
					],
					"expression": {
					  "name": "base",
					  "nodeType": "YulIdentifier",
					  "src": "7452:4:38"
					},
					"nodeType": "YulSwitch",
					"src": "7445:218:38"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7761:70:38",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "7775:28:38",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "7788:4:38"
							  },
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "7794:8:38"
							  }
							],
							"functionName": {
							  "name": "exp",
							  "nodeType": "YulIdentifier",
							  "src": "7784:3:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "7784:19:38"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "7775:5:38"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "7816:5:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "base",
								  "nodeType": "YulIdentifier",
								  "src": "7685:4:38"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "7691:2:38",
								  "type": "",
								  "value": "11"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "7682:2:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7682:12:38"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "7699:8:38"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "7709:2:38",
								  "type": "",
								  "value": "78"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "7696:2:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7696:16:38"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "7678:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7678:35:38"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "base",
								  "nodeType": "YulIdentifier",
								  "src": "7722:4:38"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "7728:3:38",
								  "type": "",
								  "value": "307"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "7719:2:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7719:13:38"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "7737:8:38"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "7747:2:38",
								  "type": "",
								  "value": "32"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "7734:2:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7734:16:38"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "7715:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7715:36:38"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "7675:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7675:77:38"
					},
					"nodeType": "YulIf",
					"src": "7672:159:38"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "7840:57:38",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "7882:4:38"
						},
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "7888:8:38"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_helper",
						"nodeType": "YulIdentifier",
						"src": "7863:18:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7863:34:38"
					},
					"variables": [
					  {
						"name": "power_1",
						"nodeType": "YulTypedName",
						"src": "7844:7:38",
						"type": ""
					  },
					  {
						"name": "base_1",
						"nodeType": "YulTypedName",
						"src": "7853:6:38",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7942:22:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "7944:16:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "7944:18:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "7944:18:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "power_1",
						  "nodeType": "YulIdentifier",
						  "src": "7912:7:38"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "7929:1:38",
								  "type": "",
								  "value": "0"
								}
							  ],
							  "functionName": {
								"name": "not",
								"nodeType": "YulIdentifier",
								"src": "7925:3:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7925:6:38"
							},
							{
							  "name": "base_1",
							  "nodeType": "YulIdentifier",
							  "src": "7933:6:38"
							}
						  ],
						  "functionName": {
							"name": "div",
							"nodeType": "YulIdentifier",
							"src": "7921:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7921:19:38"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "7909:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7909:32:38"
					},
					"nodeType": "YulIf",
					"src": "7906:58:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "7973:29:38",
					"value": {
					  "arguments": [
						{
						  "name": "power_1",
						  "nodeType": "YulIdentifier",
						  "src": "7986:7:38"
						},
						{
						  "name": "base_1",
						  "nodeType": "YulIdentifier",
						  "src": "7995:6:38"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "7982:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7982:20:38"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "7973:5:38"
					  }
					]
				  }
				]
			  },
			  "name": "checked_exp_unsigned",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "7232:4:38",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "7238:8:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "7251:5:38",
				  "type": ""
				}
			  ],
			  "src": "7202:806:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8081:72:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "8091:56:38",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "8121:4:38"
						},
						{
						  "arguments": [
							{
							  "name": "exponent",
							  "nodeType": "YulIdentifier",
							  "src": "8131:8:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8141:4:38",
							  "type": "",
							  "value": "0xff"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "8127:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8127:19:38"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_unsigned",
						"nodeType": "YulIdentifier",
						"src": "8100:20:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8100:47:38"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "8091:5:38"
					  }
					]
				  }
				]
			  },
			  "name": "checked_exp_t_uint256_t_uint8",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "8052:4:38",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "8058:8:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "8071:5:38",
				  "type": ""
				}
			  ],
			  "src": "8013:140:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8332:165:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8349:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8360:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8342:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8342:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8342:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8383:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8394:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8379:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8379:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8399:2:38",
						  "type": "",
						  "value": "15"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8372:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8372:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8372:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8422:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8433:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8418:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8418:18:38"
						},
						{
						  "hexValue": "434f4e54524143545f504155534544",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "8438:17:38",
						  "type": "",
						  "value": "CONTRACT_PAUSED"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8411:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8411:45:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8411:45:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8465:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8477:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8488:2:38",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "8473:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8473:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "8465:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "8309:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "8323:4:38",
				  "type": ""
				}
			  ],
			  "src": "8158:339:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8676:168:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8693:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8704:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8686:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8686:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8686:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8727:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8738:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8723:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8723:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8743:2:38",
						  "type": "",
						  "value": "18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8716:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8716:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8716:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8766:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8777:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8762:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8762:18:38"
						},
						{
						  "hexValue": "4e4f5f415641494c41424c455f46554e4453",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "8782:20:38",
						  "type": "",
						  "value": "NO_AVAILABLE_FUNDS"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8755:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8755:48:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8755:48:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8812:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8824:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8835:2:38",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "8820:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8820:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "8812:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "8653:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "8667:4:38",
				  "type": ""
				}
			  ],
			  "src": "8502:342:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9023:227:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9040:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9051:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9033:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9033:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9033:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9074:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9085:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9070:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9070:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9090:2:38",
						  "type": "",
						  "value": "37"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9063:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9063:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9063:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9113:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9124:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9109:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9109:18:38"
						},
						{
						  "hexValue": "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "9129:34:38",
						  "type": "",
						  "value": "ERC20: decreased allowance below"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9102:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9102:62:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9102:62:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9184:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9195:2:38",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9180:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9180:18:38"
						},
						{
						  "hexValue": "207a65726f",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "9200:7:38",
						  "type": "",
						  "value": " zero"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9173:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9173:35:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9173:35:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9217:27:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9229:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9240:3:38",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9225:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9225:19:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "9217:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "9000:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "9014:4:38",
				  "type": ""
				}
			  ],
			  "src": "8849:401:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9429:170:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9446:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9457:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9439:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9439:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9439:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9480:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9491:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9476:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9476:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9496:2:38",
						  "type": "",
						  "value": "20"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9469:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9469:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9469:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9519:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9530:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9515:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9515:18:38"
						},
						{
						  "hexValue": "524f555445525f4f525f4d41504c455f4f4e4c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "9535:22:38",
						  "type": "",
						  "value": "ROUTER_OR_MAPLE_ONLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9508:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9508:50:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9508:50:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9567:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9579:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9590:2:38",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9575:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9575:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "9567:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "9406:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "9420:4:38",
				  "type": ""
				}
			  ],
			  "src": "9255:344:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9778:226:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9795:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9806:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9788:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9788:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9788:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9829:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9840:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9825:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9825:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9845:2:38",
						  "type": "",
						  "value": "36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9818:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9818:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9818:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9868:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9879:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9864:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9864:18:38"
						},
						{
						  "hexValue": "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "9884:34:38",
						  "type": "",
						  "value": "ERC20: approve from the zero add"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9857:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9857:62:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9857:62:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9939:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9950:2:38",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9935:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9935:18:38"
						},
						{
						  "hexValue": "72657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "9955:6:38",
						  "type": "",
						  "value": "ress"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9928:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9928:34:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9928:34:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9971:27:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9983:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9994:3:38",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9979:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9979:19:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "9971:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "9755:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "9769:4:38",
				  "type": ""
				}
			  ],
			  "src": "9604:400:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10183:224:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10200:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10211:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10193:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10193:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10193:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10234:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10245:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10230:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10230:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10250:2:38",
						  "type": "",
						  "value": "34"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10223:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10223:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10223:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10273:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10284:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10269:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10269:18:38"
						},
						{
						  "hexValue": "45524332303a20617070726f766520746f20746865207a65726f206164647265",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "10289:34:38",
						  "type": "",
						  "value": "ERC20: approve to the zero addre"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10262:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10262:62:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10262:62:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10344:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10355:2:38",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10340:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10340:18:38"
						},
						{
						  "hexValue": "7373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "10360:4:38",
						  "type": "",
						  "value": "ss"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10333:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10333:32:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10333:32:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10374:27:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10386:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10397:3:38",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10382:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10382:19:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10374:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "10160:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "10174:4:38",
				  "type": ""
				}
			  ],
			  "src": "10009:398:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10586:227:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10603:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10614:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10596:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10596:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10596:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10637:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10648:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10633:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10633:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10653:2:38",
						  "type": "",
						  "value": "37"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10626:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10626:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10626:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10676:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10687:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10672:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10672:18:38"
						},
						{
						  "hexValue": "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "10692:34:38",
						  "type": "",
						  "value": "ERC20: transfer from the zero ad"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10665:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10665:62:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10665:62:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10747:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10758:2:38",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10743:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10743:18:38"
						},
						{
						  "hexValue": "6472657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "10763:7:38",
						  "type": "",
						  "value": "dress"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10736:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10736:35:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10736:35:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10780:27:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10792:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10803:3:38",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10788:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10788:19:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10780:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "10563:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "10577:4:38",
				  "type": ""
				}
			  ],
			  "src": "10412:401:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10992:225:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11009:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11020:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11002:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11002:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11002:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11043:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11054:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11039:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11039:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11059:2:38",
						  "type": "",
						  "value": "35"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11032:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11032:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11032:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11082:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11093:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11078:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11078:18:38"
						},
						{
						  "hexValue": "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "11098:34:38",
						  "type": "",
						  "value": "ERC20: transfer to the zero addr"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11071:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11071:62:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11071:62:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11153:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11164:2:38",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11149:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11149:18:38"
						},
						{
						  "hexValue": "657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "11169:5:38",
						  "type": "",
						  "value": "ess"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11142:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11142:33:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11142:33:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "11184:27:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11196:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11207:3:38",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11192:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11192:19:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "11184:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "10969:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "10983:4:38",
				  "type": ""
				}
			  ],
			  "src": "10818:399:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11396:228:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11413:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11424:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11406:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11406:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11406:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11447:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11458:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11443:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11443:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11463:2:38",
						  "type": "",
						  "value": "38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11436:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11436:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11436:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11486:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11497:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11482:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11482:18:38"
						},
						{
						  "hexValue": "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "11502:34:38",
						  "type": "",
						  "value": "ERC20: transfer amount exceeds b"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11475:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11475:62:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11475:62:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11557:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11568:2:38",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11553:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11553:18:38"
						},
						{
						  "hexValue": "616c616e6365",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "11573:8:38",
						  "type": "",
						  "value": "alance"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11546:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11546:36:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11546:36:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "11591:27:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11603:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11614:3:38",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11599:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11599:19:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "11591:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "11373:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "11387:4:38",
				  "type": ""
				}
			  ],
			  "src": "11222:402:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11803:223:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11820:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11831:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11813:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11813:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11813:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11854:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11865:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11850:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11850:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11870:2:38",
						  "type": "",
						  "value": "33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11843:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11843:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11843:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11893:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11904:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11889:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11889:18:38"
						},
						{
						  "hexValue": "45524332303a206275726e2066726f6d20746865207a65726f20616464726573",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "11909:34:38",
						  "type": "",
						  "value": "ERC20: burn from the zero addres"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11882:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11882:62:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11882:62:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11964:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11975:2:38",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11960:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11960:18:38"
						},
						{
						  "hexValue": "73",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "11980:3:38",
						  "type": "",
						  "value": "s"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11953:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11953:31:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11953:31:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "11993:27:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "12005:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12016:3:38",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "12001:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12001:19:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "11993:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "11780:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "11794:4:38",
				  "type": ""
				}
			  ],
			  "src": "11629:397:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12205:224:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "12222:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12233:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12215:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12215:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12215:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "12256:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12267:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12252:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12252:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12272:2:38",
						  "type": "",
						  "value": "34"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12245:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12245:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12245:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "12295:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12306:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12291:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12291:18:38"
						},
						{
						  "hexValue": "45524332303a206275726e20616d6f756e7420657863656564732062616c616e",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "12311:34:38",
						  "type": "",
						  "value": "ERC20: burn amount exceeds balan"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12284:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12284:62:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12284:62:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "12366:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12377:2:38",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12362:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12362:18:38"
						},
						{
						  "hexValue": "6365",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "12382:4:38",
						  "type": "",
						  "value": "ce"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12355:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12355:32:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12355:32:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "12396:27:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "12408:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12419:3:38",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "12404:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12404:19:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "12396:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "12182:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "12196:4:38",
				  "type": ""
				}
			  ],
			  "src": "12031:398:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12483:79:38",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "12493:17:38",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "12505:1:38"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "12508:1:38"
						}
					  ],
					  "functionName": {
						"name": "sub",
						"nodeType": "YulIdentifier",
						"src": "12501:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12501:9:38"
					},
					"variableNames": [
					  {
						"name": "diff",
						"nodeType": "YulIdentifier",
						"src": "12493:4:38"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "12534:22:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "12536:16:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "12536:18:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "12536:18:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "diff",
						  "nodeType": "YulIdentifier",
						  "src": "12525:4:38"
						},
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "12531:1:38"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "12522:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12522:11:38"
					},
					"nodeType": "YulIf",
					"src": "12519:37:38"
				  }
				]
			  },
			  "name": "checked_sub_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "12465:1:38",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "12468:1:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "diff",
				  "nodeType": "YulTypedName",
				  "src": "12474:4:38",
				  "type": ""
				}
			  ],
			  "src": "12434:128:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12741:179:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "12758:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12769:2:38",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12751:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12751:21:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12751:21:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "12792:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12803:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12788:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12788:18:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12808:2:38",
						  "type": "",
						  "value": "29"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12781:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12781:30:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12781:30:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "12831:9:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12842:2:38",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12827:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12827:18:38"
						},
						{
						  "hexValue": "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "12847:31:38",
						  "type": "",
						  "value": "ERC20: insufficient allowance"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12820:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12820:59:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12820:59:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "12888:26:38",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "12900:9:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12911:2:38",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "12896:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12896:18:38"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "12888:4:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "12718:9:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "12732:4:38",
				  "type": ""
				}
			  ],
			  "src": "12567:353:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12957:152:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12974:1:38",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12977:77:38",
						  "type": "",
						  "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12967:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12967:88:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12967:88:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13071:1:38",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13074:4:38",
						  "type": "",
						  "value": "0x12"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "13064:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13064:15:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13064:15:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13095:1:38",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13098:4:38",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "13088:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13088:15:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13088:15:38"
				  }
				]
			  },
			  "name": "panic_error_0x12",
			  "nodeType": "YulFunctionDefinition",
			  "src": "12925:184:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13160:74:38",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "13183:22:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x12",
							  "nodeType": "YulIdentifier",
							  "src": "13185:16:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "13185:18:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "13185:18:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "13180:1:38"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "13173:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13173:9:38"
					},
					"nodeType": "YulIf",
					"src": "13170:35:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13214:14:38",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "13223:1:38"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "13226:1:38"
						}
					  ],
					  "functionName": {
						"name": "div",
						"nodeType": "YulIdentifier",
						"src": "13219:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13219:9:38"
					},
					"variableNames": [
					  {
						"name": "r",
						"nodeType": "YulIdentifier",
						"src": "13214:1:38"
					  }
					]
				  }
				]
			  },
			  "name": "checked_div_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "13145:1:38",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "13148:1:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "r",
				  "nodeType": "YulTypedName",
				  "src": "13154:1:38",
				  "type": ""
				}
			  ],
			  "src": "13114:120:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13286:88:38",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "13317:22:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "13319:16:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "13319:18:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "13319:18:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "13302:5:38"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "13313:1:38",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "not",
							"nodeType": "YulIdentifier",
							"src": "13309:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13309:6:38"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "13299:2:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13299:17:38"
					},
					"nodeType": "YulIf",
					"src": "13296:43:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13348:20:38",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "13359:5:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13366:1:38",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "13355:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13355:13:38"
					},
					"variableNames": [
					  {
						"name": "ret",
						"nodeType": "YulIdentifier",
						"src": "13348:3:38"
					  }
					]
				  }
				]
			  },
			  "name": "increment_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "13268:5:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "ret",
				  "nodeType": "YulTypedName",
				  "src": "13278:3:38",
				  "type": ""
				}
			  ],
			  "src": "13239:135:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13554:184:38",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "13571:3:38"
						},
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "13576:6:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "13564:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13564:19:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13564:19:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "pos",
							  "nodeType": "YulIdentifier",
							  "src": "13603:3:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "13608:2:38",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "13599:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13599:12:38"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "13621:2:38",
								  "type": "",
								  "value": "96"
								},
								{
								  "name": "value1",
								  "nodeType": "YulIdentifier",
								  "src": "13625:6:38"
								}
							  ],
							  "functionName": {
								"name": "shl",
								"nodeType": "YulIdentifier",
								"src": "13617:3:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "13617:15:38"
							},
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "13638:26:38",
								  "type": "",
								  "value": "0xffffffffffffffffffffffff"
								}
							  ],
							  "functionName": {
								"name": "not",
								"nodeType": "YulIdentifier",
								"src": "13634:3:38"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "13634:31:38"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "13613:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13613:53:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "13592:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13592:75:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13592:75:38"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "pos",
							  "nodeType": "YulIdentifier",
							  "src": "13687:3:38"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "13692:2:38",
							  "type": "",
							  "value": "52"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "13683:3:38"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13683:12:38"
						},
						{
						  "name": "value2",
						  "nodeType": "YulIdentifier",
						  "src": "13697:6:38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "13676:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13676:28:38"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13676:28:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13713:19:38",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "13724:3:38"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13729:2:38",
						  "type": "",
						  "value": "84"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "13720:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13720:12:38"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "13713:3:38"
					  }
					]
				  }
				]
			  },
			  "name": "abi_encode_tuple_packed_t_uint256_t_address_t_uint256__to_t_uint256_t_address_t_uint256__nonPadded_inplace_fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "pos",
				  "nodeType": "YulTypedName",
				  "src": "13514:3:38",
				  "type": ""
				},
				{
				  "name": "value2",
				  "nodeType": "YulTypedName",
				  "src": "13519:6:38",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "13527:6:38",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "13535:6:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "13546:3:38",
				  "type": ""
				}
			  ],
			  "src": "13379:359:38"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13781:74:38",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "13804:22:38",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x12",
							  "nodeType": "YulIdentifier",
							  "src": "13806:16:38"
							},
							"nodeType": "YulFunctionCall",
							"src": "13806:18:38"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "13806:18:38"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "13801:1:38"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "13794:6:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13794:9:38"
					},
					"nodeType": "YulIf",
					"src": "13791:35:38"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13835:14:38",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "13844:1:38"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "13847:1:38"
						}
					  ],
					  "functionName": {
						"name": "mod",
						"nodeType": "YulIdentifier",
						"src": "13840:3:38"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13840:9:38"
					},
					"variableNames": [
					  {
						"name": "r",
						"nodeType": "YulIdentifier",
						"src": "13835:1:38"
					  }
					]
				  }
				]
			  },
			  "name": "mod_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "13766:1:38",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "13769:1:38",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "r",
				  "nodeType": "YulTypedName",
				  "src": "13775:1:38",
				  "type": ""
				}
			  ],
			  "src": "13743:112:38"
			}
		  ]
		},
		"contents": "{\n    { }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        mstore(headStart, _1)\n        let length := mload(value0)\n        mstore(add(headStart, _1), length)\n        let i := 0\n        for { } lt(i, length) { i := add(i, _1) }\n        {\n            mstore(add(add(headStart, i), 64), mload(add(add(value0, i), _1)))\n        }\n        mstore(add(add(headStart, length), 64), 0)\n        tail := add(add(headStart, and(add(length, 31), not(31))), 64)\n    }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_decode_tuple_t_contract$_LiquidityPool_$7043(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        value2 := calldataload(add(headStart, 64))\n    }\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xff))\n    }\n    function abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function abi_encode_tuple_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 10)\n        mstore(add(headStart, 64), \"OWNER_ONLY\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 11)\n        mstore(add(headStart, 64), \"WRITE_ONCE!\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 17)\n        mstore(add(headStart, 64), \"FUNDS_MOVED_TO_LP\")\n        tail := add(headStart, 96)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), and(value1, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 13)\n        mstore(add(headStart, 64), \"MAPLENFT_ONLY\")\n        tail := add(headStart, 96)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 31)\n        mstore(add(headStart, 64), \"ERC20: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 16)\n        mstore(add(headStart, 64), \"ABOVE_MAX_SUPPLY\")\n        tail := add(headStart, 96)\n    }\n    function checked_exp_helper(_base, exponent) -> power, base\n    {\n        let power_1 := 1\n        power := power_1\n        base := _base\n        for { } gt(exponent, power_1) { }\n        {\n            if gt(base, div(not(0), base)) { panic_error_0x11() }\n            if and(exponent, power_1) { power := mul(power, base) }\n            base := mul(base, base)\n            exponent := shr(power_1, exponent)\n        }\n    }\n    function checked_exp_unsigned(base, exponent) -> power\n    {\n        if iszero(exponent)\n        {\n            power := 1\n            leave\n        }\n        if iszero(base)\n        {\n            power := 0\n            leave\n        }\n        switch base\n        case 1 {\n            power := 1\n            leave\n        }\n        case 2 {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := shl(exponent, 1)\n            leave\n        }\n        if or(and(lt(base, 11), lt(exponent, 78)), and(lt(base, 307), lt(exponent, 32)))\n        {\n            power := exp(base, exponent)\n            leave\n        }\n        let power_1, base_1 := checked_exp_helper(base, exponent)\n        if gt(power_1, div(not(0), base_1)) { panic_error_0x11() }\n        power := mul(power_1, base_1)\n    }\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power\n    {\n        power := checked_exp_unsigned(base, and(exponent, 0xff))\n    }\n    function abi_encode_tuple_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 15)\n        mstore(add(headStart, 64), \"CONTRACT_PAUSED\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 18)\n        mstore(add(headStart, 64), \"NO_AVAILABLE_FUNDS\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC20: decreased allowance below\")\n        mstore(add(headStart, 96), \" zero\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 20)\n        mstore(add(headStart, 64), \"ROUTER_OR_MAPLE_ONLY\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"ERC20: approve from the zero add\")\n        mstore(add(headStart, 96), \"ress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC20: approve to the zero addre\")\n        mstore(add(headStart, 96), \"ss\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC20: transfer from the zero ad\")\n        mstore(add(headStart, 96), \"dress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 35)\n        mstore(add(headStart, 64), \"ERC20: transfer to the zero addr\")\n        mstore(add(headStart, 96), \"ess\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"ERC20: transfer amount exceeds b\")\n        mstore(add(headStart, 96), \"alance\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"ERC20: burn from the zero addres\")\n        mstore(add(headStart, 96), \"s\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC20: burn amount exceeds balan\")\n        mstore(add(headStart, 96), \"ce\")\n        tail := add(headStart, 128)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 29)\n        mstore(add(headStart, 64), \"ERC20: insufficient allowance\")\n        tail := add(headStart, 96)\n    }\n    function panic_error_0x12()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n    function checked_div_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := div(x, y)\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n    function abi_encode_tuple_packed_t_uint256_t_address_t_uint256__to_t_uint256_t_address_t_uint256__nonPadded_inplace_fromStack_reversed(pos, value2, value1, value0) -> end\n    {\n        mstore(pos, value0)\n        mstore(add(pos, 32), and(shl(96, value1), not(0xffffffffffffffffffffffff)))\n        mstore(add(pos, 52), value2)\n        end := add(pos, 84)\n    }\n    function mod_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n}",
		"id": 38,
		"language": "Yul",
		"name": "#utility.yul"
	  }
	],
	"sourceMap": "149:8684:27:-:0;;;668:26;;;-1:-1:-1;;668:26:27;;;;;;1038:16;;1085:2;1060:27;;1379:323;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1978:113:9;;;;;;;;;;;;;-1:-1:-1;;;1978:113:9;;;;;;;;;;;;;;;;-1:-1:-1;;;1978:113:9;;;2052:5;2044;:13;;;;;;:::i;:::-;-1:-1:-1;2067:7:9;:17;2077:7;2067;:17;:::i;:::-;-1:-1:-1;1480:10:27::1;::::0;-1:-1:-1;;3175:2:9;;3093:91;1480:10:27::1;1476:14;::::0;:2:::1;:14;:::i;:::-;1466:24;::::0;:7:::1;:24;:::i;:::-;1453:10;:37:::0;;;1501:32:::1;::::0;1515:4:::1;::::0;1501:5:::1;:32::i;:::-;1544:5;:18:::0;;-1:-1:-1;;;;;;1544:18:27::1;1552:10;1544:18:::0;;;::::1;::::0;;;::::1;::::0;;;;1573:14:::1;:25:::0;;-1:-1:-1;;;;;;1573:25:27::1;-1:-1:-1::0;;;;;1573:25:27;;::::1;;::::0;;1656:5;::::1;;-1:-1:-1::0;1642:20:27;;;:13:::1;:20;::::0;;;;:27;;-1:-1:-1;;1642:27:27::1;-1:-1:-1::0;1642:27:27::1;::::0;;149:8684;;8402:389:9;-1:-1:-1;;;;;8485:21:9;;8477:65;;;;-1:-1:-1;;;8477:65:9;;4928:2:38;8477:65:9;;;4910:21:38;4967:2;4947:18;;;4940:30;5006:33;4986:18;;;4979:61;5057:18;;8477:65:9;;;;;;;;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8645:18:9;;:9;:18;;;;;;;;;;:28;;8667:6;;8645:9;:28;;8667:6;;8645:28;:::i;:::-;;;;-1:-1:-1;;8688:37:9;;5362:25:38;;;-1:-1:-1;;;;;8688:37:9;;;8705:1;;8688:37;;5350:2:38;5335:18;8688:37:9;;;;;;;8402:389;;:::o;11786:121::-;;;;:::o;14:298:38:-;92:6;145:2;133:9;124:7;120:23;116:32;113:52;;;161:1;158;151:12;113:52;187:16;;-1:-1:-1;;;;;232:31:38;;222:42;;212:70;;278:1;275;268:12;212:70;301:5;14:298;-1:-1:-1;;;14:298:38:o;317:127::-;378:10;373:3;369:20;366:1;359:31;409:4;406:1;399:15;433:4;430:1;423:15;449:380;528:1;524:12;;;;571;;;592:61;;646:4;638:6;634:17;624:27;;592:61;699:2;691:6;688:14;668:18;665:38;662:161;;745:10;740:3;736:20;733:1;726:31;780:4;777:1;770:15;808:4;805:1;798:15;662:161;;449:380;;;:::o;960:545::-;1062:2;1057:3;1054:11;1051:448;;;1098:1;1123:5;1119:2;1112:17;1168:4;1164:2;1154:19;1238:2;1226:10;1222:19;1219:1;1215:27;1209:4;1205:38;1274:4;1262:10;1259:20;1256:47;;;-1:-1:-1;1297:4:38;1256:47;1352:2;1347:3;1343:12;1340:1;1336:20;1330:4;1326:31;1316:41;;1407:82;1425:2;1418:5;1415:13;1407:82;;;1470:17;;;1451:1;1440:13;1407:82;;;1411:3;;;960:545;;;:::o;1681:1352::-;1801:10;;-1:-1:-1;;;;;1823:30:38;;1820:56;;;1856:18;;:::i;:::-;1885:97;1975:6;1935:38;1967:4;1961:11;1935:38;:::i;:::-;1929:4;1885:97;:::i;:::-;2037:4;;2101:2;2090:14;;2118:1;2113:663;;;;2820:1;2837:6;2834:89;;;-1:-1:-1;2889:19:38;;;2883:26;2834:89;-1:-1:-1;;1638:1:38;1634:11;;;1630:24;1626:29;1616:40;1662:1;1658:11;;;1613:57;2936:81;;2083:944;;2113:663;907:1;900:14;;;944:4;931:18;;-1:-1:-1;;2149:20:38;;;2267:236;2281:7;2278:1;2275:14;2267:236;;;2370:19;;;2364:26;2349:42;;2462:27;;;;2430:1;2418:14;;;;2297:19;;2267:236;;;2271:3;2531:6;2522:7;2519:19;2516:201;;;2592:19;;;2586:26;-1:-1:-1;;2675:1:38;2671:14;;;2687:3;2667:24;2663:37;2659:42;2644:58;2629:74;;2516:201;-1:-1:-1;;;;;2763:1:38;2747:14;;;2743:22;2730:36;;-1:-1:-1;1681:1352:38:o;3038:127::-;3099:10;3094:3;3090:20;3087:1;3080:31;3130:4;3127:1;3120:15;3154:4;3151:1;3144:15;3170:422;3259:1;3302:5;3259:1;3316:270;3337:7;3327:8;3324:21;3316:270;;;3396:4;3392:1;3388:6;3384:17;3378:4;3375:27;3372:53;;;3405:18;;:::i;:::-;3455:7;3445:8;3441:22;3438:55;;;3475:16;;;;3438:55;3554:22;;;;3514:15;;;;3316:270;;;3320:3;3170:422;;;;;:::o;3597:806::-;3646:5;3676:8;3666:80;;-1:-1:-1;3717:1:38;3731:5;;3666:80;3765:4;3755:76;;-1:-1:-1;3802:1:38;3816:5;;3755:76;3847:4;3865:1;3860:59;;;;3933:1;3928:130;;;;3840:218;;3860:59;3890:1;3881:10;;3904:5;;;3928:130;3965:3;3955:8;3952:17;3949:43;;;3972:18;;:::i;:::-;-1:-1:-1;;4028:1:38;4014:16;;4043:5;;3840:218;;4142:2;4132:8;4129:16;4123:3;4117:4;4114:13;4110:36;4104:2;4094:8;4091:16;4086:2;4080:4;4077:12;4073:35;4070:77;4067:159;;;-1:-1:-1;4179:19:38;;;4211:5;;4067:159;4258:34;4283:8;4277:4;4258:34;:::i;:::-;4328:6;4324:1;4320:6;4316:19;4307:7;4304:32;4301:58;;;4339:18;;:::i;:::-;4377:20;;-1:-1:-1;3597:806:38;;;;;:::o;4408:140::-;4466:5;4495:47;4536:4;4526:8;4522:19;4516:4;4495:47;:::i;4553:168::-;4626:9;;;4657;;4674:15;;;4668:22;;4654:37;4644:71;;4695:18;;:::i;5086:125::-;5151:9;;;5172:10;;;5169:36;;;5185:18;;:::i;5216:177::-;149:8684:27;;;;;;",
	"deployedSourceMap": "149:8684:27:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;504:31;;;;;;;;;;;;;;;;;;;160:25:38;;;148:2;133:18;504:31:27;;;;;;;;2156:98:9;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;4433:197::-;;;;;;;;;;-1:-1:-1;4433:197:9;;;;;:::i;:::-;;:::i;:::-;;;1393:14:38;;1386:22;1368:41;;1356:2;1341:18;4433:197:9;1228:187:38;3307:173:27;;;;;;;;;;-1:-1:-1;3307:173:27;;;;;:::i;:::-;;:::i;:::-;;4680:103;;;;;;;;;;;;;:::i;6713:761::-;;;;;;;;;;-1:-1:-1;6713:761:27;;;;;:::i;:::-;;:::i;3244:106:9:-;;;;;;;;;;-1:-1:-1;3331:12:9;;3244:106;;856:23:27;;;;;;;;;;-1:-1:-1;856:23:27;;;;-1:-1:-1;;;;;856:23:27;;;;;;-1:-1:-1;;;;;2110:55:38;;;2092:74;;2080:2;2065:18;856:23:27;1946:226:38;5911:115:27;;;;;;;;;;-1:-1:-1;5911:115:27;;;;;:::i;:::-;;:::i;5192:286:9:-;;;;;;;;;;-1:-1:-1;5192:286:9;;;;;:::i;:::-;;:::i;3093:91::-;;;;;;;;;;-1:-1:-1;3093:91:9;;3175:2;2780:36:38;;2768:2;2753:18;3093:91:9;2638:184:38;402:25:27;;;;;;;;;;;;;;;;5873:234:9;;;;;;;;;;-1:-1:-1;5873:234:9;;;;;:::i;:::-;;:::i;1208:50:27:-;;;;;;;;;;-1:-1:-1;1208:50:27;;;;;:::i;:::-;;;;;;;;;;;;;;1288:45;;;;;;;;;;-1:-1:-1;1288:45:27;;;;;:::i;:::-;;;;;;;;;;;;;;;;5438:335;;;;;;;;;;-1:-1:-1;5438:335:27;;;;;:::i;:::-;;:::i;2586:172::-;;;;;;;;;;-1:-1:-1;2586:172:27;;;;;:::i;:::-;;:::i;765:37::-;;;;;;;;;;-1:-1:-1;765:37:27;;;;-1:-1:-1;;;;;765:37:27;;;978:28;;;;;;;;;;-1:-1:-1;978:28:27;;;;-1:-1:-1;;;;;978:28:27;;;4069:400;;;;;;;;;;;;;:::i;3119:183::-;;;;;;;;;;-1:-1:-1;3119:183:27;;;;;:::i;:::-;;:::i;633:29::-;;;;;;;;;;-1:-1:-1;633:29:27;;;;;;;;;;;447:31;;;;;;;;;;;;477:1;447:31;;885:25;;;;;;;;;;-1:-1:-1;885:25:27;;;;-1:-1:-1;;;;;885:25:27;;;3408:125:9;;;;;;;;;;-1:-1:-1;3408:125:9;;;;;:::i;:::-;-1:-1:-1;;;;;3508:18:9;3482:7;3508:18;;;;;;;;;;;;3408:125;2763:168:27;;;;;;;;;;-1:-1:-1;2763:168:27;;;;;:::i;:::-;;:::i;8364:466::-;;;;;;;;;;-1:-1:-1;8364:466:27;;;;;:::i;:::-;;:::i;728:20::-;;;;;;;;;;-1:-1:-1;728:20:27;;;;;;;-1:-1:-1;;;;;728:20:27;;;2367:102:9;;;;;;;;;;;;;:::i;5783:122:27:-;;;;;;;;;;-1:-1:-1;5783:122:27;;;;;:::i;:::-;;:::i;6594:427:9:-;;;;;;;;;;-1:-1:-1;6594:427:9;;;;;:::i;:::-;;:::i;3729:189::-;;;;;;;;;;-1:-1:-1;3729:189:9;;;;;:::i;:::-;;:::i;1122:50:27:-;;;;;;;;;;-1:-1:-1;1122:50:27;;;;;:::i;:::-;;;;;;;;;;;;;;668:26;;;;;;;;;;-1:-1:-1;668:26:27;;;;;;;;;;;916;;;;;;;;;;-1:-1:-1;916:26:27;;;;-1:-1:-1;;;;;916:26:27;;;4510:131;;;;;;;;;;;;;:::i;3680:344::-;;;:::i;6189:455::-;;;;;;;;;;-1:-1:-1;6189:455:27;;;;;:::i;:::-;;:::i;3976:149:9:-;;;;;;;;;;-1:-1:-1;3976:149:9;;;;;:::i;:::-;-1:-1:-1;;;;;4091:18:9;;;4065:7;4091:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3976:149;4820:106:27;;;;;;;;;;-1:-1:-1;4820:106:27;;;;;:::i;:::-;;:::i;2936:178::-;;;;;;;;;;-1:-1:-1;2936:178:27;;;;;:::i;:::-;;:::i;948:24::-;;;;;;;;;;-1:-1:-1;948:24:27;;;;-1:-1:-1;;;;;948:24:27;;;569:28;;;;;;;;;;-1:-1:-1;569:28:27;;;;;;;;3485:165;;;;;;;;;;-1:-1:-1;3485:165:27;;;;;:::i;:::-;;:::i;1093:22::-;;;;;;;;;;-1:-1:-1;1093:22:27;;;;-1:-1:-1;;;;;1093:22:27;;;829:21;;;;;;;;;;-1:-1:-1;829:21:27;;;;-1:-1:-1;;;;;829:21:27;;;2156:98:9;2210:13;2242:5;2235:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98;:::o;4433:197::-;4516:4;719:10:19;4570:32:9;719:10:19;4586:7:9;4595:6;4570:8;:32::i;:::-;4619:4;4612:11;;;4433:197;;;;;:::o;3307:173:27:-;1761:5;;;;;-1:-1:-1;;;;;1761:5:27;1747:10;:19;1739:42;;;;-1:-1:-1;;;1739:42:27;;4111:2:38;1739:42:27;;;4093:21:38;4150:2;4130:18;;;4123:30;-1:-1:-1;;;4169:18:38;;;4162:40;4219:18;;1739:42:27;;;;;;;;;3401:9:::1;::::0;-1:-1:-1;;;;;3401:9:27::1;3393:32:::0;3385:56:::1;;;::::0;-1:-1:-1;;;3385:56:27;;4450:2:38;3385:56:27::1;::::0;::::1;4432:21:38::0;4489:2;4469:18;;;4462:30;-1:-1:-1;;;4508:18:38;;;4501:41;4559:18;;3385:56:27::1;4248:335:38::0;3385:56:27::1;3451:9;:22:::0;;-1:-1:-1;;;;;;3451:22:27::1;-1:-1:-1::0;;;;;3451:22:27;;;::::1;::::0;;;::::1;::::0;;3307:173::o;4680:103::-;1761:5;;;;;-1:-1:-1;;;;;1761:5:27;1747:10;:19;1739:42;;;;-1:-1:-1;;;1739:42:27;;4111:2:38;1739:42:27;;;4093:21:38;4150:2;4130:18;;;4123:30;-1:-1:-1;;;4169:18:38;;;4162:40;4219:18;;1739:42:27;3909:334:38;1739:42:27;4741:7:::1;::::0;;-1:-1:-1;;4730:18:27;::::1;4741:7:::0;;;;::::1;;;4740:8;4730:18:::0;;::::1;;::::0;;4763:13:::1;::::0;::::1;::::0;-1:-1:-1;;4763:13:27::1;4680:103::o:0;6713:761::-;1761:5;;;;;-1:-1:-1;;;;;1761:5:27;1747:10;:19;1739:42;;;;-1:-1:-1;;;1739:42:27;;4111:2:38;1739:42:27;;;4093:21:38;4150:2;4130:18;;;4123:30;-1:-1:-1;;;4169:18:38;;;4162:40;4219:18;;1739:42:27;3909:334:38;1739:42:27;2300:17:::1;::::0;::::1;::::0;::::1;;;2299:18;2291:48;;;::::0;-1:-1:-1;;;2291:48:27;;4790:2:38;2291:48:27::1;::::0;::::1;4772:21:38::0;4829:2;4809:18;;;4802:30;-1:-1:-1;;;4848:18:38;;;4841:47;4905:18;;2291:48:27::1;4588:341:38::0;2291:48:27::1;6824:17:::2;:24:::0;;-1:-1:-1;;6824:24:27::2;;;::::0;;6962:16:::2;::::0;6824:24;;6962:22:::2;::::0;6981:3:::2;6962:22;:::i;:::-;6928:56;;7023:125;7060:4;7087:13;7115:23;7023:15;:125::i;:::-;7259:16;::::0;7230:120:::2;::::0;;;;::::2;::::0;::::2;5470:25:38::0;;;7335:4:27::2;5511:18:38::0;;;5504:83;-1:-1:-1;;;;;7230:21:27;::::2;::::0;::::2;::::0;5443:18:38;;7230:120:27::2;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;::::0;::::2;;;;;;;;;;7394:13;-1:-1:-1::0;;;;;7394:30:27::2;;:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;::::0;::::2;;;;;;;;;7437:30;:28;:30::i;:::-;6814:660;6713:761:::0;:::o;5911:115::-;1860:8;;-1:-1:-1;;;;;1860:8:27;1846:10;:22;;:50;;-1:-1:-1;1886:10:27;;-1:-1:-1;;;;;1886:10:27;1872;:24;1846:50;:79;;;-1:-1:-1;1914:11:27;;-1:-1:-1;;;;;1914:11:27;1900:10;:25;1846:79;1838:105;;;;-1:-1:-1;;;1838:105:27;;5800:2:38;1838:105:27;;;5782:21:38;5839:2;5819:18;;;5812:30;5878:15;5858:18;;;5851:43;5911:18;;1838:105:27;5598:337:38;1838:105:27;5996:22:::1;6002:7;6011:6;5996:5;:22::i;5192:286:9:-:0;5319:4;719:10:19;5375:38:9;5391:4;719:10:19;5406:6:9;5375:15;:38::i;:::-;5423:27;5433:4;5439:2;5443:6;5423:9;:27::i;:::-;-1:-1:-1;5467:4:9;;5192:286;-1:-1:-1;;;;5192:286:9:o;5873:234::-;719:10:19;5961:4:9;4091:18;;;:11;:18;;;;;;;;-1:-1:-1;;;;;4091:27:9;;;;;;;;;;5961:4;;719:10:19;6015:64:9;;719:10:19;;6031:7:9;;6068:10;;6040:25;:38;;;;:::i;:::-;6015:8;:64::i;5438:335:27:-;1761:5;;;;;-1:-1:-1;;;;;1761:5:27;1747:10;:19;1739:42;;;;-1:-1:-1;;;1739:42:27;;4111:2:38;1739:42:27;;;4093:21:38;4150:2;4130:18;;;4123:30;-1:-1:-1;;;4169:18:38;;;4162:40;4219:18;;1739:42:27;3909:334:38;1739:42:27;-1:-1:-1;;;;;5522:21:27;::::1;5514:65;;;::::0;-1:-1:-1;;;5514:65:27;;6272:2:38;5514:65:27::1;::::0;::::1;6254:21:38::0;6311:2;6291:18;;;6284:30;6350:33;6330:18;;;6323:61;6401:18;;5514:65:27::1;6070:355:38::0;5514:65:27::1;5662:10;;5652:6;5636:13;3331:12:9::0;;;3244:106;5636:13:27::1;:22;;;;:::i;:::-;:36;;5628:65;;;::::0;-1:-1:-1;;;5628:65:27;;6632:2:38;5628:65:27::1;::::0;::::1;6614:21:38::0;6671:2;6651:18;;;6644:30;6710:18;6690;;;6683:46;6746:18;;5628:65:27::1;6430:340:38::0;5628:65:27::1;5727:39;5733:7:::0;5751:14:::1;3175:2:9::0;5751::27::1;:14;:::i;:::-;5742:23;::::0;:6;:23:::1;:::i;:::-;5727:5;:39::i;2586:172::-:0;1761:5;;;;;-1:-1:-1;;;;;1761:5:27;1747:10;:19;1739:42;;;;-1:-1:-1;;;1739:42:27;;4111:2:38;1739:42:27;;;4093:21:38;4150:2;4130:18;;;4123:30;-1:-1:-1;;;4169:18:38;;;4162:40;4219:18;;1739:42:27;3909:334:38;1739:42:27;2674:6:::1;::::0;-1:-1:-1;;;;;2674:6:27::1;2666:29:::0;2658:53:::1;;;::::0;-1:-1:-1;;;2658:53:27;;4450:2:38;2658:53:27::1;::::0;::::1;4432:21:38::0;4489:2;4469:18;;;4462:30;-1:-1:-1;;;4508:18:38;;;4501:41;4559:18;;2658:53:27::1;4248:335:38::0;2658:53:27::1;2735:6;:16:::0;;-1:-1:-1;;;;;;2735:16:27::1;-1:-1:-1::0;;;;;2735:16:27;;;::::1;::::0;;;::::1;::::0;;2586:172::o;4069:400::-;2430:16;;;;2429:17;2421:45;;;;-1:-1:-1;;;2421:45:27;;8360:2:38;2421:45:27;;;8342:21:38;8399:2;8379:18;;;8372:30;8438:17;8418:18;;;8411:45;8473:18;;2421:45:27;8158:339:38;2421:45:27;2300:17:::1;::::0;::::1;::::0;::::1;;;2299:18;2291:48;;;::::0;-1:-1:-1;;;2291:48:27;;4790:2:38;2291:48:27::1;::::0;::::1;4772:21:38::0;4829:2;4809:18;;;4802:30;-1:-1:-1;;;4848:18:38;;;4841:47;4905:18;;2291:48:27::1;4588:341:38::0;2291:48:27::1;4158:10:::2;4172:1;4142:27:::0;;;:15:::2;:27;::::0;;;;;4134:62:::2;;;::::0;-1:-1:-1;;;4134:62:27;;8704:2:38;4134:62:27::2;::::0;::::2;8686:21:38::0;8743:2;8723:18;;;8716:30;8782:20;8762:18;;;8755:48;8820:18;;4134:62:27::2;8502:342:38::0;4134:62:27::2;4309:10;4269:21;4293:27:::0;;;:15:::2;:27;::::0;;;;;;4330:31;;;4293:27;4372:57:::2;::::0;4396:4:::2;::::0;4293:27;4372:15:::2;:57::i;:::-;4124:345;4069:400::o:0;3119:183::-;1761:5;;;;;-1:-1:-1;;;;;1761:5:27;1747:10;:19;1739:42;;;;-1:-1:-1;;;1739:42:27;;4111:2:38;1739:42:27;;;4093:21:38;4150:2;4130:18;;;4123:30;-1:-1:-1;;;4169:18:38;;;4162:40;4219:18;;1739:42:27;3909:334:38;1739:42:27;3217:11:::1;::::0;-1:-1:-1;;;;;3217:11:27::1;3209:34:::0;3201:58:::1;;;::::0;-1:-1:-1;;;3201:58:27;;4450:2:38;3201:58:27::1;::::0;::::1;4432:21:38::0;4489:2;4469:18;;;4462:30;-1:-1:-1;;;4508:18:38;;;4501:41;4559:18;;3201:58:27::1;4248:335:38::0;3201:58:27::1;3269:11;:26:::0;;-1:-1:-1;;;;;;3269:26:27::1;-1:-1:-1::0;;;;;3269:26:27;;;::::1;::::0;;;::::1;::::0;;3119:183::o;2763:168::-;1761:5;;;;;-1:-1:-1;;;;;1761:5:27;1747:10;:19;1739:42;;;;-1:-1:-1;;;1739:42:27;;4111:2:38;1739:42:27;;;4093:21:38;4150:2;4130:18;;;4123:30;-1:-1:-1;;;4169:18:38;;;4162:40;4219:18;;1739:42:27;3909:334:38;1739:42:27;2855:8:::1;::::0;-1:-1:-1;;;;;2855:8:27::1;2847:31:::0;2839:55:::1;;;::::0;-1:-1:-1;;;2839:55:27;;4450:2:38;2839:55:27::1;::::0;::::1;4432:21:38::0;4489:2;4469:18;;;4462:30;-1:-1:-1;;;4508:18:38;;;4501:41;4559:18;;2839:55:27::1;4248:335:38::0;2839:55:27::1;2904:8;:20:::0;;-1:-1:-1;;;;;;2904:20:27::1;-1:-1:-1::0;;;;;2904:20:27;;;::::1;::::0;;;::::1;::::0;;2763:168::o;8364:466::-;8437:13;:21;;-1:-1:-1;;;;;;8437:21:27;-1:-1:-1;;;;;8437:21:27;;;;;8468:15;:25;;;-1:-1:-1;8515:12:27;8523:3;8515:7;:12::i;:::-;8503:24;;8550:17;;8542:4;:25;8537:287;;8648:14;;8673:13;;8689:15;;8624:81;;-1:-1:-1;;;;;8648:14:27;;;;8673:13;;8624:15;:81::i;:::-;8738:19;;8752:4;1368:41:38;;8738:19:27;;1356:2:38;1341:18;8738:19:27;;;;;;;;8427:403;8364:466;;:::o;8537:287::-;8793:20;;8807:5;1368:41:38;;8793:20:27;;1356:2:38;1341:18;8793:20:27;1228:187:38;2367:102:9;2423:13;2455:7;2448:14;;;;;:::i;5783:122:27:-;1761:5;;;;;-1:-1:-1;;;;;1761:5:27;1747:10;:19;1739:42;;;;-1:-1:-1;;;1739:42:27;;4111:2:38;1739:42:27;;;4093:21:38;4150:2;4130:18;;;4123:30;-1:-1:-1;;;4169:18:38;;;4162:40;4219:18;;1739:42:27;3909:334:38;1739:42:27;5859:39:::1;5865:7:::0;5883:14:::1;3175:2:9::0;5883::27::1;:14;:::i;:::-;5874:23;::::0;:6;:23:::1;:::i;:::-;5859:5;:39::i;6594:427:9:-:0;719:10:19;6687:4:9;4091:18;;;:11;:18;;;;;;;;-1:-1:-1;;;;;4091:27:9;;;;;;;;;;6687:4;;719:10:19;6831:15:9;6811:16;:35;;6803:85;;;;-1:-1:-1;;;6803:85:9;;9051:2:38;6803:85:9;;;9033:21:38;9090:2;9070:18;;;9063:30;9129:34;9109:18;;;9102:62;9200:7;9180:18;;;9173:35;9225:19;;6803:85:9;8849:401:38;6803:85:9;6922:60;6931:5;6938:7;6966:15;6947:16;:34;6922:8;:60::i;3729:189::-;3808:4;719:10:19;3862:28:9;719:10:19;3879:2:9;3883:6;3862:9;:28::i;4510:131:27:-;1761:5;;;;;-1:-1:-1;;;;;1761:5:27;1747:10;:19;1739:42;;;;-1:-1:-1;;;1739:42:27;;4111:2:38;1739:42:27;;;4093:21:38;4150:2;4130:18;;;4123:30;-1:-1:-1;;;4169:18:38;;;4162:40;4219:18;;1739:42:27;3909:334:38;1739:42:27;4590:16:::1;::::0;;-1:-1:-1;;4570:36:27;::::1;4590:16;::::0;;::::1;4589:17;4570:36;::::0;;4621:13:::1;::::0;::::1;::::0;4590:16:::1;::::0;4621:13:::1;4510:131::o:0;3680:344::-;2430:16;;;;2429:17;2421:45;;;;-1:-1:-1;;;2421:45:27;;8360:2:38;2421:45:27;;;8342:21:38;8399:2;8379:18;;;8372:30;8438:17;8418:18;;;8411:45;8473:18;;2421:45:27;8158:339:38;2421:45:27;2300:17:::1;::::0;::::1;::::0;::::1;;;2299:18;2291:48;;;::::0;-1:-1:-1;;;2291:48:27;;4790:2:38;2291:48:27::1;::::0;::::1;4772:21:38::0;4829:2;4809:18;;;4802:30;-1:-1:-1;;;4848:18:38;;;4841:47;4905:18;;2291:48:27::1;4588:341:38::0;2291:48:27::1;3786:19:::2;3808:15;:9;3820:3;3808:15;:::i;:::-;3849:10;3833:27;::::0;;;:15:::2;:27;::::0;;;;:42;;3786:37;;-1:-1:-1;3786:37:27;;3833:27;;;:42:::2;::::0;3786:37;;3833:42:::2;:::i;:::-;::::0;;;-1:-1:-1;;3901:10:27::2;3885:27;::::0;;;:15:::2;:27;::::0;;;;:40;;3916:9:::2;::::0;3885:27;:40:::2;::::0;3916:9;;3885:40:::2;:::i;:::-;;;;;;;;3955:9;3935:16;;:29;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;;3980:37:27::2;::::0;160:25:38;;;3993:10:27::2;::::0;3980:37:::2;::::0;148:2:38;133:18;3980:37:27::2;;;;;;;3742:282;3680:344::o:0;6189:455::-;2063:6;;6310:4;;-1:-1:-1;;;;;2063:6:27;2049:10;:20;;:46;;-1:-1:-1;2087:8:27;;-1:-1:-1;;;;;2087:8:27;2073:10;:22;2049:46;:74;;;-1:-1:-1;2113:10:27;;-1:-1:-1;;;;;2113:10:27;2099;:24;2049:74;:103;;;-1:-1:-1;2141:11:27;;-1:-1:-1;;;;;2141:11:27;2127:10;:25;2049:103;:130;;;-1:-1:-1;2170:9:27;;-1:-1:-1;;;;;2170:9:27;2156:10;:23;2049:130;2041:163;;;;-1:-1:-1;;;2041:163:27;;9457:2:38;2041:163:27;;;9439:21:38;9496:2;9476:18;;;9469:30;9535:22;9515:18;;;9508:50;9575:18;;2041:163:27;9255:344:38;2041:163:27;6569:10:::1;4065:7:9::0;4091:18;;;:11;:18;;;;;;;;6589:4:27::1;4091:27:9::0;;;;;;;;6481:134:27::1;::::0;6503:6;;6531:8;;6598:7;;6559:36:::1;3976:149:9::0;6481:134:27::1;-1:-1:-1::0;6633:4:27::1;6189:455:::0;;;;;:::o;4820:106::-;1761:5;;;;;-1:-1:-1;;;;;1761:5:27;1747:10;:19;1739:42;;;;-1:-1:-1;;;1739:42:27;;4111:2:38;1739:42:27;;;4093:21:38;4150:2;4130:18;;;4123:30;-1:-1:-1;;;4169:18:38;;;4162:40;4219:18;;1739:42:27;3909:334:38;1739:42:27;-1:-1:-1;;;;;4890:22:27::1;;::::0;;;:13:::1;:22;::::0;;;;:29;;-1:-1:-1;;4890:29:27::1;4915:4;4890:29;::::0;;4820:106::o;2936:178::-;1761:5;;;;;-1:-1:-1;;;;;1761:5:27;1747:10;:19;1739:42;;;;-1:-1:-1;;;1739:42:27;;4111:2:38;1739:42:27;;;4093:21:38;4150:2;4130:18;;;4123:30;-1:-1:-1;;;4169:18:38;;;4162:40;4219:18;;1739:42:27;3909:334:38;1739:42:27;3032:10:::1;::::0;-1:-1:-1;;;;;3032:10:27::1;3024:33:::0;3016:57:::1;;;::::0;-1:-1:-1;;;3016:57:27;;4450:2:38;3016:57:27::1;::::0;::::1;4432:21:38::0;4489:2;4469:18;;;4462:30;-1:-1:-1;;;4508:18:38;;;4501:41;4559:18;;3016:57:27::1;4248:335:38::0;3016:57:27::1;3083:10;:24:::0;;-1:-1:-1;;;;;;3083:24:27::1;-1:-1:-1::0;;;;;3083:24:27;;;::::1;::::0;;;::::1;::::0;;2936:178::o;3485:165::-;1761:5;;;;;-1:-1:-1;;;;;1761:5:27;1747:10;:19;1739:42;;;;-1:-1:-1;;;1739:42:27;;4111:2:38;1739:42:27;;;4093:21:38;4150:2;4130:18;;;4123:30;-1:-1:-1;;;4169:18:38;;;4162:40;4219:18;;1739:42:27;3909:334:38;1739:42:27;3577:7:::1;::::0;-1:-1:-1;;;;;3577:7:27::1;3569:30:::0;3561:54:::1;;;::::0;-1:-1:-1;;;3561:54:27;;4450:2:38;3561:54:27::1;::::0;::::1;4432:21:38::0;4489:2;4469:18;;;4462:30;-1:-1:-1;;;4508:18:38;;;4501:41;4559:18;;3561:54:27::1;4248:335:38::0;3561:54:27::1;3625:7;:18:::0;;-1:-1:-1;;;;;;3625:18:27::1;-1:-1:-1::0;;;;;3625:18:27;;;::::1;::::0;;;::::1;::::0;;3485:165::o;10110:370:9:-;-1:-1:-1;;;;;10241:19:9;;10233:68;;;;-1:-1:-1;;;10233:68:9;;9806:2:38;10233:68:9;;;9788:21:38;9845:2;9825:18;;;9818:30;9884:34;9864:18;;;9857:62;9955:6;9935:18;;;9928:34;9979:19;;10233:68:9;9604:400:38;10233:68:9;-1:-1:-1;;;;;10319:21:9;;10311:68;;;;-1:-1:-1;;;10311:68:9;;10211:2:38;10311:68:9;;;10193:21:38;10250:2;10230:18;;;10223:30;10289:34;10269:18;;;10262:62;10360:4;10340:18;;;10333:32;10382:19;;10311:68:9;10009:398:38;10311:68:9;-1:-1:-1;;;;;10390:18:9;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;10441:32;;160:25:38;;;10441:32:9;;133:18:38;10441:32:9;;;;;;;10110:370;;;:::o;7475:651::-;-1:-1:-1;;;;;7601:18:9;;7593:68;;;;-1:-1:-1;;;7593:68:9;;10614:2:38;7593:68:9;;;10596:21:38;10653:2;10633:18;;;10626:30;10692:34;10672:18;;;10665:62;10763:7;10743:18;;;10736:35;10788:19;;7593:68:9;10412:401:38;7593:68:9;-1:-1:-1;;;;;7679:16:9;;7671:64;;;;-1:-1:-1;;;7671:64:9;;11020:2:38;7671:64:9;;;11002:21:38;11059:2;11039:18;;;11032:30;11098:34;11078:18;;;11071:62;11169:5;11149:18;;;11142:33;11192:19;;7671:64:9;10818:399:38;7671:64:9;-1:-1:-1;;;;;7817:15:9;;7795:19;7817:15;;;;;;;;;;;7850:21;;;;7842:72;;;;-1:-1:-1;;;7842:72:9;;11424:2:38;7842:72:9;;;11406:21:38;11463:2;11443:18;;;11436:30;11502:34;11482:18;;;11475:62;11573:8;11553:18;;;11546:36;11599:19;;7842:72:9;11222:402:38;7842:72:9;-1:-1:-1;;;;;7948:15:9;;;:9;:15;;;;;;;;;;;7966:20;;;7948:38;;8006:13;;;;;;;;:23;;7980:6;;7948:9;8006:23;;7980:6;;8006:23;:::i;:::-;;;;;;;;8060:2;-1:-1:-1;;;;;8045:26:9;8054:4;-1:-1:-1;;;;;8045:26:9;;8064:6;8045:26;;;;160:25:38;;148:2;133:18;;14:177;8045:26:9;;;;;;;;8082:37;7583:543;7475:651;;;:::o;7650:250:27:-;7709:20;:18;:20::i;:::-;7781:4;7740:20;3508:18:9;;;;;;;;;;;7836:14:27;;3508:18:9;;7797:69:27;;-1:-1:-1;;;;;7836:14:27;3508:18:9;7797:15:27;:69::i;:::-;7881:12;;;;;;;7699:201;7650:250::o;9111:576:9:-;-1:-1:-1;;;;;9194:21:9;;9186:67;;;;-1:-1:-1;;;9186:67:9;;11831:2:38;9186:67:9;;;11813:21:38;11870:2;11850:18;;;11843:30;11909:34;11889:18;;;11882:62;11980:3;11960:18;;;11953:31;12001:19;;9186:67:9;11629:397:38;9186:67:9;-1:-1:-1;;;;;9349:18:9;;9324:22;9349:18;;;;;;;;;;;9385:24;;;;9377:71;;;;-1:-1:-1;;;9377:71:9;;12233:2:38;9377:71:9;;;12215:21:38;12272:2;12252:18;;;12245:30;12311:34;12291:18;;;12284:62;12382:4;12362:18;;;12355:32;12404:19;;9377:71:9;12031:398:38;9377:71:9;-1:-1:-1;;;;;9482:18:9;;:9;:18;;;;;;;;;;9503:23;;;9482:44;;9546:12;:22;;9520:6;;9482:9;9546:22;;9520:6;;9546:22;:::i;:::-;;;;-1:-1:-1;;9584:37:9;;160:25:38;;;9610:1:9;;-1:-1:-1;;;;;9584:37:9;;;;;148:2:38;133:18;9584:37:9;;;;;;;8427:403:27;8364:466;;:::o;10761:441:9:-;-1:-1:-1;;;;;4091:18:9;;;10891:24;4091:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;-1:-1:-1;;10957:37:9;;10953:243;;11038:6;11018:16;:26;;11010:68;;;;-1:-1:-1;;;11010:68:9;;12769:2:38;11010:68:9;;;12751:21:38;12808:2;12788:18;;;12781:30;12847:31;12827:18;;;12820:59;12896:18;;11010:68:9;12567:353:38;11010:68:9;11120:51;11129:5;11136:7;11164:6;11145:16;:25;11120:8;:51::i;4932:500:27:-;5084:7;;5030:20;;5084:7;;;;;5080:73;;;5139:3;5123:12;5129:6;477:1;5123:12;:::i;:::-;5122:20;;;;:::i;:::-;5107:35;;5080:73;5162:24;5189:21;5198:12;5189:6;:21;:::i;:::-;5162:48;;5262:52;5278:6;5286:9;5297:16;5262:15;:52::i;:::-;5395:14;;5371:53;;5387:6;;-1:-1:-1;;;;;5395:14:27;5411:12;5371:15;:53::i;:::-;5020:412;;4932:500;;;:::o;8402:389:9:-;-1:-1:-1;;;;;8485:21:9;;8477:65;;;;-1:-1:-1;;;8477:65:9;;6272:2:38;8477:65:9;;;6254:21:38;6311:2;6291:18;;;6284:30;6350:33;6330:18;;;6323:61;6401:18;;8477:65:9;6070:355:38;8477:65:9;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8645:18:9;;:9;:18;;;;;;;;;;:28;;8667:6;;8645:9;:28;;8667:6;;8645:28;:::i;:::-;;;;-1:-1:-1;;8688:37:9;;160:25:38;;;-1:-1:-1;;;;;8688:37:9;;;8705:1;;8688:37;;148:2:38;133:18;8688:37:9;;;;;;;6814:660:27::2;6713:761:::0;:::o;8162:196::-;8243:7;:9;;8211:4;;;8243:9;;;:::i;:::-;;;;-1:-1:-1;;8330:7:27;;8284:54;;;8301:15;8284:54;;;13564:19:38;-1:-1:-1;;8318:10:27;13621:2:38;13617:15;13613:53;13599:12;;;13592:75;;;;13683:12;;;13676:28;;;;8343:8:27;;13720:12:38;;8284:54:27;;;;;;;;;;;;8274:65;;;;;;8269:71;;:82;;;;:::i;7946:174::-;7995:20;8027:14;3175:2:9;8027::27;:14;:::i;:::-;8018:23;;:6;:23;:::i;:::-;8090:7;;7995:46;;-1:-1:-1;8051:62:27;;8075:4;;-1:-1:-1;;;;;8090:7:27;7995:46;8051:15;:62::i;196:548:38:-;308:4;337:2;366;355:9;348:21;398:6;392:13;441:6;436:2;425:9;421:18;414:34;466:1;476:140;490:6;487:1;484:13;476:140;;;585:14;;;581:23;;575:30;551:17;;;570:2;547:26;540:66;505:10;;476:140;;;480:3;665:1;660:2;651:6;640:9;636:22;632:31;625:42;735:2;728;724:7;719:2;711:6;707:15;703:29;692:9;688:45;684:54;676:62;;;;196:548;;;;:::o;749:154::-;-1:-1:-1;;;;;828:5:38;824:54;817:5;814:65;804:93;;893:1;890;883:12;908:315;976:6;984;1037:2;1025:9;1016:7;1012:23;1008:32;1005:52;;;1053:1;1050;1043:12;1005:52;1092:9;1079:23;1111:31;1136:5;1111:31;:::i;:::-;1161:5;1213:2;1198:18;;;;1185:32;;-1:-1:-1;;;908:315:38:o;1420:247::-;1479:6;1532:2;1520:9;1511:7;1507:23;1503:32;1500:52;;;1548:1;1545;1538:12;1500:52;1587:9;1574:23;1606:31;1631:5;1606:31;:::i;:::-;1656:5;1420:247;-1:-1:-1;;;1420:247:38:o;2177:456::-;2254:6;2262;2270;2323:2;2311:9;2302:7;2298:23;2294:32;2291:52;;;2339:1;2336;2329:12;2291:52;2378:9;2365:23;2397:31;2422:5;2397:31;:::i;:::-;2447:5;-1:-1:-1;2504:2:38;2489:18;;2476:32;2517:33;2476:32;2517:33;:::i;:::-;2177:456;;2569:7;;-1:-1:-1;;;2623:2:38;2608:18;;;;2595:32;;2177:456::o;3074:388::-;3142:6;3150;3203:2;3191:9;3182:7;3178:23;3174:32;3171:52;;;3219:1;3216;3209:12;3171:52;3258:9;3245:23;3277:31;3302:5;3277:31;:::i;:::-;3327:5;-1:-1:-1;3384:2:38;3369:18;;3356:32;3397:33;3356:32;3397:33;:::i;:::-;3449:7;3439:17;;;3074:388;;;;;:::o;3467:437::-;3546:1;3542:12;;;;3589;;;3610:61;;3664:4;3656:6;3652:17;3642:27;;3610:61;3717:2;3709:6;3706:14;3686:18;3683:38;3680:218;;-1:-1:-1;;;3751:1:38;3744:88;3855:4;3852:1;3845:15;3883:4;3880:1;3873:15;3680:218;;3467:437;;;:::o;4934:184::-;-1:-1:-1;;;4983:1:38;4976:88;5083:4;5080:1;5073:15;5107:4;5104:1;5097:15;5123:168;5196:9;;;5227;;5244:15;;;5238:22;;5224:37;5214:71;;5265:18;;:::i;5940:125::-;6005:9;;;6026:10;;;6023:36;;;6039:18;;:::i;6775:422::-;6864:1;6907:5;6864:1;6921:270;6942:7;6932:8;6929:21;6921:270;;;7001:4;6997:1;6993:6;6989:17;6983:4;6980:27;6977:53;;;7010:18;;:::i;:::-;7060:7;7050:8;7046:22;7043:55;;;7080:16;;;;7043:55;7159:22;;;;7119:15;;;;6921:270;;;6925:3;6775:422;;;;;:::o;7202:806::-;7251:5;7281:8;7271:80;;-1:-1:-1;7322:1:38;7336:5;;7271:80;7370:4;7360:76;;-1:-1:-1;7407:1:38;7421:5;;7360:76;7452:4;7470:1;7465:59;;;;7538:1;7533:130;;;;7445:218;;7465:59;7495:1;7486:10;;7509:5;;;7533:130;7570:3;7560:8;7557:17;7554:43;;;7577:18;;:::i;:::-;-1:-1:-1;;7633:1:38;7619:16;;7648:5;;7445:218;;7747:2;7737:8;7734:16;7728:3;7722:4;7719:13;7715:36;7709:2;7699:8;7696:16;7691:2;7685:4;7682:12;7678:35;7675:77;7672:159;;;-1:-1:-1;7784:19:38;;;7816:5;;7672:159;7863:34;7888:8;7882:4;7863:34;:::i;:::-;7933:6;7929:1;7925:6;7921:19;7912:7;7909:32;7906:58;;;7944:18;;:::i;:::-;7982:20;;7202:806;-1:-1:-1;;;7202:806:38:o;8013:140::-;8071:5;8100:47;8141:4;8131:8;8127:19;8121:4;8100:47;:::i;12434:128::-;12501:9;;;12522:11;;;12519:37;;;12536:18;;:::i;12925:184::-;-1:-1:-1;;;12974:1:38;12967:88;13074:4;13071:1;13064:15;13098:4;13095:1;13088:15;13114:120;13154:1;13180;13170:35;;13185:18;;:::i;:::-;-1:-1:-1;13219:9:38;;13114:120::o;13239:135::-;13278:3;13299:17;;;13296:43;;13319:18;;:::i;:::-;-1:-1:-1;13366:1:38;13355:13;;13239:135::o;13743:112::-;13775:1;13801;13791:35;;13806:18;;:::i;:::-;-1:-1:-1;13840:9:38;;13743:112::o",
	"source": "//SPDX-License-Identifier: Unlicense\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"./LiquidityPool.sol\";\n\ncontract JMToken is ERC20 {\n    event TokensBought(address indexed _account, uint256 amount); // 펀딩이후 토큰 클레임 \n    event OwnerAction(); // 오너의 액션\n    event FundsMoved(); // 펀딩 종료 \n    event _MovedStakingReward();\n\n    uint256 public MAX_SUPPLY; // 발행량 \n    uint256 public constant TAX = 1; //  수수료 tx 1%\n    uint256 public totalContributed; // 총 이더 기부금액 \n    bool public isContractPaused; // 컨트랙트 동작 상태\n    bool public fundsAlreadyMoved;\n    bool public isTaxOn = true; // 현재 수수료 on off \n    address public owner; // 오너 \n    address payable public treasuryWallet; // 비상금 계좌!\n    address public Router;\n    address public MapleNFT;\n    address public MapleItems;\n    address public MapleMarket;\n    address public MapleUser;\n    address public winRewardAddr;\n    uint winRewardAmount;\n    uint randNum = 0;\n    uint rewardProbability = 90;\n    address public Staking;\n\n    mapping(address => uint256) public balancesToClaim; // 투자금1:100 비율==jmt\n    mapping(address => uint256) public contributionsOf; // 실제 기부금 eth\n    mapping(address => bool) public isWhitelisted;\n\n    event TokenRewarded(bool result);\n\n    constructor(address payable treasury) ERC20(\"JMT Token\", \"JMT\") {\n        MAX_SUPPLY = 1000000 * 10**decimals(); \n        _mint(address(this), MAX_SUPPLY); \n        owner = msg.sender; \n        treasuryWallet = treasury; // 임시,현재는 오너 지갑\n        isWhitelisted[owner] = true; // 오너 자동 화리  \n    }\n\n    modifier ownerOnly() {\n        require(msg.sender == owner, \"OWNER_ONLY\");\n        _;\n    }\n\n    modifier mapleNFTOnly(){\n        require(msg.sender == MapleNFT || msg.sender == MapleItems || msg.sender == MapleMarket, \"MAPLENFT_ONLY\");\n        _;\n    }\n    // router 컨트랙트에서만 실행\n    modifier routerOnly() {\n        require(msg.sender == Router || msg.sender == MapleNFT || msg.sender == MapleItems || msg.sender == MapleMarket || msg.sender == MapleUser, \"ROUTER_OR_MAPLE_ONLY\");\n        _;\n    }\n    // 펀딩 종료 체크 \n    modifier areFundsMoved() {\n        require(!fundsAlreadyMoved, \"FUNDS_MOVED_TO_LP\");\n        _;\n    }\n\n    // 컨트랙트 상태 \n    modifier isPaused() {\n        require(!isContractPaused, \"CONTRACT_PAUSED\");\n        _;\n    }\n\n\n    // 첫 계약 제로 계정 배포자(0x0)와 같은지 확인, 딱 한번만 실행가능\n    function setRouterAddress(address _router) external ownerOnly {\n        require(address(Router) == address(0), \"WRITE_ONCE!\"); // 0x00000000\n        Router = _router;\n    }\n    function setMapleNFTAddress(address _mapleNft) external ownerOnly {\n        require(address(MapleNFT) == address(0), \"WRITE_ONCE!\");\n        MapleNFT = _mapleNft;\n    }\n    function setMapleItemsAddress(address _mapleItems) external ownerOnly {\n        require(address(MapleItems) == address(0), \"WRITE_ONCE!\");\n        MapleItems = _mapleItems;\n    }\n    function setMapleMarketAddress(address _mapleMarket) external ownerOnly {\n        require(address(MapleMarket) == address(0), \"WRITE_ONCE!\");\n        MapleMarket = _mapleMarket;\n    }\n    function setMapleUserAddress(address _mapleUser) external ownerOnly {\n        require(address(MapleUser) == address(0), \"WRITE_ONCE!\");\n        MapleUser = _mapleUser;\n    }\n    function setStakingAddress(address _staking ) external  ownerOnly {\n        require(address(Staking) == address(0), \"WRITE_ONCE!\");\n        Staking = _staking;\n    }\n  \n    // 이더 펀딩 \n    function contribute() external payable isPaused areFundsMoved {\n\n        //교환 비율이 1:100\n        uint256 tokenAmount = msg.value * 100;\n        balancesToClaim[msg.sender] += tokenAmount;\n        contributionsOf[msg.sender] += msg.value;\n        totalContributed += msg.value; \n        emit TokensBought(msg.sender, tokenAmount);\n    }\n    \n    // 펀딩 jmt토큰 클레임 \n    function claimTokens() external isPaused areFundsMoved {\n        require(balancesToClaim[msg.sender] > 0, \"NO_AVAILABLE_FUNDS\"); // 수령이 가능한 토큰을 보유하고있는지 체크 \n        uint256 tokensToClaim = balancesToClaim[msg.sender];\n        balancesToClaim[msg.sender] = 0;\n\n        super._transfer(address(this), msg.sender, tokensToClaim); // 컨트랙트 -> sender 전송\n    }\n\n    //컨트랙트 pause스위치 \n    function togglePauseContract() external ownerOnly {\n        isContractPaused = !isContractPaused;\n        emit OwnerAction();\n    }\n\n    // tx스위치 기본 : true\n    function toggleTax() external ownerOnly {\n        isTaxOn = !isTaxOn;\n        emit OwnerAction();\n    }\n\n    // 화리에 유저 추가\n    function addToWhitelist(address account) external ownerOnly {\n        isWhitelisted[account] = true;\n    }\n\n    function _transfer(address sender, address recipient, uint256 amount) internal override {\n        uint256 amountToTake;\n        // tx계산\n        if (isTaxOn) {\n            amountToTake = (TAX * amount) / 100;\n        }\n        uint256 amountToTransfer = amount - amountToTake;\n        // 수수료를 뺀만큼 전송 \n        super._transfer(sender, recipient, amountToTransfer);\n        // 수수료는 비상금으로 축적\n        super._transfer(sender, treasuryWallet, amountToTake); \n    }\n\n    function mint(address account, uint256 amount) external ownerOnly {\n        require(account != address(0), \"ERC20: mint to the zero address\"); // 주소 전송 가능 여부 체크 \n        require(totalSupply() + amount <= MAX_SUPPLY, \"ABOVE_MAX_SUPPLY\"); // 총발행량 체크 \n        _mint(account, amount * 10**decimals());\n    }\n    \n    function burn(address account, uint256 amount) external ownerOnly {\n        _burn(account, amount * 10**decimals());\n    }\n\n    function marketBurn(address account, uint256 amount) external mapleNFTOnly {\n        _burn(account, amount);\n\n    }\n\n    //tranferfrom에서 권한 부여\n    //spender에게 토큰 거래 제한\n    //라우터에서만 호출 가능 외부 컨트랙트를 통한 호출x \n    function increaseContractAllowance(address _owner,address _spender,uint256 _amount)  \n        public routerOnly returns (bool) {\n        // spender에게 토큰 사용 허용 토큰양 추척해서 거래 제한 ㄱ \n        // allowance 현재 제한 해제된 토큰 상황 return \n        _approve(\n            _owner, // from\n            _spender, // to\n            allowance(msg.sender, address(this)) + _amount\n        ); \n        return true;\n    }\n\n    // 펀딩 금액 -> lp로 전송,  최초 리저브생성 \n    function sendLiquidityToLPContract(LiquidityPool liquidityPool) external ownerOnly areFundsMoved\n    {\n        fundsAlreadyMoved = true; //클레임불가\n\n        // 이더 기부금 * 100 jmt 에어드랍\n        uint256 jmtCoinAmountToTransfer = totalContributed * 100;\n\n        // lp풀 JMT전송 \n        super._transfer(\n            address(this),\n            address(liquidityPool),\n            jmtCoinAmountToTransfer\n        );\n\n        //msg.value = totalContributed, 리저브 생성, 이더전송\n        liquidityPool.deposit{value: totalContributed}(\n            jmtCoinAmountToTransfer,\n            address(this)\n        );\n\n        //펀딩 reserve_setting\n        liquidityPool.setFundedReserve();\n\n        sendRemainingFundsToTreasury();\n    }\n    //펀딩 이후 남은 토큰 재무 관련 지갑 전송\n    //일단은 오너지갑으로, 소프트런 각?\n    //실제 서비스시 오너지갑이라면 전쟁\n    function sendRemainingFundsToTreasury() internal {\n        MovedStakingReward();\n\n        uint256 remainingJMT = balanceOf(address(this));\n        super._transfer(address(this), address(treasuryWallet), remainingJMT);\n        emit FundsMoved();\n    }\n    // staking reward 300,000개 발행 \n    function MovedStakingReward() internal {\n        uint256 remainingJMT = 300000 * 10**decimals();\n        super._transfer(address(this), address(Staking), remainingJMT);\n    }\n\n    // 전투 랜덤 보상(토큰)\n    function randMod(uint _modulus) internal returns(uint) { // 랜덤함수\n        randNum++;\n        return uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, randNum))) % _modulus;\n    }\n\n    function randRewardToken(address _addr, uint _amount) external {\n        winRewardAddr = _addr;\n        winRewardAmount = _amount;\n        uint rand = randMod(100);\n        if ( rand <= rewardProbability ) {// 90% 확률로 강화 스크롤 획득\n            super._transfer(address(treasuryWallet), address(winRewardAddr), winRewardAmount); // JMT 토큰\n            emit TokenRewarded(true);\n        } else {\n            emit TokenRewarded(false);\n        }\n    }\n\n}",
	"sourcePath": "/Users/hyenne/workspace/BEB-05-JMT/contract/contracts/JMToken.sol",
	"ast": {
	  "absolutePath": "project:/contracts/JMToken.sol",
	  "exportedSymbols": {
		"Babylonian": [
		  5187
		],
		"Context": [
		  4290
		],
		"ERC20": [
		  2473
		],
		"IERC20": [
		  2551
		],
		"IERC20Metadata": [
		  2576
		],
		"JMToken": [
		  6174
		],
		"LPT": [
		  6227
		],
		"LiquidityPool": [
		  7043
		],
		"Math": [
		  5130
		],
		"Ownable": [
		  112
		],
		"Pausable": [
		  220
		],
		"ReentrancyGuard": [
		  260
		],
		"Strings": [
		  4590
		],
		"VJMToken": [
		  11282
		]
	  },
	  "id": 6175,
	  "license": "Unlicense",
	  "nodeType": "SourceUnit",
	  "nodes": [
		{
		  "id": 5350,
		  "literals": [
			"solidity",
			"^",
			"0.8",
			".0"
		  ],
		  "nodeType": "PragmaDirective",
		  "src": "37:23:27"
		},
		{
		  "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
		  "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
		  "id": 5351,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 6175,
		  "sourceUnit": 2474,
		  "src": "62:55:27",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "absolutePath": "project:/contracts/LiquidityPool.sol",
		  "file": "./LiquidityPool.sol",
		  "id": 5352,
		  "nameLocation": "-1:-1:-1",
		  "nodeType": "ImportDirective",
		  "scope": 6175,
		  "sourceUnit": 7044,
		  "src": "118:29:27",
		  "symbolAliases": [],
		  "unitAlias": ""
		},
		{
		  "abstract": false,
		  "baseContracts": [
			{
			  "baseName": {
				"id": 5353,
				"name": "ERC20",
				"nameLocations": [
				  "169:5:27"
				],
				"nodeType": "IdentifierPath",
				"referencedDeclaration": 2473,
				"src": "169:5:27"
			  },
			  "id": 5354,
			  "nodeType": "InheritanceSpecifier",
			  "src": "169:5:27"
			}
		  ],
		  "canonicalName": "JMToken",
		  "contractDependencies": [],
		  "contractKind": "contract",
		  "fullyImplemented": true,
		  "id": 6174,
		  "linearizedBaseContracts": [
			6174,
			2473,
			2576,
			2551,
			4290
		  ],
		  "name": "JMToken",
		  "nameLocation": "158:7:27",
		  "nodeType": "ContractDefinition",
		  "nodes": [
			{
			  "anonymous": false,
			  "eventSelector": "745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a",
			  "id": 5360,
			  "name": "TokensBought",
			  "nameLocation": "187:12:27",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 5359,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5356,
					"indexed": true,
					"mutability": "mutable",
					"name": "_account",
					"nameLocation": "216:8:27",
					"nodeType": "VariableDeclaration",
					"scope": 5360,
					"src": "200:24:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5355,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "200:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5358,
					"indexed": false,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "234:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5360,
					"src": "226:14:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5357,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "226:7:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "199:42:27"
			  },
			  "src": "181:61:27"
			},
			{
			  "anonymous": false,
			  "eventSelector": "e454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d3",
			  "id": 5362,
			  "name": "OwnerAction",
			  "nameLocation": "287:11:27",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 5361,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "298:2:27"
			  },
			  "src": "281:20:27"
			},
			{
			  "anonymous": false,
			  "eventSelector": "a01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e1",
			  "id": 5364,
			  "name": "FundsMoved",
			  "nameLocation": "332:10:27",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 5363,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "342:2:27"
			  },
			  "src": "326:19:27"
			},
			{
			  "anonymous": false,
			  "eventSelector": "780220331cfc54e96b64b4846ee1b9c079d282c095d2823c41de6cfeeadb9c2b",
			  "id": 5366,
			  "name": "_MovedStakingReward",
			  "nameLocation": "374:19:27",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 5365,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "393:2:27"
			  },
			  "src": "368:28:27"
			},
			{
			  "constant": false,
			  "functionSelector": "32cb6b0c",
			  "id": 5368,
			  "mutability": "mutable",
			  "name": "MAX_SUPPLY",
			  "nameLocation": "417:10:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "402:25:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5367,
				"name": "uint256",
				"nodeType": "ElementaryTypeName",
				"src": "402:7:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": true,
			  "functionSelector": "68f58b03",
			  "id": 5371,
			  "mutability": "constant",
			  "name": "TAX",
			  "nameLocation": "471:3:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "447:31:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5369,
				"name": "uint256",
				"nodeType": "ElementaryTypeName",
				"src": "447:7:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "value": {
				"hexValue": "31",
				"id": 5370,
				"isConstant": false,
				"isLValue": false,
				"isPure": true,
				"kind": "number",
				"lValueRequested": false,
				"nodeType": "Literal",
				"src": "477:1:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_rational_1_by_1",
				  "typeString": "int_const 1"
				},
				"value": "1"
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "023f4147",
			  "id": 5373,
			  "mutability": "mutable",
			  "name": "totalContributed",
			  "nameLocation": "519:16:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "504:31:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5372,
				"name": "uint256",
				"nodeType": "ElementaryTypeName",
				"src": "504:7:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "f4ab2928",
			  "id": 5375,
			  "mutability": "mutable",
			  "name": "isContractPaused",
			  "nameLocation": "581:16:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "569:28:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_bool",
				"typeString": "bool"
			  },
			  "typeName": {
				"id": 5374,
				"name": "bool",
				"nodeType": "ElementaryTypeName",
				"src": "569:4:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_bool",
				  "typeString": "bool"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "65acacfe",
			  "id": 5377,
			  "mutability": "mutable",
			  "name": "fundsAlreadyMoved",
			  "nameLocation": "645:17:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "633:29:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_bool",
				"typeString": "bool"
			  },
			  "typeName": {
				"id": 5376,
				"name": "bool",
				"nodeType": "ElementaryTypeName",
				"src": "633:4:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_bool",
				  "typeString": "bool"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "be07d17d",
			  "id": 5380,
			  "mutability": "mutable",
			  "name": "isTaxOn",
			  "nameLocation": "680:7:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "668:26:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_bool",
				"typeString": "bool"
			  },
			  "typeName": {
				"id": 5378,
				"name": "bool",
				"nodeType": "ElementaryTypeName",
				"src": "668:4:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_bool",
				  "typeString": "bool"
				}
			  },
			  "value": {
				"hexValue": "74727565",
				"id": 5379,
				"isConstant": false,
				"isLValue": false,
				"isPure": true,
				"kind": "bool",
				"lValueRequested": false,
				"nodeType": "Literal",
				"src": "690:4:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_bool",
				  "typeString": "bool"
				},
				"value": "true"
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "8da5cb5b",
			  "id": 5382,
			  "mutability": "mutable",
			  "name": "owner",
			  "nameLocation": "743:5:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "728:20:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5381,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "728:7:27",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "4626402b",
			  "id": 5384,
			  "mutability": "mutable",
			  "name": "treasuryWallet",
			  "nameLocation": "788:14:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "765:37:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address_payable",
				"typeString": "address payable"
			  },
			  "typeName": {
				"id": 5383,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "765:15:27",
				"stateMutability": "payable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address_payable",
				  "typeString": "address payable"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "f6d7eade",
			  "id": 5386,
			  "mutability": "mutable",
			  "name": "Router",
			  "nameLocation": "844:6:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "829:21:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5385,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "829:7:27",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "1b9631fc",
			  "id": 5388,
			  "mutability": "mutable",
			  "name": "MapleNFT",
			  "nameLocation": "871:8:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "856:23:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5387,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "856:7:27",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "6eefec11",
			  "id": 5390,
			  "mutability": "mutable",
			  "name": "MapleItems",
			  "nameLocation": "900:10:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "885:25:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5389,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "885:7:27",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "cf4bfd6a",
			  "id": 5392,
			  "mutability": "mutable",
			  "name": "MapleMarket",
			  "nameLocation": "931:11:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "916:26:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5391,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "916:7:27",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "ee753dec",
			  "id": 5394,
			  "mutability": "mutable",
			  "name": "MapleUser",
			  "nameLocation": "963:9:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "948:24:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5393,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "948:7:27",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "46c586c2",
			  "id": 5396,
			  "mutability": "mutable",
			  "name": "winRewardAddr",
			  "nameLocation": "993:13:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "978:28:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5395,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "978:7:27",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "id": 5398,
			  "mutability": "mutable",
			  "name": "winRewardAmount",
			  "nameLocation": "1017:15:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "1012:20:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5397,
				"name": "uint",
				"nodeType": "ElementaryTypeName",
				"src": "1012:4:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "visibility": "internal"
			},
			{
			  "constant": false,
			  "id": 5401,
			  "mutability": "mutable",
			  "name": "randNum",
			  "nameLocation": "1043:7:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "1038:16:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5399,
				"name": "uint",
				"nodeType": "ElementaryTypeName",
				"src": "1038:4:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "value": {
				"hexValue": "30",
				"id": 5400,
				"isConstant": false,
				"isLValue": false,
				"isPure": true,
				"kind": "number",
				"lValueRequested": false,
				"nodeType": "Literal",
				"src": "1053:1:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_rational_0_by_1",
				  "typeString": "int_const 0"
				},
				"value": "0"
			  },
			  "visibility": "internal"
			},
			{
			  "constant": false,
			  "id": 5404,
			  "mutability": "mutable",
			  "name": "rewardProbability",
			  "nameLocation": "1065:17:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "1060:27:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5402,
				"name": "uint",
				"nodeType": "ElementaryTypeName",
				"src": "1060:4:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "value": {
				"hexValue": "3930",
				"id": 5403,
				"isConstant": false,
				"isLValue": false,
				"isPure": true,
				"kind": "number",
				"lValueRequested": false,
				"nodeType": "Literal",
				"src": "1085:2:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_rational_90_by_1",
				  "typeString": "int_const 90"
				},
				"value": "90"
			  },
			  "visibility": "internal"
			},
			{
			  "constant": false,
			  "functionSelector": "f57df22e",
			  "id": 5406,
			  "mutability": "mutable",
			  "name": "Staking",
			  "nameLocation": "1108:7:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "1093:22:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5405,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "1093:7:27",
				"stateMutability": "nonpayable",
				"typeDescriptions": {
				  "typeIdentifier": "t_address",
				  "typeString": "address"
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "b70f21c7",
			  "id": 5410,
			  "mutability": "mutable",
			  "name": "balancesToClaim",
			  "nameLocation": "1157:15:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "1122:50:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				"typeString": "mapping(address => uint256)"
			  },
			  "typeName": {
				"id": 5409,
				"keyType": {
				  "id": 5407,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "1130:7:27",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "1122:27:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				  "typeString": "mapping(address => uint256)"
				},
				"valueType": {
				  "id": 5408,
				  "name": "uint256",
				  "nodeType": "ElementaryTypeName",
				  "src": "1141:7:27",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "3af0dbc1",
			  "id": 5414,
			  "mutability": "mutable",
			  "name": "contributionsOf",
			  "nameLocation": "1243:15:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "1208:50:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				"typeString": "mapping(address => uint256)"
			  },
			  "typeName": {
				"id": 5413,
				"keyType": {
				  "id": 5411,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "1216:7:27",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "1208:27:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				  "typeString": "mapping(address => uint256)"
				},
				"valueType": {
				  "id": 5412,
				  "name": "uint256",
				  "nodeType": "ElementaryTypeName",
				  "src": "1227:7:27",
				  "typeDescriptions": {
					"typeIdentifier": "t_uint256",
					"typeString": "uint256"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "constant": false,
			  "functionSelector": "3af32abf",
			  "id": 5418,
			  "mutability": "mutable",
			  "name": "isWhitelisted",
			  "nameLocation": "1320:13:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6174,
			  "src": "1288:45:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				"typeString": "mapping(address => bool)"
			  },
			  "typeName": {
				"id": 5417,
				"keyType": {
				  "id": 5415,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "1296:7:27",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "1288:24:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				  "typeString": "mapping(address => bool)"
				},
				"valueType": {
				  "id": 5416,
				  "name": "bool",
				  "nodeType": "ElementaryTypeName",
				  "src": "1307:4:27",
				  "typeDescriptions": {
					"typeIdentifier": "t_bool",
					"typeString": "bool"
				  }
				}
			  },
			  "visibility": "public"
			},
			{
			  "anonymous": false,
			  "eventSelector": "e3bf9628d38f54d735cbc07db121eaef41935c08353bba9b8c8772d4ebba2d99",
			  "id": 5422,
			  "name": "TokenRewarded",
			  "nameLocation": "1346:13:27",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 5421,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5420,
					"indexed": false,
					"mutability": "mutable",
					"name": "result",
					"nameLocation": "1365:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5422,
					"src": "1360:11:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 5419,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "1360:4:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1359:13:27"
			  },
			  "src": "1340:33:27"
			},
			{
			  "body": {
				"id": 5463,
				"nodeType": "Block",
				"src": "1443:259:27",
				"statements": [
				  {
					"expression": {
					  "id": 5438,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5431,
						"name": "MAX_SUPPLY",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5368,
						"src": "1453:10:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"commonType": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"id": 5437,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"leftExpression": {
						  "hexValue": "31303030303030",
						  "id": 5432,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "number",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1466:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_rational_1000000_by_1",
							"typeString": "int_const 1000000"
						  },
						  "value": "1000000"
						},
						"nodeType": "BinaryOperation",
						"operator": "*",
						"rightExpression": {
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5436,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"hexValue": "3130",
							"id": 5433,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "number",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "1476:2:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_rational_10_by_1",
							  "typeString": "int_const 10"
							},
							"value": "10"
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "**",
						  "rightExpression": {
							"arguments": [],
							"expression": {
							  "argumentTypes": [],
							  "id": 5434,
							  "name": "decimals",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1962,
							  "src": "1480:8:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
								"typeString": "function () view returns (uint8)"
							  }
							},
							"id": 5435,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "1480:10:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_uint8",
							  "typeString": "uint8"
							}
						  },
						  "src": "1476:14:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"src": "1466:24:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "1453:37:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5439,
					"nodeType": "ExpressionStatement",
					"src": "1453:37:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5443,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "1515:4:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$6174",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$6174",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5442,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "1507:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5441,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "1507:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5444,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "1507:13:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5445,
						  "name": "MAX_SUPPLY",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5368,
						  "src": "1522:10:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5440,
						"name": "_mint",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2290,
						"src": "1501:5:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5446,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1501:32:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5447,
					"nodeType": "ExpressionStatement",
					"src": "1501:32:27"
				  },
				  {
					"expression": {
					  "id": 5451,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5448,
						"name": "owner",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5382,
						"src": "1544:5:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"expression": {
						  "id": 5449,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "1552:3:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5450,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "1556:6:27",
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "1552:10:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "1544:18:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5452,
					"nodeType": "ExpressionStatement",
					"src": "1544:18:27"
				  },
				  {
					"expression": {
					  "id": 5455,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5453,
						"name": "treasuryWallet",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5384,
						"src": "1573:14:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address_payable",
						  "typeString": "address payable"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5454,
						"name": "treasury",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5424,
						"src": "1590:8:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address_payable",
						  "typeString": "address payable"
						}
					  },
					  "src": "1573:25:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address_payable",
						"typeString": "address payable"
					  }
					},
					"id": 5456,
					"nodeType": "ExpressionStatement",
					"src": "1573:25:27"
				  },
				  {
					"expression": {
					  "id": 5461,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5457,
						  "name": "isWhitelisted",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5418,
						  "src": "1642:13:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
							"typeString": "mapping(address => bool)"
						  }
						},
						"id": 5459,
						"indexExpression": {
						  "id": 5458,
						  "name": "owner",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5382,
						  "src": "1656:5:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "1642:20:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "74727565",
						"id": 5460,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "1665:4:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "true"
					  },
					  "src": "1642:27:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5462,
					"nodeType": "ExpressionStatement",
					"src": "1642:27:27"
				  }
				]
			  },
			  "id": 5464,
			  "implemented": true,
			  "kind": "constructor",
			  "modifiers": [
				{
				  "arguments": [
					{
					  "hexValue": "4a4d5420546f6b656e",
					  "id": 5427,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "string",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "1423:11:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_stringliteral_a9a53302e4bb530eeacfd21a7a31e566429a171ca9336abbe7122b03852140c5",
						"typeString": "literal_string \"JMT Token\""
					  },
					  "value": "JMT Token"
					},
					{
					  "hexValue": "4a4d54",
					  "id": 5428,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "string",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "1436:5:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_stringliteral_5dd6c48417bf5763178b941ef6b12f7c9a2600518281e43bd45fc179a5eeda5c",
						"typeString": "literal_string \"JMT\""
					  },
					  "value": "JMT"
					}
				  ],
				  "id": 5429,
				  "kind": "baseConstructorSpecifier",
				  "modifierName": {
					"id": 5426,
					"name": "ERC20",
					"nameLocations": [
					  "1417:5:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 2473,
					"src": "1417:5:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "1417:25:27"
				}
			  ],
			  "name": "",
			  "nameLocation": "-1:-1:-1",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5425,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5424,
					"mutability": "mutable",
					"name": "treasury",
					"nameLocation": "1407:8:27",
					"nodeType": "VariableDeclaration",
					"scope": 5464,
					"src": "1391:24:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address_payable",
					  "typeString": "address payable"
					},
					"typeName": {
					  "id": 5423,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1391:15:27",
					  "stateMutability": "payable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address_payable",
						"typeString": "address payable"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1390:26:27"
			  },
			  "returnParameters": {
				"id": 5430,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1443:0:27"
			  },
			  "scope": 6174,
			  "src": "1379:323:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 5475,
				"nodeType": "Block",
				"src": "1729:70:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5470,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"expression": {
							  "id": 5467,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "1747:3:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 5468,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberLocation": "1751:6:27",
							"memberName": "sender",
							"nodeType": "MemberAccess",
							"src": "1747:10:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"id": 5469,
							"name": "owner",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5382,
							"src": "1761:5:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "1747:19:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "4f574e45525f4f4e4c59",
						  "id": 5471,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1768:12:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
							"typeString": "literal_string \"OWNER_ONLY\""
						  },
						  "value": "OWNER_ONLY"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20",
							"typeString": "literal_string \"OWNER_ONLY\""
						  }
						],
						"id": 5466,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "1739:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5472,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1739:42:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5473,
					"nodeType": "ExpressionStatement",
					"src": "1739:42:27"
				  },
				  {
					"id": 5474,
					"nodeType": "PlaceholderStatement",
					"src": "1791:1:27"
				  }
				]
			  },
			  "id": 5476,
			  "name": "ownerOnly",
			  "nameLocation": "1717:9:27",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5465,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1726:2:27"
			  },
			  "src": "1708:91:27",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5497,
				"nodeType": "Block",
				"src": "1828:133:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  "id": 5492,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"commonType": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							},
							"id": 5487,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "commonType": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  },
							  "id": 5482,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"expression": {
								  "id": 5479,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "1846:3:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 5480,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberLocation": "1850:6:27",
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "1846:10:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "==",
							  "rightExpression": {
								"id": 5481,
								"name": "MapleNFT",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5388,
								"src": "1860:8:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "src": "1846:22:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "||",
							"rightExpression": {
							  "commonType": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  },
							  "id": 5486,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"expression": {
								  "id": 5483,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "1872:3:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 5484,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberLocation": "1876:6:27",
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "1872:10:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "==",
							  "rightExpression": {
								"id": 5485,
								"name": "MapleItems",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5390,
								"src": "1886:10:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "src": "1872:24:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  }
							},
							"src": "1846:50:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "||",
						  "rightExpression": {
							"commonType": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							},
							"id": 5491,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "expression": {
								"id": 5488,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "1900:3:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 5489,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "1904:6:27",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "1900:10:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "==",
							"rightExpression": {
							  "id": 5490,
							  "name": "MapleMarket",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5392,
							  "src": "1914:11:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"src": "1900:25:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "src": "1846:79:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "4d41504c454e46545f4f4e4c59",
						  "id": 5493,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1927:15:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2",
							"typeString": "literal_string \"MAPLENFT_ONLY\""
						  },
						  "value": "MAPLENFT_ONLY"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2",
							"typeString": "literal_string \"MAPLENFT_ONLY\""
						  }
						],
						"id": 5478,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "1838:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5494,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1838:105:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5495,
					"nodeType": "ExpressionStatement",
					"src": "1838:105:27"
				  },
				  {
					"id": 5496,
					"nodeType": "PlaceholderStatement",
					"src": "1953:1:27"
				  }
				]
			  },
			  "id": 5498,
			  "name": "mapleNFTOnly",
			  "nameLocation": "1814:12:27",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5477,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1826:2:27"
			  },
			  "src": "1805:156:27",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5529,
				"nodeType": "Block",
				"src": "2031:191:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  "id": 5524,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"commonType": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							},
							"id": 5519,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "commonType": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  },
							  "id": 5514,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"commonType": {
								  "typeIdentifier": "t_bool",
								  "typeString": "bool"
								},
								"id": 5509,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"leftExpression": {
								  "commonType": {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  },
								  "id": 5504,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": false,
								  "lValueRequested": false,
								  "leftExpression": {
									"expression": {
									  "id": 5501,
									  "name": "msg",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 4294967281,
									  "src": "2049:3:27",
									  "typeDescriptions": {
										"typeIdentifier": "t_magic_message",
										"typeString": "msg"
									  }
									},
									"id": 5502,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"memberLocation": "2053:6:27",
									"memberName": "sender",
									"nodeType": "MemberAccess",
									"src": "2049:10:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									}
								  },
								  "nodeType": "BinaryOperation",
								  "operator": "==",
								  "rightExpression": {
									"id": 5503,
									"name": "Router",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 5386,
									"src": "2063:6:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									}
								  },
								  "src": "2049:20:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								  }
								},
								"nodeType": "BinaryOperation",
								"operator": "||",
								"rightExpression": {
								  "commonType": {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  },
								  "id": 5508,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": false,
								  "lValueRequested": false,
								  "leftExpression": {
									"expression": {
									  "id": 5505,
									  "name": "msg",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 4294967281,
									  "src": "2073:3:27",
									  "typeDescriptions": {
										"typeIdentifier": "t_magic_message",
										"typeString": "msg"
									  }
									},
									"id": 5506,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"memberLocation": "2077:6:27",
									"memberName": "sender",
									"nodeType": "MemberAccess",
									"src": "2073:10:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									}
								  },
								  "nodeType": "BinaryOperation",
								  "operator": "==",
								  "rightExpression": {
									"id": 5507,
									"name": "MapleNFT",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 5388,
									"src": "2087:8:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									}
								  },
								  "src": "2073:22:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_bool",
									"typeString": "bool"
								  }
								},
								"src": "2049:46:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_bool",
								  "typeString": "bool"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "||",
							  "rightExpression": {
								"commonType": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								},
								"id": 5513,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"leftExpression": {
								  "expression": {
									"id": 5510,
									"name": "msg",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 4294967281,
									"src": "2099:3:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_magic_message",
									  "typeString": "msg"
									}
								  },
								  "id": 5511,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": false,
								  "lValueRequested": false,
								  "memberLocation": "2103:6:27",
								  "memberName": "sender",
								  "nodeType": "MemberAccess",
								  "src": "2099:10:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  }
								},
								"nodeType": "BinaryOperation",
								"operator": "==",
								"rightExpression": {
								  "id": 5512,
								  "name": "MapleItems",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 5390,
								  "src": "2113:10:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_address",
									"typeString": "address"
								  }
								},
								"src": "2099:24:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_bool",
								  "typeString": "bool"
								}
							  },
							  "src": "2049:74:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "||",
							"rightExpression": {
							  "commonType": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  },
							  "id": 5518,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"expression": {
								  "id": 5515,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "2127:3:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 5516,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberLocation": "2131:6:27",
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "2127:10:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "==",
							  "rightExpression": {
								"id": 5517,
								"name": "MapleMarket",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5392,
								"src": "2141:11:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "src": "2127:25:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  }
							},
							"src": "2049:103:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "||",
						  "rightExpression": {
							"commonType": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							},
							"id": 5523,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "expression": {
								"id": 5520,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "2156:3:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 5521,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "2160:6:27",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "2156:10:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "==",
							"rightExpression": {
							  "id": 5522,
							  "name": "MapleUser",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5394,
							  "src": "2170:9:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"src": "2156:23:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "src": "2049:130:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "524f555445525f4f525f4d41504c455f4f4e4c59",
						  "id": 5525,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2181:22:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c",
							"typeString": "literal_string \"ROUTER_OR_MAPLE_ONLY\""
						  },
						  "value": "ROUTER_OR_MAPLE_ONLY"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c",
							"typeString": "literal_string \"ROUTER_OR_MAPLE_ONLY\""
						  }
						],
						"id": 5500,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2041:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5526,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2041:163:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5527,
					"nodeType": "ExpressionStatement",
					"src": "2041:163:27"
				  },
				  {
					"id": 5528,
					"nodeType": "PlaceholderStatement",
					"src": "2214:1:27"
				  }
				]
			  },
			  "id": 5530,
			  "name": "routerOnly",
			  "nameLocation": "2018:10:27",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5499,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2028:2:27"
			  },
			  "src": "2009:213:27",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5539,
				"nodeType": "Block",
				"src": "2281:76:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5534,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "UnaryOperation",
						  "operator": "!",
						  "prefix": true,
						  "src": "2299:18:27",
						  "subExpression": {
							"id": 5533,
							"name": "fundsAlreadyMoved",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5377,
							"src": "2300:17:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "46554e44535f4d4f5645445f544f5f4c50",
						  "id": 5535,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2319:19:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c",
							"typeString": "literal_string \"FUNDS_MOVED_TO_LP\""
						  },
						  "value": "FUNDS_MOVED_TO_LP"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c",
							"typeString": "literal_string \"FUNDS_MOVED_TO_LP\""
						  }
						],
						"id": 5532,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2291:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5536,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2291:48:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5537,
					"nodeType": "ExpressionStatement",
					"src": "2291:48:27"
				  },
				  {
					"id": 5538,
					"nodeType": "PlaceholderStatement",
					"src": "2349:1:27"
				  }
				]
			  },
			  "id": 5540,
			  "name": "areFundsMoved",
			  "nameLocation": "2265:13:27",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5531,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2278:2:27"
			  },
			  "src": "2256:101:27",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5549,
				"nodeType": "Block",
				"src": "2411:73:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5544,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "UnaryOperation",
						  "operator": "!",
						  "prefix": true,
						  "src": "2429:17:27",
						  "subExpression": {
							"id": 5543,
							"name": "isContractPaused",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5375,
							"src": "2430:16:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "434f4e54524143545f504155534544",
						  "id": 5545,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2448:17:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3",
							"typeString": "literal_string \"CONTRACT_PAUSED\""
						  },
						  "value": "CONTRACT_PAUSED"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3",
							"typeString": "literal_string \"CONTRACT_PAUSED\""
						  }
						],
						"id": 5542,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2421:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5546,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2421:45:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5547,
					"nodeType": "ExpressionStatement",
					"src": "2421:45:27"
				  },
				  {
					"id": 5548,
					"nodeType": "PlaceholderStatement",
					"src": "2476:1:27"
				  }
				]
			  },
			  "id": 5550,
			  "name": "isPaused",
			  "nameLocation": "2400:8:27",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5541,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2408:2:27"
			  },
			  "src": "2391:93:27",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5574,
				"nodeType": "Block",
				"src": "2648:110:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5566,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5560,
								"name": "Router",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5386,
								"src": "2674:6:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5559,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2666:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5558,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2666:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5561,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2666:15:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5564,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "2693:1:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5563,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2685:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5562,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2685:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5565,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2685:10:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "2666:29:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5567,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2697:13:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  },
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  }
						],
						"id": 5557,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2658:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5568,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2658:53:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5569,
					"nodeType": "ExpressionStatement",
					"src": "2658:53:27"
				  },
				  {
					"expression": {
					  "id": 5572,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5570,
						"name": "Router",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5386,
						"src": "2735:6:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5571,
						"name": "_router",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5552,
						"src": "2744:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "2735:16:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5573,
					"nodeType": "ExpressionStatement",
					"src": "2735:16:27"
				  }
				]
			  },
			  "functionSelector": "41cb87fc",
			  "id": 5575,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5555,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5554,
					"name": "ownerOnly",
					"nameLocations": [
					  "2638:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5476,
					"src": "2638:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2638:9:27"
				}
			  ],
			  "name": "setRouterAddress",
			  "nameLocation": "2595:16:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5553,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5552,
					"mutability": "mutable",
					"name": "_router",
					"nameLocation": "2620:7:27",
					"nodeType": "VariableDeclaration",
					"scope": 5575,
					"src": "2612:15:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5551,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "2612:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2611:17:27"
			  },
			  "returnParameters": {
				"id": 5556,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2648:0:27"
			  },
			  "scope": 6174,
			  "src": "2586:172:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5599,
				"nodeType": "Block",
				"src": "2829:102:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5591,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5585,
								"name": "MapleNFT",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5388,
								"src": "2855:8:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5584,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2847:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5583,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2847:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5586,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2847:17:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5589,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "2876:1:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5588,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2868:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5587,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2868:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5590,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2868:10:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "2847:31:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5592,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2880:13:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  },
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  }
						],
						"id": 5582,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2839:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5593,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2839:55:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5594,
					"nodeType": "ExpressionStatement",
					"src": "2839:55:27"
				  },
				  {
					"expression": {
					  "id": 5597,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5595,
						"name": "MapleNFT",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5388,
						"src": "2904:8:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5596,
						"name": "_mapleNft",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5577,
						"src": "2915:9:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "2904:20:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5598,
					"nodeType": "ExpressionStatement",
					"src": "2904:20:27"
				  }
				]
			  },
			  "functionSelector": "83925460",
			  "id": 5600,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5580,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5579,
					"name": "ownerOnly",
					"nameLocations": [
					  "2819:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5476,
					"src": "2819:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2819:9:27"
				}
			  ],
			  "name": "setMapleNFTAddress",
			  "nameLocation": "2772:18:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5578,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5577,
					"mutability": "mutable",
					"name": "_mapleNft",
					"nameLocation": "2799:9:27",
					"nodeType": "VariableDeclaration",
					"scope": 5600,
					"src": "2791:17:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5576,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "2791:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2790:19:27"
			  },
			  "returnParameters": {
				"id": 5581,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2829:0:27"
			  },
			  "scope": 6174,
			  "src": "2763:168:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5624,
				"nodeType": "Block",
				"src": "3006:108:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5616,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5610,
								"name": "MapleItems",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5390,
								"src": "3032:10:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5609,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "3024:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5608,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "3024:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5611,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "3024:19:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5614,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "3055:1:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5613,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "3047:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5612,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "3047:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5615,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "3047:10:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "3024:33:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5617,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "3059:13:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  },
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  }
						],
						"id": 5607,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "3016:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5618,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3016:57:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5619,
					"nodeType": "ExpressionStatement",
					"src": "3016:57:27"
				  },
				  {
					"expression": {
					  "id": 5622,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5620,
						"name": "MapleItems",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5390,
						"src": "3083:10:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5621,
						"name": "_mapleItems",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5602,
						"src": "3096:11:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "3083:24:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5623,
					"nodeType": "ExpressionStatement",
					"src": "3083:24:27"
				  }
				]
			  },
			  "functionSelector": "ec71ef89",
			  "id": 5625,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5605,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5604,
					"name": "ownerOnly",
					"nameLocations": [
					  "2996:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5476,
					"src": "2996:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2996:9:27"
				}
			  ],
			  "name": "setMapleItemsAddress",
			  "nameLocation": "2945:20:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5603,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5602,
					"mutability": "mutable",
					"name": "_mapleItems",
					"nameLocation": "2974:11:27",
					"nodeType": "VariableDeclaration",
					"scope": 5625,
					"src": "2966:19:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5601,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "2966:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2965:21:27"
			  },
			  "returnParameters": {
				"id": 5606,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3006:0:27"
			  },
			  "scope": 6174,
			  "src": "2936:178:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5649,
				"nodeType": "Block",
				"src": "3191:111:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5641,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5635,
								"name": "MapleMarket",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5392,
								"src": "3217:11:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5634,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "3209:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5633,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "3209:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5636,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "3209:20:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5639,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "3241:1:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5638,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "3233:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5637,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "3233:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5640,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "3233:10:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "3209:34:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5642,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "3245:13:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  },
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  }
						],
						"id": 5632,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "3201:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5643,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3201:58:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5644,
					"nodeType": "ExpressionStatement",
					"src": "3201:58:27"
				  },
				  {
					"expression": {
					  "id": 5647,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5645,
						"name": "MapleMarket",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5392,
						"src": "3269:11:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5646,
						"name": "_mapleMarket",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5627,
						"src": "3283:12:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "3269:26:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5648,
					"nodeType": "ExpressionStatement",
					"src": "3269:26:27"
				  }
				]
			  },
			  "functionSelector": "6171ba64",
			  "id": 5650,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5630,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5629,
					"name": "ownerOnly",
					"nameLocations": [
					  "3181:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5476,
					"src": "3181:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3181:9:27"
				}
			  ],
			  "name": "setMapleMarketAddress",
			  "nameLocation": "3128:21:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5628,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5627,
					"mutability": "mutable",
					"name": "_mapleMarket",
					"nameLocation": "3158:12:27",
					"nodeType": "VariableDeclaration",
					"scope": 5650,
					"src": "3150:20:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5626,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "3150:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "3149:22:27"
			  },
			  "returnParameters": {
				"id": 5631,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3191:0:27"
			  },
			  "scope": 6174,
			  "src": "3119:183:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5674,
				"nodeType": "Block",
				"src": "3375:105:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5666,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5660,
								"name": "MapleUser",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5394,
								"src": "3401:9:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5659,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "3393:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5658,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "3393:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5661,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "3393:18:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5664,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "3423:1:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5663,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "3415:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5662,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "3415:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5665,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "3415:10:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "3393:32:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5667,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "3427:13:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  },
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  }
						],
						"id": 5657,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "3385:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5668,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3385:56:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5669,
					"nodeType": "ExpressionStatement",
					"src": "3385:56:27"
				  },
				  {
					"expression": {
					  "id": 5672,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5670,
						"name": "MapleUser",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5394,
						"src": "3451:9:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5671,
						"name": "_mapleUser",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5652,
						"src": "3463:10:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "3451:22:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5673,
					"nodeType": "ExpressionStatement",
					"src": "3451:22:27"
				  }
				]
			  },
			  "functionSelector": "0ff85a33",
			  "id": 5675,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5655,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5654,
					"name": "ownerOnly",
					"nameLocations": [
					  "3365:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5476,
					"src": "3365:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3365:9:27"
				}
			  ],
			  "name": "setMapleUserAddress",
			  "nameLocation": "3316:19:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5653,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5652,
					"mutability": "mutable",
					"name": "_mapleUser",
					"nameLocation": "3344:10:27",
					"nodeType": "VariableDeclaration",
					"scope": 5675,
					"src": "3336:18:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5651,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "3336:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "3335:20:27"
			  },
			  "returnParameters": {
				"id": 5656,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3375:0:27"
			  },
			  "scope": 6174,
			  "src": "3307:173:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5699,
				"nodeType": "Block",
				"src": "3551:99:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5691,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5685,
								"name": "Staking",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5406,
								"src": "3577:7:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5684,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "3569:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5683,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "3569:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5686,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "3569:16:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5689,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "3597:1:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5688,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "3589:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5687,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "3589:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5690,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "3589:10:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "3569:30:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5692,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "3601:13:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  },
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7",
							"typeString": "literal_string \"WRITE_ONCE!\""
						  }
						],
						"id": 5682,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "3561:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5693,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3561:54:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5694,
					"nodeType": "ExpressionStatement",
					"src": "3561:54:27"
				  },
				  {
					"expression": {
					  "id": 5697,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5695,
						"name": "Staking",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5406,
						"src": "3625:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5696,
						"name": "_staking",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5677,
						"src": "3635:8:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "3625:18:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5698,
					"nodeType": "ExpressionStatement",
					"src": "3625:18:27"
				  }
				]
			  },
			  "functionSelector": "f4e0d9ac",
			  "id": 5700,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5680,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5679,
					"name": "ownerOnly",
					"nameLocations": [
					  "3541:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5476,
					"src": "3541:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3541:9:27"
				}
			  ],
			  "name": "setStakingAddress",
			  "nameLocation": "3494:17:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5678,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5677,
					"mutability": "mutable",
					"name": "_staking",
					"nameLocation": "3520:8:27",
					"nodeType": "VariableDeclaration",
					"scope": 5700,
					"src": "3512:16:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5676,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "3512:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "3511:19:27"
			  },
			  "returnParameters": {
				"id": 5681,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3551:0:27"
			  },
			  "scope": 6174,
			  "src": "3485:165:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5740,
				"nodeType": "Block",
				"src": "3742:282:27",
				"statements": [
				  {
					"assignments": [
					  5708
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5708,
						"mutability": "mutable",
						"name": "tokenAmount",
						"nameLocation": "3794:11:27",
						"nodeType": "VariableDeclaration",
						"scope": 5740,
						"src": "3786:19:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5707,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "3786:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5713,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 5712,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"expression": {
						  "id": 5709,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "3808:3:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5710,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3812:5:27",
						"memberName": "value",
						"nodeType": "MemberAccess",
						"src": "3808:9:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "*",
					  "rightExpression": {
						"hexValue": "313030",
						"id": 5711,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "3820:3:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_100_by_1",
						  "typeString": "int_const 100"
						},
						"value": "100"
					  },
					  "src": "3808:15:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "3786:37:27"
				  },
				  {
					"expression": {
					  "id": 5719,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5714,
						  "name": "balancesToClaim",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5410,
						  "src": "3833:15:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 5717,
						"indexExpression": {
						  "expression": {
							"id": 5715,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3849:3:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5716,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3853:6:27",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3849:10:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "3833:27:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "+=",
					  "rightHandSide": {
						"id": 5718,
						"name": "tokenAmount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5708,
						"src": "3864:11:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "3833:42:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5720,
					"nodeType": "ExpressionStatement",
					"src": "3833:42:27"
				  },
				  {
					"expression": {
					  "id": 5727,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5721,
						  "name": "contributionsOf",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5414,
						  "src": "3885:15:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 5724,
						"indexExpression": {
						  "expression": {
							"id": 5722,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3901:3:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5723,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3905:6:27",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3901:10:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "3885:27:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "+=",
					  "rightHandSide": {
						"expression": {
						  "id": 5725,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "3916:3:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5726,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3920:5:27",
						"memberName": "value",
						"nodeType": "MemberAccess",
						"src": "3916:9:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "3885:40:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5728,
					"nodeType": "ExpressionStatement",
					"src": "3885:40:27"
				  },
				  {
					"expression": {
					  "id": 5732,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5729,
						"name": "totalContributed",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5373,
						"src": "3935:16:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "+=",
					  "rightHandSide": {
						"expression": {
						  "id": 5730,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "3955:3:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5731,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3959:5:27",
						"memberName": "value",
						"nodeType": "MemberAccess",
						"src": "3955:9:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "3935:29:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5733,
					"nodeType": "ExpressionStatement",
					"src": "3935:29:27"
				  },
				  {
					"eventCall": {
					  "arguments": [
						{
						  "expression": {
							"id": 5735,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3993:3:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5736,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3997:6:27",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3993:10:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5737,
						  "name": "tokenAmount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5708,
						  "src": "4005:11:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5734,
						"name": "TokensBought",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5360,
						"src": "3980:12:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5738,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3980:37:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5739,
					"nodeType": "EmitStatement",
					"src": "3975:42:27"
				  }
				]
			  },
			  "functionSelector": "d7bb99ba",
			  "id": 5741,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5703,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5702,
					"name": "isPaused",
					"nameLocations": [
					  "3719:8:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5550,
					"src": "3719:8:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3719:8:27"
				},
				{
				  "id": 5705,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5704,
					"name": "areFundsMoved",
					"nameLocations": [
					  "3728:13:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5540,
					"src": "3728:13:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3728:13:27"
				}
			  ],
			  "name": "contribute",
			  "nameLocation": "3689:10:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5701,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3699:2:27"
			  },
			  "returnParameters": {
				"id": 5706,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3742:0:27"
			  },
			  "scope": 6174,
			  "src": "3680:344:27",
			  "stateMutability": "payable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5784,
				"nodeType": "Block",
				"src": "4124:345:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5754,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"baseExpression": {
							  "id": 5749,
							  "name": "balancesToClaim",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5410,
							  "src": "4142:15:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
								"typeString": "mapping(address => uint256)"
							  }
							},
							"id": 5752,
							"indexExpression": {
							  "expression": {
								"id": 5750,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "4158:3:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 5751,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "4162:6:27",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "4158:10:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"isConstant": false,
							"isLValue": true,
							"isPure": false,
							"lValueRequested": false,
							"nodeType": "IndexAccess",
							"src": "4142:27:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": ">",
						  "rightExpression": {
							"hexValue": "30",
							"id": 5753,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "number",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "4172:1:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_rational_0_by_1",
							  "typeString": "int_const 0"
							},
							"value": "0"
						  },
						  "src": "4142:31:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "4e4f5f415641494c41424c455f46554e4453",
						  "id": 5755,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "4175:20:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64",
							"typeString": "literal_string \"NO_AVAILABLE_FUNDS\""
						  },
						  "value": "NO_AVAILABLE_FUNDS"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64",
							"typeString": "literal_string \"NO_AVAILABLE_FUNDS\""
						  }
						],
						"id": 5748,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "4134:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5756,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4134:62:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5757,
					"nodeType": "ExpressionStatement",
					"src": "4134:62:27"
				  },
				  {
					"assignments": [
					  5759
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5759,
						"mutability": "mutable",
						"name": "tokensToClaim",
						"nameLocation": "4277:13:27",
						"nodeType": "VariableDeclaration",
						"scope": 5784,
						"src": "4269:21:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5758,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "4269:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5764,
					"initialValue": {
					  "baseExpression": {
						"id": 5760,
						"name": "balancesToClaim",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5410,
						"src": "4293:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
						  "typeString": "mapping(address => uint256)"
						}
					  },
					  "id": 5763,
					  "indexExpression": {
						"expression": {
						  "id": 5761,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "4309:3:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5762,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "4313:6:27",
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "4309:10:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "isConstant": false,
					  "isLValue": true,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "IndexAccess",
					  "src": "4293:27:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "4269:51:27"
				  },
				  {
					"expression": {
					  "id": 5770,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5765,
						  "name": "balancesToClaim",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5410,
						  "src": "4330:15:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 5768,
						"indexExpression": {
						  "expression": {
							"id": 5766,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "4346:3:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5767,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "4350:6:27",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "4346:10:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "4330:27:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "30",
						"id": 5769,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "4360:1:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "4330:31:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5771,
					"nodeType": "ExpressionStatement",
					"src": "4330:31:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5777,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "4396:4:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$6174",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$6174",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5776,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "4388:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5775,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "4388:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5778,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "4388:13:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "expression": {
							"id": 5779,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "4403:3:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5780,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "4407:6:27",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "4403:10:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5781,
						  "name": "tokensToClaim",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5759,
						  "src": "4415:13:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 5772,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "4372:5:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$6174_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5774,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "4378:9:27",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2234,
						"src": "4372:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5782,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4372:57:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5783,
					"nodeType": "ExpressionStatement",
					"src": "4372:57:27"
				  }
				]
			  },
			  "functionSelector": "48c54b9d",
			  "id": 5785,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5744,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5743,
					"name": "isPaused",
					"nameLocations": [
					  "4101:8:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5550,
					"src": "4101:8:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "4101:8:27"
				},
				{
				  "id": 5746,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5745,
					"name": "areFundsMoved",
					"nameLocations": [
					  "4110:13:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5540,
					"src": "4110:13:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "4110:13:27"
				}
			  ],
			  "name": "claimTokens",
			  "nameLocation": "4078:11:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5742,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4089:2:27"
			  },
			  "returnParameters": {
				"id": 5747,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4124:0:27"
			  },
			  "scope": 6174,
			  "src": "4069:400:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5798,
				"nodeType": "Block",
				"src": "4560:81:27",
				"statements": [
				  {
					"expression": {
					  "id": 5793,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5790,
						"name": "isContractPaused",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5375,
						"src": "4570:16:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5792,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"nodeType": "UnaryOperation",
						"operator": "!",
						"prefix": true,
						"src": "4589:17:27",
						"subExpression": {
						  "id": 5791,
						  "name": "isContractPaused",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5375,
						  "src": "4590:16:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "src": "4570:36:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5794,
					"nodeType": "ExpressionStatement",
					"src": "4570:36:27"
				  },
				  {
					"eventCall": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5795,
						"name": "OwnerAction",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5362,
						"src": "4621:11:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5796,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4621:13:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5797,
					"nodeType": "EmitStatement",
					"src": "4616:18:27"
				  }
				]
			  },
			  "functionSelector": "d1cabc35",
			  "id": 5799,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5788,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5787,
					"name": "ownerOnly",
					"nameLocations": [
					  "4550:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5476,
					"src": "4550:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "4550:9:27"
				}
			  ],
			  "name": "togglePauseContract",
			  "nameLocation": "4519:19:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5786,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4538:2:27"
			  },
			  "returnParameters": {
				"id": 5789,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4560:0:27"
			  },
			  "scope": 6174,
			  "src": "4510:131:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5812,
				"nodeType": "Block",
				"src": "4720:63:27",
				"statements": [
				  {
					"expression": {
					  "id": 5807,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5804,
						"name": "isTaxOn",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5380,
						"src": "4730:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5806,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"nodeType": "UnaryOperation",
						"operator": "!",
						"prefix": true,
						"src": "4740:8:27",
						"subExpression": {
						  "id": 5805,
						  "name": "isTaxOn",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5380,
						  "src": "4741:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "src": "4730:18:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5808,
					"nodeType": "ExpressionStatement",
					"src": "4730:18:27"
				  },
				  {
					"eventCall": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5809,
						"name": "OwnerAction",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5362,
						"src": "4763:11:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5810,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4763:13:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5811,
					"nodeType": "EmitStatement",
					"src": "4758:18:27"
				  }
				]
			  },
			  "functionSelector": "10bf6029",
			  "id": 5813,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5802,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5801,
					"name": "ownerOnly",
					"nameLocations": [
					  "4710:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5476,
					"src": "4710:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "4710:9:27"
				}
			  ],
			  "name": "toggleTax",
			  "nameLocation": "4689:9:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5800,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4698:2:27"
			  },
			  "returnParameters": {
				"id": 5803,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4720:0:27"
			  },
			  "scope": 6174,
			  "src": "4680:103:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5826,
				"nodeType": "Block",
				"src": "4880:46:27",
				"statements": [
				  {
					"expression": {
					  "id": 5824,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5820,
						  "name": "isWhitelisted",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5418,
						  "src": "4890:13:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
							"typeString": "mapping(address => bool)"
						  }
						},
						"id": 5822,
						"indexExpression": {
						  "id": 5821,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5815,
						  "src": "4904:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						"isConstant": false,
						"isLValue": true,
						"isPure": false,
						"lValueRequested": true,
						"nodeType": "IndexAccess",
						"src": "4890:22:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "74727565",
						"id": 5823,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "4915:4:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "true"
					  },
					  "src": "4890:29:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5825,
					"nodeType": "ExpressionStatement",
					"src": "4890:29:27"
				  }
				]
			  },
			  "functionSelector": "e43252d7",
			  "id": 5827,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5818,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5817,
					"name": "ownerOnly",
					"nameLocations": [
					  "4870:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5476,
					"src": "4870:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "4870:9:27"
				}
			  ],
			  "name": "addToWhitelist",
			  "nameLocation": "4829:14:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5816,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5815,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "4852:7:27",
					"nodeType": "VariableDeclaration",
					"scope": 5827,
					"src": "4844:15:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5814,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4844:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4843:17:27"
			  },
			  "returnParameters": {
				"id": 5819,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4880:0:27"
			  },
			  "scope": 6174,
			  "src": "4820:106:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "baseFunctions": [
				2234
			  ],
			  "body": {
				"id": 5874,
				"nodeType": "Block",
				"src": "5020:412:27",
				"statements": [
				  {
					"assignments": [
					  5838
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5838,
						"mutability": "mutable",
						"name": "amountToTake",
						"nameLocation": "5038:12:27",
						"nodeType": "VariableDeclaration",
						"scope": 5874,
						"src": "5030:20:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5837,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "5030:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5839,
					"nodeType": "VariableDeclarationStatement",
					"src": "5030:20:27"
				  },
				  {
					"condition": {
					  "id": 5840,
					  "name": "isTaxOn",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 5380,
					  "src": "5084:7:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5851,
					"nodeType": "IfStatement",
					"src": "5080:73:27",
					"trueBody": {
					  "id": 5850,
					  "nodeType": "Block",
					  "src": "5093:60:27",
					  "statements": [
						{
						  "expression": {
							"id": 5848,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftHandSide": {
							  "id": 5841,
							  "name": "amountToTake",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5838,
							  "src": "5107:12:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"nodeType": "Assignment",
							"operator": "=",
							"rightHandSide": {
							  "commonType": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  },
							  "id": 5847,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"components": [
								  {
									"commonType": {
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									},
									"id": 5844,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"leftExpression": {
									  "id": 5842,
									  "name": "TAX",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 5371,
									  "src": "5123:3:27",
									  "typeDescriptions": {
										"typeIdentifier": "t_uint256",
										"typeString": "uint256"
									  }
									},
									"nodeType": "BinaryOperation",
									"operator": "*",
									"rightExpression": {
									  "id": 5843,
									  "name": "amount",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 5833,
									  "src": "5129:6:27",
									  "typeDescriptions": {
										"typeIdentifier": "t_uint256",
										"typeString": "uint256"
									  }
									},
									"src": "5123:12:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									}
								  }
								],
								"id": 5845,
								"isConstant": false,
								"isInlineArray": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "TupleExpression",
								"src": "5122:14:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "/",
							  "rightExpression": {
								"hexValue": "313030",
								"id": 5846,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "5139:3:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_100_by_1",
								  "typeString": "int_const 100"
								},
								"value": "100"
							  },
							  "src": "5122:20:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"src": "5107:35:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "id": 5849,
						  "nodeType": "ExpressionStatement",
						  "src": "5107:35:27"
						}
					  ]
					}
				  },
				  {
					"assignments": [
					  5853
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5853,
						"mutability": "mutable",
						"name": "amountToTransfer",
						"nameLocation": "5170:16:27",
						"nodeType": "VariableDeclaration",
						"scope": 5874,
						"src": "5162:24:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5852,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "5162:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5857,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 5856,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 5854,
						"name": "amount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5833,
						"src": "5189:6:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "-",
					  "rightExpression": {
						"id": 5855,
						"name": "amountToTake",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5838,
						"src": "5198:12:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "5189:21:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "5162:48:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5861,
						  "name": "sender",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5829,
						  "src": "5278:6:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5862,
						  "name": "recipient",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5831,
						  "src": "5286:9:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5863,
						  "name": "amountToTransfer",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5853,
						  "src": "5297:16:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 5858,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "5262:5:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$6174_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5860,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "5268:9:27",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2234,
						"src": "5262:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5864,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5262:52:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5865,
					"nodeType": "ExpressionStatement",
					"src": "5262:52:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5869,
						  "name": "sender",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5829,
						  "src": "5387:6:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5870,
						  "name": "treasuryWallet",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5384,
						  "src": "5395:14:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						},
						{
						  "id": 5871,
						  "name": "amountToTake",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5838,
						  "src": "5411:12:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 5866,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "5371:5:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$6174_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5868,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "5377:9:27",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2234,
						"src": "5371:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5872,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5371:53:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5873,
					"nodeType": "ExpressionStatement",
					"src": "5371:53:27"
				  }
				]
			  },
			  "id": 5875,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "_transfer",
			  "nameLocation": "4941:9:27",
			  "nodeType": "FunctionDefinition",
			  "overrides": {
				"id": 5835,
				"nodeType": "OverrideSpecifier",
				"overrides": [],
				"src": "5011:8:27"
			  },
			  "parameters": {
				"id": 5834,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5829,
					"mutability": "mutable",
					"name": "sender",
					"nameLocation": "4959:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5875,
					"src": "4951:14:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5828,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4951:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5831,
					"mutability": "mutable",
					"name": "recipient",
					"nameLocation": "4975:9:27",
					"nodeType": "VariableDeclaration",
					"scope": 5875,
					"src": "4967:17:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5830,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4967:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5833,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "4994:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5875,
					"src": "4986:14:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5832,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4986:7:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4950:51:27"
			  },
			  "returnParameters": {
				"id": 5836,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5020:0:27"
			  },
			  "scope": 6174,
			  "src": "4932:500:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5914,
				"nodeType": "Block",
				"src": "5504:269:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5890,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 5885,
							"name": "account",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5877,
							"src": "5522:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "!=",
						  "rightExpression": {
							"arguments": [
							  {
								"hexValue": "30",
								"id": 5888,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "5541:1:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								},
								"value": "0"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_rational_0_by_1",
								  "typeString": "int_const 0"
								}
							  ],
							  "id": 5887,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "5533:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5886,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "5533:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5889,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "5533:10:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "5522:21:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
						  "id": 5891,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "5545:33:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
							"typeString": "literal_string \"ERC20: mint to the zero address\""
						  },
						  "value": "ERC20: mint to the zero address"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
							"typeString": "literal_string \"ERC20: mint to the zero address\""
						  }
						],
						"id": 5884,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "5514:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5892,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5514:65:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5893,
					"nodeType": "ExpressionStatement",
					"src": "5514:65:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5900,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"id": 5898,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "arguments": [],
							  "expression": {
								"argumentTypes": [],
								"id": 5895,
								"name": "totalSupply",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 1972,
								"src": "5636:11:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
								  "typeString": "function () view returns (uint256)"
								}
							  },
							  "id": 5896,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "kind": "functionCall",
							  "lValueRequested": false,
							  "nameLocations": [],
							  "names": [],
							  "nodeType": "FunctionCall",
							  "src": "5636:13:27",
							  "tryCall": false,
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "+",
							"rightExpression": {
							  "id": 5897,
							  "name": "amount",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5879,
							  "src": "5652:6:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"src": "5636:22:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "<=",
						  "rightExpression": {
							"id": 5899,
							"name": "MAX_SUPPLY",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5368,
							"src": "5662:10:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "5636:36:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "41424f56455f4d41585f535550504c59",
						  "id": 5901,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "5674:18:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
							"typeString": "literal_string \"ABOVE_MAX_SUPPLY\""
						  },
						  "value": "ABOVE_MAX_SUPPLY"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  {
							"typeIdentifier": "t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff",
							"typeString": "literal_string \"ABOVE_MAX_SUPPLY\""
						  }
						],
						"id": 5894,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "5628:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5902,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5628:65:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5903,
					"nodeType": "ExpressionStatement",
					"src": "5628:65:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5905,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5877,
						  "src": "5733:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5911,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 5906,
							"name": "amount",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5879,
							"src": "5742:6:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "*",
						  "rightExpression": {
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"id": 5910,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "hexValue": "3130",
							  "id": 5907,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "kind": "number",
							  "lValueRequested": false,
							  "nodeType": "Literal",
							  "src": "5751:2:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_rational_10_by_1",
								"typeString": "int_const 10"
							  },
							  "value": "10"
							},
							"nodeType": "BinaryOperation",
							"operator": "**",
							"rightExpression": {
							  "arguments": [],
							  "expression": {
								"argumentTypes": [],
								"id": 5908,
								"name": "decimals",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 1962,
								"src": "5755:8:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
								  "typeString": "function () view returns (uint8)"
								}
							  },
							  "id": 5909,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "kind": "functionCall",
							  "lValueRequested": false,
							  "nameLocations": [],
							  "names": [],
							  "nodeType": "FunctionCall",
							  "src": "5755:10:27",
							  "tryCall": false,
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"src": "5751:14:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "5742:23:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5904,
						"name": "_mint",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2290,
						"src": "5727:5:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5912,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5727:39:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5913,
					"nodeType": "ExpressionStatement",
					"src": "5727:39:27"
				  }
				]
			  },
			  "functionSelector": "40c10f19",
			  "id": 5915,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5882,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5881,
					"name": "ownerOnly",
					"nameLocations": [
					  "5494:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5476,
					"src": "5494:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "5494:9:27"
				}
			  ],
			  "name": "mint",
			  "nameLocation": "5447:4:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5880,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5877,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "5460:7:27",
					"nodeType": "VariableDeclaration",
					"scope": 5915,
					"src": "5452:15:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5876,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "5452:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5879,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "5477:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5915,
					"src": "5469:14:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5878,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5469:7:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5451:33:27"
			  },
			  "returnParameters": {
				"id": 5883,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5504:0:27"
			  },
			  "scope": 6174,
			  "src": "5438:335:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5934,
				"nodeType": "Block",
				"src": "5849:56:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5925,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5917,
						  "src": "5865:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5931,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 5926,
							"name": "amount",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5919,
							"src": "5874:6:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "*",
						  "rightExpression": {
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"id": 5930,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "hexValue": "3130",
							  "id": 5927,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "kind": "number",
							  "lValueRequested": false,
							  "nodeType": "Literal",
							  "src": "5883:2:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_rational_10_by_1",
								"typeString": "int_const 10"
							  },
							  "value": "10"
							},
							"nodeType": "BinaryOperation",
							"operator": "**",
							"rightExpression": {
							  "arguments": [],
							  "expression": {
								"argumentTypes": [],
								"id": 5928,
								"name": "decimals",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 1962,
								"src": "5887:8:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
								  "typeString": "function () view returns (uint8)"
								}
							  },
							  "id": 5929,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "kind": "functionCall",
							  "lValueRequested": false,
							  "nameLocations": [],
							  "names": [],
							  "nodeType": "FunctionCall",
							  "src": "5887:10:27",
							  "tryCall": false,
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"src": "5883:14:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "5874:23:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5924,
						"name": "_burn",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2362,
						"src": "5859:5:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5932,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5859:39:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5933,
					"nodeType": "ExpressionStatement",
					"src": "5859:39:27"
				  }
				]
			  },
			  "functionSelector": "9dc29fac",
			  "id": 5935,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5922,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5921,
					"name": "ownerOnly",
					"nameLocations": [
					  "5839:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5476,
					"src": "5839:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "5839:9:27"
				}
			  ],
			  "name": "burn",
			  "nameLocation": "5792:4:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5920,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5917,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "5805:7:27",
					"nodeType": "VariableDeclaration",
					"scope": 5935,
					"src": "5797:15:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5916,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "5797:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5919,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "5822:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5935,
					"src": "5814:14:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5918,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5814:7:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5796:33:27"
			  },
			  "returnParameters": {
				"id": 5923,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5849:0:27"
			  },
			  "scope": 6174,
			  "src": "5783:122:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5949,
				"nodeType": "Block",
				"src": "5986:40:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5945,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5937,
						  "src": "6002:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5946,
						  "name": "amount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5939,
						  "src": "6011:6:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5944,
						"name": "_burn",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2362,
						"src": "5996:5:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5947,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5996:22:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5948,
					"nodeType": "ExpressionStatement",
					"src": "5996:22:27"
				  }
				]
			  },
			  "functionSelector": "1d057bd9",
			  "id": 5950,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5942,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5941,
					"name": "mapleNFTOnly",
					"nameLocations": [
					  "5973:12:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5498,
					"src": "5973:12:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "5973:12:27"
				}
			  ],
			  "name": "marketBurn",
			  "nameLocation": "5920:10:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5940,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5937,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "5939:7:27",
					"nodeType": "VariableDeclaration",
					"scope": 5950,
					"src": "5931:15:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5936,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "5931:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5939,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "5956:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5950,
					"src": "5948:14:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5938,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5948:7:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5930:33:27"
			  },
			  "returnParameters": {
				"id": 5943,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5986:0:27"
			  },
			  "scope": 6174,
			  "src": "5911:115:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5980,
				"nodeType": "Block",
				"src": "6316:328:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5964,
						  "name": "_owner",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5952,
						  "src": "6503:6:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5965,
						  "name": "_spender",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5954,
						  "src": "6531:8:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5975,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"expression": {
								  "id": 5967,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "6569:3:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 5968,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberLocation": "6573:6:27",
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "6569:10:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  {
								"arguments": [
								  {
									"id": 5971,
									"name": "this",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 4294967268,
									"src": "6589:4:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_contract$_JMToken_$6174",
									  "typeString": "contract JMToken"
									}
								  }
								],
								"expression": {
								  "argumentTypes": [
									{
									  "typeIdentifier": "t_contract$_JMToken_$6174",
									  "typeString": "contract JMToken"
									}
								  ],
								  "id": 5970,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "lValueRequested": false,
								  "nodeType": "ElementaryTypeNameExpression",
								  "src": "6581:7:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_type$_t_address_$",
									"typeString": "type(address)"
								  },
								  "typeName": {
									"id": 5969,
									"name": "address",
									"nodeType": "ElementaryTypeName",
									"src": "6581:7:27",
									"typeDescriptions": {}
								  }
								},
								"id": 5972,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"kind": "typeConversion",
								"lValueRequested": false,
								"nameLocations": [],
								"names": [],
								"nodeType": "FunctionCall",
								"src": "6581:13:27",
								"tryCall": false,
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								},
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  ],
							  "id": 5966,
							  "name": "allowance",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 2029,
							  "src": "6559:9:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_uint256_$",
								"typeString": "function (address,address) view returns (uint256)"
							  }
							},
							"id": 5973,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "6559:36:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "+",
						  "rightExpression": {
							"id": 5974,
							"name": "_amount",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5956,
							"src": "6598:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "6559:46:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"id": 5963,
						"name": "_approve",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2407,
						"src": "6481:8:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5976,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6481:134:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5977,
					"nodeType": "ExpressionStatement",
					"src": "6481:134:27"
				  },
				  {
					"expression": {
					  "hexValue": "74727565",
					  "id": 5978,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "bool",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "6633:4:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "value": "true"
					},
					"functionReturnParameters": 5962,
					"id": 5979,
					"nodeType": "Return",
					"src": "6626:11:27"
				  }
				]
			  },
			  "functionSelector": "d83a2bf3",
			  "id": 5981,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5959,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5958,
					"name": "routerOnly",
					"nameLocations": [
					  "6290:10:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5530,
					"src": "6290:10:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "6290:10:27"
				}
			  ],
			  "name": "increaseContractAllowance",
			  "nameLocation": "6198:25:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5957,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5952,
					"mutability": "mutable",
					"name": "_owner",
					"nameLocation": "6232:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5981,
					"src": "6224:14:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5951,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "6224:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5954,
					"mutability": "mutable",
					"name": "_spender",
					"nameLocation": "6247:8:27",
					"nodeType": "VariableDeclaration",
					"scope": 5981,
					"src": "6239:16:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5953,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "6239:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 5956,
					"mutability": "mutable",
					"name": "_amount",
					"nameLocation": "6264:7:27",
					"nodeType": "VariableDeclaration",
					"scope": 5981,
					"src": "6256:15:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5955,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "6256:7:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "6223:49:27"
			  },
			  "returnParameters": {
				"id": 5962,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5961,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 5981,
					"src": "6310:4:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 5960,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "6310:4:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "6309:6:27"
			  },
			  "scope": 6174,
			  "src": "6189:455:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 6035,
				"nodeType": "Block",
				"src": "6814:660:27",
				"statements": [
				  {
					"expression": {
					  "id": 5993,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5991,
						"name": "fundsAlreadyMoved",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5377,
						"src": "6824:17:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "74727565",
						"id": 5992,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "6844:4:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "true"
					  },
					  "src": "6824:24:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5994,
					"nodeType": "ExpressionStatement",
					"src": "6824:24:27"
				  },
				  {
					"assignments": [
					  5996
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5996,
						"mutability": "mutable",
						"name": "jmtCoinAmountToTransfer",
						"nameLocation": "6936:23:27",
						"nodeType": "VariableDeclaration",
						"scope": 6035,
						"src": "6928:31:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5995,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "6928:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 6000,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 5999,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 5997,
						"name": "totalContributed",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5373,
						"src": "6962:16:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "*",
					  "rightExpression": {
						"hexValue": "313030",
						"id": 5998,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "6981:3:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_100_by_1",
						  "typeString": "int_const 100"
						},
						"value": "100"
					  },
					  "src": "6962:22:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "6928:56:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 6006,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "7060:4:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$6174",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$6174",
								"typeString": "contract JMToken"
							  }
							],
							"id": 6005,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7052:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 6004,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7052:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 6007,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7052:13:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 6010,
							  "name": "liquidityPool",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5984,
							  "src": "7087:13:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_LiquidityPool_$7043",
								"typeString": "contract LiquidityPool"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_LiquidityPool_$7043",
								"typeString": "contract LiquidityPool"
							  }
							],
							"id": 6009,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7079:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 6008,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7079:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 6011,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7079:22:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 6012,
						  "name": "jmtCoinAmountToTransfer",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5996,
						  "src": "7115:23:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 6001,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "7023:5:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$6174_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 6003,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "7029:9:27",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2234,
						"src": "7023:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 6013,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7023:125:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 6014,
					"nodeType": "ExpressionStatement",
					"src": "7023:125:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 6020,
						  "name": "jmtCoinAmountToTransfer",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5996,
						  "src": "7290:23:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 6023,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "7335:4:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$6174",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$6174",
								"typeString": "contract JMToken"
							  }
							],
							"id": 6022,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7327:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 6021,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7327:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 6024,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7327:13:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							{
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  ],
						  "expression": {
							"id": 6015,
							"name": "liquidityPool",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5984,
							"src": "7230:13:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_contract$_LiquidityPool_$7043",
							  "typeString": "contract LiquidityPool"
							}
						  },
						  "id": 6017,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "7244:7:27",
						  "memberName": "deposit",
						  "nodeType": "MemberAccess",
						  "referencedDeclaration": 6744,
						  "src": "7230:21:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_function_external_payable$_t_uint256_$_t_address_$returns$__$",
							"typeString": "function (uint256,address) payable external"
						  }
						},
						"id": 6019,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"names": [
						  "value"
						],
						"nodeType": "FunctionCallOptions",
						"options": [
						  {
							"id": 6018,
							"name": "totalContributed",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5373,
							"src": "7259:16:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  }
						],
						"src": "7230:46:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_payable$_t_uint256_$_t_address_$returns$__$value",
						  "typeString": "function (uint256,address) payable external"
						}
					  },
					  "id": 6025,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7230:120:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 6026,
					"nodeType": "ExpressionStatement",
					"src": "7230:120:27"
				  },
				  {
					"expression": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"expression": {
						  "id": 6027,
						  "name": "liquidityPool",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5984,
						  "src": "7394:13:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_LiquidityPool_$7043",
							"typeString": "contract LiquidityPool"
						  }
						},
						"id": 6029,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "7408:16:27",
						"memberName": "setFundedReserve",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 6352,
						"src": "7394:30:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_nonpayable$__$returns$__$",
						  "typeString": "function () external"
						}
					  },
					  "id": 6030,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7394:32:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 6031,
					"nodeType": "ExpressionStatement",
					"src": "7394:32:27"
				  },
				  {
					"expression": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 6032,
						"name": "sendRemainingFundsToTreasury",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 6069,
						"src": "7437:28:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 6033,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7437:30:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 6034,
					"nodeType": "ExpressionStatement",
					"src": "7437:30:27"
				  }
				]
			  },
			  "functionSelector": "1690bb4e",
			  "id": 6036,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5987,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5986,
					"name": "ownerOnly",
					"nameLocations": [
					  "6786:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5476,
					"src": "6786:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "6786:9:27"
				},
				{
				  "id": 5989,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5988,
					"name": "areFundsMoved",
					"nameLocations": [
					  "6796:13:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5540,
					"src": "6796:13:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "6796:13:27"
				}
			  ],
			  "name": "sendLiquidityToLPContract",
			  "nameLocation": "6722:25:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5985,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5984,
					"mutability": "mutable",
					"name": "liquidityPool",
					"nameLocation": "6762:13:27",
					"nodeType": "VariableDeclaration",
					"scope": 6036,
					"src": "6748:27:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_contract$_LiquidityPool_$7043",
					  "typeString": "contract LiquidityPool"
					},
					"typeName": {
					  "id": 5983,
					  "nodeType": "UserDefinedTypeName",
					  "pathNode": {
						"id": 5982,
						"name": "LiquidityPool",
						"nameLocations": [
						  "6748:13:27"
						],
						"nodeType": "IdentifierPath",
						"referencedDeclaration": 7043,
						"src": "6748:13:27"
					  },
					  "referencedDeclaration": 7043,
					  "src": "6748:13:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_contract$_LiquidityPool_$7043",
						"typeString": "contract LiquidityPool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "6747:29:27"
			  },
			  "returnParameters": {
				"id": 5990,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "6814:0:27"
			  },
			  "scope": 6174,
			  "src": "6713:761:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 6068,
				"nodeType": "Block",
				"src": "7699:201:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 6039,
						"name": "MovedStakingReward",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 6096,
						"src": "7709:18:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 6040,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7709:20:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 6041,
					"nodeType": "ExpressionStatement",
					"src": "7709:20:27"
				  },
				  {
					"assignments": [
					  6043
					],
					"declarations": [
					  {
						"constant": false,
						"id": 6043,
						"mutability": "mutable",
						"name": "remainingJMT",
						"nameLocation": "7748:12:27",
						"nodeType": "VariableDeclaration",
						"scope": 6068,
						"src": "7740:20:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 6042,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "7740:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 6050,
					"initialValue": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 6047,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "7781:4:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$6174",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$6174",
								"typeString": "contract JMToken"
							  }
							],
							"id": 6046,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7773:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 6045,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7773:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 6048,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7773:13:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						],
						"id": 6044,
						"name": "balanceOf",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1986,
						"src": "7763:9:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
						  "typeString": "function (address) view returns (uint256)"
						}
					  },
					  "id": 6049,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7763:24:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "7740:47:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 6056,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "7821:4:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$6174",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$6174",
								"typeString": "contract JMToken"
							  }
							],
							"id": 6055,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7813:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 6054,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7813:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 6057,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7813:13:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 6060,
							  "name": "treasuryWallet",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5384,
							  "src": "7836:14:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_address_payable",
								"typeString": "address payable"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_address_payable",
								"typeString": "address payable"
							  }
							],
							"id": 6059,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7828:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 6058,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7828:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 6061,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7828:23:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 6062,
						  "name": "remainingJMT",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 6043,
						  "src": "7853:12:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 6051,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "7797:5:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$6174_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 6053,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "7803:9:27",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2234,
						"src": "7797:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 6063,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7797:69:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 6064,
					"nodeType": "ExpressionStatement",
					"src": "7797:69:27"
				  },
				  {
					"eventCall": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 6065,
						"name": "FundsMoved",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5364,
						"src": "7881:10:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 6066,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7881:12:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 6067,
					"nodeType": "EmitStatement",
					"src": "7876:17:27"
				  }
				]
			  },
			  "id": 6069,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "sendRemainingFundsToTreasury",
			  "nameLocation": "7659:28:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 6037,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "7687:2:27"
			  },
			  "returnParameters": {
				"id": 6038,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "7699:0:27"
			  },
			  "scope": 6174,
			  "src": "7650:250:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 6095,
				"nodeType": "Block",
				"src": "7985:135:27",
				"statements": [
				  {
					"assignments": [
					  6073
					],
					"declarations": [
					  {
						"constant": false,
						"id": 6073,
						"mutability": "mutable",
						"name": "remainingJMT",
						"nameLocation": "8003:12:27",
						"nodeType": "VariableDeclaration",
						"scope": 6095,
						"src": "7995:20:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 6072,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "7995:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 6080,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 6079,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"hexValue": "333030303030",
						"id": 6074,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "8018:6:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_300000_by_1",
						  "typeString": "int_const 300000"
						},
						"value": "300000"
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "*",
					  "rightExpression": {
						"commonType": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"id": 6078,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"leftExpression": {
						  "hexValue": "3130",
						  "id": 6075,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "number",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "8027:2:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_rational_10_by_1",
							"typeString": "int_const 10"
						  },
						  "value": "10"
						},
						"nodeType": "BinaryOperation",
						"operator": "**",
						"rightExpression": {
						  "arguments": [],
						  "expression": {
							"argumentTypes": [],
							"id": 6076,
							"name": "decimals",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 1962,
							"src": "8031:8:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
							  "typeString": "function () view returns (uint8)"
							}
						  },
						  "id": 6077,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "functionCall",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "8031:10:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"src": "8027:14:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "8018:23:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "7995:46:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 6086,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "8075:4:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$6174",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$6174",
								"typeString": "contract JMToken"
							  }
							],
							"id": 6085,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "8067:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 6084,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "8067:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 6087,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "8067:13:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 6090,
							  "name": "Staking",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5406,
							  "src": "8090:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							],
							"id": 6089,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "8082:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 6088,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "8082:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 6091,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "8082:16:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 6092,
						  "name": "remainingJMT",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 6073,
						  "src": "8100:12:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						],
						"expression": {
						  "id": 6081,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "8051:5:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$6174_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 6083,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "8057:9:27",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2234,
						"src": "8051:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 6093,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "8051:62:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 6094,
					"nodeType": "ExpressionStatement",
					"src": "8051:62:27"
				  }
				]
			  },
			  "id": 6096,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "MovedStakingReward",
			  "nameLocation": "7955:18:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 6070,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "7973:2:27"
			  },
			  "returnParameters": {
				"id": 6071,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "7985:0:27"
			  },
			  "scope": 6174,
			  "src": "7946:174:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 6122,
				"nodeType": "Block",
				"src": "8217:141:27",
				"statements": [
				  {
					"expression": {
					  "id": 6104,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "UnaryOperation",
					  "operator": "++",
					  "prefix": false,
					  "src": "8243:9:27",
					  "subExpression": {
						"id": 6103,
						"name": "randNum",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5401,
						"src": "8243:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 6105,
					"nodeType": "ExpressionStatement",
					"src": "8243:9:27"
				  },
				  {
					"expression": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 6120,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"arguments": [
						  {
							"arguments": [
							  {
								"arguments": [
								  {
									"expression": {
									  "id": 6111,
									  "name": "block",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 4294967292,
									  "src": "8301:5:27",
									  "typeDescriptions": {
										"typeIdentifier": "t_magic_block",
										"typeString": "block"
									  }
									},
									"id": 6112,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"memberLocation": "8307:9:27",
									"memberName": "timestamp",
									"nodeType": "MemberAccess",
									"src": "8301:15:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									}
								  },
								  {
									"expression": {
									  "id": 6113,
									  "name": "msg",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 4294967281,
									  "src": "8318:3:27",
									  "typeDescriptions": {
										"typeIdentifier": "t_magic_message",
										"typeString": "msg"
									  }
									},
									"id": 6114,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"memberLocation": "8322:6:27",
									"memberName": "sender",
									"nodeType": "MemberAccess",
									"src": "8318:10:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									}
								  },
								  {
									"id": 6115,
									"name": "randNum",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 5401,
									"src": "8330:7:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									}
								  }
								],
								"expression": {
								  "argumentTypes": [
									{
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									},
									{
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									},
									{
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									}
								  ],
								  "expression": {
									"id": 6109,
									"name": "abi",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 4294967295,
									"src": "8284:3:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_magic_abi",
									  "typeString": "abi"
									}
								  },
								  "id": 6110,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "lValueRequested": false,
								  "memberLocation": "8288:12:27",
								  "memberName": "encodePacked",
								  "nodeType": "MemberAccess",
								  "src": "8284:16:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
									"typeString": "function () pure returns (bytes memory)"
								  }
								},
								"id": 6116,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"kind": "functionCall",
								"lValueRequested": false,
								"nameLocations": [],
								"names": [],
								"nodeType": "FunctionCall",
								"src": "8284:54:27",
								"tryCall": false,
								"typeDescriptions": {
								  "typeIdentifier": "t_bytes_memory_ptr",
								  "typeString": "bytes memory"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_bytes_memory_ptr",
								  "typeString": "bytes memory"
								}
							  ],
							  "id": 6108,
							  "name": "keccak256",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967288,
							  "src": "8274:9:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
								"typeString": "function (bytes memory) pure returns (bytes32)"
							  }
							},
							"id": 6117,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "8274:65:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_bytes32",
							  "typeString": "bytes32"
							}
						  }
						],
						"expression": {
						  "argumentTypes": [
							{
							  "typeIdentifier": "t_bytes32",
							  "typeString": "bytes32"
							}
						  ],
						  "id": 6107,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "lValueRequested": false,
						  "nodeType": "ElementaryTypeNameExpression",
						  "src": "8269:4:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_uint256_$",
							"typeString": "type(uint256)"
						  },
						  "typeName": {
							"id": 6106,
							"name": "uint",
							"nodeType": "ElementaryTypeName",
							"src": "8269:4:27",
							"typeDescriptions": {}
						  }
						},
						"id": 6118,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "typeConversion",
						"lValueRequested": false,
						"nameLocations": [],
						"names": [],
						"nodeType": "FunctionCall",
						"src": "8269:71:27",
						"tryCall": false,
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "%",
					  "rightExpression": {
						"id": 6119,
						"name": "_modulus",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 6098,
						"src": "8343:8:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "8269:82:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 6102,
					"id": 6121,
					"nodeType": "Return",
					"src": "8262:89:27"
				  }
				]
			  },
			  "id": 6123,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "randMod",
			  "nameLocation": "8171:7:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 6099,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 6098,
					"mutability": "mutable",
					"name": "_modulus",
					"nameLocation": "8184:8:27",
					"nodeType": "VariableDeclaration",
					"scope": 6123,
					"src": "8179:13:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 6097,
					  "name": "uint",
					  "nodeType": "ElementaryTypeName",
					  "src": "8179:4:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "8178:15:27"
			  },
			  "returnParameters": {
				"id": 6102,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 6101,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 6123,
					"src": "8211:4:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 6100,
					  "name": "uint",
					  "nodeType": "ElementaryTypeName",
					  "src": "8211:4:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "8210:6:27"
			  },
			  "scope": 6174,
			  "src": "8162:196:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 6172,
				"nodeType": "Block",
				"src": "8427:403:27",
				"statements": [
				  {
					"expression": {
					  "id": 6132,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 6130,
						"name": "winRewardAddr",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5396,
						"src": "8437:13:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 6131,
						"name": "_addr",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 6125,
						"src": "8453:5:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "8437:21:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 6133,
					"nodeType": "ExpressionStatement",
					"src": "8437:21:27"
				  },
				  {
					"expression": {
					  "id": 6136,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 6134,
						"name": "winRewardAmount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5398,
						"src": "8468:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 6135,
						"name": "_amount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 6127,
						"src": "8486:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "8468:25:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 6137,
					"nodeType": "ExpressionStatement",
					"src": "8468:25:27"
				  },
				  {
					"assignments": [
					  6139
					],
					"declarations": [
					  {
						"constant": false,
						"id": 6139,
						"mutability": "mutable",
						"name": "rand",
						"nameLocation": "8508:4:27",
						"nodeType": "VariableDeclaration",
						"scope": 6172,
						"src": "8503:9:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 6138,
						  "name": "uint",
						  "nodeType": "ElementaryTypeName",
						  "src": "8503:4:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 6143,
					"initialValue": {
					  "arguments": [
						{
						  "hexValue": "313030",
						  "id": 6141,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "number",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "8523:3:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_rational_100_by_1",
							"typeString": "int_const 100"
						  },
						  "value": "100"
						}
					  ],
					  "expression": {
						"argumentTypes": [
						  {
							"typeIdentifier": "t_rational_100_by_1",
							"typeString": "int_const 100"
						  }
						],
						"id": 6140,
						"name": "randMod",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 6123,
						"src": "8515:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
						  "typeString": "function (uint256) returns (uint256)"
						}
					  },
					  "id": 6142,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "8515:12:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "8503:24:27"
				  },
				  {
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 6146,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 6144,
						"name": "rand",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 6139,
						"src": "8542:4:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "<=",
					  "rightExpression": {
						"id": 6145,
						"name": "rewardProbability",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5404,
						"src": "8550:17:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "8542:25:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"falseBody": {
					  "id": 6170,
					  "nodeType": "Block",
					  "src": "8774:50:27",
					  "statements": [
						{
						  "eventCall": {
							"arguments": [
							  {
								"hexValue": "66616c7365",
								"id": 6167,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "bool",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "8807:5:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_bool",
								  "typeString": "bool"
								},
								"value": "false"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_bool",
								  "typeString": "bool"
								}
							  ],
							  "id": 6166,
							  "name": "TokenRewarded",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5422,
							  "src": "8793:13:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_event_nonpayable$_t_bool_$returns$__$",
								"typeString": "function (bool)"
							  }
							},
							"id": 6168,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "8793:20:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_tuple$__$",
							  "typeString": "tuple()"
							}
						  },
						  "id": 6169,
						  "nodeType": "EmitStatement",
						  "src": "8788:25:27"
						}
					  ]
					},
					"id": 6171,
					"nodeType": "IfStatement",
					"src": "8537:287:27",
					"trueBody": {
					  "id": 6165,
					  "nodeType": "Block",
					  "src": "8570:198:27",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"arguments": [
								  {
									"id": 6152,
									"name": "treasuryWallet",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 5384,
									"src": "8648:14:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_address_payable",
									  "typeString": "address payable"
									}
								  }
								],
								"expression": {
								  "argumentTypes": [
									{
									  "typeIdentifier": "t_address_payable",
									  "typeString": "address payable"
									}
								  ],
								  "id": 6151,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "lValueRequested": false,
								  "nodeType": "ElementaryTypeNameExpression",
								  "src": "8640:7:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_type$_t_address_$",
									"typeString": "type(address)"
								  },
								  "typeName": {
									"id": 6150,
									"name": "address",
									"nodeType": "ElementaryTypeName",
									"src": "8640:7:27",
									"typeDescriptions": {}
								  }
								},
								"id": 6153,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"kind": "typeConversion",
								"lValueRequested": false,
								"nameLocations": [],
								"names": [],
								"nodeType": "FunctionCall",
								"src": "8640:23:27",
								"tryCall": false,
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  {
								"arguments": [
								  {
									"id": 6156,
									"name": "winRewardAddr",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 5396,
									"src": "8673:13:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									}
								  }
								],
								"expression": {
								  "argumentTypes": [
									{
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									}
								  ],
								  "id": 6155,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "lValueRequested": false,
								  "nodeType": "ElementaryTypeNameExpression",
								  "src": "8665:7:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_type$_t_address_$",
									"typeString": "type(address)"
								  },
								  "typeName": {
									"id": 6154,
									"name": "address",
									"nodeType": "ElementaryTypeName",
									"src": "8665:7:27",
									"typeDescriptions": {}
								  }
								},
								"id": 6157,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"kind": "typeConversion",
								"lValueRequested": false,
								"nameLocations": [],
								"names": [],
								"nodeType": "FunctionCall",
								"src": "8665:22:27",
								"tryCall": false,
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  {
								"id": 6158,
								"name": "winRewardAmount",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5398,
								"src": "8689:15:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								},
								{
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								},
								{
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  ],
							  "expression": {
								"id": 6147,
								"name": "super",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967271,
								"src": "8624:5:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_type$_t_super$_JMToken_$6174_$",
								  "typeString": "type(contract super JMToken)"
								}
							  },
							  "id": 6149,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "8630:9:27",
							  "memberName": "_transfer",
							  "nodeType": "MemberAccess",
							  "referencedDeclaration": 2234,
							  "src": "8624:15:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
								"typeString": "function (address,address,uint256)"
							  }
							},
							"id": 6159,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "8624:81:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_tuple$__$",
							  "typeString": "tuple()"
							}
						  },
						  "id": 6160,
						  "nodeType": "ExpressionStatement",
						  "src": "8624:81:27"
						},
						{
						  "eventCall": {
							"arguments": [
							  {
								"hexValue": "74727565",
								"id": 6162,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "bool",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "8752:4:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_bool",
								  "typeString": "bool"
								},
								"value": "true"
							  }
							],
							"expression": {
							  "argumentTypes": [
								{
								  "typeIdentifier": "t_bool",
								  "typeString": "bool"
								}
							  ],
							  "id": 6161,
							  "name": "TokenRewarded",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5422,
							  "src": "8738:13:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_event_nonpayable$_t_bool_$returns$__$",
								"typeString": "function (bool)"
							  }
							},
							"id": 6163,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "8738:19:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_tuple$__$",
							  "typeString": "tuple()"
							}
						  },
						  "id": 6164,
						  "nodeType": "EmitStatement",
						  "src": "8733:24:27"
						}
					  ]
					}
				  }
				]
			  },
			  "functionSelector": "85b1fb8e",
			  "id": 6173,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "randRewardToken",
			  "nameLocation": "8373:15:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 6128,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 6125,
					"mutability": "mutable",
					"name": "_addr",
					"nameLocation": "8397:5:27",
					"nodeType": "VariableDeclaration",
					"scope": 6173,
					"src": "8389:13:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 6124,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "8389:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  },
				  {
					"constant": false,
					"id": 6127,
					"mutability": "mutable",
					"name": "_amount",
					"nameLocation": "8409:7:27",
					"nodeType": "VariableDeclaration",
					"scope": 6173,
					"src": "8404:12:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 6126,
					  "name": "uint",
					  "nodeType": "ElementaryTypeName",
					  "src": "8404:4:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "8388:29:27"
			  },
			  "returnParameters": {
				"id": 6129,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "8427:0:27"
			  },
			  "scope": 6174,
			  "src": "8364:466:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			}
		  ],
		  "scope": 6175,
		  "src": "149:8684:27",
		  "usedErrors": []
		}
	  ],
	  "src": "37:8796:27"
	},
	"compiler": {
	  "name": "solc",
	  "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
	},
	"networks": {
	  "2999": {
		"events": {
		  "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			  },
			  {
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			  },
			  {
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			  }
			],
			"name": "Approval",
			"type": "event"
		  },
		  "0xa01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e1": {
			"anonymous": false,
			"inputs": [],
			"name": "FundsMoved",
			"type": "event"
		  },
		  "0xe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d3": {
			"anonymous": false,
			"inputs": [],
			"name": "OwnerAction",
			"type": "event"
		  },
		  "0xe3bf9628d38f54d735cbc07db121eaef41935c08353bba9b8c8772d4ebba2d99": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": false,
				"internalType": "bool",
				"name": "result",
				"type": "bool"
			  }
			],
			"name": "TokenRewarded",
			"type": "event"
		  },
		  "0x745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"internalType": "address",
				"name": "_account",
				"type": "address"
			  },
			  {
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			  }
			],
			"name": "TokensBought",
			"type": "event"
		  },
		  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			  },
			  {
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			  },
			  {
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			  }
			],
			"name": "Transfer",
			"type": "event"
		  },
		  "0x780220331cfc54e96b64b4846ee1b9c079d282c095d2823c41de6cfeeadb9c2b": {
			"anonymous": false,
			"inputs": [],
			"name": "_MovedStakingReward",
			"type": "event"
		  }
		},
		"links": {},
		"address": "0x84d118f7Fe8a3Da2137226D8B6855bA6Eb4eD81E",
		"transactionHash": "0x339ba60b8cae436d03a34ff750e822a14235c819e0fbd79686e32c05c8d99c43"
	  },
	  "5777": {
		"events": {
		  "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			  },
			  {
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			  },
			  {
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			  }
			],
			"name": "Approval",
			"type": "event"
		  },
		  "0xa01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e1": {
			"anonymous": false,
			"inputs": [],
			"name": "FundsMoved",
			"type": "event"
		  },
		  "0xe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d3": {
			"anonymous": false,
			"inputs": [],
			"name": "OwnerAction",
			"type": "event"
		  },
		  "0xe3bf9628d38f54d735cbc07db121eaef41935c08353bba9b8c8772d4ebba2d99": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": false,
				"internalType": "bool",
				"name": "result",
				"type": "bool"
			  }
			],
			"name": "TokenRewarded",
			"type": "event"
		  },
		  "0x745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"internalType": "address",
				"name": "_account",
				"type": "address"
			  },
			  {
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			  }
			],
			"name": "TokensBought",
			"type": "event"
		  },
		  "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
			"anonymous": false,
			"inputs": [
			  {
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			  },
			  {
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			  },
			  {
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			  }
			],
			"name": "Transfer",
			"type": "event"
		  },
		  "0x780220331cfc54e96b64b4846ee1b9c079d282c095d2823c41de6cfeeadb9c2b": {
			"anonymous": false,
			"inputs": [],
			"name": "_MovedStakingReward",
			"type": "event"
		  }
		},
		"links": {},
		"address": "0xb3C83e38f7a584a2Ad0A6FF51798e09110153165",
		"transactionHash": "0x036c3a2fdbd03af0c8f5c05229a81aa086c3330fa5805288223afaed51842a57"
	  }
	},
	"schemaVersion": "3.4.9",
	"updatedAt": "2022-09-26T21:29:29.661Z",
	"networkType": "ethereum",
	"devdoc": {
	  "kind": "dev",
	  "methods": {
		"allowance(address,address)": {
		  "details": "See {IERC20-allowance}."
		},
		"approve(address,uint256)": {
		  "details": "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
		},
		"balanceOf(address)": {
		  "details": "See {IERC20-balanceOf}."
		},
		"decimals()": {
		  "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
		},
		"decreaseAllowance(address,uint256)": {
		  "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
		},
		"increaseAllowance(address,uint256)": {
		  "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
		},
		"name()": {
		  "details": "Returns the name of the token."
		},
		"symbol()": {
		  "details": "Returns the symbol of the token, usually a shorter version of the name."
		},
		"totalSupply()": {
		  "details": "See {IERC20-totalSupply}."
		},
		"transfer(address,uint256)": {
		  "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."
		},
		"transferFrom(address,address,uint256)": {
		  "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`."
		}
	  },
	  "version": 1
	},
	"userdoc": {
	  "kind": "user",
	  "methods": {},
	  "version": 1
	}
  }
module.exports = TOKEN;
