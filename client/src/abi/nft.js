const NFT = {
    "contractName": "MapleNFT",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_marketAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_tokenContractAddress",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "_MapleBaseURI",
            "type": "string"
          },
          {
            "internalType": "address payable",
            "name": "_treasuryWallet",
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
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
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
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "tokenURI",
            "type": "string"
          }
        ],
        "name": "Minted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
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
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
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
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
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
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
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
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
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
        "type": "function"
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
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
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
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
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
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
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
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
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
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
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
        "type": "function"
      },
      {
        "inputs": [],
        "name": "mintMapleNFT",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
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
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "withdraw",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_marketAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_tokenContractAddress\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_MapleBaseURI\",\"type\":\"string\"},{\"internalType\":\"address payable\",\"name\":\"_treasuryWallet\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"tokenURI\",\"type\":\"string\"}],\"name\":\"Minted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"mintMapleNFT\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"treasuryWallet\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/MapleNFT.sol\":\"MapleNFT\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/security/ReentrancyGuard.sol\":{\"keccak256\":\"0x0e9621f60b2faabe65549f7ed0f24e8853a45c1b7990d47e8160e523683f3935\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://287a2f8d5814dd0f05f22b740f18ca8321acc21c9bd03a6cb2203ea626e2f3f2\",\"dweb:/ipfs/QmZRQv9iuwU817VuqkA2WweiaibKii69x9QxYBBEfbNEud\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x0b606994df12f0ce35f6d2f6dcdde7e55e6899cdef7e00f180980caa81e3844e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c827c981a552d1c76c96060e92f56b52bc20c6f9b4dbf911fe99ddbfb41f2ea\",\"dweb:/ipfs/QmW8xvJdzHrr8Ry34C7viBsgG2b8T1mL4BQWJ5CdfD9JLB\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xed6a749c5373af398105ce6ee3ac4763aa450ea7285d268c85d9eeca809cdb1f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://20a97f891d06f0fe91560ea1a142aaa26fdd22bed1b51606b7d48f670deeb50f\",\"dweb:/ipfs/QmTbCtZKChpaX5H2iRiTDMcSz29GSLCpTCDgJpcMR4wg8x\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\":{\"keccak256\":\"0x0a79511df8151b10b0a0004d6a76ad956582d32824af4c0f4886bdbdfe5746e5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://afbedcf17f31db719e6fdc56caa8f458799c5fa2eb94cb1e94ef18f89af85768\",\"dweb:/ipfs/QmVmqRdBfbgYThpZSoAJ5o9mnAMjx8mCHHjv3Rh8cQAAg3\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol\":{\"keccak256\":\"0xd1556954440b31c97a142c6ba07d5cade45f96fafd52091d33a14ebe365aecbf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://26fef835622b46a5ba08b3ef6b46a22e94b5f285d0f0fb66b703bd30217d2c34\",\"dweb:/ipfs/QmZ548qdwfL1qF7aXz3xh1GCdTiST81kGGuKRqVUfYmPZR\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xd6153ce99bcdcce22b124f755e72553295be6abcd63804cfdffceb188b8bef10\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://35c47bece3c03caaa07fab37dd2bb3413bfbca20db7bd9895024390e0a469487\",\"dweb:/ipfs/QmPGWT2x3QHcKxqe6gRmAkdakhbaRgx3DLzcakHz5M4eXG\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee\",\"dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xd15c3e400531f00203839159b2b8e7209c5158b35618f570c695b7e47f12e9f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b600b852e0597aa69989cc263111f02097e2827edc1bdc70306303e3af5e9929\",\"dweb:/ipfs/QmU4WfM28A1nDqghuuGeFmN3CnVrk6opWtiF65K4vhFPeC\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/JMToken.sol\":{\"keccak256\":\"0x6d46ba35a03980a62eb23b06bc1c9b4c381fb5cec22d24e22ef99187254378c3\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://89f07d0c627d6a08242969b011154e7620ff962753b147e64dc3b0870832db30\",\"dweb:/ipfs/Qmcdew5EtewTCyojfBihLYMB1Lge8Si9PSugNDyiofp1HY\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0x02add59a18b8f9012f2043575b93d04fde563e3b940ccf50b5358e1cbe9e6ebd\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://feb1b5de36d206ec0be059e8e5110936a9a5e13f73b0cb375b3a35e87819ebd0\",\"dweb:/ipfs/QmSX53o3uqjeSaaDofNKswHREGfbf13CXXfnsxye1yHF68\"]},\"project:/contracts/MapleNFT.sol\":{\"keccak256\":\"0xf1a8b6280934bbd0214153c10bb982b29808921962beac1a783b40ce0dda43c5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://730b1106d247811fefc14555250f1ebcbfc236bd6f56c386d7d9b984e88e3737\",\"dweb:/ipfs/QmRyvg1pSHYyCe7ZgJWtTpJwPeoroR2vhawTtYcBnr9H8K\"]},\"project:/contracts/VJMToken.sol\":{\"keccak256\":\"0xe2f8a326fd1fbe8e2bf0e7365ad261285fde71804fe77694ce986d47c106f061\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://f6ee599ebeff106e2eb9d3a6b0c01915cfc6f76e0916b4215e9c80c5c992e475\",\"dweb:/ipfs/QmXz1MZL3nGq7C8o1JW57rgYr6Z4iDV4Kba279dw4Smt4M\"]},\"project:/contracts/interfaces/ERC20Interface.sol\":{\"keccak256\":\"0xb042aa31e292bbc9fade54bf3279bbc904f65c935f597a01c269f1f44874317a\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://4b04f222ce79fb25e09cf97ecf81cc98ac26f56e76c22bdb4c3f2b9aa35bca9f\",\"dweb:/ipfs/QmbR9BSzUNPf68mTzqxuic7D8jjNZne3dWsdAAKSVnhBqr\"]}},\"version\":1}",
    "bytecode": "0x6080604052670de0b6b3a7640000600d553480156200001d57600080fd5b5060405162002885380380620028858339810160408190526200004091620002d9565b6040518060400160405280600881526020016713585c1b1953919560c21b8152506040518060400160405280600381526020016213919560ea1b81525062000097620000916200012760201b60201c565b6200012b565b6001620000a583826200047b565b506002620000b482826200047b565b5050601080546001600160a01b0319166001600160a01b038716179055506001600f556064601255620000e7836200017b565b50620000f382620001bf565b620000fd620001db565b600e80546001600160a01b0319166001600160a01b0392909216919091179055506200056f915050565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620001876200023f565b6001600160a01b0382166200019b57600080fd5b50600c80546001600160a01b0319166001600160a01b03831617905560015b919050565b620001c96200023f565b6013620001d782826200047b565b5050565b620001e56200023f565b60005b60125481116200023c57601180546001810182556000919091527f31ecc21a745e3968a04e9570e4425bc18fa8019c68028196b546d1669c200c680181905580620002338162000547565b915050620001e8565b50565b6000546001600160a01b031633146200029e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b6001600160a01b03811681146200023c57600080fd5b634e487b7160e01b600052604160045260246000fd5b8051620001ba81620002a0565b60008060008060808587031215620002f057600080fd5b8451620002fd81620002a0565b809450506020808601516200031281620002a0565b60408701519094506001600160401b03808211156200033057600080fd5b818801915088601f8301126200034557600080fd5b8151818111156200035a576200035a620002b6565b604051601f8201601f19908116603f01168101908382118183101715620003855762000385620002b6565b816040528281528b868487010111156200039e57600080fd5b600093505b82841015620003c25784840186015181850187015292850192620003a3565b6000868483010152809750505050505050620003e160608601620002cc565b905092959194509250565b600181811c908216806200040157607f821691505b6020821081036200042257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200047657600081815260208120601f850160051c81016020861015620004515750805b601f850160051c820191505b8181101562000472578281556001016200045d565b5050505b505050565b81516001600160401b03811115620004975762000497620002b6565b620004af81620004a88454620003ec565b8462000428565b602080601f831160018114620004e75760008415620004ce5750858301515b600019600386901b1c1916600185901b17855562000472565b600085815260208120601f198616915b828110156200051857888601518255948401946001909101908401620004f7565b5085821015620005375787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000600182016200056857634e487b7160e01b600052601160045260246000fd5b5060010190565b612306806200057f6000396000f3fe6080604052600436106101755760003560e01c80634f6ccce7116100cb57806395d89b411161007f578063c87b56dd11610059578063c87b56dd146103cf578063e985e9c5146103ef578063f2fde38b1461043857600080fd5b806395d89b411461037a578063a22cb4651461038f578063b88d4fde146103af57600080fd5b806370a08231116100b057806370a0823114610327578063715018a6146103475780638da5cb5b1461035c57600080fd5b80634f6ccce7146102e75780636352211e1461030757600080fd5b806323b872dd1161012d5780633ccfd60b116101075780633ccfd60b1461029257806342842e0e146102a75780634626402b146102c757600080fd5b806323b872dd1461024a57806325379b001461026a5780632f745c591461027257600080fd5b8063081812fc1161015e578063081812fc146101d1578063095ea7b31461020957806318160ddd1461022b57600080fd5b806301ffc9a71461017a57806306fdde03146101af575b600080fd5b34801561018657600080fd5b5061019a610195366004611e31565b610458565b60405190151581526020015b60405180910390f35b3480156101bb57600080fd5b506101c4610469565b6040516101a69190611e9e565b3480156101dd57600080fd5b506101f16101ec366004611eb1565b6104fb565b6040516001600160a01b0390911681526020016101a6565b34801561021557600080fd5b50610229610224366004611ee6565b610522565b005b34801561023757600080fd5b506009545b6040519081526020016101a6565b34801561025657600080fd5b50610229610265366004611f10565b610658565b61023c6106df565b34801561027e57600080fd5b5061023c61028d366004611ee6565b610b0e565b34801561029e57600080fd5b5061023c610bb6565b3480156102b357600080fd5b506102296102c2366004611f10565b610d57565b3480156102d357600080fd5b50600e546101f1906001600160a01b031681565b3480156102f357600080fd5b5061023c610302366004611eb1565b610d72565b34801561031357600080fd5b506101f1610322366004611eb1565b610e16565b34801561033357600080fd5b5061023c610342366004611f4c565b610e7b565b34801561035357600080fd5b50610229610f15565b34801561036857600080fd5b506000546001600160a01b03166101f1565b34801561038657600080fd5b506101c4610f29565b34801561039b57600080fd5b506102296103aa366004611f75565b610f38565b3480156103bb57600080fd5b506102296103ca366004611fc2565b610f47565b3480156103db57600080fd5b506101c46103ea366004611eb1565b610fd5565b3480156103fb57600080fd5b5061019a61040a36600461209e565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b34801561044457600080fd5b50610229610453366004611f4c565b610fe0565b600061046382611070565b92915050565b606060018054610478906120d1565b80601f01602080910402602001604051908101604052809291908181526020018280546104a4906120d1565b80156104f15780601f106104c6576101008083540402835291602001916104f1565b820191906000526020600020905b8154815290600101906020018083116104d457829003601f168201915b5050505050905090565b6000610506826110ae565b506000908152600560205260409020546001600160a01b031690565b600061052d82610e16565b9050806001600160a01b0316836001600160a01b0316036105bb5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b336001600160a01b03821614806105d757506105d7813361040a565b6106495760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016105b2565b6106538383611112565b505050565b610662338261118d565b6106d45760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f76656400000000000000000000000000000000000060648201526084016105b2565b61065383838361120c565b600f54600c546040516370a0823160e01b8152336004820152600092916001600160a01b0316906370a0823190602401602060405180830381865afa15801561072c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610750919061210b565b10156107c45760405162461bcd60e51b815260206004820152602760248201527f4552433732313a20726563697069656e74206c61636b206f662065726332302060448201527f62616c616e63650000000000000000000000000000000000000000000000000060648201526084016105b2565b60095460125410156108185760405162461bcd60e51b815260206004820152601b60248201527f4552433732313a20616c6c206e66747320617265206d696e746564000000000060448201526064016105b2565b6108206113f1565b60118054600091906108349060019061213a565b815481106108445761084461214d565b90600052602060002001549050601180548061086257610862612163565b6001900381819060005260206000200160009055905561088233826114c2565b601054610899906001600160a01b03166001610f38565b600c54600d54600f546000926001600160a01b03169163d83a2bf391339130916108c39190612179565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af1158015610917573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093b9190612190565b90508061098a5760405162461bcd60e51b815260206004820152601560248201527f496e637265617365436f6e7472616374204661696c000000000000000000000060448201526064016105b2565b600c54600e54600d54600f546001600160a01b03938416936323b872dd9333939116916109b79190612179565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af1158015610a0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2f9190612190565b50600c54600e54600d54600f546001600160a01b0393841693631d057bd9931691600291610a5d9190612179565b610a6791906121c3565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610aad57600080fd5b505af1158015610ac1573d6000803e3d6000fd5b505050507fe7cd4ce7f2a465edc730269a1305e8a48bad821e8fb7e152ec413829c01a53c43383610af185610fd5565b604051610b00939291906121d7565b60405180910390a150919050565b6000610b1983610e7b565b8210610b8d5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e647300000000000000000000000000000000000000000060648201526084016105b2565b506001600160a01b03919091166000908152600760209081526040808320938352929052205490565b6000610bc061161d565b600c546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610c09573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2d919061210b565b600c546040517f095ea7b3000000000000000000000000000000000000000000000000000000008152306004820152602481018390529192506001600160a01b03169063095ea7b3906044016020604051808303816000875af1158015610c98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbc9190612190565b50600c546040517f23b872dd000000000000000000000000000000000000000000000000000000008152306004820152336024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610d2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d519190612190565b50905090565b61065383838360405180602001604052806000815250610f47565b6000610d7d60095490565b8210610df15760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e6473000000000000000000000000000000000000000060648201526084016105b2565b60098281548110610e0457610e0461214d565b90600052602060002001549050919050565b6000818152600360205260408120546001600160a01b0316806104635760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016105b2565b60006001600160a01b038216610ef95760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e6572000000000000000000000000000000000000000000000060648201526084016105b2565b506001600160a01b031660009081526004602052604090205490565b610f1d61161d565b610f276000611677565b565b606060028054610478906120d1565b610f433383836116d4565b5050565b610f51338361118d565b610fc35760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f76656400000000000000000000000000000000000060648201526084016105b2565b610fcf848484846117a2565b50505050565b60606104638261182b565b610fe861161d565b6001600160a01b0381166110645760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016105b2565b61106d81611677565b50565b60006001600160e01b031982167f780e9d63000000000000000000000000000000000000000000000000000000001480610463575061046382611892565b6000818152600360205260409020546001600160a01b031661106d5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016105b2565b6000818152600560205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038416908117909155819061115482610e16565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061119983610e16565b9050806001600160a01b0316846001600160a01b031614806111e057506001600160a01b0380821660009081526006602090815260408083209388168352929052205460ff165b806112045750836001600160a01b03166111f9846104fb565b6001600160a01b0316145b949350505050565b826001600160a01b031661121f82610e16565b6001600160a01b03161461129b5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016105b2565b6001600160a01b0382166113165760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016105b2565b61132183838361192d565b61132c600082611112565b6001600160a01b038316600090815260046020526040812080546001929061135590849061213a565b90915550506001600160a01b0382166000908152600460205260408120805460019290611383908490612208565b9091555050600081815260036020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6011546000906114039060019061213a565b60115460408051426020820152929350600092016040516020818303038152906040528051906020012060001c61143a919061221b565b90506000601182815481106114515761145161214d565b90600052602060002001549050601183815481106114715761147161214d565b90600052602060002001546011838154811061148f5761148f61214d565b906000526020600020018190555080601184815481106114b1576114b161214d565b600091825260209091200155505050565b6001600160a01b0382166115185760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105b2565b6000818152600360205260409020546001600160a01b03161561157d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105b2565b6115896000838361192d565b6001600160a01b03821660009081526004602052604081208054600192906115b2908490612208565b9091555050600081815260036020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000546001600160a01b03163314610f275760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105b2565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b0316036117355760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105b2565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6117ad84848461120c565b6117b984848484611938565b610fcf5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016105b2565b6060611836826110ae565b6000611840611a8f565b90506000815111611860576040518060200160405280600081525061188b565b8061186a84611a9e565b60405160200161187b92919061222f565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982167f80ac58cd0000000000000000000000000000000000000000000000000000000014806118f557506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061046357507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b0319831614610463565b610653838383611bd3565b60006001600160a01b0384163b15611a8457604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061197c90339089908890889060040161225e565b6020604051808303816000875af19250505080156119b7575060408051601f3d908101601f191682019092526119b49181019061229a565b60015b611a6a573d8080156119e5576040519150601f19603f3d011682016040523d82523d6000602084013e6119ea565b606091505b508051600003611a625760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016105b2565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611204565b506001949350505050565b606060138054610478906120d1565b606081600003611ae157505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115611b0b5780611af5816122b7565b9150611b049050600a836121c3565b9150611ae5565b60008167ffffffffffffffff811115611b2657611b26611fac565b6040519080825280601f01601f191660200182016040528015611b50576020820181803683370190505b5090505b841561120457611b6560018361213a565b9150611b72600a8661221b565b611b7d906030612208565b60f81b818381518110611b9257611b9261214d565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611bcc600a866121c3565b9450611b54565b6001600160a01b038316611c2e57611c2981600980546000838152600a60205260408120829055600182018355919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0155565b611c51565b816001600160a01b0316836001600160a01b031614611c5157611c518382611c8b565b6001600160a01b038216611c685761065381611d28565b826001600160a01b0316826001600160a01b031614610653576106538282611dd7565b60006001611c9884610e7b565b611ca2919061213a565b600083815260086020526040902054909150808214611cf5576001600160a01b03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b5060009182526008602090815260408084208490556001600160a01b039094168352600781528383209183525290812055565b600954600090611d3a9060019061213a565b6000838152600a602052604081205460098054939450909284908110611d6257611d6261214d565b906000526020600020015490508060098381548110611d8357611d8361214d565b6000918252602080832090910192909255828152600a90915260408082208490558582528120556009805480611dbb57611dbb612163565b6001900381819060005260206000200160009055905550505050565b6000611de283610e7b565b6001600160a01b039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b6001600160e01b03198116811461106d57600080fd5b600060208284031215611e4357600080fd5b813561188b81611e1b565b60005b83811015611e69578181015183820152602001611e51565b50506000910152565b60008151808452611e8a816020860160208601611e4e565b601f01601f19169290920160200192915050565b60208152600061188b6020830184611e72565b600060208284031215611ec357600080fd5b5035919050565b80356001600160a01b0381168114611ee157600080fd5b919050565b60008060408385031215611ef957600080fd5b611f0283611eca565b946020939093013593505050565b600080600060608486031215611f2557600080fd5b611f2e84611eca565b9250611f3c60208501611eca565b9150604084013590509250925092565b600060208284031215611f5e57600080fd5b61188b82611eca565b801515811461106d57600080fd5b60008060408385031215611f8857600080fd5b611f9183611eca565b91506020830135611fa181611f67565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611fd857600080fd5b611fe185611eca565b9350611fef60208601611eca565b925060408501359150606085013567ffffffffffffffff8082111561201357600080fd5b818701915087601f83011261202757600080fd5b81358181111561203957612039611fac565b604051601f8201601f19908116603f0116810190838211818310171561206157612061611fac565b816040528281528a602084870101111561207a57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156120b157600080fd5b6120ba83611eca565b91506120c860208401611eca565b90509250929050565b600181811c908216806120e557607f821691505b60208210810361210557634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561211d57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561046357610463612124565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b808202811582820484141761046357610463612124565b6000602082840312156121a257600080fd5b815161188b81611f67565b634e487b7160e01b600052601260045260246000fd5b6000826121d2576121d26121ad565b500490565b6001600160a01b03841681528260208201526060604082015260006121ff6060830184611e72565b95945050505050565b8082018082111561046357610463612124565b60008261222a5761222a6121ad565b500690565b60008351612241818460208801611e4e565b835190830190612255818360208801611e4e565b01949350505050565b60006001600160a01b038087168352808616602084015250836040830152608060608301526122906080830184611e72565b9695505050505050565b6000602082840312156122ac57600080fd5b815161188b81611e1b565b6000600182016122c9576122c9612124565b506001019056fea26469706673582212202fd070aa06b4a1b65a2097467cac3409855b67796cafd71a806ac70f266f6bbd64736f6c63430008110033",
    "deployedBytecode": "0x6080604052600436106101755760003560e01c80634f6ccce7116100cb57806395d89b411161007f578063c87b56dd11610059578063c87b56dd146103cf578063e985e9c5146103ef578063f2fde38b1461043857600080fd5b806395d89b411461037a578063a22cb4651461038f578063b88d4fde146103af57600080fd5b806370a08231116100b057806370a0823114610327578063715018a6146103475780638da5cb5b1461035c57600080fd5b80634f6ccce7146102e75780636352211e1461030757600080fd5b806323b872dd1161012d5780633ccfd60b116101075780633ccfd60b1461029257806342842e0e146102a75780634626402b146102c757600080fd5b806323b872dd1461024a57806325379b001461026a5780632f745c591461027257600080fd5b8063081812fc1161015e578063081812fc146101d1578063095ea7b31461020957806318160ddd1461022b57600080fd5b806301ffc9a71461017a57806306fdde03146101af575b600080fd5b34801561018657600080fd5b5061019a610195366004611e31565b610458565b60405190151581526020015b60405180910390f35b3480156101bb57600080fd5b506101c4610469565b6040516101a69190611e9e565b3480156101dd57600080fd5b506101f16101ec366004611eb1565b6104fb565b6040516001600160a01b0390911681526020016101a6565b34801561021557600080fd5b50610229610224366004611ee6565b610522565b005b34801561023757600080fd5b506009545b6040519081526020016101a6565b34801561025657600080fd5b50610229610265366004611f10565b610658565b61023c6106df565b34801561027e57600080fd5b5061023c61028d366004611ee6565b610b0e565b34801561029e57600080fd5b5061023c610bb6565b3480156102b357600080fd5b506102296102c2366004611f10565b610d57565b3480156102d357600080fd5b50600e546101f1906001600160a01b031681565b3480156102f357600080fd5b5061023c610302366004611eb1565b610d72565b34801561031357600080fd5b506101f1610322366004611eb1565b610e16565b34801561033357600080fd5b5061023c610342366004611f4c565b610e7b565b34801561035357600080fd5b50610229610f15565b34801561036857600080fd5b506000546001600160a01b03166101f1565b34801561038657600080fd5b506101c4610f29565b34801561039b57600080fd5b506102296103aa366004611f75565b610f38565b3480156103bb57600080fd5b506102296103ca366004611fc2565b610f47565b3480156103db57600080fd5b506101c46103ea366004611eb1565b610fd5565b3480156103fb57600080fd5b5061019a61040a36600461209e565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b34801561044457600080fd5b50610229610453366004611f4c565b610fe0565b600061046382611070565b92915050565b606060018054610478906120d1565b80601f01602080910402602001604051908101604052809291908181526020018280546104a4906120d1565b80156104f15780601f106104c6576101008083540402835291602001916104f1565b820191906000526020600020905b8154815290600101906020018083116104d457829003601f168201915b5050505050905090565b6000610506826110ae565b506000908152600560205260409020546001600160a01b031690565b600061052d82610e16565b9050806001600160a01b0316836001600160a01b0316036105bb5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b336001600160a01b03821614806105d757506105d7813361040a565b6106495760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c000060648201526084016105b2565b6106538383611112565b505050565b610662338261118d565b6106d45760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f76656400000000000000000000000000000000000060648201526084016105b2565b61065383838361120c565b600f54600c546040516370a0823160e01b8152336004820152600092916001600160a01b0316906370a0823190602401602060405180830381865afa15801561072c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610750919061210b565b10156107c45760405162461bcd60e51b815260206004820152602760248201527f4552433732313a20726563697069656e74206c61636b206f662065726332302060448201527f62616c616e63650000000000000000000000000000000000000000000000000060648201526084016105b2565b60095460125410156108185760405162461bcd60e51b815260206004820152601b60248201527f4552433732313a20616c6c206e66747320617265206d696e746564000000000060448201526064016105b2565b6108206113f1565b60118054600091906108349060019061213a565b815481106108445761084461214d565b90600052602060002001549050601180548061086257610862612163565b6001900381819060005260206000200160009055905561088233826114c2565b601054610899906001600160a01b03166001610f38565b600c54600d54600f546000926001600160a01b03169163d83a2bf391339130916108c39190612179565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af1158015610917573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061093b9190612190565b90508061098a5760405162461bcd60e51b815260206004820152601560248201527f496e637265617365436f6e7472616374204661696c000000000000000000000060448201526064016105b2565b600c54600e54600d54600f546001600160a01b03938416936323b872dd9333939116916109b79190612179565b6040516001600160e01b031960e086901b1681526001600160a01b03938416600482015292909116602483015260448201526064016020604051808303816000875af1158015610a0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2f9190612190565b50600c54600e54600d54600f546001600160a01b0393841693631d057bd9931691600291610a5d9190612179565b610a6791906121c3565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610aad57600080fd5b505af1158015610ac1573d6000803e3d6000fd5b505050507fe7cd4ce7f2a465edc730269a1305e8a48bad821e8fb7e152ec413829c01a53c43383610af185610fd5565b604051610b00939291906121d7565b60405180910390a150919050565b6000610b1983610e7b565b8210610b8d5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201527f74206f6620626f756e647300000000000000000000000000000000000000000060648201526084016105b2565b506001600160a01b03919091166000908152600760209081526040808320938352929052205490565b6000610bc061161d565b600c546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610c09573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2d919061210b565b600c546040517f095ea7b3000000000000000000000000000000000000000000000000000000008152306004820152602481018390529192506001600160a01b03169063095ea7b3906044016020604051808303816000875af1158015610c98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbc9190612190565b50600c546040517f23b872dd000000000000000000000000000000000000000000000000000000008152306004820152336024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af1158015610d2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d519190612190565b50905090565b61065383838360405180602001604052806000815250610f47565b6000610d7d60095490565b8210610df15760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201527f7574206f6620626f756e6473000000000000000000000000000000000000000060648201526084016105b2565b60098281548110610e0457610e0461214d565b90600052602060002001549050919050565b6000818152600360205260408120546001600160a01b0316806104635760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016105b2565b60006001600160a01b038216610ef95760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e6572000000000000000000000000000000000000000000000060648201526084016105b2565b506001600160a01b031660009081526004602052604090205490565b610f1d61161d565b610f276000611677565b565b606060028054610478906120d1565b610f433383836116d4565b5050565b610f51338361118d565b610fc35760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206e6f7220617070726f76656400000000000000000000000000000000000060648201526084016105b2565b610fcf848484846117a2565b50505050565b60606104638261182b565b610fe861161d565b6001600160a01b0381166110645760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016105b2565b61106d81611677565b50565b60006001600160e01b031982167f780e9d63000000000000000000000000000000000000000000000000000000001480610463575061046382611892565b6000818152600360205260409020546001600160a01b031661106d5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e204944000000000000000060448201526064016105b2565b6000818152600560205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038416908117909155819061115482610e16565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061119983610e16565b9050806001600160a01b0316846001600160a01b031614806111e057506001600160a01b0380821660009081526006602090815260408083209388168352929052205460ff165b806112045750836001600160a01b03166111f9846104fb565b6001600160a01b0316145b949350505050565b826001600160a01b031661121f82610e16565b6001600160a01b03161461129b5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e657200000000000000000000000000000000000000000000000000000060648201526084016105b2565b6001600160a01b0382166113165760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016105b2565b61132183838361192d565b61132c600082611112565b6001600160a01b038316600090815260046020526040812080546001929061135590849061213a565b90915550506001600160a01b0382166000908152600460205260408120805460019290611383908490612208565b9091555050600081815260036020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6011546000906114039060019061213a565b60115460408051426020820152929350600092016040516020818303038152906040528051906020012060001c61143a919061221b565b90506000601182815481106114515761145161214d565b90600052602060002001549050601183815481106114715761147161214d565b90600052602060002001546011838154811061148f5761148f61214d565b906000526020600020018190555080601184815481106114b1576114b161214d565b600091825260209091200155505050565b6001600160a01b0382166115185760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105b2565b6000818152600360205260409020546001600160a01b03161561157d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105b2565b6115896000838361192d565b6001600160a01b03821660009081526004602052604081208054600192906115b2908490612208565b9091555050600081815260036020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000546001600160a01b03163314610f275760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105b2565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b816001600160a01b0316836001600160a01b0316036117355760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105b2565b6001600160a01b03838116600081815260066020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6117ad84848461120c565b6117b984848484611938565b610fcf5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016105b2565b6060611836826110ae565b6000611840611a8f565b90506000815111611860576040518060200160405280600081525061188b565b8061186a84611a9e565b60405160200161187b92919061222f565b6040516020818303038152906040525b9392505050565b60006001600160e01b031982167f80ac58cd0000000000000000000000000000000000000000000000000000000014806118f557506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061046357507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b0319831614610463565b610653838383611bd3565b60006001600160a01b0384163b15611a8457604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061197c90339089908890889060040161225e565b6020604051808303816000875af19250505080156119b7575060408051601f3d908101601f191682019092526119b49181019061229a565b60015b611a6a573d8080156119e5576040519150601f19603f3d011682016040523d82523d6000602084013e6119ea565b606091505b508051600003611a625760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016105b2565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611204565b506001949350505050565b606060138054610478906120d1565b606081600003611ae157505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115611b0b5780611af5816122b7565b9150611b049050600a836121c3565b9150611ae5565b60008167ffffffffffffffff811115611b2657611b26611fac565b6040519080825280601f01601f191660200182016040528015611b50576020820181803683370190505b5090505b841561120457611b6560018361213a565b9150611b72600a8661221b565b611b7d906030612208565b60f81b818381518110611b9257611b9261214d565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611bcc600a866121c3565b9450611b54565b6001600160a01b038316611c2e57611c2981600980546000838152600a60205260408120829055600182018355919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0155565b611c51565b816001600160a01b0316836001600160a01b031614611c5157611c518382611c8b565b6001600160a01b038216611c685761065381611d28565b826001600160a01b0316826001600160a01b031614610653576106538282611dd7565b60006001611c9884610e7b565b611ca2919061213a565b600083815260086020526040902054909150808214611cf5576001600160a01b03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b5060009182526008602090815260408084208490556001600160a01b039094168352600781528383209183525290812055565b600954600090611d3a9060019061213a565b6000838152600a602052604081205460098054939450909284908110611d6257611d6261214d565b906000526020600020015490508060098381548110611d8357611d8361214d565b6000918252602080832090910192909255828152600a90915260408082208490558582528120556009805480611dbb57611dbb612163565b6001900381819060005260206000200160009055905550505050565b6000611de283610e7b565b6001600160a01b039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b6001600160e01b03198116811461106d57600080fd5b600060208284031215611e4357600080fd5b813561188b81611e1b565b60005b83811015611e69578181015183820152602001611e51565b50506000910152565b60008151808452611e8a816020860160208601611e4e565b601f01601f19169290920160200192915050565b60208152600061188b6020830184611e72565b600060208284031215611ec357600080fd5b5035919050565b80356001600160a01b0381168114611ee157600080fd5b919050565b60008060408385031215611ef957600080fd5b611f0283611eca565b946020939093013593505050565b600080600060608486031215611f2557600080fd5b611f2e84611eca565b9250611f3c60208501611eca565b9150604084013590509250925092565b600060208284031215611f5e57600080fd5b61188b82611eca565b801515811461106d57600080fd5b60008060408385031215611f8857600080fd5b611f9183611eca565b91506020830135611fa181611f67565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611fd857600080fd5b611fe185611eca565b9350611fef60208601611eca565b925060408501359150606085013567ffffffffffffffff8082111561201357600080fd5b818701915087601f83011261202757600080fd5b81358181111561203957612039611fac565b604051601f8201601f19908116603f0116810190838211818310171561206157612061611fac565b816040528281528a602084870101111561207a57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156120b157600080fd5b6120ba83611eca565b91506120c860208401611eca565b90509250929050565b600181811c908216806120e557607f821691505b60208210810361210557634e487b7160e01b600052602260045260246000fd5b50919050565b60006020828403121561211d57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561046357610463612124565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b808202811582820484141761046357610463612124565b6000602082840312156121a257600080fd5b815161188b81611f67565b634e487b7160e01b600052601260045260246000fd5b6000826121d2576121d26121ad565b500490565b6001600160a01b03841681528260208201526060604082015260006121ff6060830184611e72565b95945050505050565b8082018082111561046357610463612124565b60008261222a5761222a6121ad565b500690565b60008351612241818460208801611e4e565b835190830190612255818360208801611e4e565b01949350505050565b60006001600160a01b038087168352808616602084015250836040830152608060608301526122906080830184611e72565b9695505050505050565b6000602082840312156122ac57600080fd5b815161188b81611e1b565b6000600182016122c9576122c9612124565b506001019056fea26469706673582212202fd070aa06b4a1b65a2097467cac3409855b67796cafd71a806ac70f266f6bbd64736f6c63430008110033",
    "immutableReferences": {},
    "generatedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:5028:38",
          "statements": [
            {
              "nodeType": "YulBlock",
              "src": "6:3:38",
              "statements": []
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "59:86:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "123:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "132:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "135:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "125:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "125:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "125:12:38"
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
                              "src": "82:5:38"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "93:5:38"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "108:3:38",
                                          "type": "",
                                          "value": "160"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "113:1:38",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "104:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "104:11:38"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "117:1:38",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sub",
                                    "nodeType": "YulIdentifier",
                                    "src": "100:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "100:19:38"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "89:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "89:31:38"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "79:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "79:42:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "72:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "72:50:38"
                    },
                    "nodeType": "YulIf",
                    "src": "69:70:38"
                  }
                ]
              },
              "name": "validator_revert_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "48:5:38",
                  "type": ""
                }
              ],
              "src": "14:131:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "182:95:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "199:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "206:3:38",
                              "type": "",
                              "value": "224"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "211:10:38",
                              "type": "",
                              "value": "0x4e487b71"
                            }
                          ],
                          "functionName": {
                            "name": "shl",
                            "nodeType": "YulIdentifier",
                            "src": "202:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "202:20:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "192:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "192:31:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "192:31:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "239:1:38",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "242:4:38",
                          "type": "",
                          "value": "0x41"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "232:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "232:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "232:15:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "263:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "266:4:38",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "256:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "256:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "256:15:38"
                  }
                ]
              },
              "name": "panic_error_0x41",
              "nodeType": "YulFunctionDefinition",
              "src": "150:127:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "350:78:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "360:22:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "375:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "369:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "369:13:38"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "360:5:38"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "416:5:38"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_address",
                        "nodeType": "YulIdentifier",
                        "src": "391:24:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "391:31:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "391:31:38"
                  }
                ]
              },
              "name": "abi_decode_address_payable_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "329:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "340:5:38",
                  "type": ""
                }
              ],
              "src": "282:146:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "583:1256:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "630:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "639:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "642:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "632:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "632:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "632:12:38"
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
                              "src": "604:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "613:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "600:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "600:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "625:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "596:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "596:33:38"
                    },
                    "nodeType": "YulIf",
                    "src": "593:53:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "655:29:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "674:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "668:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "668:16:38"
                    },
                    "variables": [
                      {
                        "name": "value",
                        "nodeType": "YulTypedName",
                        "src": "659:5:38",
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
                          "src": "718:5:38"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_address",
                        "nodeType": "YulIdentifier",
                        "src": "693:24:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "693:31:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "693:31:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "733:15:38",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "743:5:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "733:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "757:12:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "767:2:38",
                      "type": "",
                      "value": "32"
                    },
                    "variables": [
                      {
                        "name": "_1",
                        "nodeType": "YulTypedName",
                        "src": "761:2:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "778:40:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "803:9:38"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "814:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "799:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "799:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "793:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "793:25:38"
                    },
                    "variables": [
                      {
                        "name": "value_1",
                        "nodeType": "YulTypedName",
                        "src": "782:7:38",
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
                          "src": "852:7:38"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_address",
                        "nodeType": "YulIdentifier",
                        "src": "827:24:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "827:33:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "827:33:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "869:17:38",
                    "value": {
                      "name": "value_1",
                      "nodeType": "YulIdentifier",
                      "src": "879:7:38"
                    },
                    "variableNames": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "869:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "895:39:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "919:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "930:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "915:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "915:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "909:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "909:25:38"
                    },
                    "variables": [
                      {
                        "name": "offset",
                        "nodeType": "YulTypedName",
                        "src": "899:6:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "943:28:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "961:2:38",
                              "type": "",
                              "value": "64"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "965:1:38",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "shl",
                            "nodeType": "YulIdentifier",
                            "src": "957:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "957:10:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "969:1:38",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "sub",
                        "nodeType": "YulIdentifier",
                        "src": "953:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "953:18:38"
                    },
                    "variables": [
                      {
                        "name": "_2",
                        "nodeType": "YulTypedName",
                        "src": "947:2:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "998:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1007:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1010:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "1000:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1000:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1000:12:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "986:6:38"
                        },
                        {
                          "name": "_2",
                          "nodeType": "YulIdentifier",
                          "src": "994:2:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "983:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "983:14:38"
                    },
                    "nodeType": "YulIf",
                    "src": "980:34:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1023:32:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1037:9:38"
                        },
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "1048:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1033:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1033:22:38"
                    },
                    "variables": [
                      {
                        "name": "_3",
                        "nodeType": "YulTypedName",
                        "src": "1027:2:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1103:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1112:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1115:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "1105:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1105:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1105:12:38"
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
                                  "name": "_3",
                                  "nodeType": "YulIdentifier",
                                  "src": "1082:2:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1086:4:38",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1078:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1078:13:38"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1093:7:38"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "1074:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1074:27:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "1067:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1067:35:38"
                    },
                    "nodeType": "YulIf",
                    "src": "1064:55:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1128:19:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "_3",
                          "nodeType": "YulIdentifier",
                          "src": "1144:2:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "1138:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1138:9:38"
                    },
                    "variables": [
                      {
                        "name": "_4",
                        "nodeType": "YulTypedName",
                        "src": "1132:2:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1170:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "1172:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1172:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1172:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "_4",
                          "nodeType": "YulIdentifier",
                          "src": "1162:2:38"
                        },
                        {
                          "name": "_2",
                          "nodeType": "YulIdentifier",
                          "src": "1166:2:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "1159:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1159:10:38"
                    },
                    "nodeType": "YulIf",
                    "src": "1156:36:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1201:17:38",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1215:2:38",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "not",
                        "nodeType": "YulIdentifier",
                        "src": "1211:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1211:7:38"
                    },
                    "variables": [
                      {
                        "name": "_5",
                        "nodeType": "YulTypedName",
                        "src": "1205:2:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1227:23:38",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1247:2:38",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "1241:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1241:9:38"
                    },
                    "variables": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulTypedName",
                        "src": "1231:6:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1259:71:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "1281:6:38"
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
                                          "name": "_4",
                                          "nodeType": "YulIdentifier",
                                          "src": "1305:2:38"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "1309:4:38",
                                          "type": "",
                                          "value": "0x1f"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "1301:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1301:13:38"
                                    },
                                    {
                                      "name": "_5",
                                      "nodeType": "YulIdentifier",
                                      "src": "1316:2:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "1297:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1297:22:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1321:2:38",
                                  "type": "",
                                  "value": "63"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1293:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1293:31:38"
                            },
                            {
                              "name": "_5",
                              "nodeType": "YulIdentifier",
                              "src": "1326:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "1289:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1289:40:38"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1277:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1277:53:38"
                    },
                    "variables": [
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulTypedName",
                        "src": "1263:10:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1389:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "1391:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1391:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1391:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "1348:10:38"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "1360:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "1345:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1345:18:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "1368:10:38"
                            },
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "1380:6:38"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "1365:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1365:22:38"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "1342:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1342:46:38"
                    },
                    "nodeType": "YulIf",
                    "src": "1339:72:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1427:2:38",
                          "type": "",
                          "value": "64"
                        },
                        {
                          "name": "newFreePtr",
                          "nodeType": "YulIdentifier",
                          "src": "1431:10:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1420:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1420:22:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1420:22:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "1458:6:38"
                        },
                        {
                          "name": "_4",
                          "nodeType": "YulIdentifier",
                          "src": "1466:2:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1451:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1451:18:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1451:18:38"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1515:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1524:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1527:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "1517:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1517:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1517:12:38"
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
                                  "name": "_3",
                                  "nodeType": "YulIdentifier",
                                  "src": "1492:2:38"
                                },
                                {
                                  "name": "_4",
                                  "nodeType": "YulIdentifier",
                                  "src": "1496:2:38"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1488:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1488:11:38"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1501:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1484:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1484:20:38"
                        },
                        {
                          "name": "dataEnd",
                          "nodeType": "YulIdentifier",
                          "src": "1506:7:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "1481:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1481:33:38"
                    },
                    "nodeType": "YulIf",
                    "src": "1478:53:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1540:10:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "1549:1:38",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "i",
                        "nodeType": "YulTypedName",
                        "src": "1544:1:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1605:83:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "memPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "1634:6:38"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "1642:1:38"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "1630:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1630:14:38"
                                  },
                                  {
                                    "name": "_1",
                                    "nodeType": "YulIdentifier",
                                    "src": "1646:2:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1626:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1626:23:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "_3",
                                            "nodeType": "YulIdentifier",
                                            "src": "1665:2:38"
                                          },
                                          {
                                            "name": "i",
                                            "nodeType": "YulIdentifier",
                                            "src": "1669:1:38"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "1661:3:38"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "1661:10:38"
                                      },
                                      {
                                        "name": "_1",
                                        "nodeType": "YulIdentifier",
                                        "src": "1673:2:38"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "1657:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1657:19:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "1651:5:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1651:26:38"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "1619:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1619:59:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1619:59:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "1570:1:38"
                        },
                        {
                          "name": "_4",
                          "nodeType": "YulIdentifier",
                          "src": "1573:2:38"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "1567:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1567:9:38"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "1577:19:38",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "1579:15:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "1588:1:38"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "1591:2:38"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1584:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1584:10:38"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "1579:1:38"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "1563:3:38",
                      "statements": []
                    },
                    "src": "1559:129:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "1712:6:38"
                                },
                                {
                                  "name": "_4",
                                  "nodeType": "YulIdentifier",
                                  "src": "1720:2:38"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1708:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1708:15:38"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "1725:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1704:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1704:24:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1730:1:38",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1697:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1697:35:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1697:35:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1741:16:38",
                    "value": {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "1751:6:38"
                    },
                    "variableNames": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "1741:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1766:67:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1818:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1829:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1814:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1814:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address_payable_fromMemory",
                        "nodeType": "YulIdentifier",
                        "src": "1776:37:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1776:57:38"
                    },
                    "variableNames": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "1766:6:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_addresst_string_memory_ptrt_address_payable_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "525:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "536:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "548:6:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "556:6:38",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "564:6:38",
                  "type": ""
                },
                {
                  "name": "value3",
                  "nodeType": "YulTypedName",
                  "src": "572:6:38",
                  "type": ""
                }
              ],
              "src": "433:1406:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1899:325:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1909:22:38",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1923:1:38",
                          "type": "",
                          "value": "1"
                        },
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "1926:4:38"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "1919:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1919:12:38"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1909:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1940:38:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "1970:4:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1976:1:38",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "1966:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1966:12:38"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "1944:18:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2017:31:38",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "2019:27:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "2033:6:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2041:4:38",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "2029:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2029:17:38"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2019:6:38"
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
                          "src": "1997:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "1990:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1990:26:38"
                    },
                    "nodeType": "YulIf",
                    "src": "1987:61:38"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2107:111:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2128:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2135:3:38",
                                    "type": "",
                                    "value": "224"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2140:10:38",
                                    "type": "",
                                    "value": "0x4e487b71"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "2131:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2131:20:38"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "2121:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2121:31:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2121:31:38"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2172:1:38",
                                "type": "",
                                "value": "4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2175:4:38",
                                "type": "",
                                "value": "0x22"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "2165:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2165:15:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2165:15:38"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2200:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2203:4:38",
                                "type": "",
                                "value": "0x24"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "2193:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2193:15:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2193:15:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "2063:18:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2086:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2094:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "2083:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2083:14:38"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "2060:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2060:38:38"
                    },
                    "nodeType": "YulIf",
                    "src": "2057:161:38"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "1879:4:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "1888:6:38",
                  "type": ""
                }
              ],
              "src": "1844:380:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2285:65:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2302:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "name": "ptr",
                          "nodeType": "YulIdentifier",
                          "src": "2305:3:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2295:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2295:14:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2295:14:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2318:26:38",
                    "value": {
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
                          "src": "2339:4:38",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "keccak256",
                        "nodeType": "YulIdentifier",
                        "src": "2326:9:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2326:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "2318:4:38"
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
                  "src": "2268:3:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "2276:4:38",
                  "type": ""
                }
              ],
              "src": "2229:121:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2436:464:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2469:425:38",
                      "statements": [
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "2483:11:38",
                          "value": {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2493:1:38",
                            "type": "",
                            "value": "0"
                          },
                          "variables": [
                            {
                              "name": "_1",
                              "nodeType": "YulTypedName",
                              "src": "2487:2:38",
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
                                "src": "2514:2:38"
                              },
                              {
                                "name": "array",
                                "nodeType": "YulIdentifier",
                                "src": "2518:5:38"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "2507:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2507:17:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2507:17:38"
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "2537:31:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "2559:2:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2563:4:38",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "keccak256",
                              "nodeType": "YulIdentifier",
                              "src": "2549:9:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2549:19:38"
                          },
                          "variables": [
                            {
                              "name": "data",
                              "nodeType": "YulTypedName",
                              "src": "2541:4:38",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "2581:57:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "data",
                                "nodeType": "YulIdentifier",
                                "src": "2604:4:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2614:1:38",
                                    "type": "",
                                    "value": "5"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "startIndex",
                                        "nodeType": "YulIdentifier",
                                        "src": "2621:10:38"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "2633:2:38",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2617:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2617:19:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "2610:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2610:27:38"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2600:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2600:38:38"
                          },
                          "variables": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulTypedName",
                              "src": "2585:11:38",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2675:23:38",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "2677:19:38",
                                "value": {
                                  "name": "data",
                                  "nodeType": "YulIdentifier",
                                  "src": "2692:4:38"
                                },
                                "variableNames": [
                                  {
                                    "name": "deleteStart",
                                    "nodeType": "YulIdentifier",
                                    "src": "2677:11:38"
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
                                "src": "2657:10:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2669:4:38",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "2654:2:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2654:20:38"
                          },
                          "nodeType": "YulIf",
                          "src": "2651:47:38"
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "2711:41:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "data",
                                "nodeType": "YulIdentifier",
                                "src": "2725:4:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2735:1:38",
                                    "type": "",
                                    "value": "5"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "len",
                                        "nodeType": "YulIdentifier",
                                        "src": "2742:3:38"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "2747:2:38",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "2738:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "2738:12:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "shr",
                                  "nodeType": "YulIdentifier",
                                  "src": "2731:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2731:20:38"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2721:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2721:31:38"
                          },
                          "variables": [
                            {
                              "name": "_2",
                              "nodeType": "YulTypedName",
                              "src": "2715:2:38",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "nodeType": "YulVariableDeclaration",
                          "src": "2765:24:38",
                          "value": {
                            "name": "deleteStart",
                            "nodeType": "YulIdentifier",
                            "src": "2778:11:38"
                          },
                          "variables": [
                            {
                              "name": "start",
                              "nodeType": "YulTypedName",
                              "src": "2769:5:38",
                              "type": ""
                            }
                          ]
                        },
                        {
                          "body": {
                            "nodeType": "YulBlock",
                            "src": "2863:21:38",
                            "statements": [
                              {
                                "expression": {
                                  "arguments": [
                                    {
                                      "name": "start",
                                      "nodeType": "YulIdentifier",
                                      "src": "2872:5:38"
                                    },
                                    {
                                      "name": "_1",
                                      "nodeType": "YulIdentifier",
                                      "src": "2879:2:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "sstore",
                                    "nodeType": "YulIdentifier",
                                    "src": "2865:6:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2865:17:38"
                                },
                                "nodeType": "YulExpressionStatement",
                                "src": "2865:17:38"
                              }
                            ]
                          },
                          "condition": {
                            "arguments": [
                              {
                                "name": "start",
                                "nodeType": "YulIdentifier",
                                "src": "2813:5:38"
                              },
                              {
                                "name": "_2",
                                "nodeType": "YulIdentifier",
                                "src": "2820:2:38"
                              }
                            ],
                            "functionName": {
                              "name": "lt",
                              "nodeType": "YulIdentifier",
                              "src": "2810:2:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2810:13:38"
                          },
                          "nodeType": "YulForLoop",
                          "post": {
                            "nodeType": "YulBlock",
                            "src": "2824:26:38",
                            "statements": [
                              {
                                "nodeType": "YulAssignment",
                                "src": "2826:22:38",
                                "value": {
                                  "arguments": [
                                    {
                                      "name": "start",
                                      "nodeType": "YulIdentifier",
                                      "src": "2839:5:38"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2846:1:38",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2835:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2835:13:38"
                                },
                                "variableNames": [
                                  {
                                    "name": "start",
                                    "nodeType": "YulIdentifier",
                                    "src": "2826:5:38"
                                  }
                                ]
                              }
                            ]
                          },
                          "pre": {
                            "nodeType": "YulBlock",
                            "src": "2806:3:38",
                            "statements": []
                          },
                          "src": "2802:82:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "len",
                          "nodeType": "YulIdentifier",
                          "src": "2452:3:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2457:2:38",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "2449:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2449:11:38"
                    },
                    "nodeType": "YulIf",
                    "src": "2446:448:38"
                  }
                ]
              },
              "name": "clean_up_bytearray_end_slots_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "2408:5:38",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "2415:3:38",
                  "type": ""
                },
                {
                  "name": "startIndex",
                  "nodeType": "YulTypedName",
                  "src": "2420:10:38",
                  "type": ""
                }
              ],
              "src": "2355:545:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2990:81:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3000:65:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "3015:4:38"
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
                                          "src": "3033:1:38",
                                          "type": "",
                                          "value": "3"
                                        },
                                        {
                                          "name": "len",
                                          "nodeType": "YulIdentifier",
                                          "src": "3036:3:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shl",
                                        "nodeType": "YulIdentifier",
                                        "src": "3029:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3029:11:38"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "3046:1:38",
                                          "type": "",
                                          "value": "0"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "not",
                                        "nodeType": "YulIdentifier",
                                        "src": "3042:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3042:6:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shr",
                                    "nodeType": "YulIdentifier",
                                    "src": "3025:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3025:24:38"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "3021:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3021:29:38"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "3011:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3011:40:38"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3057:1:38",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "name": "len",
                              "nodeType": "YulIdentifier",
                              "src": "3060:3:38"
                            }
                          ],
                          "functionName": {
                            "name": "shl",
                            "nodeType": "YulIdentifier",
                            "src": "3053:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3053:11:38"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "3008:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3008:57:38"
                    },
                    "variableNames": [
                      {
                        "name": "used",
                        "nodeType": "YulIdentifier",
                        "src": "3000:4:38"
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
                  "src": "2967:4:38",
                  "type": ""
                },
                {
                  "name": "len",
                  "nodeType": "YulTypedName",
                  "src": "2973:3:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "used",
                  "nodeType": "YulTypedName",
                  "src": "2981:4:38",
                  "type": ""
                }
              ],
              "src": "2905:166:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3172:1256:38",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3182:24:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "3202:3:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "3196:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3196:10:38"
                    },
                    "variables": [
                      {
                        "name": "newLen",
                        "nodeType": "YulTypedName",
                        "src": "3186:6:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3249:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "3251:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3251:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3251:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "3221:6:38"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3237:2:38",
                                  "type": "",
                                  "value": "64"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3241:1:38",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "3233:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3233:10:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3245:1:38",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "3229:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3229:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "3218:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3218:30:38"
                    },
                    "nodeType": "YulIf",
                    "src": "3215:56:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "slot",
                          "nodeType": "YulIdentifier",
                          "src": "3324:4:38"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "3362:4:38"
                                }
                              ],
                              "functionName": {
                                "name": "sload",
                                "nodeType": "YulIdentifier",
                                "src": "3356:5:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3356:11:38"
                            }
                          ],
                          "functionName": {
                            "name": "extract_byte_array_length",
                            "nodeType": "YulIdentifier",
                            "src": "3330:25:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3330:38:38"
                        },
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "3370:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "clean_up_bytearray_end_slots_string_storage",
                        "nodeType": "YulIdentifier",
                        "src": "3280:43:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3280:97:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3280:97:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3386:18:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "3403:1:38",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulTypedName",
                        "src": "3390:9:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3413:23:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "3432:4:38",
                      "type": "",
                      "value": "0x20"
                    },
                    "variables": [
                      {
                        "name": "srcOffset_1",
                        "nodeType": "YulTypedName",
                        "src": "3417:11:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3445:24:38",
                    "value": {
                      "name": "srcOffset_1",
                      "nodeType": "YulIdentifier",
                      "src": "3458:11:38"
                    },
                    "variableNames": [
                      {
                        "name": "srcOffset",
                        "nodeType": "YulIdentifier",
                        "src": "3445:9:38"
                      }
                    ]
                  },
                  {
                    "cases": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3515:656:38",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "3529:35:38",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "3548:6:38"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3560:2:38",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "3556:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3556:7:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "3544:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3544:20:38"
                              },
                              "variables": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulTypedName",
                                  "src": "3533:7:38",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "3577:49:38",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "3621:4:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "array_dataslot_string_storage",
                                  "nodeType": "YulIdentifier",
                                  "src": "3591:29:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3591:35:38"
                              },
                              "variables": [
                                {
                                  "name": "dstPtr",
                                  "nodeType": "YulTypedName",
                                  "src": "3581:6:38",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "3639:10:38",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3648:1:38",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "i",
                                  "nodeType": "YulTypedName",
                                  "src": "3643:1:38",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "3726:172:38",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "3751:6:38"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "arguments": [
                                                {
                                                  "name": "src",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "3769:3:38"
                                                },
                                                {
                                                  "name": "srcOffset",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "3774:9:38"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "add",
                                                "nodeType": "YulIdentifier",
                                                "src": "3765:3:38"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "3765:19:38"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "mload",
                                            "nodeType": "YulIdentifier",
                                            "src": "3759:5:38"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3759:26:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "3744:6:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3744:42:38"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "3744:42:38"
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "3803:24:38",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "dstPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "3817:6:38"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "3825:1:38",
                                          "type": "",
                                          "value": "1"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "3813:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3813:14:38"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "3803:6:38"
                                      }
                                    ]
                                  },
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "3844:40:38",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "srcOffset",
                                          "nodeType": "YulIdentifier",
                                          "src": "3861:9:38"
                                        },
                                        {
                                          "name": "srcOffset_1",
                                          "nodeType": "YulIdentifier",
                                          "src": "3872:11:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "3857:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3857:27:38"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "3844:9:38"
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
                                    "src": "3673:1:38"
                                  },
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "3676:7:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "3670:2:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3670:14:38"
                              },
                              "nodeType": "YulForLoop",
                              "post": {
                                "nodeType": "YulBlock",
                                "src": "3685:28:38",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "3687:24:38",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "3696:1:38"
                                        },
                                        {
                                          "name": "srcOffset_1",
                                          "nodeType": "YulIdentifier",
                                          "src": "3699:11:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "3692:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3692:19:38"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "3687:1:38"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "pre": {
                                "nodeType": "YulBlock",
                                "src": "3666:3:38",
                                "statements": []
                              },
                              "src": "3662:236:38"
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "3946:166:38",
                                "statements": [
                                  {
                                    "nodeType": "YulVariableDeclaration",
                                    "src": "3964:43:38",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "3991:3:38"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "3996:9:38"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "3987:3:38"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3987:19:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "3981:5:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3981:26:38"
                                    },
                                    "variables": [
                                      {
                                        "name": "lastValue",
                                        "nodeType": "YulTypedName",
                                        "src": "3968:9:38",
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
                                          "src": "4031:6:38"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "lastValue",
                                              "nodeType": "YulIdentifier",
                                              "src": "4043:9:38"
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
                                                              "src": "4070:1:38",
                                                              "type": "",
                                                              "value": "3"
                                                            },
                                                            {
                                                              "name": "newLen",
                                                              "nodeType": "YulIdentifier",
                                                              "src": "4073:6:38"
                                                            }
                                                          ],
                                                          "functionName": {
                                                            "name": "shl",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4066:3:38"
                                                          },
                                                          "nodeType": "YulFunctionCall",
                                                          "src": "4066:14:38"
                                                        },
                                                        {
                                                          "kind": "number",
                                                          "nodeType": "YulLiteral",
                                                          "src": "4082:3:38",
                                                          "type": "",
                                                          "value": "248"
                                                        }
                                                      ],
                                                      "functionName": {
                                                        "name": "and",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4062:3:38"
                                                      },
                                                      "nodeType": "YulFunctionCall",
                                                      "src": "4062:24:38"
                                                    },
                                                    {
                                                      "arguments": [
                                                        {
                                                          "kind": "number",
                                                          "nodeType": "YulLiteral",
                                                          "src": "4092:1:38",
                                                          "type": "",
                                                          "value": "0"
                                                        }
                                                      ],
                                                      "functionName": {
                                                        "name": "not",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4088:3:38"
                                                      },
                                                      "nodeType": "YulFunctionCall",
                                                      "src": "4088:6:38"
                                                    }
                                                  ],
                                                  "functionName": {
                                                    "name": "shr",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4058:3:38"
                                                  },
                                                  "nodeType": "YulFunctionCall",
                                                  "src": "4058:37:38"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "not",
                                                "nodeType": "YulIdentifier",
                                                "src": "4054:3:38"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "4054:42:38"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "and",
                                            "nodeType": "YulIdentifier",
                                            "src": "4039:3:38"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4039:58:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "sstore",
                                        "nodeType": "YulIdentifier",
                                        "src": "4024:6:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4024:74:38"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "4024:74:38"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "loopEnd",
                                    "nodeType": "YulIdentifier",
                                    "src": "3917:7:38"
                                  },
                                  {
                                    "name": "newLen",
                                    "nodeType": "YulIdentifier",
                                    "src": "3926:6:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "lt",
                                  "nodeType": "YulIdentifier",
                                  "src": "3914:2:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3914:19:38"
                              },
                              "nodeType": "YulIf",
                              "src": "3911:201:38"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "4132:4:38"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "kind": "number",
                                            "nodeType": "YulLiteral",
                                            "src": "4146:1:38",
                                            "type": "",
                                            "value": "1"
                                          },
                                          {
                                            "name": "newLen",
                                            "nodeType": "YulIdentifier",
                                            "src": "4149:6:38"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "shl",
                                          "nodeType": "YulIdentifier",
                                          "src": "4142:3:38"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4142:14:38"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "4158:1:38",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "4138:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4138:22:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "4125:6:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4125:36:38"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "4125:36:38"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "3508:663:38",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3513:1:38",
                          "type": "",
                          "value": "1"
                        }
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "4188:234:38",
                          "statements": [
                            {
                              "nodeType": "YulVariableDeclaration",
                              "src": "4202:14:38",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4215:1:38",
                                "type": "",
                                "value": "0"
                              },
                              "variables": [
                                {
                                  "name": "value",
                                  "nodeType": "YulTypedName",
                                  "src": "4206:5:38",
                                  "type": ""
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "4251:67:38",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "4269:35:38",
                                    "value": {
                                      "arguments": [
                                        {
                                          "arguments": [
                                            {
                                              "name": "src",
                                              "nodeType": "YulIdentifier",
                                              "src": "4288:3:38"
                                            },
                                            {
                                              "name": "srcOffset",
                                              "nodeType": "YulIdentifier",
                                              "src": "4293:9:38"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "add",
                                            "nodeType": "YulIdentifier",
                                            "src": "4284:3:38"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "4284:19:38"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "4278:5:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4278:26:38"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "4269:5:38"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "name": "newLen",
                                "nodeType": "YulIdentifier",
                                "src": "4232:6:38"
                              },
                              "nodeType": "YulIf",
                              "src": "4229:89:38"
                            },
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "name": "slot",
                                    "nodeType": "YulIdentifier",
                                    "src": "4338:4:38"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "value",
                                        "nodeType": "YulIdentifier",
                                        "src": "4397:5:38"
                                      },
                                      {
                                        "name": "newLen",
                                        "nodeType": "YulIdentifier",
                                        "src": "4404:6:38"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "extract_used_part_and_set_length_of_short_byte_array",
                                      "nodeType": "YulIdentifier",
                                      "src": "4344:52:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4344:67:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "sstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "4331:6:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4331:81:38"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "4331:81:38"
                            }
                          ]
                        },
                        "nodeType": "YulCase",
                        "src": "4180:242:38",
                        "value": "default"
                      }
                    ],
                    "expression": {
                      "arguments": [
                        {
                          "name": "newLen",
                          "nodeType": "YulIdentifier",
                          "src": "3488:6:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3496:2:38",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "3485:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3485:14:38"
                    },
                    "nodeType": "YulSwitch",
                    "src": "3478:944:38"
                  }
                ]
              },
              "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "slot",
                  "nodeType": "YulTypedName",
                  "src": "3157:4:38",
                  "type": ""
                },
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "3163:3:38",
                  "type": ""
                }
              ],
              "src": "3076:1352:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4480:185:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4519:111:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4540:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "4547:3:38",
                                    "type": "",
                                    "value": "224"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "4552:10:38",
                                    "type": "",
                                    "value": "0x4e487b71"
                                  }
                                ],
                                "functionName": {
                                  "name": "shl",
                                  "nodeType": "YulIdentifier",
                                  "src": "4543:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4543:20:38"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "4533:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4533:31:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4533:31:38"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4584:1:38",
                                "type": "",
                                "value": "4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4587:4:38",
                                "type": "",
                                "value": "0x11"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "4577:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4577:15:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4577:15:38"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4612:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4615:4:38",
                                "type": "",
                                "value": "0x24"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "4605:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4605:15:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4605:15:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4496:5:38"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4507:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "4503:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4503:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "4493:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4493:17:38"
                    },
                    "nodeType": "YulIf",
                    "src": "4490:140:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4639:20:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4650:5:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4657:1:38",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4646:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4646:13:38"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "4639:3:38"
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
                  "src": "4462:5:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "4472:3:38",
                  "type": ""
                }
              ],
              "src": "4433:232:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4844:182:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4861:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4872:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4854:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4854:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4854:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4895:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4906:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4891:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4891:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4911:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4884:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4884:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4884:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4934:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4945:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4930:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4930:18:38"
                        },
                        {
                          "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "4950:34:38",
                          "type": "",
                          "value": "Ownable: caller is not the owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4923:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4923:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4923:62:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4994:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5006:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5017:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5002:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5002:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4994:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4821:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4835:4:38",
                  "type": ""
                }
              ],
              "src": "4670:356:38"
            }
          ]
        },
        "contents": "{\n    { }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function abi_decode_address_payable_fromMemory(offset) -> value\n    {\n        value := mload(offset)\n        validator_revert_address(value)\n    }\n    function abi_decode_tuple_t_addresst_addresst_string_memory_ptrt_address_payable_fromMemory(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let _1 := 32\n        let value_1 := mload(add(headStart, _1))\n        validator_revert_address(value_1)\n        value1 := value_1\n        let offset := mload(add(headStart, 64))\n        let _2 := sub(shl(64, 1), 1)\n        if gt(offset, _2) { revert(0, 0) }\n        let _3 := add(headStart, offset)\n        if iszero(slt(add(_3, 0x1f), dataEnd)) { revert(0, 0) }\n        let _4 := mload(_3)\n        if gt(_4, _2) { panic_error_0x41() }\n        let _5 := not(31)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(_4, 0x1f), _5), 63), _5))\n        if or(gt(newFreePtr, _2), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, _4)\n        if gt(add(add(_3, _4), _1), dataEnd) { revert(0, 0) }\n        let i := 0\n        for { } lt(i, _4) { i := add(i, _1) }\n        {\n            mstore(add(add(memPtr, i), _1), mload(add(add(_3, i), _1)))\n        }\n        mstore(add(add(memPtr, _4), _1), 0)\n        value2 := memPtr\n        value3 := abi_decode_address_payable_fromMemory(add(headStart, 96))\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function array_dataslot_string_storage(ptr) -> data\n    {\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n    }\n    function clean_up_bytearray_end_slots_string_storage(array, len, startIndex)\n    {\n        if gt(len, 31)\n        {\n            let _1 := 0\n            mstore(_1, array)\n            let data := keccak256(_1, 0x20)\n            let deleteStart := add(data, shr(5, add(startIndex, 31)))\n            if lt(startIndex, 0x20) { deleteStart := data }\n            let _2 := add(data, shr(5, add(len, 31)))\n            let start := deleteStart\n            for { } lt(start, _2) { start := add(start, 1) }\n            { sstore(start, _1) }\n        }\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used\n    {\n        used := or(and(data, not(shr(shl(3, len), not(0)))), shl(1, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src)\n    {\n        let newLen := mload(src)\n        if gt(newLen, sub(shl(64, 1), 1)) { panic_error_0x41() }\n        clean_up_bytearray_end_slots_string_storage(slot, extract_byte_array_length(sload(slot)), newLen)\n        let srcOffset := 0\n        let srcOffset_1 := 0x20\n        srcOffset := srcOffset_1\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(31))\n            let dstPtr := array_dataslot_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, srcOffset_1) }\n            {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, srcOffset_1)\n            }\n            if lt(loopEnd, newLen)\n            {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, and(lastValue, not(shr(and(shl(3, newLen), 248), not(0)))))\n            }\n            sstore(slot, add(shl(1, newLen), 1))\n        }\n        default {\n            let value := 0\n            if newLen\n            {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x11)\n            revert(0, 0x24)\n        }\n        ret := add(value, 1)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n}",
        "id": 38,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:18036:38",
          "statements": [
            {
              "nodeType": "YulBlock",
              "src": "6:3:38",
              "statements": []
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "58:133:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "169:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "178:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "181:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "171:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "171:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "171:12:38"
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
                              "src": "81:5:38"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "92:5:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "99:66:38",
                                  "type": "",
                                  "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "88:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "88:78:38"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "78:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "78:89:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "71:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "71:97:38"
                    },
                    "nodeType": "YulIf",
                    "src": "68:117:38"
                  }
                ]
              },
              "name": "validator_revert_bytes4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "47:5:38",
                  "type": ""
                }
              ],
              "src": "14:177:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "265:176:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "311:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "320:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "323:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "313:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "313:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "313:12:38"
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
                              "src": "286:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "295:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "282:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "282:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "307:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "278:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "278:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "275:52:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "336:36:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "362:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "349:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "349:23:38"
                    },
                    "variables": [
                      {
                        "name": "value",
                        "nodeType": "YulTypedName",
                        "src": "340:5:38",
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
                          "src": "405:5:38"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_bytes4",
                        "nodeType": "YulIdentifier",
                        "src": "381:23:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "381:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "381:30:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "420:15:38",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "430:5:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "420:6:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_bytes4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "231:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "242:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "254:6:38",
                  "type": ""
                }
              ],
              "src": "196:245:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "541:92:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "551:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "563:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "574:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "559:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "559:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "551:4:38"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "593:9:38"
                        },
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value0",
                                  "nodeType": "YulIdentifier",
                                  "src": "618:6:38"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "611:6:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "611:14:38"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "604:6:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "604:22:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "586:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "586:41:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "586:41:38"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "510:9:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "521:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "532:4:38",
                  "type": ""
                }
              ],
              "src": "446:187:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "704:184:38",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "714:10:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "723:1:38",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "i",
                        "nodeType": "YulTypedName",
                        "src": "718:1:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "783:63:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "808:3:38"
                                  },
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "813:1:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "804:3:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "804:11:38"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "src",
                                        "nodeType": "YulIdentifier",
                                        "src": "827:3:38"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "832:1:38"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "823:3:38"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "823:11:38"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "817:5:38"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "817:18:38"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "797:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "797:39:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "797:39:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "744:1:38"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "747:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "741:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "741:13:38"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "755:19:38",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "757:15:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "766:1:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "769:2:38",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "762:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "762:10:38"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "757:1:38"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "737:3:38",
                      "statements": []
                    },
                    "src": "733:113:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "866:3:38"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "871:6:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "862:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "862:16:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "880:1:38",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "855:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "855:27:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "855:27:38"
                  }
                ]
              },
              "name": "copy_memory_to_memory_with_cleanup",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "682:3:38",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "687:3:38",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "692:6:38",
                  "type": ""
                }
              ],
              "src": "638:250:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "943:221:38",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "953:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "973:5:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "967:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "967:12:38"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "957:6:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "995:3:38"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1000:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "988:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "988:19:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "988:19:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1055:5:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1062:4:38",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1051:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1051:16:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1073:3:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1078:4:38",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1069:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1069:14:38"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1085:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory_with_cleanup",
                        "nodeType": "YulIdentifier",
                        "src": "1016:34:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1016:76:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1016:76:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1101:57:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1116:3:38"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "length",
                                      "nodeType": "YulIdentifier",
                                      "src": "1129:6:38"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1137:2:38",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1125:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1125:15:38"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1146:2:38",
                                      "type": "",
                                      "value": "31"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "1142:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1142:7:38"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "1121:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1121:29:38"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1112:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1112:39:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1153:4:38",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1108:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1108:50:38"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1101:3:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_string",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "920:5:38",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "927:3:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "935:3:38",
                  "type": ""
                }
              ],
              "src": "893:271:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1290:99:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1307:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1318:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1300:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1300:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1300:21:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1330:53:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1356:6:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1368:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1379:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1364:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1364:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_string",
                        "nodeType": "YulIdentifier",
                        "src": "1338:17:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1338:45:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "1330:4:38"
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
                  "src": "1259:9:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1270:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "1281:4:38",
                  "type": ""
                }
              ],
              "src": "1169:220:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1464:110:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1510:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1519:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1522:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "1512:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1512:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1512:12:38"
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
                              "src": "1485:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1494:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "1481:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1481:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1506:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "1477:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1477:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "1474:52:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1535:33:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1558:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "1545:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1545:23:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1535:6:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1430:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "1441:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1453:6:38",
                  "type": ""
                }
              ],
              "src": "1394:180:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1680:125:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1690:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1702:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1713:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1698:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1698:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "1690:4:38"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1732:9:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1747:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1755:42:38",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "1743:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1743:55:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1725:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1725:74:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1725:74:38"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1649:9:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1660:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "1671:4:38",
                  "type": ""
                }
              ],
              "src": "1579:226:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1859:147:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1869:29:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "1891:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "1878:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1878:20:38"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1869:5:38"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1984:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1993:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1996:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "1986:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1986:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1986:12:38"
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
                              "src": "1920:5:38"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "1931:5:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1938:42:38",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "1927:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1927:54:38"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "1917:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1917:65:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "1910:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1910:73:38"
                    },
                    "nodeType": "YulIf",
                    "src": "1907:93:38"
                  }
                ]
              },
              "name": "abi_decode_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "1838:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1849:5:38",
                  "type": ""
                }
              ],
              "src": "1810:196:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2098:167:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2144:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2153:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2156:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "2146:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2146:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2146:12:38"
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
                              "src": "2119:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2128:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2115:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2115:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2140:2:38",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "2111:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2111:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "2108:52:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2169:39:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2198:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "2179:18:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2179:29:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2169:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2217:42:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2244:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2255:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2240:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2240:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "2227:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2227:32:38"
                    },
                    "variableNames": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "2217:6:38"
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
                  "src": "2056:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "2067:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2079:6:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "2087:6:38",
                  "type": ""
                }
              ],
              "src": "2011:254:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2371:76:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2381:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2393:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2404:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2389:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2389:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2381:4:38"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2423:9:38"
                        },
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2434:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2416:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2416:25:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2416:25:38"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "2340:9:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2351:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "2362:4:38",
                  "type": ""
                }
              ],
              "src": "2270:177:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2556:224:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2602:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2611:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2614:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "2604:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2604:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2604:12:38"
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
                              "src": "2577:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2586:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2573:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2573:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2598:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "2569:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2569:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "2566:52:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2627:39:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2656:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "2637:18:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2637:29:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2627:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2675:48:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2708:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2719:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2704:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2704:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "2685:18:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2685:38:38"
                    },
                    "variableNames": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "2675:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2732:42:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2759:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2770:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2755:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2755:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "2742:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2742:32:38"
                    },
                    "variableNames": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "2732:6:38"
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
                  "src": "2506:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "2517:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2529:6:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "2537:6:38",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "2545:6:38",
                  "type": ""
                }
              ],
              "src": "2452:328:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2902:125:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2912:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2924:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2935:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2920:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2920:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2912:4:38"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2954:9:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "2969:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2977:42:38",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "2965:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2965:55:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2947:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2947:74:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2947:74:38"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "2871:9:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2882:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "2893:4:38",
                  "type": ""
                }
              ],
              "src": "2785:242:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3102:116:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3148:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3157:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3160:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "3150:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3150:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3150:12:38"
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
                              "src": "3123:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3132:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "3119:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3119:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3144:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "3115:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3115:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "3112:52:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3173:39:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3202:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "3183:18:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3183:29:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "3173:6:38"
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
                  "src": "3068:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "3079:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3091:6:38",
                  "type": ""
                }
              ],
              "src": "3032:186:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3265:76:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3319:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3328:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3331:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "3321:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3321:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3321:12:38"
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
                              "src": "3288:5:38"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "3309:5:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "3302:6:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3302:13:38"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "3295:6:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3295:21:38"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "3285:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3285:32:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "3278:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3278:40:38"
                    },
                    "nodeType": "YulIf",
                    "src": "3275:60:38"
                  }
                ]
              },
              "name": "validator_revert_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3254:5:38",
                  "type": ""
                }
              ],
              "src": "3223:118:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3430:231:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3476:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3485:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3488:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "3478:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3478:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3478:12:38"
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
                              "src": "3451:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3460:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "3447:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3447:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3472:2:38",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "3443:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3443:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "3440:52:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3501:39:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "3530:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "3511:18:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3511:29:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "3501:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "3549:45:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3579:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3590:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3575:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3575:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "3562:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3562:32:38"
                    },
                    "variables": [
                      {
                        "name": "value",
                        "nodeType": "YulTypedName",
                        "src": "3553:5:38",
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
                          "src": "3625:5:38"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_bool",
                        "nodeType": "YulIdentifier",
                        "src": "3603:21:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3603:28:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3603:28:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "3640:15:38",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "3650:5:38"
                    },
                    "variableNames": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "3640:6:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3388:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "3399:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3411:6:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "3419:6:38",
                  "type": ""
                }
              ],
              "src": "3346:315:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3698:152:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3715:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3718:77:38",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3708:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3708:88:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3708:88:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3812:1:38",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3815:4:38",
                          "type": "",
                          "value": "0x41"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3805:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3805:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3805:15:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3836:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3839:4:38",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "3829:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3829:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3829:15:38"
                  }
                ]
              },
              "name": "panic_error_0x41",
              "nodeType": "YulFunctionDefinition",
              "src": "3666:184:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3985:1008:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4032:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4041:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4044:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "4034:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4034:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4034:12:38"
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
                              "src": "4006:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4015:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "4002:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4002:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4027:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "3998:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3998:33:38"
                    },
                    "nodeType": "YulIf",
                    "src": "3995:53:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4057:39:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4086:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "4067:18:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4067:29:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "4057:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4105:48:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4138:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4149:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4134:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4134:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "4115:18:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4115:38:38"
                    },
                    "variableNames": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "4105:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4162:42:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4189:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4200:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4185:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4185:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "4172:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4172:32:38"
                    },
                    "variableNames": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "4162:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4213:46:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4244:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4255:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4240:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4240:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "4227:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4227:32:38"
                    },
                    "variables": [
                      {
                        "name": "offset",
                        "nodeType": "YulTypedName",
                        "src": "4217:6:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4268:28:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "4278:18:38",
                      "type": "",
                      "value": "0xffffffffffffffff"
                    },
                    "variables": [
                      {
                        "name": "_1",
                        "nodeType": "YulTypedName",
                        "src": "4272:2:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4323:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4332:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4335:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "4325:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4325:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4325:12:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "4311:6:38"
                        },
                        {
                          "name": "_1",
                          "nodeType": "YulIdentifier",
                          "src": "4319:2:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "4308:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4308:14:38"
                    },
                    "nodeType": "YulIf",
                    "src": "4305:34:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4348:32:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4362:9:38"
                        },
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "4373:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4358:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4358:22:38"
                    },
                    "variables": [
                      {
                        "name": "_2",
                        "nodeType": "YulTypedName",
                        "src": "4352:2:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4428:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4437:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4440:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "4430:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4430:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4430:12:38"
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
                                  "name": "_2",
                                  "nodeType": "YulIdentifier",
                                  "src": "4407:2:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4411:4:38",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4403:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4403:13:38"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "4418:7:38"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "4399:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4399:27:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "4392:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4392:35:38"
                    },
                    "nodeType": "YulIf",
                    "src": "4389:55:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4453:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "_2",
                          "nodeType": "YulIdentifier",
                          "src": "4476:2:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "4463:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4463:16:38"
                    },
                    "variables": [
                      {
                        "name": "_3",
                        "nodeType": "YulTypedName",
                        "src": "4457:2:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4502:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "4504:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4504:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4504:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "_3",
                          "nodeType": "YulIdentifier",
                          "src": "4494:2:38"
                        },
                        {
                          "name": "_1",
                          "nodeType": "YulIdentifier",
                          "src": "4498:2:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "4491:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4491:10:38"
                    },
                    "nodeType": "YulIf",
                    "src": "4488:36:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4533:17:38",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4547:2:38",
                          "type": "",
                          "value": "31"
                        }
                      ],
                      "functionName": {
                        "name": "not",
                        "nodeType": "YulIdentifier",
                        "src": "4543:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4543:7:38"
                    },
                    "variables": [
                      {
                        "name": "_4",
                        "nodeType": "YulTypedName",
                        "src": "4537:2:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4559:23:38",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4579:2:38",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "4573:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4573:9:38"
                    },
                    "variables": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulTypedName",
                        "src": "4563:6:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "4591:71:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "4613:6:38"
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
                                          "name": "_3",
                                          "nodeType": "YulIdentifier",
                                          "src": "4637:2:38"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "4641:4:38",
                                          "type": "",
                                          "value": "0x1f"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "4633:3:38"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4633:13:38"
                                    },
                                    {
                                      "name": "_4",
                                      "nodeType": "YulIdentifier",
                                      "src": "4648:2:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "4629:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4629:22:38"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4653:2:38",
                                  "type": "",
                                  "value": "63"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4625:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4625:31:38"
                            },
                            {
                              "name": "_4",
                              "nodeType": "YulIdentifier",
                              "src": "4658:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "4621:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4621:40:38"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4609:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4609:53:38"
                    },
                    "variables": [
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulTypedName",
                        "src": "4595:10:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4721:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "4723:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4723:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4723:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "4680:10:38"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "4692:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "4677:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4677:18:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "4700:10:38"
                            },
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "4712:6:38"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "4697:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4697:22:38"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "4674:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4674:46:38"
                    },
                    "nodeType": "YulIf",
                    "src": "4671:72:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4759:2:38",
                          "type": "",
                          "value": "64"
                        },
                        {
                          "name": "newFreePtr",
                          "nodeType": "YulIdentifier",
                          "src": "4763:10:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4752:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4752:22:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4752:22:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "4790:6:38"
                        },
                        {
                          "name": "_3",
                          "nodeType": "YulIdentifier",
                          "src": "4798:2:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4783:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4783:18:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4783:18:38"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4847:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4856:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4859:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "4849:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4849:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4849:12:38"
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
                                  "name": "_2",
                                  "nodeType": "YulIdentifier",
                                  "src": "4824:2:38"
                                },
                                {
                                  "name": "_3",
                                  "nodeType": "YulIdentifier",
                                  "src": "4828:2:38"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4820:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4820:11:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4833:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4816:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4816:20:38"
                        },
                        {
                          "name": "dataEnd",
                          "nodeType": "YulIdentifier",
                          "src": "4838:7:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "4813:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4813:33:38"
                    },
                    "nodeType": "YulIf",
                    "src": "4810:53:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "4889:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4897:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4885:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4885:15:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "4906:2:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4910:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4902:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4902:11:38"
                        },
                        {
                          "name": "_3",
                          "nodeType": "YulIdentifier",
                          "src": "4915:2:38"
                        }
                      ],
                      "functionName": {
                        "name": "calldatacopy",
                        "nodeType": "YulIdentifier",
                        "src": "4872:12:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4872:46:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4872:46:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "4942:6:38"
                                },
                                {
                                  "name": "_3",
                                  "nodeType": "YulIdentifier",
                                  "src": "4950:2:38"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4938:3:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4938:15:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4955:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4934:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4934:24:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4960:1:38",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "4927:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4927:35:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4927:35:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "4971:16:38",
                    "value": {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "4981:6:38"
                    },
                    "variableNames": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "4971:6:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3927:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "3938:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3950:6:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "3958:6:38",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "3966:6:38",
                  "type": ""
                },
                {
                  "name": "value3",
                  "nodeType": "YulTypedName",
                  "src": "3974:6:38",
                  "type": ""
                }
              ],
              "src": "3855:1138:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5085:173:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5131:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5140:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5143:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "5133:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5133:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5133:12:38"
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
                              "src": "5106:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5115:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "5102:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5102:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5127:2:38",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "5098:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5098:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "5095:52:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5156:39:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5185:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "5166:18:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5166:29:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5156:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "5204:48:38",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5237:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5248:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5233:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5233:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_address",
                        "nodeType": "YulIdentifier",
                        "src": "5214:18:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5214:38:38"
                    },
                    "variableNames": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "5204:6:38"
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
                  "src": "5043:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "5054:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "5066:6:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "5074:6:38",
                  "type": ""
                }
              ],
              "src": "4998:260:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5318:382:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5328:22:38",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5342:1:38",
                          "type": "",
                          "value": "1"
                        },
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "5345:4:38"
                        }
                      ],
                      "functionName": {
                        "name": "shr",
                        "nodeType": "YulIdentifier",
                        "src": "5338:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5338:12:38"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5328:6:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "5359:38:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "5389:4:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5395:1:38",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "5385:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5385:12:38"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "5363:18:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5436:31:38",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "5438:27:38",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "5452:6:38"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5460:4:38",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "5448:3:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5448:17:38"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "5438:6:38"
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
                          "src": "5416:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "5409:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5409:26:38"
                    },
                    "nodeType": "YulIf",
                    "src": "5406:61:38"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5526:168:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5547:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5550:77:38",
                                "type": "",
                                "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "5540:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5540:88:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5540:88:38"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5648:1:38",
                                "type": "",
                                "value": "4"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5651:4:38",
                                "type": "",
                                "value": "0x22"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "5641:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5641:15:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5641:15:38"
                        },
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5676:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5679:4:38",
                                "type": "",
                                "value": "0x24"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "5669:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5669:15:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5669:15:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "5482:18:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "5505:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5513:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "5502:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5502:14:38"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "5479:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5479:38:38"
                    },
                    "nodeType": "YulIf",
                    "src": "5476:218:38"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "5298:4:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "5307:6:38",
                  "type": ""
                }
              ],
              "src": "5263:437:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5879:223:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5896:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5907:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5889:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5889:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5889:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5930:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5941:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5926:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5926:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5946:2:38",
                          "type": "",
                          "value": "33"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5919:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5919:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5919:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5969:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5980:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5965:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5965:18:38"
                        },
                        {
                          "hexValue": "4552433732313a20617070726f76616c20746f2063757272656e74206f776e65",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "5985:34:38",
                          "type": "",
                          "value": "ERC721: approval to current owne"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5958:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5958:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5958:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6040:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6051:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6036:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6036:18:38"
                        },
                        {
                          "hexValue": "72",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "6056:3:38",
                          "type": "",
                          "value": "r"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6029:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6029:31:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6029:31:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6069:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6081:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6092:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6077:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6077:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6069:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5856:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5870:4:38",
                  "type": ""
                }
              ],
              "src": "5705:397:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6281:252:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6298:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6309:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6291:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6291:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6291:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6332:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6343:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6328:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6328:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6348:2:38",
                          "type": "",
                          "value": "62"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6321:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6321:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6321:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6371:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6382:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6367:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6367:18:38"
                        },
                        {
                          "hexValue": "4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "6387:34:38",
                          "type": "",
                          "value": "ERC721: approve caller is not to"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6360:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6360:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6360:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6442:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6453:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6438:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6438:18:38"
                        },
                        {
                          "hexValue": "6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "6458:32:38",
                          "type": "",
                          "value": "ken owner nor approved for all"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6431:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6431:60:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6431:60:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6500:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6512:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6523:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6508:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6508:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6500:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6258:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6272:4:38",
                  "type": ""
                }
              ],
              "src": "6107:426:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6712:236:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6729:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6740:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6722:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6722:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6722:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6763:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6774:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6759:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6759:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6779:2:38",
                          "type": "",
                          "value": "46"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6752:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6752:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6752:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6802:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6813:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6798:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6798:18:38"
                        },
                        {
                          "hexValue": "4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e65",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "6818:34:38",
                          "type": "",
                          "value": "ERC721: caller is not token owne"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6791:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6791:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6791:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6873:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6884:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6869:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6869:18:38"
                        },
                        {
                          "hexValue": "72206e6f7220617070726f766564",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "6889:16:38",
                          "type": "",
                          "value": "r nor approved"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "6862:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6862:44:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6862:44:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "6915:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6927:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6938:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6923:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6923:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6915:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6689:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6703:4:38",
                  "type": ""
                }
              ],
              "src": "6538:410:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7034:103:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "7080:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "7089:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "7092:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "7082:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7082:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "7082:12:38"
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
                              "src": "7055:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7064:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "7051:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7051:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7076:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "7047:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7047:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "7044:52:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7105:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7121:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "7115:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7115:16:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "7105:6:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "7000:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "7011:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "7023:6:38",
                  "type": ""
                }
              ],
              "src": "6953:184:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7316:229:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7333:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7344:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7326:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7326:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7326:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7367:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7378:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7363:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7363:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7383:2:38",
                          "type": "",
                          "value": "39"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7356:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7356:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7356:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7406:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7417:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7402:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7402:18:38"
                        },
                        {
                          "hexValue": "4552433732313a20726563697069656e74206c61636b206f6620657263323020",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "7422:34:38",
                          "type": "",
                          "value": "ERC721: recipient lack of erc20 "
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7395:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7395:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7395:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7477:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7488:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7473:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7473:18:38"
                        },
                        {
                          "hexValue": "62616c616e6365",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "7493:9:38",
                          "type": "",
                          "value": "balance"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7466:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7466:37:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7466:37:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7512:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7524:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7535:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7520:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7520:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7512:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_be6ad8021e6b80a9a985704237732530c0e3cdf07bbf9d28e13e90abe670112e__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "7293:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "7307:4:38",
                  "type": ""
                }
              ],
              "src": "7142:403:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7724:177:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7741:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7752:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7734:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7734:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7734:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7775:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7786:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7771:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7771:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7791:2:38",
                          "type": "",
                          "value": "27"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7764:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7764:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7764:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7814:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7825:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7810:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7810:18:38"
                        },
                        {
                          "hexValue": "4552433732313a20616c6c206e66747320617265206d696e746564",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "7830:29:38",
                          "type": "",
                          "value": "ERC721: all nfts are minted"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7803:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7803:57:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7803:57:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "7869:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "7881:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7892:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7877:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7877:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "7869:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_df3d2f59522d891de16a4252d65c969fd7e0ed099ebf38783c0a5e88ec8b1c22__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "7701:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "7715:4:38",
                  "type": ""
                }
              ],
              "src": "7550:351:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7938:152:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7955:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7958:77:38",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7948:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7948:88:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7948:88:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8052:1:38",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8055:4:38",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8045:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8045:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8045:15:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8076:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8079:4:38",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "8069:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8069:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8069:15:38"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "7906:184:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8144:79:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8154:17:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "8166:1:38"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "8169:1:38"
                        }
                      ],
                      "functionName": {
                        "name": "sub",
                        "nodeType": "YulIdentifier",
                        "src": "8162:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8162:9:38"
                    },
                    "variableNames": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "8154:4:38"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8195:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "8197:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8197:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8197:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "diff",
                          "nodeType": "YulIdentifier",
                          "src": "8186:4:38"
                        },
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "8192:1:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "8183:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8183:11:38"
                    },
                    "nodeType": "YulIf",
                    "src": "8180:37:38"
                  }
                ]
              },
              "name": "checked_sub_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "8126:1:38",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "8129:1:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "diff",
                  "nodeType": "YulTypedName",
                  "src": "8135:4:38",
                  "type": ""
                }
              ],
              "src": "8095:128:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8260:152:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8277:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8280:77:38",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8270:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8270:88:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8270:88:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8374:1:38",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8377:4:38",
                          "type": "",
                          "value": "0x32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8367:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8367:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8367:15:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8398:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8401:4:38",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "8391:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8391:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8391:15:38"
                  }
                ]
              },
              "name": "panic_error_0x32",
              "nodeType": "YulFunctionDefinition",
              "src": "8228:184:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8449:152:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8466:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8469:77:38",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8459:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8459:88:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8459:88:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8563:1:38",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8566:4:38",
                          "type": "",
                          "value": "0x31"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8556:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8556:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8556:15:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8587:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8590:4:38",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "8580:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8580:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8580:15:38"
                  }
                ]
              },
              "name": "panic_error_0x31",
              "nodeType": "YulFunctionDefinition",
              "src": "8417:184:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8658:116:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8668:20:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "8683:1:38"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "8686:1:38"
                        }
                      ],
                      "functionName": {
                        "name": "mul",
                        "nodeType": "YulIdentifier",
                        "src": "8679:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8679:9:38"
                    },
                    "variableNames": [
                      {
                        "name": "product",
                        "nodeType": "YulIdentifier",
                        "src": "8668:7:38"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8746:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "8748:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8748:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8748:18:38"
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
                                  "src": "8717:1:38"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "8710:6:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8710:9:38"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "8724:1:38"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "product",
                                      "nodeType": "YulIdentifier",
                                      "src": "8731:7:38"
                                    },
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "8740:1:38"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "8727:3:38"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "8727:15:38"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "8721:2:38"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8721:22:38"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "8707:2:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8707:37:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "8700:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8700:45:38"
                    },
                    "nodeType": "YulIf",
                    "src": "8697:71:38"
                  }
                ]
              },
              "name": "checked_mul_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "8637:1:38",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "8640:1:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "product",
                  "nodeType": "YulTypedName",
                  "src": "8646:7:38",
                  "type": ""
                }
              ],
              "src": "8606:168:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8936:241:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8946:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "8958:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8969:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8954:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8954:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "8946:4:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "8981:52:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "8991:42:38",
                      "type": "",
                      "value": "0xffffffffffffffffffffffffffffffffffffffff"
                    },
                    "variables": [
                      {
                        "name": "_1",
                        "nodeType": "YulTypedName",
                        "src": "8985:2:38",
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
                          "src": "9049:9:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "9064:6:38"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "9072:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "9060:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9060:15:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9042:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9042:34:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9042:34:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9096:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9107:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9092:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9092:18:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "9116:6:38"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "9124:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "9112:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9112:15:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9085:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9085:43:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9085:43:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9148:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9159:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9144:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9144:18:38"
                        },
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "9164:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9137:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9137:34:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9137:34:38"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "8889:9:38",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "8900:6:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "8908:6:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "8916:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "8927:4:38",
                  "type": ""
                }
              ],
              "src": "8779:398:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9260:167:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "9306:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "9315:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "9318:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "9308:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9308:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "9308:12:38"
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
                              "src": "9281:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9290:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "9277:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9277:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9302:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "9273:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9273:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "9270:52:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "9331:29:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "9350:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "9344:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9344:16:38"
                    },
                    "variables": [
                      {
                        "name": "value",
                        "nodeType": "YulTypedName",
                        "src": "9335:5:38",
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
                          "src": "9391:5:38"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_bool",
                        "nodeType": "YulIdentifier",
                        "src": "9369:21:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9369:28:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9369:28:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9406:15:38",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "9416:5:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "9406:6:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_bool_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "9226:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "9237:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "9249:6:38",
                  "type": ""
                }
              ],
              "src": "9182:245:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9606:171:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "9623:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9634:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9616:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9616:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9616:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9657:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9668:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9653:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9653:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9673:2:38",
                          "type": "",
                          "value": "21"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9646:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9646:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9646:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9696:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9707:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9692:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9692:18:38"
                        },
                        {
                          "hexValue": "496e637265617365436f6e7472616374204661696c",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "9712:23:38",
                          "type": "",
                          "value": "IncreaseContract Fail"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "9685:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9685:51:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9685:51:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9745:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "9757:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9768:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "9753:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9753:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "9745:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "9583:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "9597:4:38",
                  "type": ""
                }
              ],
              "src": "9432:345:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9947:241:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "9957:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "9969:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9980:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "9965:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9965:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "9957:4:38"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "9992:52:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "10002:42:38",
                      "type": "",
                      "value": "0xffffffffffffffffffffffffffffffffffffffff"
                    },
                    "variables": [
                      {
                        "name": "_1",
                        "nodeType": "YulTypedName",
                        "src": "9996:2:38",
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
                          "src": "10060:9:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "10075:6:38"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "10083:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "10071:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10071:15:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10053:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10053:34:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10053:34:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10107:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10118:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10103:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10103:18:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "10127:6:38"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "10135:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "10123:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10123:15:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10096:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10096:43:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10096:43:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10159:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10170:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10155:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10155:18:38"
                        },
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "10175:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10148:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10148:34:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10148:34:38"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_t_address_payable_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "9900:9:38",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "9911:6:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "9919:6:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "9927:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "9938:4:38",
                  "type": ""
                }
              ],
              "src": "9782:406:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10225:152:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10242:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10245:77:38",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10235:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10235:88:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10235:88:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10339:1:38",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10342:4:38",
                          "type": "",
                          "value": "0x12"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10332:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10332:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10332:15:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10363:1:38",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10366:4:38",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "10356:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10356:15:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10356:15:38"
                  }
                ]
              },
              "name": "panic_error_0x12",
              "nodeType": "YulFunctionDefinition",
              "src": "10193:184:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10428:74:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "10451:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x12",
                              "nodeType": "YulIdentifier",
                              "src": "10453:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10453:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "10453:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "10448:1:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "10441:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10441:9:38"
                    },
                    "nodeType": "YulIf",
                    "src": "10438:35:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10482:14:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "10491:1:38"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "10494:1:38"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "10487:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10487:9:38"
                    },
                    "variableNames": [
                      {
                        "name": "r",
                        "nodeType": "YulIdentifier",
                        "src": "10482:1:38"
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
                  "src": "10413:1:38",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "10416:1:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "r",
                  "nodeType": "YulTypedName",
                  "src": "10422:1:38",
                  "type": ""
                }
              ],
              "src": "10382:120:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10644:168:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10654:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "10666:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10677:2:38",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "10662:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10662:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "10654:4:38"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "10696:9:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "10711:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10719:42:38",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "10707:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10707:55:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10689:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10689:74:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10689:74:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10783:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10794:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10779:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10779:18:38"
                        },
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "10799:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10772:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10772:34:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10772:34:38"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_payable_t_uint256__to_t_address_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "10605:9:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "10616:6:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "10624:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "10635:4:38",
                  "type": ""
                }
              ],
              "src": "10507:305:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10994:234:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "11011:9:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "11026:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11034:42:38",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "11022:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11022:55:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11004:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11004:74:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11004:74:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "11098:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11109:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11094:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11094:18:38"
                        },
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "11114:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11087:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11087:34:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11087:34:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "11141:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11152:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11137:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11137:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11157:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11130:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11130:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11130:30:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "11169:53:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "11195:6:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "11207:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11218:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11203:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11203:18:38"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_string",
                        "nodeType": "YulIdentifier",
                        "src": "11177:17:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11177:45:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "11169:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_t_uint256_t_string_memory_ptr__to_t_address_t_uint256_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "10947:9:38",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "10958:6:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "10966:6:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "10974:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "10985:4:38",
                  "type": ""
                }
              ],
              "src": "10817:411:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11407:233:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "11424:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11435:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11417:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11417:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11417:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "11458:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11469:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11454:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11454:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11474:2:38",
                          "type": "",
                          "value": "43"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11447:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11447:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11447:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "11497:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11508:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11493:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11493:18:38"
                        },
                        {
                          "hexValue": "455243373231456e756d657261626c653a206f776e657220696e646578206f75",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "11513:34:38",
                          "type": "",
                          "value": "ERC721Enumerable: owner index ou"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11486:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11486:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11486:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "11568:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11579:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11564:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11564:18:38"
                        },
                        {
                          "hexValue": "74206f6620626f756e6473",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "11584:13:38",
                          "type": "",
                          "value": "t of bounds"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11557:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11557:41:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11557:41:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "11607:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "11619:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11630:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "11615:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11615:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "11607:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "11384:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "11398:4:38",
                  "type": ""
                }
              ],
              "src": "11233:407:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11774:168:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "11784:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "11796:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11807:2:38",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "11792:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11792:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "11784:4:38"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "11826:9:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "11841:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11849:42:38",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "11837:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11837:55:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11819:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11819:74:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11819:74:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "11913:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11924:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11909:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11909:18:38"
                        },
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "11929:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "11902:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11902:34:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11902:34:38"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "11735:9:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "11746:6:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "11754:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "11765:4:38",
                  "type": ""
                }
              ],
              "src": "11645:297:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12121:234:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "12138:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12149:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12131:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12131:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12131:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "12172:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12183:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12168:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12168:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12188:2:38",
                          "type": "",
                          "value": "44"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12161:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12161:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12161:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "12211:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12222:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12207:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12207:18:38"
                        },
                        {
                          "hexValue": "455243373231456e756d657261626c653a20676c6f62616c20696e646578206f",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "12227:34:38",
                          "type": "",
                          "value": "ERC721Enumerable: global index o"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12200:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12200:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12200:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "12282:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12293:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12278:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12278:18:38"
                        },
                        {
                          "hexValue": "7574206f6620626f756e6473",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "12298:14:38",
                          "type": "",
                          "value": "ut of bounds"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12271:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12271:42:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12271:42:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "12322:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "12334:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12345:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "12330:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12330:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "12322:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "12098:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "12112:4:38",
                  "type": ""
                }
              ],
              "src": "11947:408:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12534:174:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "12551:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12562:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12544:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12544:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12544:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "12585:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12596:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12581:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12581:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12601:2:38",
                          "type": "",
                          "value": "24"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12574:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12574:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12574:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "12624:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12635:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12620:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12620:18:38"
                        },
                        {
                          "hexValue": "4552433732313a20696e76616c696420746f6b656e204944",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "12640:26:38",
                          "type": "",
                          "value": "ERC721: invalid token ID"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12613:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12613:54:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12613:54:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "12676:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "12688:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12699:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "12684:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12684:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "12676:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "12511:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "12525:4:38",
                  "type": ""
                }
              ],
              "src": "12360:348:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12887:231:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "12904:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12915:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12897:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12897:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12897:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "12938:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12949:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12934:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12934:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12954:2:38",
                          "type": "",
                          "value": "41"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12927:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12927:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12927:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "12977:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12988:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12973:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12973:18:38"
                        },
                        {
                          "hexValue": "4552433732313a2061646472657373207a65726f206973206e6f742061207661",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "12993:34:38",
                          "type": "",
                          "value": "ERC721: address zero is not a va"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12966:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12966:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12966:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "13048:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13059:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13044:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13044:18:38"
                        },
                        {
                          "hexValue": "6c6964206f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "13064:11:38",
                          "type": "",
                          "value": "lid owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13037:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13037:39:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13037:39:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "13085:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "13097:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13108:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "13093:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13093:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13085:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "12864:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "12878:4:38",
                  "type": ""
                }
              ],
              "src": "12713:405:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "13297:228:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "13314:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13325:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13307:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13307:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13307:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "13348:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13359:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13344:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13344:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13364:2:38",
                          "type": "",
                          "value": "38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13337:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13337:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13337:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "13387:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13398:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13383:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13383:18:38"
                        },
                        {
                          "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "13403:34:38",
                          "type": "",
                          "value": "Ownable: new owner is the zero a"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13376:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13376:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13376:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "13458:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13469:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13454:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13454:18:38"
                        },
                        {
                          "hexValue": "646472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "13474:8:38",
                          "type": "",
                          "value": "ddress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13447:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13447:36:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13447:36:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "13492:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "13504:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13515:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "13500:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13500:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13492:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "13274:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "13288:4:38",
                  "type": ""
                }
              ],
              "src": "13123:402:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "13704:227:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "13721:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13732:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13714:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13714:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13714:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "13755:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13766:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13751:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13751:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13771:2:38",
                          "type": "",
                          "value": "37"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13744:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13744:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13744:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "13794:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13805:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13790:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13790:18:38"
                        },
                        {
                          "hexValue": "4552433732313a207472616e736665722066726f6d20696e636f727265637420",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "13810:34:38",
                          "type": "",
                          "value": "ERC721: transfer from incorrect "
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13783:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13783:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13783:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "13865:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13876:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13861:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13861:18:38"
                        },
                        {
                          "hexValue": "6f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "13881:7:38",
                          "type": "",
                          "value": "owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13854:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13854:35:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13854:35:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "13898:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "13910:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13921:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "13906:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13906:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13898:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "13681:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "13695:4:38",
                  "type": ""
                }
              ],
              "src": "13530:401:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14110:226:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "14127:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14138:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14120:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14120:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14120:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "14161:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14172:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14157:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14157:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14177:2:38",
                          "type": "",
                          "value": "36"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14150:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14150:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14150:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "14200:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14211:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14196:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14196:18:38"
                        },
                        {
                          "hexValue": "4552433732313a207472616e7366657220746f20746865207a65726f20616464",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "14216:34:38",
                          "type": "",
                          "value": "ERC721: transfer to the zero add"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14189:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14189:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14189:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "14271:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14282:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14267:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14267:18:38"
                        },
                        {
                          "hexValue": "72657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "14287:6:38",
                          "type": "",
                          "value": "ress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14260:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14260:34:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14260:34:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14303:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "14315:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14326:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "14311:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14311:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14303:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "14087:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "14101:4:38",
                  "type": ""
                }
              ],
              "src": "13936:400:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14389:77:38",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "14399:16:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "14410:1:38"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "14413:1:38"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "14406:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14406:9:38"
                    },
                    "variableNames": [
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "14399:3:38"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "14438:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "14440:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "14440:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "14440:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "14430:1:38"
                        },
                        {
                          "name": "sum",
                          "nodeType": "YulIdentifier",
                          "src": "14433:3:38"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "14427:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14427:10:38"
                    },
                    "nodeType": "YulIf",
                    "src": "14424:36:38"
                  }
                ]
              },
              "name": "checked_add_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "14372:1:38",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "14375:1:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "sum",
                  "nodeType": "YulTypedName",
                  "src": "14381:3:38",
                  "type": ""
                }
              ],
              "src": "14341:125:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14590:63:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "14607:3:38"
                        },
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "14612:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14600:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14600:19:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14600:19:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14628:19:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "14639:3:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14644:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "14635:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14635:12:38"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "14628:3:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_packed_t_uint256__to_t_uint256__nonPadded_inplace_fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "14566:3:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "14571:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "14582:3:38",
                  "type": ""
                }
              ],
              "src": "14471:182:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14696:74:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "14719:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x12",
                              "nodeType": "YulIdentifier",
                              "src": "14721:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "14721:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "14721:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "14716:1:38"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "14709:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14709:9:38"
                    },
                    "nodeType": "YulIf",
                    "src": "14706:35:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14750:14:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "14759:1:38"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "14762:1:38"
                        }
                      ],
                      "functionName": {
                        "name": "mod",
                        "nodeType": "YulIdentifier",
                        "src": "14755:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14755:9:38"
                    },
                    "variableNames": [
                      {
                        "name": "r",
                        "nodeType": "YulIdentifier",
                        "src": "14750:1:38"
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
                  "src": "14681:1:38",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "14684:1:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "r",
                  "nodeType": "YulTypedName",
                  "src": "14690:1:38",
                  "type": ""
                }
              ],
              "src": "14658:112:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14949:182:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "14966:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14977:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14959:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14959:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14959:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15000:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15011:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14996:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14996:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15016:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14989:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14989:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14989:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15039:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15050:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15035:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15035:18:38"
                        },
                        {
                          "hexValue": "4552433732313a206d696e7420746f20746865207a65726f2061646472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "15055:34:38",
                          "type": "",
                          "value": "ERC721: mint to the zero address"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15028:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15028:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15028:62:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "15099:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "15111:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15122:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "15107:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15107:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15099:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "14926:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "14940:4:38",
                  "type": ""
                }
              ],
              "src": "14775:356:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15310:178:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "15327:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15338:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15320:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15320:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15320:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15361:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15372:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15357:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15357:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15377:2:38",
                          "type": "",
                          "value": "28"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15350:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15350:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15350:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15400:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15411:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15396:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15396:18:38"
                        },
                        {
                          "hexValue": "4552433732313a20746f6b656e20616c7265616479206d696e746564",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "15416:30:38",
                          "type": "",
                          "value": "ERC721: token already minted"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15389:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15389:58:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15389:58:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "15456:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "15468:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15479:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "15464:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15464:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15456:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "15287:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "15301:4:38",
                  "type": ""
                }
              ],
              "src": "15136:352:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15667:182:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "15684:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15695:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15677:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15677:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15677:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15718:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15729:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15714:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15714:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15734:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15707:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15707:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15707:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15757:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15768:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15753:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15753:18:38"
                        },
                        {
                          "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "15773:34:38",
                          "type": "",
                          "value": "Ownable: caller is not the owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15746:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15746:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15746:62:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "15817:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "15829:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15840:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "15825:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15825:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15817:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "15644:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "15658:4:38",
                  "type": ""
                }
              ],
              "src": "15493:356:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16028:175:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "16045:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16056:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16038:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16038:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16038:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "16079:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16090:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16075:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16075:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16095:2:38",
                          "type": "",
                          "value": "25"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16068:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16068:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16068:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "16118:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16129:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16114:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16114:18:38"
                        },
                        {
                          "hexValue": "4552433732313a20617070726f766520746f2063616c6c6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "16134:27:38",
                          "type": "",
                          "value": "ERC721: approve to caller"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16107:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16107:55:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16107:55:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "16171:26:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "16183:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16194:2:38",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "16179:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16179:18:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16171:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "16005:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "16019:4:38",
                  "type": ""
                }
              ],
              "src": "15854:349:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16382:240:38",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "16399:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16410:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16392:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16392:21:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16392:21:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "16433:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16444:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16429:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16429:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16449:2:38",
                          "type": "",
                          "value": "50"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16422:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16422:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16422:30:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "16472:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16483:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16468:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16468:18:38"
                        },
                        {
                          "hexValue": "4552433732313a207472616e7366657220746f206e6f6e204552433732315265",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "16488:34:38",
                          "type": "",
                          "value": "ERC721: transfer to non ERC721Re"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16461:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16461:62:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16461:62:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "16543:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16554:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16539:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16539:18:38"
                        },
                        {
                          "hexValue": "63656976657220696d706c656d656e746572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "16559:20:38",
                          "type": "",
                          "value": "ceiver implementer"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16532:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16532:48:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16532:48:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "16589:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "16601:9:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16612:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "16597:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16597:19:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16589:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "16359:9:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "16373:4:38",
                  "type": ""
                }
              ],
              "src": "16208:414:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16814:309:38",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "16824:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "16844:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "16838:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16838:13:38"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "16828:6:38",
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
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "16899:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16907:4:38",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16895:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16895:17:38"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16914:3:38"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "16919:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory_with_cleanup",
                        "nodeType": "YulIdentifier",
                        "src": "16860:34:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16860:66:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16860:66:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "16935:29:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16952:3:38"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "16957:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "16948:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16948:16:38"
                    },
                    "variables": [
                      {
                        "name": "end_1",
                        "nodeType": "YulTypedName",
                        "src": "16939:5:38",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "16973:29:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "16995:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "16989:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16989:13:38"
                    },
                    "variables": [
                      {
                        "name": "length_1",
                        "nodeType": "YulTypedName",
                        "src": "16977:8:38",
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
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "17050:6:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17058:4:38",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17046:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17046:17:38"
                        },
                        {
                          "name": "end_1",
                          "nodeType": "YulIdentifier",
                          "src": "17065:5:38"
                        },
                        {
                          "name": "length_1",
                          "nodeType": "YulIdentifier",
                          "src": "17072:8:38"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory_with_cleanup",
                        "nodeType": "YulIdentifier",
                        "src": "17011:34:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17011:70:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17011:70:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "17090:27:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "end_1",
                          "nodeType": "YulIdentifier",
                          "src": "17101:5:38"
                        },
                        {
                          "name": "length_1",
                          "nodeType": "YulIdentifier",
                          "src": "17108:8:38"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "17097:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17097:20:38"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "17090:3:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "16782:3:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "16787:6:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "16795:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "16806:3:38",
                  "type": ""
                }
              ],
              "src": "16627:496:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17331:309:38",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "17341:52:38",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "17351:42:38",
                      "type": "",
                      "value": "0xffffffffffffffffffffffffffffffffffffffff"
                    },
                    "variables": [
                      {
                        "name": "_1",
                        "nodeType": "YulTypedName",
                        "src": "17345:2:38",
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
                          "src": "17409:9:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "17424:6:38"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "17432:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "17420:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17420:15:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "17402:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17402:34:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17402:34:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "17456:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17467:2:38",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17452:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17452:18:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value1",
                              "nodeType": "YulIdentifier",
                              "src": "17476:6:38"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "17484:2:38"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "17472:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17472:15:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "17445:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17445:43:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17445:43:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "17508:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17519:2:38",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17504:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17504:18:38"
                        },
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "17524:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "17497:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17497:34:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17497:34:38"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "17551:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17562:2:38",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17547:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17547:18:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17567:3:38",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "17540:6:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17540:31:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17540:31:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "17580:54:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "value3",
                          "nodeType": "YulIdentifier",
                          "src": "17606:6:38"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "17618:9:38"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17629:3:38",
                              "type": "",
                              "value": "128"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17614:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17614:19:38"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_string",
                        "nodeType": "YulIdentifier",
                        "src": "17588:17:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17588:46:38"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17580:4:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "17276:9:38",
                  "type": ""
                },
                {
                  "name": "value3",
                  "nodeType": "YulTypedName",
                  "src": "17287:6:38",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "17295:6:38",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "17303:6:38",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "17311:6:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "17322:4:38",
                  "type": ""
                }
              ],
              "src": "17128:512:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17725:169:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "17771:16:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "17780:1:38",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "17783:1:38",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "17773:6:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "17773:12:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "17773:12:38"
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
                              "src": "17746:7:38"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "17755:9:38"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "17742:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17742:23:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17767:2:38",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "17738:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17738:32:38"
                    },
                    "nodeType": "YulIf",
                    "src": "17735:52:38"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "17796:29:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "17815:9:38"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "17809:5:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17809:16:38"
                    },
                    "variables": [
                      {
                        "name": "value",
                        "nodeType": "YulTypedName",
                        "src": "17800:5:38",
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
                          "src": "17858:5:38"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_bytes4",
                        "nodeType": "YulIdentifier",
                        "src": "17834:23:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17834:30:38"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17834:30:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "17873:15:38",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "17883:5:38"
                    },
                    "variableNames": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "17873:6:38"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_bytes4_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "17691:9:38",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "17702:7:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "17714:6:38",
                  "type": ""
                }
              ],
              "src": "17645:249:38"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17946:88:38",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "17977:22:38",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "17979:16:38"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "17979:18:38"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "17979:18:38"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "17962:5:38"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17973:1:38",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "17969:3:38"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17969:6:38"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "17959:2:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17959:17:38"
                    },
                    "nodeType": "YulIf",
                    "src": "17956:43:38"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "18008:20:38",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "18019:5:38"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "18026:1:38",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "18015:3:38"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18015:13:38"
                    },
                    "variableNames": [
                      {
                        "name": "ret",
                        "nodeType": "YulIdentifier",
                        "src": "18008:3:38"
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
                  "src": "17928:5:38",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "ret",
                  "nodeType": "YulTypedName",
                  "src": "17938:3:38",
                  "type": ""
                }
              ],
              "src": "17899:135:38"
            }
          ]
        },
        "contents": "{\n    { }\n    function validator_revert_bytes4(value)\n    {\n        if iszero(eq(value, and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_bytes4(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function copy_memory_to_memory_with_cleanup(src, dst, length)\n    {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n    function abi_encode_string(value, pos) -> end\n    {\n        let length := mload(value)\n        mstore(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), add(pos, 0x20), length)\n        end := add(add(pos, and(add(length, 31), not(31))), 0x20)\n    }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        mstore(headStart, 32)\n        tail := abi_encode_string(value0, add(headStart, 32))\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_decode_address(offset) -> value\n    {\n        value := calldataload(offset)\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2\n    {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        value2 := calldataload(add(headStart, 64))\n    }\n    function abi_encode_tuple_t_address_payable__to_t_address_payable__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n    }\n    function validator_revert_bool(value)\n    {\n        if iszero(eq(value, iszero(iszero(value)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_bool(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        let value := calldataload(add(headStart, 32))\n        validator_revert_bool(value)\n        value1 := value\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n        value2 := calldataload(add(headStart, 64))\n        let offset := calldataload(add(headStart, 96))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        let _2 := add(headStart, offset)\n        if iszero(slt(add(_2, 0x1f), dataEnd)) { revert(0, 0) }\n        let _3 := calldataload(_2)\n        if gt(_3, _1) { panic_error_0x41() }\n        let _4 := not(31)\n        let memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(and(add(_3, 0x1f), _4), 63), _4))\n        if or(gt(newFreePtr, _1), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n        mstore(memPtr, _3)\n        if gt(add(add(_2, _3), 32), dataEnd) { revert(0, 0) }\n        calldatacopy(add(memPtr, 32), add(_2, 32), _3)\n        mstore(add(add(memPtr, _3), 32), 0)\n        value3 := memPtr\n    }\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := abi_decode_address(headStart)\n        value1 := abi_decode_address(add(headStart, 32))\n    }\n    function extract_byte_array_length(data) -> length\n    {\n        length := shr(1, data)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) { length := and(length, 0x7f) }\n        if eq(outOfPlaceEncoding, lt(length, 32))\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x22)\n            revert(0, 0x24)\n        }\n    }\n    function abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"ERC721: approval to current owne\")\n        mstore(add(headStart, 96), \"r\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 62)\n        mstore(add(headStart, 64), \"ERC721: approve caller is not to\")\n        mstore(add(headStart, 96), \"ken owner nor approved for all\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 46)\n        mstore(add(headStart, 64), \"ERC721: caller is not token owne\")\n        mstore(add(headStart, 96), \"r nor approved\")\n        tail := add(headStart, 128)\n    }\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := mload(headStart)\n    }\n    function abi_encode_tuple_t_stringliteral_be6ad8021e6b80a9a985704237732530c0e3cdf07bbf9d28e13e90abe670112e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 39)\n        mstore(add(headStart, 64), \"ERC721: recipient lack of erc20 \")\n        mstore(add(headStart, 96), \"balance\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_df3d2f59522d891de16a4252d65c969fd7e0ed099ebf38783c0a5e88ec8b1c22__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 27)\n        mstore(add(headStart, 64), \"ERC721: all nfts are minted\")\n        tail := add(headStart, 96)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n    function panic_error_0x32()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n    function panic_error_0x31()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x31)\n        revert(0, 0x24)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        product := mul(x, y)\n        if iszero(or(iszero(x), eq(y, div(product, x)))) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_address_t_address_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        let _1 := 0xffffffffffffffffffffffffffffffffffffffff\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n    }\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_bool(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 21)\n        mstore(add(headStart, 64), \"IncreaseContract Fail\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_address_t_address_payable_t_uint256__to_t_address_t_address_t_uint256__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 96)\n        let _1 := 0xffffffffffffffffffffffffffffffffffffffff\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n    }\n    function panic_error_0x12()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n    function checked_div_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := div(x, y)\n    }\n    function abi_encode_tuple_t_address_payable_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_encode_tuple_t_address_t_uint256_t_string_memory_ptr__to_t_address_t_uint256_t_string_memory_ptr__fromStack_reversed(headStart, value2, value1, value0) -> tail\n    {\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(headStart, 32), value1)\n        mstore(add(headStart, 64), 96)\n        tail := abi_encode_string(value2, add(headStart, 96))\n    }\n    function abi_encode_tuple_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 43)\n        mstore(add(headStart, 64), \"ERC721Enumerable: owner index ou\")\n        mstore(add(headStart, 96), \"t of bounds\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_encode_tuple_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 44)\n        mstore(add(headStart, 64), \"ERC721Enumerable: global index o\")\n        mstore(add(headStart, 96), \"ut of bounds\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 24)\n        mstore(add(headStart, 64), \"ERC721: invalid token ID\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 41)\n        mstore(add(headStart, 64), \"ERC721: address zero is not a va\")\n        mstore(add(headStart, 96), \"lid owner\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 37)\n        mstore(add(headStart, 64), \"ERC721: transfer from incorrect \")\n        mstore(add(headStart, 96), \"owner\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 36)\n        mstore(add(headStart, 64), \"ERC721: transfer to the zero add\")\n        mstore(add(headStart, 96), \"ress\")\n        tail := add(headStart, 128)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_packed_t_uint256__to_t_uint256__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        mstore(pos, value0)\n        end := add(pos, 32)\n    }\n    function mod_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n    function abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"ERC721: mint to the zero address\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 28)\n        mstore(add(headStart, 64), \"ERC721: token already minted\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 25)\n        mstore(add(headStart, 64), \"ERC721: approve to caller\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 50)\n        mstore(add(headStart, 64), \"ERC721: transfer to non ERC721Re\")\n        mstore(add(headStart, 96), \"ceiver implementer\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed(pos, value1, value0) -> end\n    {\n        let length := mload(value0)\n        copy_memory_to_memory_with_cleanup(add(value0, 0x20), pos, length)\n        let end_1 := add(pos, length)\n        let length_1 := mload(value1)\n        copy_memory_to_memory_with_cleanup(add(value1, 0x20), end_1, length_1)\n        end := add(end_1, length_1)\n    }\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart, value3, value2, value1, value0) -> tail\n    {\n        let _1 := 0xffffffffffffffffffffffffffffffffffffffff\n        mstore(headStart, and(value0, _1))\n        mstore(add(headStart, 32), and(value1, _1))\n        mstore(add(headStart, 64), value2)\n        mstore(add(headStart, 96), 128)\n        tail := abi_encode_string(value3, add(headStart, 128))\n    }\n    function abi_decode_tuple_t_bytes4_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_bytes4(value)\n        value0 := value\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n}",
        "id": 38,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "366:3982:33:-:0;;;547:6;528:25;;874:522;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1390:113:12;;;;;;;;;;;;;-1:-1:-1;;;1390:113:12;;;;;;;;;;;;;;;;-1:-1:-1;;;1390:113:12;;;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;:32::i;:::-;1456:5:12;:13;1464:5;1456;:13;:::i;:::-;-1:-1:-1;1479:7:12;:17;1489:7;1479;:17;:::i;:::-;-1:-1:-1;;1076:21:33::1;:38:::0;;-1:-1:-1;;;;;;1076:38:33::1;-1:-1:-1::0;;;;;1076:38:33;::::1;;::::0;;-1:-1:-1;;1124:9:33::1;:13:::0;1161:3:::1;1147:11;:17:::0;1249:32:::1;1259:21:::0;1249:9:::1;:32::i;:::-;-1:-1:-1::0;1291:26:33::1;1303:13:::0;1291:11:::1;:26::i;:::-;1327:20;:18;:20::i;:::-;1357:14;:32:::0;;-1:-1:-1;;;;;;1357:32:33::1;-1:-1:-1::0;;;;;1357:32:33;;;::::1;::::0;;;::::1;::::0;;-1:-1:-1;366:3982:33;;-1:-1:-1;;366:3982:33;640:96:19;719:10;;640:96::o;2433:187:0:-;2506:16;2525:6;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;;;;;2541:17:0;;;;;;2573:40;;2525:6;;;;;;;2573:40;;2506:16;2573:40;2496:124;2433:187;:::o;3877:194:33:-;3947:4;1094:13:0;:11;:13::i;:::-;-1:-1:-1;;;;;3971:30:33;::::1;3963:39;;;::::0;::::1;;-1:-1:-1::0;4012:5:33::1;:31:::0;;-1:-1:-1;;;;;;4012:31:33::1;-1:-1:-1::0;;;;;4012:31:33;::::1;;::::0;;-1:-1:-1;1117:1:0::1;3877:194:33::0;;;:::o;3039:116::-;1094:13:0;:11;:13::i;:::-;3117:15:33::1;:31;3135:13:::0;3117:15;:31:::1;:::i;:::-;;3039:116:::0;:::o;1402:151::-;1094:13:0;:11;:13::i;:::-;1465:9:33::1;1460:87;1485:11;;1480:1;:16;1460:87;;1517:11;:19:::0;;::::1;::::0;::::1;::::0;;-1:-1:-1;1517:19:33;;;;;::::1;::::0;;;1534:1;1498:3:::1;1534:1:::0;1498:3:::1;:::i;:::-;;;;1460:87;;;;1402:151::o:0;1359:130:0:-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:0;719:10:19;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;4872:2:38;1414:68:0;;;4854:21:38;;;4891:18;;;4884:30;4950:34;4930:18;;;4923:62;5002:18;;1414:68:0;;;;;;;;1359:130::o;14:131:38:-;-1:-1:-1;;;;;89:31:38;;79:42;;69:70;;135:1;132;125:12;150:127;211:10;206:3;202:20;199:1;192:31;242:4;239:1;232:15;266:4;263:1;256:15;282:146;369:13;;391:31;369:13;391:31;:::i;433:1406::-;548:6;556;564;572;625:3;613:9;604:7;600:23;596:33;593:53;;;642:1;639;632:12;593:53;674:9;668:16;693:31;718:5;693:31;:::i;:::-;743:5;733:15;;;767:2;814;803:9;799:18;793:25;827:33;852:7;827:33;:::i;:::-;930:2;915:18;;909:25;879:7;;-1:-1:-1;;;;;;983:14:38;;;980:34;;;1010:1;1007;1000:12;980:34;1048:6;1037:9;1033:22;1023:32;;1093:7;1086:4;1082:2;1078:13;1074:27;1064:55;;1115:1;1112;1105:12;1064:55;1144:2;1138:9;1166:2;1162;1159:10;1156:36;;;1172:18;;:::i;:::-;1247:2;1241:9;1215:2;1301:13;;-1:-1:-1;;1297:22:38;;;1321:2;1293:31;1289:40;1277:53;;;1345:18;;;1365:22;;;1342:46;1339:72;;;1391:18;;:::i;:::-;1431:10;1427:2;1420:22;1466:2;1458:6;1451:18;1506:7;1501:2;1496;1492;1488:11;1484:20;1481:33;1478:53;;;1527:1;1524;1517:12;1478:53;1549:1;1540:10;;1559:129;1573:2;1570:1;1567:9;1559:129;;;1661:10;;;1657:19;;1651:26;1630:14;;;1626:23;;1619:59;1584:10;;;;1559:129;;;1730:1;1725:2;1720;1712:6;1708:15;1704:24;1697:35;1751:6;1741:16;;;;;;;;1776:57;1829:2;1818:9;1814:18;1776:57;:::i;:::-;1766:67;;433:1406;;;;;;;:::o;1844:380::-;1923:1;1919:12;;;;1966;;;1987:61;;2041:4;2033:6;2029:17;2019:27;;1987:61;2094:2;2086:6;2083:14;2063:18;2060:38;2057:161;;2140:10;2135:3;2131:20;2128:1;2121:31;2175:4;2172:1;2165:15;2203:4;2200:1;2193:15;2057:161;;1844:380;;;:::o;2355:545::-;2457:2;2452:3;2449:11;2446:448;;;2493:1;2518:5;2514:2;2507:17;2563:4;2559:2;2549:19;2633:2;2621:10;2617:19;2614:1;2610:27;2604:4;2600:38;2669:4;2657:10;2654:20;2651:47;;;-1:-1:-1;2692:4:38;2651:47;2747:2;2742:3;2738:12;2735:1;2731:20;2725:4;2721:31;2711:41;;2802:82;2820:2;2813:5;2810:13;2802:82;;;2865:17;;;2846:1;2835:13;2802:82;;;2806:3;;;2446:448;2355:545;;;:::o;3076:1352::-;3196:10;;-1:-1:-1;;;;;3218:30:38;;3215:56;;;3251:18;;:::i;:::-;3280:97;3370:6;3330:38;3362:4;3356:11;3330:38;:::i;:::-;3324:4;3280:97;:::i;:::-;3432:4;;3496:2;3485:14;;3513:1;3508:663;;;;4215:1;4232:6;4229:89;;;-1:-1:-1;4284:19:38;;;4278:26;4229:89;-1:-1:-1;;3033:1:38;3029:11;;;3025:24;3021:29;3011:40;3057:1;3053:11;;;3008:57;4331:81;;3478:944;;3508:663;2302:1;2295:14;;;2339:4;2326:18;;-1:-1:-1;;3544:20:38;;;3662:236;3676:7;3673:1;3670:14;3662:236;;;3765:19;;;3759:26;3744:42;;3857:27;;;;3825:1;3813:14;;;;3692:19;;3662:236;;;3666:3;3926:6;3917:7;3914:19;3911:201;;;3987:19;;;3981:26;-1:-1:-1;;4070:1:38;4066:14;;;4082:3;4062:24;4058:37;4054:42;4039:58;4024:74;;3911:201;-1:-1:-1;;;;;4158:1:38;4142:14;;;4138:22;4125:36;;-1:-1:-1;3076:1352:38:o;4433:232::-;4472:3;4493:17;;;4490:140;;4552:10;4547:3;4543:20;4540:1;4533:31;4587:4;4584:1;4577:15;4615:4;4612:1;4605:15;4490:140;-1:-1:-1;4657:1:38;4646:13;;4433:232::o;4670:356::-;366:3982:33;;;;;;",
    "deployedSourceMap": "366:3982:33:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3579:143;;;;;;;;;;-1:-1:-1;3579:143:33;;;;;:::i;:::-;;:::i;:::-;;;611:14:38;;604:22;586:41;;574:2;559:18;3579:143:33;;;;;;;;2470:98:12;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;3935:167::-;;;;;;;;;;-1:-1:-1;3935:167:12;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;1743:55:38;;;1725:74;;1713:2;1698:18;3935:167:12;1579:226:38;3467:407:12;;;;;;;;;;-1:-1:-1;3467:407:12;;;;;:::i;:::-;;:::i;:::-;;1615:111:15;;;;;;;;;;-1:-1:-1;1702:10:15;:17;1615:111;;;2416:25:38;;;2404:2;2389:18;1615:111:15;2270:177:38;4612:327:12;;;;;;;;;;-1:-1:-1;4612:327:12;;;;;:::i;:::-;;:::i;1591:975:33:-;;;:::i;1291:253:15:-;;;;;;;;;;-1:-1:-1;1291:253:15;;;;;:::i;:::-;;:::i;4077:269:33:-;;;;;;;;;;;;;:::i;5005:179:12:-;;;;;;;;;;-1:-1:-1;5005:179:12;;;;;:::i;:::-;;:::i;559:37:33:-;;;;;;;;;;-1:-1:-1;559:37:33;;;;-1:-1:-1;;;;;559:37:33;;;1798:230:15;;;;;;;;;;-1:-1:-1;1798:230:15;;;;;:::i;:::-;;:::i;2190:218:12:-;;;;;;;;;;-1:-1:-1;2190:218:12;;;;;:::i;:::-;;:::i;1929:204::-;;;;;;;;;;-1:-1:-1;1929:204:12;;;;;:::i;:::-;;:::i;1831:101:0:-;;;;;;;;;;;;;:::i;1201:85::-;;;;;;;;;;-1:-1:-1;1247:7:0;1273:6;-1:-1:-1;;;;;1273:6:0;1201:85;;2632:102:12;;;;;;;;;;;;;:::i;4169:153::-;;;;;;;;;;-1:-1:-1;4169:153:12;;;;;:::i;:::-;;:::i;5250:315::-;;;;;;;;;;-1:-1:-1;5250:315:12;;;;;:::i;:::-;;:::i;3728:143:33:-;;;;;;;;;;-1:-1:-1;3728:143:33;;;;;:::i;:::-;;:::i;4388:162:12:-;;;;;;;;;;-1:-1:-1;4388:162:12;;;;;:::i;:::-;-1:-1:-1;;;;;4508:25:12;;;4485:4;4508:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;4388:162;2081:198:0;;;;;;;;;;-1:-1:-1;2081:198:0;;;;;:::i;:::-;;:::i;3579:143:33:-;3656:4;3679:36;3703:11;3679:23;:36::i;:::-;3672:43;3579:143;-1:-1:-1;;3579:143:33:o;2470:98:12:-;2524:13;2556:5;2549:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2470:98;:::o;3935:167::-;4011:7;4030:23;4045:7;4030:14;:23::i;:::-;-1:-1:-1;4071:24:12;;;;:15;:24;;;;;;-1:-1:-1;;;;;4071:24:12;;3935:167::o;3467:407::-;3547:13;3563:23;3578:7;3563:14;:23::i;:::-;3547:39;;3610:5;-1:-1:-1;;;;;3604:11:12;:2;-1:-1:-1;;;;;3604:11:12;;3596:57;;;;-1:-1:-1;;;3596:57:12;;5907:2:38;3596:57:12;;;5889:21:38;5946:2;5926:18;;;5919:30;5985:34;5965:18;;;5958:62;6056:3;6036:18;;;6029:31;6077:19;;3596:57:12;;;;;;;;;719:10:19;-1:-1:-1;;;;;3685:21:12;;;;:62;;-1:-1:-1;3710:37:12;3727:5;719:10:19;4388:162:12;:::i;3710:37::-;3664:171;;;;-1:-1:-1;;;3664:171:12;;6309:2:38;3664:171:12;;;6291:21:38;6348:2;6328:18;;;6321:30;6387:34;6367:18;;;6360:62;6458:32;6438:18;;;6431:60;6508:19;;3664:171:12;6107:426:38;3664:171:12;3846:21;3855:2;3859:7;3846:8;:21::i;:::-;3537:337;3467:407;;:::o;4612:327::-;4801:41;719:10:19;4834:7:12;4801:18;:41::i;:::-;4793:100;;;;-1:-1:-1;;;4793:100:12;;6740:2:38;4793:100:12;;;6722:21:38;6779:2;6759:18;;;6752:30;6818:34;6798:18;;;6791:62;6889:16;6869:18;;;6862:44;6923:19;;4793:100:12;6538:410:38;4793:100:12;4904:28;4914:4;4920:2;4924:7;4904:9;:28::i;1591:975:33:-;1698:9;;1667:5;;:27;;-1:-1:-1;;;1667:27:33;;1683:10;1667:27;;;1725:74:38;1639:7:33;;1698:9;-1:-1:-1;;;;;1667:5:33;;:15;;1698:18:38;;1667:27:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:40;;1659:92;;;;-1:-1:-1;;;1659:92:33;;7344:2:38;1659:92:33;;;7326:21:38;7383:2;7363:18;;;7356:30;7422:34;7402:18;;;7395:62;7493:9;7473:18;;;7466:37;7520:19;;1659:92:33;7142:403:38;1659:92:33;1702:10:15;:17;1769:11:33;;:28;;1761:68;;;;-1:-1:-1;;;1761:68:33;;7752:2:38;1761:68:33;;;7734:21:38;7791:2;7771:18;;;7764:30;7830:29;7810:18;;;7803:57;7877:18;;1761:68:33;7550:351:38;1761:68:33;1840:19;:17;:19::i;:::-;1886:11;1898:18;;1869:14;;1886:11;1898:22;;1919:1;;1898:22;:::i;:::-;1886:35;;;;;;;;:::i;:::-;;;;;;;;;1869:52;;1931:11;:17;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;1959:25;1965:10;1977:6;1959:5;:25::i;:::-;2012:21;;1994:46;;-1:-1:-1;;;;;2012:21:33;;1994:17;:46::i;:::-;2152:5;;2260:8;;2248:9;;2137:12;;-1:-1:-1;;;;;2152:5:33;;:31;;2197:10;;2229:4;;2248:20;;2260:8;2248:20;:::i;:::-;2152:126;;-1:-1:-1;;;;;;2152:126:33;;;;;;;-1:-1:-1;;;;;9060:15:38;;;2152:126:33;;;9042:34:38;9112:15;;;;9092:18;;;9085:43;9144:18;;;9137:34;8954:18;;2152:126:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2137:141;;2296:7;2288:40;;;;-1:-1:-1;;;2288:40:33;;9634:2:38;2288:40:33;;;9616:21:38;9673:2;9653:18;;;9646:30;9712:23;9692:18;;;9685:51;9753:18;;2288:40:33;9432:345:38;2288:40:33;2338:5;;2369:14;;2397:8;;2385:9;;-1:-1:-1;;;;;2338:5:33;;;;:18;;2357:10;;2369:14;;;2385:20;;2397:8;2385:20;:::i;:::-;2338:68;;-1:-1:-1;;;;;;2338:68:33;;;;;;;-1:-1:-1;;;;;9060:15:38;;;2338:68:33;;;9042:34:38;9112:15;;;;9092:18;;;9085:43;9144:18;;;9137:34;8954:18;;2338:68:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;2417:5:33;;2434:14;;2463:8;;2451:9;;-1:-1:-1;;;;;2417:5:33;;;;:16;;2434:14;;2473:1;;2451:20;;2463:8;2451:20;:::i;:::-;2450:24;;;;:::i;:::-;2417:58;;-1:-1:-1;;;;;;2417:58:33;;;;;;;-1:-1:-1;;;;;10707:55:38;;;2417:58:33;;;10689:74:38;10779:18;;;10772:34;10662:18;;2417:58:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2491:44;2498:10;2510:6;2518:16;2527:6;2518:8;:16::i;:::-;2491:44;;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;2553:6:33;1591:975;-1:-1:-1;1591:975:33:o;1291:253:15:-;1388:7;1423:23;1440:5;1423:16;:23::i;:::-;1415:5;:31;1407:87;;;;-1:-1:-1;;;1407:87:15;;11435:2:38;1407:87:15;;;11417:21:38;11474:2;11454:18;;;11447:30;11513:34;11493:18;;;11486:62;11584:13;11564:18;;;11557:41;11615:19;;1407:87:15;11233:407:38;1407:87:15;-1:-1:-1;;;;;;1511:19:15;;;;;;;;:12;:19;;;;;;;;:26;;;;;;;;;1291:253::o;4077:269:33:-;4125:7;1094:13:0;:11;:13::i;:::-;4165:5:33::1;::::0;:30:::1;::::0;-1:-1:-1;;;4165:30:33;;4189:4:::1;4165:30;::::0;::::1;1725:74:38::0;4144:18:33::1;::::0;-1:-1:-1;;;;;4165:5:33::1;::::0;:15:::1;::::0;1698:18:38;;4165:30:33::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4205:5;::::0;:40:::1;::::0;;;;4227:4:::1;4205:40;::::0;::::1;10689:74:38::0;10779:18;;;10772:34;;;4144:51:33;;-1:-1:-1;;;;;;4205:5:33::1;::::0;:13:::1;::::0;10662:18:38;;4205:40:33::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;4255:5:33::1;::::0;:57:::1;::::0;;;;4282:4:::1;4255:57;::::0;::::1;9042:34:38::0;4289:10:33::1;9092:18:38::0;;;9085:43;9144:18;;;9137:34;;;-1:-1:-1;;;;;4255:5:33;;::::1;::::0;:18:::1;::::0;8954::38;;4255:57:33::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;4329:10:33;-1:-1:-1;4077:269:33;:::o;5005:179:12:-;5138:39;5155:4;5161:2;5165:7;5138:39;;;;;;;;;;;;:16;:39::i;1798:230:15:-;1873:7;1908:30;1702:10;:17;;1615:111;1908:30;1900:5;:38;1892:95;;;;-1:-1:-1;;;1892:95:15;;12149:2:38;1892:95:15;;;12131:21:38;12188:2;12168:18;;;12161:30;12227:34;12207:18;;;12200:62;12298:14;12278:18;;;12271:42;12330:19;;1892:95:15;11947:408:38;1892:95:15;2004:10;2015:5;2004:17;;;;;;;;:::i;:::-;;;;;;;;;1997:24;;1798:230;;;:::o;2190:218:12:-;2262:7;2297:16;;;:7;:16;;;;;;-1:-1:-1;;;;;2297:16:12;;2323:56;;;;-1:-1:-1;;;2323:56:12;;12562:2:38;2323:56:12;;;12544:21:38;12601:2;12581:18;;;12574:30;12640:26;12620:18;;;12613:54;12684:18;;2323:56:12;12360:348:38;1929:204:12;2001:7;-1:-1:-1;;;;;2028:19:12;;2020:73;;;;-1:-1:-1;;;2020:73:12;;12915:2:38;2020:73:12;;;12897:21:38;12954:2;12934:18;;;12927:30;12993:34;12973:18;;;12966:62;13064:11;13044:18;;;13037:39;13093:19;;2020:73:12;12713:405:38;2020:73:12;-1:-1:-1;;;;;;2110:16:12;;;;;:9;:16;;;;;;;1929:204::o;1831:101:0:-;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;2632:102:12:-;2688:13;2720:7;2713:14;;;;;:::i;4169:153::-;4263:52;719:10:19;4296:8:12;4306;4263:18;:52::i;:::-;4169:153;;:::o;5250:315::-;5418:41;719:10:19;5451:7:12;5418:18;:41::i;:::-;5410:100;;;;-1:-1:-1;;;5410:100:12;;6740:2:38;5410:100:12;;;6722:21:38;6779:2;6759:18;;;6752:30;6818:34;6798:18;;;6791:62;6889:16;6869:18;;;6862:44;6923:19;;5410:100:12;6538:410:38;5410:100:12;5520:38;5534:4;5540:2;5544:7;5553:4;5520:13;:38::i;:::-;5250:315;;;;:::o;3728:143:33:-;3808:13;3840:24;3855:8;3840:14;:24::i;2081:198:0:-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2169:22:0;::::1;2161:73;;;::::0;-1:-1:-1;;;2161:73:0;;13325:2:38;2161:73:0::1;::::0;::::1;13307:21:38::0;13364:2;13344:18;;;13337:30;13403:34;13383:18;;;13376:62;13474:8;13454:18;;;13447:36;13500:19;;2161:73:0::1;13123:402:38::0;2161:73:0::1;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;990:222:15:-;1092:4;-1:-1:-1;;;;;;1115:50:15;;1130:35;1115:50;;:90;;;1169:36;1193:11;1169:23;:36::i;11657:133:12:-;7099:4;7122:16;;;:7;:16;;;;;;-1:-1:-1;;;;;7122:16:12;11730:53;;;;-1:-1:-1;;;11730:53:12;;12562:2:38;11730:53:12;;;12544:21:38;12601:2;12581:18;;;12574:30;12640:26;12620:18;;;12613:54;12684:18;;11730:53:12;12360:348:38;10959:171:12;11033:24;;;;:15;:24;;;;;:29;;-1:-1:-1;;11033:29:12;-1:-1:-1;;;;;11033:29:12;;;;;;;;:24;;11086:23;11033:24;11086:14;:23::i;:::-;-1:-1:-1;;;;;11077:46:12;;;;;;;;;;;10959:171;;:::o;7317:261::-;7410:4;7426:13;7442:23;7457:7;7442:14;:23::i;:::-;7426:39;;7494:5;-1:-1:-1;;;;;7483:16:12;:7;-1:-1:-1;;;;;7483:16:12;;:52;;;-1:-1:-1;;;;;;4508:25:12;;;4485:4;4508:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;7503:32;7483:87;;;;7563:7;-1:-1:-1;;;;;7539:31:12;:20;7551:7;7539:11;:20::i;:::-;-1:-1:-1;;;;;7539:31:12;;7483:87;7475:96;7317:261;-1:-1:-1;;;;7317:261:12:o;10242:605::-;10396:4;-1:-1:-1;;;;;10369:31:12;:23;10384:7;10369:14;:23::i;:::-;-1:-1:-1;;;;;10369:31:12;;10361:81;;;;-1:-1:-1;;;10361:81:12;;13732:2:38;10361:81:12;;;13714:21:38;13771:2;13751:18;;;13744:30;13810:34;13790:18;;;13783:62;13881:7;13861:18;;;13854:35;13906:19;;10361:81:12;13530:401:38;10361:81:12;-1:-1:-1;;;;;10460:16:12;;10452:65;;;;-1:-1:-1;;;10452:65:12;;14138:2:38;10452:65:12;;;14120:21:38;14177:2;14157:18;;;14150:30;14216:34;14196:18;;;14189:62;14287:6;14267:18;;;14260:34;14311:19;;10452:65:12;13936:400:38;10452:65:12;10528:39;10549:4;10555:2;10559:7;10528:20;:39::i;:::-;10629:29;10646:1;10650:7;10629:8;:29::i;:::-;-1:-1:-1;;;;;10669:15:12;;;;;;:9;:15;;;;;:20;;10688:1;;10669:15;:20;;10688:1;;10669:20;:::i;:::-;;;;-1:-1:-1;;;;;;;10699:13:12;;;;;;:9;:13;;;;;:18;;10716:1;;10699:13;:18;;10716:1;;10699:18;:::i;:::-;;;;-1:-1:-1;;10727:16:12;;;;:7;:16;;;;;;:21;;-1:-1:-1;;10727:21:12;-1:-1:-1;;;;;10727:21:12;;;;;;;;;10764:27;;10727:16;;10764:27;;;;;;;3537:337;3467:407;;:::o;2572:461:33:-;2631:11;:18;2619:9;;2631:22;;2652:1;;2631:22;:::i;:::-;2896:11;:18;2857:33;;;2874:15;2857:33;;;14600:19:38;2619:34:33;;-1:-1:-1;2827:9:33;;14635:12:38;2857:33:33;;;;;;;;;;;;2847:44;;;;;;2839:53;;:76;;;;:::i;:::-;2827:88;;2925:12;2940:11;2952:1;2940:14;;;;;;;;:::i;:::-;;;;;;;;;2925:29;;2981:11;2993:1;2981:14;;;;;;;;:::i;:::-;;;;;;;;;2964:11;2976:1;2964:14;;;;;;;;:::i;:::-;;;;;;;;:31;;;;3022:4;3005:11;3017:1;3005:14;;;;;;;;:::i;:::-;;;;;;;;;;:21;-1:-1:-1;;;2572:461:33:o;8868:427:12:-;-1:-1:-1;;;;;8947:16:12;;8939:61;;;;-1:-1:-1;;;8939:61:12;;14977:2:38;8939:61:12;;;14959:21:38;;;14996:18;;;14989:30;15055:34;15035:18;;;15028:62;15107:18;;8939:61:12;14775:356:38;8939:61:12;7099:4;7122:16;;;:7;:16;;;;;;-1:-1:-1;;;;;7122:16:12;:30;9010:58;;;;-1:-1:-1;;;9010:58:12;;15338:2:38;9010:58:12;;;15320:21:38;15377:2;15357:18;;;15350:30;15416;15396:18;;;15389:58;15464:18;;9010:58:12;15136:352:38;9010:58:12;9079:45;9108:1;9112:2;9116:7;9079:20;:45::i;:::-;-1:-1:-1;;;;;9135:13:12;;;;;;:9;:13;;;;;:18;;9152:1;;9135:13;:18;;9152:1;;9135:18;:::i;:::-;;;;-1:-1:-1;;9163:16:12;;;;:7;:16;;;;;;:21;;-1:-1:-1;;9163:21:12;-1:-1:-1;;;;;9163:21:12;;;;;;;;9200:33;;9163:16;;;9200:33;;9163:16;;9200:33;4169:153;;:::o;1359:130:0:-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:0;719:10:19;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;15695:2:38;1414:68:0;;;15677:21:38;;;15714:18;;;15707:30;15773:34;15753:18;;;15746:62;15825:18;;1414:68:0;15493:356:38;2433:187:0;2506:16;2525:6;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;2541:17:0;;;;;;2573:40;;2525:6;;;;;;;2573:40;;2506:16;2573:40;2496:124;2433:187;:::o;11266:307:12:-;11416:8;-1:-1:-1;;;;;11407:17:12;:5;-1:-1:-1;;;;;11407:17:12;;11399:55;;;;-1:-1:-1;;;11399:55:12;;16056:2:38;11399:55:12;;;16038:21:38;16095:2;16075:18;;;16068:30;16134:27;16114:18;;;16107:55;16179:18;;11399:55:12;15854:349:38;11399:55:12;-1:-1:-1;;;;;11464:25:12;;;;;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;:46;;-1:-1:-1;;11464:46:12;;;;;;;;;;11525:41;;586::38;;;11525::12;;559:18:38;11525:41:12;;;;;;;11266:307;;;:::o;6426:305::-;6576:28;6586:4;6592:2;6596:7;6576:9;:28::i;:::-;6622:47;6645:4;6651:2;6655:7;6664:4;6622:22;:47::i;:::-;6614:110;;;;-1:-1:-1;;;6614:110:12;;16410:2:38;6614:110:12;;;16392:21:38;16449:2;16429:18;;;16422:30;16488:34;16468:18;;;16461:62;16559:20;16539:18;;;16532:48;16597:19;;6614:110:12;16208:414:38;2800:276:12;2873:13;2898:23;2913:7;2898:14;:23::i;:::-;2932:21;2956:10;:8;:10::i;:::-;2932:34;;3007:1;2989:7;2983:21;:25;:86;;;;;;;;;;;;;;;;;3035:7;3044:18;:7;:16;:18::i;:::-;3018:45;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2983:86;2976:93;2800:276;-1:-1:-1;;;2800:276:12:o;1570:300::-;1672:4;-1:-1:-1;;;;;;1707:40:12;;1722:25;1707:40;;:104;;-1:-1:-1;;;;;;;1763:48:12;;1778:33;1763:48;1707:104;:156;;;-1:-1:-1;952:25:22;-1:-1:-1;;;;;;937:40:22;;;1827:36:12;829:155:22;3281:183:33;3412:45;3439:4;3445:2;3449:7;3412:26;:45::i;12342:831:12:-;12491:4;-1:-1:-1;;;;;12511:13:12;;1465:19:18;:23;12507:660:12;;12546:71;;-1:-1:-1;;;12546:71:12;;-1:-1:-1;;;;;12546:36:12;;;;;:71;;719:10:19;;12597:4:12;;12603:7;;12612:4;;12546:71;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;-1:-1:-1;12546:71:12;;;;;;;;-1:-1:-1;;12546:71:12;;;;;;;;;;;;:::i;:::-;;;12542:573;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12784:6;:13;12801:1;12784:18;12780:321;;12826:60;;-1:-1:-1;;;12826:60:12;;16410:2:38;12826:60:12;;;16392:21:38;16449:2;16429:18;;;16422:30;16488:34;16468:18;;;16461:62;16559:20;16539:18;;;16532:48;16597:19;;12826:60:12;16208:414:38;12780:321:12;13053:6;13047:13;13038:6;13034:2;13030:15;13023:38;12542:573;-1:-1:-1;;;;;;12667:51:12;-1:-1:-1;;;12667:51:12;;-1:-1:-1;12660:58:12;;12507:660;-1:-1:-1;13152:4:12;12342:831;;;;;;:::o;3161:114:33:-;3221:13;3253:15;3246:22;;;;;:::i;392:703:21:-;448:13;665:5;674:1;665:10;661:51;;-1:-1:-1;;691:10:21;;;;;;;;;;;;;;;;;;392:703::o;661:51::-;736:5;721:12;775:75;782:9;;775:75;;807:8;;;;:::i;:::-;;-1:-1:-1;829:10:21;;-1:-1:-1;837:2:21;829:10;;:::i;:::-;;;775:75;;;859:19;891:6;881:17;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;881:17:21;;859:39;;908:150;915:10;;908:150;;941:11;951:1;941:11;;:::i;:::-;;-1:-1:-1;1009:10:21;1017:2;1009:5;:10;:::i;:::-;996:24;;:2;:24;:::i;:::-;983:39;;966:6;973;966:14;;;;;;;;:::i;:::-;;;;:56;;;;;;;;;;-1:-1:-1;1036:11:21;1045:2;1036:11;;:::i;:::-;;;908:150;;2624:572:15;-1:-1:-1;;;;;2823:18:15;;2819:183;;2857:40;2889:7;4005:10;:17;;3978:24;;;;:15;:24;;;;;:44;;;4032:24;;;;;;;;;;;;3902:161;2857:40;2819:183;;;2926:2;-1:-1:-1;;;;;2918:10:15;:4;-1:-1:-1;;;;;2918:10:15;;2914:88;;2944:47;2977:4;2983:7;2944:32;:47::i;:::-;-1:-1:-1;;;;;3015:16:15;;3011:179;;3047:45;3084:7;3047:36;:45::i;3011:179::-;3119:4;-1:-1:-1;;;;;3113:10:15;:2;-1:-1:-1;;;;;3113:10:15;;3109:81;;3139:40;3167:2;3171:7;3139:27;:40::i;4680:970::-;4942:22;4992:1;4967:22;4984:4;4967:16;:22::i;:::-;:26;;;;:::i;:::-;5003:18;5024:26;;;:17;:26;;;;;;4942:51;;-1:-1:-1;5154:28:15;;;5150:323;;-1:-1:-1;;;;;5220:18:15;;5198:19;5220:18;;;:12;:18;;;;;;;;:34;;;;;;;;;5269:30;;;;;;:44;;;5385:30;;:17;:30;;;;;:43;;;5150:323;-1:-1:-1;5566:26:15;;;;:17;:26;;;;;;;;5559:33;;;-1:-1:-1;;;;;5609:18:15;;;;;:12;:18;;;;;:34;;;;;;;5602:41;4680:970::o;5938:1061::-;6212:10;:17;6187:22;;6212:21;;6232:1;;6212:21;:::i;:::-;6243:18;6264:24;;;:15;:24;;;;;;6632:10;:26;;6187:46;;-1:-1:-1;6264:24:15;;6187:46;;6632:26;;;;;;:::i;:::-;;;;;;;;;6610:48;;6694:11;6669:10;6680;6669:22;;;;;;;;:::i;:::-;;;;;;;;;;;;:36;;;;6773:28;;;:15;:28;;;;;;;:41;;;6942:24;;;;;6935:31;6976:10;:16;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;6009:990;;;5938:1061;:::o;3490:217::-;3574:14;3591:20;3608:2;3591:16;:20::i;:::-;-1:-1:-1;;;;;3621:16:15;;;;;;;:12;:16;;;;;;;;:24;;;;;;;;:34;;;3665:26;;;:17;:26;;;;;;:35;;;;-1:-1:-1;3490:217:15:o;14:177:38:-;-1:-1:-1;;;;;;92:5:38;88:78;81:5;78:89;68:117;;181:1;178;171:12;196:245;254:6;307:2;295:9;286:7;282:23;278:32;275:52;;;323:1;320;313:12;275:52;362:9;349:23;381:30;405:5;381:30;:::i;638:250::-;723:1;733:113;747:6;744:1;741:13;733:113;;;823:11;;;817:18;804:11;;;797:39;769:2;762:10;733:113;;;-1:-1:-1;;880:1:38;862:16;;855:27;638:250::o;893:271::-;935:3;973:5;967:12;1000:6;995:3;988:19;1016:76;1085:6;1078:4;1073:3;1069:14;1062:4;1055:5;1051:16;1016:76;:::i;:::-;1146:2;1125:15;-1:-1:-1;;1121:29:38;1112:39;;;;1153:4;1108:50;;893:271;-1:-1:-1;;893:271:38:o;1169:220::-;1318:2;1307:9;1300:21;1281:4;1338:45;1379:2;1368:9;1364:18;1356:6;1338:45;:::i;1394:180::-;1453:6;1506:2;1494:9;1485:7;1481:23;1477:32;1474:52;;;1522:1;1519;1512:12;1474:52;-1:-1:-1;1545:23:38;;1394:180;-1:-1:-1;1394:180:38:o;1810:196::-;1878:20;;-1:-1:-1;;;;;1927:54:38;;1917:65;;1907:93;;1996:1;1993;1986:12;1907:93;1810:196;;;:::o;2011:254::-;2079:6;2087;2140:2;2128:9;2119:7;2115:23;2111:32;2108:52;;;2156:1;2153;2146:12;2108:52;2179:29;2198:9;2179:29;:::i;:::-;2169:39;2255:2;2240:18;;;;2227:32;;-1:-1:-1;;;2011:254:38:o;2452:328::-;2529:6;2537;2545;2598:2;2586:9;2577:7;2573:23;2569:32;2566:52;;;2614:1;2611;2604:12;2566:52;2637:29;2656:9;2637:29;:::i;:::-;2627:39;;2685:38;2719:2;2708:9;2704:18;2685:38;:::i;:::-;2675:48;;2770:2;2759:9;2755:18;2742:32;2732:42;;2452:328;;;;;:::o;3032:186::-;3091:6;3144:2;3132:9;3123:7;3119:23;3115:32;3112:52;;;3160:1;3157;3150:12;3112:52;3183:29;3202:9;3183:29;:::i;3223:118::-;3309:5;3302:13;3295:21;3288:5;3285:32;3275:60;;3331:1;3328;3321:12;3346:315;3411:6;3419;3472:2;3460:9;3451:7;3447:23;3443:32;3440:52;;;3488:1;3485;3478:12;3440:52;3511:29;3530:9;3511:29;:::i;:::-;3501:39;;3590:2;3579:9;3575:18;3562:32;3603:28;3625:5;3603:28;:::i;:::-;3650:5;3640:15;;;3346:315;;;;;:::o;3666:184::-;-1:-1:-1;;;3715:1:38;3708:88;3815:4;3812:1;3805:15;3839:4;3836:1;3829:15;3855:1138;3950:6;3958;3966;3974;4027:3;4015:9;4006:7;4002:23;3998:33;3995:53;;;4044:1;4041;4034:12;3995:53;4067:29;4086:9;4067:29;:::i;:::-;4057:39;;4115:38;4149:2;4138:9;4134:18;4115:38;:::i;:::-;4105:48;;4200:2;4189:9;4185:18;4172:32;4162:42;;4255:2;4244:9;4240:18;4227:32;4278:18;4319:2;4311:6;4308:14;4305:34;;;4335:1;4332;4325:12;4305:34;4373:6;4362:9;4358:22;4348:32;;4418:7;4411:4;4407:2;4403:13;4399:27;4389:55;;4440:1;4437;4430:12;4389:55;4476:2;4463:16;4498:2;4494;4491:10;4488:36;;;4504:18;;:::i;:::-;4579:2;4573:9;4547:2;4633:13;;-1:-1:-1;;4629:22:38;;;4653:2;4625:31;4621:40;4609:53;;;4677:18;;;4697:22;;;4674:46;4671:72;;;4723:18;;:::i;:::-;4763:10;4759:2;4752:22;4798:2;4790:6;4783:18;4838:7;4833:2;4828;4824;4820:11;4816:20;4813:33;4810:53;;;4859:1;4856;4849:12;4810:53;4915:2;4910;4906;4902:11;4897:2;4889:6;4885:15;4872:46;4960:1;4955:2;4950;4942:6;4938:15;4934:24;4927:35;4981:6;4971:16;;;;;;;3855:1138;;;;;;;:::o;4998:260::-;5066:6;5074;5127:2;5115:9;5106:7;5102:23;5098:32;5095:52;;;5143:1;5140;5133:12;5095:52;5166:29;5185:9;5166:29;:::i;:::-;5156:39;;5214:38;5248:2;5237:9;5233:18;5214:38;:::i;:::-;5204:48;;4998:260;;;;;:::o;5263:437::-;5342:1;5338:12;;;;5385;;;5406:61;;5460:4;5452:6;5448:17;5438:27;;5406:61;5513:2;5505:6;5502:14;5482:18;5479:38;5476:218;;-1:-1:-1;;;5547:1:38;5540:88;5651:4;5648:1;5641:15;5679:4;5676:1;5669:15;5476:218;;5263:437;;;:::o;6953:184::-;7023:6;7076:2;7064:9;7055:7;7051:23;7047:32;7044:52;;;7092:1;7089;7082:12;7044:52;-1:-1:-1;7115:16:38;;6953:184;-1:-1:-1;6953:184:38:o;7906:::-;-1:-1:-1;;;7955:1:38;7948:88;8055:4;8052:1;8045:15;8079:4;8076:1;8069:15;8095:128;8162:9;;;8183:11;;;8180:37;;;8197:18;;:::i;8228:184::-;-1:-1:-1;;;8277:1:38;8270:88;8377:4;8374:1;8367:15;8401:4;8398:1;8391:15;8417:184;-1:-1:-1;;;8466:1:38;8459:88;8566:4;8563:1;8556:15;8590:4;8587:1;8580:15;8606:168;8679:9;;;8710;;8727:15;;;8721:22;;8707:37;8697:71;;8748:18;;:::i;9182:245::-;9249:6;9302:2;9290:9;9281:7;9277:23;9273:32;9270:52;;;9318:1;9315;9308:12;9270:52;9350:9;9344:16;9369:28;9391:5;9369:28;:::i;10193:184::-;-1:-1:-1;;;10242:1:38;10235:88;10342:4;10339:1;10332:15;10366:4;10363:1;10356:15;10382:120;10422:1;10448;10438:35;;10453:18;;:::i;:::-;-1:-1:-1;10487:9:38;;10382:120::o;10817:411::-;-1:-1:-1;;;;;11026:6:38;11022:55;11011:9;11004:74;11114:6;11109:2;11098:9;11094:18;11087:34;11157:2;11152;11141:9;11137:18;11130:30;10985:4;11177:45;11218:2;11207:9;11203:18;11195:6;11177:45;:::i;:::-;11169:53;10817:411;-1:-1:-1;;;;;10817:411:38:o;14341:125::-;14406:9;;;14427:10;;;14424:36;;;14440:18;;:::i;14658:112::-;14690:1;14716;14706:35;;14721:18;;:::i;:::-;-1:-1:-1;14755:9:38;;14658:112::o;16627:496::-;16806:3;16844:6;16838:13;16860:66;16919:6;16914:3;16907:4;16899:6;16895:17;16860:66;:::i;:::-;16989:13;;16948:16;;;;17011:70;16989:13;16948:16;17058:4;17046:17;;17011:70;:::i;:::-;17097:20;;16627:496;-1:-1:-1;;;;16627:496:38:o;17128:512::-;17322:4;-1:-1:-1;;;;;17432:2:38;17424:6;17420:15;17409:9;17402:34;17484:2;17476:6;17472:15;17467:2;17456:9;17452:18;17445:43;;17524:6;17519:2;17508:9;17504:18;17497:34;17567:3;17562:2;17551:9;17547:18;17540:31;17588:46;17629:3;17618:9;17614:19;17606:6;17588:46;:::i;:::-;17580:54;17128:512;-1:-1:-1;;;;;;17128:512:38:o;17645:249::-;17714:6;17767:2;17755:9;17746:7;17742:23;17738:32;17735:52;;;17783:1;17780;17773:12;17735:52;17815:9;17809:16;17834:30;17858:5;17834:30;:::i;17899:135::-;17938:3;17959:17;;;17956:43;;17979:18;;:::i;:::-;-1:-1:-1;18026:1:38;18015:13;;17899:135::o",
    "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\";\nimport \"./interfaces/ERC20Interface.sol\";\nimport \"./JMToken.sol\";\n\ncontract MapleNFT is Ownable, ERC721Enumerable {\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenIds;\n\n    JMToken private token;\n    uint256 decimals = 10**18;\n    address payable public treasuryWallet; // 비상금 계좌!\n    uint256 private mintPrice;\n    address private marketContractAddress;\n    uint256[] private waitForMint;\n    uint256 private maxTokenNum;\n    string private baseURIextended;\n    \n\n    event Minted(address addr, uint256 tokenId, string tokenURI);\n\n    constructor(\n        address _marketAddress,\n        address _tokenContractAddress, \n        string memory _MapleBaseURI, \n        address payable _treasuryWallet)  ERC721(\"MapleNFT\", \"NFT\") {\n\n        marketContractAddress = _marketAddress;\n        mintPrice = 1;\n        maxTokenNum = 100; // 5000개까지 만들었지만 constructor의 가스비 절약을 위해\n        _setToken(_tokenContractAddress);\n        _setBaseURI(_MapleBaseURI);\n        _generateMintArray();\n        treasuryWallet = _treasuryWallet;\n    }\n\n    function _generateMintArray() private onlyOwner {\n        for (uint256 i = 0; i <= maxTokenNum; i++) {\n            waitForMint.push(i);\n        }\n    }\n    \n    // 민팅 페이어블 \n    function mintMapleNFT() public payable returns (uint256)  {\n        require(token.balanceOf(msg.sender) >= mintPrice, \"ERC721: recipient lack of erc20 balance\");\n        require(maxTokenNum >= totalSupply(), \"ERC721: all nfts are minted\");\n\n        _shuffleMintArray();\n        uint256 minted = waitForMint[waitForMint.length - 1];\n        waitForMint.pop();\n\n        _mint(msg.sender, minted);\n        setApprovalForAll(marketContractAddress, true); // grant transaction permission to market\n\n        //재무 토큰 지갑으로 전송\n        bool success = token.increaseContractAllowance(\n            msg.sender,\n            address(this),\n            mintPrice * decimals\n        );\n        require(success,\"IncreaseContract Fail\");\n        token.transferFrom(msg.sender, treasuryWallet, mintPrice * decimals); \n        token.marketBurn(treasuryWallet, (mintPrice * decimals)/2);\n\n        emit Minted(msg.sender, minted, tokenURI(minted));\n\n        return minted;\n    }\n\n    function _shuffleMintArray() private {\n        uint256 i = waitForMint.length - 1;\n        /*\n         * IMPORTANT: 실제 프로덕트라면 block.timestamp가 아닌 chainlink 등의 오라클을 통해 난수를 주입해야한다.\n         */\n        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (waitForMint.length);\n        uint256 temp = waitForMint[n];\n        waitForMint[n] = waitForMint[i];\n        waitForMint[i] = temp;\n    }\n\n    function _setBaseURI(string memory _MapleBaseURI) private onlyOwner {\n        baseURIextended = _MapleBaseURI;\n    }\n\n    function _baseURI() internal view virtual override returns (string memory) {\n        return baseURIextended;\n    }\n\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal override {\n        super._beforeTokenTransfer(from, to, tokenId);\n    }\n\n    function _burn(\n        uint256 _tokenId\n    ) internal override {\n        super._burn(_tokenId);\n    }\n\n    function supportsInterface(bytes4 interfaceId) public view override returns (bool) {\n        return super.supportsInterface(interfaceId);\n    }\n\n    function tokenURI(\n        uint256 _tokenId\n    ) public view override returns (string memory) {\n        return super.tokenURI(_tokenId);\n    }\n\n    function _setToken(address jmtokenAddress) private onlyOwner returns (bool) {\n        require(jmtokenAddress != address(0x0));\n        token = JMToken(jmtokenAddress);\n        return true;\n    }\n\n    function withdraw() external onlyOwner returns (uint256) {\n        uint256 totalValue = token.balanceOf(address(this));\n        token.approve(address(this), totalValue);\n        token.transferFrom(address(this), msg.sender, totalValue);\n        return totalValue;\n    }\n}\n",
    "sourcePath": "/Users/hyenne/workspace/BEB-05-JMT/contract/contracts/MapleNFT.sol",
    "ast": {
      "absolutePath": "project:/contracts/MapleNFT.sol",
      "exportedSymbols": {
        "Address": [
          4268
        ],
        "Babylonian": [
          5187
        ],
        "Context": [
          4290
        ],
        "Counters": [
          4364
        ],
        "ERC165": [
          4614
        ],
        "ERC20": [
          2473
        ],
        "ERC20Interface": [
          11371
        ],
        "ERC721": [
          3443
        ],
        "ERC721Enumerable": [
          3915
        ],
        "IERC165": [
          4626
        ],
        "IERC20": [
          2551
        ],
        "IERC20Metadata": [
          2576
        ],
        "IERC721": [
          3559
        ],
        "IERC721Enumerable": [
          3946
        ],
        "IERC721Metadata": [
          3973
        ],
        "IERC721Receiver": [
          3577
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
        "MapleNFT": [
          9956
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
          11290
        ]
      },
      "id": 9957,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 9537,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:23:33"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "id": 9538,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 9957,
          "sourceUnit": 3444,
          "src": "56:57:33",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
          "file": "@openzeppelin/contracts/utils/Counters.sol",
          "id": 9539,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 9957,
          "sourceUnit": 4365,
          "src": "114:52:33",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "id": 9540,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 9957,
          "sourceUnit": 113,
          "src": "167:52:33",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
          "file": "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
          "id": 9541,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 9957,
          "sourceUnit": 3916,
          "src": "220:78:33",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "project:/contracts/interfaces/ERC20Interface.sol",
          "file": "./interfaces/ERC20Interface.sol",
          "id": 9542,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 9957,
          "sourceUnit": 11372,
          "src": "299:41:33",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "project:/contracts/JMToken.sol",
          "file": "./JMToken.sol",
          "id": 9543,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 9957,
          "sourceUnit": 6175,
          "src": "341:23:33",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 9544,
                "name": "Ownable",
                "nameLocations": [
                  "387:7:33"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 112,
                "src": "387:7:33"
              },
              "id": 9545,
              "nodeType": "InheritanceSpecifier",
              "src": "387:7:33"
            },
            {
              "baseName": {
                "id": 9546,
                "name": "ERC721Enumerable",
                "nameLocations": [
                  "396:16:33"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 3915,
                "src": "396:16:33"
              },
              "id": 9547,
              "nodeType": "InheritanceSpecifier",
              "src": "396:16:33"
            }
          ],
          "canonicalName": "MapleNFT",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 9956,
          "linearizedBaseContracts": [
            9956,
            3915,
            3946,
            3443,
            3973,
            3559,
            4614,
            4626,
            112,
            4290
          ],
          "name": "MapleNFT",
          "nameLocation": "375:8:33",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "global": false,
              "id": 9551,
              "libraryName": {
                "id": 9548,
                "name": "Counters",
                "nameLocations": [
                  "425:8:33"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 4364,
                "src": "425:8:33"
              },
              "nodeType": "UsingForDirective",
              "src": "419:36:33",
              "typeName": {
                "id": 9550,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 9549,
                  "name": "Counters.Counter",
                  "nameLocations": [
                    "438:8:33",
                    "447:7:33"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 4296,
                  "src": "438:16:33"
                },
                "referencedDeclaration": 4296,
                "src": "438:16:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Counter_$4296_storage_ptr",
                  "typeString": "struct Counters.Counter"
                }
              }
            },
            {
              "constant": false,
              "id": 9554,
              "mutability": "mutable",
              "name": "_tokenIds",
              "nameLocation": "485:9:33",
              "nodeType": "VariableDeclaration",
              "scope": 9956,
              "src": "460:34:33",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$4296_storage",
                "typeString": "struct Counters.Counter"
              },
              "typeName": {
                "id": 9553,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 9552,
                  "name": "Counters.Counter",
                  "nameLocations": [
                    "460:8:33",
                    "469:7:33"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 4296,
                  "src": "460:16:33"
                },
                "referencedDeclaration": 4296,
                "src": "460:16:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Counter_$4296_storage_ptr",
                  "typeString": "struct Counters.Counter"
                }
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 9557,
              "mutability": "mutable",
              "name": "token",
              "nameLocation": "517:5:33",
              "nodeType": "VariableDeclaration",
              "scope": 9956,
              "src": "501:21:33",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_JMToken_$6174",
                "typeString": "contract JMToken"
              },
              "typeName": {
                "id": 9556,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 9555,
                  "name": "JMToken",
                  "nameLocations": [
                    "501:7:33"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6174,
                  "src": "501:7:33"
                },
                "referencedDeclaration": 6174,
                "src": "501:7:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_JMToken_$6174",
                  "typeString": "contract JMToken"
                }
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 9562,
              "mutability": "mutable",
              "name": "decimals",
              "nameLocation": "536:8:33",
              "nodeType": "VariableDeclaration",
              "scope": 9956,
              "src": "528:25:33",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 9558,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "528:7:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "commonType": {
                  "typeIdentifier": "t_rational_1000000000000000000_by_1",
                  "typeString": "int_const 1000000000000000000"
                },
                "id": 9561,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "hexValue": "3130",
                  "id": 9559,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "547:2:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_10_by_1",
                    "typeString": "int_const 10"
                  },
                  "value": "10"
                },
                "nodeType": "BinaryOperation",
                "operator": "**",
                "rightExpression": {
                  "hexValue": "3138",
                  "id": 9560,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "551:2:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_18_by_1",
                    "typeString": "int_const 18"
                  },
                  "value": "18"
                },
                "src": "547:6:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1000000000000000000_by_1",
                  "typeString": "int_const 1000000000000000000"
                }
              },
              "visibility": "internal"
            },
            {
              "constant": false,
              "functionSelector": "4626402b",
              "id": 9564,
              "mutability": "mutable",
              "name": "treasuryWallet",
              "nameLocation": "582:14:33",
              "nodeType": "VariableDeclaration",
              "scope": 9956,
              "src": "559:37:33",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              },
              "typeName": {
                "id": 9563,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "559:15:33",
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
              "id": 9566,
              "mutability": "mutable",
              "name": "mintPrice",
              "nameLocation": "639:9:33",
              "nodeType": "VariableDeclaration",
              "scope": 9956,
              "src": "623:25:33",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 9565,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "623:7:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 9568,
              "mutability": "mutable",
              "name": "marketContractAddress",
              "nameLocation": "670:21:33",
              "nodeType": "VariableDeclaration",
              "scope": 9956,
              "src": "654:37:33",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              },
              "typeName": {
                "id": 9567,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "654:7:33",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 9571,
              "mutability": "mutable",
              "name": "waitForMint",
              "nameLocation": "715:11:33",
              "nodeType": "VariableDeclaration",
              "scope": 9956,
              "src": "697:29:33",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                "typeString": "uint256[]"
              },
              "typeName": {
                "baseType": {
                  "id": 9569,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "697:7:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "id": 9570,
                "nodeType": "ArrayTypeName",
                "src": "697:9:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                  "typeString": "uint256[]"
                }
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 9573,
              "mutability": "mutable",
              "name": "maxTokenNum",
              "nameLocation": "748:11:33",
              "nodeType": "VariableDeclaration",
              "scope": 9956,
              "src": "732:27:33",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 9572,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "732:7:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "id": 9575,
              "mutability": "mutable",
              "name": "baseURIextended",
              "nameLocation": "780:15:33",
              "nodeType": "VariableDeclaration",
              "scope": 9956,
              "src": "765:30:33",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage",
                "typeString": "string"
              },
              "typeName": {
                "id": 9574,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "765:6:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "visibility": "private"
            },
            {
              "anonymous": false,
              "eventSelector": "e7cd4ce7f2a465edc730269a1305e8a48bad821e8fb7e152ec413829c01a53c4",
              "id": 9583,
              "name": "Minted",
              "nameLocation": "813:6:33",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 9582,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9577,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "addr",
                    "nameLocation": "828:4:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9583,
                    "src": "820:12:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 9576,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "820:7:33",
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
                    "id": 9579,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "tokenId",
                    "nameLocation": "842:7:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9583,
                    "src": "834:15:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9578,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "834:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 9581,
                    "indexed": false,
                    "mutability": "mutable",
                    "name": "tokenURI",
                    "nameLocation": "858:8:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9583,
                    "src": "851:15:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 9580,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "851:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "819:48:33"
              },
              "src": "807:61:33"
            },
            {
              "body": {
                "id": 9625,
                "nodeType": "Block",
                "src": "1065:331:33",
                "statements": [
                  {
                    "expression": {
                      "id": 9600,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 9598,
                        "name": "marketContractAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9568,
                        "src": "1076:21:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 9599,
                        "name": "_marketAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9585,
                        "src": "1100:14:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1076:38:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 9601,
                    "nodeType": "ExpressionStatement",
                    "src": "1076:38:33"
                  },
                  {
                    "expression": {
                      "id": 9604,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 9602,
                        "name": "mintPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9566,
                        "src": "1124:9:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "31",
                        "id": 9603,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1136:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1124:13:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 9605,
                    "nodeType": "ExpressionStatement",
                    "src": "1124:13:33"
                  },
                  {
                    "expression": {
                      "id": 9608,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 9606,
                        "name": "maxTokenNum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9573,
                        "src": "1147:11:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "313030",
                        "id": 9607,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1161:3:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100_by_1",
                          "typeString": "int_const 100"
                        },
                        "value": "100"
                      },
                      "src": "1147:17:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 9609,
                    "nodeType": "ExpressionStatement",
                    "src": "1147:17:33"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 9611,
                          "name": "_tokenContractAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9587,
                          "src": "1259:21:33",
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
                        "id": 9610,
                        "name": "_setToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9913,
                        "src": "1249:9:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                          "typeString": "function (address) returns (bool)"
                        }
                      },
                      "id": 9612,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1249:32:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 9613,
                    "nodeType": "ExpressionStatement",
                    "src": "1249:32:33"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 9615,
                          "name": "_MapleBaseURI",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9589,
                          "src": "1303:13:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 9614,
                        "name": "_setBaseURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9817,
                        "src": "1291:11:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory)"
                        }
                      },
                      "id": 9616,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1291:26:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 9617,
                    "nodeType": "ExpressionStatement",
                    "src": "1291:26:33"
                  },
                  {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 9618,
                        "name": "_generateMintArray",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9650,
                        "src": "1327:18:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 9619,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1327:20:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 9620,
                    "nodeType": "ExpressionStatement",
                    "src": "1327:20:33"
                  },
                  {
                    "expression": {
                      "id": 9623,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 9621,
                        "name": "treasuryWallet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9564,
                        "src": "1357:14:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 9622,
                        "name": "_treasuryWallet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9591,
                        "src": "1374:15:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "src": "1357:32:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "id": 9624,
                    "nodeType": "ExpressionStatement",
                    "src": "1357:32:33"
                  }
                ]
              },
              "id": 9626,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "hexValue": "4d61706c654e4654",
                      "id": 9594,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1046:10:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_3f6731cc0a798433602ef87cf869c7375df1a96e2f6fa946bc19099a469d2702",
                        "typeString": "literal_string \"MapleNFT\""
                      },
                      "value": "MapleNFT"
                    },
                    {
                      "hexValue": "4e4654",
                      "id": 9595,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1058:5:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_9c4138cd0a1311e4748f70d0fe3dc55f0f5f75e0f20db731225cbc3b8914016a",
                        "typeString": "literal_string \"NFT\""
                      },
                      "value": "NFT"
                    }
                  ],
                  "id": 9596,
                  "kind": "baseConstructorSpecifier",
                  "modifierName": {
                    "id": 9593,
                    "name": "ERC721",
                    "nameLocations": [
                      "1039:6:33"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 3443,
                    "src": "1039:6:33"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1039:25:33"
                }
              ],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 9592,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9585,
                    "mutability": "mutable",
                    "name": "_marketAddress",
                    "nameLocation": "903:14:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9626,
                    "src": "895:22:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 9584,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "895:7:33",
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
                    "id": 9587,
                    "mutability": "mutable",
                    "name": "_tokenContractAddress",
                    "nameLocation": "935:21:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9626,
                    "src": "927:29:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 9586,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "927:7:33",
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
                    "id": 9589,
                    "mutability": "mutable",
                    "name": "_MapleBaseURI",
                    "nameLocation": "981:13:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9626,
                    "src": "967:27:33",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 9588,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "967:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 9591,
                    "mutability": "mutable",
                    "name": "_treasuryWallet",
                    "nameLocation": "1021:15:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9626,
                    "src": "1005:31:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    },
                    "typeName": {
                      "id": 9590,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1005:15:33",
                      "stateMutability": "payable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "885:152:33"
              },
              "returnParameters": {
                "id": 9597,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1065:0:33"
              },
              "scope": 9956,
              "src": "874:522:33",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 9649,
                "nodeType": "Block",
                "src": "1450:103:33",
                "statements": [
                  {
                    "body": {
                      "id": 9647,
                      "nodeType": "Block",
                      "src": "1503:44:33",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "id": 9644,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9632,
                                "src": "1534:1:33",
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
                                }
                              ],
                              "expression": {
                                "id": 9641,
                                "name": "waitForMint",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9571,
                                "src": "1517:11:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                  "typeString": "uint256[] storage ref"
                                }
                              },
                              "id": 9643,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1529:4:33",
                              "memberName": "push",
                              "nodeType": "MemberAccess",
                              "src": "1517:16:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_uint256_$dyn_storage_ptr_$_t_uint256_$returns$__$bound_to$_t_array$_t_uint256_$dyn_storage_ptr_$",
                                "typeString": "function (uint256[] storage pointer,uint256)"
                              }
                            },
                            "id": 9645,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1517:19:33",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 9646,
                          "nodeType": "ExpressionStatement",
                          "src": "1517:19:33"
                        }
                      ]
                    },
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9637,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 9635,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9632,
                        "src": "1480:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<=",
                      "rightExpression": {
                        "id": 9636,
                        "name": "maxTokenNum",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9573,
                        "src": "1485:11:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1480:16:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 9648,
                    "initializationExpression": {
                      "assignments": [
                        9632
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 9632,
                          "mutability": "mutable",
                          "name": "i",
                          "nameLocation": "1473:1:33",
                          "nodeType": "VariableDeclaration",
                          "scope": 9648,
                          "src": "1465:9:33",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "typeName": {
                            "id": 9631,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1465:7:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 9634,
                      "initialValue": {
                        "hexValue": "30",
                        "id": 9633,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1477:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "1465:13:33"
                    },
                    "loopExpression": {
                      "expression": {
                        "id": 9639,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "++",
                        "prefix": false,
                        "src": "1498:3:33",
                        "subExpression": {
                          "id": 9638,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9632,
                          "src": "1498:1:33",
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
                      "id": 9640,
                      "nodeType": "ExpressionStatement",
                      "src": "1498:3:33"
                    },
                    "nodeType": "ForStatement",
                    "src": "1460:87:33"
                  }
                ]
              },
              "id": 9650,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 9629,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 9628,
                    "name": "onlyOwner",
                    "nameLocations": [
                      "1440:9:33"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 31,
                    "src": "1440:9:33"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1440:9:33"
                }
              ],
              "name": "_generateMintArray",
              "nameLocation": "1411:18:33",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 9627,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1429:2:33"
              },
              "returnParameters": {
                "id": 9630,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1450:0:33"
              },
              "scope": 9956,
              "src": "1402:151:33",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "private"
            },
            {
              "body": {
                "id": 9756,
                "nodeType": "Block",
                "src": "1649:917:33",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 9662,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "arguments": [
                              {
                                "expression": {
                                  "id": 9658,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967281,
                                  "src": "1683:3:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 9659,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "1687:6:33",
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "src": "1683:10:33",
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
                              "expression": {
                                "id": 9656,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9557,
                                "src": "1667:5:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_JMToken_$6174",
                                  "typeString": "contract JMToken"
                                }
                              },
                              "id": 9657,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1673:9:33",
                              "memberName": "balanceOf",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 1986,
                              "src": "1667:15:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (address) view external returns (uint256)"
                              }
                            },
                            "id": 9660,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1667:27:33",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "id": 9661,
                            "name": "mintPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9566,
                            "src": "1698:9:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1667:40:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4552433732313a20726563697069656e74206c61636b206f662065726332302062616c616e6365",
                          "id": 9663,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1709:41:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_be6ad8021e6b80a9a985704237732530c0e3cdf07bbf9d28e13e90abe670112e",
                            "typeString": "literal_string \"ERC721: recipient lack of erc20 balance\""
                          },
                          "value": "ERC721: recipient lack of erc20 balance"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_be6ad8021e6b80a9a985704237732530c0e3cdf07bbf9d28e13e90abe670112e",
                            "typeString": "literal_string \"ERC721: recipient lack of erc20 balance\""
                          }
                        ],
                        "id": 9655,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1659:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 9664,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1659:92:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 9665,
                    "nodeType": "ExpressionStatement",
                    "src": "1659:92:33"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 9670,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 9667,
                            "name": "maxTokenNum",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9573,
                            "src": "1769:11:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 9668,
                              "name": "totalSupply",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3666,
                              "src": "1784:11:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 9669,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1784:13:33",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1769:28:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "4552433732313a20616c6c206e66747320617265206d696e746564",
                          "id": 9671,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1799:29:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_df3d2f59522d891de16a4252d65c969fd7e0ed099ebf38783c0a5e88ec8b1c22",
                            "typeString": "literal_string \"ERC721: all nfts are minted\""
                          },
                          "value": "ERC721: all nfts are minted"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_df3d2f59522d891de16a4252d65c969fd7e0ed099ebf38783c0a5e88ec8b1c22",
                            "typeString": "literal_string \"ERC721: all nfts are minted\""
                          }
                        ],
                        "id": 9666,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "1761:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 9672,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1761:68:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 9673,
                    "nodeType": "ExpressionStatement",
                    "src": "1761:68:33"
                  },
                  {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 9674,
                        "name": "_shuffleMintArray",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9805,
                        "src": "1840:17:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                          "typeString": "function ()"
                        }
                      },
                      "id": 9675,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1840:19:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 9676,
                    "nodeType": "ExpressionStatement",
                    "src": "1840:19:33"
                  },
                  {
                    "assignments": [
                      9678
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9678,
                        "mutability": "mutable",
                        "name": "minted",
                        "nameLocation": "1877:6:33",
                        "nodeType": "VariableDeclaration",
                        "scope": 9756,
                        "src": "1869:14:33",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 9677,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1869:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 9685,
                    "initialValue": {
                      "baseExpression": {
                        "id": 9679,
                        "name": "waitForMint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9571,
                        "src": "1886:11:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 9684,
                      "indexExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9683,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 9680,
                            "name": "waitForMint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9571,
                            "src": "1898:11:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                              "typeString": "uint256[] storage ref"
                            }
                          },
                          "id": 9681,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1910:6:33",
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "src": "1898:18:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 9682,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1919:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "1898:22:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1886:35:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1869:52:33"
                  },
                  {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 9686,
                          "name": "waitForMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9571,
                          "src": "1931:11:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 9688,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1943:3:33",
                        "memberName": "pop",
                        "nodeType": "MemberAccess",
                        "src": "1931:15:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_arraypop_nonpayable$_t_array$_t_uint256_$dyn_storage_ptr_$returns$__$bound_to$_t_array$_t_uint256_$dyn_storage_ptr_$",
                          "typeString": "function (uint256[] storage pointer)"
                        }
                      },
                      "id": 9689,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1931:17:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 9690,
                    "nodeType": "ExpressionStatement",
                    "src": "1931:17:33"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 9692,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1965:3:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9693,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1969:6:33",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1965:10:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 9694,
                          "name": "minted",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9678,
                          "src": "1977:6:33",
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
                        "id": 9691,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3153,
                        "src": "1959:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 9695,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1959:25:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 9696,
                    "nodeType": "ExpressionStatement",
                    "src": "1959:25:33"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 9698,
                          "name": "marketContractAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9568,
                          "src": "2012:21:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "hexValue": "74727565",
                          "id": 9699,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2035:4:33",
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
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 9697,
                        "name": "setApprovalForAll",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2868,
                        "src": "1994:17:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bool_$returns$__$",
                          "typeString": "function (address,bool)"
                        }
                      },
                      "id": 9700,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1994:46:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 9701,
                    "nodeType": "ExpressionStatement",
                    "src": "1994:46:33"
                  },
                  {
                    "assignments": [
                      9703
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9703,
                        "mutability": "mutable",
                        "name": "success",
                        "nameLocation": "2142:7:33",
                        "nodeType": "VariableDeclaration",
                        "scope": 9756,
                        "src": "2137:12:33",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "typeName": {
                          "id": 9702,
                          "name": "bool",
                          "nodeType": "ElementaryTypeName",
                          "src": "2137:4:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 9716,
                    "initialValue": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 9706,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2197:3:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9707,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2201:6:33",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2197:10:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 9710,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "2229:4:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_MapleNFT_$9956",
                                "typeString": "contract MapleNFT"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_MapleNFT_$9956",
                                "typeString": "contract MapleNFT"
                              }
                            ],
                            "id": 9709,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2221:7:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 9708,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2221:7:33",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 9711,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2221:13:33",
                          "tryCall": false,
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
                          "id": 9714,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 9712,
                            "name": "mintPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9566,
                            "src": "2248:9:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 9713,
                            "name": "decimals",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9562,
                            "src": "2260:8:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2248:20:33",
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
                          "id": 9704,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9557,
                          "src": "2152:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_JMToken_$6174",
                            "typeString": "contract JMToken"
                          }
                        },
                        "id": 9705,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2158:25:33",
                        "memberName": "increaseContractAllowance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5981,
                        "src": "2152:31:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,uint256) external returns (bool)"
                        }
                      },
                      "id": 9715,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2152:126:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2137:141:33"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 9718,
                          "name": "success",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9703,
                          "src": "2296:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "496e637265617365436f6e7472616374204661696c",
                          "id": 9719,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2304:23:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4",
                            "typeString": "literal_string \"IncreaseContract Fail\""
                          },
                          "value": "IncreaseContract Fail"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_8ad5e5b350edc686cddb7823338644ccd6efbf40daad8244f2cda7820112aed4",
                            "typeString": "literal_string \"IncreaseContract Fail\""
                          }
                        ],
                        "id": 9717,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "2288:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 9720,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2288:40:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 9721,
                    "nodeType": "ExpressionStatement",
                    "src": "2288:40:33"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 9725,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2357:3:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9726,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2361:6:33",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2357:10:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 9727,
                          "name": "treasuryWallet",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9564,
                          "src": "2369:14:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 9730,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 9728,
                            "name": "mintPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9566,
                            "src": "2385:9:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 9729,
                            "name": "decimals",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9562,
                            "src": "2397:8:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2385:20:33",
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
                          "id": 9722,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9557,
                          "src": "2338:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_JMToken_$6174",
                            "typeString": "contract JMToken"
                          }
                        },
                        "id": 9724,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2344:12:33",
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2087,
                        "src": "2338:18:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,uint256) external returns (bool)"
                        }
                      },
                      "id": 9731,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2338:68:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 9732,
                    "nodeType": "ExpressionStatement",
                    "src": "2338:68:33"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 9736,
                          "name": "treasuryWallet",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9564,
                          "src": "2434:14:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 9742,
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
                                "id": 9739,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 9737,
                                  "name": "mintPrice",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9566,
                                  "src": "2451:9:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "id": 9738,
                                  "name": "decimals",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9562,
                                  "src": "2463:8:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2451:20:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 9740,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2450:22:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "hexValue": "32",
                            "id": 9741,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2473:1:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_2_by_1",
                              "typeString": "int_const 2"
                            },
                            "value": "2"
                          },
                          "src": "2450:24:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
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
                          "id": 9733,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9557,
                          "src": "2417:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_JMToken_$6174",
                            "typeString": "contract JMToken"
                          }
                        },
                        "id": 9735,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2423:10:33",
                        "memberName": "marketBurn",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5950,
                        "src": "2417:16:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256) external"
                        }
                      },
                      "id": 9743,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2417:58:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 9744,
                    "nodeType": "ExpressionStatement",
                    "src": "2417:58:33"
                  },
                  {
                    "eventCall": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 9746,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2498:3:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9747,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2502:6:33",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2498:10:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 9748,
                          "name": "minted",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9678,
                          "src": "2510:6:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 9750,
                              "name": "minted",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9678,
                              "src": "2527:6:33",
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
                              }
                            ],
                            "id": 9749,
                            "name": "tokenURI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              9886
                            ],
                            "referencedDeclaration": 9886,
                            "src": "2518:8:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$",
                              "typeString": "function (uint256) view returns (string memory)"
                            }
                          },
                          "id": 9751,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2518:16:33",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
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
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 9745,
                        "name": "Minted",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9583,
                        "src": "2491:6:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (address,uint256,string memory)"
                        }
                      },
                      "id": 9752,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2491:44:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 9753,
                    "nodeType": "EmitStatement",
                    "src": "2486:49:33"
                  },
                  {
                    "expression": {
                      "id": 9754,
                      "name": "minted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9678,
                      "src": "2553:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 9654,
                    "id": 9755,
                    "nodeType": "Return",
                    "src": "2546:13:33"
                  }
                ]
              },
              "functionSelector": "25379b00",
              "id": 9757,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "mintMapleNFT",
              "nameLocation": "1600:12:33",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 9651,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1612:2:33"
              },
              "returnParameters": {
                "id": 9654,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9653,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 9757,
                    "src": "1639:7:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9652,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1639:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1638:9:33"
              },
              "scope": 9956,
              "src": "1591:975:33",
              "stateMutability": "payable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 9804,
                "nodeType": "Block",
                "src": "2609:424:33",
                "statements": [
                  {
                    "assignments": [
                      9761
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9761,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "2627:1:33",
                        "nodeType": "VariableDeclaration",
                        "scope": 9804,
                        "src": "2619:9:33",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 9760,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2619:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 9766,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9765,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 9762,
                          "name": "waitForMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9571,
                          "src": "2631:11:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 9763,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2643:6:33",
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "src": "2631:18:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "hexValue": "31",
                        "id": 9764,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2652:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2631:22:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2619:34:33"
                  },
                  {
                    "assignments": [
                      9768
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9768,
                        "mutability": "mutable",
                        "name": "n",
                        "nameLocation": "2835:1:33",
                        "nodeType": "VariableDeclaration",
                        "scope": 9804,
                        "src": "2827:9:33",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 9767,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2827:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 9783,
                    "initialValue": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9782,
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
                                      "id": 9774,
                                      "name": "block",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4294967292,
                                      "src": "2874:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_block",
                                        "typeString": "block"
                                      }
                                    },
                                    "id": 9775,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "2880:9:33",
                                    "memberName": "timestamp",
                                    "nodeType": "MemberAccess",
                                    "src": "2874:15:33",
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
                                    }
                                  ],
                                  "expression": {
                                    "id": 9772,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967295,
                                    "src": "2857:3:33",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 9773,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberLocation": "2861:12:33",
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "src": "2857:16:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 9776,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2857:33:33",
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
                              "id": 9771,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967288,
                              "src": "2847:9:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                "typeString": "function (bytes memory) pure returns (bytes32)"
                              }
                            },
                            "id": 9777,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2847:44:33",
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
                          "id": 9770,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2839:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 9769,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "2839:7:33",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 9778,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2839:53:33",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "%",
                      "rightExpression": {
                        "components": [
                          {
                            "expression": {
                              "id": 9779,
                              "name": "waitForMint",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9571,
                              "src": "2896:11:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                "typeString": "uint256[] storage ref"
                              }
                            },
                            "id": 9780,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2908:6:33",
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "src": "2896:18:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 9781,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2895:20:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2839:76:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2827:88:33"
                  },
                  {
                    "assignments": [
                      9785
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9785,
                        "mutability": "mutable",
                        "name": "temp",
                        "nameLocation": "2933:4:33",
                        "nodeType": "VariableDeclaration",
                        "scope": 9804,
                        "src": "2925:12:33",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 9784,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2925:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 9789,
                    "initialValue": {
                      "baseExpression": {
                        "id": 9786,
                        "name": "waitForMint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9571,
                        "src": "2940:11:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                          "typeString": "uint256[] storage ref"
                        }
                      },
                      "id": 9788,
                      "indexExpression": {
                        "id": 9787,
                        "name": "n",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9768,
                        "src": "2952:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2940:14:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2925:29:33"
                  },
                  {
                    "expression": {
                      "id": 9796,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 9790,
                          "name": "waitForMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9571,
                          "src": "2964:11:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 9792,
                        "indexExpression": {
                          "id": 9791,
                          "name": "n",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9768,
                          "src": "2976:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "2964:14:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "baseExpression": {
                          "id": 9793,
                          "name": "waitForMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9571,
                          "src": "2981:11:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 9795,
                        "indexExpression": {
                          "id": 9794,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9761,
                          "src": "2993:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2981:14:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2964:31:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 9797,
                    "nodeType": "ExpressionStatement",
                    "src": "2964:31:33"
                  },
                  {
                    "expression": {
                      "id": 9802,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 9798,
                          "name": "waitForMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9571,
                          "src": "3005:11:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                            "typeString": "uint256[] storage ref"
                          }
                        },
                        "id": 9800,
                        "indexExpression": {
                          "id": 9799,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9761,
                          "src": "3017:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "3005:14:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 9801,
                        "name": "temp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9785,
                        "src": "3022:4:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3005:21:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 9803,
                    "nodeType": "ExpressionStatement",
                    "src": "3005:21:33"
                  }
                ]
              },
              "id": 9805,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_shuffleMintArray",
              "nameLocation": "2581:17:33",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 9758,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2598:2:33"
              },
              "returnParameters": {
                "id": 9759,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2609:0:33"
              },
              "scope": 9956,
              "src": "2572:461:33",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "private"
            },
            {
              "body": {
                "id": 9816,
                "nodeType": "Block",
                "src": "3107:48:33",
                "statements": [
                  {
                    "expression": {
                      "id": 9814,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 9812,
                        "name": "baseURIextended",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9575,
                        "src": "3117:15:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 9813,
                        "name": "_MapleBaseURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9807,
                        "src": "3135:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "src": "3117:31:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "id": 9815,
                    "nodeType": "ExpressionStatement",
                    "src": "3117:31:33"
                  }
                ]
              },
              "id": 9817,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 9810,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 9809,
                    "name": "onlyOwner",
                    "nameLocations": [
                      "3097:9:33"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 31,
                    "src": "3097:9:33"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "3097:9:33"
                }
              ],
              "name": "_setBaseURI",
              "nameLocation": "3048:11:33",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 9808,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9807,
                    "mutability": "mutable",
                    "name": "_MapleBaseURI",
                    "nameLocation": "3074:13:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9817,
                    "src": "3060:27:33",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 9806,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "3060:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3059:29:33"
              },
              "returnParameters": {
                "id": 9811,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3107:0:33"
              },
              "scope": 9956,
              "src": "3039:116:33",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "private"
            },
            {
              "baseFunctions": [
                2790
              ],
              "body": {
                "id": 9825,
                "nodeType": "Block",
                "src": "3236:39:33",
                "statements": [
                  {
                    "expression": {
                      "id": 9823,
                      "name": "baseURIextended",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9575,
                      "src": "3253:15:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "functionReturnParameters": 9822,
                    "id": 9824,
                    "nodeType": "Return",
                    "src": "3246:22:33"
                  }
                ]
              },
              "id": 9826,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_baseURI",
              "nameLocation": "3170:8:33",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 9819,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "3203:8:33"
              },
              "parameters": {
                "id": 9818,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3178:2:33"
              },
              "returnParameters": {
                "id": 9822,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9821,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 9826,
                    "src": "3221:13:33",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 9820,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "3221:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3220:15:33"
              },
              "scope": 9956,
              "src": "3161:114:33",
              "stateMutability": "view",
              "virtual": true,
              "visibility": "internal"
            },
            {
              "baseFunctions": [
                3753
              ],
              "body": {
                "id": 9844,
                "nodeType": "Block",
                "src": "3402:62:33",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 9839,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9828,
                          "src": "3439:4:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 9840,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9830,
                          "src": "3445:2:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 9841,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9832,
                          "src": "3449:7:33",
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
                          "id": 9836,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967271,
                          "src": "3412:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_MapleNFT_$9956_$",
                            "typeString": "type(contract super MapleNFT)"
                          }
                        },
                        "id": 9838,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3418:20:33",
                        "memberName": "_beforeTokenTransfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3753,
                        "src": "3412:26:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256)"
                        }
                      },
                      "id": 9842,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3412:45:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 9843,
                    "nodeType": "ExpressionStatement",
                    "src": "3412:45:33"
                  }
                ]
              },
              "id": 9845,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_beforeTokenTransfer",
              "nameLocation": "3290:20:33",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 9834,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "3393:8:33"
              },
              "parameters": {
                "id": 9833,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9828,
                    "mutability": "mutable",
                    "name": "from",
                    "nameLocation": "3328:4:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9845,
                    "src": "3320:12:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 9827,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3320:7:33",
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
                    "id": 9830,
                    "mutability": "mutable",
                    "name": "to",
                    "nameLocation": "3350:2:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9845,
                    "src": "3342:10:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 9829,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3342:7:33",
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
                    "id": 9832,
                    "mutability": "mutable",
                    "name": "tokenId",
                    "nameLocation": "3370:7:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9845,
                    "src": "3362:15:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9831,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3362:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3310:73:33"
              },
              "returnParameters": {
                "id": 9835,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3402:0:33"
              },
              "scope": 9956,
              "src": "3281:183:33",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "baseFunctions": [
                3213
              ],
              "body": {
                "id": 9857,
                "nodeType": "Block",
                "src": "3535:38:33",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 9854,
                          "name": "_tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9847,
                          "src": "3557:8:33",
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
                          }
                        ],
                        "expression": {
                          "id": 9851,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967271,
                          "src": "3545:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_MapleNFT_$9956_$",
                            "typeString": "type(contract super MapleNFT)"
                          }
                        },
                        "id": 9853,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3551:5:33",
                        "memberName": "_burn",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3213,
                        "src": "3545:11:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 9855,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3545:21:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 9856,
                    "nodeType": "ExpressionStatement",
                    "src": "3545:21:33"
                  }
                ]
              },
              "id": 9858,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_burn",
              "nameLocation": "3479:5:33",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 9849,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "3526:8:33"
              },
              "parameters": {
                "id": 9848,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9847,
                    "mutability": "mutable",
                    "name": "_tokenId",
                    "nameLocation": "3502:8:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9858,
                    "src": "3494:16:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9846,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3494:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3484:32:33"
              },
              "returnParameters": {
                "id": 9850,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3535:0:33"
              },
              "scope": 9956,
              "src": "3470:103:33",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "baseFunctions": [
                3627
              ],
              "body": {
                "id": 9871,
                "nodeType": "Block",
                "src": "3662:60:33",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 9868,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9860,
                          "src": "3703:11:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        ],
                        "expression": {
                          "id": 9866,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967271,
                          "src": "3679:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_MapleNFT_$9956_$",
                            "typeString": "type(contract super MapleNFT)"
                          }
                        },
                        "id": 9867,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3685:17:33",
                        "memberName": "supportsInterface",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3627,
                        "src": "3679:23:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (bytes4) view returns (bool)"
                        }
                      },
                      "id": 9869,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3679:36:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 9865,
                    "id": 9870,
                    "nodeType": "Return",
                    "src": "3672:43:33"
                  }
                ]
              },
              "functionSelector": "01ffc9a7",
              "id": 9872,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "supportsInterface",
              "nameLocation": "3588:17:33",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 9862,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "3638:8:33"
              },
              "parameters": {
                "id": 9861,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9860,
                    "mutability": "mutable",
                    "name": "interfaceId",
                    "nameLocation": "3613:11:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9872,
                    "src": "3606:18:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "typeName": {
                      "id": 9859,
                      "name": "bytes4",
                      "nodeType": "ElementaryTypeName",
                      "src": "3606:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3605:20:33"
              },
              "returnParameters": {
                "id": 9865,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9864,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 9872,
                    "src": "3656:4:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 9863,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "3656:4:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3655:6:33"
              },
              "scope": 9956,
              "src": "3579:143:33",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "baseFunctions": [
                2781
              ],
              "body": {
                "id": 9885,
                "nodeType": "Block",
                "src": "3823:48:33",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 9882,
                          "name": "_tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9874,
                          "src": "3855:8:33",
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
                          }
                        ],
                        "expression": {
                          "id": 9880,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967271,
                          "src": "3840:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_MapleNFT_$9956_$",
                            "typeString": "type(contract super MapleNFT)"
                          }
                        },
                        "id": 9881,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3846:8:33",
                        "memberName": "tokenURI",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2781,
                        "src": "3840:14:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$",
                          "typeString": "function (uint256) view returns (string memory)"
                        }
                      },
                      "id": 9883,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3840:24:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "functionReturnParameters": 9879,
                    "id": 9884,
                    "nodeType": "Return",
                    "src": "3833:31:33"
                  }
                ]
              },
              "functionSelector": "c87b56dd",
              "id": 9886,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "tokenURI",
              "nameLocation": "3737:8:33",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 9876,
                "nodeType": "OverrideSpecifier",
                "overrides": [],
                "src": "3790:8:33"
              },
              "parameters": {
                "id": 9875,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9874,
                    "mutability": "mutable",
                    "name": "_tokenId",
                    "nameLocation": "3763:8:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9886,
                    "src": "3755:16:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9873,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3755:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3745:32:33"
              },
              "returnParameters": {
                "id": 9879,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9878,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 9886,
                    "src": "3808:13:33",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 9877,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "3808:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3807:15:33"
              },
              "scope": 9956,
              "src": "3728:143:33",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 9912,
                "nodeType": "Block",
                "src": "3953:118:33",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 9901,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 9896,
                            "name": "jmtokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9888,
                            "src": "3971:14:33",
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
                                "hexValue": "307830",
                                "id": 9899,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "3997:3:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                "value": "0x0"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                }
                              ],
                              "id": 9898,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3989:7:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 9897,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3989:7:33",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 9900,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3989:12:33",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "3971:30:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        ],
                        "id": 9895,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "3963:7:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                          "typeString": "function (bool) pure"
                        }
                      },
                      "id": 9902,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3963:39:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 9903,
                    "nodeType": "ExpressionStatement",
                    "src": "3963:39:33"
                  },
                  {
                    "expression": {
                      "id": 9908,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 9904,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9557,
                        "src": "4012:5:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6174",
                          "typeString": "contract JMToken"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "arguments": [
                          {
                            "id": 9906,
                            "name": "jmtokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9888,
                            "src": "4028:14:33",
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
                          "id": 9905,
                          "name": "JMToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6174,
                          "src": "4020:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_JMToken_$6174_$",
                            "typeString": "type(contract JMToken)"
                          }
                        },
                        "id": 9907,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4020:23:33",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_JMToken_$6174",
                          "typeString": "contract JMToken"
                        }
                      },
                      "src": "4012:31:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JMToken_$6174",
                        "typeString": "contract JMToken"
                      }
                    },
                    "id": 9909,
                    "nodeType": "ExpressionStatement",
                    "src": "4012:31:33"
                  },
                  {
                    "expression": {
                      "hexValue": "74727565",
                      "id": 9910,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4060:4:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "functionReturnParameters": 9894,
                    "id": 9911,
                    "nodeType": "Return",
                    "src": "4053:11:33"
                  }
                ]
              },
              "id": 9913,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 9891,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 9890,
                    "name": "onlyOwner",
                    "nameLocations": [
                      "3928:9:33"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 31,
                    "src": "3928:9:33"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "3928:9:33"
                }
              ],
              "name": "_setToken",
              "nameLocation": "3886:9:33",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 9889,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9888,
                    "mutability": "mutable",
                    "name": "jmtokenAddress",
                    "nameLocation": "3904:14:33",
                    "nodeType": "VariableDeclaration",
                    "scope": 9913,
                    "src": "3896:22:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 9887,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3896:7:33",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3895:24:33"
              },
              "returnParameters": {
                "id": 9894,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9893,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 9913,
                    "src": "3947:4:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 9892,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "3947:4:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3946:6:33"
              },
              "scope": 9956,
              "src": "3877:194:33",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "private"
            },
            {
              "body": {
                "id": 9954,
                "nodeType": "Block",
                "src": "4134:212:33",
                "statements": [
                  {
                    "assignments": [
                      9921
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 9921,
                        "mutability": "mutable",
                        "name": "totalValue",
                        "nameLocation": "4152:10:33",
                        "nodeType": "VariableDeclaration",
                        "scope": 9954,
                        "src": "4144:18:33",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 9920,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4144:7:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 9929,
                    "initialValue": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 9926,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "4189:4:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_MapleNFT_$9956",
                                "typeString": "contract MapleNFT"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_MapleNFT_$9956",
                                "typeString": "contract MapleNFT"
                              }
                            ],
                            "id": 9925,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4181:7:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 9924,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "4181:7:33",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 9927,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4181:13:33",
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
                        "expression": {
                          "id": 9922,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9557,
                          "src": "4165:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_JMToken_$6174",
                            "typeString": "contract JMToken"
                          }
                        },
                        "id": 9923,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4171:9:33",
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 1986,
                        "src": "4165:15:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 9928,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4165:30:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4144:51:33"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 9935,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "4227:4:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_MapleNFT_$9956",
                                "typeString": "contract MapleNFT"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_MapleNFT_$9956",
                                "typeString": "contract MapleNFT"
                              }
                            ],
                            "id": 9934,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4219:7:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 9933,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "4219:7:33",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 9936,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4219:13:33",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 9937,
                          "name": "totalValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9921,
                          "src": "4234:10:33",
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
                        "expression": {
                          "id": 9930,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9557,
                          "src": "4205:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_JMToken_$6174",
                            "typeString": "contract JMToken"
                          }
                        },
                        "id": 9932,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4211:7:33",
                        "memberName": "approve",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2054,
                        "src": "4205:13:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) external returns (bool)"
                        }
                      },
                      "id": 9938,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4205:40:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 9939,
                    "nodeType": "ExpressionStatement",
                    "src": "4205:40:33"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 9945,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967268,
                              "src": "4282:4:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_MapleNFT_$9956",
                                "typeString": "contract MapleNFT"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_MapleNFT_$9956",
                                "typeString": "contract MapleNFT"
                              }
                            ],
                            "id": 9944,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "4274:7:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 9943,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "4274:7:33",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 9946,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4274:13:33",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "expression": {
                            "id": 9947,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "4289:3:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 9948,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4293:6:33",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "4289:10:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 9949,
                          "name": "totalValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9921,
                          "src": "4301:10:33",
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
                          "id": 9940,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9557,
                          "src": "4255:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_JMToken_$6174",
                            "typeString": "contract JMToken"
                          }
                        },
                        "id": 9942,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4261:12:33",
                        "memberName": "transferFrom",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2087,
                        "src": "4255:18:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,address,uint256) external returns (bool)"
                        }
                      },
                      "id": 9950,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4255:57:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 9951,
                    "nodeType": "ExpressionStatement",
                    "src": "4255:57:33"
                  },
                  {
                    "expression": {
                      "id": 9952,
                      "name": "totalValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9921,
                      "src": "4329:10:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 9919,
                    "id": 9953,
                    "nodeType": "Return",
                    "src": "4322:17:33"
                  }
                ]
              },
              "functionSelector": "3ccfd60b",
              "id": 9955,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 9916,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 9915,
                    "name": "onlyOwner",
                    "nameLocations": [
                      "4106:9:33"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 31,
                    "src": "4106:9:33"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "4106:9:33"
                }
              ],
              "name": "withdraw",
              "nameLocation": "4086:8:33",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 9914,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "4094:2:33"
              },
              "returnParameters": {
                "id": 9919,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 9918,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 9955,
                    "src": "4125:7:33",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 9917,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4125:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "4124:9:33"
              },
              "scope": 9956,
              "src": "4077:269:33",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            }
          ],
          "scope": 9957,
          "src": "366:3982:33",
          "usedErrors": []
        }
      ],
      "src": "32:4317:33"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "3.4.9",
    "updatedAt": "2022-09-27T15:21:47.118Z",
    "devdoc": {
      "kind": "dev",
      "methods": {
        "approve(address,uint256)": {
          "details": "See {IERC721-approve}."
        },
        "balanceOf(address)": {
          "details": "See {IERC721-balanceOf}."
        },
        "getApproved(uint256)": {
          "details": "See {IERC721-getApproved}."
        },
        "isApprovedForAll(address,address)": {
          "details": "See {IERC721-isApprovedForAll}."
        },
        "name()": {
          "details": "See {IERC721Metadata-name}."
        },
        "owner()": {
          "details": "Returns the address of the current owner."
        },
        "ownerOf(uint256)": {
          "details": "See {IERC721-ownerOf}."
        },
        "renounceOwnership()": {
          "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
        },
        "safeTransferFrom(address,address,uint256)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "safeTransferFrom(address,address,uint256,bytes)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "setApprovalForAll(address,bool)": {
          "details": "See {IERC721-setApprovalForAll}."
        },
        "supportsInterface(bytes4)": {
          "details": "See {IERC165-supportsInterface}."
        },
        "symbol()": {
          "details": "See {IERC721Metadata-symbol}."
        },
        "tokenByIndex(uint256)": {
          "details": "See {IERC721Enumerable-tokenByIndex}."
        },
        "tokenOfOwnerByIndex(address,uint256)": {
          "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
        },
        "totalSupply()": {
          "details": "See {IERC721Enumerable-totalSupply}."
        },
        "transferFrom(address,address,uint256)": {
          "details": "See {IERC721-transferFrom}."
        },
        "transferOwnership(address)": {
          "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
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
module.exports = NFT;