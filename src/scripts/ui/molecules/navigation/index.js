// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

import {NavLink} from 'react-router-dom';


// type Props = {
//
// }
//
// type DefaultProps = {
//     data: Object
// };

/**
 * View component.
 */
class Component extends React.Component<> {
    // static defaultProps: DefaultProps = {
    //
    // };

    // componentDidMount() {
    //
    // }
    //
    // componentWillUnmount() {
    //
    // }


    /**
     * React render
     * @return {React.Component}
     */
    render() {
        return (
            <nav>
                <NavLink to={`/dashboard`}>Dashboard</NavLink>
                <NavLink to={`/settings`}>Settings</NavLink>
            </nav>
        );
    }
}

export default Component;
