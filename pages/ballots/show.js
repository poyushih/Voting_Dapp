import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Ballot from '../../ethereum/ballot';
import { Card, Grid, Button, Table } from 'semantic-ui-react';
import SetNameForm from '../../components/SetNameForm';
import ValidatingForm from '../../components/ValidatingForm';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes'
import VotingForm from '../../components/VotingForm';

class BallotShow extends Component {
    static async getInitialProps(props) {
        const ballot = Ballot(props.query.address);

        const candidate0 = await ballot.methods.candidates(0).call();
        const candidate1 = await ballot.methods.candidates(1).call();
        const votersCount = await ballot.methods.votersCount().call();
        const votedCount = await ballot.methods.votedCount().call();
        const complete = await ballot.methods.complete().call();
        const votingType = await ballot.methods.votingType().call();
        const area = await ballot.methods.area().call();
        const issuer = await ballot.methods.electionCommision().call();

        return {
            address: props.query.address,
            candidate0: candidate0,
            candidate1: candidate1,
            votersCount: votersCount,
            votedCount: votedCount,
            complete: complete,
            votingType: votingType,
            area: area,
            electionCommission: issuer,
        };
    }

    state = {
        errorMessageFinalize: '',
        loadingFinalize: false,
    }

    onFinalize = async () => {
        this.setState({ loadingFinalize: true, errorMessageFinalize: '' });
        try {
            const account = await web3.eth.getAccounts();
            const ballot = Ballot(this.props.address);
            await ballot.methods.finalize().send({
                from: account[0]
            });
        } catch (err) {
            this.setState({ errorMessageFinalize: err.message });
        }
        this.setState({ loadingFinalize: false });
    }

    renderCards(candidate) {
        const items = [
            {
                header: (()=>{
                    if(candidate.name===''){
                        return 'Election Commission hasn\'t set a name yet';
                    }
                    else return candidate.name;
                }),
                description: 'The candidate',
                meta: 'Candidate',
                fluid:true
            },
            {
                header: candidate.candidateAddress,
                description:
                    'The address of this candidate',
                meta: 'Candidate Address',
                fluid:true
                
            },
            {
                header: candidate.voteCount,
                description:
                    'The number of ballots that this candidate has acquired',
                meta: 'Vote count',
                fluid:true
            },
            {
                header: (()=>{return candidate.won ? 'True' : 'False'}),
                description:
                    'If the candidate has won the vote',
                meta: 'Won',
                fluid:true
            }
        ];

        return <Card.Group items={items} />;
    }

    renderDetails(){
        const {votersCount, votedCount, complete, votingType, area, address, electionCommission} = this.props;
        
        const votingRate = Math.floor((votedCount/votersCount)*100);
        const completeResult = complete ? 'True' : 'False';

        return (
            <Table>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell width={10}>Details</Table.HeaderCell>
                    <Table.HeaderCell width='six'>Value</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Voting Type</Table.Cell>
                        <Table.Cell>{votingType}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Area</Table.Cell>
                        <Table.Cell>{area}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Ballot Contract Address</Table.Cell>
                        <Table.Cell>{electionCommission}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Ballot Contract Issuer</Table.Cell>
                        <Table.Cell>{address}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Total voted count</Table.Cell>
                        <Table.Cell>{votedCount}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Total eligible voters</Table.Cell>
                        <Table.Cell>{votersCount}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Voting Rate</Table.Cell>
                        <Table.Cell>{votingRate + '%'}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Complete</Table.Cell>
                        <Table.Cell>{completeResult}</Table.Cell>
                    </Table.Row>
                </Table.Body>

                <Table.Footer>
                </Table.Footer>
            </Table>
        );
    }

    render() {
        return (
            <Layout>
                <h3>Vote</h3>
                <Grid>
                    <Grid.Row>
                        {this.renderDetails()}
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <h3>#0</h3>
                            {this.renderCards(this.props.candidate0)}
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <h3>#1</h3>
                            {this.renderCards(this.props.candidate1)}
                        </Grid.Column>
                    </Grid.Row>
                    <h3>Vote your candidate!</h3>
                    <Grid.Row>
                        <VotingForm address={this.props.address} />
                    </Grid.Row>
                    <h3>Only for Election Commission</h3>
                    <Grid.Row>                        
                        <Grid.Column width={4}>
                            <h4>Set Candidate's Name</h4>
                            <SetNameForm address={this.props.address} />
                        </Grid.Column>                        
                        <Grid.Column width={6}>
                            <h4>Validating voters</h4>
                            <ValidatingForm address={this.props.address} />
                        </Grid.Column>
                        <Grid.Column style={{ marginTop: '18px' }}>
                            { this.props.complete ? null :(
                                <div>
                                <h3> </h3>
                                <Button
                                    primary
                                    onClick={this.onFinalize}
                                    loading={this.state.loadingFinalize}
                                >
                                    Finalize!
                                </Button>
                                </div>
                            )}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}
export default BallotShow;