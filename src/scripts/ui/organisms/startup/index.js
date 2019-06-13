// @flow

// import _ from 'lodash';
import * as React from 'react';
// import styles from './index.pcss';

import axios from 'axios';

import WordsDataContext from '../../../contexts/data';

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

    static contextType = WordsDataContext;

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
            .then(
                results => {
                    this.context && this.context.setData({lessons: results[0].data, words: results[1].data});
                    this.setState && this.setState({isPending: false, data: results});
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
        console.log('this.context', this.context)

        const {children} = this.props;
        const {isPending} = this.state;

        return isPending ? <StartupPreloader/> : children;
    }
}

export default Startup;
