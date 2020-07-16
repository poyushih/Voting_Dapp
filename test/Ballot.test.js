const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledBallotCreator = require('../ethereum/build/BallotCreator.json');
const compiledBallot = require('../ethereum/build/Ballot.json');

let accounts;
let creator;
let ballotAddress;
let ballot;

beforeEach( async () => {
    accounts = await web3.eth.getAccounts();

    creator = await new web3.eth.Contract(JSON.parse(compiledBallotCreator.interface))
        .deploy({ data: compiledBallotCreator.bytecode })
        .send({ from: accounts[0], gas: '4000000' });
    await creator.methods.createBallot(
        'Presidential Election',
        'Taiwan',
        [ accounts[1], accounts[2], accounts[3] ])
        .send( {from: accounts[0], gas: '1000000'});

    [ballotAddress] = await creator.methods.getDeployedBallots().call();

    ballot = await new web3.eth.Contract(JSON.parse(compiledBallot.interface), ballotAddress);
    
});

describe('Ballot',  () => {
    it('only the one create ballotCreator could create a vote', async () => {
        let errThrown;

        try{
            await creator.methods.createBallot(
                'Presidential Election',
                'Taiwan',
                [ accounts[1], accounts[2], accounts[3] ])
                .send( {from: accounts[1], gas: '1000000'});
        } catch(err) {
            errThrown = err;
        }
        assert(errThrown);
    });

    it('only creator can set candidates\'s name', async() => {
        let errThrown;
        let t = '';

        let area = await ballot.methods.area().call();
        assert(area === 'Taiwa');
    } )
});