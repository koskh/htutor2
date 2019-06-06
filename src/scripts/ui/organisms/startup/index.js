// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

import {StartupPreloader} from '../../molecules';

type Props = {
    children?: React.Node,
}
//
// type DefaultProps = {
//     data: Object
// };

/**
 * Startup component.
 * It load resources before start application
 */
class Startup extends React.Component<Props> {
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
        const {children} = this.props;

        const isPending = true;

        return isPending ? <StartupPreloader/>: children;
    }
}

export default Startup;
