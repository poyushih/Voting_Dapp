import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Ballot from '../ethereum/ballot';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class SetNameForm extends Component {
    state = {
        index: '',
        name:'',
        errorMessage: '',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();

        const ballot = Ballot(this.props.address);

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await ballot.methods.setCandidateName(this.state.index, this.state.name).send({
                from: accounts[0],
            });

            Router.replaceRoute(`/ballots/${this.props.address}`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                    <Input
                        value={this.state.index}
                        onChange={event => this.setState({ index: event.target.value })}
                        label={{ basic: true, content: 'index' }}
                        labelPosition='right'
                    />
                    <Input
                        value={this.state.name}
                        onChange={event => this.setState({ name: event.target.value })}
                        label={{ basic: true, content: 'string' }}
                        labelPosition='right'
                    />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button primary loading={this.state.loading}>
                    Set!
                </Button>
            </Form>
        );
    }
}

export default SetNameForm;