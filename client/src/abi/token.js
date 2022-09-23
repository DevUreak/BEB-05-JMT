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
	"metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"treasury\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"FundsMoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"OwnerAction\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"result\",\"type\":\"bool\"}],\"name\":\"TokenRewarded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"TokensBought\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"_MovedStakingReward\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_SUPPLY\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MapleItems\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MapleNFT\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"Router\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"Staking\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"TAX\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addToWhitelist\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balancesToClaim\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"claimTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"contribute\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"contributionsOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"fundsAlreadyMoved\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"increaseContractAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isContractPaused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isTaxOn\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"isWhitelisted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"marketBurn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_addr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"randRewardToken\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract LiquidityPool\",\"name\":\"liquidityPool\",\"type\":\"address\"}],\"name\":\"sendLiquidityToLPContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_mapleItems\",\"type\":\"address\"}],\"name\":\"setMapleItemsAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_mapleNft\",\"type\":\"address\"}],\"name\":\"setMapleNFTAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_router\",\"type\":\"address\"}],\"name\":\"setRouterAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_staking\",\"type\":\"address\"}],\"name\":\"setStakingAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"togglePauseContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"toggleTax\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalContributed\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"treasuryWallet\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"winRewardAddr\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless this function is overridden; NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/JMToken.sol\":\"JMToken\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/security/ReentrancyGuard.sol\":{\"keccak256\":\"0x0e9621f60b2faabe65549f7ed0f24e8853a45c1b7990d47e8160e523683f3935\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://287a2f8d5814dd0f05f22b740f18ca8321acc21c9bd03a6cb2203ea626e2f3f2\",\"dweb:/ipfs/QmZRQv9iuwU817VuqkA2WweiaibKii69x9QxYBBEfbNEud\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xd15c3e400531f00203839159b2b8e7209c5158b35618f570c695b7e47f12e9f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b600b852e0597aa69989cc263111f02097e2827edc1bdc70306303e3af5e9929\",\"dweb:/ipfs/QmU4WfM28A1nDqghuuGeFmN3CnVrk6opWtiF65K4vhFPeC\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/JMToken.sol\":{\"keccak256\":\"0x110dc82ef0865455f644ee26fabbd0e168fe04358db98deac40ad44012e568e8\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://13c60849db4a312ddc1d766443fbff08726c0898b54ac6eb4e6dba48f85537f6\",\"dweb:/ipfs/QmSsLQLWK8JzMb4ipVAv6GAQR6gwxpp392b4PrTySX1Mqf\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0xa2bc2b583b4a3c3dd261e5ec6f98ba02cfe17ec43e7c5b92c14b37b78776f5a3\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://274fa4ca244401264800702c06a51a1560134dea847080036779b8d24dcac5b7\",\"dweb:/ipfs/Qmc4GR8JwNBYkDM32nMrPCdHKabqSCiGuWZTweVQc3qTL5\"]},\"project:/contracts/VJMToken.sol\":{\"keccak256\":\"0xe2f8a326fd1fbe8e2bf0e7365ad261285fde71804fe77694ce986d47c106f061\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://f6ee599ebeff106e2eb9d3a6b0c01915cfc6f76e0916b4215e9c80c5c992e475\",\"dweb:/ipfs/QmXz1MZL3nGq7C8o1JW57rgYr6Z4iDV4Kba279dw4Smt4M\"]}},\"version\":1}",
	"bytecode": "0x60806040526007805462ff00001916620100001790556000600e55605a600f553480156200002c57600080fd5b50604051620022c5380380620022c58339810160408190526200004f9162000235565b604051806040016040528060098152602001682526aa102a37b5b2b760b91b8152506040518060400160405280600381526020016212935560ea1b81525081600390816200009e91906200030b565b506004620000ad82826200030b565b50620000ba915050601290565b620000c790600a620004ec565b620000d690620f4240620004fd565b6005819055620000e890309062000148565b600780546301000000600160b81b0319163363010000009081029190911791829055600880546001600160a01b0319166001600160a01b039485161790559004166000908152601360205260409020805460ff191660011790556200052d565b6001600160a01b038216620001a35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001b7919062000517565b90915550506001600160a01b03821660009081526020819052604081208054839290620001e690849062000517565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b505050565b6000602082840312156200024857600080fd5b81516001600160a01b03811681146200026057600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200029257607f821691505b602082108103620002b357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200023057600081815260208120601f850160051c81016020861015620002e25750805b601f850160051c820191505b818110156200030357828155600101620002ee565b505050505050565b81516001600160401b0381111562000327576200032762000267565b6200033f816200033884546200027d565b84620002b9565b602080601f8311600181146200037757600084156200035e5750858301515b600019600386901b1c1916600185901b17855562000303565b600085815260208120601f198616915b82811015620003a85788860151825594840194600190910190840162000387565b5085821015620003c75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600181815b808511156200042e578160001904821115620004125762000412620003d7565b808516156200042057918102915b93841c9390800290620003f2565b509250929050565b6000826200044757506001620004e6565b816200045657506000620004e6565b81600181146200046f57600281146200047a576200049a565b6001915050620004e6565b60ff8411156200048e576200048e620003d7565b50506001821b620004e6565b5060208310610133831016604e8410600b8410161715620004bf575081810a620004e6565b620004cb8383620003ed565b8060001904821115620004e257620004e2620003d7565b0290505b92915050565b60006200026060ff84168362000436565b8082028115828204841417620004e657620004e6620003d7565b80820180821115620004e657620004e6620003d7565b611d88806200053d6000396000f3fe6080604052600436106102515760003560e01c80636eefec1111610139578063be07d17d116100b6578063e43252d71161007a578063e43252d7146106e9578063ec71ef8914610709578063f4ab292814610729578063f4e0d9ac14610743578063f57df22e14610763578063f6d7eade1461078357600080fd5b8063be07d17d1461066c578063d1cabc351461068c578063d7bb99ba146106a1578063d83a2bf3146106a9578063dd62ed3e146106c957600080fd5b806395d89b41116100fd57806395d89b41146105ca5780639dc29fac146105df578063a457c2d7146105ff578063a9059cbb1461061f578063b70f21c71461063f57600080fd5b80636eefec111461050d57806370a082311461052d578063839254601461056357806385b1fb8e146105835780638da5cb5b146105a357600080fd5b806332cb6b0c116101d257806341cb87fc1161019657806341cb87fc146104645780634626402b1461048457806346c586c2146104a457806348c54b9d146104c457806365acacfe146104d957806368f58b03146104f857600080fd5b806332cb6b0c146103b157806339509351146103c75780633af0dbc1146103e75780633af32abf1461041457806340c10f191461044457600080fd5b806318160ddd1161021957806318160ddd146103085780631b9631fc1461031d5780631d057bd91461035557806323b872dd14610375578063313ce5671461039557600080fd5b8063023f41471461025657806306fdde031461027f578063095ea7b3146102a157806310bf6029146102d15780631690bb4e146102e8575b600080fd5b34801561026257600080fd5b5061026c60065481565b6040519081526020015b60405180910390f35b34801561028b57600080fd5b506102946107a3565b60405161027691906119da565b3480156102ad57600080fd5b506102c16102bc366004611a3d565b610835565b6040519015158152602001610276565b3480156102dd57600080fd5b506102e661084f565b005b3480156102f457600080fd5b506102e6610303366004611a69565b6108d1565b34801561031457600080fd5b5060025461026c565b34801561032957600080fd5b50600a5461033d906001600160a01b031681565b6040516001600160a01b039091168152602001610276565b34801561036157600080fd5b506102e6610370366004611a3d565b610a19565b34801561038157600080fd5b506102c1610390366004611a8d565b610a82565b3480156103a157600080fd5b5060405160128152602001610276565b3480156103bd57600080fd5b5061026c60055481565b3480156103d357600080fd5b506102c16103e2366004611a3d565b610aa6565b3480156103f357600080fd5b5061026c610402366004611a69565b60126020526000908152604090205481565b34801561042057600080fd5b506102c161042f366004611a69565b60136020526000908152604090205460ff1681565b34801561045057600080fd5b506102e661045f366004611a3d565b610ac8565b34801561047057600080fd5b506102e661047f366004611a69565b610bc6565b34801561049057600080fd5b5060085461033d906001600160a01b031681565b3480156104b057600080fd5b50600c5461033d906001600160a01b031681565b3480156104d057600080fd5b506102e6610c42565b3480156104e557600080fd5b506007546102c190610100900460ff1681565b34801561050457600080fd5b5061026c600181565b34801561051957600080fd5b50600b5461033d906001600160a01b031681565b34801561053957600080fd5b5061026c610548366004611a69565b6001600160a01b031660009081526020819052604090205490565b34801561056f57600080fd5b506102e661057e366004611a69565b610d24565b34801561058f57600080fd5b506102e661059e366004611a3d565b610da0565b3480156105af57600080fd5b5060075461033d90630100000090046001600160a01b031681565b3480156105d657600080fd5b50610294610e62565b3480156105eb57600080fd5b506102e66105fa366004611a3d565b610e71565b34801561060b57600080fd5b506102c161061a366004611a3d565b610ec1565b34801561062b57600080fd5b506102c161063a366004611a3d565b610f3c565b34801561064b57600080fd5b5061026c61065a366004611a69565b60116020526000908152604090205481565b34801561067857600080fd5b506007546102c19062010000900460ff1681565b34801561069857600080fd5b506102e6610f4a565b6102e6610fb8565b3480156106b557600080fd5b506102c16106c4366004611a8d565b6110d0565b3480156106d557600080fd5b5061026c6106e4366004611ace565b611168565b3480156106f557600080fd5b506102e6610704366004611a69565b611193565b34801561071557600080fd5b506102e6610724366004611a69565b6111e8565b34801561073557600080fd5b506007546102c19060ff1681565b34801561074f57600080fd5b506102e661075e366004611a69565b611264565b34801561076f57600080fd5b5060105461033d906001600160a01b031681565b34801561078f57600080fd5b5060095461033d906001600160a01b031681565b6060600380546107b290611b07565b80601f01602080910402602001604051908101604052809291908181526020018280546107de90611b07565b801561082b5780601f106108005761010080835404028352916020019161082b565b820191906000526020600020905b81548152906001019060200180831161080e57829003601f168201915b5050505050905090565b6000336108438185856112e0565b60019150505b92915050565b600754630100000090046001600160a01b031633146108895760405162461bcd60e51b815260040161088090611b41565b60405180910390fd5b6007805462ff0000198116620100009182900460ff16159091021790556040517fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d390600090a1565b600754630100000090046001600160a01b031633146109025760405162461bcd60e51b815260040161088090611b41565b600754610100900460ff161561092a5760405162461bcd60e51b815260040161088090611b65565b6007805461ff00191661010017905560065460009061094a906064611ba6565b9050610957308383611404565b600654604051636e553f6560e01b8152600481018390523060248201526001600160a01b03841691636e553f65916044016000604051808303818588803b1580156109a157600080fd5b505af11580156109b5573d6000803e3d6000fd5b5050505050816001600160a01b0316632770d9016040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156109f557600080fd5b505af1158015610a09573d6000803e3d6000fd5b50505050610a156115d4565b5050565b600a546001600160a01b0316331480610a3c5750600b546001600160a01b031633145b610a785760405162461bcd60e51b815260206004820152600d60248201526c4d41504c454e46545f4f4e4c5960981b6044820152606401610880565b610a158282611630565b600033610a9085828561177e565b610a9b8585856117f2565b506001949350505050565b600033610843818585610ab98383611168565b610ac39190611bbd565b6112e0565b600754630100000090046001600160a01b03163314610af95760405162461bcd60e51b815260040161088090611b41565b6001600160a01b038216610b4f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610880565b60055481610b5c60025490565b610b669190611bbd565b1115610ba75760405162461bcd60e51b815260206004820152601060248201526f41424f56455f4d41585f535550504c5960801b6044820152606401610880565b610a1582610bb76012600a611cb4565b610bc19084611ba6565b611858565b600754630100000090046001600160a01b03163314610bf75760405162461bcd60e51b815260040161088090611b41565b6009546001600160a01b031615610c205760405162461bcd60e51b815260040161088090611cc3565b600980546001600160a01b0319166001600160a01b0392909216919091179055565b60075460ff1615610c875760405162461bcd60e51b815260206004820152600f60248201526e10d3d395149050d517d4105554d151608a1b6044820152606401610880565b600754610100900460ff1615610caf5760405162461bcd60e51b815260040161088090611b65565b33600090815260116020526040902054610d005760405162461bcd60e51b81526020600482015260126024820152714e4f5f415641494c41424c455f46554e445360701b6044820152606401610880565b336000818152601160205260408120805491905590610d2190309083611404565b50565b600754630100000090046001600160a01b03163314610d555760405162461bcd60e51b815260040161088090611b41565b600a546001600160a01b031615610d7e5760405162461bcd60e51b815260040161088090611cc3565b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b600c80546001600160a01b0319166001600160a01b038416179055600d8190556000610dcc6064611937565b9050600f548111610e3157600854600c54600d54610df7926001600160a01b03908116921690611404565b604051600181527fe3bf9628d38f54d735cbc07db121eaef41935c08353bba9b8c8772d4ebba2d99906020015b60405180910390a1505050565b604051600081527fe3bf9628d38f54d735cbc07db121eaef41935c08353bba9b8c8772d4ebba2d9990602001610e24565b6060600480546107b290611b07565b600754630100000090046001600160a01b03163314610ea25760405162461bcd60e51b815260040161088090611b41565b610a1582610eb26012600a611cb4565b610ebc9084611ba6565b611630565b60003381610ecf8286611168565b905083811015610f2f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610880565b610a9b82868684036112e0565b6000336108438185856117f2565b600754630100000090046001600160a01b03163314610f7b5760405162461bcd60e51b815260040161088090611b41565b6007805460ff19811660ff909116151790556040517fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d390600090a1565b60075460ff1615610ffd5760405162461bcd60e51b815260206004820152600f60248201526e10d3d395149050d517d4105554d151608a1b6044820152606401610880565b600754610100900460ff16156110255760405162461bcd60e51b815260040161088090611b65565b6000611032346064611ba6565b33600090815260116020526040812080549293508392909190611056908490611bbd565b9091555050336000908152601260205260408120805434929061107a908490611bbd565b9250508190555034600660008282546110939190611bbd565b909155505060405181815233907f745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a9060200160405180910390a250565b6009546000906001600160a01b03163314806110f65750600a546001600160a01b031633145b8061110b5750600b546001600160a01b031633145b61114e5760405162461bcd60e51b8152602060048201526014602482015273524f555445525f4f525f4d41504c455f4f4e4c5960601b6044820152606401610880565b61115e848484610ab93330611168565b5060019392505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600754630100000090046001600160a01b031633146111c45760405162461bcd60e51b815260040161088090611b41565b6001600160a01b03166000908152601360205260409020805460ff19166001179055565b600754630100000090046001600160a01b031633146112195760405162461bcd60e51b815260040161088090611b41565b600b546001600160a01b0316156112425760405162461bcd60e51b815260040161088090611cc3565b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b600754630100000090046001600160a01b031633146112955760405162461bcd60e51b815260040161088090611b41565b6010546001600160a01b0316156112be5760405162461bcd60e51b815260040161088090611cc3565b601080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0383166113425760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610880565b6001600160a01b0382166113a35760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610880565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166114685760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610880565b6001600160a01b0382166114ca5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610880565b6001600160a01b038316600090815260208190526040902054818110156115425760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610880565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290611579908490611bbd565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516115c591815260200190565b60405180910390a35b50505050565b6115dc6119a4565b306000818152602081905260409020546008549091611604916001600160a01b031683611404565b6040517fa01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e190600090a150565b6001600160a01b0382166116905760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610880565b6001600160a01b038216600090815260208190526040902054818110156117045760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610880565b6001600160a01b0383166000908152602081905260408120838303905560028054849290611733908490611ce8565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600061178a8484611168565b905060001981146115ce57818110156117e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610880565b6115ce84848484036112e0565b60075460009062010000900460ff1615611820576064611813836001611ba6565b61181d9190611d11565b90505b600061182c8284611ce8565b9050611839858583611404565b6008546118519086906001600160a01b031684611404565b5050505050565b6001600160a01b0382166118ae5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610880565b80600260008282546118c09190611bbd565b90915550506001600160a01b038216600090815260208190526040812080548392906118ed908490611bbd565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600e80546000918261194883611d25565b9091555050600e54604080514260208201526bffffffffffffffffffffffff193360601b1691810191909152605481019190915282906074016040516020818303038152906040528051906020012060001c6108499190611d3e565b60006119b26012600a611cb4565b6119bf90620493e0611ba6565b601054909150610d219030906001600160a01b031683611404565b600060208083528351808285015260005b81811015611a07578581018301518582016040015282016119eb565b506000604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b0381168114610d2157600080fd5b60008060408385031215611a5057600080fd5b8235611a5b81611a28565b946020939093013593505050565b600060208284031215611a7b57600080fd5b8135611a8681611a28565b9392505050565b600080600060608486031215611aa257600080fd5b8335611aad81611a28565b92506020840135611abd81611a28565b929592945050506040919091013590565b60008060408385031215611ae157600080fd5b8235611aec81611a28565b91506020830135611afc81611a28565b809150509250929050565b600181811c90821680611b1b57607f821691505b602082108103611b3b57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600a90820152694f574e45525f4f4e4c5960b01b604082015260600190565b602080825260119082015270046554e44535f4d4f5645445f544f5f4c5607c1b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761084957610849611b90565b8082018082111561084957610849611b90565b600181815b80851115611c0b578160001904821115611bf157611bf1611b90565b80851615611bfe57918102915b93841c9390800290611bd5565b509250929050565b600082611c2257506001610849565b81611c2f57506000610849565b8160018114611c455760028114611c4f57611c6b565b6001915050610849565b60ff841115611c6057611c60611b90565b50506001821b610849565b5060208310610133831016604e8410600b8410161715611c8e575081810a610849565b611c988383611bd0565b8060001904821115611cac57611cac611b90565b029392505050565b6000611a8660ff841683611c13565b6020808252600b908201526a57524954455f4f4e43452160a81b604082015260600190565b8181038181111561084957610849611b90565b634e487b7160e01b600052601260045260246000fd5b600082611d2057611d20611cfb565b500490565b600060018201611d3757611d37611b90565b5060010190565b600082611d4d57611d4d611cfb565b50069056fea2646970667358221220468dbe6ce4a05bb671d5dc744a74a78c6fbdf8b7e9f6177972cd1e4b3d95a98064736f6c63430008110033",
	"deployedBytecode": "0x6080604052600436106102515760003560e01c80636eefec1111610139578063be07d17d116100b6578063e43252d71161007a578063e43252d7146106e9578063ec71ef8914610709578063f4ab292814610729578063f4e0d9ac14610743578063f57df22e14610763578063f6d7eade1461078357600080fd5b8063be07d17d1461066c578063d1cabc351461068c578063d7bb99ba146106a1578063d83a2bf3146106a9578063dd62ed3e146106c957600080fd5b806395d89b41116100fd57806395d89b41146105ca5780639dc29fac146105df578063a457c2d7146105ff578063a9059cbb1461061f578063b70f21c71461063f57600080fd5b80636eefec111461050d57806370a082311461052d578063839254601461056357806385b1fb8e146105835780638da5cb5b146105a357600080fd5b806332cb6b0c116101d257806341cb87fc1161019657806341cb87fc146104645780634626402b1461048457806346c586c2146104a457806348c54b9d146104c457806365acacfe146104d957806368f58b03146104f857600080fd5b806332cb6b0c146103b157806339509351146103c75780633af0dbc1146103e75780633af32abf1461041457806340c10f191461044457600080fd5b806318160ddd1161021957806318160ddd146103085780631b9631fc1461031d5780631d057bd91461035557806323b872dd14610375578063313ce5671461039557600080fd5b8063023f41471461025657806306fdde031461027f578063095ea7b3146102a157806310bf6029146102d15780631690bb4e146102e8575b600080fd5b34801561026257600080fd5b5061026c60065481565b6040519081526020015b60405180910390f35b34801561028b57600080fd5b506102946107a3565b60405161027691906119da565b3480156102ad57600080fd5b506102c16102bc366004611a3d565b610835565b6040519015158152602001610276565b3480156102dd57600080fd5b506102e661084f565b005b3480156102f457600080fd5b506102e6610303366004611a69565b6108d1565b34801561031457600080fd5b5060025461026c565b34801561032957600080fd5b50600a5461033d906001600160a01b031681565b6040516001600160a01b039091168152602001610276565b34801561036157600080fd5b506102e6610370366004611a3d565b610a19565b34801561038157600080fd5b506102c1610390366004611a8d565b610a82565b3480156103a157600080fd5b5060405160128152602001610276565b3480156103bd57600080fd5b5061026c60055481565b3480156103d357600080fd5b506102c16103e2366004611a3d565b610aa6565b3480156103f357600080fd5b5061026c610402366004611a69565b60126020526000908152604090205481565b34801561042057600080fd5b506102c161042f366004611a69565b60136020526000908152604090205460ff1681565b34801561045057600080fd5b506102e661045f366004611a3d565b610ac8565b34801561047057600080fd5b506102e661047f366004611a69565b610bc6565b34801561049057600080fd5b5060085461033d906001600160a01b031681565b3480156104b057600080fd5b50600c5461033d906001600160a01b031681565b3480156104d057600080fd5b506102e6610c42565b3480156104e557600080fd5b506007546102c190610100900460ff1681565b34801561050457600080fd5b5061026c600181565b34801561051957600080fd5b50600b5461033d906001600160a01b031681565b34801561053957600080fd5b5061026c610548366004611a69565b6001600160a01b031660009081526020819052604090205490565b34801561056f57600080fd5b506102e661057e366004611a69565b610d24565b34801561058f57600080fd5b506102e661059e366004611a3d565b610da0565b3480156105af57600080fd5b5060075461033d90630100000090046001600160a01b031681565b3480156105d657600080fd5b50610294610e62565b3480156105eb57600080fd5b506102e66105fa366004611a3d565b610e71565b34801561060b57600080fd5b506102c161061a366004611a3d565b610ec1565b34801561062b57600080fd5b506102c161063a366004611a3d565b610f3c565b34801561064b57600080fd5b5061026c61065a366004611a69565b60116020526000908152604090205481565b34801561067857600080fd5b506007546102c19062010000900460ff1681565b34801561069857600080fd5b506102e6610f4a565b6102e6610fb8565b3480156106b557600080fd5b506102c16106c4366004611a8d565b6110d0565b3480156106d557600080fd5b5061026c6106e4366004611ace565b611168565b3480156106f557600080fd5b506102e6610704366004611a69565b611193565b34801561071557600080fd5b506102e6610724366004611a69565b6111e8565b34801561073557600080fd5b506007546102c19060ff1681565b34801561074f57600080fd5b506102e661075e366004611a69565b611264565b34801561076f57600080fd5b5060105461033d906001600160a01b031681565b34801561078f57600080fd5b5060095461033d906001600160a01b031681565b6060600380546107b290611b07565b80601f01602080910402602001604051908101604052809291908181526020018280546107de90611b07565b801561082b5780601f106108005761010080835404028352916020019161082b565b820191906000526020600020905b81548152906001019060200180831161080e57829003601f168201915b5050505050905090565b6000336108438185856112e0565b60019150505b92915050565b600754630100000090046001600160a01b031633146108895760405162461bcd60e51b815260040161088090611b41565b60405180910390fd5b6007805462ff0000198116620100009182900460ff16159091021790556040517fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d390600090a1565b600754630100000090046001600160a01b031633146109025760405162461bcd60e51b815260040161088090611b41565b600754610100900460ff161561092a5760405162461bcd60e51b815260040161088090611b65565b6007805461ff00191661010017905560065460009061094a906064611ba6565b9050610957308383611404565b600654604051636e553f6560e01b8152600481018390523060248201526001600160a01b03841691636e553f65916044016000604051808303818588803b1580156109a157600080fd5b505af11580156109b5573d6000803e3d6000fd5b5050505050816001600160a01b0316632770d9016040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156109f557600080fd5b505af1158015610a09573d6000803e3d6000fd5b50505050610a156115d4565b5050565b600a546001600160a01b0316331480610a3c5750600b546001600160a01b031633145b610a785760405162461bcd60e51b815260206004820152600d60248201526c4d41504c454e46545f4f4e4c5960981b6044820152606401610880565b610a158282611630565b600033610a9085828561177e565b610a9b8585856117f2565b506001949350505050565b600033610843818585610ab98383611168565b610ac39190611bbd565b6112e0565b600754630100000090046001600160a01b03163314610af95760405162461bcd60e51b815260040161088090611b41565b6001600160a01b038216610b4f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610880565b60055481610b5c60025490565b610b669190611bbd565b1115610ba75760405162461bcd60e51b815260206004820152601060248201526f41424f56455f4d41585f535550504c5960801b6044820152606401610880565b610a1582610bb76012600a611cb4565b610bc19084611ba6565b611858565b600754630100000090046001600160a01b03163314610bf75760405162461bcd60e51b815260040161088090611b41565b6009546001600160a01b031615610c205760405162461bcd60e51b815260040161088090611cc3565b600980546001600160a01b0319166001600160a01b0392909216919091179055565b60075460ff1615610c875760405162461bcd60e51b815260206004820152600f60248201526e10d3d395149050d517d4105554d151608a1b6044820152606401610880565b600754610100900460ff1615610caf5760405162461bcd60e51b815260040161088090611b65565b33600090815260116020526040902054610d005760405162461bcd60e51b81526020600482015260126024820152714e4f5f415641494c41424c455f46554e445360701b6044820152606401610880565b336000818152601160205260408120805491905590610d2190309083611404565b50565b600754630100000090046001600160a01b03163314610d555760405162461bcd60e51b815260040161088090611b41565b600a546001600160a01b031615610d7e5760405162461bcd60e51b815260040161088090611cc3565b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b600c80546001600160a01b0319166001600160a01b038416179055600d8190556000610dcc6064611937565b9050600f548111610e3157600854600c54600d54610df7926001600160a01b03908116921690611404565b604051600181527fe3bf9628d38f54d735cbc07db121eaef41935c08353bba9b8c8772d4ebba2d99906020015b60405180910390a1505050565b604051600081527fe3bf9628d38f54d735cbc07db121eaef41935c08353bba9b8c8772d4ebba2d9990602001610e24565b6060600480546107b290611b07565b600754630100000090046001600160a01b03163314610ea25760405162461bcd60e51b815260040161088090611b41565b610a1582610eb26012600a611cb4565b610ebc9084611ba6565b611630565b60003381610ecf8286611168565b905083811015610f2f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610880565b610a9b82868684036112e0565b6000336108438185856117f2565b600754630100000090046001600160a01b03163314610f7b5760405162461bcd60e51b815260040161088090611b41565b6007805460ff19811660ff909116151790556040517fe454716ccd4789e6869664dc631a651dcb83a4552bfdf7afda42167120c356d390600090a1565b60075460ff1615610ffd5760405162461bcd60e51b815260206004820152600f60248201526e10d3d395149050d517d4105554d151608a1b6044820152606401610880565b600754610100900460ff16156110255760405162461bcd60e51b815260040161088090611b65565b6000611032346064611ba6565b33600090815260116020526040812080549293508392909190611056908490611bbd565b9091555050336000908152601260205260408120805434929061107a908490611bbd565b9250508190555034600660008282546110939190611bbd565b909155505060405181815233907f745f661b8143944fb883f50694ebed3a871e43c451d9d4bf4648a9d551d7e47a9060200160405180910390a250565b6009546000906001600160a01b03163314806110f65750600a546001600160a01b031633145b8061110b5750600b546001600160a01b031633145b61114e5760405162461bcd60e51b8152602060048201526014602482015273524f555445525f4f525f4d41504c455f4f4e4c5960601b6044820152606401610880565b61115e848484610ab93330611168565b5060019392505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600754630100000090046001600160a01b031633146111c45760405162461bcd60e51b815260040161088090611b41565b6001600160a01b03166000908152601360205260409020805460ff19166001179055565b600754630100000090046001600160a01b031633146112195760405162461bcd60e51b815260040161088090611b41565b600b546001600160a01b0316156112425760405162461bcd60e51b815260040161088090611cc3565b600b80546001600160a01b0319166001600160a01b0392909216919091179055565b600754630100000090046001600160a01b031633146112955760405162461bcd60e51b815260040161088090611b41565b6010546001600160a01b0316156112be5760405162461bcd60e51b815260040161088090611cc3565b601080546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0383166113425760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610880565b6001600160a01b0382166113a35760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610880565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166114685760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610880565b6001600160a01b0382166114ca5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610880565b6001600160a01b038316600090815260208190526040902054818110156115425760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610880565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290611579908490611bbd565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516115c591815260200190565b60405180910390a35b50505050565b6115dc6119a4565b306000818152602081905260409020546008549091611604916001600160a01b031683611404565b6040517fa01103220c31ee0c47e79a81104a3e82740390c1d918ad5638190cc185bd92e190600090a150565b6001600160a01b0382166116905760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610880565b6001600160a01b038216600090815260208190526040902054818110156117045760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610880565b6001600160a01b0383166000908152602081905260408120838303905560028054849290611733908490611ce8565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050565b600061178a8484611168565b905060001981146115ce57818110156117e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610880565b6115ce84848484036112e0565b60075460009062010000900460ff1615611820576064611813836001611ba6565b61181d9190611d11565b90505b600061182c8284611ce8565b9050611839858583611404565b6008546118519086906001600160a01b031684611404565b5050505050565b6001600160a01b0382166118ae5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610880565b80600260008282546118c09190611bbd565b90915550506001600160a01b038216600090815260208190526040812080548392906118ed908490611bbd565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600e80546000918261194883611d25565b9091555050600e54604080514260208201526bffffffffffffffffffffffff193360601b1691810191909152605481019190915282906074016040516020818303038152906040528051906020012060001c6108499190611d3e565b60006119b26012600a611cb4565b6119bf90620493e0611ba6565b601054909150610d219030906001600160a01b031683611404565b600060208083528351808285015260005b81811015611a07578581018301518582016040015282016119eb565b506000604082860101526040601f19601f8301168501019250505092915050565b6001600160a01b0381168114610d2157600080fd5b60008060408385031215611a5057600080fd5b8235611a5b81611a28565b946020939093013593505050565b600060208284031215611a7b57600080fd5b8135611a8681611a28565b9392505050565b600080600060608486031215611aa257600080fd5b8335611aad81611a28565b92506020840135611abd81611a28565b929592945050506040919091013590565b60008060408385031215611ae157600080fd5b8235611aec81611a28565b91506020830135611afc81611a28565b809150509250929050565b600181811c90821680611b1b57607f821691505b602082108103611b3b57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600a90820152694f574e45525f4f4e4c5960b01b604082015260600190565b602080825260119082015270046554e44535f4d4f5645445f544f5f4c5607c1b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761084957610849611b90565b8082018082111561084957610849611b90565b600181815b80851115611c0b578160001904821115611bf157611bf1611b90565b80851615611bfe57918102915b93841c9390800290611bd5565b509250929050565b600082611c2257506001610849565b81611c2f57506000610849565b8160018114611c455760028114611c4f57611c6b565b6001915050610849565b60ff841115611c6057611c60611b90565b50506001821b610849565b5060208310610133831016604e8410600b8410161715611c8e575081810a610849565b611c988383611bd0565b8060001904821115611cac57611cac611b90565b029392505050565b6000611a8660ff841683611c13565b6020808252600b908201526a57524954455f4f4e43452160a81b604082015260600190565b8181038181111561084957610849611b90565b634e487b7160e01b600052601260045260246000fd5b600082611d2057611d20611cfb565b500490565b600060018201611d3757611d37611b90565b5060010190565b600082611d4d57611d4d611cfb565b50069056fea2646970667358221220468dbe6ce4a05bb671d5dc744a74a78c6fbdf8b7e9f6177972cd1e4b3d95a98064736f6c63430008110033",
	"immutableReferences": {},
	"generatedSources": [
	  {
		"ast": {
		  "nodeType": "YulBlock",
		  "src": "0:5395:36",
		  "statements": [
			{
			  "nodeType": "YulBlock",
			  "src": "6:3:36",
			  "statements": []
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "103:209:36",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "149:16:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "158:1:36",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "161:1:36",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "151:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "151:12:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "151:12:36"
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
							  "src": "124:7:36"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "133:9:36"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "120:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "120:23:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "145:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "116:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "116:32:36"
					},
					"nodeType": "YulIf",
					"src": "113:52:36"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "174:29:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "193:9:36"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "187:5:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "187:16:36"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "178:5:36",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "266:16:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "275:1:36",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "278:1:36",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "268:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "268:12:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "268:12:36"
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
							  "src": "225:5:36"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "236:5:36"
								},
								{
								  "arguments": [
									{
									  "arguments": [
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "251:3:36",
										  "type": "",
										  "value": "160"
										},
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "256:1:36",
										  "type": "",
										  "value": "1"
										}
									  ],
									  "functionName": {
										"name": "shl",
										"nodeType": "YulIdentifier",
										"src": "247:3:36"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "247:11:36"
									},
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "260:1:36",
									  "type": "",
									  "value": "1"
									}
								  ],
								  "functionName": {
									"name": "sub",
									"nodeType": "YulIdentifier",
									"src": "243:3:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "243:19:36"
								}
							  ],
							  "functionName": {
								"name": "and",
								"nodeType": "YulIdentifier",
								"src": "232:3:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "232:31:36"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "222:2:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "222:42:36"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "215:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "215:50:36"
					},
					"nodeType": "YulIf",
					"src": "212:70:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "291:15:36",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "301:5:36"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "291:6:36"
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
				  "src": "69:9:36",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "80:7:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "92:6:36",
				  "type": ""
				}
			  ],
			  "src": "14:298:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "349:95:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "366:1:36",
						  "type": "",
						  "value": "0"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "373:3:36",
							  "type": "",
							  "value": "224"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "378:10:36",
							  "type": "",
							  "value": "0x4e487b71"
							}
						  ],
						  "functionName": {
							"name": "shl",
							"nodeType": "YulIdentifier",
							"src": "369:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "369:20:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "359:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "359:31:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "359:31:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "406:1:36",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "409:4:36",
						  "type": "",
						  "value": "0x41"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "399:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "399:15:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "399:15:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "430:1:36",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "433:4:36",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "423:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "423:15:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "423:15:36"
				  }
				]
			  },
			  "name": "panic_error_0x41",
			  "nodeType": "YulFunctionDefinition",
			  "src": "317:127:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "504:325:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "514:22:36",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "528:1:36",
						  "type": "",
						  "value": "1"
						},
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "531:4:36"
						}
					  ],
					  "functionName": {
						"name": "shr",
						"nodeType": "YulIdentifier",
						"src": "524:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "524:12:36"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "514:6:36"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "545:38:36",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "575:4:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "581:1:36",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "571:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "571:12:36"
					},
					"variables": [
					  {
						"name": "outOfPlaceEncoding",
						"nodeType": "YulTypedName",
						"src": "549:18:36",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "622:31:36",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "624:27:36",
						  "value": {
							"arguments": [
							  {
								"name": "length",
								"nodeType": "YulIdentifier",
								"src": "638:6:36"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "646:4:36",
								"type": "",
								"value": "0x7f"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "634:3:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "634:17:36"
						  },
						  "variableNames": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "624:6:36"
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
						  "src": "602:18:36"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "595:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "595:26:36"
					},
					"nodeType": "YulIf",
					"src": "592:61:36"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "712:111:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "733:1:36",
								"type": "",
								"value": "0"
							  },
							  {
								"arguments": [
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "740:3:36",
									"type": "",
									"value": "224"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "745:10:36",
									"type": "",
									"value": "0x4e487b71"
								  }
								],
								"functionName": {
								  "name": "shl",
								  "nodeType": "YulIdentifier",
								  "src": "736:3:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "736:20:36"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "726:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "726:31:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "726:31:36"
						},
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "777:1:36",
								"type": "",
								"value": "4"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "780:4:36",
								"type": "",
								"value": "0x22"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "770:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "770:15:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "770:15:36"
						},
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "805:1:36",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "808:4:36",
								"type": "",
								"value": "0x24"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "798:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "798:15:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "798:15:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "668:18:36"
						},
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "691:6:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "699:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "lt",
							"nodeType": "YulIdentifier",
							"src": "688:2:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "688:14:36"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "665:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "665:38:36"
					},
					"nodeType": "YulIf",
					"src": "662:161:36"
				  }
				]
			  },
			  "name": "extract_byte_array_length",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "484:4:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "493:6:36",
				  "type": ""
				}
			  ],
			  "src": "449:380:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "890:65:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "907:1:36",
						  "type": "",
						  "value": "0"
						},
						{
						  "name": "ptr",
						  "nodeType": "YulIdentifier",
						  "src": "910:3:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "900:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "900:14:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "900:14:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "923:26:36",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "941:1:36",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "944:4:36",
						  "type": "",
						  "value": "0x20"
						}
					  ],
					  "functionName": {
						"name": "keccak256",
						"nodeType": "YulIdentifier",
						"src": "931:9:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "931:18:36"
					},
					"variableNames": [
					  {
						"name": "data",
						"nodeType": "YulIdentifier",
						"src": "923:4:36"
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
				  "src": "873:3:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "881:4:36",
				  "type": ""
				}
			  ],
			  "src": "834:121:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1041:464:36",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1074:425:36",
					  "statements": [
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "1088:11:36",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "1098:1:36",
							"type": "",
							"value": "0"
						  },
						  "variables": [
							{
							  "name": "_1",
							  "nodeType": "YulTypedName",
							  "src": "1092:2:36",
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
								"src": "1119:2:36"
							  },
							  {
								"name": "array",
								"nodeType": "YulIdentifier",
								"src": "1123:5:36"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "1112:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "1112:17:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1112:17:36"
						},
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "1142:31:36",
						  "value": {
							"arguments": [
							  {
								"name": "_1",
								"nodeType": "YulIdentifier",
								"src": "1164:2:36"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1168:4:36",
								"type": "",
								"value": "0x20"
							  }
							],
							"functionName": {
							  "name": "keccak256",
							  "nodeType": "YulIdentifier",
							  "src": "1154:9:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "1154:19:36"
						  },
						  "variables": [
							{
							  "name": "data",
							  "nodeType": "YulTypedName",
							  "src": "1146:4:36",
							  "type": ""
							}
						  ]
						},
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "1186:57:36",
						  "value": {
							"arguments": [
							  {
								"name": "data",
								"nodeType": "YulIdentifier",
								"src": "1209:4:36"
							  },
							  {
								"arguments": [
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "1219:1:36",
									"type": "",
									"value": "5"
								  },
								  {
									"arguments": [
									  {
										"name": "startIndex",
										"nodeType": "YulIdentifier",
										"src": "1226:10:36"
									  },
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "1238:2:36",
										"type": "",
										"value": "31"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "1222:3:36"
									},
									"nodeType": "YulFunctionCall",
									"src": "1222:19:36"
								  }
								],
								"functionName": {
								  "name": "shr",
								  "nodeType": "YulIdentifier",
								  "src": "1215:3:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "1215:27:36"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "1205:3:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "1205:38:36"
						  },
						  "variables": [
							{
							  "name": "deleteStart",
							  "nodeType": "YulTypedName",
							  "src": "1190:11:36",
							  "type": ""
							}
						  ]
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "1280:23:36",
							"statements": [
							  {
								"nodeType": "YulAssignment",
								"src": "1282:19:36",
								"value": {
								  "name": "data",
								  "nodeType": "YulIdentifier",
								  "src": "1297:4:36"
								},
								"variableNames": [
								  {
									"name": "deleteStart",
									"nodeType": "YulIdentifier",
									"src": "1282:11:36"
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
								"src": "1262:10:36"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1274:4:36",
								"type": "",
								"value": "0x20"
							  }
							],
							"functionName": {
							  "name": "lt",
							  "nodeType": "YulIdentifier",
							  "src": "1259:2:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "1259:20:36"
						  },
						  "nodeType": "YulIf",
						  "src": "1256:47:36"
						},
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "1316:41:36",
						  "value": {
							"arguments": [
							  {
								"name": "data",
								"nodeType": "YulIdentifier",
								"src": "1330:4:36"
							  },
							  {
								"arguments": [
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "1340:1:36",
									"type": "",
									"value": "5"
								  },
								  {
									"arguments": [
									  {
										"name": "len",
										"nodeType": "YulIdentifier",
										"src": "1347:3:36"
									  },
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "1352:2:36",
										"type": "",
										"value": "31"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "1343:3:36"
									},
									"nodeType": "YulFunctionCall",
									"src": "1343:12:36"
								  }
								],
								"functionName": {
								  "name": "shr",
								  "nodeType": "YulIdentifier",
								  "src": "1336:3:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "1336:20:36"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "1326:3:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "1326:31:36"
						  },
						  "variables": [
							{
							  "name": "_2",
							  "nodeType": "YulTypedName",
							  "src": "1320:2:36",
							  "type": ""
							}
						  ]
						},
						{
						  "nodeType": "YulVariableDeclaration",
						  "src": "1370:24:36",
						  "value": {
							"name": "deleteStart",
							"nodeType": "YulIdentifier",
							"src": "1383:11:36"
						  },
						  "variables": [
							{
							  "name": "start",
							  "nodeType": "YulTypedName",
							  "src": "1374:5:36",
							  "type": ""
							}
						  ]
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "1468:21:36",
							"statements": [
							  {
								"expression": {
								  "arguments": [
									{
									  "name": "start",
									  "nodeType": "YulIdentifier",
									  "src": "1477:5:36"
									},
									{
									  "name": "_1",
									  "nodeType": "YulIdentifier",
									  "src": "1484:2:36"
									}
								  ],
								  "functionName": {
									"name": "sstore",
									"nodeType": "YulIdentifier",
									"src": "1470:6:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "1470:17:36"
								},
								"nodeType": "YulExpressionStatement",
								"src": "1470:17:36"
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "start",
								"nodeType": "YulIdentifier",
								"src": "1418:5:36"
							  },
							  {
								"name": "_2",
								"nodeType": "YulIdentifier",
								"src": "1425:2:36"
							  }
							],
							"functionName": {
							  "name": "lt",
							  "nodeType": "YulIdentifier",
							  "src": "1415:2:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "1415:13:36"
						  },
						  "nodeType": "YulForLoop",
						  "post": {
							"nodeType": "YulBlock",
							"src": "1429:26:36",
							"statements": [
							  {
								"nodeType": "YulAssignment",
								"src": "1431:22:36",
								"value": {
								  "arguments": [
									{
									  "name": "start",
									  "nodeType": "YulIdentifier",
									  "src": "1444:5:36"
									},
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "1451:1:36",
									  "type": "",
									  "value": "1"
									}
								  ],
								  "functionName": {
									"name": "add",
									"nodeType": "YulIdentifier",
									"src": "1440:3:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "1440:13:36"
								},
								"variableNames": [
								  {
									"name": "start",
									"nodeType": "YulIdentifier",
									"src": "1431:5:36"
								  }
								]
							  }
							]
						  },
						  "pre": {
							"nodeType": "YulBlock",
							"src": "1411:3:36",
							"statements": []
						  },
						  "src": "1407:82:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "len",
						  "nodeType": "YulIdentifier",
						  "src": "1057:3:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1062:2:36",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "1054:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1054:11:36"
					},
					"nodeType": "YulIf",
					"src": "1051:448:36"
				  }
				]
			  },
			  "name": "clean_up_bytearray_end_slots_string_storage",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "array",
				  "nodeType": "YulTypedName",
				  "src": "1013:5:36",
				  "type": ""
				},
				{
				  "name": "len",
				  "nodeType": "YulTypedName",
				  "src": "1020:3:36",
				  "type": ""
				},
				{
				  "name": "startIndex",
				  "nodeType": "YulTypedName",
				  "src": "1025:10:36",
				  "type": ""
				}
			  ],
			  "src": "960:545:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1595:81:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1605:65:36",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "data",
							  "nodeType": "YulIdentifier",
							  "src": "1620:4:36"
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
										  "src": "1638:1:36",
										  "type": "",
										  "value": "3"
										},
										{
										  "name": "len",
										  "nodeType": "YulIdentifier",
										  "src": "1641:3:36"
										}
									  ],
									  "functionName": {
										"name": "shl",
										"nodeType": "YulIdentifier",
										"src": "1634:3:36"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "1634:11:36"
									},
									{
									  "arguments": [
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "1651:1:36",
										  "type": "",
										  "value": "0"
										}
									  ],
									  "functionName": {
										"name": "not",
										"nodeType": "YulIdentifier",
										"src": "1647:3:36"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "1647:6:36"
									}
								  ],
								  "functionName": {
									"name": "shr",
									"nodeType": "YulIdentifier",
									"src": "1630:3:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "1630:24:36"
								}
							  ],
							  "functionName": {
								"name": "not",
								"nodeType": "YulIdentifier",
								"src": "1626:3:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1626:29:36"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "1616:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1616:40:36"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1662:1:36",
							  "type": "",
							  "value": "1"
							},
							{
							  "name": "len",
							  "nodeType": "YulIdentifier",
							  "src": "1665:3:36"
							}
						  ],
						  "functionName": {
							"name": "shl",
							"nodeType": "YulIdentifier",
							"src": "1658:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1658:11:36"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "1613:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1613:57:36"
					},
					"variableNames": [
					  {
						"name": "used",
						"nodeType": "YulIdentifier",
						"src": "1605:4:36"
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
				  "src": "1572:4:36",
				  "type": ""
				},
				{
				  "name": "len",
				  "nodeType": "YulTypedName",
				  "src": "1578:3:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "used",
				  "nodeType": "YulTypedName",
				  "src": "1586:4:36",
				  "type": ""
				}
			  ],
			  "src": "1510:166:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1777:1256:36",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1787:24:36",
					"value": {
					  "arguments": [
						{
						  "name": "src",
						  "nodeType": "YulIdentifier",
						  "src": "1807:3:36"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "1801:5:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1801:10:36"
					},
					"variables": [
					  {
						"name": "newLen",
						"nodeType": "YulTypedName",
						"src": "1791:6:36",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1854:22:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x41",
							  "nodeType": "YulIdentifier",
							  "src": "1856:16:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "1856:18:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1856:18:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "newLen",
						  "nodeType": "YulIdentifier",
						  "src": "1826:6:36"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "1842:2:36",
								  "type": "",
								  "value": "64"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "1846:1:36",
								  "type": "",
								  "value": "1"
								}
							  ],
							  "functionName": {
								"name": "shl",
								"nodeType": "YulIdentifier",
								"src": "1838:3:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1838:10:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1850:1:36",
							  "type": "",
							  "value": "1"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "1834:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1834:18:36"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "1823:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1823:30:36"
					},
					"nodeType": "YulIf",
					"src": "1820:56:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "slot",
						  "nodeType": "YulIdentifier",
						  "src": "1929:4:36"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "slot",
								  "nodeType": "YulIdentifier",
								  "src": "1967:4:36"
								}
							  ],
							  "functionName": {
								"name": "sload",
								"nodeType": "YulIdentifier",
								"src": "1961:5:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1961:11:36"
							}
						  ],
						  "functionName": {
							"name": "extract_byte_array_length",
							"nodeType": "YulIdentifier",
							"src": "1935:25:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1935:38:36"
						},
						{
						  "name": "newLen",
						  "nodeType": "YulIdentifier",
						  "src": "1975:6:36"
						}
					  ],
					  "functionName": {
						"name": "clean_up_bytearray_end_slots_string_storage",
						"nodeType": "YulIdentifier",
						"src": "1885:43:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1885:97:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1885:97:36"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1991:18:36",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "2008:1:36",
					  "type": "",
					  "value": "0"
					},
					"variables": [
					  {
						"name": "srcOffset",
						"nodeType": "YulTypedName",
						"src": "1995:9:36",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2018:23:36",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "2037:4:36",
					  "type": "",
					  "value": "0x20"
					},
					"variables": [
					  {
						"name": "srcOffset_1",
						"nodeType": "YulTypedName",
						"src": "2022:11:36",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2050:24:36",
					"value": {
					  "name": "srcOffset_1",
					  "nodeType": "YulIdentifier",
					  "src": "2063:11:36"
					},
					"variableNames": [
					  {
						"name": "srcOffset",
						"nodeType": "YulIdentifier",
						"src": "2050:9:36"
					  }
					]
				  },
				  {
					"cases": [
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "2120:656:36",
						  "statements": [
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "2134:35:36",
							  "value": {
								"arguments": [
								  {
									"name": "newLen",
									"nodeType": "YulIdentifier",
									"src": "2153:6:36"
								  },
								  {
									"arguments": [
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "2165:2:36",
										"type": "",
										"value": "31"
									  }
									],
									"functionName": {
									  "name": "not",
									  "nodeType": "YulIdentifier",
									  "src": "2161:3:36"
									},
									"nodeType": "YulFunctionCall",
									"src": "2161:7:36"
								  }
								],
								"functionName": {
								  "name": "and",
								  "nodeType": "YulIdentifier",
								  "src": "2149:3:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "2149:20:36"
							  },
							  "variables": [
								{
								  "name": "loopEnd",
								  "nodeType": "YulTypedName",
								  "src": "2138:7:36",
								  "type": ""
								}
							  ]
							},
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "2182:49:36",
							  "value": {
								"arguments": [
								  {
									"name": "slot",
									"nodeType": "YulIdentifier",
									"src": "2226:4:36"
								  }
								],
								"functionName": {
								  "name": "array_dataslot_string_storage",
								  "nodeType": "YulIdentifier",
								  "src": "2196:29:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "2196:35:36"
							  },
							  "variables": [
								{
								  "name": "dstPtr",
								  "nodeType": "YulTypedName",
								  "src": "2186:6:36",
								  "type": ""
								}
							  ]
							},
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "2244:10:36",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2253:1:36",
								"type": "",
								"value": "0"
							  },
							  "variables": [
								{
								  "name": "i",
								  "nodeType": "YulTypedName",
								  "src": "2248:1:36",
								  "type": ""
								}
							  ]
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "2331:172:36",
								"statements": [
								  {
									"expression": {
									  "arguments": [
										{
										  "name": "dstPtr",
										  "nodeType": "YulIdentifier",
										  "src": "2356:6:36"
										},
										{
										  "arguments": [
											{
											  "arguments": [
												{
												  "name": "src",
												  "nodeType": "YulIdentifier",
												  "src": "2374:3:36"
												},
												{
												  "name": "srcOffset",
												  "nodeType": "YulIdentifier",
												  "src": "2379:9:36"
												}
											  ],
											  "functionName": {
												"name": "add",
												"nodeType": "YulIdentifier",
												"src": "2370:3:36"
											  },
											  "nodeType": "YulFunctionCall",
											  "src": "2370:19:36"
											}
										  ],
										  "functionName": {
											"name": "mload",
											"nodeType": "YulIdentifier",
											"src": "2364:5:36"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "2364:26:36"
										}
									  ],
									  "functionName": {
										"name": "sstore",
										"nodeType": "YulIdentifier",
										"src": "2349:6:36"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "2349:42:36"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2349:42:36"
								  },
								  {
									"nodeType": "YulAssignment",
									"src": "2408:24:36",
									"value": {
									  "arguments": [
										{
										  "name": "dstPtr",
										  "nodeType": "YulIdentifier",
										  "src": "2422:6:36"
										},
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "2430:1:36",
										  "type": "",
										  "value": "1"
										}
									  ],
									  "functionName": {
										"name": "add",
										"nodeType": "YulIdentifier",
										"src": "2418:3:36"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "2418:14:36"
									},
									"variableNames": [
									  {
										"name": "dstPtr",
										"nodeType": "YulIdentifier",
										"src": "2408:6:36"
									  }
									]
								  },
								  {
									"nodeType": "YulAssignment",
									"src": "2449:40:36",
									"value": {
									  "arguments": [
										{
										  "name": "srcOffset",
										  "nodeType": "YulIdentifier",
										  "src": "2466:9:36"
										},
										{
										  "name": "srcOffset_1",
										  "nodeType": "YulIdentifier",
										  "src": "2477:11:36"
										}
									  ],
									  "functionName": {
										"name": "add",
										"nodeType": "YulIdentifier",
										"src": "2462:3:36"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "2462:27:36"
									},
									"variableNames": [
									  {
										"name": "srcOffset",
										"nodeType": "YulIdentifier",
										"src": "2449:9:36"
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
									"src": "2278:1:36"
								  },
								  {
									"name": "loopEnd",
									"nodeType": "YulIdentifier",
									"src": "2281:7:36"
								  }
								],
								"functionName": {
								  "name": "lt",
								  "nodeType": "YulIdentifier",
								  "src": "2275:2:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "2275:14:36"
							  },
							  "nodeType": "YulForLoop",
							  "post": {
								"nodeType": "YulBlock",
								"src": "2290:28:36",
								"statements": [
								  {
									"nodeType": "YulAssignment",
									"src": "2292:24:36",
									"value": {
									  "arguments": [
										{
										  "name": "i",
										  "nodeType": "YulIdentifier",
										  "src": "2301:1:36"
										},
										{
										  "name": "srcOffset_1",
										  "nodeType": "YulIdentifier",
										  "src": "2304:11:36"
										}
									  ],
									  "functionName": {
										"name": "add",
										"nodeType": "YulIdentifier",
										"src": "2297:3:36"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "2297:19:36"
									},
									"variableNames": [
									  {
										"name": "i",
										"nodeType": "YulIdentifier",
										"src": "2292:1:36"
									  }
									]
								  }
								]
							  },
							  "pre": {
								"nodeType": "YulBlock",
								"src": "2271:3:36",
								"statements": []
							  },
							  "src": "2267:236:36"
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "2551:166:36",
								"statements": [
								  {
									"nodeType": "YulVariableDeclaration",
									"src": "2569:43:36",
									"value": {
									  "arguments": [
										{
										  "arguments": [
											{
											  "name": "src",
											  "nodeType": "YulIdentifier",
											  "src": "2596:3:36"
											},
											{
											  "name": "srcOffset",
											  "nodeType": "YulIdentifier",
											  "src": "2601:9:36"
											}
										  ],
										  "functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "2592:3:36"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "2592:19:36"
										}
									  ],
									  "functionName": {
										"name": "mload",
										"nodeType": "YulIdentifier",
										"src": "2586:5:36"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "2586:26:36"
									},
									"variables": [
									  {
										"name": "lastValue",
										"nodeType": "YulTypedName",
										"src": "2573:9:36",
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
										  "src": "2636:6:36"
										},
										{
										  "arguments": [
											{
											  "name": "lastValue",
											  "nodeType": "YulIdentifier",
											  "src": "2648:9:36"
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
															  "src": "2675:1:36",
															  "type": "",
															  "value": "3"
															},
															{
															  "name": "newLen",
															  "nodeType": "YulIdentifier",
															  "src": "2678:6:36"
															}
														  ],
														  "functionName": {
															"name": "shl",
															"nodeType": "YulIdentifier",
															"src": "2671:3:36"
														  },
														  "nodeType": "YulFunctionCall",
														  "src": "2671:14:36"
														},
														{
														  "kind": "number",
														  "nodeType": "YulLiteral",
														  "src": "2687:3:36",
														  "type": "",
														  "value": "248"
														}
													  ],
													  "functionName": {
														"name": "and",
														"nodeType": "YulIdentifier",
														"src": "2667:3:36"
													  },
													  "nodeType": "YulFunctionCall",
													  "src": "2667:24:36"
													},
													{
													  "arguments": [
														{
														  "kind": "number",
														  "nodeType": "YulLiteral",
														  "src": "2697:1:36",
														  "type": "",
														  "value": "0"
														}
													  ],
													  "functionName": {
														"name": "not",
														"nodeType": "YulIdentifier",
														"src": "2693:3:36"
													  },
													  "nodeType": "YulFunctionCall",
													  "src": "2693:6:36"
													}
												  ],
												  "functionName": {
													"name": "shr",
													"nodeType": "YulIdentifier",
													"src": "2663:3:36"
												  },
												  "nodeType": "YulFunctionCall",
												  "src": "2663:37:36"
												}
											  ],
											  "functionName": {
												"name": "not",
												"nodeType": "YulIdentifier",
												"src": "2659:3:36"
											  },
											  "nodeType": "YulFunctionCall",
											  "src": "2659:42:36"
											}
										  ],
										  "functionName": {
											"name": "and",
											"nodeType": "YulIdentifier",
											"src": "2644:3:36"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "2644:58:36"
										}
									  ],
									  "functionName": {
										"name": "sstore",
										"nodeType": "YulIdentifier",
										"src": "2629:6:36"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "2629:74:36"
									},
									"nodeType": "YulExpressionStatement",
									"src": "2629:74:36"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "loopEnd",
									"nodeType": "YulIdentifier",
									"src": "2522:7:36"
								  },
								  {
									"name": "newLen",
									"nodeType": "YulIdentifier",
									"src": "2531:6:36"
								  }
								],
								"functionName": {
								  "name": "lt",
								  "nodeType": "YulIdentifier",
								  "src": "2519:2:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "2519:19:36"
							  },
							  "nodeType": "YulIf",
							  "src": "2516:201:36"
							},
							{
							  "expression": {
								"arguments": [
								  {
									"name": "slot",
									"nodeType": "YulIdentifier",
									"src": "2737:4:36"
								  },
								  {
									"arguments": [
									  {
										"arguments": [
										  {
											"kind": "number",
											"nodeType": "YulLiteral",
											"src": "2751:1:36",
											"type": "",
											"value": "1"
										  },
										  {
											"name": "newLen",
											"nodeType": "YulIdentifier",
											"src": "2754:6:36"
										  }
										],
										"functionName": {
										  "name": "shl",
										  "nodeType": "YulIdentifier",
										  "src": "2747:3:36"
										},
										"nodeType": "YulFunctionCall",
										"src": "2747:14:36"
									  },
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "2763:1:36",
										"type": "",
										"value": "1"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "2743:3:36"
									},
									"nodeType": "YulFunctionCall",
									"src": "2743:22:36"
								  }
								],
								"functionName": {
								  "name": "sstore",
								  "nodeType": "YulIdentifier",
								  "src": "2730:6:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "2730:36:36"
							  },
							  "nodeType": "YulExpressionStatement",
							  "src": "2730:36:36"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "2113:663:36",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2118:1:36",
						  "type": "",
						  "value": "1"
						}
					  },
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "2793:234:36",
						  "statements": [
							{
							  "nodeType": "YulVariableDeclaration",
							  "src": "2807:14:36",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2820:1:36",
								"type": "",
								"value": "0"
							  },
							  "variables": [
								{
								  "name": "value",
								  "nodeType": "YulTypedName",
								  "src": "2811:5:36",
								  "type": ""
								}
							  ]
							},
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "2856:67:36",
								"statements": [
								  {
									"nodeType": "YulAssignment",
									"src": "2874:35:36",
									"value": {
									  "arguments": [
										{
										  "arguments": [
											{
											  "name": "src",
											  "nodeType": "YulIdentifier",
											  "src": "2893:3:36"
											},
											{
											  "name": "srcOffset",
											  "nodeType": "YulIdentifier",
											  "src": "2898:9:36"
											}
										  ],
										  "functionName": {
											"name": "add",
											"nodeType": "YulIdentifier",
											"src": "2889:3:36"
										  },
										  "nodeType": "YulFunctionCall",
										  "src": "2889:19:36"
										}
									  ],
									  "functionName": {
										"name": "mload",
										"nodeType": "YulIdentifier",
										"src": "2883:5:36"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "2883:26:36"
									},
									"variableNames": [
									  {
										"name": "value",
										"nodeType": "YulIdentifier",
										"src": "2874:5:36"
									  }
									]
								  }
								]
							  },
							  "condition": {
								"name": "newLen",
								"nodeType": "YulIdentifier",
								"src": "2837:6:36"
							  },
							  "nodeType": "YulIf",
							  "src": "2834:89:36"
							},
							{
							  "expression": {
								"arguments": [
								  {
									"name": "slot",
									"nodeType": "YulIdentifier",
									"src": "2943:4:36"
								  },
								  {
									"arguments": [
									  {
										"name": "value",
										"nodeType": "YulIdentifier",
										"src": "3002:5:36"
									  },
									  {
										"name": "newLen",
										"nodeType": "YulIdentifier",
										"src": "3009:6:36"
									  }
									],
									"functionName": {
									  "name": "extract_used_part_and_set_length_of_short_byte_array",
									  "nodeType": "YulIdentifier",
									  "src": "2949:52:36"
									},
									"nodeType": "YulFunctionCall",
									"src": "2949:67:36"
								  }
								],
								"functionName": {
								  "name": "sstore",
								  "nodeType": "YulIdentifier",
								  "src": "2936:6:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "2936:81:36"
							  },
							  "nodeType": "YulExpressionStatement",
							  "src": "2936:81:36"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "2785:242:36",
						"value": "default"
					  }
					],
					"expression": {
					  "arguments": [
						{
						  "name": "newLen",
						  "nodeType": "YulIdentifier",
						  "src": "2093:6:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2101:2:36",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "2090:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2090:14:36"
					},
					"nodeType": "YulSwitch",
					"src": "2083:944:36"
				  }
				]
			  },
			  "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "slot",
				  "nodeType": "YulTypedName",
				  "src": "1762:4:36",
				  "type": ""
				},
				{
				  "name": "src",
				  "nodeType": "YulTypedName",
				  "src": "1768:3:36",
				  "type": ""
				}
			  ],
			  "src": "1681:1352:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3070:95:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3087:1:36",
						  "type": "",
						  "value": "0"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "3094:3:36",
							  "type": "",
							  "value": "224"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "3099:10:36",
							  "type": "",
							  "value": "0x4e487b71"
							}
						  ],
						  "functionName": {
							"name": "shl",
							"nodeType": "YulIdentifier",
							"src": "3090:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3090:20:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "3080:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3080:31:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3080:31:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3127:1:36",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3130:4:36",
						  "type": "",
						  "value": "0x11"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "3120:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3120:15:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3120:15:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3151:1:36",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3154:4:36",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "3144:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3144:15:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3144:15:36"
				  }
				]
			  },
			  "name": "panic_error_0x11",
			  "nodeType": "YulFunctionDefinition",
			  "src": "3038:127:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3234:358:36",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3244:16:36",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "3259:1:36",
					  "type": "",
					  "value": "1"
					},
					"variables": [
					  {
						"name": "power_1",
						"nodeType": "YulTypedName",
						"src": "3248:7:36",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3269:16:36",
					"value": {
					  "name": "power_1",
					  "nodeType": "YulIdentifier",
					  "src": "3278:7:36"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "3269:5:36"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3294:13:36",
					"value": {
					  "name": "_base",
					  "nodeType": "YulIdentifier",
					  "src": "3302:5:36"
					},
					"variableNames": [
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "3294:4:36"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3358:228:36",
					  "statements": [
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "3403:22:36",
							"statements": [
							  {
								"expression": {
								  "arguments": [],
								  "functionName": {
									"name": "panic_error_0x11",
									"nodeType": "YulIdentifier",
									"src": "3405:16:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "3405:18:36"
								},
								"nodeType": "YulExpressionStatement",
								"src": "3405:18:36"
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "3378:4:36"
							  },
							  {
								"arguments": [
								  {
									"arguments": [
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "3392:1:36",
										"type": "",
										"value": "0"
									  }
									],
									"functionName": {
									  "name": "not",
									  "nodeType": "YulIdentifier",
									  "src": "3388:3:36"
									},
									"nodeType": "YulFunctionCall",
									"src": "3388:6:36"
								  },
								  {
									"name": "base",
									"nodeType": "YulIdentifier",
									"src": "3396:4:36"
								  }
								],
								"functionName": {
								  "name": "div",
								  "nodeType": "YulIdentifier",
								  "src": "3384:3:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "3384:17:36"
							  }
							],
							"functionName": {
							  "name": "gt",
							  "nodeType": "YulIdentifier",
							  "src": "3375:2:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "3375:27:36"
						  },
						  "nodeType": "YulIf",
						  "src": "3372:53:36"
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "3464:29:36",
							"statements": [
							  {
								"nodeType": "YulAssignment",
								"src": "3466:25:36",
								"value": {
								  "arguments": [
									{
									  "name": "power",
									  "nodeType": "YulIdentifier",
									  "src": "3479:5:36"
									},
									{
									  "name": "base",
									  "nodeType": "YulIdentifier",
									  "src": "3486:4:36"
									}
								  ],
								  "functionName": {
									"name": "mul",
									"nodeType": "YulIdentifier",
									"src": "3475:3:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "3475:16:36"
								},
								"variableNames": [
								  {
									"name": "power",
									"nodeType": "YulIdentifier",
									"src": "3466:5:36"
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
								"src": "3445:8:36"
							  },
							  {
								"name": "power_1",
								"nodeType": "YulIdentifier",
								"src": "3455:7:36"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "3441:3:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "3441:22:36"
						  },
						  "nodeType": "YulIf",
						  "src": "3438:55:36"
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "3506:23:36",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "3518:4:36"
							  },
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "3524:4:36"
							  }
							],
							"functionName": {
							  "name": "mul",
							  "nodeType": "YulIdentifier",
							  "src": "3514:3:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "3514:15:36"
						  },
						  "variableNames": [
							{
							  "name": "base",
							  "nodeType": "YulIdentifier",
							  "src": "3506:4:36"
							}
						  ]
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "3542:34:36",
						  "value": {
							"arguments": [
							  {
								"name": "power_1",
								"nodeType": "YulIdentifier",
								"src": "3558:7:36"
							  },
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "3567:8:36"
							  }
							],
							"functionName": {
							  "name": "shr",
							  "nodeType": "YulIdentifier",
							  "src": "3554:3:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "3554:22:36"
						  },
						  "variableNames": [
							{
							  "name": "exponent",
							  "nodeType": "YulIdentifier",
							  "src": "3542:8:36"
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
						  "src": "3327:8:36"
						},
						{
						  "name": "power_1",
						  "nodeType": "YulIdentifier",
						  "src": "3337:7:36"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "3324:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3324:21:36"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "3346:3:36",
					  "statements": []
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "3320:3:36",
					  "statements": []
					},
					"src": "3316:270:36"
				  }
				]
			  },
			  "name": "checked_exp_helper",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "_base",
				  "nodeType": "YulTypedName",
				  "src": "3198:5:36",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "3205:8:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "3218:5:36",
				  "type": ""
				},
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "3225:4:36",
				  "type": ""
				}
			  ],
			  "src": "3170:422:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3656:747:36",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3694:52:36",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "3708:10:36",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "3717:1:36",
							"type": "",
							"value": "1"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "3708:5:36"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "3731:5:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "3676:8:36"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "3669:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3669:16:36"
					},
					"nodeType": "YulIf",
					"src": "3666:80:36"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3779:52:36",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "3793:10:36",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "3802:1:36",
							"type": "",
							"value": "0"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "3793:5:36"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "3816:5:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "3765:4:36"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "3758:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3758:12:36"
					},
					"nodeType": "YulIf",
					"src": "3755:76:36"
				  },
				  {
					"cases": [
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "3867:52:36",
						  "statements": [
							{
							  "nodeType": "YulAssignment",
							  "src": "3881:10:36",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3890:1:36",
								"type": "",
								"value": "1"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "3881:5:36"
								}
							  ]
							},
							{
							  "nodeType": "YulLeave",
							  "src": "3904:5:36"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "3860:59:36",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3865:1:36",
						  "type": "",
						  "value": "1"
						}
					  },
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "3935:123:36",
						  "statements": [
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "3970:22:36",
								"statements": [
								  {
									"expression": {
									  "arguments": [],
									  "functionName": {
										"name": "panic_error_0x11",
										"nodeType": "YulIdentifier",
										"src": "3972:16:36"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "3972:18:36"
									},
									"nodeType": "YulExpressionStatement",
									"src": "3972:18:36"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "3955:8:36"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "3965:3:36",
									"type": "",
									"value": "255"
								  }
								],
								"functionName": {
								  "name": "gt",
								  "nodeType": "YulIdentifier",
								  "src": "3952:2:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "3952:17:36"
							  },
							  "nodeType": "YulIf",
							  "src": "3949:43:36"
							},
							{
							  "nodeType": "YulAssignment",
							  "src": "4005:25:36",
							  "value": {
								"arguments": [
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "4018:8:36"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "4028:1:36",
									"type": "",
									"value": "1"
								  }
								],
								"functionName": {
								  "name": "shl",
								  "nodeType": "YulIdentifier",
								  "src": "4014:3:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "4014:16:36"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "4005:5:36"
								}
							  ]
							},
							{
							  "nodeType": "YulLeave",
							  "src": "4043:5:36"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "3928:130:36",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3933:1:36",
						  "type": "",
						  "value": "2"
						}
					  }
					],
					"expression": {
					  "name": "base",
					  "nodeType": "YulIdentifier",
					  "src": "3847:4:36"
					},
					"nodeType": "YulSwitch",
					"src": "3840:218:36"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4156:70:36",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "4170:28:36",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "4183:4:36"
							  },
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "4189:8:36"
							  }
							],
							"functionName": {
							  "name": "exp",
							  "nodeType": "YulIdentifier",
							  "src": "4179:3:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "4179:19:36"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "4170:5:36"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "4211:5:36"
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
								  "src": "4080:4:36"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4086:2:36",
								  "type": "",
								  "value": "11"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "4077:2:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4077:12:36"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "4094:8:36"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4104:2:36",
								  "type": "",
								  "value": "78"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "4091:2:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4091:16:36"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "4073:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4073:35:36"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "base",
								  "nodeType": "YulIdentifier",
								  "src": "4117:4:36"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4123:3:36",
								  "type": "",
								  "value": "307"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "4114:2:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4114:13:36"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "4132:8:36"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4142:2:36",
								  "type": "",
								  "value": "32"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "4129:2:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4129:16:36"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "4110:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4110:36:36"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "4070:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4070:77:36"
					},
					"nodeType": "YulIf",
					"src": "4067:159:36"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "4235:57:36",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "4277:4:36"
						},
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "4283:8:36"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_helper",
						"nodeType": "YulIdentifier",
						"src": "4258:18:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4258:34:36"
					},
					"variables": [
					  {
						"name": "power_1",
						"nodeType": "YulTypedName",
						"src": "4239:7:36",
						"type": ""
					  },
					  {
						"name": "base_1",
						"nodeType": "YulTypedName",
						"src": "4248:6:36",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4337:22:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "4339:16:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "4339:18:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4339:18:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "power_1",
						  "nodeType": "YulIdentifier",
						  "src": "4307:7:36"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "4324:1:36",
								  "type": "",
								  "value": "0"
								}
							  ],
							  "functionName": {
								"name": "not",
								"nodeType": "YulIdentifier",
								"src": "4320:3:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4320:6:36"
							},
							{
							  "name": "base_1",
							  "nodeType": "YulIdentifier",
							  "src": "4328:6:36"
							}
						  ],
						  "functionName": {
							"name": "div",
							"nodeType": "YulIdentifier",
							"src": "4316:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4316:19:36"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "4304:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4304:32:36"
					},
					"nodeType": "YulIf",
					"src": "4301:58:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "4368:29:36",
					"value": {
					  "arguments": [
						{
						  "name": "power_1",
						  "nodeType": "YulIdentifier",
						  "src": "4381:7:36"
						},
						{
						  "name": "base_1",
						  "nodeType": "YulIdentifier",
						  "src": "4390:6:36"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "4377:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4377:20:36"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "4368:5:36"
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
				  "src": "3627:4:36",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "3633:8:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "3646:5:36",
				  "type": ""
				}
			  ],
			  "src": "3597:806:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4476:72:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4486:56:36",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "4516:4:36"
						},
						{
						  "arguments": [
							{
							  "name": "exponent",
							  "nodeType": "YulIdentifier",
							  "src": "4526:8:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4536:4:36",
							  "type": "",
							  "value": "0xff"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "4522:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4522:19:36"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_unsigned",
						"nodeType": "YulIdentifier",
						"src": "4495:20:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4495:47:36"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "4486:5:36"
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
				  "src": "4447:4:36",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "4453:8:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "4466:5:36",
				  "type": ""
				}
			  ],
			  "src": "4408:140:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4605:116:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4615:20:36",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "4630:1:36"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "4633:1:36"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "4626:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4626:9:36"
					},
					"variableNames": [
					  {
						"name": "product",
						"nodeType": "YulIdentifier",
						"src": "4615:7:36"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4693:22:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "4695:16:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "4695:18:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4695:18:36"
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
								  "src": "4664:1:36"
								}
							  ],
							  "functionName": {
								"name": "iszero",
								"nodeType": "YulIdentifier",
								"src": "4657:6:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4657:9:36"
							},
							{
							  "arguments": [
								{
								  "name": "y",
								  "nodeType": "YulIdentifier",
								  "src": "4671:1:36"
								},
								{
								  "arguments": [
									{
									  "name": "product",
									  "nodeType": "YulIdentifier",
									  "src": "4678:7:36"
									},
									{
									  "name": "x",
									  "nodeType": "YulIdentifier",
									  "src": "4687:1:36"
									}
								  ],
								  "functionName": {
									"name": "div",
									"nodeType": "YulIdentifier",
									"src": "4674:3:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "4674:15:36"
								}
							  ],
							  "functionName": {
								"name": "eq",
								"nodeType": "YulIdentifier",
								"src": "4668:2:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4668:22:36"
							}
						  ],
						  "functionName": {
							"name": "or",
							"nodeType": "YulIdentifier",
							"src": "4654:2:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4654:37:36"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "4647:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4647:45:36"
					},
					"nodeType": "YulIf",
					"src": "4644:71:36"
				  }
				]
			  },
			  "name": "checked_mul_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "4584:1:36",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "4587:1:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "product",
				  "nodeType": "YulTypedName",
				  "src": "4593:7:36",
				  "type": ""
				}
			  ],
			  "src": "4553:168:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4900:181:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4917:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4928:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4910:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4910:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4910:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4951:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4962:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4947:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4947:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4967:2:36",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4940:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4940:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4940:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4990:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5001:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4986:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4986:18:36"
						},
						{
						  "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "5006:33:36",
						  "type": "",
						  "value": "ERC20: mint to the zero address"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4979:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4979:61:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4979:61:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "5049:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5061:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5072:2:36",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5057:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5057:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "5049:4:36"
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
				  "src": "4877:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "4891:4:36",
				  "type": ""
				}
			  ],
			  "src": "4726:355:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5134:77:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5144:16:36",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "5155:1:36"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "5158:1:36"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5151:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5151:9:36"
					},
					"variableNames": [
					  {
						"name": "sum",
						"nodeType": "YulIdentifier",
						"src": "5144:3:36"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "5183:22:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "5185:16:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "5185:18:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "5185:18:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "5175:1:36"
						},
						{
						  "name": "sum",
						  "nodeType": "YulIdentifier",
						  "src": "5178:3:36"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "5172:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5172:10:36"
					},
					"nodeType": "YulIf",
					"src": "5169:36:36"
				  }
				]
			  },
			  "name": "checked_add_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "5117:1:36",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "5120:1:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "sum",
				  "nodeType": "YulTypedName",
				  "src": "5126:3:36",
				  "type": ""
				}
			  ],
			  "src": "5086:125:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5317:76:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5327:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5339:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5350:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5335:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5335:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "5327:4:36"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5369:9:36"
						},
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "5380:6:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5362:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5362:25:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5362:25:36"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "5286:9:36",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "5297:6:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "5308:4:36",
				  "type": ""
				}
			  ],
			  "src": "5216:177:36"
			}
		  ]
		},
		"contents": "{\n    { }\n    function abi_decode_tuple_t_address_payable_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n        value0 := value\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function array_dataslot_string_storage(ptr) -> data\n    {\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n    }\n    function clean_up_bytearray_end_slots_string_storage(array, len, startIndex)\n    {\n        if gt(len, 31)\n        {\n            let _1 := 0\n            mstore(_1, array)\n            let data := keccak256(_1, 0x20)\n            let deleteStart := add(data, shr(5, add(startIndex, 31)))\n            if lt(startIndex, 0x20) { deleteStart := data }\n            let _2 := add(data, shr(5, add(len, 31)))\n            let start := deleteStart\n            for { } lt(start, _2) { start := add(start, 1) }\n            { sstore(start, _1) }\n        }\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used\n    {\n        used := or(and(data, not(shr(shl(3, len), not(0)))), shl(1, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src)\n    {\n        let newLen := mload(src)\n        if gt(newLen, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        clean_up_bytearray_end_slots_string_storage(slot, extract_byte_array_length(sload(slot)), newLen)\n        let srcOffset := 0\n        let srcOffset_1 := 0x20\n        srcOffset := srcOffset_1\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(31))\n            let dstPtr := array_dataslot_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, srcOffset_1) }\n            {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, srcOffset_1)\n            }\n            if lt(loopEnd, newLen)\n            {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, and(lastValue, not(shr(and(shl(3, newLen), 248), not(0)))))\n            }\n            sstore(slot, add(shl(1, newLen), 1))\n        }\n        default {\n            let value := 0\n            if newLen\n            {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_exp_helper(_base, exponent) -> power, base\n    {\n        let power_1 := 1\n        power := power_1\n        base := _base\n        for { } gt(exponent, power_1) { }\n        {\n            if gt(base, div(not(0), base)) { panic_error_0x11() }\n            if and(exponent, power_1) { power := mul(power, base) }\n            base := mul(base, base)\n            exponent := shr(power_1, exponent)\n        }\n    }\n    function checked_exp_unsigned(base, exponent) -> power\n    {\n        if iszero(exponent)\n        {\n            power := 1\n            leave\n        }\n        if iszero(base)\n        {\n            power := 0\n            leave\n        }\n        switch base\n        case 1 {\n            power := 1\n            leave\n        }\n        case 2 {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := shl(exponent, 1)\n            leave\n        }\n        if or(and(lt(base, 11), lt(exponent, 78)), and(lt(base, 307), lt(exponent, 32)))\n        {\n            power := exp(base, exponent)\n            leave\n        }\n        let power_1, base_1 := checked_exp_helper(base, exponent)\n        if gt(power_1, div(not(0), base_1)) { panic_error_0x11() }\n        power := mul(power_1, base_1)\n    }\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power\n    {\n        power := checked_exp_unsigned(base, and(exponent, 0xff))\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 31)\n        mstore(add(headStart, 64), \"ERC20: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n}",
		"id": 36,
		"language": "Yul",
		"name": "#utility.yul"
	  }
	],
	"deployedGeneratedSources": [
	  {
		"ast": {
		  "nodeType": "YulBlock",
		  "src": "0:13594:36",
		  "statements": [
			{
			  "nodeType": "YulBlock",
			  "src": "6:3:36",
			  "statements": []
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "115:76:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "125:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "137:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "148:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "133:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "133:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "125:4:36"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "167:9:36"
						},
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "178:6:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "160:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "160:25:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "160:25:36"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "84:9:36",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "95:6:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "106:4:36",
				  "type": ""
				}
			  ],
			  "src": "14:177:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "317:427:36",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "327:12:36",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "337:2:36",
					  "type": "",
					  "value": "32"
					},
					"variables": [
					  {
						"name": "_1",
						"nodeType": "YulTypedName",
						"src": "331:2:36",
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
						  "src": "355:9:36"
						},
						{
						  "name": "_1",
						  "nodeType": "YulIdentifier",
						  "src": "366:2:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "348:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "348:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "348:21:36"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "378:27:36",
					"value": {
					  "arguments": [
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "398:6:36"
						}
					  ],
					  "functionName": {
						"name": "mload",
						"nodeType": "YulIdentifier",
						"src": "392:5:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "392:13:36"
					},
					"variables": [
					  {
						"name": "length",
						"nodeType": "YulTypedName",
						"src": "382:6:36",
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
							  "src": "425:9:36"
							},
							{
							  "name": "_1",
							  "nodeType": "YulIdentifier",
							  "src": "436:2:36"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "421:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "421:18:36"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "441:6:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "414:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "414:34:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "414:34:36"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "457:10:36",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "466:1:36",
					  "type": "",
					  "value": "0"
					},
					"variables": [
					  {
						"name": "i",
						"nodeType": "YulTypedName",
						"src": "461:1:36",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "526:90:36",
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
										"src": "555:9:36"
									  },
									  {
										"name": "i",
										"nodeType": "YulIdentifier",
										"src": "566:1:36"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "551:3:36"
									},
									"nodeType": "YulFunctionCall",
									"src": "551:17:36"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "570:2:36",
									"type": "",
									"value": "64"
								  }
								],
								"functionName": {
								  "name": "add",
								  "nodeType": "YulIdentifier",
								  "src": "547:3:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "547:26:36"
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
											"src": "589:6:36"
										  },
										  {
											"name": "i",
											"nodeType": "YulIdentifier",
											"src": "597:1:36"
										  }
										],
										"functionName": {
										  "name": "add",
										  "nodeType": "YulIdentifier",
										  "src": "585:3:36"
										},
										"nodeType": "YulFunctionCall",
										"src": "585:14:36"
									  },
									  {
										"name": "_1",
										"nodeType": "YulIdentifier",
										"src": "601:2:36"
									  }
									],
									"functionName": {
									  "name": "add",
									  "nodeType": "YulIdentifier",
									  "src": "581:3:36"
									},
									"nodeType": "YulFunctionCall",
									"src": "581:23:36"
								  }
								],
								"functionName": {
								  "name": "mload",
								  "nodeType": "YulIdentifier",
								  "src": "575:5:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "575:30:36"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "540:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "540:66:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "540:66:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "i",
						  "nodeType": "YulIdentifier",
						  "src": "487:1:36"
						},
						{
						  "name": "length",
						  "nodeType": "YulIdentifier",
						  "src": "490:6:36"
						}
					  ],
					  "functionName": {
						"name": "lt",
						"nodeType": "YulIdentifier",
						"src": "484:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "484:13:36"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "498:19:36",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "500:15:36",
						  "value": {
							"arguments": [
							  {
								"name": "i",
								"nodeType": "YulIdentifier",
								"src": "509:1:36"
							  },
							  {
								"name": "_1",
								"nodeType": "YulIdentifier",
								"src": "512:2:36"
							  }
							],
							"functionName": {
							  "name": "add",
							  "nodeType": "YulIdentifier",
							  "src": "505:3:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "505:10:36"
						  },
						  "variableNames": [
							{
							  "name": "i",
							  "nodeType": "YulIdentifier",
							  "src": "500:1:36"
							}
						  ]
						}
					  ]
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "480:3:36",
					  "statements": []
					},
					"src": "476:140:36"
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
								  "src": "640:9:36"
								},
								{
								  "name": "length",
								  "nodeType": "YulIdentifier",
								  "src": "651:6:36"
								}
							  ],
							  "functionName": {
								"name": "add",
								"nodeType": "YulIdentifier",
								"src": "636:3:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "636:22:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "660:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "632:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "632:31:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "665:1:36",
						  "type": "",
						  "value": "0"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "625:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "625:42:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "625:42:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "676:62:36",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "692:9:36"
							},
							{
							  "arguments": [
								{
								  "arguments": [
									{
									  "name": "length",
									  "nodeType": "YulIdentifier",
									  "src": "711:6:36"
									},
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "719:2:36",
									  "type": "",
									  "value": "31"
									}
								  ],
								  "functionName": {
									"name": "add",
									"nodeType": "YulIdentifier",
									"src": "707:3:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "707:15:36"
								},
								{
								  "arguments": [
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "728:2:36",
									  "type": "",
									  "value": "31"
									}
								  ],
								  "functionName": {
									"name": "not",
									"nodeType": "YulIdentifier",
									"src": "724:3:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "724:7:36"
								}
							  ],
							  "functionName": {
								"name": "and",
								"nodeType": "YulIdentifier",
								"src": "703:3:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "703:29:36"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "688:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "688:45:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "735:2:36",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "684:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "684:54:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "676:4:36"
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
				  "src": "286:9:36",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "297:6:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "308:4:36",
				  "type": ""
				}
			  ],
			  "src": "196:548:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "794:86:36",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "858:16:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "867:1:36",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "870:1:36",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "860:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "860:12:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "860:12:36"
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
							  "src": "817:5:36"
							},
							{
							  "arguments": [
								{
								  "name": "value",
								  "nodeType": "YulIdentifier",
								  "src": "828:5:36"
								},
								{
								  "arguments": [
									{
									  "arguments": [
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "843:3:36",
										  "type": "",
										  "value": "160"
										},
										{
										  "kind": "number",
										  "nodeType": "YulLiteral",
										  "src": "848:1:36",
										  "type": "",
										  "value": "1"
										}
									  ],
									  "functionName": {
										"name": "shl",
										"nodeType": "YulIdentifier",
										"src": "839:3:36"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "839:11:36"
									},
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "852:1:36",
									  "type": "",
									  "value": "1"
									}
								  ],
								  "functionName": {
									"name": "sub",
									"nodeType": "YulIdentifier",
									"src": "835:3:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "835:19:36"
								}
							  ],
							  "functionName": {
								"name": "and",
								"nodeType": "YulIdentifier",
								"src": "824:3:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "824:31:36"
							}
						  ],
						  "functionName": {
							"name": "eq",
							"nodeType": "YulIdentifier",
							"src": "814:2:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "814:42:36"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "807:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "807:50:36"
					},
					"nodeType": "YulIf",
					"src": "804:70:36"
				  }
				]
			  },
			  "name": "validator_revert_address",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "value",
				  "nodeType": "YulTypedName",
				  "src": "783:5:36",
				  "type": ""
				}
			  ],
			  "src": "749:131:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "972:228:36",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1018:16:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1027:1:36",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1030:1:36",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "1020:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "1020:12:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1020:12:36"
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
							  "src": "993:7:36"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1002:9:36"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "989:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "989:23:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1014:2:36",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "985:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "985:32:36"
					},
					"nodeType": "YulIf",
					"src": "982:52:36"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1043:36:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1069:9:36"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "1056:12:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1056:23:36"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "1047:5:36",
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
						  "src": "1113:5:36"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_address",
						"nodeType": "YulIdentifier",
						"src": "1088:24:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1088:31:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1088:31:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1128:15:36",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "1138:5:36"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "1128:6:36"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1152:42:36",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1179:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "1190:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "1175:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1175:18:36"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "1162:12:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1162:32:36"
					},
					"variableNames": [
					  {
						"name": "value1",
						"nodeType": "YulIdentifier",
						"src": "1152:6:36"
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
				  "src": "930:9:36",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "941:7:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "953:6:36",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "961:6:36",
				  "type": ""
				}
			  ],
			  "src": "885:315:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1300:92:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1310:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1322:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1333:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "1318:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1318:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "1310:4:36"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1352:9:36"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "value0",
								  "nodeType": "YulIdentifier",
								  "src": "1377:6:36"
								}
							  ],
							  "functionName": {
								"name": "iszero",
								"nodeType": "YulIdentifier",
								"src": "1370:6:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1370:14:36"
							}
						  ],
						  "functionName": {
							"name": "iszero",
							"nodeType": "YulIdentifier",
							"src": "1363:6:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1363:22:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1345:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1345:41:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1345:41:36"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "1269:9:36",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "1280:6:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "1291:4:36",
				  "type": ""
				}
			  ],
			  "src": "1205:187:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1489:177:36",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "1535:16:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1544:1:36",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "1547:1:36",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "1537:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "1537:12:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "1537:12:36"
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
							  "src": "1510:7:36"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "1519:9:36"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "1506:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1506:23:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1531:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "1502:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1502:32:36"
					},
					"nodeType": "YulIf",
					"src": "1499:52:36"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "1560:36:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1586:9:36"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "1573:12:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1573:23:36"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "1564:5:36",
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
						  "src": "1630:5:36"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_address",
						"nodeType": "YulIdentifier",
						"src": "1605:24:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1605:31:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1605:31:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "1645:15:36",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "1655:5:36"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "1645:6:36"
					  }
					]
				  }
				]
			  },
			  "name": "abi_decode_tuple_t_contract$_LiquidityPool_$6665",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "1455:9:36",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "1466:7:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "1478:6:36",
				  "type": ""
				}
			  ],
			  "src": "1397:269:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1772:102:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "1782:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1794:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "1805:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "1790:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1790:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "1782:4:36"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "1824:9:36"
						},
						{
						  "arguments": [
							{
							  "name": "value0",
							  "nodeType": "YulIdentifier",
							  "src": "1839:6:36"
							},
							{
							  "arguments": [
								{
								  "arguments": [
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "1855:3:36",
									  "type": "",
									  "value": "160"
									},
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "1860:1:36",
									  "type": "",
									  "value": "1"
									}
								  ],
								  "functionName": {
									"name": "shl",
									"nodeType": "YulIdentifier",
									"src": "1851:3:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "1851:11:36"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "1864:1:36",
								  "type": "",
								  "value": "1"
								}
							  ],
							  "functionName": {
								"name": "sub",
								"nodeType": "YulIdentifier",
								"src": "1847:3:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "1847:19:36"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "1835:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "1835:32:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "1817:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1817:51:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "1817:51:36"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "1741:9:36",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "1752:6:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "1763:4:36",
				  "type": ""
				}
			  ],
			  "src": "1671:203:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "1983:352:36",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2029:16:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2038:1:36",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2041:1:36",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "2031:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "2031:12:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2031:12:36"
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
							  "src": "2004:7:36"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2013:9:36"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "2000:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2000:23:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2025:2:36",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "1996:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "1996:32:36"
					},
					"nodeType": "YulIf",
					"src": "1993:52:36"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2054:36:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2080:9:36"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2067:12:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2067:23:36"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "2058:5:36",
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
						  "src": "2124:5:36"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_address",
						"nodeType": "YulIdentifier",
						"src": "2099:24:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2099:31:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2099:31:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2139:15:36",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "2149:5:36"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "2139:6:36"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2163:47:36",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2195:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2206:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2191:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2191:18:36"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2178:12:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2178:32:36"
					},
					"variables": [
					  {
						"name": "value_1",
						"nodeType": "YulTypedName",
						"src": "2167:7:36",
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
						  "src": "2244:7:36"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_address",
						"nodeType": "YulIdentifier",
						"src": "2219:24:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2219:33:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2219:33:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2261:17:36",
					"value": {
					  "name": "value_1",
					  "nodeType": "YulIdentifier",
					  "src": "2271:7:36"
					},
					"variableNames": [
					  {
						"name": "value1",
						"nodeType": "YulIdentifier",
						"src": "2261:6:36"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2287:42:36",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2314:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2325:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "2310:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2310:18:36"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2297:12:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2297:32:36"
					},
					"variableNames": [
					  {
						"name": "value2",
						"nodeType": "YulIdentifier",
						"src": "2287:6:36"
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
				  "src": "1933:9:36",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "1944:7:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "1956:6:36",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "1964:6:36",
				  "type": ""
				},
				{
				  "name": "value2",
				  "nodeType": "YulTypedName",
				  "src": "1972:6:36",
				  "type": ""
				}
			  ],
			  "src": "1879:456:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2437:87:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2447:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2459:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2470:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "2455:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2455:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "2447:4:36"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2489:9:36"
						},
						{
						  "arguments": [
							{
							  "name": "value0",
							  "nodeType": "YulIdentifier",
							  "src": "2504:6:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "2512:4:36",
							  "type": "",
							  "value": "0xff"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "2500:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2500:17:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "2482:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2482:36:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2482:36:36"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "2406:9:36",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "2417:6:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "2428:4:36",
				  "type": ""
				}
			  ],
			  "src": "2340:184:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2599:177:36",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "2645:16:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2654:1:36",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "2657:1:36",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "2647:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "2647:12:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "2647:12:36"
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
							  "src": "2620:7:36"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "2629:9:36"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "2616:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2616:23:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2641:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "2612:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2612:32:36"
					},
					"nodeType": "YulIf",
					"src": "2609:52:36"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "2670:36:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2696:9:36"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "2683:12:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2683:23:36"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "2674:5:36",
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
						  "src": "2740:5:36"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_address",
						"nodeType": "YulIdentifier",
						"src": "2715:24:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2715:31:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2715:31:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "2755:15:36",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "2765:5:36"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "2755:6:36"
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
				  "src": "2565:9:36",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "2576:7:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "2588:6:36",
				  "type": ""
				}
			  ],
			  "src": "2529:247:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "2898:102:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "2908:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2920:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "2931:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "2916:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2916:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "2908:4:36"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "2950:9:36"
						},
						{
						  "arguments": [
							{
							  "name": "value0",
							  "nodeType": "YulIdentifier",
							  "src": "2965:6:36"
							},
							{
							  "arguments": [
								{
								  "arguments": [
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "2981:3:36",
									  "type": "",
									  "value": "160"
									},
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "2986:1:36",
									  "type": "",
									  "value": "1"
									}
								  ],
								  "functionName": {
									"name": "shl",
									"nodeType": "YulIdentifier",
									"src": "2977:3:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "2977:11:36"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "2990:1:36",
								  "type": "",
								  "value": "1"
								}
							  ],
							  "functionName": {
								"name": "sub",
								"nodeType": "YulIdentifier",
								"src": "2973:3:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "2973:19:36"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "2961:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "2961:32:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "2943:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "2943:51:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "2943:51:36"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "2867:9:36",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "2878:6:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "2889:4:36",
				  "type": ""
				}
			  ],
			  "src": "2781:219:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3092:301:36",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3138:16:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3147:1:36",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3150:1:36",
								"type": "",
								"value": "0"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "3140:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "3140:12:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3140:12:36"
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
							  "src": "3113:7:36"
							},
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "3122:9:36"
							}
						  ],
						  "functionName": {
							"name": "sub",
							"nodeType": "YulIdentifier",
							"src": "3109:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3109:23:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3134:2:36",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "slt",
						"nodeType": "YulIdentifier",
						"src": "3105:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3105:32:36"
					},
					"nodeType": "YulIf",
					"src": "3102:52:36"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3163:36:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "3189:9:36"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "3176:12:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3176:23:36"
					},
					"variables": [
					  {
						"name": "value",
						"nodeType": "YulTypedName",
						"src": "3167:5:36",
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
						  "src": "3233:5:36"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_address",
						"nodeType": "YulIdentifier",
						"src": "3208:24:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3208:31:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3208:31:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3248:15:36",
					"value": {
					  "name": "value",
					  "nodeType": "YulIdentifier",
					  "src": "3258:5:36"
					},
					"variableNames": [
					  {
						"name": "value0",
						"nodeType": "YulIdentifier",
						"src": "3248:6:36"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3272:47:36",
					"value": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "3304:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "3315:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "3300:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3300:18:36"
						}
					  ],
					  "functionName": {
						"name": "calldataload",
						"nodeType": "YulIdentifier",
						"src": "3287:12:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3287:32:36"
					},
					"variables": [
					  {
						"name": "value_1",
						"nodeType": "YulTypedName",
						"src": "3276:7:36",
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
						  "src": "3353:7:36"
						}
					  ],
					  "functionName": {
						"name": "validator_revert_address",
						"nodeType": "YulIdentifier",
						"src": "3328:24:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3328:33:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3328:33:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "3370:17:36",
					"value": {
					  "name": "value_1",
					  "nodeType": "YulIdentifier",
					  "src": "3380:7:36"
					},
					"variableNames": [
					  {
						"name": "value1",
						"nodeType": "YulIdentifier",
						"src": "3370:6:36"
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
				  "src": "3050:9:36",
				  "type": ""
				},
				{
				  "name": "dataEnd",
				  "nodeType": "YulTypedName",
				  "src": "3061:7:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "3073:6:36",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "3081:6:36",
				  "type": ""
				}
			  ],
			  "src": "3005:388:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3453:325:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "3463:22:36",
					"value": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3477:1:36",
						  "type": "",
						  "value": "1"
						},
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "3480:4:36"
						}
					  ],
					  "functionName": {
						"name": "shr",
						"nodeType": "YulIdentifier",
						"src": "3473:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3473:12:36"
					},
					"variableNames": [
					  {
						"name": "length",
						"nodeType": "YulIdentifier",
						"src": "3463:6:36"
					  }
					]
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "3494:38:36",
					"value": {
					  "arguments": [
						{
						  "name": "data",
						  "nodeType": "YulIdentifier",
						  "src": "3524:4:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3530:1:36",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "and",
						"nodeType": "YulIdentifier",
						"src": "3520:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3520:12:36"
					},
					"variables": [
					  {
						"name": "outOfPlaceEncoding",
						"nodeType": "YulTypedName",
						"src": "3498:18:36",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3571:31:36",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "3573:27:36",
						  "value": {
							"arguments": [
							  {
								"name": "length",
								"nodeType": "YulIdentifier",
								"src": "3587:6:36"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3595:4:36",
								"type": "",
								"value": "0x7f"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "3583:3:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "3583:17:36"
						  },
						  "variableNames": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "3573:6:36"
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
						  "src": "3551:18:36"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "3544:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3544:26:36"
					},
					"nodeType": "YulIf",
					"src": "3541:61:36"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "3661:111:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3682:1:36",
								"type": "",
								"value": "0"
							  },
							  {
								"arguments": [
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "3689:3:36",
									"type": "",
									"value": "224"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "3694:10:36",
									"type": "",
									"value": "0x4e487b71"
								  }
								],
								"functionName": {
								  "name": "shl",
								  "nodeType": "YulIdentifier",
								  "src": "3685:3:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "3685:20:36"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "3675:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "3675:31:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3675:31:36"
						},
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3726:1:36",
								"type": "",
								"value": "4"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3729:4:36",
								"type": "",
								"value": "0x22"
							  }
							],
							"functionName": {
							  "name": "mstore",
							  "nodeType": "YulIdentifier",
							  "src": "3719:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "3719:15:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3719:15:36"
						},
						{
						  "expression": {
							"arguments": [
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3754:1:36",
								"type": "",
								"value": "0"
							  },
							  {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "3757:4:36",
								"type": "",
								"value": "0x24"
							  }
							],
							"functionName": {
							  "name": "revert",
							  "nodeType": "YulIdentifier",
							  "src": "3747:6:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "3747:15:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "3747:15:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "outOfPlaceEncoding",
						  "nodeType": "YulIdentifier",
						  "src": "3617:18:36"
						},
						{
						  "arguments": [
							{
							  "name": "length",
							  "nodeType": "YulIdentifier",
							  "src": "3640:6:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "3648:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "lt",
							"nodeType": "YulIdentifier",
							"src": "3637:2:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "3637:14:36"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "3614:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3614:38:36"
					},
					"nodeType": "YulIf",
					"src": "3611:161:36"
				  }
				]
			  },
			  "name": "extract_byte_array_length",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "data",
				  "nodeType": "YulTypedName",
				  "src": "3433:4:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "length",
				  "nodeType": "YulTypedName",
				  "src": "3442:6:36",
				  "type": ""
				}
			  ],
			  "src": "3398:380:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "3957:160:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "3974:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "3985:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "3967:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3967:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3967:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4008:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4019:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4004:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4004:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4024:2:36",
						  "type": "",
						  "value": "10"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "3997:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "3997:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "3997:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4047:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4058:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4043:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4043:18:36"
						},
						{
						  "hexValue": "4f574e45525f4f4e4c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "4063:12:36",
						  "type": "",
						  "value": "OWNER_ONLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4036:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4036:40:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4036:40:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "4085:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4097:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4108:2:36",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "4093:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4093:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "4085:4:36"
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
				  "src": "3934:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "3948:4:36",
				  "type": ""
				}
			  ],
			  "src": "3783:334:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4296:167:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4313:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4324:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4306:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4306:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4306:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4347:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4358:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4343:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4343:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4363:2:36",
						  "type": "",
						  "value": "17"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4336:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4336:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4336:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4386:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4397:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4382:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4382:18:36"
						},
						{
						  "hexValue": "46554e44535f4d4f5645445f544f5f4c50",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "4402:19:36",
						  "type": "",
						  "value": "FUNDS_MOVED_TO_LP"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4375:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4375:47:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4375:47:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "4431:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4443:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4454:2:36",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "4439:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4439:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "4431:4:36"
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
				  "src": "4273:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "4287:4:36",
				  "type": ""
				}
			  ],
			  "src": "4122:341:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4500:95:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4517:1:36",
						  "type": "",
						  "value": "0"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4524:3:36",
							  "type": "",
							  "value": "224"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "4529:10:36",
							  "type": "",
							  "value": "0x4e487b71"
							}
						  ],
						  "functionName": {
							"name": "shl",
							"nodeType": "YulIdentifier",
							"src": "4520:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4520:20:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4510:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4510:31:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4510:31:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4557:1:36",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4560:4:36",
						  "type": "",
						  "value": "0x11"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4550:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4550:15:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4550:15:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4581:1:36",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4584:4:36",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "4574:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4574:15:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4574:15:36"
				  }
				]
			  },
			  "name": "panic_error_0x11",
			  "nodeType": "YulFunctionDefinition",
			  "src": "4468:127:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4652:116:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4662:20:36",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "4677:1:36"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "4680:1:36"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "4673:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4673:9:36"
					},
					"variableNames": [
					  {
						"name": "product",
						"nodeType": "YulIdentifier",
						"src": "4662:7:36"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "4740:22:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "4742:16:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "4742:18:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "4742:18:36"
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
								  "src": "4711:1:36"
								}
							  ],
							  "functionName": {
								"name": "iszero",
								"nodeType": "YulIdentifier",
								"src": "4704:6:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4704:9:36"
							},
							{
							  "arguments": [
								{
								  "name": "y",
								  "nodeType": "YulIdentifier",
								  "src": "4718:1:36"
								},
								{
								  "arguments": [
									{
									  "name": "product",
									  "nodeType": "YulIdentifier",
									  "src": "4725:7:36"
									},
									{
									  "name": "x",
									  "nodeType": "YulIdentifier",
									  "src": "4734:1:36"
									}
								  ],
								  "functionName": {
									"name": "div",
									"nodeType": "YulIdentifier",
									"src": "4721:3:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "4721:15:36"
								}
							  ],
							  "functionName": {
								"name": "eq",
								"nodeType": "YulIdentifier",
								"src": "4715:2:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "4715:22:36"
							}
						  ],
						  "functionName": {
							"name": "or",
							"nodeType": "YulIdentifier",
							"src": "4701:2:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4701:37:36"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "4694:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4694:45:36"
					},
					"nodeType": "YulIf",
					"src": "4691:71:36"
				  }
				]
			  },
			  "name": "checked_mul_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "4631:1:36",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "4634:1:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "product",
				  "nodeType": "YulTypedName",
				  "src": "4640:7:36",
				  "type": ""
				}
			  ],
			  "src": "4600:168:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "4902:145:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "4912:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4924:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "4935:2:36",
						  "type": "",
						  "value": "64"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "4920:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4920:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "4912:4:36"
					  }
					]
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "4954:9:36"
						},
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "4965:6:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4947:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4947:25:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4947:25:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "4992:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5003:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "4988:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "4988:18:36"
						},
						{
						  "arguments": [
							{
							  "name": "value1",
							  "nodeType": "YulIdentifier",
							  "src": "5012:6:36"
							},
							{
							  "arguments": [
								{
								  "arguments": [
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "5028:3:36",
									  "type": "",
									  "value": "160"
									},
									{
									  "kind": "number",
									  "nodeType": "YulLiteral",
									  "src": "5033:1:36",
									  "type": "",
									  "value": "1"
									}
								  ],
								  "functionName": {
									"name": "shl",
									"nodeType": "YulIdentifier",
									"src": "5024:3:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "5024:11:36"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "5037:1:36",
								  "type": "",
								  "value": "1"
								}
							  ],
							  "functionName": {
								"name": "sub",
								"nodeType": "YulIdentifier",
								"src": "5020:3:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "5020:19:36"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "5008:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5008:32:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "4981:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "4981:60:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "4981:60:36"
				  }
				]
			  },
			  "name": "abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "headStart",
				  "nodeType": "YulTypedName",
				  "src": "4863:9:36",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "4874:6:36",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "4882:6:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "4893:4:36",
				  "type": ""
				}
			  ],
			  "src": "4773:274:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5226:163:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5243:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5254:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5236:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5236:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5236:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5277:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5288:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "5273:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5273:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5293:2:36",
						  "type": "",
						  "value": "13"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5266:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5266:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5266:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5316:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5327:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "5312:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5312:18:36"
						},
						{
						  "hexValue": "4d41504c454e46545f4f4e4c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "5332:15:36",
						  "type": "",
						  "value": "MAPLENFT_ONLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5305:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5305:43:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5305:43:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "5357:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5369:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5380:2:36",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5365:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5365:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "5357:4:36"
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
				  "src": "5203:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "5217:4:36",
				  "type": ""
				}
			  ],
			  "src": "5052:337:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5442:77:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "5452:16:36",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "5463:1:36"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "5466:1:36"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5459:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5459:9:36"
					},
					"variableNames": [
					  {
						"name": "sum",
						"nodeType": "YulIdentifier",
						"src": "5452:3:36"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "5491:22:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "5493:16:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "5493:18:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "5493:18:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "5483:1:36"
						},
						{
						  "name": "sum",
						  "nodeType": "YulIdentifier",
						  "src": "5486:3:36"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "5480:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5480:10:36"
					},
					"nodeType": "YulIf",
					"src": "5477:36:36"
				  }
				]
			  },
			  "name": "checked_add_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "5425:1:36",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "5428:1:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "sum",
				  "nodeType": "YulTypedName",
				  "src": "5434:3:36",
				  "type": ""
				}
			  ],
			  "src": "5394:125:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "5698:181:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5715:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5726:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5708:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5708:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5708:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5749:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5760:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "5745:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5745:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5765:2:36",
						  "type": "",
						  "value": "31"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5738:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5738:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5738:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "5788:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "5799:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "5784:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "5784:18:36"
						},
						{
						  "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "5804:33:36",
						  "type": "",
						  "value": "ERC20: mint to the zero address"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "5777:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5777:61:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "5777:61:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "5847:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "5859:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "5870:2:36",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "5855:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "5855:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "5847:4:36"
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
				  "src": "5675:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "5689:4:36",
				  "type": ""
				}
			  ],
			  "src": "5524:355:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6058:166:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "6075:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6086:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6068:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6068:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6068:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6109:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6120:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6105:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6105:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6125:2:36",
						  "type": "",
						  "value": "16"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6098:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6098:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6098:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "6148:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "6159:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "6144:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "6144:18:36"
						},
						{
						  "hexValue": "41424f56455f4d41585f535550504c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "6164:18:36",
						  "type": "",
						  "value": "ABOVE_MAX_SUPPLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "6137:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6137:46:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "6137:46:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "6192:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "6204:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6215:2:36",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "6200:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6200:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "6192:4:36"
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
				  "src": "6035:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "6049:4:36",
				  "type": ""
				}
			  ],
			  "src": "5884:340:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6293:358:36",
				"statements": [
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "6303:16:36",
					"value": {
					  "kind": "number",
					  "nodeType": "YulLiteral",
					  "src": "6318:1:36",
					  "type": "",
					  "value": "1"
					},
					"variables": [
					  {
						"name": "power_1",
						"nodeType": "YulTypedName",
						"src": "6307:7:36",
						"type": ""
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "6328:16:36",
					"value": {
					  "name": "power_1",
					  "nodeType": "YulIdentifier",
					  "src": "6337:7:36"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "6328:5:36"
					  }
					]
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "6353:13:36",
					"value": {
					  "name": "_base",
					  "nodeType": "YulIdentifier",
					  "src": "6361:5:36"
					},
					"variableNames": [
					  {
						"name": "base",
						"nodeType": "YulIdentifier",
						"src": "6353:4:36"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "6417:228:36",
					  "statements": [
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "6462:22:36",
							"statements": [
							  {
								"expression": {
								  "arguments": [],
								  "functionName": {
									"name": "panic_error_0x11",
									"nodeType": "YulIdentifier",
									"src": "6464:16:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "6464:18:36"
								},
								"nodeType": "YulExpressionStatement",
								"src": "6464:18:36"
							  }
							]
						  },
						  "condition": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "6437:4:36"
							  },
							  {
								"arguments": [
								  {
									"arguments": [
									  {
										"kind": "number",
										"nodeType": "YulLiteral",
										"src": "6451:1:36",
										"type": "",
										"value": "0"
									  }
									],
									"functionName": {
									  "name": "not",
									  "nodeType": "YulIdentifier",
									  "src": "6447:3:36"
									},
									"nodeType": "YulFunctionCall",
									"src": "6447:6:36"
								  },
								  {
									"name": "base",
									"nodeType": "YulIdentifier",
									"src": "6455:4:36"
								  }
								],
								"functionName": {
								  "name": "div",
								  "nodeType": "YulIdentifier",
								  "src": "6443:3:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "6443:17:36"
							  }
							],
							"functionName": {
							  "name": "gt",
							  "nodeType": "YulIdentifier",
							  "src": "6434:2:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "6434:27:36"
						  },
						  "nodeType": "YulIf",
						  "src": "6431:53:36"
						},
						{
						  "body": {
							"nodeType": "YulBlock",
							"src": "6523:29:36",
							"statements": [
							  {
								"nodeType": "YulAssignment",
								"src": "6525:25:36",
								"value": {
								  "arguments": [
									{
									  "name": "power",
									  "nodeType": "YulIdentifier",
									  "src": "6538:5:36"
									},
									{
									  "name": "base",
									  "nodeType": "YulIdentifier",
									  "src": "6545:4:36"
									}
								  ],
								  "functionName": {
									"name": "mul",
									"nodeType": "YulIdentifier",
									"src": "6534:3:36"
								  },
								  "nodeType": "YulFunctionCall",
								  "src": "6534:16:36"
								},
								"variableNames": [
								  {
									"name": "power",
									"nodeType": "YulIdentifier",
									"src": "6525:5:36"
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
								"src": "6504:8:36"
							  },
							  {
								"name": "power_1",
								"nodeType": "YulIdentifier",
								"src": "6514:7:36"
							  }
							],
							"functionName": {
							  "name": "and",
							  "nodeType": "YulIdentifier",
							  "src": "6500:3:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "6500:22:36"
						  },
						  "nodeType": "YulIf",
						  "src": "6497:55:36"
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "6565:23:36",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "6577:4:36"
							  },
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "6583:4:36"
							  }
							],
							"functionName": {
							  "name": "mul",
							  "nodeType": "YulIdentifier",
							  "src": "6573:3:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "6573:15:36"
						  },
						  "variableNames": [
							{
							  "name": "base",
							  "nodeType": "YulIdentifier",
							  "src": "6565:4:36"
							}
						  ]
						},
						{
						  "nodeType": "YulAssignment",
						  "src": "6601:34:36",
						  "value": {
							"arguments": [
							  {
								"name": "power_1",
								"nodeType": "YulIdentifier",
								"src": "6617:7:36"
							  },
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "6626:8:36"
							  }
							],
							"functionName": {
							  "name": "shr",
							  "nodeType": "YulIdentifier",
							  "src": "6613:3:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "6613:22:36"
						  },
						  "variableNames": [
							{
							  "name": "exponent",
							  "nodeType": "YulIdentifier",
							  "src": "6601:8:36"
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
						  "src": "6386:8:36"
						},
						{
						  "name": "power_1",
						  "nodeType": "YulIdentifier",
						  "src": "6396:7:36"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "6383:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6383:21:36"
					},
					"nodeType": "YulForLoop",
					"post": {
					  "nodeType": "YulBlock",
					  "src": "6405:3:36",
					  "statements": []
					},
					"pre": {
					  "nodeType": "YulBlock",
					  "src": "6379:3:36",
					  "statements": []
					},
					"src": "6375:270:36"
				  }
				]
			  },
			  "name": "checked_exp_helper",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "_base",
				  "nodeType": "YulTypedName",
				  "src": "6257:5:36",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "6264:8:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "6277:5:36",
				  "type": ""
				},
				{
				  "name": "base",
				  "nodeType": "YulTypedName",
				  "src": "6284:4:36",
				  "type": ""
				}
			  ],
			  "src": "6229:422:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "6715:747:36",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "6753:52:36",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "6767:10:36",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "6776:1:36",
							"type": "",
							"value": "1"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "6767:5:36"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "6790:5:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "6735:8:36"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "6728:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6728:16:36"
					},
					"nodeType": "YulIf",
					"src": "6725:80:36"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "6838:52:36",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "6852:10:36",
						  "value": {
							"kind": "number",
							"nodeType": "YulLiteral",
							"src": "6861:1:36",
							"type": "",
							"value": "0"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "6852:5:36"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "6875:5:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "6824:4:36"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "6817:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "6817:12:36"
					},
					"nodeType": "YulIf",
					"src": "6814:76:36"
				  },
				  {
					"cases": [
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "6926:52:36",
						  "statements": [
							{
							  "nodeType": "YulAssignment",
							  "src": "6940:10:36",
							  "value": {
								"kind": "number",
								"nodeType": "YulLiteral",
								"src": "6949:1:36",
								"type": "",
								"value": "1"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "6940:5:36"
								}
							  ]
							},
							{
							  "nodeType": "YulLeave",
							  "src": "6963:5:36"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "6919:59:36",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6924:1:36",
						  "type": "",
						  "value": "1"
						}
					  },
					  {
						"body": {
						  "nodeType": "YulBlock",
						  "src": "6994:123:36",
						  "statements": [
							{
							  "body": {
								"nodeType": "YulBlock",
								"src": "7029:22:36",
								"statements": [
								  {
									"expression": {
									  "arguments": [],
									  "functionName": {
										"name": "panic_error_0x11",
										"nodeType": "YulIdentifier",
										"src": "7031:16:36"
									  },
									  "nodeType": "YulFunctionCall",
									  "src": "7031:18:36"
									},
									"nodeType": "YulExpressionStatement",
									"src": "7031:18:36"
								  }
								]
							  },
							  "condition": {
								"arguments": [
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "7014:8:36"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "7024:3:36",
									"type": "",
									"value": "255"
								  }
								],
								"functionName": {
								  "name": "gt",
								  "nodeType": "YulIdentifier",
								  "src": "7011:2:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "7011:17:36"
							  },
							  "nodeType": "YulIf",
							  "src": "7008:43:36"
							},
							{
							  "nodeType": "YulAssignment",
							  "src": "7064:25:36",
							  "value": {
								"arguments": [
								  {
									"name": "exponent",
									"nodeType": "YulIdentifier",
									"src": "7077:8:36"
								  },
								  {
									"kind": "number",
									"nodeType": "YulLiteral",
									"src": "7087:1:36",
									"type": "",
									"value": "1"
								  }
								],
								"functionName": {
								  "name": "shl",
								  "nodeType": "YulIdentifier",
								  "src": "7073:3:36"
								},
								"nodeType": "YulFunctionCall",
								"src": "7073:16:36"
							  },
							  "variableNames": [
								{
								  "name": "power",
								  "nodeType": "YulIdentifier",
								  "src": "7064:5:36"
								}
							  ]
							},
							{
							  "nodeType": "YulLeave",
							  "src": "7102:5:36"
							}
						  ]
						},
						"nodeType": "YulCase",
						"src": "6987:130:36",
						"value": {
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "6992:1:36",
						  "type": "",
						  "value": "2"
						}
					  }
					],
					"expression": {
					  "name": "base",
					  "nodeType": "YulIdentifier",
					  "src": "6906:4:36"
					},
					"nodeType": "YulSwitch",
					"src": "6899:218:36"
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7215:70:36",
					  "statements": [
						{
						  "nodeType": "YulAssignment",
						  "src": "7229:28:36",
						  "value": {
							"arguments": [
							  {
								"name": "base",
								"nodeType": "YulIdentifier",
								"src": "7242:4:36"
							  },
							  {
								"name": "exponent",
								"nodeType": "YulIdentifier",
								"src": "7248:8:36"
							  }
							],
							"functionName": {
							  "name": "exp",
							  "nodeType": "YulIdentifier",
							  "src": "7238:3:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "7238:19:36"
						  },
						  "variableNames": [
							{
							  "name": "power",
							  "nodeType": "YulIdentifier",
							  "src": "7229:5:36"
							}
						  ]
						},
						{
						  "nodeType": "YulLeave",
						  "src": "7270:5:36"
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
								  "src": "7139:4:36"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "7145:2:36",
								  "type": "",
								  "value": "11"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "7136:2:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7136:12:36"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "7153:8:36"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "7163:2:36",
								  "type": "",
								  "value": "78"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "7150:2:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7150:16:36"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "7132:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7132:35:36"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "name": "base",
								  "nodeType": "YulIdentifier",
								  "src": "7176:4:36"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "7182:3:36",
								  "type": "",
								  "value": "307"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "7173:2:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7173:13:36"
							},
							{
							  "arguments": [
								{
								  "name": "exponent",
								  "nodeType": "YulIdentifier",
								  "src": "7191:8:36"
								},
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "7201:2:36",
								  "type": "",
								  "value": "32"
								}
							  ],
							  "functionName": {
								"name": "lt",
								"nodeType": "YulIdentifier",
								"src": "7188:2:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7188:16:36"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "7169:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7169:36:36"
						}
					  ],
					  "functionName": {
						"name": "or",
						"nodeType": "YulIdentifier",
						"src": "7129:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7129:77:36"
					},
					"nodeType": "YulIf",
					"src": "7126:159:36"
				  },
				  {
					"nodeType": "YulVariableDeclaration",
					"src": "7294:57:36",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "7336:4:36"
						},
						{
						  "name": "exponent",
						  "nodeType": "YulIdentifier",
						  "src": "7342:8:36"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_helper",
						"nodeType": "YulIdentifier",
						"src": "7317:18:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7317:34:36"
					},
					"variables": [
					  {
						"name": "power_1",
						"nodeType": "YulTypedName",
						"src": "7298:7:36",
						"type": ""
					  },
					  {
						"name": "base_1",
						"nodeType": "YulTypedName",
						"src": "7307:6:36",
						"type": ""
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "7396:22:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "7398:16:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "7398:18:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "7398:18:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "power_1",
						  "nodeType": "YulIdentifier",
						  "src": "7366:7:36"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "7383:1:36",
								  "type": "",
								  "value": "0"
								}
							  ],
							  "functionName": {
								"name": "not",
								"nodeType": "YulIdentifier",
								"src": "7379:3:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "7379:6:36"
							},
							{
							  "name": "base_1",
							  "nodeType": "YulIdentifier",
							  "src": "7387:6:36"
							}
						  ],
						  "functionName": {
							"name": "div",
							"nodeType": "YulIdentifier",
							"src": "7375:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7375:19:36"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "7363:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7363:32:36"
					},
					"nodeType": "YulIf",
					"src": "7360:58:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "7427:29:36",
					"value": {
					  "arguments": [
						{
						  "name": "power_1",
						  "nodeType": "YulIdentifier",
						  "src": "7440:7:36"
						},
						{
						  "name": "base_1",
						  "nodeType": "YulIdentifier",
						  "src": "7449:6:36"
						}
					  ],
					  "functionName": {
						"name": "mul",
						"nodeType": "YulIdentifier",
						"src": "7436:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7436:20:36"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "7427:5:36"
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
				  "src": "6686:4:36",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "6692:8:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "6705:5:36",
				  "type": ""
				}
			  ],
			  "src": "6656:806:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7535:72:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "7545:56:36",
					"value": {
					  "arguments": [
						{
						  "name": "base",
						  "nodeType": "YulIdentifier",
						  "src": "7575:4:36"
						},
						{
						  "arguments": [
							{
							  "name": "exponent",
							  "nodeType": "YulIdentifier",
							  "src": "7585:8:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "7595:4:36",
							  "type": "",
							  "value": "0xff"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "7581:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7581:19:36"
						}
					  ],
					  "functionName": {
						"name": "checked_exp_unsigned",
						"nodeType": "YulIdentifier",
						"src": "7554:20:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7554:47:36"
					},
					"variableNames": [
					  {
						"name": "power",
						"nodeType": "YulIdentifier",
						"src": "7545:5:36"
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
				  "src": "7506:4:36",
				  "type": ""
				},
				{
				  "name": "exponent",
				  "nodeType": "YulTypedName",
				  "src": "7512:8:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "power",
				  "nodeType": "YulTypedName",
				  "src": "7525:5:36",
				  "type": ""
				}
			  ],
			  "src": "7467:140:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "7786:161:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "7803:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7814:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "7796:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7796:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7796:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "7837:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "7848:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "7833:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7833:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7853:2:36",
						  "type": "",
						  "value": "11"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "7826:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7826:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7826:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "7876:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "7887:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "7872:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "7872:18:36"
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "7892:13:36",
						  "type": "",
						  "value": "WRITE_ONCE!"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "7865:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7865:41:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "7865:41:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "7915:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "7927:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "7938:2:36",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "7923:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "7923:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "7915:4:36"
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
				  "src": "7763:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "7777:4:36",
				  "type": ""
				}
			  ],
			  "src": "7612:335:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8126:165:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8143:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8154:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8136:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8136:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8136:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8177:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8188:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8173:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8173:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8193:2:36",
						  "type": "",
						  "value": "15"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8166:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8166:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8166:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8216:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8227:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8212:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8212:18:36"
						},
						{
						  "hexValue": "434f4e54524143545f504155534544",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "8232:17:36",
						  "type": "",
						  "value": "CONTRACT_PAUSED"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8205:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8205:45:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8205:45:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8259:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8271:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8282:2:36",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "8267:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8267:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "8259:4:36"
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
				  "src": "8103:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "8117:4:36",
				  "type": ""
				}
			  ],
			  "src": "7952:339:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8470:168:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8487:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8498:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8480:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8480:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8480:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8521:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8532:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8517:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8517:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8537:2:36",
						  "type": "",
						  "value": "18"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8510:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8510:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8510:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8560:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8571:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8556:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8556:18:36"
						},
						{
						  "hexValue": "4e4f5f415641494c41424c455f46554e4453",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "8576:20:36",
						  "type": "",
						  "value": "NO_AVAILABLE_FUNDS"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8549:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8549:48:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8549:48:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "8606:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8618:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8629:2:36",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "8614:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8614:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "8606:4:36"
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
				  "src": "8447:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "8461:4:36",
				  "type": ""
				}
			  ],
			  "src": "8296:342:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "8817:227:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "8834:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8845:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8827:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8827:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8827:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8868:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8879:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8864:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8864:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "8884:2:36",
						  "type": "",
						  "value": "37"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8857:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8857:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8857:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8907:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8918:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8903:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8903:18:36"
						},
						{
						  "hexValue": "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "8923:34:36",
						  "type": "",
						  "value": "ERC20: decreased allowance below"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8896:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8896:62:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8896:62:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "8978:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "8989:2:36",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "8974:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "8974:18:36"
						},
						{
						  "hexValue": "207a65726f",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "8994:7:36",
						  "type": "",
						  "value": " zero"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "8967:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "8967:35:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "8967:35:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9011:27:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9023:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9034:3:36",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9019:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9019:19:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "9011:4:36"
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
				  "src": "8794:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "8808:4:36",
				  "type": ""
				}
			  ],
			  "src": "8643:401:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9223:170:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9240:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9251:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9233:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9233:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9233:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9274:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9285:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9270:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9270:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9290:2:36",
						  "type": "",
						  "value": "20"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9263:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9263:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9263:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9313:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9324:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9309:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9309:18:36"
						},
						{
						  "hexValue": "524f555445525f4f525f4d41504c455f4f4e4c59",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "9329:22:36",
						  "type": "",
						  "value": "ROUTER_OR_MAPLE_ONLY"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9302:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9302:50:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9302:50:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9361:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9373:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9384:2:36",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9369:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9369:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "9361:4:36"
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
				  "src": "9200:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "9214:4:36",
				  "type": ""
				}
			  ],
			  "src": "9049:344:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9572:226:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9589:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9600:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9582:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9582:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9582:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9623:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9634:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9619:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9619:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9639:2:36",
						  "type": "",
						  "value": "36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9612:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9612:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9612:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9662:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9673:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9658:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9658:18:36"
						},
						{
						  "hexValue": "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "9678:34:36",
						  "type": "",
						  "value": "ERC20: approve from the zero add"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9651:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9651:62:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9651:62:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "9733:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "9744:2:36",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "9729:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "9729:18:36"
						},
						{
						  "hexValue": "72657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "9749:6:36",
						  "type": "",
						  "value": "ress"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9722:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9722:34:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9722:34:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "9765:27:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9777:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "9788:3:36",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "9773:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9773:19:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "9765:4:36"
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
				  "src": "9549:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "9563:4:36",
				  "type": ""
				}
			  ],
			  "src": "9398:400:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "9977:224:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "9994:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10005:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "9987:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "9987:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "9987:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10028:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10039:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10024:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10024:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10044:2:36",
						  "type": "",
						  "value": "34"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10017:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10017:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10017:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10067:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10078:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10063:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10063:18:36"
						},
						{
						  "hexValue": "45524332303a20617070726f766520746f20746865207a65726f206164647265",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "10083:34:36",
						  "type": "",
						  "value": "ERC20: approve to the zero addre"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10056:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10056:62:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10056:62:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10138:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10149:2:36",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10134:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10134:18:36"
						},
						{
						  "hexValue": "7373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "10154:4:36",
						  "type": "",
						  "value": "ss"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10127:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10127:32:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10127:32:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10168:27:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10180:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10191:3:36",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10176:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10176:19:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10168:4:36"
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
				  "src": "9954:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "9968:4:36",
				  "type": ""
				}
			  ],
			  "src": "9803:398:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10380:227:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10397:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10408:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10390:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10390:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10390:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10431:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10442:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10427:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10427:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10447:2:36",
						  "type": "",
						  "value": "37"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10420:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10420:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10420:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10470:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10481:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10466:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10466:18:36"
						},
						{
						  "hexValue": "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "10486:34:36",
						  "type": "",
						  "value": "ERC20: transfer from the zero ad"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10459:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10459:62:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10459:62:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10541:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10552:2:36",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10537:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10537:18:36"
						},
						{
						  "hexValue": "6472657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "10557:7:36",
						  "type": "",
						  "value": "dress"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10530:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10530:35:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10530:35:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10574:27:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10586:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10597:3:36",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10582:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10582:19:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10574:4:36"
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
				  "src": "10357:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "10371:4:36",
				  "type": ""
				}
			  ],
			  "src": "10206:401:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "10786:225:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10803:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10814:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10796:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10796:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10796:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10837:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10848:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10833:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10833:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "10853:2:36",
						  "type": "",
						  "value": "35"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10826:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10826:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10826:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10876:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10887:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10872:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10872:18:36"
						},
						{
						  "hexValue": "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "10892:34:36",
						  "type": "",
						  "value": "ERC20: transfer to the zero addr"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10865:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10865:62:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10865:62:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "10947:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "10958:2:36",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "10943:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "10943:18:36"
						},
						{
						  "hexValue": "657373",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "10963:5:36",
						  "type": "",
						  "value": "ess"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "10936:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10936:33:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "10936:33:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "10978:27:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "10990:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11001:3:36",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "10986:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "10986:19:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "10978:4:36"
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
				  "src": "10763:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "10777:4:36",
				  "type": ""
				}
			  ],
			  "src": "10612:399:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11190:228:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11207:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11218:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11200:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11200:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11200:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11241:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11252:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11237:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11237:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11257:2:36",
						  "type": "",
						  "value": "38"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11230:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11230:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11230:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11280:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11291:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11276:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11276:18:36"
						},
						{
						  "hexValue": "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "11296:34:36",
						  "type": "",
						  "value": "ERC20: transfer amount exceeds b"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11269:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11269:62:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11269:62:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11351:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11362:2:36",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11347:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11347:18:36"
						},
						{
						  "hexValue": "616c616e6365",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "11367:8:36",
						  "type": "",
						  "value": "alance"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11340:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11340:36:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11340:36:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "11385:27:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11397:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11408:3:36",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11393:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11393:19:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "11385:4:36"
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
				  "src": "11167:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "11181:4:36",
				  "type": ""
				}
			  ],
			  "src": "11016:402:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11597:223:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11614:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11625:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11607:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11607:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11607:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11648:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11659:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11644:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11644:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11664:2:36",
						  "type": "",
						  "value": "33"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11637:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11637:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11637:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11687:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11698:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11683:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11683:18:36"
						},
						{
						  "hexValue": "45524332303a206275726e2066726f6d20746865207a65726f20616464726573",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "11703:34:36",
						  "type": "",
						  "value": "ERC20: burn from the zero addres"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11676:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11676:62:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11676:62:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "11758:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "11769:2:36",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "11754:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "11754:18:36"
						},
						{
						  "hexValue": "73",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "11774:3:36",
						  "type": "",
						  "value": "s"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "11747:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11747:31:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "11747:31:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "11787:27:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "11799:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "11810:3:36",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "11795:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "11795:19:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "11787:4:36"
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
				  "src": "11574:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "11588:4:36",
				  "type": ""
				}
			  ],
			  "src": "11423:397:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "11999:224:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "12016:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12027:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12009:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12009:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12009:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "12050:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12061:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12046:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12046:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12066:2:36",
						  "type": "",
						  "value": "34"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12039:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12039:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12039:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "12089:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12100:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12085:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12085:18:36"
						},
						{
						  "hexValue": "45524332303a206275726e20616d6f756e7420657863656564732062616c616e",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "12105:34:36",
						  "type": "",
						  "value": "ERC20: burn amount exceeds balan"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12078:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12078:62:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12078:62:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "12160:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12171:2:36",
							  "type": "",
							  "value": "96"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12156:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12156:18:36"
						},
						{
						  "hexValue": "6365",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "12176:4:36",
						  "type": "",
						  "value": "ce"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12149:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12149:32:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12149:32:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "12190:27:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "12202:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12213:3:36",
						  "type": "",
						  "value": "128"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "12198:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12198:19:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "12190:4:36"
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
				  "src": "11976:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "11990:4:36",
				  "type": ""
				}
			  ],
			  "src": "11825:398:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12277:79:36",
				"statements": [
				  {
					"nodeType": "YulAssignment",
					"src": "12287:17:36",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "12299:1:36"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "12302:1:36"
						}
					  ],
					  "functionName": {
						"name": "sub",
						"nodeType": "YulIdentifier",
						"src": "12295:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12295:9:36"
					},
					"variableNames": [
					  {
						"name": "diff",
						"nodeType": "YulIdentifier",
						"src": "12287:4:36"
					  }
					]
				  },
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "12328:22:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "12330:16:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "12330:18:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "12330:18:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "diff",
						  "nodeType": "YulIdentifier",
						  "src": "12319:4:36"
						},
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "12325:1:36"
						}
					  ],
					  "functionName": {
						"name": "gt",
						"nodeType": "YulIdentifier",
						"src": "12316:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12316:11:36"
					},
					"nodeType": "YulIf",
					"src": "12313:37:36"
				  }
				]
			  },
			  "name": "checked_sub_t_uint256",
			  "nodeType": "YulFunctionDefinition",
			  "parameters": [
				{
				  "name": "x",
				  "nodeType": "YulTypedName",
				  "src": "12259:1:36",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "12262:1:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "diff",
				  "nodeType": "YulTypedName",
				  "src": "12268:4:36",
				  "type": ""
				}
			  ],
			  "src": "12228:128:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12535:179:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "12552:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12563:2:36",
						  "type": "",
						  "value": "32"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12545:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12545:21:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12545:21:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "12586:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12597:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12582:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12582:18:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12602:2:36",
						  "type": "",
						  "value": "29"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12575:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12575:30:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12575:30:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "headStart",
							  "nodeType": "YulIdentifier",
							  "src": "12625:9:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12636:2:36",
							  "type": "",
							  "value": "64"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "12621:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12621:18:36"
						},
						{
						  "hexValue": "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
						  "kind": "string",
						  "nodeType": "YulLiteral",
						  "src": "12641:31:36",
						  "type": "",
						  "value": "ERC20: insufficient allowance"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12614:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12614:59:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12614:59:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "12682:26:36",
					"value": {
					  "arguments": [
						{
						  "name": "headStart",
						  "nodeType": "YulIdentifier",
						  "src": "12694:9:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12705:2:36",
						  "type": "",
						  "value": "96"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "12690:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12690:18:36"
					},
					"variableNames": [
					  {
						"name": "tail",
						"nodeType": "YulIdentifier",
						"src": "12682:4:36"
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
				  "src": "12512:9:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "tail",
				  "nodeType": "YulTypedName",
				  "src": "12526:4:36",
				  "type": ""
				}
			  ],
			  "src": "12361:353:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12751:95:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12768:1:36",
						  "type": "",
						  "value": "0"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12775:3:36",
							  "type": "",
							  "value": "224"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "12780:10:36",
							  "type": "",
							  "value": "0x4e487b71"
							}
						  ],
						  "functionName": {
							"name": "shl",
							"nodeType": "YulIdentifier",
							"src": "12771:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "12771:20:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12761:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12761:31:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12761:31:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12808:1:36",
						  "type": "",
						  "value": "4"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12811:4:36",
						  "type": "",
						  "value": "0x12"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "12801:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12801:15:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12801:15:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12832:1:36",
						  "type": "",
						  "value": "0"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "12835:4:36",
						  "type": "",
						  "value": "0x24"
						}
					  ],
					  "functionName": {
						"name": "revert",
						"nodeType": "YulIdentifier",
						"src": "12825:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12825:15:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "12825:15:36"
				  }
				]
			  },
			  "name": "panic_error_0x12",
			  "nodeType": "YulFunctionDefinition",
			  "src": "12719:127:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "12897:74:36",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "12920:22:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x12",
							  "nodeType": "YulIdentifier",
							  "src": "12922:16:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "12922:18:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "12922:18:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "12917:1:36"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "12910:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12910:9:36"
					},
					"nodeType": "YulIf",
					"src": "12907:35:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "12951:14:36",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "12960:1:36"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "12963:1:36"
						}
					  ],
					  "functionName": {
						"name": "div",
						"nodeType": "YulIdentifier",
						"src": "12956:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "12956:9:36"
					},
					"variableNames": [
					  {
						"name": "r",
						"nodeType": "YulIdentifier",
						"src": "12951:1:36"
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
				  "src": "12882:1:36",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "12885:1:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "r",
				  "nodeType": "YulTypedName",
				  "src": "12891:1:36",
				  "type": ""
				}
			  ],
			  "src": "12851:120:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13023:88:36",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "13054:22:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x11",
							  "nodeType": "YulIdentifier",
							  "src": "13056:16:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "13056:18:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "13056:18:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "13039:5:36"
						},
						{
						  "arguments": [
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "13050:1:36",
							  "type": "",
							  "value": "0"
							}
						  ],
						  "functionName": {
							"name": "not",
							"nodeType": "YulIdentifier",
							"src": "13046:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13046:6:36"
						}
					  ],
					  "functionName": {
						"name": "eq",
						"nodeType": "YulIdentifier",
						"src": "13036:2:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13036:17:36"
					},
					"nodeType": "YulIf",
					"src": "13033:43:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13085:20:36",
					"value": {
					  "arguments": [
						{
						  "name": "value",
						  "nodeType": "YulIdentifier",
						  "src": "13096:5:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13103:1:36",
						  "type": "",
						  "value": "1"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "13092:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13092:13:36"
					},
					"variableNames": [
					  {
						"name": "ret",
						"nodeType": "YulIdentifier",
						"src": "13085:3:36"
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
				  "src": "13005:5:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "ret",
				  "nodeType": "YulTypedName",
				  "src": "13015:3:36",
				  "type": ""
				}
			  ],
			  "src": "12976:135:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13291:184:36",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "13308:3:36"
						},
						{
						  "name": "value0",
						  "nodeType": "YulIdentifier",
						  "src": "13313:6:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "13301:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13301:19:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13301:19:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "pos",
							  "nodeType": "YulIdentifier",
							  "src": "13340:3:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "13345:2:36",
							  "type": "",
							  "value": "32"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "13336:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13336:12:36"
						},
						{
						  "arguments": [
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "13358:2:36",
								  "type": "",
								  "value": "96"
								},
								{
								  "name": "value1",
								  "nodeType": "YulIdentifier",
								  "src": "13362:6:36"
								}
							  ],
							  "functionName": {
								"name": "shl",
								"nodeType": "YulIdentifier",
								"src": "13354:3:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "13354:15:36"
							},
							{
							  "arguments": [
								{
								  "kind": "number",
								  "nodeType": "YulLiteral",
								  "src": "13375:26:36",
								  "type": "",
								  "value": "0xffffffffffffffffffffffff"
								}
							  ],
							  "functionName": {
								"name": "not",
								"nodeType": "YulIdentifier",
								"src": "13371:3:36"
							  },
							  "nodeType": "YulFunctionCall",
							  "src": "13371:31:36"
							}
						  ],
						  "functionName": {
							"name": "and",
							"nodeType": "YulIdentifier",
							"src": "13350:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13350:53:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "13329:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13329:75:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13329:75:36"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "name": "pos",
							  "nodeType": "YulIdentifier",
							  "src": "13424:3:36"
							},
							{
							  "kind": "number",
							  "nodeType": "YulLiteral",
							  "src": "13429:2:36",
							  "type": "",
							  "value": "52"
							}
						  ],
						  "functionName": {
							"name": "add",
							"nodeType": "YulIdentifier",
							"src": "13420:3:36"
						  },
						  "nodeType": "YulFunctionCall",
						  "src": "13420:12:36"
						},
						{
						  "name": "value2",
						  "nodeType": "YulIdentifier",
						  "src": "13434:6:36"
						}
					  ],
					  "functionName": {
						"name": "mstore",
						"nodeType": "YulIdentifier",
						"src": "13413:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13413:28:36"
					},
					"nodeType": "YulExpressionStatement",
					"src": "13413:28:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13450:19:36",
					"value": {
					  "arguments": [
						{
						  "name": "pos",
						  "nodeType": "YulIdentifier",
						  "src": "13461:3:36"
						},
						{
						  "kind": "number",
						  "nodeType": "YulLiteral",
						  "src": "13466:2:36",
						  "type": "",
						  "value": "84"
						}
					  ],
					  "functionName": {
						"name": "add",
						"nodeType": "YulIdentifier",
						"src": "13457:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13457:12:36"
					},
					"variableNames": [
					  {
						"name": "end",
						"nodeType": "YulIdentifier",
						"src": "13450:3:36"
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
				  "src": "13251:3:36",
				  "type": ""
				},
				{
				  "name": "value2",
				  "nodeType": "YulTypedName",
				  "src": "13256:6:36",
				  "type": ""
				},
				{
				  "name": "value1",
				  "nodeType": "YulTypedName",
				  "src": "13264:6:36",
				  "type": ""
				},
				{
				  "name": "value0",
				  "nodeType": "YulTypedName",
				  "src": "13272:6:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "end",
				  "nodeType": "YulTypedName",
				  "src": "13283:3:36",
				  "type": ""
				}
			  ],
			  "src": "13116:359:36"
			},
			{
			  "body": {
				"nodeType": "YulBlock",
				"src": "13518:74:36",
				"statements": [
				  {
					"body": {
					  "nodeType": "YulBlock",
					  "src": "13541:22:36",
					  "statements": [
						{
						  "expression": {
							"arguments": [],
							"functionName": {
							  "name": "panic_error_0x12",
							  "nodeType": "YulIdentifier",
							  "src": "13543:16:36"
							},
							"nodeType": "YulFunctionCall",
							"src": "13543:18:36"
						  },
						  "nodeType": "YulExpressionStatement",
						  "src": "13543:18:36"
						}
					  ]
					},
					"condition": {
					  "arguments": [
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "13538:1:36"
						}
					  ],
					  "functionName": {
						"name": "iszero",
						"nodeType": "YulIdentifier",
						"src": "13531:6:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13531:9:36"
					},
					"nodeType": "YulIf",
					"src": "13528:35:36"
				  },
				  {
					"nodeType": "YulAssignment",
					"src": "13572:14:36",
					"value": {
					  "arguments": [
						{
						  "name": "x",
						  "nodeType": "YulIdentifier",
						  "src": "13581:1:36"
						},
						{
						  "name": "y",
						  "nodeType": "YulIdentifier",
						  "src": "13584:1:36"
						}
					  ],
					  "functionName": {
						"name": "mod",
						"nodeType": "YulIdentifier",
						"src": "13577:3:36"
					  },
					  "nodeType": "YulFunctionCall",
					  "src": "13577:9:36"
					},
					"variableNames": [
					  {
						"name": "r",
						"nodeType": "YulIdentifier",
						"src": "13572:1:36"
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
				  "src": "13503:1:36",
				  "type": ""
				},
				{
				  "name": "y",
				  "nodeType": "YulTypedName",
				  "src": "13506:1:36",
				  "type": ""
				}
			  ],
			  "returnVariables": [
				{
				  "name": "r",
				  "nodeType": "YulTypedName",
				  "src": "13512:1:36",
				  "type": ""
				}
			  ],
			  "src": "13480:112:36"
			}
		  ]
		},
		"contents": "{\n    { }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        mstore(headStart, _1)\n        let length := mload(value0)\n        mstore(add(headStart, _1), length)\n        let i := 0\n        for { } lt(i, length) { i := add(i, _1) }\n        {\n            mstore(add(add(headStart, i), 64), mload(add(add(value0, i), _1)))\n        }\n        mstore(add(add(headStart, length), 64), 0)\n        tail := add(add(headStart, and(add(length, 31), not(31))), 64)\n    }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_decode_tuple_t_contract$_LiquidityPool_$6665(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        value2 := calldataload(add(headStart, 64))\n    }\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xff))\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, sub(shl(160, 1), 1)))\n    }\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function abi_encode_tuple_t_stringliteral_332c2c4a4e8cf36d021be45f74d1ccb8e6dd967e1a7eddb48fb5f768bbaf6e20__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 10)\n        mstore(add(headStart, 64), \"OWNER_ONLY\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_69da8cc69c0984fd8c185c473ebdc9eb452b0601e0f53736861e55728e11af9c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 17)\n        mstore(add(headStart, 64), \"FUNDS_MOVED_TO_LP\")\n        tail := add(headStart, 96)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), and(value1, sub(shl(160, 1), 1)))\n    }\n    function abi_encode_tuple_t_stringliteral_da08d980fc7c5603383d74e243b12135e5165a4fb0dcdd7272ce5494557644a2__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 13)\n        mstore(add(headStart, 64), \"MAPLENFT_ONLY\")\n        tail := add(headStart, 96)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 31)\n        mstore(add(headStart, 64), \"ERC20: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_e95a03f4dfb504d35adac20cf1ab6de37e8ddb10ba2d3fdb8d03887f295e6fff__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 16)\n        mstore(add(headStart, 64), \"ABOVE_MAX_SUPPLY\")\n        tail := add(headStart, 96)\n    }\n    function checked_exp_helper(_base, exponent) -> power, base\n    {\n        let power_1 := 1\n        power := power_1\n        base := _base\n        for { } gt(exponent, power_1) { }\n        {\n            if gt(base, div(not(0), base)) { panic_error_0x11() }\n            if and(exponent, power_1) { power := mul(power, base) }\n            base := mul(base, base)\n            exponent := shr(power_1, exponent)\n        }\n    }\n    function checked_exp_unsigned(base, exponent) -> power\n    {\n        if iszero(exponent)\n        {\n            power := 1\n            leave\n        }\n        if iszero(base)\n        {\n            power := 0\n            leave\n        }\n        switch base\n        case 1 {\n            power := 1\n            leave\n        }\n        case 2 {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := shl(exponent, 1)\n            leave\n        }\n        if or(and(lt(base, 11), lt(exponent, 78)), and(lt(base, 307), lt(exponent, 32)))\n        {\n            power := exp(base, exponent)\n            leave\n        }\n        let power_1, base_1 := checked_exp_helper(base, exponent)\n        if gt(power_1, div(not(0), base_1)) { panic_error_0x11() }\n        power := mul(power_1, base_1)\n    }\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power\n    {\n        power := checked_exp_unsigned(base, and(exponent, 0xff))\n    }\n    function abi_encode_tuple_t_stringliteral_d20ef5a0b3eb7572212dd705952af2dea2edd146b80d38c363f6e33521240db7__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 11)\n        mstore(add(headStart, 64), \"WRITE_ONCE!\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_147b5a380f6f0270a2f69850af8b14ad13a2da1ab5eeb54ef942363f06fef7e3__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 15)\n        mstore(add(headStart, 64), \"CONTRACT_PAUSED\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_8aaa7eb86af38c74919d2f7a64d4b1829646635b5f4987e27559457b4d8d2c64__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 18)\n        mstore(add(headStart, 64), \"NO_AVAILABLE_FUNDS\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC20: decreased allowance below\")\n        mstore(add(headStart, 96), \" zero\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_f4e43f872d3f27c22c685326e7d218683b7ec247c8302b97e474d8c376fda25c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 20)\n        mstore(add(headStart, 64), \"ROUTER_OR_MAPLE_ONLY\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"ERC20: approve from the zero add\")\n        mstore(add(headStart, 96), \"ress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC20: approve to the zero addre\")\n        mstore(add(headStart, 96), \"ss\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC20: transfer from the zero ad\")\n        mstore(add(headStart, 96), \"dress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 35)\n        mstore(add(headStart, 64), \"ERC20: transfer to the zero addr\")\n        mstore(add(headStart, 96), \"ess\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"ERC20: transfer amount exceeds b\")\n        mstore(add(headStart, 96), \"alance\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_b16788493b576042bb52c50ed56189e0b250db113c7bfb1c3897d25cf9632d7f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"ERC20: burn from the zero addres\")\n        mstore(add(headStart, 96), \"s\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_149b126e7125232b4200af45303d04fba8b74653b1a295a6a561a528c33fefdd__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"ERC20: burn amount exceeds balan\")\n        mstore(add(headStart, 96), \"ce\")\n        tail := add(headStart, 128)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 29)\n        mstore(add(headStart, 64), \"ERC20: insufficient allowance\")\n        tail := add(headStart, 96)\n    }\n    function panic_error_0x12()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n    function checked_div_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := div(x, y)\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n    function abi_encode_tuple_packed_t_uint256_t_address_t_uint256__to_t_uint256_t_address_t_uint256__nonPadded_inplace_fromStack_reversed(pos, value2, value1, value0) -> end\n    {\n        mstore(pos, value0)\n        mstore(add(pos, 32), and(shl(96, value1), not(0xffffffffffffffffffffffff)))\n        mstore(add(pos, 52), value2)\n        end := add(pos, 84)\n    }\n    function mod_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n}",
		"id": 36,
		"language": "Yul",
		"name": "#utility.yul"
	  }
	],
	"sourceMap": "149:8175:27:-:0;;;668:26;;;-1:-1:-1;;668:26:27;;;;;;976:16;;1023:2;998:27;;1317:323;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1978:113:9;;;;;;;;;;;;;-1:-1:-1;;;1978:113:9;;;;;;;;;;;;;;;;-1:-1:-1;;;1978:113:9;;;2052:5;2044;:13;;;;;;:::i;:::-;-1:-1:-1;2067:7:9;:17;2077:7;2067;:17;:::i;:::-;-1:-1:-1;1418:10:27::1;::::0;-1:-1:-1;;3175:2:9;;3093:91;1418:10:27::1;1414:14;::::0;:2:::1;:14;:::i;:::-;1404:24;::::0;:7:::1;:24;:::i;:::-;1391:10;:37:::0;;;1439:32:::1;::::0;1453:4:::1;::::0;1439:5:::1;:32::i;:::-;1482:5;:18:::0;;-1:-1:-1;;;;;;1482:18:27::1;1490:10;1482:18:::0;;;::::1;::::0;;;::::1;::::0;;;;1511:14:::1;:25:::0;;-1:-1:-1;;;;;;1511:25:27::1;-1:-1:-1::0;;;;;1511:25:27;;::::1;;::::0;;1594:5;::::1;;-1:-1:-1::0;1580:20:27;;;:13:::1;:20;::::0;;;;:27;;-1:-1:-1;;1580:27:27::1;-1:-1:-1::0;1580:27:27::1;::::0;;149:8175;;8402:389:9;-1:-1:-1;;;;;8485:21:9;;8477:65;;;;-1:-1:-1;;;8477:65:9;;4928:2:36;8477:65:9;;;4910:21:36;4967:2;4947:18;;;4940:30;5006:33;4986:18;;;4979:61;5057:18;;8477:65:9;;;;;;;;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8645:18:9;;:9;:18;;;;;;;;;;:28;;8667:6;;8645:9;:28;;8667:6;;8645:28;:::i;:::-;;;;-1:-1:-1;;8688:37:9;;5362:25:36;;;-1:-1:-1;;;;;8688:37:9;;;8705:1;;8688:37;;5350:2:36;5335:18;8688:37:9;;;;;;;8402:389;;:::o;11786:121::-;;;;:::o;14:298:36:-;92:6;145:2;133:9;124:7;120:23;116:32;113:52;;;161:1;158;151:12;113:52;187:16;;-1:-1:-1;;;;;232:31:36;;222:42;;212:70;;278:1;275;268:12;212:70;301:5;14:298;-1:-1:-1;;;14:298:36:o;317:127::-;378:10;373:3;369:20;366:1;359:31;409:4;406:1;399:15;433:4;430:1;423:15;449:380;528:1;524:12;;;;571;;;592:61;;646:4;638:6;634:17;624:27;;592:61;699:2;691:6;688:14;668:18;665:38;662:161;;745:10;740:3;736:20;733:1;726:31;780:4;777:1;770:15;808:4;805:1;798:15;662:161;;449:380;;;:::o;960:545::-;1062:2;1057:3;1054:11;1051:448;;;1098:1;1123:5;1119:2;1112:17;1168:4;1164:2;1154:19;1238:2;1226:10;1222:19;1219:1;1215:27;1209:4;1205:38;1274:4;1262:10;1259:20;1256:47;;;-1:-1:-1;1297:4:36;1256:47;1352:2;1347:3;1343:12;1340:1;1336:20;1330:4;1326:31;1316:41;;1407:82;1425:2;1418:5;1415:13;1407:82;;;1470:17;;;1451:1;1440:13;1407:82;;;1411:3;;;960:545;;;:::o;1681:1352::-;1801:10;;-1:-1:-1;;;;;1823:30:36;;1820:56;;;1856:18;;:::i;:::-;1885:97;1975:6;1935:38;1967:4;1961:11;1935:38;:::i;:::-;1929:4;1885:97;:::i;:::-;2037:4;;2101:2;2090:14;;2118:1;2113:663;;;;2820:1;2837:6;2834:89;;;-1:-1:-1;2889:19:36;;;2883:26;2834:89;-1:-1:-1;;1638:1:36;1634:11;;;1630:24;1626:29;1616:40;1662:1;1658:11;;;1613:57;2936:81;;2083:944;;2113:663;907:1;900:14;;;944:4;931:18;;-1:-1:-1;;2149:20:36;;;2267:236;2281:7;2278:1;2275:14;2267:236;;;2370:19;;;2364:26;2349:42;;2462:27;;;;2430:1;2418:14;;;;2297:19;;2267:236;;;2271:3;2531:6;2522:7;2519:19;2516:201;;;2592:19;;;2586:26;-1:-1:-1;;2675:1:36;2671:14;;;2687:3;2667:24;2663:37;2659:42;2644:58;2629:74;;2516:201;-1:-1:-1;;;;;2763:1:36;2747:14;;;2743:22;2730:36;;-1:-1:-1;1681:1352:36:o;3038:127::-;3099:10;3094:3;3090:20;3087:1;3080:31;3130:4;3127:1;3120:15;3154:4;3151:1;3144:15;3170:422;3259:1;3302:5;3259:1;3316:270;3337:7;3327:8;3324:21;3316:270;;;3396:4;3392:1;3388:6;3384:17;3378:4;3375:27;3372:53;;;3405:18;;:::i;:::-;3455:7;3445:8;3441:22;3438:55;;;3475:16;;;;3438:55;3554:22;;;;3514:15;;;;3316:270;;;3320:3;3170:422;;;;;:::o;3597:806::-;3646:5;3676:8;3666:80;;-1:-1:-1;3717:1:36;3731:5;;3666:80;3765:4;3755:76;;-1:-1:-1;3802:1:36;3816:5;;3755:76;3847:4;3865:1;3860:59;;;;3933:1;3928:130;;;;3840:218;;3860:59;3890:1;3881:10;;3904:5;;;3928:130;3965:3;3955:8;3952:17;3949:43;;;3972:18;;:::i;:::-;-1:-1:-1;;4028:1:36;4014:16;;4043:5;;3840:218;;4142:2;4132:8;4129:16;4123:3;4117:4;4114:13;4110:36;4104:2;4094:8;4091:16;4086:2;4080:4;4077:12;4073:35;4070:77;4067:159;;;-1:-1:-1;4179:19:36;;;4211:5;;4067:159;4258:34;4283:8;4277:4;4258:34;:::i;:::-;4328:6;4324:1;4320:6;4316:19;4307:7;4304:32;4301:58;;;4339:18;;:::i;:::-;4377:20;;-1:-1:-1;3597:806:36;;;;;:::o;4408:140::-;4466:5;4495:47;4536:4;4526:8;4522:19;4516:4;4495:47;:::i;4553:168::-;4626:9;;;4657;;4674:15;;;4668:22;;4654:37;4644:71;;4695:18;;:::i;5086:125::-;5151:9;;;5172:10;;;5169:36;;;5185:18;;:::i;5216:177::-;149:8175:27;;;;;;",
	"deployedSourceMap": "149:8175:27:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;504:31;;;;;;;;;;;;;;;;;;;160:25:36;;;148:2;133:18;504:31:27;;;;;;;;2156:98:9;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;4433:197::-;;;;;;;;;;-1:-1:-1;4433:197:9;;;;;:::i;:::-;;:::i;:::-;;;1370:14:36;;1363:22;1345:41;;1333:2;1318:18;4433:197:9;1205:187:36;4171:103:27;;;;;;;;;;;;;:::i;:::-;;6204:761;;;;;;;;;;-1:-1:-1;6204:761:27;;;;;:::i;:::-;;:::i;3244:106:9:-;;;;;;;;;;-1:-1:-1;3331:12:9;;3244:106;;856:23:27;;;;;;;;;;-1:-1:-1;856:23:27;;;;-1:-1:-1;;;;;856:23:27;;;;;;-1:-1:-1;;;;;1835:32:36;;;1817:51;;1805:2;1790:18;856:23:27;1671:203:36;5402:115:27;;;;;;;;;;-1:-1:-1;5402:115:27;;;;;:::i;:::-;;:::i;5192:286:9:-;;;;;;;;;;-1:-1:-1;5192:286:9;;;;;:::i;:::-;;:::i;3093:91::-;;;;;;;;;;-1:-1:-1;3093:91:9;;3175:2;2482:36:36;;2470:2;2455:18;3093:91:9;2340:184:36;402:25:27;;;;;;;;;;;;;;;;5873:234:9;;;;;;;;;;-1:-1:-1;5873:234:9;;;;;:::i;:::-;;:::i;1146:50:27:-;;;;;;;;;;-1:-1:-1;1146:50:27;;;;;:::i;:::-;;;;;;;;;;;;;;1226:45;;;;;;;;;;-1:-1:-1;1226:45:27;;;;;:::i;:::-;;;;;;;;;;;;;;;;4929:335;;;;;;;;;;-1:-1:-1;4929:335:27;;;;;:::i;:::-;;:::i;2439:173::-;;;;;;;;;;-1:-1:-1;2439:173:27;;;;;:::i;:::-;;:::i;765:37::-;;;;;;;;;;-1:-1:-1;765:37:27;;;;-1:-1:-1;;;;;765:37:27;;;916:28;;;;;;;;;;-1:-1:-1;916:28:27;;;;-1:-1:-1;;;;;916:28:27;;;3560:400;;;;;;;;;;;;;:::i;633:29::-;;;;;;;;;;-1:-1:-1;633:29:27;;;;;;;;;;;447:31;;;;;;;;;;;;477:1;447:31;;885:25;;;;;;;;;;-1:-1:-1;885:25:27;;;;-1:-1:-1;;;;;885:25:27;;;3408:125:9;;;;;;;;;;-1:-1:-1;3408:125:9;;;;;:::i;:::-;-1:-1:-1;;;;;3508:18:9;3482:7;3508:18;;;;;;;;;;;;3408:125;2617:169:27;;;;;;;;;;-1:-1:-1;2617:169:27;;;;;:::i;:::-;;:::i;7855:466::-;;;;;;;;;;-1:-1:-1;7855:466:27;;;;;:::i;:::-;;:::i;728:20::-;;;;;;;;;;-1:-1:-1;728:20:27;;;;;;;-1:-1:-1;;;;;728:20:27;;;2367:102:9;;;;;;;;;;;;;:::i;5274:122:27:-;;;;;;;;;;-1:-1:-1;5274:122:27;;;;;:::i;:::-;;:::i;6594:427:9:-;;;;;;;;;;-1:-1:-1;6594:427:9;;;;;:::i;:::-;;:::i;3729:189::-;;;;;;;;;;-1:-1:-1;3729:189:9;;;;;:::i;:::-;;:::i;1060:50:27:-;;;;;;;;;;-1:-1:-1;1060:50:27;;;;;:::i;:::-;;;;;;;;;;;;;;668:26;;;;;;;;;;-1:-1:-1;668:26:27;;;;;;;;;;;4001:131;;;;;;;;;;;;;:::i;3171:344::-;;;:::i;5680:455::-;;;;;;;;;;-1:-1:-1;5680:455:27;;;;;:::i;:::-;;:::i;3976:149:9:-;;;;;;;;;;-1:-1:-1;3976:149:9;;;;;:::i;:::-;;:::i;4311:106:27:-;;;;;;;;;;-1:-1:-1;4311:106:27;;;;;:::i;:::-;;:::i;2791:180::-;;;;;;;;;;-1:-1:-1;2791:180:27;;;;;:::i;:::-;;:::i;569:28::-;;;;;;;;;;-1:-1:-1;569:28:27;;;;;;;;2976:165;;;;;;;;;;-1:-1:-1;2976:165:27;;;;;:::i;:::-;;:::i;1031:22::-;;;;;;;;;;-1:-1:-1;1031:22:27;;;;-1:-1:-1;;;;;1031:22:27;;;829:21;;;;;;;;;;-1:-1:-1;829:21:27;;;;-1:-1:-1;;;;;829:21:27;;;2156:98:9;2210:13;2242:5;2235:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2156:98;:::o;4433:197::-;4516:4;719:10:19;4570:32:9;719:10:19;4586:7:9;4595:6;4570:8;:32::i;:::-;4619:4;4612:11;;;4433:197;;;;;:::o;4171:103:27:-;1699:5;;;;;-1:-1:-1;;;;;1699:5:27;1685:10;:19;1677:42;;;;-1:-1:-1;;;1677:42:27;;;;;;;:::i;:::-;;;;;;;;;4232:7:::1;::::0;;-1:-1:-1;;4221:18:27;::::1;4232:7:::0;;;;::::1;;;4231:8;4221:18:::0;;::::1;;::::0;;4254:13:::1;::::0;::::1;::::0;-1:-1:-1;;4254:13:27::1;4171:103::o:0;6204:761::-;1699:5;;;;;-1:-1:-1;;;;;1699:5:27;1685:10;:19;1677:42;;;;-1:-1:-1;;;1677:42:27;;;;;;;:::i;:::-;2153:17:::1;::::0;::::1;::::0;::::1;;;2152:18;2144:48;;;;-1:-1:-1::0;;;2144:48:27::1;;;;;;;:::i;:::-;6315:17:::2;:24:::0;;-1:-1:-1;;6315:24:27::2;;;::::0;;6453:16:::2;::::0;6315:24;;6453:22:::2;::::0;6472:3:::2;6453:22;:::i;:::-;6419:56;;6514:125;6551:4;6578:13;6606:23;6514:15;:125::i;:::-;6750:16;::::0;6721:120:::2;::::0;-1:-1:-1;;;6721:120:27;;::::2;::::0;::::2;4947:25:36::0;;;6826:4:27::2;4988:18:36::0;;;4981:60;-1:-1:-1;;;;;6721:21:27;::::2;::::0;::::2;::::0;4920:18:36;;6721:120:27::2;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;::::0;::::2;;;;;;;;;;6885:13;-1:-1:-1::0;;;;;6885:30:27::2;;:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::2;;;;;;;;;;;;::::0;::::2;;;;;;;;;6928:30;:28;:30::i;:::-;6305:660;6204:761:::0;:::o;5402:115::-;1798:8;;-1:-1:-1;;;;;1798:8:27;1784:10;:22;;:50;;-1:-1:-1;1824:10:27;;-1:-1:-1;;;;;1824:10:27;1810;:24;1784:50;1776:76;;;;-1:-1:-1;;;1776:76:27;;5254:2:36;1776:76:27;;;5236:21:36;5293:2;5273:18;;;5266:30;-1:-1:-1;;;5312:18:36;;;5305:43;5365:18;;1776:76:27;5052:337:36;1776:76:27;5487:22:::1;5493:7;5502:6;5487:5;:22::i;5192:286:9:-:0;5319:4;719:10:19;5375:38:9;5391:4;719:10:19;5406:6:9;5375:15;:38::i;:::-;5423:27;5433:4;5439:2;5443:6;5423:9;:27::i;:::-;-1:-1:-1;5467:4:9;;5192:286;-1:-1:-1;;;;5192:286:9:o;5873:234::-;5961:4;719:10:19;6015:64:9;719:10:19;6031:7:9;6068:10;6040:25;719:10:19;6031:7:9;6040:9;:25::i;:::-;:38;;;;:::i;:::-;6015:8;:64::i;4929:335:27:-;1699:5;;;;;-1:-1:-1;;;;;1699:5:27;1685:10;:19;1677:42;;;;-1:-1:-1;;;1677:42:27;;;;;;;:::i;:::-;-1:-1:-1;;;;;5013:21:27;::::1;5005:65;;;::::0;-1:-1:-1;;;5005:65:27;;5726:2:36;5005:65:27::1;::::0;::::1;5708:21:36::0;5765:2;5745:18;;;5738:30;5804:33;5784:18;;;5777:61;5855:18;;5005:65:27::1;5524:355:36::0;5005:65:27::1;5153:10;;5143:6;5127:13;3331:12:9::0;;;3244:106;5127:13:27::1;:22;;;;:::i;:::-;:36;;5119:65;;;::::0;-1:-1:-1;;;5119:65:27;;6086:2:36;5119:65:27::1;::::0;::::1;6068:21:36::0;6125:2;6105:18;;;6098:30;-1:-1:-1;;;6144:18:36;;;6137:46;6200:18;;5119:65:27::1;5884:340:36::0;5119:65:27::1;5218:39;5224:7:::0;5242:14:::1;3175:2:9::0;5242::27::1;:14;:::i;:::-;5233:23;::::0;:6;:23:::1;:::i;:::-;5218:5;:39::i;2439:173::-:0;1699:5;;;;;-1:-1:-1;;;;;1699:5:27;1685:10;:19;1677:42;;;;-1:-1:-1;;;1677:42:27;;;;;;;:::i;:::-;2528:6:::1;::::0;-1:-1:-1;;;;;2528:6:27::1;2520:29:::0;2512:53:::1;;;;-1:-1:-1::0;;;2512:53:27::1;;;;;;;:::i;:::-;2589:6;:16:::0;;-1:-1:-1;;;;;;2589:16:27::1;-1:-1:-1::0;;;;;2589:16:27;;;::::1;::::0;;;::::1;::::0;;2439:173::o;3560:400::-;2283:16;;;;2282:17;2274:45;;;;-1:-1:-1;;;2274:45:27;;8154:2:36;2274:45:27;;;8136:21:36;8193:2;8173:18;;;8166:30;-1:-1:-1;;;8212:18:36;;;8205:45;8267:18;;2274:45:27;7952:339:36;2274:45:27;2153:17:::1;::::0;::::1;::::0;::::1;;;2152:18;2144:48;;;;-1:-1:-1::0;;;2144:48:27::1;;;;;;;:::i;:::-;3649:10:::2;3663:1;3633:27:::0;;;:15:::2;:27;::::0;;;;;3625:62:::2;;;::::0;-1:-1:-1;;;3625:62:27;;8498:2:36;3625:62:27::2;::::0;::::2;8480:21:36::0;8537:2;8517:18;;;8510:30;-1:-1:-1;;;8556:18:36;;;8549:48;8614:18;;3625:62:27::2;8296:342:36::0;3625:62:27::2;3800:10;3760:21;3784:27:::0;;;:15:::2;:27;::::0;;;;;;3821:31;;;3784:27;3863:57:::2;::::0;3887:4:::2;::::0;3784:27;3863:15:::2;:57::i;:::-;3615:345;3560:400::o:0;2617:169::-;1699:5;;;;;-1:-1:-1;;;;;1699:5:27;1685:10;:19;1677:42;;;;-1:-1:-1;;;1677:42:27;;;;;;;:::i;:::-;2710:8:::1;::::0;-1:-1:-1;;;;;2710:8:27::1;2702:31:::0;2694:55:::1;;;;-1:-1:-1::0;;;2694:55:27::1;;;;;;;:::i;:::-;2759:8;:20:::0;;-1:-1:-1;;;;;;2759:20:27::1;-1:-1:-1::0;;;;;2759:20:27;;;::::1;::::0;;;::::1;::::0;;2617:169::o;7855:466::-;7928:13;:21;;-1:-1:-1;;;;;;7928:21:27;-1:-1:-1;;;;;7928:21:27;;;;;7959:15;:25;;;-1:-1:-1;8006:12:27;8014:3;8006:7;:12::i;:::-;7994:24;;8041:17;;8033:4;:25;8028:287;;8139:14;;8164:13;;8180:15;;8115:81;;-1:-1:-1;;;;;8139:14:27;;;;8164:13;;8115:15;:81::i;:::-;8229:19;;8243:4;1345:41:36;;8229:19:27;;1333:2:36;1318:18;8229:19:27;;;;;;;;7918:403;7855:466;;:::o;8028:287::-;8284:20;;8298:5;1345:41:36;;8284:20:27;;1333:2:36;1318:18;8284:20:27;1205:187:36;2367:102:9;2423:13;2455:7;2448:14;;;;;:::i;5274:122:27:-;1699:5;;;;;-1:-1:-1;;;;;1699:5:27;1685:10;:19;1677:42;;;;-1:-1:-1;;;1677:42:27;;;;;;;:::i;:::-;5350:39:::1;5356:7:::0;5374:14:::1;3175:2:9::0;5374::27::1;:14;:::i;:::-;5365:23;::::0;:6;:23:::1;:::i;:::-;5350:5;:39::i;6594:427:9:-:0;6687:4;719:10:19;6687:4:9;6768:25;719:10:19;6785:7:9;6768:9;:25::i;:::-;6741:52;;6831:15;6811:16;:35;;6803:85;;;;-1:-1:-1;;;6803:85:9;;8845:2:36;6803:85:9;;;8827:21:36;8884:2;8864:18;;;8857:30;8923:34;8903:18;;;8896:62;-1:-1:-1;;;8974:18:36;;;8967:35;9019:19;;6803:85:9;8643:401:36;6803:85:9;6922:60;6931:5;6938:7;6966:15;6947:16;:34;6922:8;:60::i;3729:189::-;3808:4;719:10:19;3862:28:9;719:10:19;3879:2:9;3883:6;3862:9;:28::i;4001:131:27:-;1699:5;;;;;-1:-1:-1;;;;;1699:5:27;1685:10;:19;1677:42;;;;-1:-1:-1;;;1677:42:27;;;;;;;:::i;:::-;4081:16:::1;::::0;;-1:-1:-1;;4061:36:27;::::1;4081:16;::::0;;::::1;4080:17;4061:36;::::0;;4112:13:::1;::::0;::::1;::::0;4081:16:::1;::::0;4112:13:::1;4001:131::o:0;3171:344::-;2283:16;;;;2282:17;2274:45;;;;-1:-1:-1;;;2274:45:27;;8154:2:36;2274:45:27;;;8136:21:36;8193:2;8173:18;;;8166:30;-1:-1:-1;;;8212:18:36;;;8205:45;8267:18;;2274:45:27;7952:339:36;2274:45:27;2153:17:::1;::::0;::::1;::::0;::::1;;;2152:18;2144:48;;;;-1:-1:-1::0;;;2144:48:27::1;;;;;;;:::i;:::-;3277:19:::2;3299:15;:9;3311:3;3299:15;:::i;:::-;3340:10;3324:27;::::0;;;:15:::2;:27;::::0;;;;:42;;3277:37;;-1:-1:-1;3277:37:27;;3324:27;;;:42:::2;::::0;3277:37;;3324:42:::2;:::i;:::-;::::0;;;-1:-1:-1;;3392:10:27::2;3376:27;::::0;;;:15:::2;:27;::::0;;;;:40;;3407:9:::2;::::0;3376:27;:40:::2;::::0;3407:9;;3376:40:::2;:::i;:::-;;;;;;;;3446:9;3426:16;;:29;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;;3471:37:27::2;::::0;160:25:36;;;3484:10:27::2;::::0;3471:37:::2;::::0;148:2:36;133:18;3471:37:27::2;;;;;;;3233:282;3171:344::o:0;5680:455::-;1972:6;;5801:4;;-1:-1:-1;;;;;1972:6:27;1958:10;:20;;:46;;-1:-1:-1;1996:8:27;;-1:-1:-1;;;;;1996:8:27;1982:10;:22;1958:46;:74;;;-1:-1:-1;2022:10:27;;-1:-1:-1;;;;;2022:10:27;2008;:24;1958:74;1950:107;;;;-1:-1:-1;;;1950:107:27;;9251:2:36;1950:107:27;;;9233:21:36;9290:2;9270:18;;;9263:30;-1:-1:-1;;;9309:18:36;;;9302:50;9369:18;;1950:107:27;9049:344:36;1950:107:27;5972:134:::1;5994:6;6022:8;6089:7;6050:36;6060:10;6080:4;6050:9;:36::i;5972:134::-;-1:-1:-1::0;6124:4:27::1;5680:455:::0;;;;;:::o;3976:149:9:-;-1:-1:-1;;;;;4091:18:9;;;4065:7;4091:18;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;3976:149::o;4311:106:27:-;1699:5;;;;;-1:-1:-1;;;;;1699:5:27;1685:10;:19;1677:42;;;;-1:-1:-1;;;1677:42:27;;;;;;;:::i;:::-;-1:-1:-1;;;;;4381:22:27::1;;::::0;;;:13:::1;:22;::::0;;;;:29;;-1:-1:-1;;4381:29:27::1;4406:4;4381:29;::::0;;4311:106::o;2791:180::-;1699:5;;;;;-1:-1:-1;;;;;1699:5:27;1685:10;:19;1677:42;;;;-1:-1:-1;;;1677:42:27;;;;;;;:::i;:::-;2889:10:::1;::::0;-1:-1:-1;;;;;2889:10:27::1;2881:33:::0;2873:57:::1;;;;-1:-1:-1::0;;;2873:57:27::1;;;;;;;:::i;:::-;2940:10;:24:::0;;-1:-1:-1;;;;;;2940:24:27::1;-1:-1:-1::0;;;;;2940:24:27;;;::::1;::::0;;;::::1;::::0;;2791:180::o;2976:165::-;1699:5;;;;;-1:-1:-1;;;;;1699:5:27;1685:10;:19;1677:42;;;;-1:-1:-1;;;1677:42:27;;;;;;;:::i;:::-;3068:7:::1;::::0;-1:-1:-1;;;;;3068:7:27::1;3060:30:::0;3052:54:::1;;;;-1:-1:-1::0;;;3052:54:27::1;;;;;;;:::i;:::-;3116:7;:18:::0;;-1:-1:-1;;;;;;3116:18:27::1;-1:-1:-1::0;;;;;3116:18:27;;;::::1;::::0;;;::::1;::::0;;2976:165::o;10110:370:9:-;-1:-1:-1;;;;;10241:19:9;;10233:68;;;;-1:-1:-1;;;10233:68:9;;9600:2:36;10233:68:9;;;9582:21:36;9639:2;9619:18;;;9612:30;9678:34;9658:18;;;9651:62;-1:-1:-1;;;9729:18:36;;;9722:34;9773:19;;10233:68:9;9398:400:36;10233:68:9;-1:-1:-1;;;;;10319:21:9;;10311:68;;;;-1:-1:-1;;;10311:68:9;;10005:2:36;10311:68:9;;;9987:21:36;10044:2;10024:18;;;10017:30;10083:34;10063:18;;;10056:62;-1:-1:-1;;;10134:18:36;;;10127:32;10176:19;;10311:68:9;9803:398:36;10311:68:9;-1:-1:-1;;;;;10390:18:9;;;;;;;:11;:18;;;;;;;;:27;;;;;;;;;;;;;:36;;;10441:32;;160:25:36;;;10441:32:9;;133:18:36;10441:32:9;;;;;;;10110:370;;;:::o;7475:651::-;-1:-1:-1;;;;;7601:18:9;;7593:68;;;;-1:-1:-1;;;7593:68:9;;10408:2:36;7593:68:9;;;10390:21:36;10447:2;10427:18;;;10420:30;10486:34;10466:18;;;10459:62;-1:-1:-1;;;10537:18:36;;;10530:35;10582:19;;7593:68:9;10206:401:36;7593:68:9;-1:-1:-1;;;;;7679:16:9;;7671:64;;;;-1:-1:-1;;;7671:64:9;;10814:2:36;7671:64:9;;;10796:21:36;10853:2;10833:18;;;10826:30;10892:34;10872:18;;;10865:62;-1:-1:-1;;;10943:18:36;;;10936:33;10986:19;;7671:64:9;10612:399:36;7671:64:9;-1:-1:-1;;;;;7817:15:9;;7795:19;7817:15;;;;;;;;;;;7850:21;;;;7842:72;;;;-1:-1:-1;;;7842:72:9;;11218:2:36;7842:72:9;;;11200:21:36;11257:2;11237:18;;;11230:30;11296:34;11276:18;;;11269:62;-1:-1:-1;;;11347:18:36;;;11340:36;11393:19;;7842:72:9;11016:402:36;7842:72:9;-1:-1:-1;;;;;7948:15:9;;;:9;:15;;;;;;;;;;;7966:20;;;7948:38;;8006:13;;;;;;;;:23;;7980:6;;7948:9;8006:23;;7980:6;;8006:23;:::i;:::-;;;;;;;;8060:2;-1:-1:-1;;;;;8045:26:9;8054:4;-1:-1:-1;;;;;8045:26:9;;8064:6;8045:26;;;;160:25:36;;148:2;133:18;;14:177;8045:26:9;;;;;;;;8082:37;7583:543;7475:651;;;:::o;7141:250:27:-;7200:20;:18;:20::i;:::-;7272:4;7231:20;3508:18:9;;;;;;;;;;;7327:14:27;;3508:18:9;;7288:69:27;;-1:-1:-1;;;;;7327:14:27;3508:18:9;7288:15:27;:69::i;:::-;7372:12;;;;;;;7190:201;7141:250::o;9111:576:9:-;-1:-1:-1;;;;;9194:21:9;;9186:67;;;;-1:-1:-1;;;9186:67:9;;11625:2:36;9186:67:9;;;11607:21:36;11664:2;11644:18;;;11637:30;11703:34;11683:18;;;11676:62;-1:-1:-1;;;11754:18:36;;;11747:31;11795:19;;9186:67:9;11423:397:36;9186:67:9;-1:-1:-1;;;;;9349:18:9;;9324:22;9349:18;;;;;;;;;;;9385:24;;;;9377:71;;;;-1:-1:-1;;;9377:71:9;;12027:2:36;9377:71:9;;;12009:21:36;12066:2;12046:18;;;12039:30;12105:34;12085:18;;;12078:62;-1:-1:-1;;;12156:18:36;;;12149:32;12198:19;;9377:71:9;11825:398:36;9377:71:9;-1:-1:-1;;;;;9482:18:9;;:9;:18;;;;;;;;;;9503:23;;;9482:44;;9546:12;:22;;9520:6;;9482:9;9546:22;;9520:6;;9546:22;:::i;:::-;;;;-1:-1:-1;;9584:37:9;;160:25:36;;;9610:1:9;;-1:-1:-1;;;;;9584:37:9;;;;;148:2:36;133:18;9584:37:9;;;;;;;7918:403:27;7855:466;;:::o;10761:441:9:-;10891:24;10918:25;10928:5;10935:7;10918:9;:25::i;:::-;10891:52;;-1:-1:-1;;10957:16:9;:37;10953:243;;11038:6;11018:16;:26;;11010:68;;;;-1:-1:-1;;;11010:68:9;;12563:2:36;11010:68:9;;;12545:21:36;12602:2;12582:18;;;12575:30;12641:31;12621:18;;;12614:59;12690:18;;11010:68:9;12361:353:36;11010:68:9;11120:51;11129:5;11136:7;11164:6;11145:16;:25;11120:8;:51::i;4423:500:27:-;4575:7;;4521:20;;4575:7;;;;;4571:73;;;4630:3;4614:12;4620:6;477:1;4614:12;:::i;:::-;4613:20;;;;:::i;:::-;4598:35;;4571:73;4653:24;4680:21;4689:12;4680:6;:21;:::i;:::-;4653:48;;4753:52;4769:6;4777:9;4788:16;4753:15;:52::i;:::-;4886:14;;4862:53;;4878:6;;-1:-1:-1;;;;;4886:14:27;4902:12;4862:15;:53::i;:::-;4511:412;;4423:500;;;:::o;8402:389:9:-;-1:-1:-1;;;;;8485:21:9;;8477:65;;;;-1:-1:-1;;;8477:65:9;;5726:2:36;8477:65:9;;;5708:21:36;5765:2;5745:18;;;5738:30;5804:33;5784:18;;;5777:61;5855:18;;8477:65:9;5524:355:36;8477:65:9;8629:6;8613:12;;:22;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;8645:18:9;;:9;:18;;;;;;;;;;:28;;8667:6;;8645:9;:28;;8667:6;;8645:28;:::i;:::-;;;;-1:-1:-1;;8688:37:9;;160:25:36;;;-1:-1:-1;;;;;8688:37:9;;;8705:1;;8688:37;;148:2:36;133:18;8688:37:9;;;;;;;6305:660:27::2;6204:761:::0;:::o;7653:196::-;7734:7;:9;;7702:4;;;7734:9;;;:::i;:::-;;;;-1:-1:-1;;7821:7:27;;7775:54;;;7792:15;7775:54;;;13301:19:36;-1:-1:-1;;7809:10:27;13358:2:36;13354:15;13350:53;13336:12;;;13329:75;;;;13420:12;;;13413:28;;;;7834:8:27;;13457:12:36;;7775:54:27;;;;;;;;;;;;7765:65;;;;;;7760:71;;:82;;;;:::i;7437:174::-;7486:20;7518:14;3175:2:9;7518::27;:14;:::i;:::-;7509:23;;:6;:23;:::i;:::-;7581:7;;7486:46;;-1:-1:-1;7542:62:27;;7566:4;;-1:-1:-1;;;;;7581:7:27;7486:46;7542:15;:62::i;196:548:36:-;308:4;337:2;366;355:9;348:21;398:6;392:13;441:6;436:2;425:9;421:18;414:34;466:1;476:140;490:6;487:1;484:13;476:140;;;585:14;;;581:23;;575:30;551:17;;;570:2;547:26;540:66;505:10;;476:140;;;480:3;665:1;660:2;651:6;640:9;636:22;632:31;625:42;735:2;728;724:7;719:2;711:6;707:15;703:29;692:9;688:45;684:54;676:62;;;;196:548;;;;:::o;749:131::-;-1:-1:-1;;;;;824:31:36;;814:42;;804:70;;870:1;867;860:12;885:315;953:6;961;1014:2;1002:9;993:7;989:23;985:32;982:52;;;1030:1;1027;1020:12;982:52;1069:9;1056:23;1088:31;1113:5;1088:31;:::i;:::-;1138:5;1190:2;1175:18;;;;1162:32;;-1:-1:-1;;;885:315:36:o;1397:269::-;1478:6;1531:2;1519:9;1510:7;1506:23;1502:32;1499:52;;;1547:1;1544;1537:12;1499:52;1586:9;1573:23;1605:31;1630:5;1605:31;:::i;:::-;1655:5;1397:269;-1:-1:-1;;;1397:269:36:o;1879:456::-;1956:6;1964;1972;2025:2;2013:9;2004:7;2000:23;1996:32;1993:52;;;2041:1;2038;2031:12;1993:52;2080:9;2067:23;2099:31;2124:5;2099:31;:::i;:::-;2149:5;-1:-1:-1;2206:2:36;2191:18;;2178:32;2219:33;2178:32;2219:33;:::i;:::-;1879:456;;2271:7;;-1:-1:-1;;;2325:2:36;2310:18;;;;2297:32;;1879:456::o;3005:388::-;3073:6;3081;3134:2;3122:9;3113:7;3109:23;3105:32;3102:52;;;3150:1;3147;3140:12;3102:52;3189:9;3176:23;3208:31;3233:5;3208:31;:::i;:::-;3258:5;-1:-1:-1;3315:2:36;3300:18;;3287:32;3328:33;3287:32;3328:33;:::i;:::-;3380:7;3370:17;;;3005:388;;;;;:::o;3398:380::-;3477:1;3473:12;;;;3520;;;3541:61;;3595:4;3587:6;3583:17;3573:27;;3541:61;3648:2;3640:6;3637:14;3617:18;3614:38;3611:161;;3694:10;3689:3;3685:20;3682:1;3675:31;3729:4;3726:1;3719:15;3757:4;3754:1;3747:15;3611:161;;3398:380;;;:::o;3783:334::-;3985:2;3967:21;;;4024:2;4004:18;;;3997:30;-1:-1:-1;;;4058:2:36;4043:18;;4036:40;4108:2;4093:18;;3783:334::o;4122:341::-;4324:2;4306:21;;;4363:2;4343:18;;;4336:30;-1:-1:-1;;;4397:2:36;4382:18;;4375:47;4454:2;4439:18;;4122:341::o;4468:127::-;4529:10;4524:3;4520:20;4517:1;4510:31;4560:4;4557:1;4550:15;4584:4;4581:1;4574:15;4600:168;4673:9;;;4704;;4721:15;;;4715:22;;4701:37;4691:71;;4742:18;;:::i;5394:125::-;5459:9;;;5480:10;;;5477:36;;;5493:18;;:::i;6229:422::-;6318:1;6361:5;6318:1;6375:270;6396:7;6386:8;6383:21;6375:270;;;6455:4;6451:1;6447:6;6443:17;6437:4;6434:27;6431:53;;;6464:18;;:::i;:::-;6514:7;6504:8;6500:22;6497:55;;;6534:16;;;;6497:55;6613:22;;;;6573:15;;;;6375:270;;;6379:3;6229:422;;;;;:::o;6656:806::-;6705:5;6735:8;6725:80;;-1:-1:-1;6776:1:36;6790:5;;6725:80;6824:4;6814:76;;-1:-1:-1;6861:1:36;6875:5;;6814:76;6906:4;6924:1;6919:59;;;;6992:1;6987:130;;;;6899:218;;6919:59;6949:1;6940:10;;6963:5;;;6987:130;7024:3;7014:8;7011:17;7008:43;;;7031:18;;:::i;:::-;-1:-1:-1;;7087:1:36;7073:16;;7102:5;;6899:218;;7201:2;7191:8;7188:16;7182:3;7176:4;7173:13;7169:36;7163:2;7153:8;7150:16;7145:2;7139:4;7136:12;7132:35;7129:77;7126:159;;;-1:-1:-1;7238:19:36;;;7270:5;;7126:159;7317:34;7342:8;7336:4;7317:34;:::i;:::-;7387:6;7383:1;7379:6;7375:19;7366:7;7363:32;7360:58;;;7398:18;;:::i;:::-;7436:20;;6656:806;-1:-1:-1;;;6656:806:36:o;7467:140::-;7525:5;7554:47;7595:4;7585:8;7581:19;7575:4;7554:47;:::i;7612:335::-;7814:2;7796:21;;;7853:2;7833:18;;;7826:30;-1:-1:-1;;;7887:2:36;7872:18;;7865:41;7938:2;7923:18;;7612:335::o;12228:128::-;12295:9;;;12316:11;;;12313:37;;;12330:18;;:::i;12719:127::-;12780:10;12775:3;12771:20;12768:1;12761:31;12811:4;12808:1;12801:15;12835:4;12832:1;12825:15;12851:120;12891:1;12917;12907:35;;12922:18;;:::i;:::-;-1:-1:-1;12956:9:36;;12851:120::o;12976:135::-;13015:3;13036:17;;;13033:43;;13056:18;;:::i;:::-;-1:-1:-1;13103:1:36;13092:13;;12976:135::o;13480:112::-;13512:1;13538;13528:35;;13543:18;;:::i;:::-;-1:-1:-1;13577:9:36;;13480:112::o",
	"source": "//SPDX-License-Identifier: Unlicense\npragma solidity ^0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\nimport \"./LiquidityPool.sol\";\n\ncontract JMToken is ERC20 {\n    event TokensBought(address indexed _account, uint256 amount); // 펀딩이후 토큰 클레임 \n    event OwnerAction(); // 오너의 액션\n    event FundsMoved(); // 펀딩 종료 \n    event _MovedStakingReward();\n\n    uint256 public MAX_SUPPLY; // 발행량 \n    uint256 public constant TAX = 1; //  수수료 tx 1%\n    uint256 public totalContributed; // 총 이더 기부금액 \n    bool public isContractPaused; // 컨트랙트 동작 상태\n    bool public fundsAlreadyMoved;\n    bool public isTaxOn = true; // 현재 수수료 on off \n    address public owner; // 오너 \n    address payable public treasuryWallet; // 비상금 계좌!\n    address public Router;\n    address public MapleNFT;\n    address public MapleItems;\n    address public winRewardAddr;\n    uint winRewardAmount;\n    uint randNum = 0;\n    uint rewardProbability = 90;\n    address public Staking;\n\n    mapping(address => uint256) public balancesToClaim; // 투자금1:100 비율==jmt\n    mapping(address => uint256) public contributionsOf; // 실제 기부금 eth\n    mapping(address => bool) public isWhitelisted;\n\n    event TokenRewarded(bool result);\n\n    constructor(address payable treasury) ERC20(\"JMT Token\", \"JMT\") {\n        MAX_SUPPLY = 1000000 * 10**decimals(); \n        _mint(address(this), MAX_SUPPLY); \n        owner = msg.sender; \n        treasuryWallet = treasury; // 임시,현재는 오너 지갑\n        isWhitelisted[owner] = true; // 오너 자동 화리  \n    }\n\n    modifier ownerOnly() {\n        require(msg.sender == owner, \"OWNER_ONLY\");\n        _;\n    }\n\n    modifier mapleNFTOnly(){\n        require(msg.sender == MapleNFT || msg.sender == MapleItems, \"MAPLENFT_ONLY\");\n        _;\n    }\n    // router 컨트랙트에서만 실행\n    modifier routerOnly() {\n        require(msg.sender == Router || msg.sender == MapleNFT || msg.sender == MapleItems, \"ROUTER_OR_MAPLE_ONLY\");\n        _;\n    }\n    // 펀딩 종료 체크 \n    modifier areFundsMoved() {\n        require(!fundsAlreadyMoved, \"FUNDS_MOVED_TO_LP\");\n        _;\n    }\n\n    // 컨트랙트 상태 \n    modifier isPaused() {\n        require(!isContractPaused, \"CONTRACT_PAUSED\");\n        _;\n    }\n\n\n    // 첫 계약 제로 계정 배포자(0x0)와 같은지 확인, 딱 한번만 실행가능\n    function setRouterAddress(address _router) external  ownerOnly {\n        require(address(Router) == address(0), \"WRITE_ONCE!\"); // 0x00000000\n        Router = _router;\n    }\n    function setMapleNFTAddress(address _mapleNft) external  ownerOnly {\n        require(address(MapleNFT) == address(0), \"WRITE_ONCE!\");\n        MapleNFT = _mapleNft;\n    }\n    function setMapleItemsAddress(address _mapleItems ) external  ownerOnly {\n        require(address(MapleItems) == address(0), \"WRITE_ONCE!\");\n        MapleItems = _mapleItems;\n    }\n    function setStakingAddress(address _staking ) external  ownerOnly {\n        require(address(Staking) == address(0), \"WRITE_ONCE!\");\n        Staking = _staking;\n    }\n  \n    // 이더 펀딩 \n    function contribute() external payable isPaused areFundsMoved {\n\n        //교환 비율이 1:100\n        uint256 tokenAmount = msg.value * 100;\n        balancesToClaim[msg.sender] += tokenAmount;\n        contributionsOf[msg.sender] += msg.value;\n        totalContributed += msg.value; \n        emit TokensBought(msg.sender, tokenAmount);\n    }\n    \n    // 펀딩 jmt토큰 클레임 \n    function claimTokens() external isPaused areFundsMoved {\n        require(balancesToClaim[msg.sender] > 0, \"NO_AVAILABLE_FUNDS\"); // 수령이 가능한 토큰을 보유하고있는지 체크 \n        uint256 tokensToClaim = balancesToClaim[msg.sender];\n        balancesToClaim[msg.sender] = 0;\n\n        super._transfer(address(this), msg.sender, tokensToClaim); // 컨트랙트 -> sender 전송\n    }\n\n    //컨트랙트 pause스위치 \n    function togglePauseContract() external ownerOnly {\n        isContractPaused = !isContractPaused;\n        emit OwnerAction();\n    }\n\n    // tx스위치 기본 : true\n    function toggleTax() external ownerOnly {\n        isTaxOn = !isTaxOn;\n        emit OwnerAction();\n    }\n\n    // 화리에 유저 추가\n    function addToWhitelist(address account) external ownerOnly {\n        isWhitelisted[account] = true;\n    }\n\n    function _transfer(address sender, address recipient, uint256 amount) internal override {\n        uint256 amountToTake;\n        // tx계산\n        if (isTaxOn) {\n            amountToTake = (TAX * amount) / 100;\n        }\n        uint256 amountToTransfer = amount - amountToTake;\n        // 수수료를 뺀만큼 전송 \n        super._transfer(sender, recipient, amountToTransfer);\n        // 수수료는 비상금으로 축적\n        super._transfer(sender, treasuryWallet, amountToTake); \n    }\n\n    function mint(address account, uint256 amount) external ownerOnly {\n        require(account != address(0), \"ERC20: mint to the zero address\"); // 주소 전송 가능 여부 체크 \n        require(totalSupply() + amount <= MAX_SUPPLY, \"ABOVE_MAX_SUPPLY\"); // 총발행량 체크 \n        _mint(account, amount * 10**decimals());\n    }\n    \n    function burn(address account, uint256 amount) external ownerOnly {\n        _burn(account, amount * 10**decimals());\n    }\n\n    function marketBurn(address account, uint256 amount) external mapleNFTOnly {\n        _burn(account, amount);\n\n    }\n\n    //tranferfrom에서 권한 부여\n    //spender에게 토큰 거래 제한\n    //라우터에서만 호출 가능 외부 컨트랙트를 통한 호출x \n    function increaseContractAllowance(address _owner,address _spender,uint256 _amount)  \n        public routerOnly returns (bool) {\n        // spender에게 토큰 사용 허용 토큰양 추척해서 거래 제한 ㄱ \n        // allowance 현재 제한 해제된 토큰 상황 return \n        _approve(\n            _owner, // from\n            _spender, // to\n            allowance(msg.sender, address(this)) + _amount\n        ); \n        return true;\n    }\n\n    // 펀딩 금액 -> lp로 전송,  최초 리저브생성 \n    function sendLiquidityToLPContract(LiquidityPool liquidityPool) external ownerOnly areFundsMoved\n    {\n        fundsAlreadyMoved = true; //클레임불가\n\n        // 이더 기부금 * 100 jmt 에어드랍\n        uint256 jmtCoinAmountToTransfer = totalContributed * 100;\n\n        // lp풀 JMT전송 \n        super._transfer(\n            address(this),\n            address(liquidityPool),\n            jmtCoinAmountToTransfer\n        );\n\n        //msg.value = totalContributed, 리저브 생성, 이더전송\n        liquidityPool.deposit{value: totalContributed}(\n            jmtCoinAmountToTransfer,\n            address(this)\n        );\n\n        //펀딩 reserve_setting\n        liquidityPool.setFundedReserve();\n\n        sendRemainingFundsToTreasury();\n    }\n    //펀딩 이후 남은 토큰 재무 관련 지갑 전송\n    //일단은 오너지갑으로, 소프트런 각?\n    //실제 서비스시 오너지갑이라면 전쟁\n    function sendRemainingFundsToTreasury() internal {\n        MovedStakingReward();\n\n        uint256 remainingJMT = balanceOf(address(this));\n        super._transfer(address(this), address(treasuryWallet), remainingJMT);\n        emit FundsMoved();\n    }\n    // staking reward 300,000개 발행 \n    function MovedStakingReward() internal {\n        uint256 remainingJMT = 300000 * 10**decimals();\n        super._transfer(address(this), address(Staking), remainingJMT);\n    }\n\n    // 전투 랜덤 보상(토큰)\n    function randMod(uint _modulus) internal returns(uint) { // 랜덤함수\n        randNum++;\n        return uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, randNum))) % _modulus;\n    }\n\n    function randRewardToken(address _addr, uint _amount) external {\n        winRewardAddr = _addr;\n        winRewardAmount = _amount;\n        uint rand = randMod(100);\n        if ( rand <= rewardProbability ) {// 90% 확률로 강화 스크롤 획득\n            super._transfer(address(treasuryWallet), address(winRewardAddr), winRewardAmount); // JMT 토큰\n            emit TokenRewarded(true);\n        } else {\n            emit TokenRewarded(false);\n        }\n    }\n\n}",
	"sourcePath": "/home/bcdy19/project3/BEB-05-JMT/contract/contracts/JMToken.sol",
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
		  6105
		],
		"LPT": [
		  6158
		],
		"LiquidityPool": [
		  6665
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
		  9355
		]
	  },
	  "id": 6106,
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
		  "scope": 6106,
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
		  "scope": 6106,
		  "sourceUnit": 6666,
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
		  "id": 6105,
		  "linearizedBaseContracts": [
			6105,
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
			  "scope": 6105,
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
			  "scope": 6105,
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
			  "scope": 6105,
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
			  "scope": 6105,
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
			  "scope": 6105,
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
			  "scope": 6105,
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
			  "scope": 6105,
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
			  "scope": 6105,
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
			  "scope": 6105,
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
			  "scope": 6105,
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
			  "scope": 6105,
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
			  "functionSelector": "46c586c2",
			  "id": 5392,
			  "mutability": "mutable",
			  "name": "winRewardAddr",
			  "nameLocation": "931:13:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6105,
			  "src": "916:28:27",
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
			  "id": 5394,
			  "mutability": "mutable",
			  "name": "winRewardAmount",
			  "nameLocation": "955:15:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6105,
			  "src": "950:20:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5393,
				"name": "uint",
				"nodeType": "ElementaryTypeName",
				"src": "950:4:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "visibility": "internal"
			},
			{
			  "constant": false,
			  "id": 5397,
			  "mutability": "mutable",
			  "name": "randNum",
			  "nameLocation": "981:7:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6105,
			  "src": "976:16:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5395,
				"name": "uint",
				"nodeType": "ElementaryTypeName",
				"src": "976:4:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "value": {
				"hexValue": "30",
				"id": 5396,
				"isConstant": false,
				"isLValue": false,
				"isPure": true,
				"kind": "number",
				"lValueRequested": false,
				"nodeType": "Literal",
				"src": "991:1:27",
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
			  "id": 5400,
			  "mutability": "mutable",
			  "name": "rewardProbability",
			  "nameLocation": "1003:17:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6105,
			  "src": "998:27:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_uint256",
				"typeString": "uint256"
			  },
			  "typeName": {
				"id": 5398,
				"name": "uint",
				"nodeType": "ElementaryTypeName",
				"src": "998:4:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_uint256",
				  "typeString": "uint256"
				}
			  },
			  "value": {
				"hexValue": "3930",
				"id": 5399,
				"isConstant": false,
				"isLValue": false,
				"isPure": true,
				"kind": "number",
				"lValueRequested": false,
				"nodeType": "Literal",
				"src": "1023:2:27",
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
			  "id": 5402,
			  "mutability": "mutable",
			  "name": "Staking",
			  "nameLocation": "1046:7:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6105,
			  "src": "1031:22:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_address",
				"typeString": "address"
			  },
			  "typeName": {
				"id": 5401,
				"name": "address",
				"nodeType": "ElementaryTypeName",
				"src": "1031:7:27",
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
			  "id": 5406,
			  "mutability": "mutable",
			  "name": "balancesToClaim",
			  "nameLocation": "1095:15:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6105,
			  "src": "1060:50:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				"typeString": "mapping(address => uint256)"
			  },
			  "typeName": {
				"id": 5405,
				"keyType": {
				  "id": 5403,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "1068:7:27",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "1060:27:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				  "typeString": "mapping(address => uint256)"
				},
				"valueType": {
				  "id": 5404,
				  "name": "uint256",
				  "nodeType": "ElementaryTypeName",
				  "src": "1079:7:27",
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
			  "id": 5410,
			  "mutability": "mutable",
			  "name": "contributionsOf",
			  "nameLocation": "1181:15:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6105,
			  "src": "1146:50:27",
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
				  "src": "1154:7:27",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "1146:27:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
				  "typeString": "mapping(address => uint256)"
				},
				"valueType": {
				  "id": 5408,
				  "name": "uint256",
				  "nodeType": "ElementaryTypeName",
				  "src": "1165:7:27",
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
			  "id": 5414,
			  "mutability": "mutable",
			  "name": "isWhitelisted",
			  "nameLocation": "1258:13:27",
			  "nodeType": "VariableDeclaration",
			  "scope": 6105,
			  "src": "1226:45:27",
			  "stateVariable": true,
			  "storageLocation": "default",
			  "typeDescriptions": {
				"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				"typeString": "mapping(address => bool)"
			  },
			  "typeName": {
				"id": 5413,
				"keyType": {
				  "id": 5411,
				  "name": "address",
				  "nodeType": "ElementaryTypeName",
				  "src": "1234:7:27",
				  "typeDescriptions": {
					"typeIdentifier": "t_address",
					"typeString": "address"
				  }
				},
				"nodeType": "Mapping",
				"src": "1226:24:27",
				"typeDescriptions": {
				  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
				  "typeString": "mapping(address => bool)"
				},
				"valueType": {
				  "id": 5412,
				  "name": "bool",
				  "nodeType": "ElementaryTypeName",
				  "src": "1245:4:27",
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
			  "id": 5418,
			  "name": "TokenRewarded",
			  "nameLocation": "1284:13:27",
			  "nodeType": "EventDefinition",
			  "parameters": {
				"id": 5417,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5416,
					"indexed": false,
					"mutability": "mutable",
					"name": "result",
					"nameLocation": "1303:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5418,
					"src": "1298:11:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 5415,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "1298:4:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1297:13:27"
			  },
			  "src": "1278:33:27"
			},
			{
			  "body": {
				"id": 5459,
				"nodeType": "Block",
				"src": "1381:259:27",
				"statements": [
				  {
					"expression": {
					  "id": 5434,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5427,
						"name": "MAX_SUPPLY",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5368,
						"src": "1391:10:27",
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
						"id": 5433,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"leftExpression": {
						  "hexValue": "31303030303030",
						  "id": 5428,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "number",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1404:7:27",
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
						  "id": 5432,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"hexValue": "3130",
							"id": 5429,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "number",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "1414:2:27",
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
							  "id": 5430,
							  "name": "decimals",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 1962,
							  "src": "1418:8:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
								"typeString": "function () view returns (uint8)"
							  }
							},
							"id": 5431,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "1418:10:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_uint8",
							  "typeString": "uint8"
							}
						  },
						  "src": "1414:14:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"src": "1404:24:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "1391:37:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5435,
					"nodeType": "ExpressionStatement",
					"src": "1391:37:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5439,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "1453:4:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$6105",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$6105",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5438,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "1445:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5437,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "1445:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5440,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "1445:13:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5441,
						  "name": "MAX_SUPPLY",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5368,
						  "src": "1460:10:27",
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
						"id": 5436,
						"name": "_mint",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2290,
						"src": "1439:5:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5442,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1439:32:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5443,
					"nodeType": "ExpressionStatement",
					"src": "1439:32:27"
				  },
				  {
					"expression": {
					  "id": 5447,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5444,
						"name": "owner",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5382,
						"src": "1482:5:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"expression": {
						  "id": 5445,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "1490:3:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5446,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "1494:6:27",
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "1490:10:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "1482:18:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5448,
					"nodeType": "ExpressionStatement",
					"src": "1482:18:27"
				  },
				  {
					"expression": {
					  "id": 5451,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5449,
						"name": "treasuryWallet",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5384,
						"src": "1511:14:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address_payable",
						  "typeString": "address payable"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5450,
						"name": "treasury",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5420,
						"src": "1528:8:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address_payable",
						  "typeString": "address payable"
						}
					  },
					  "src": "1511:25:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address_payable",
						"typeString": "address payable"
					  }
					},
					"id": 5452,
					"nodeType": "ExpressionStatement",
					"src": "1511:25:27"
				  },
				  {
					"expression": {
					  "id": 5457,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5453,
						  "name": "isWhitelisted",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5414,
						  "src": "1580:13:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
							"typeString": "mapping(address => bool)"
						  }
						},
						"id": 5455,
						"indexExpression": {
						  "id": 5454,
						  "name": "owner",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5382,
						  "src": "1594:5:27",
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
						"src": "1580:20:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "74727565",
						"id": 5456,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "1603:4:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "true"
					  },
					  "src": "1580:27:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5458,
					"nodeType": "ExpressionStatement",
					"src": "1580:27:27"
				  }
				]
			  },
			  "id": 5460,
			  "implemented": true,
			  "kind": "constructor",
			  "modifiers": [
				{
				  "arguments": [
					{
					  "hexValue": "4a4d5420546f6b656e",
					  "id": 5423,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "string",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "1361:11:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_stringliteral_a9a53302e4bb530eeacfd21a7a31e566429a171ca9336abbe7122b03852140c5",
						"typeString": "literal_string \"JMT Token\""
					  },
					  "value": "JMT Token"
					},
					{
					  "hexValue": "4a4d54",
					  "id": 5424,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "string",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "1374:5:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_stringliteral_5dd6c48417bf5763178b941ef6b12f7c9a2600518281e43bd45fc179a5eeda5c",
						"typeString": "literal_string \"JMT\""
					  },
					  "value": "JMT"
					}
				  ],
				  "id": 5425,
				  "kind": "baseConstructorSpecifier",
				  "modifierName": {
					"id": 5422,
					"name": "ERC20",
					"nameLocations": [
					  "1355:5:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 2473,
					"src": "1355:5:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "1355:25:27"
				}
			  ],
			  "name": "",
			  "nameLocation": "-1:-1:-1",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5421,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5420,
					"mutability": "mutable",
					"name": "treasury",
					"nameLocation": "1345:8:27",
					"nodeType": "VariableDeclaration",
					"scope": 5460,
					"src": "1329:24:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address_payable",
					  "typeString": "address payable"
					},
					"typeName": {
					  "id": 5419,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "1329:15:27",
					  "stateMutability": "payable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address_payable",
						"typeString": "address payable"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "1328:26:27"
			  },
			  "returnParameters": {
				"id": 5426,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1381:0:27"
			  },
			  "scope": 6105,
			  "src": "1317:323:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 5471,
				"nodeType": "Block",
				"src": "1667:70:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5466,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"expression": {
							  "id": 5463,
							  "name": "msg",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967281,
							  "src": "1685:3:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_magic_message",
								"typeString": "msg"
							  }
							},
							"id": 5464,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"memberLocation": "1689:6:27",
							"memberName": "sender",
							"nodeType": "MemberAccess",
							"src": "1685:10:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "==",
						  "rightExpression": {
							"id": 5465,
							"name": "owner",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5382,
							"src": "1699:5:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "1685:19:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "4f574e45525f4f4e4c59",
						  "id": 5467,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1706:12:27",
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
						"id": 5462,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "1677:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5468,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1677:42:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5469,
					"nodeType": "ExpressionStatement",
					"src": "1677:42:27"
				  },
				  {
					"id": 5470,
					"nodeType": "PlaceholderStatement",
					"src": "1729:1:27"
				  }
				]
			  },
			  "id": 5472,
			  "name": "ownerOnly",
			  "nameLocation": "1655:9:27",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5461,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1664:2:27"
			  },
			  "src": "1646:91:27",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5488,
				"nodeType": "Block",
				"src": "1766:104:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  "id": 5483,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"commonType": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							},
							"id": 5478,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "expression": {
								"id": 5475,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "1784:3:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 5476,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "1788:6:27",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "1784:10:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "==",
							"rightExpression": {
							  "id": 5477,
							  "name": "MapleNFT",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5388,
							  "src": "1798:8:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"src": "1784:22:27",
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
								"src": "1810:3:27",
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
							  "memberLocation": "1814:6:27",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "1810:10:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "==",
							"rightExpression": {
							  "id": 5481,
							  "name": "MapleItems",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5390,
							  "src": "1824:10:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"src": "1810:24:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "src": "1784:50:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "4d41504c454e46545f4f4e4c59",
						  "id": 5484,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "1836:15:27",
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
						"id": 5474,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "1776:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5485,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1776:76:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5486,
					"nodeType": "ExpressionStatement",
					"src": "1776:76:27"
				  },
				  {
					"id": 5487,
					"nodeType": "PlaceholderStatement",
					"src": "1862:1:27"
				  }
				]
			  },
			  "id": 5489,
			  "name": "mapleNFTOnly",
			  "nameLocation": "1752:12:27",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5473,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1764:2:27"
			  },
			  "src": "1743:127:27",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5510,
				"nodeType": "Block",
				"src": "1940:135:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  },
						  "id": 5505,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"commonType": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							},
							"id": 5500,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "commonType": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  },
							  "id": 5495,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"expression": {
								  "id": 5492,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "1958:3:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 5493,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberLocation": "1962:6:27",
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "1958:10:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "==",
							  "rightExpression": {
								"id": 5494,
								"name": "Router",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5386,
								"src": "1972:6:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "src": "1958:20:27",
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
							  "id": 5499,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "leftExpression": {
								"expression": {
								  "id": 5496,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "1982:3:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 5497,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberLocation": "1986:6:27",
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "1982:10:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "==",
							  "rightExpression": {
								"id": 5498,
								"name": "MapleNFT",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5388,
								"src": "1996:8:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  "src": "1982:22:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_bool",
								"typeString": "bool"
							  }
							},
							"src": "1958:46:27",
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
								"src": "2008:3:27",
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
							  "memberLocation": "2012:6:27",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "2008:10:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "==",
							"rightExpression": {
							  "id": 5503,
							  "name": "MapleItems",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5390,
							  "src": "2022:10:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_address",
								"typeString": "address"
							  }
							},
							"src": "2008:24:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_bool",
							  "typeString": "bool"
							}
						  },
						  "src": "1958:74:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "524f555445525f4f525f4d41504c455f4f4e4c59",
						  "id": 5506,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2034:22:27",
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
						"id": 5491,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "1950:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5507,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "1950:107:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5508,
					"nodeType": "ExpressionStatement",
					"src": "1950:107:27"
				  },
				  {
					"id": 5509,
					"nodeType": "PlaceholderStatement",
					"src": "2067:1:27"
				  }
				]
			  },
			  "id": 5511,
			  "name": "routerOnly",
			  "nameLocation": "1927:10:27",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5490,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "1937:2:27"
			  },
			  "src": "1918:157:27",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5520,
				"nodeType": "Block",
				"src": "2134:76:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5515,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "UnaryOperation",
						  "operator": "!",
						  "prefix": true,
						  "src": "2152:18:27",
						  "subExpression": {
							"id": 5514,
							"name": "fundsAlreadyMoved",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5377,
							"src": "2153:17:27",
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
						  "id": 5516,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2172:19:27",
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
						"id": 5513,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2144:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5517,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2144:48:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5518,
					"nodeType": "ExpressionStatement",
					"src": "2144:48:27"
				  },
				  {
					"id": 5519,
					"nodeType": "PlaceholderStatement",
					"src": "2202:1:27"
				  }
				]
			  },
			  "id": 5521,
			  "name": "areFundsMoved",
			  "nameLocation": "2118:13:27",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5512,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2131:2:27"
			  },
			  "src": "2109:101:27",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5530,
				"nodeType": "Block",
				"src": "2264:73:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5525,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "nodeType": "UnaryOperation",
						  "operator": "!",
						  "prefix": true,
						  "src": "2282:17:27",
						  "subExpression": {
							"id": 5524,
							"name": "isContractPaused",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5375,
							"src": "2283:16:27",
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
						  "id": 5526,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2301:17:27",
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
						"id": 5523,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2274:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5527,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2274:45:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5528,
					"nodeType": "ExpressionStatement",
					"src": "2274:45:27"
				  },
				  {
					"id": 5529,
					"nodeType": "PlaceholderStatement",
					"src": "2329:1:27"
				  }
				]
			  },
			  "id": 5531,
			  "name": "isPaused",
			  "nameLocation": "2253:8:27",
			  "nodeType": "ModifierDefinition",
			  "parameters": {
				"id": 5522,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2261:2:27"
			  },
			  "src": "2244:93:27",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5555,
				"nodeType": "Block",
				"src": "2502:110:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5547,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5541,
								"name": "Router",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5386,
								"src": "2528:6:27",
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
							  "id": 5540,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2520:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5539,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2520:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5542,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2520:15:27",
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
								"id": 5545,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "2547:1:27",
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
							  "id": 5544,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2539:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5543,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2539:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5546,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2539:10:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "2520:29:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5548,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2551:13:27",
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
						"id": 5538,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2512:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5549,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2512:53:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5550,
					"nodeType": "ExpressionStatement",
					"src": "2512:53:27"
				  },
				  {
					"expression": {
					  "id": 5553,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5551,
						"name": "Router",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5386,
						"src": "2589:6:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5552,
						"name": "_router",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5533,
						"src": "2598:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "2589:16:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5554,
					"nodeType": "ExpressionStatement",
					"src": "2589:16:27"
				  }
				]
			  },
			  "functionSelector": "41cb87fc",
			  "id": 5556,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5536,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5535,
					"name": "ownerOnly",
					"nameLocations": [
					  "2492:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5472,
					"src": "2492:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2492:9:27"
				}
			  ],
			  "name": "setRouterAddress",
			  "nameLocation": "2448:16:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5534,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5533,
					"mutability": "mutable",
					"name": "_router",
					"nameLocation": "2473:7:27",
					"nodeType": "VariableDeclaration",
					"scope": 5556,
					"src": "2465:15:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5532,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "2465:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2464:17:27"
			  },
			  "returnParameters": {
				"id": 5537,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2502:0:27"
			  },
			  "scope": 6105,
			  "src": "2439:173:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5580,
				"nodeType": "Block",
				"src": "2684:102:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5572,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5566,
								"name": "MapleNFT",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5388,
								"src": "2710:8:27",
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
							  "id": 5565,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2702:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5564,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2702:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5567,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2702:17:27",
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
								"id": 5570,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "2731:1:27",
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
							  "id": 5569,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2723:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5568,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2723:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5571,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2723:10:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "2702:31:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5573,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2735:13:27",
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
						"id": 5563,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2694:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5574,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2694:55:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5575,
					"nodeType": "ExpressionStatement",
					"src": "2694:55:27"
				  },
				  {
					"expression": {
					  "id": 5578,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5576,
						"name": "MapleNFT",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5388,
						"src": "2759:8:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5577,
						"name": "_mapleNft",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5558,
						"src": "2770:9:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "2759:20:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5579,
					"nodeType": "ExpressionStatement",
					"src": "2759:20:27"
				  }
				]
			  },
			  "functionSelector": "83925460",
			  "id": 5581,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5561,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5560,
					"name": "ownerOnly",
					"nameLocations": [
					  "2674:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5472,
					"src": "2674:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2674:9:27"
				}
			  ],
			  "name": "setMapleNFTAddress",
			  "nameLocation": "2626:18:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5559,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5558,
					"mutability": "mutable",
					"name": "_mapleNft",
					"nameLocation": "2653:9:27",
					"nodeType": "VariableDeclaration",
					"scope": 5581,
					"src": "2645:17:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5557,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "2645:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2644:19:27"
			  },
			  "returnParameters": {
				"id": 5562,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2684:0:27"
			  },
			  "scope": 6105,
			  "src": "2617:169:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5605,
				"nodeType": "Block",
				"src": "2863:108:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5597,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5591,
								"name": "MapleItems",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5390,
								"src": "2889:10:27",
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
							  "id": 5590,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2881:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5589,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2881:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5592,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2881:19:27",
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
								"id": 5595,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "2912:1:27",
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
							  "id": 5594,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "2904:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5593,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "2904:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5596,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "2904:10:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "2881:33:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5598,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "2916:13:27",
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
						"id": 5588,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "2873:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5599,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "2873:57:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5600,
					"nodeType": "ExpressionStatement",
					"src": "2873:57:27"
				  },
				  {
					"expression": {
					  "id": 5603,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5601,
						"name": "MapleItems",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5390,
						"src": "2940:10:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5602,
						"name": "_mapleItems",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5583,
						"src": "2953:11:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "2940:24:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5604,
					"nodeType": "ExpressionStatement",
					"src": "2940:24:27"
				  }
				]
			  },
			  "functionSelector": "ec71ef89",
			  "id": 5606,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5586,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5585,
					"name": "ownerOnly",
					"nameLocations": [
					  "2853:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5472,
					"src": "2853:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "2853:9:27"
				}
			  ],
			  "name": "setMapleItemsAddress",
			  "nameLocation": "2800:20:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5584,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5583,
					"mutability": "mutable",
					"name": "_mapleItems",
					"nameLocation": "2829:11:27",
					"nodeType": "VariableDeclaration",
					"scope": 5606,
					"src": "2821:19:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5582,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "2821:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "2820:22:27"
			  },
			  "returnParameters": {
				"id": 5587,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "2863:0:27"
			  },
			  "scope": 6105,
			  "src": "2791:180:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5630,
				"nodeType": "Block",
				"src": "3042:99:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5622,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"id": 5616,
								"name": "Staking",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5402,
								"src": "3068:7:27",
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
							  "id": 5615,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "3060:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5614,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "3060:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5617,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "3060:16:27",
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
								"id": 5620,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "3088:1:27",
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
							  "id": 5619,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "3080:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5618,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "3080:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5621,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "3080:10:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "3060:30:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "57524954455f4f4e434521",
						  "id": 5623,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "3092:13:27",
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
						"id": 5613,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "3052:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5624,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3052:54:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5625,
					"nodeType": "ExpressionStatement",
					"src": "3052:54:27"
				  },
				  {
					"expression": {
					  "id": 5628,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5626,
						"name": "Staking",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5402,
						"src": "3116:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5627,
						"name": "_staking",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5608,
						"src": "3126:8:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "3116:18:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 5629,
					"nodeType": "ExpressionStatement",
					"src": "3116:18:27"
				  }
				]
			  },
			  "functionSelector": "f4e0d9ac",
			  "id": 5631,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5611,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5610,
					"name": "ownerOnly",
					"nameLocations": [
					  "3032:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5472,
					"src": "3032:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3032:9:27"
				}
			  ],
			  "name": "setStakingAddress",
			  "nameLocation": "2985:17:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5609,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5608,
					"mutability": "mutable",
					"name": "_staking",
					"nameLocation": "3011:8:27",
					"nodeType": "VariableDeclaration",
					"scope": 5631,
					"src": "3003:16:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5607,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "3003:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "3002:19:27"
			  },
			  "returnParameters": {
				"id": 5612,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3042:0:27"
			  },
			  "scope": 6105,
			  "src": "2976:165:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5671,
				"nodeType": "Block",
				"src": "3233:282:27",
				"statements": [
				  {
					"assignments": [
					  5639
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5639,
						"mutability": "mutable",
						"name": "tokenAmount",
						"nameLocation": "3285:11:27",
						"nodeType": "VariableDeclaration",
						"scope": 5671,
						"src": "3277:19:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5638,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "3277:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5644,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 5643,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"expression": {
						  "id": 5640,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "3299:3:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5641,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3303:5:27",
						"memberName": "value",
						"nodeType": "MemberAccess",
						"src": "3299:9:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "*",
					  "rightExpression": {
						"hexValue": "313030",
						"id": 5642,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "3311:3:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_100_by_1",
						  "typeString": "int_const 100"
						},
						"value": "100"
					  },
					  "src": "3299:15:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "3277:37:27"
				  },
				  {
					"expression": {
					  "id": 5650,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5645,
						  "name": "balancesToClaim",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5406,
						  "src": "3324:15:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 5648,
						"indexExpression": {
						  "expression": {
							"id": 5646,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3340:3:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5647,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3344:6:27",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3340:10:27",
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
						"src": "3324:27:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "+=",
					  "rightHandSide": {
						"id": 5649,
						"name": "tokenAmount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5639,
						"src": "3355:11:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "3324:42:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5651,
					"nodeType": "ExpressionStatement",
					"src": "3324:42:27"
				  },
				  {
					"expression": {
					  "id": 5658,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5652,
						  "name": "contributionsOf",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5410,
						  "src": "3376:15:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 5655,
						"indexExpression": {
						  "expression": {
							"id": 5653,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3392:3:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5654,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3396:6:27",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3392:10:27",
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
						"src": "3376:27:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "+=",
					  "rightHandSide": {
						"expression": {
						  "id": 5656,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "3407:3:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5657,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3411:5:27",
						"memberName": "value",
						"nodeType": "MemberAccess",
						"src": "3407:9:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "3376:40:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5659,
					"nodeType": "ExpressionStatement",
					"src": "3376:40:27"
				  },
				  {
					"expression": {
					  "id": 5663,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5660,
						"name": "totalContributed",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5373,
						"src": "3426:16:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "+=",
					  "rightHandSide": {
						"expression": {
						  "id": 5661,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "3446:3:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5662,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3450:5:27",
						"memberName": "value",
						"nodeType": "MemberAccess",
						"src": "3446:9:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "3426:29:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5664,
					"nodeType": "ExpressionStatement",
					"src": "3426:29:27"
				  },
				  {
					"eventCall": {
					  "arguments": [
						{
						  "expression": {
							"id": 5666,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3484:3:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5667,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3488:6:27",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3484:10:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5668,
						  "name": "tokenAmount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5639,
						  "src": "3496:11:27",
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
						"id": 5665,
						"name": "TokensBought",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5360,
						"src": "3471:12:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5669,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3471:37:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5670,
					"nodeType": "EmitStatement",
					"src": "3466:42:27"
				  }
				]
			  },
			  "functionSelector": "d7bb99ba",
			  "id": 5672,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5634,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5633,
					"name": "isPaused",
					"nameLocations": [
					  "3210:8:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5531,
					"src": "3210:8:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3210:8:27"
				},
				{
				  "id": 5636,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5635,
					"name": "areFundsMoved",
					"nameLocations": [
					  "3219:13:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5521,
					"src": "3219:13:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3219:13:27"
				}
			  ],
			  "name": "contribute",
			  "nameLocation": "3180:10:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5632,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3190:2:27"
			  },
			  "returnParameters": {
				"id": 5637,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3233:0:27"
			  },
			  "scope": 6105,
			  "src": "3171:344:27",
			  "stateMutability": "payable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5715,
				"nodeType": "Block",
				"src": "3615:345:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5685,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"baseExpression": {
							  "id": 5680,
							  "name": "balancesToClaim",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5406,
							  "src": "3633:15:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
								"typeString": "mapping(address => uint256)"
							  }
							},
							"id": 5683,
							"indexExpression": {
							  "expression": {
								"id": 5681,
								"name": "msg",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967281,
								"src": "3649:3:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_magic_message",
								  "typeString": "msg"
								}
							  },
							  "id": 5682,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "3653:6:27",
							  "memberName": "sender",
							  "nodeType": "MemberAccess",
							  "src": "3649:10:27",
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
							"src": "3633:27:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": ">",
						  "rightExpression": {
							"hexValue": "30",
							"id": 5684,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "number",
							"lValueRequested": false,
							"nodeType": "Literal",
							"src": "3663:1:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_rational_0_by_1",
							  "typeString": "int_const 0"
							},
							"value": "0"
						  },
						  "src": "3633:31:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "4e4f5f415641494c41424c455f46554e4453",
						  "id": 5686,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "3666:20:27",
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
						"id": 5679,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "3625:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5687,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3625:62:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5688,
					"nodeType": "ExpressionStatement",
					"src": "3625:62:27"
				  },
				  {
					"assignments": [
					  5690
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5690,
						"mutability": "mutable",
						"name": "tokensToClaim",
						"nameLocation": "3768:13:27",
						"nodeType": "VariableDeclaration",
						"scope": 5715,
						"src": "3760:21:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5689,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "3760:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5695,
					"initialValue": {
					  "baseExpression": {
						"id": 5691,
						"name": "balancesToClaim",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5406,
						"src": "3784:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
						  "typeString": "mapping(address => uint256)"
						}
					  },
					  "id": 5694,
					  "indexExpression": {
						"expression": {
						  "id": 5692,
						  "name": "msg",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967281,
						  "src": "3800:3:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_magic_message",
							"typeString": "msg"
						  }
						},
						"id": 5693,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3804:6:27",
						"memberName": "sender",
						"nodeType": "MemberAccess",
						"src": "3800:10:27",
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
					  "src": "3784:27:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "3760:51:27"
				  },
				  {
					"expression": {
					  "id": 5701,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5696,
						  "name": "balancesToClaim",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5406,
						  "src": "3821:15:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
							"typeString": "mapping(address => uint256)"
						  }
						},
						"id": 5699,
						"indexExpression": {
						  "expression": {
							"id": 5697,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3837:3:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5698,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3841:6:27",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3837:10:27",
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
						"src": "3821:27:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "30",
						"id": 5700,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "3851:1:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_0_by_1",
						  "typeString": "int_const 0"
						},
						"value": "0"
					  },
					  "src": "3821:31:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 5702,
					"nodeType": "ExpressionStatement",
					"src": "3821:31:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5708,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "3887:4:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$6105",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$6105",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5707,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "3879:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5706,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "3879:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5709,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "3879:13:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "expression": {
							"id": 5710,
							"name": "msg",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 4294967281,
							"src": "3894:3:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_magic_message",
							  "typeString": "msg"
							}
						  },
						  "id": 5711,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "3898:6:27",
						  "memberName": "sender",
						  "nodeType": "MemberAccess",
						  "src": "3894:10:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5712,
						  "name": "tokensToClaim",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5690,
						  "src": "3906:13:27",
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
						  "id": 5703,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "3863:5:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$6105_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5705,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "3869:9:27",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2234,
						"src": "3863:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5713,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "3863:57:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5714,
					"nodeType": "ExpressionStatement",
					"src": "3863:57:27"
				  }
				]
			  },
			  "functionSelector": "48c54b9d",
			  "id": 5716,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5675,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5674,
					"name": "isPaused",
					"nameLocations": [
					  "3592:8:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5531,
					"src": "3592:8:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3592:8:27"
				},
				{
				  "id": 5677,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5676,
					"name": "areFundsMoved",
					"nameLocations": [
					  "3601:13:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5521,
					"src": "3601:13:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "3601:13:27"
				}
			  ],
			  "name": "claimTokens",
			  "nameLocation": "3569:11:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5673,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3580:2:27"
			  },
			  "returnParameters": {
				"id": 5678,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "3615:0:27"
			  },
			  "scope": 6105,
			  "src": "3560:400:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5729,
				"nodeType": "Block",
				"src": "4051:81:27",
				"statements": [
				  {
					"expression": {
					  "id": 5724,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5721,
						"name": "isContractPaused",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5375,
						"src": "4061:16:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5723,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"nodeType": "UnaryOperation",
						"operator": "!",
						"prefix": true,
						"src": "4080:17:27",
						"subExpression": {
						  "id": 5722,
						  "name": "isContractPaused",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5375,
						  "src": "4081:16:27",
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
					  "src": "4061:36:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5725,
					"nodeType": "ExpressionStatement",
					"src": "4061:36:27"
				  },
				  {
					"eventCall": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5726,
						"name": "OwnerAction",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5362,
						"src": "4112:11:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5727,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4112:13:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5728,
					"nodeType": "EmitStatement",
					"src": "4107:18:27"
				  }
				]
			  },
			  "functionSelector": "d1cabc35",
			  "id": 5730,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5719,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5718,
					"name": "ownerOnly",
					"nameLocations": [
					  "4041:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5472,
					"src": "4041:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "4041:9:27"
				}
			  ],
			  "name": "togglePauseContract",
			  "nameLocation": "4010:19:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5717,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4029:2:27"
			  },
			  "returnParameters": {
				"id": 5720,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4051:0:27"
			  },
			  "scope": 6105,
			  "src": "4001:131:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5743,
				"nodeType": "Block",
				"src": "4211:63:27",
				"statements": [
				  {
					"expression": {
					  "id": 5738,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5735,
						"name": "isTaxOn",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5380,
						"src": "4221:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 5737,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"nodeType": "UnaryOperation",
						"operator": "!",
						"prefix": true,
						"src": "4231:8:27",
						"subExpression": {
						  "id": 5736,
						  "name": "isTaxOn",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5380,
						  "src": "4232:7:27",
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
					  "src": "4221:18:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5739,
					"nodeType": "ExpressionStatement",
					"src": "4221:18:27"
				  },
				  {
					"eventCall": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5740,
						"name": "OwnerAction",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5362,
						"src": "4254:11:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5741,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4254:13:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5742,
					"nodeType": "EmitStatement",
					"src": "4249:18:27"
				  }
				]
			  },
			  "functionSelector": "10bf6029",
			  "id": 5744,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5733,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5732,
					"name": "ownerOnly",
					"nameLocations": [
					  "4201:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5472,
					"src": "4201:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "4201:9:27"
				}
			  ],
			  "name": "toggleTax",
			  "nameLocation": "4180:9:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5731,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4189:2:27"
			  },
			  "returnParameters": {
				"id": 5734,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4211:0:27"
			  },
			  "scope": 6105,
			  "src": "4171:103:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5757,
				"nodeType": "Block",
				"src": "4371:46:27",
				"statements": [
				  {
					"expression": {
					  "id": 5755,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"baseExpression": {
						  "id": 5751,
						  "name": "isWhitelisted",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5414,
						  "src": "4381:13:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
							"typeString": "mapping(address => bool)"
						  }
						},
						"id": 5753,
						"indexExpression": {
						  "id": 5752,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5746,
						  "src": "4395:7:27",
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
						"src": "4381:22:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "74727565",
						"id": 5754,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "4406:4:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "true"
					  },
					  "src": "4381:29:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5756,
					"nodeType": "ExpressionStatement",
					"src": "4381:29:27"
				  }
				]
			  },
			  "functionSelector": "e43252d7",
			  "id": 5758,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5749,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5748,
					"name": "ownerOnly",
					"nameLocations": [
					  "4361:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5472,
					"src": "4361:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "4361:9:27"
				}
			  ],
			  "name": "addToWhitelist",
			  "nameLocation": "4320:14:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5747,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5746,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "4343:7:27",
					"nodeType": "VariableDeclaration",
					"scope": 5758,
					"src": "4335:15:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5745,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4335:7:27",
					  "stateMutability": "nonpayable",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4334:17:27"
			  },
			  "returnParameters": {
				"id": 5750,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4371:0:27"
			  },
			  "scope": 6105,
			  "src": "4311:106:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "baseFunctions": [
				2234
			  ],
			  "body": {
				"id": 5805,
				"nodeType": "Block",
				"src": "4511:412:27",
				"statements": [
				  {
					"assignments": [
					  5769
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5769,
						"mutability": "mutable",
						"name": "amountToTake",
						"nameLocation": "4529:12:27",
						"nodeType": "VariableDeclaration",
						"scope": 5805,
						"src": "4521:20:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5768,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "4521:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5770,
					"nodeType": "VariableDeclarationStatement",
					"src": "4521:20:27"
				  },
				  {
					"condition": {
					  "id": 5771,
					  "name": "isTaxOn",
					  "nodeType": "Identifier",
					  "overloadedDeclarations": [],
					  "referencedDeclaration": 5380,
					  "src": "4575:7:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5782,
					"nodeType": "IfStatement",
					"src": "4571:73:27",
					"trueBody": {
					  "id": 5781,
					  "nodeType": "Block",
					  "src": "4584:60:27",
					  "statements": [
						{
						  "expression": {
							"id": 5779,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftHandSide": {
							  "id": 5772,
							  "name": "amountToTake",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5769,
							  "src": "4598:12:27",
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
							  "id": 5778,
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
									"id": 5775,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"leftExpression": {
									  "id": 5773,
									  "name": "TAX",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 5371,
									  "src": "4614:3:27",
									  "typeDescriptions": {
										"typeIdentifier": "t_uint256",
										"typeString": "uint256"
									  }
									},
									"nodeType": "BinaryOperation",
									"operator": "*",
									"rightExpression": {
									  "id": 5774,
									  "name": "amount",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 5764,
									  "src": "4620:6:27",
									  "typeDescriptions": {
										"typeIdentifier": "t_uint256",
										"typeString": "uint256"
									  }
									},
									"src": "4614:12:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									}
								  }
								],
								"id": 5776,
								"isConstant": false,
								"isInlineArray": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"nodeType": "TupleExpression",
								"src": "4613:14:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_uint256",
								  "typeString": "uint256"
								}
							  },
							  "nodeType": "BinaryOperation",
							  "operator": "/",
							  "rightExpression": {
								"hexValue": "313030",
								"id": 5777,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "4630:3:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_rational_100_by_1",
								  "typeString": "int_const 100"
								},
								"value": "100"
							  },
							  "src": "4613:20:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"src": "4598:35:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "id": 5780,
						  "nodeType": "ExpressionStatement",
						  "src": "4598:35:27"
						}
					  ]
					}
				  },
				  {
					"assignments": [
					  5784
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5784,
						"mutability": "mutable",
						"name": "amountToTransfer",
						"nameLocation": "4661:16:27",
						"nodeType": "VariableDeclaration",
						"scope": 5805,
						"src": "4653:24:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5783,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "4653:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5788,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 5787,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 5785,
						"name": "amount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5764,
						"src": "4680:6:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "-",
					  "rightExpression": {
						"id": 5786,
						"name": "amountToTake",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5769,
						"src": "4689:12:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "4680:21:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "4653:48:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5792,
						  "name": "sender",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5760,
						  "src": "4769:6:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5793,
						  "name": "recipient",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5762,
						  "src": "4777:9:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5794,
						  "name": "amountToTransfer",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5784,
						  "src": "4788:16:27",
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
						  "id": 5789,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "4753:5:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$6105_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5791,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "4759:9:27",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2234,
						"src": "4753:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5795,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4753:52:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5796,
					"nodeType": "ExpressionStatement",
					"src": "4753:52:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5800,
						  "name": "sender",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5760,
						  "src": "4878:6:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5801,
						  "name": "treasuryWallet",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5384,
						  "src": "4886:14:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address_payable",
							"typeString": "address payable"
						  }
						},
						{
						  "id": 5802,
						  "name": "amountToTake",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5769,
						  "src": "4902:12:27",
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
						  "id": 5797,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "4862:5:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$6105_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5799,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "4868:9:27",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2234,
						"src": "4862:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5803,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "4862:53:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5804,
					"nodeType": "ExpressionStatement",
					"src": "4862:53:27"
				  }
				]
			  },
			  "id": 5806,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "_transfer",
			  "nameLocation": "4432:9:27",
			  "nodeType": "FunctionDefinition",
			  "overrides": {
				"id": 5766,
				"nodeType": "OverrideSpecifier",
				"overrides": [],
				"src": "4502:8:27"
			  },
			  "parameters": {
				"id": 5765,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5760,
					"mutability": "mutable",
					"name": "sender",
					"nameLocation": "4450:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5806,
					"src": "4442:14:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5759,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4442:7:27",
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
					"id": 5762,
					"mutability": "mutable",
					"name": "recipient",
					"nameLocation": "4466:9:27",
					"nodeType": "VariableDeclaration",
					"scope": 5806,
					"src": "4458:17:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5761,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4458:7:27",
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
					"id": 5764,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "4485:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5806,
					"src": "4477:14:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5763,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4477:7:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4441:51:27"
			  },
			  "returnParameters": {
				"id": 5767,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4511:0:27"
			  },
			  "scope": 6105,
			  "src": "4423:500:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 5845,
				"nodeType": "Block",
				"src": "4995:269:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  },
						  "id": 5821,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 5816,
							"name": "account",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5808,
							"src": "5013:7:27",
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
								"id": 5819,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "number",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "5032:1:27",
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
							  "id": 5818,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "lValueRequested": false,
							  "nodeType": "ElementaryTypeNameExpression",
							  "src": "5024:7:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_type$_t_address_$",
								"typeString": "type(address)"
							  },
							  "typeName": {
								"id": 5817,
								"name": "address",
								"nodeType": "ElementaryTypeName",
								"src": "5024:7:27",
								"typeDescriptions": {}
							  }
							},
							"id": 5820,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"kind": "typeConversion",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "5024:10:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_address",
							  "typeString": "address"
							}
						  },
						  "src": "5013:21:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
						  "id": 5822,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "5036:33:27",
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
						"id": 5815,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "5005:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5823,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5005:65:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5824,
					"nodeType": "ExpressionStatement",
					"src": "5005:65:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "commonType": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  },
						  "id": 5831,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"commonType": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							},
							"id": 5829,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "arguments": [],
							  "expression": {
								"argumentTypes": [],
								"id": 5826,
								"name": "totalSupply",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 1972,
								"src": "5127:11:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
								  "typeString": "function () view returns (uint256)"
								}
							  },
							  "id": 5827,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "kind": "functionCall",
							  "lValueRequested": false,
							  "nameLocations": [],
							  "names": [],
							  "nodeType": "FunctionCall",
							  "src": "5127:13:27",
							  "tryCall": false,
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"nodeType": "BinaryOperation",
							"operator": "+",
							"rightExpression": {
							  "id": 5828,
							  "name": "amount",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5810,
							  "src": "5143:6:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_uint256",
								"typeString": "uint256"
							  }
							},
							"src": "5127:22:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "<=",
						  "rightExpression": {
							"id": 5830,
							"name": "MAX_SUPPLY",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5368,
							"src": "5153:10:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "5127:36:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_bool",
							"typeString": "bool"
						  }
						},
						{
						  "hexValue": "41424f56455f4d41585f535550504c59",
						  "id": 5832,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "string",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "5165:18:27",
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
						"id": 5825,
						"name": "require",
						"nodeType": "Identifier",
						"overloadedDeclarations": [
						  4294967278,
						  4294967278
						],
						"referencedDeclaration": 4294967278,
						"src": "5119:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
						  "typeString": "function (bool,string memory) pure"
						}
					  },
					  "id": 5833,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5119:65:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5834,
					"nodeType": "ExpressionStatement",
					"src": "5119:65:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5836,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5808,
						  "src": "5224:7:27",
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
						  "id": 5842,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 5837,
							"name": "amount",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5810,
							"src": "5233:6:27",
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
							"id": 5841,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "hexValue": "3130",
							  "id": 5838,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "kind": "number",
							  "lValueRequested": false,
							  "nodeType": "Literal",
							  "src": "5242:2:27",
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
								"id": 5839,
								"name": "decimals",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 1962,
								"src": "5246:8:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
								  "typeString": "function () view returns (uint8)"
								}
							  },
							  "id": 5840,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "kind": "functionCall",
							  "lValueRequested": false,
							  "nameLocations": [],
							  "names": [],
							  "nodeType": "FunctionCall",
							  "src": "5246:10:27",
							  "tryCall": false,
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"src": "5242:14:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "5233:23:27",
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
						"id": 5835,
						"name": "_mint",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2290,
						"src": "5218:5:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5843,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5218:39:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5844,
					"nodeType": "ExpressionStatement",
					"src": "5218:39:27"
				  }
				]
			  },
			  "functionSelector": "40c10f19",
			  "id": 5846,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5813,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5812,
					"name": "ownerOnly",
					"nameLocations": [
					  "4985:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5472,
					"src": "4985:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "4985:9:27"
				}
			  ],
			  "name": "mint",
			  "nameLocation": "4938:4:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5811,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5808,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "4951:7:27",
					"nodeType": "VariableDeclaration",
					"scope": 5846,
					"src": "4943:15:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5807,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "4943:7:27",
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
					"id": 5810,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "4968:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5846,
					"src": "4960:14:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5809,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "4960:7:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "4942:33:27"
			  },
			  "returnParameters": {
				"id": 5814,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "4995:0:27"
			  },
			  "scope": 6105,
			  "src": "4929:335:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5865,
				"nodeType": "Block",
				"src": "5340:56:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5856,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5848,
						  "src": "5356:7:27",
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
						  "id": 5862,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"id": 5857,
							"name": "amount",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5850,
							"src": "5365:6:27",
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
							"id": 5861,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"lValueRequested": false,
							"leftExpression": {
							  "hexValue": "3130",
							  "id": 5858,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": true,
							  "kind": "number",
							  "lValueRequested": false,
							  "nodeType": "Literal",
							  "src": "5374:2:27",
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
								"id": 5859,
								"name": "decimals",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 1962,
								"src": "5378:8:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
								  "typeString": "function () view returns (uint8)"
								}
							  },
							  "id": 5860,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "kind": "functionCall",
							  "lValueRequested": false,
							  "nameLocations": [],
							  "names": [],
							  "nodeType": "FunctionCall",
							  "src": "5378:10:27",
							  "tryCall": false,
							  "typeDescriptions": {
								"typeIdentifier": "t_uint8",
								"typeString": "uint8"
							  }
							},
							"src": "5374:14:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "5365:23:27",
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
						"id": 5855,
						"name": "_burn",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2362,
						"src": "5350:5:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5863,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5350:39:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5864,
					"nodeType": "ExpressionStatement",
					"src": "5350:39:27"
				  }
				]
			  },
			  "functionSelector": "9dc29fac",
			  "id": 5866,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5853,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5852,
					"name": "ownerOnly",
					"nameLocations": [
					  "5330:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5472,
					"src": "5330:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "5330:9:27"
				}
			  ],
			  "name": "burn",
			  "nameLocation": "5283:4:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5851,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5848,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "5296:7:27",
					"nodeType": "VariableDeclaration",
					"scope": 5866,
					"src": "5288:15:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5847,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "5288:7:27",
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
					"id": 5850,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "5313:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5866,
					"src": "5305:14:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5849,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5305:7:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5287:33:27"
			  },
			  "returnParameters": {
				"id": 5854,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5340:0:27"
			  },
			  "scope": 6105,
			  "src": "5274:122:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5880,
				"nodeType": "Block",
				"src": "5477:40:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5876,
						  "name": "account",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5868,
						  "src": "5493:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5877,
						  "name": "amount",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5870,
						  "src": "5502:6:27",
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
						"id": 5875,
						"name": "_burn",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2362,
						"src": "5487:5:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,uint256)"
						}
					  },
					  "id": 5878,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5487:22:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5879,
					"nodeType": "ExpressionStatement",
					"src": "5487:22:27"
				  }
				]
			  },
			  "functionSelector": "1d057bd9",
			  "id": 5881,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5873,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5872,
					"name": "mapleNFTOnly",
					"nameLocations": [
					  "5464:12:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5489,
					"src": "5464:12:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "5464:12:27"
				}
			  ],
			  "name": "marketBurn",
			  "nameLocation": "5411:10:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5871,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5868,
					"mutability": "mutable",
					"name": "account",
					"nameLocation": "5430:7:27",
					"nodeType": "VariableDeclaration",
					"scope": 5881,
					"src": "5422:15:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5867,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "5422:7:27",
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
					"id": 5870,
					"mutability": "mutable",
					"name": "amount",
					"nameLocation": "5447:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5881,
					"src": "5439:14:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5869,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5439:7:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5421:33:27"
			  },
			  "returnParameters": {
				"id": 5874,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "5477:0:27"
			  },
			  "scope": 6105,
			  "src": "5402:115:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5911,
				"nodeType": "Block",
				"src": "5807:328:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5895,
						  "name": "_owner",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5883,
						  "src": "5994:6:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5896,
						  "name": "_spender",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5885,
						  "src": "6022:8:27",
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
						  "id": 5906,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "leftExpression": {
							"arguments": [
							  {
								"expression": {
								  "id": 5898,
								  "name": "msg",
								  "nodeType": "Identifier",
								  "overloadedDeclarations": [],
								  "referencedDeclaration": 4294967281,
								  "src": "6060:3:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_magic_message",
									"typeString": "msg"
								  }
								},
								"id": 5899,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"lValueRequested": false,
								"memberLocation": "6064:6:27",
								"memberName": "sender",
								"nodeType": "MemberAccess",
								"src": "6060:10:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  {
								"arguments": [
								  {
									"id": 5902,
									"name": "this",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 4294967268,
									"src": "6080:4:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_contract$_JMToken_$6105",
									  "typeString": "contract JMToken"
									}
								  }
								],
								"expression": {
								  "argumentTypes": [
									{
									  "typeIdentifier": "t_contract$_JMToken_$6105",
									  "typeString": "contract JMToken"
									}
								  ],
								  "id": 5901,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "lValueRequested": false,
								  "nodeType": "ElementaryTypeNameExpression",
								  "src": "6072:7:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_type$_t_address_$",
									"typeString": "type(address)"
								  },
								  "typeName": {
									"id": 5900,
									"name": "address",
									"nodeType": "ElementaryTypeName",
									"src": "6072:7:27",
									"typeDescriptions": {}
								  }
								},
								"id": 5903,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"kind": "typeConversion",
								"lValueRequested": false,
								"nameLocations": [],
								"names": [],
								"nodeType": "FunctionCall",
								"src": "6072:13:27",
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
							  "id": 5897,
							  "name": "allowance",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 2029,
							  "src": "6050:9:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_view$_t_address_$_t_address_$returns$_t_uint256_$",
								"typeString": "function (address,address) view returns (uint256)"
							  }
							},
							"id": 5904,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "6050:36:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "nodeType": "BinaryOperation",
						  "operator": "+",
						  "rightExpression": {
							"id": 5905,
							"name": "_amount",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5887,
							"src": "6089:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  },
						  "src": "6050:46:27",
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
						"id": 5894,
						"name": "_approve",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 2407,
						"src": "5972:8:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5907,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "5972:134:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5908,
					"nodeType": "ExpressionStatement",
					"src": "5972:134:27"
				  },
				  {
					"expression": {
					  "hexValue": "74727565",
					  "id": 5909,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": true,
					  "kind": "bool",
					  "lValueRequested": false,
					  "nodeType": "Literal",
					  "src": "6124:4:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  },
					  "value": "true"
					},
					"functionReturnParameters": 5893,
					"id": 5910,
					"nodeType": "Return",
					"src": "6117:11:27"
				  }
				]
			  },
			  "functionSelector": "d83a2bf3",
			  "id": 5912,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5890,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5889,
					"name": "routerOnly",
					"nameLocations": [
					  "5781:10:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5511,
					"src": "5781:10:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "5781:10:27"
				}
			  ],
			  "name": "increaseContractAllowance",
			  "nameLocation": "5689:25:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5888,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5883,
					"mutability": "mutable",
					"name": "_owner",
					"nameLocation": "5723:6:27",
					"nodeType": "VariableDeclaration",
					"scope": 5912,
					"src": "5715:14:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5882,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "5715:7:27",
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
					"id": 5885,
					"mutability": "mutable",
					"name": "_spender",
					"nameLocation": "5738:8:27",
					"nodeType": "VariableDeclaration",
					"scope": 5912,
					"src": "5730:16:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 5884,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "5730:7:27",
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
					"id": 5887,
					"mutability": "mutable",
					"name": "_amount",
					"nameLocation": "5755:7:27",
					"nodeType": "VariableDeclaration",
					"scope": 5912,
					"src": "5747:15:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 5886,
					  "name": "uint256",
					  "nodeType": "ElementaryTypeName",
					  "src": "5747:7:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5714:49:27"
			  },
			  "returnParameters": {
				"id": 5893,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5892,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 5912,
					"src": "5801:4:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_bool",
					  "typeString": "bool"
					},
					"typeName": {
					  "id": 5891,
					  "name": "bool",
					  "nodeType": "ElementaryTypeName",
					  "src": "5801:4:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "5800:6:27"
			  },
			  "scope": 6105,
			  "src": "5680:455:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "public"
			},
			{
			  "body": {
				"id": 5966,
				"nodeType": "Block",
				"src": "6305:660:27",
				"statements": [
				  {
					"expression": {
					  "id": 5924,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 5922,
						"name": "fundsAlreadyMoved",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5377,
						"src": "6315:17:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"hexValue": "74727565",
						"id": 5923,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "bool",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "6335:4:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_bool",
						  "typeString": "bool"
						},
						"value": "true"
					  },
					  "src": "6315:24:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"id": 5925,
					"nodeType": "ExpressionStatement",
					"src": "6315:24:27"
				  },
				  {
					"assignments": [
					  5927
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5927,
						"mutability": "mutable",
						"name": "jmtCoinAmountToTransfer",
						"nameLocation": "6427:23:27",
						"nodeType": "VariableDeclaration",
						"scope": 5966,
						"src": "6419:31:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5926,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "6419:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5931,
					"initialValue": {
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
						"id": 5928,
						"name": "totalContributed",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5373,
						"src": "6453:16:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "*",
					  "rightExpression": {
						"hexValue": "313030",
						"id": 5929,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "6472:3:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_rational_100_by_1",
						  "typeString": "int_const 100"
						},
						"value": "100"
					  },
					  "src": "6453:22:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "6419:56:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5937,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "6551:4:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$6105",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$6105",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5936,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "6543:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5935,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "6543:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5938,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "6543:13:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 5941,
							  "name": "liquidityPool",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5915,
							  "src": "6578:13:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_LiquidityPool_$6665",
								"typeString": "contract LiquidityPool"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_LiquidityPool_$6665",
								"typeString": "contract LiquidityPool"
							  }
							],
							"id": 5940,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "6570:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5939,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "6570:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5942,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "6570:22:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5943,
						  "name": "jmtCoinAmountToTransfer",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5927,
						  "src": "6606:23:27",
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
						  "id": 5932,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "6514:5:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$6105_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5934,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "6520:9:27",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2234,
						"src": "6514:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5944,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6514:125:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5945,
					"nodeType": "ExpressionStatement",
					"src": "6514:125:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "id": 5951,
						  "name": "jmtCoinAmountToTransfer",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5927,
						  "src": "6781:23:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 5954,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "6826:4:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$6105",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$6105",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5953,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "6818:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5952,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "6818:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5955,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "6818:13:27",
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
							"id": 5946,
							"name": "liquidityPool",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5915,
							"src": "6721:13:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_contract$_LiquidityPool_$6665",
							  "typeString": "contract LiquidityPool"
							}
						  },
						  "id": 5948,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "lValueRequested": false,
						  "memberLocation": "6735:7:27",
						  "memberName": "deposit",
						  "nodeType": "MemberAccess",
						  "referencedDeclaration": 6560,
						  "src": "6721:21:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_function_external_payable$_t_uint256_$_t_address_$returns$__$",
							"typeString": "function (uint256,address) payable external"
						  }
						},
						"id": 5950,
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
							"id": 5949,
							"name": "totalContributed",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 5373,
							"src": "6750:16:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_uint256",
							  "typeString": "uint256"
							}
						  }
						],
						"src": "6721:46:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_payable$_t_uint256_$_t_address_$returns$__$value",
						  "typeString": "function (uint256,address) payable external"
						}
					  },
					  "id": 5956,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6721:120:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5957,
					"nodeType": "ExpressionStatement",
					"src": "6721:120:27"
				  },
				  {
					"expression": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"expression": {
						  "id": 5958,
						  "name": "liquidityPool",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5915,
						  "src": "6885:13:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_contract$_LiquidityPool_$6665",
							"typeString": "contract LiquidityPool"
						  }
						},
						"id": 5960,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "6899:16:27",
						"memberName": "setFundedReserve",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 6251,
						"src": "6885:30:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_external_nonpayable$__$returns$__$",
						  "typeString": "function () external"
						}
					  },
					  "id": 5961,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6885:32:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5962,
					"nodeType": "ExpressionStatement",
					"src": "6885:32:27"
				  },
				  {
					"expression": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5963,
						"name": "sendRemainingFundsToTreasury",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 6000,
						"src": "6928:28:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5964,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "6928:30:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5965,
					"nodeType": "ExpressionStatement",
					"src": "6928:30:27"
				  }
				]
			  },
			  "functionSelector": "1690bb4e",
			  "id": 5967,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [
				{
				  "id": 5918,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5917,
					"name": "ownerOnly",
					"nameLocations": [
					  "6277:9:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5472,
					"src": "6277:9:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "6277:9:27"
				},
				{
				  "id": 5920,
				  "kind": "modifierInvocation",
				  "modifierName": {
					"id": 5919,
					"name": "areFundsMoved",
					"nameLocations": [
					  "6287:13:27"
					],
					"nodeType": "IdentifierPath",
					"referencedDeclaration": 5521,
					"src": "6287:13:27"
				  },
				  "nodeType": "ModifierInvocation",
				  "src": "6287:13:27"
				}
			  ],
			  "name": "sendLiquidityToLPContract",
			  "nameLocation": "6213:25:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5916,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 5915,
					"mutability": "mutable",
					"name": "liquidityPool",
					"nameLocation": "6253:13:27",
					"nodeType": "VariableDeclaration",
					"scope": 5967,
					"src": "6239:27:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_contract$_LiquidityPool_$6665",
					  "typeString": "contract LiquidityPool"
					},
					"typeName": {
					  "id": 5914,
					  "nodeType": "UserDefinedTypeName",
					  "pathNode": {
						"id": 5913,
						"name": "LiquidityPool",
						"nameLocations": [
						  "6239:13:27"
						],
						"nodeType": "IdentifierPath",
						"referencedDeclaration": 6665,
						"src": "6239:13:27"
					  },
					  "referencedDeclaration": 6665,
					  "src": "6239:13:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_contract$_LiquidityPool_$6665",
						"typeString": "contract LiquidityPool"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "6238:29:27"
			  },
			  "returnParameters": {
				"id": 5921,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "6305:0:27"
			  },
			  "scope": 6105,
			  "src": "6204:761:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			},
			{
			  "body": {
				"id": 5999,
				"nodeType": "Block",
				"src": "7190:201:27",
				"statements": [
				  {
					"expression": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5970,
						"name": "MovedStakingReward",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 6027,
						"src": "7200:18:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5971,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7200:20:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5972,
					"nodeType": "ExpressionStatement",
					"src": "7200:20:27"
				  },
				  {
					"assignments": [
					  5974
					],
					"declarations": [
					  {
						"constant": false,
						"id": 5974,
						"mutability": "mutable",
						"name": "remainingJMT",
						"nameLocation": "7239:12:27",
						"nodeType": "VariableDeclaration",
						"scope": 5999,
						"src": "7231:20:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 5973,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "7231:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 5981,
					"initialValue": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5978,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "7272:4:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$6105",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$6105",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5977,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7264:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5976,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7264:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5979,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7264:13:27",
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
						"id": 5975,
						"name": "balanceOf",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 1986,
						"src": "7254:9:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
						  "typeString": "function (address) view returns (uint256)"
						}
					  },
					  "id": 5980,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7254:24:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "7231:47:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 5987,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "7312:4:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$6105",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$6105",
								"typeString": "contract JMToken"
							  }
							],
							"id": 5986,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7304:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5985,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7304:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5988,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7304:13:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 5991,
							  "name": "treasuryWallet",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5384,
							  "src": "7327:14:27",
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
							"id": 5990,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7319:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 5989,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7319:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 5992,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7319:23:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 5993,
						  "name": "remainingJMT",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 5974,
						  "src": "7344:12:27",
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
						  "id": 5982,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "7288:5:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$6105_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 5984,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "7294:9:27",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2234,
						"src": "7288:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 5994,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7288:69:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5995,
					"nodeType": "ExpressionStatement",
					"src": "7288:69:27"
				  },
				  {
					"eventCall": {
					  "arguments": [],
					  "expression": {
						"argumentTypes": [],
						"id": 5996,
						"name": "FundsMoved",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5364,
						"src": "7372:10:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_event_nonpayable$__$returns$__$",
						  "typeString": "function ()"
						}
					  },
					  "id": 5997,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7372:12:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 5998,
					"nodeType": "EmitStatement",
					"src": "7367:17:27"
				  }
				]
			  },
			  "id": 6000,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "sendRemainingFundsToTreasury",
			  "nameLocation": "7150:28:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 5968,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "7178:2:27"
			  },
			  "returnParameters": {
				"id": 5969,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "7190:0:27"
			  },
			  "scope": 6105,
			  "src": "7141:250:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 6026,
				"nodeType": "Block",
				"src": "7476:135:27",
				"statements": [
				  {
					"assignments": [
					  6004
					],
					"declarations": [
					  {
						"constant": false,
						"id": 6004,
						"mutability": "mutable",
						"name": "remainingJMT",
						"nameLocation": "7494:12:27",
						"nodeType": "VariableDeclaration",
						"scope": 6026,
						"src": "7486:20:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 6003,
						  "name": "uint256",
						  "nodeType": "ElementaryTypeName",
						  "src": "7486:7:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 6011,
					"initialValue": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 6010,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"hexValue": "333030303030",
						"id": 6005,
						"isConstant": false,
						"isLValue": false,
						"isPure": true,
						"kind": "number",
						"lValueRequested": false,
						"nodeType": "Literal",
						"src": "7509:6:27",
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
						"id": 6009,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"leftExpression": {
						  "hexValue": "3130",
						  "id": 6006,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "number",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "7518:2:27",
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
							"id": 6007,
							"name": "decimals",
							"nodeType": "Identifier",
							"overloadedDeclarations": [],
							"referencedDeclaration": 1962,
							"src": "7522:8:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
							  "typeString": "function () view returns (uint8)"
							}
						  },
						  "id": 6008,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "functionCall",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7522:10:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_uint8",
							"typeString": "uint8"
						  }
						},
						"src": "7518:14:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "7509:23:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "7486:46:27"
				  },
				  {
					"expression": {
					  "arguments": [
						{
						  "arguments": [
							{
							  "id": 6017,
							  "name": "this",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967268,
							  "src": "7566:4:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_contract$_JMToken_$6105",
								"typeString": "contract JMToken"
							  }
							}
						  ],
						  "expression": {
							"argumentTypes": [
							  {
								"typeIdentifier": "t_contract$_JMToken_$6105",
								"typeString": "contract JMToken"
							  }
							],
							"id": 6016,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7558:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 6015,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7558:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 6018,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7558:13:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "arguments": [
							{
							  "id": 6021,
							  "name": "Staking",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5402,
							  "src": "7581:7:27",
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
							"id": 6020,
							"isConstant": false,
							"isLValue": false,
							"isPure": true,
							"lValueRequested": false,
							"nodeType": "ElementaryTypeNameExpression",
							"src": "7573:7:27",
							"typeDescriptions": {
							  "typeIdentifier": "t_type$_t_address_$",
							  "typeString": "type(address)"
							},
							"typeName": {
							  "id": 6019,
							  "name": "address",
							  "nodeType": "ElementaryTypeName",
							  "src": "7573:7:27",
							  "typeDescriptions": {}
							}
						  },
						  "id": 6022,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": false,
						  "kind": "typeConversion",
						  "lValueRequested": false,
						  "nameLocations": [],
						  "names": [],
						  "nodeType": "FunctionCall",
						  "src": "7573:16:27",
						  "tryCall": false,
						  "typeDescriptions": {
							"typeIdentifier": "t_address",
							"typeString": "address"
						  }
						},
						{
						  "id": 6023,
						  "name": "remainingJMT",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 6004,
						  "src": "7591:12:27",
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
						  "id": 6012,
						  "name": "super",
						  "nodeType": "Identifier",
						  "overloadedDeclarations": [],
						  "referencedDeclaration": 4294967271,
						  "src": "7542:5:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_super$_JMToken_$6105_$",
							"typeString": "type(contract super JMToken)"
						  }
						},
						"id": 6014,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"lValueRequested": false,
						"memberLocation": "7548:9:27",
						"memberName": "_transfer",
						"nodeType": "MemberAccess",
						"referencedDeclaration": 2234,
						"src": "7542:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
						  "typeString": "function (address,address,uint256)"
						}
					  },
					  "id": 6024,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "7542:62:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_tuple$__$",
						"typeString": "tuple()"
					  }
					},
					"id": 6025,
					"nodeType": "ExpressionStatement",
					"src": "7542:62:27"
				  }
				]
			  },
			  "id": 6027,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "MovedStakingReward",
			  "nameLocation": "7446:18:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 6001,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "7464:2:27"
			  },
			  "returnParameters": {
				"id": 6002,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "7476:0:27"
			  },
			  "scope": 6105,
			  "src": "7437:174:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 6053,
				"nodeType": "Block",
				"src": "7708:141:27",
				"statements": [
				  {
					"expression": {
					  "id": 6035,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "nodeType": "UnaryOperation",
					  "operator": "++",
					  "prefix": false,
					  "src": "7734:9:27",
					  "subExpression": {
						"id": 6034,
						"name": "randNum",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5397,
						"src": "7734:7:27",
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
					"id": 6036,
					"nodeType": "ExpressionStatement",
					"src": "7734:9:27"
				  },
				  {
					"expression": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 6051,
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
									  "id": 6042,
									  "name": "block",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 4294967292,
									  "src": "7792:5:27",
									  "typeDescriptions": {
										"typeIdentifier": "t_magic_block",
										"typeString": "block"
									  }
									},
									"id": 6043,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"memberLocation": "7798:9:27",
									"memberName": "timestamp",
									"nodeType": "MemberAccess",
									"src": "7792:15:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_uint256",
									  "typeString": "uint256"
									}
								  },
								  {
									"expression": {
									  "id": 6044,
									  "name": "msg",
									  "nodeType": "Identifier",
									  "overloadedDeclarations": [],
									  "referencedDeclaration": 4294967281,
									  "src": "7809:3:27",
									  "typeDescriptions": {
										"typeIdentifier": "t_magic_message",
										"typeString": "msg"
									  }
									},
									"id": 6045,
									"isConstant": false,
									"isLValue": false,
									"isPure": false,
									"lValueRequested": false,
									"memberLocation": "7813:6:27",
									"memberName": "sender",
									"nodeType": "MemberAccess",
									"src": "7809:10:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_address",
									  "typeString": "address"
									}
								  },
								  {
									"id": 6046,
									"name": "randNum",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 5397,
									"src": "7821:7:27",
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
									"id": 6040,
									"name": "abi",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 4294967295,
									"src": "7775:3:27",
									"typeDescriptions": {
									  "typeIdentifier": "t_magic_abi",
									  "typeString": "abi"
									}
								  },
								  "id": 6041,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "lValueRequested": false,
								  "memberLocation": "7779:12:27",
								  "memberName": "encodePacked",
								  "nodeType": "MemberAccess",
								  "src": "7775:16:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
									"typeString": "function () pure returns (bytes memory)"
								  }
								},
								"id": 6047,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"kind": "functionCall",
								"lValueRequested": false,
								"nameLocations": [],
								"names": [],
								"nodeType": "FunctionCall",
								"src": "7775:54:27",
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
							  "id": 6039,
							  "name": "keccak256",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 4294967288,
							  "src": "7765:9:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
								"typeString": "function (bytes memory) pure returns (bytes32)"
							  }
							},
							"id": 6048,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "7765:65:27",
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
						  "id": 6038,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "lValueRequested": false,
						  "nodeType": "ElementaryTypeNameExpression",
						  "src": "7760:4:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_type$_t_uint256_$",
							"typeString": "type(uint256)"
						  },
						  "typeName": {
							"id": 6037,
							"name": "uint",
							"nodeType": "ElementaryTypeName",
							"src": "7760:4:27",
							"typeDescriptions": {}
						  }
						},
						"id": 6049,
						"isConstant": false,
						"isLValue": false,
						"isPure": false,
						"kind": "typeConversion",
						"lValueRequested": false,
						"nameLocations": [],
						"names": [],
						"nodeType": "FunctionCall",
						"src": "7760:71:27",
						"tryCall": false,
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "%",
					  "rightExpression": {
						"id": 6050,
						"name": "_modulus",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 6029,
						"src": "7834:8:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "7760:82:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"functionReturnParameters": 6033,
					"id": 6052,
					"nodeType": "Return",
					"src": "7753:89:27"
				  }
				]
			  },
			  "id": 6054,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "randMod",
			  "nameLocation": "7662:7:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 6030,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 6029,
					"mutability": "mutable",
					"name": "_modulus",
					"nameLocation": "7675:8:27",
					"nodeType": "VariableDeclaration",
					"scope": 6054,
					"src": "7670:13:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 6028,
					  "name": "uint",
					  "nodeType": "ElementaryTypeName",
					  "src": "7670:4:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "7669:15:27"
			  },
			  "returnParameters": {
				"id": 6033,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 6032,
					"mutability": "mutable",
					"name": "",
					"nameLocation": "-1:-1:-1",
					"nodeType": "VariableDeclaration",
					"scope": 6054,
					"src": "7702:4:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 6031,
					  "name": "uint",
					  "nodeType": "ElementaryTypeName",
					  "src": "7702:4:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "7701:6:27"
			  },
			  "scope": 6105,
			  "src": "7653:196:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "internal"
			},
			{
			  "body": {
				"id": 6103,
				"nodeType": "Block",
				"src": "7918:403:27",
				"statements": [
				  {
					"expression": {
					  "id": 6063,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 6061,
						"name": "winRewardAddr",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5392,
						"src": "7928:13:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 6062,
						"name": "_addr",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 6056,
						"src": "7944:5:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_address",
						  "typeString": "address"
						}
					  },
					  "src": "7928:21:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_address",
						"typeString": "address"
					  }
					},
					"id": 6064,
					"nodeType": "ExpressionStatement",
					"src": "7928:21:27"
				  },
				  {
					"expression": {
					  "id": 6067,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftHandSide": {
						"id": 6065,
						"name": "winRewardAmount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5394,
						"src": "7959:15:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "Assignment",
					  "operator": "=",
					  "rightHandSide": {
						"id": 6066,
						"name": "_amount",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 6058,
						"src": "7977:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "7959:25:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"id": 6068,
					"nodeType": "ExpressionStatement",
					"src": "7959:25:27"
				  },
				  {
					"assignments": [
					  6070
					],
					"declarations": [
					  {
						"constant": false,
						"id": 6070,
						"mutability": "mutable",
						"name": "rand",
						"nameLocation": "7999:4:27",
						"nodeType": "VariableDeclaration",
						"scope": 6103,
						"src": "7994:9:27",
						"stateVariable": false,
						"storageLocation": "default",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						},
						"typeName": {
						  "id": 6069,
						  "name": "uint",
						  "nodeType": "ElementaryTypeName",
						  "src": "7994:4:27",
						  "typeDescriptions": {
							"typeIdentifier": "t_uint256",
							"typeString": "uint256"
						  }
						},
						"visibility": "internal"
					  }
					],
					"id": 6074,
					"initialValue": {
					  "arguments": [
						{
						  "hexValue": "313030",
						  "id": 6072,
						  "isConstant": false,
						  "isLValue": false,
						  "isPure": true,
						  "kind": "number",
						  "lValueRequested": false,
						  "nodeType": "Literal",
						  "src": "8014:3:27",
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
						"id": 6071,
						"name": "randMod",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 6054,
						"src": "8006:7:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$",
						  "typeString": "function (uint256) returns (uint256)"
						}
					  },
					  "id": 6073,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "kind": "functionCall",
					  "lValueRequested": false,
					  "nameLocations": [],
					  "names": [],
					  "nodeType": "FunctionCall",
					  "src": "8006:12:27",
					  "tryCall": false,
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"nodeType": "VariableDeclarationStatement",
					"src": "7994:24:27"
				  },
				  {
					"condition": {
					  "commonType": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  },
					  "id": 6077,
					  "isConstant": false,
					  "isLValue": false,
					  "isPure": false,
					  "lValueRequested": false,
					  "leftExpression": {
						"id": 6075,
						"name": "rand",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 6070,
						"src": "8033:4:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "nodeType": "BinaryOperation",
					  "operator": "<=",
					  "rightExpression": {
						"id": 6076,
						"name": "rewardProbability",
						"nodeType": "Identifier",
						"overloadedDeclarations": [],
						"referencedDeclaration": 5400,
						"src": "8041:17:27",
						"typeDescriptions": {
						  "typeIdentifier": "t_uint256",
						  "typeString": "uint256"
						}
					  },
					  "src": "8033:25:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_bool",
						"typeString": "bool"
					  }
					},
					"falseBody": {
					  "id": 6101,
					  "nodeType": "Block",
					  "src": "8265:50:27",
					  "statements": [
						{
						  "eventCall": {
							"arguments": [
							  {
								"hexValue": "66616c7365",
								"id": 6098,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "bool",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "8298:5:27",
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
							  "id": 6097,
							  "name": "TokenRewarded",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5418,
							  "src": "8284:13:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_event_nonpayable$_t_bool_$returns$__$",
								"typeString": "function (bool)"
							  }
							},
							"id": 6099,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "8284:20:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_tuple$__$",
							  "typeString": "tuple()"
							}
						  },
						  "id": 6100,
						  "nodeType": "EmitStatement",
						  "src": "8279:25:27"
						}
					  ]
					},
					"id": 6102,
					"nodeType": "IfStatement",
					"src": "8028:287:27",
					"trueBody": {
					  "id": 6096,
					  "nodeType": "Block",
					  "src": "8061:198:27",
					  "statements": [
						{
						  "expression": {
							"arguments": [
							  {
								"arguments": [
								  {
									"id": 6083,
									"name": "treasuryWallet",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 5384,
									"src": "8139:14:27",
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
								  "id": 6082,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "lValueRequested": false,
								  "nodeType": "ElementaryTypeNameExpression",
								  "src": "8131:7:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_type$_t_address_$",
									"typeString": "type(address)"
								  },
								  "typeName": {
									"id": 6081,
									"name": "address",
									"nodeType": "ElementaryTypeName",
									"src": "8131:7:27",
									"typeDescriptions": {}
								  }
								},
								"id": 6084,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"kind": "typeConversion",
								"lValueRequested": false,
								"nameLocations": [],
								"names": [],
								"nodeType": "FunctionCall",
								"src": "8131:23:27",
								"tryCall": false,
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  {
								"arguments": [
								  {
									"id": 6087,
									"name": "winRewardAddr",
									"nodeType": "Identifier",
									"overloadedDeclarations": [],
									"referencedDeclaration": 5392,
									"src": "8164:13:27",
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
								  "id": 6086,
								  "isConstant": false,
								  "isLValue": false,
								  "isPure": true,
								  "lValueRequested": false,
								  "nodeType": "ElementaryTypeNameExpression",
								  "src": "8156:7:27",
								  "typeDescriptions": {
									"typeIdentifier": "t_type$_t_address_$",
									"typeString": "type(address)"
								  },
								  "typeName": {
									"id": 6085,
									"name": "address",
									"nodeType": "ElementaryTypeName",
									"src": "8156:7:27",
									"typeDescriptions": {}
								  }
								},
								"id": 6088,
								"isConstant": false,
								"isLValue": false,
								"isPure": false,
								"kind": "typeConversion",
								"lValueRequested": false,
								"nameLocations": [],
								"names": [],
								"nodeType": "FunctionCall",
								"src": "8156:22:27",
								"tryCall": false,
								"typeDescriptions": {
								  "typeIdentifier": "t_address",
								  "typeString": "address"
								}
							  },
							  {
								"id": 6089,
								"name": "winRewardAmount",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 5394,
								"src": "8180:15:27",
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
								"id": 6078,
								"name": "super",
								"nodeType": "Identifier",
								"overloadedDeclarations": [],
								"referencedDeclaration": 4294967271,
								"src": "8115:5:27",
								"typeDescriptions": {
								  "typeIdentifier": "t_type$_t_super$_JMToken_$6105_$",
								  "typeString": "type(contract super JMToken)"
								}
							  },
							  "id": 6080,
							  "isConstant": false,
							  "isLValue": false,
							  "isPure": false,
							  "lValueRequested": false,
							  "memberLocation": "8121:9:27",
							  "memberName": "_transfer",
							  "nodeType": "MemberAccess",
							  "referencedDeclaration": 2234,
							  "src": "8115:15:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
								"typeString": "function (address,address,uint256)"
							  }
							},
							"id": 6090,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "8115:81:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_tuple$__$",
							  "typeString": "tuple()"
							}
						  },
						  "id": 6091,
						  "nodeType": "ExpressionStatement",
						  "src": "8115:81:27"
						},
						{
						  "eventCall": {
							"arguments": [
							  {
								"hexValue": "74727565",
								"id": 6093,
								"isConstant": false,
								"isLValue": false,
								"isPure": true,
								"kind": "bool",
								"lValueRequested": false,
								"nodeType": "Literal",
								"src": "8243:4:27",
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
							  "id": 6092,
							  "name": "TokenRewarded",
							  "nodeType": "Identifier",
							  "overloadedDeclarations": [],
							  "referencedDeclaration": 5418,
							  "src": "8229:13:27",
							  "typeDescriptions": {
								"typeIdentifier": "t_function_event_nonpayable$_t_bool_$returns$__$",
								"typeString": "function (bool)"
							  }
							},
							"id": 6094,
							"isConstant": false,
							"isLValue": false,
							"isPure": false,
							"kind": "functionCall",
							"lValueRequested": false,
							"nameLocations": [],
							"names": [],
							"nodeType": "FunctionCall",
							"src": "8229:19:27",
							"tryCall": false,
							"typeDescriptions": {
							  "typeIdentifier": "t_tuple$__$",
							  "typeString": "tuple()"
							}
						  },
						  "id": 6095,
						  "nodeType": "EmitStatement",
						  "src": "8224:24:27"
						}
					  ]
					}
				  }
				]
			  },
			  "functionSelector": "85b1fb8e",
			  "id": 6104,
			  "implemented": true,
			  "kind": "function",
			  "modifiers": [],
			  "name": "randRewardToken",
			  "nameLocation": "7864:15:27",
			  "nodeType": "FunctionDefinition",
			  "parameters": {
				"id": 6059,
				"nodeType": "ParameterList",
				"parameters": [
				  {
					"constant": false,
					"id": 6056,
					"mutability": "mutable",
					"name": "_addr",
					"nameLocation": "7888:5:27",
					"nodeType": "VariableDeclaration",
					"scope": 6104,
					"src": "7880:13:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_address",
					  "typeString": "address"
					},
					"typeName": {
					  "id": 6055,
					  "name": "address",
					  "nodeType": "ElementaryTypeName",
					  "src": "7880:7:27",
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
					"id": 6058,
					"mutability": "mutable",
					"name": "_amount",
					"nameLocation": "7900:7:27",
					"nodeType": "VariableDeclaration",
					"scope": 6104,
					"src": "7895:12:27",
					"stateVariable": false,
					"storageLocation": "default",
					"typeDescriptions": {
					  "typeIdentifier": "t_uint256",
					  "typeString": "uint256"
					},
					"typeName": {
					  "id": 6057,
					  "name": "uint",
					  "nodeType": "ElementaryTypeName",
					  "src": "7895:4:27",
					  "typeDescriptions": {
						"typeIdentifier": "t_uint256",
						"typeString": "uint256"
					  }
					},
					"visibility": "internal"
				  }
				],
				"src": "7879:29:27"
			  },
			  "returnParameters": {
				"id": 6060,
				"nodeType": "ParameterList",
				"parameters": [],
				"src": "7918:0:27"
			  },
			  "scope": 6105,
			  "src": "7855:466:27",
			  "stateMutability": "nonpayable",
			  "virtual": false,
			  "visibility": "external"
			}
		  ],
		  "scope": 6106,
		  "src": "149:8175:27",
		  "usedErrors": []
		}
	  ],
	  "src": "37:8287:27"
	},
	"compiler": {
	  "name": "solc",
	  "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
	},
	"networks": {
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
		  }
		},
		"links": {},
		"address": "0x257069555C067B51812C1139c6dFEEF051645925",
		"transactionHash": "0x40e295eea6fbdde17c9afe86b318ab3f5c191657ba1e1335d317cb34183d0f46"
	  }
	},
	"schemaVersion": "3.4.9",
	"updatedAt": "2022-09-22T17:50:27.834Z",
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