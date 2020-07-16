import React , { Component } from 'react';
import creator from '../ethereum/creator';
import Ballot from '../ethereum/ballot';
import Layout from '../components/Layout';
import { Card, Button, Label } from 'semantic-ui-react';
import { Link } from '../routes';

class BallotIndex extends Component {
    static async getInitialProps() {
        const ballots = await creator.methods.getDeployedBallots().call();

        return { ballots };
    }
    
    renderBallot() {
        
        let items = this.props.ballots.map( (address) => {
            return {
                header: address,
                description: (
                    <Link route={`/ballots/${address}`}>
                        <a>View Vote</a>
                    </Link>
                ),
                fluid: true
            }
        });
        
        console.log(items);
        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Create a vote!</h3>
                    <Link route="/ballots/new">
                        <a>
                            <Button
                                floated = "right"
                                content = "Create a Vote"
                                icon = "add circle"
                                primary = {true}
                            />
                        </a>
                    </Link>
                    {this.renderBallot()}
                </div>
            </Layout>
        );
    }
}

export default BallotIndex;