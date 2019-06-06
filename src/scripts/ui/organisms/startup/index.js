// @flow

import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

import axios from 'axios';

import {StartupPreloader} from '../../molecules';

type Props = {
    children?: React.Node,
}
//
// type DefaultProps = {
//     data: Object
// };

type State = {
    isPending: boolean;
}

/**
 * Startup component.
 * It load resources before start application
 */
class Startup extends React.Component<Props, State> {
    // static defaultProps: DefaultProps = {
    //
    // };

    state: State = {
        isPending: true,
        error: ''
    };

    componentDidMount() {
        Promise.all([
            axios.get('/assets/lessons.json'),
            axios.get('/assets/words.json')
        ]).then(
            results => {
                _.set(window.application_data, 'lessons', results[0].data);
                _.set(window.application_data, 'words', results[0].data);
                // console.log(results);

                this.setState({isPending: false});
            },
            error => console.error(error));
    }

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
        const {isPending} = this.state;

        return isPending ? <StartupPreloader/> : children;
    }
}

export default Startup;
