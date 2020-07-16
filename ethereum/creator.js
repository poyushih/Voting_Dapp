import web3 from './web3';
import BallotCreator from './build/BallotCreator.json';

const instance = new web3.eth.Contract(
    JSON.parse(BallotCreator.interface),
    '0xD82158fE480159A07013F927749C1a9f6eDE1c7f'
);

export default instance;