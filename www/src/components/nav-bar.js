

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import React, {Component} from 'react';

export default class extends Component {

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">GAME OF THRONES</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Toggle />
                
            </Navbar>
        );
    }
} 