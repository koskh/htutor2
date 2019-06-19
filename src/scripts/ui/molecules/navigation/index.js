// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

import { NavLink } from 'react-router-dom';
import {Nav, NavItem} from 'reactstrap';


/**
 * View component.
 */
class Component extends React.Component<> {

    /**
     * React render
     * @return {React.Component}
     */
    render() {
        return (
            <Nav>
                <NavItem>
                    <NavLink  to="/dashboard" className="nav-link" activeClassName="active" >Dashboard</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink to="/settings" className="nav-link" activeClassName="active" >Settings</NavLink>
                </NavItem>
            </Nav>
        );
    }
}

export default Component;
