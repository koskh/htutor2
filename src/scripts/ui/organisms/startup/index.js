// @flow

// import _ from 'lodash';
import * as React from 'react';
// import styles from './index.pcss';

import axios from 'axios';

import {StartupPreloader} from '../../molecules';

type Props = {
    children: React.Node,
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
        error: '',
        data: null
    };

    /**
     * React componentDidMount
     * @return {Promise}
     */
    componentDidMount() {
        return Promise.all([
            axios.get('/assets/lessons.json'),
            axios.get('/assets/words.json')
        ])
        // return new Promise(resolve=> resolve('123'))
            .then(
                result => {
                    // _.set(window.applicationdata, 'lessons', results[0].data);
                    // _.set(window.application_data, 'words', results[0].data);
                    this.setState({isPending: false, data: result});
                },
                reject => {
                    console.error(reject);
                }
            );
    }

    //
    // componentWillUnmount() {
    //
    // }


    /**
     * React render
     * @return {React.Element}
     */
    render() {
        const {children} = this.props;
        const {isPending} = this.state;

        return isPending ? <StartupPreloader/> : children;
    }
}

export default Startup;
