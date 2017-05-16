

"use strict";

import { Table, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getRatings } from '../actions/index';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router';


class RatingTable extends Component {
    
    constructor(props){
        super(props);

        this.state = { term: '', filter: [] };

        //when a call back function(onInputChange) is provided in onChange and if the
        //callback function makes reference to "this", then "this" will not refer to
        //SearchBar.
        //It will have some other reference. To solve this, bind onInputChange with
        //"this"(SearchBar) in the constructor.
        this.onInputChange = this.onInputChange.bind(this);

    }

    componentWillMount() {
        this.props.getRatings();
    } 

    componentWillReceiveProps(nextProps) {
        
    }


    onInputChange(event) {
        console.log(event.target.value);
        this.setState({term: event.target.value});
        //this.props.filterRatings(event.target.value);
    }

    render() {
        console.log(this.props);
        if(!this.props.ratings) {
            return (
                <div>
                   Loading...
                </div>
            )
        }
        return(
        <div>
            <Table responsive striped bordered hover>
                <thead>
                <tr>
                   <th>Name</th>
                    <th>Elo Rating</th>
                    <th>Number Of Battles Fought</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.ratings.map((row) => {
                        if(row.name > ' ') {
                            return(
                                <tr key={row.name}>
                                    <td>
                                        <Link to={`/kings/${encodeURIComponent(row.name)}`} key={row.name}>{row.name}</Link>
                                    </td>
                                    <td>{row.rating}</td>
                                    <td>{row.num_battles}</td>
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
    { ratings : state.data.ratings }
  );
}

function mapDispatchToProps(dispatch) {
  return(bindActionCreators({ getRatings }, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingTable);