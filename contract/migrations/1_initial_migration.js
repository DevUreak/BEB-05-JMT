const ContractOwner = '0x59dd7D8B4FD619Ef3e90924d5bC633b1277E4b5C' //오너,가나슈(index[0])
const MapleNFT= artifacts.require("MapleNFT");
const MapleMarket= artifacts.require("MapleMarket");
const MapleItems = artifacts.require("MapleItems");
const MapleFight = artifacts.require("MapleFight");

const lpContract = artifacts.require('../contracts/LiquidityPool.sol');
const jonMatangContract = artifacts.require('../contracts/JMToken.sol');
const lptContract = artifacts.require('../contracts/LPT.sol');
const routerContract = artifacts.require('../contracts/JMTRouter.sol');

const stakingContract = artifacts.require('../contracts/Staking.sol');
const vJmtokenContract = artifacts.require('../contracts/VJMToken.sol');

//ganache
// const Web3 = require('web3');
// const web3 = new Web3();
// web3.setProvider(new Web3.providers.HttpProvider('http://127.0.0.1:7545')); //테스트시 본인 가나치 포트에 맞추세요 10002

//polygon
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const fs = require('fs');
const mnemonic = fs.readFileSync("../.secret").toString().trim();
const walletMnemonic = mnemonic; // Your mnemonic
const walletAPIUrl = 'http://127.0.0.1:10002/'; // Your Infura URL
const provider = new HDWalletProvider(
    walletMnemonic,
    walletAPIUrl
);
const web3 = new Web3(provider);


module.exports = async function (deployer) {

  deployer.then(async () => {
    let jmtCont,lpCont,lptCont,routerCont,mapleNFTCont,mapleItemsCont,vjmtCont,stakingCont;

    //jmt deploy
    await deployer.deploy(jonMatangContract, ContractOwner);
    jmtCont = await jonMatangContract.deployed();
    
    //vjmt deploy
    await deployer.deploy(vJmtokenContract, ContractOwner);
    vjmtCont = await vJmtokenContract.deployed();

    //staking deploy
    await deployer.deploy(stakingContract, vjmtCont.address);
    stakingCont = await stakingContract.deployed();

    await deployer.deploy(
      MapleMarket, 
      jonMatangContract.address,
      ContractOwner
    );

    await deployer.deploy(
      MapleNFT,
      MapleMarket.address,
      jonMatangContract.address,
      "https://ipfs.io/ipfs/Qmb9C6BQg3CXYkDG3yeHGvStHMxjVxUdpK6mWiMCwz6WM8/", // 예시
      ContractOwner
    );
    await deployer.deploy(
      MapleItems,
      MapleMarket.address,
      jonMatangContract.address,
      ContractOwner
    );    
    //Maple NFT contract instance 
    mapleNFTCont = await MapleNFT.deployed();
    mapleItemsCont = await MapleItems.deployed();
    mapleMarketCont = await MapleMarket.deployed();

    // swap_pool
    await deployer.deploy(lpContract); // lp 디플로이
    lpCont = await lpContract.deployed(); 

    await deployer.deploy(lptContract,lpCont.address) // lpt 디플로이 
    lptCont = await lptContract.deployed();

    // address setting
    await lpCont.setJmtCoinAddress(jmtCont.address);
    await lpCont.setLPTAddress(lptCont.address);
    await lpCont.setVJMTCoinAddress(vjmtCont.address);

    await deployer.deploy(routerContract,
        lpCont.address,
        jmtCont.address
    );

    await deployer.deploy(MapleFight); // 전투 컨트랙트

    routerCont = await routerContract.deployed();
    await jmtCont.setRouterAddress(routerCont.address);
    await jmtCont.setMapleNFTAddress(mapleNFTCont.address);
    await jmtCont.setMapleItemsAddress(mapleItemsCont.address);
    await jmtCont.setMapleMarketAddress(mapleMarketCont.address);
    await jmtCont.setStakingAddress(stakingCont.address);
    await stakingCont.setJMTokenAddress(jmtCont.address);
    await vjmtCont.setLPAddress(lpCont.address); // lp어드레스 추가 
    await vjmtCont.MoveToTreasuryWallet(); // lp,재무 지갑 자산 이동

    //Contribute
    const accounts = await web3.eth.getAccounts()
    await jmtCont.contribute({ 
        from: accounts[0],
        value: web3.utils.toWei("1","ether") 
    });
    await jmtCont.claimTokens({
        from: accounts[0]
    });
    await jmtCont.sendLiquidityToLPContract(lpCont.address);

  })


  // await routerCont._getAddress().then((value)=>{
  //     console.log(value)
  // });
  
};
