import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import creator from '../../ethereum/creator';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class BallotNew extends Component {
    state = {
        votingType: '',
        area: '',
        errorMessage: '',
        loading: false,
        candidates0: '',
        candidates1: ''
    };

    

    onSubmit = async (event) => {
        event.preventDefault();

        let { votingType, area, candidates0, candidates1} = this.state;
        this.setState({ loading: true, errorMessage: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            await creator.methods.createBallot(votingType, area, [candidates0, candidates1])
                .send({
                    from: accounts[0]
                });

            Router.pushRoute('/');
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }

        this.setState({ loading: false });
    }; 

    render() {
        return (
            <Layout>
                <h1>Create a vote! (must be Election Commision)</h1>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
                    <Form.Field>
                        <label>Voting Type</label>
                        <Input
                            label={{ basic: true, content: 'string' }}
                            labelPosition='right'
                            placeholder='e.g. Presidential Election'
                            value={this.state.votingType}
                            onChange={event => this.setState({ votingType: event.target.value })}
                        />
                        <label>Area</label>
                        <Input
                            label={{ basic: true, content: 'string' }}
                            labelPosition='right'
                            placeholder='e.g. Taiwan'
                            value={this.state.area}
                            onChange={event => this.setState({ area: event.target.value })}
                        />
                        <label>Candidate #0</label>
                        <Input
                            label={{ basic: true, content: 'address' }}
                            labelPosition='right'
                            placeholder='enter valid address 0x....'
                            value={this.state.candidates0}
                            onChange={event => this.setState({ candidates0: event.target.value })}
                        />
                        <label>Candidate #1</label>
                        <Input
                            label={{ basic: true, content: 'address' }}
                            labelPosition='right'
                            placeholder='enter valid address 0x....'
                            value={this.state.candidates1}
                            onChange={event => this.setState({ candidates1: event.target.value })}
                        />
                        
                    </Form.Field>

                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} primary>Create!</Button>
                </Form>
            </Layout>
        );
    }
}

export default BallotNew;