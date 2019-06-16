// @flow

// import _ from 'lodash';
import * as React from 'react';
import axios from 'axios';

// import styles from './index.pcss';

import WordsDataContext from '../../../contexts/data';

import {StartupPreloader} from '../../molecules';

type Props = {
    setWordsData: Function,
    children: React.Node,
}

type State = {
    isPending: boolean;
}

/**
 * Startup component.
 * It load resources before start application
 */
class Startup extends React.Component<Props, State> {
    static defaultProps: Props = {
        setWordsData: x=>x
    };

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
                    const {setWordsData} = this.props;

                    setWordsData({lessons: results[0].data, words: results[1].data});
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
        const {children} = this.props;
        const {isPending} = this.state;

        return isPending ? <StartupPreloader/> : children;
    }
}


export {Startup};

/**
 * ConnectedStartup
 * Connected Startup component to WordsDataContext
 * @param {props} props
 * @return {React.Node}
 */
export default function ConnectedStartup(props: any) {
    return (
        <WordsDataContext.Consumer>
            { data =>
                <Startup {...props} setWordsData={data.setData}/>
            }
        </WordsDataContext.Consumer>
    );
}
