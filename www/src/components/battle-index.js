
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getBattles } from '../actions/index';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router';
import { Table, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class BattlesIndex extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

//Invoked once, both on the client and server, immediately before the initial rendering occurs.
  componentWillMount(){
    //console.log(this);
    this.props.getBattles(this.props.params.name);
  }

  render(){
    console.log(this);
    if(!this.props.battles) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    
    return(
    <div>
        <Link to="/" className="pull-xs-left font-weight-bold"><h4>Back</h4></Link>
        <h3 className="text-center text-success"> Battles Fought By {this.props.params.name} </h3>
        <Table responsive striped bordered hover>
            <thead>
            <tr>
                <th>Battle Name</th>
                <th>Year</th>
                <th>Attacker King</th>
                <th>Defender King</th>
                <th>Attacker Outcome</th>
                <th>Battle Type</th>
                <th>Location</th>
            </tr>
            </thead>
            <tbody>
                {this.props.battles.map((row) => {
                    if(row.name > ' ') {
                        return(
                            <tr key={row.name}>
                                <td>{row.name}</td>
                                <td>{row.year}</td>
                                <td>{row.attacker_king}</td>
                                <td>{row.defender_king}</td>
                                <td>{row.attacker_outcome}</td>
                                <td>{row.battle_type}</td>
                                <td>{row.location}</td>
                            </tr>
                        );
                    }
                })}
            </tbody>
        </Table>
    </div>
    );
  }
}


function mapStateToProps(state) {
  return(
    { battles : state.data.battles }
  );
}

function mapDispatchToProps(dispatch) {
  return(bindActionCreators({ getBattles }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(BattlesIndex);