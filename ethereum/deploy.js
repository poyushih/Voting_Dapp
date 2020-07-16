const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const BallotCreator = require('./build/BallotCreator.json');

const provider = new HDWalletProvider(
  'lecture same cushion wine exchange foam smile impose mom cash liar thought',
  'https://rinkeby.infura.io/v3/02c60c85c73c4d36af98e316dfd72857'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(BallotCreator.interface))
    .deploy({ data: '0x' + BallotCreator.bytecode })
    .send({ from: accounts[0]});

  console.log(BallotCreator.interface);
  console.log('Contract deployed to', result.options.address);
};
deploy();
