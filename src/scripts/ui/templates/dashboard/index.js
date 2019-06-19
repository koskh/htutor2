// @flow

import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

import history from '../../../utilities/history';

import {Container, Row, Col, Button} from 'reactstrap';
import {Header} from '../../organisms';


type Props = {
    defaultData: any
}
//
// type DefaultProps = {
//     data: Object
// };

/**
 * Dashboard View component.
 */
class Dashboard extends React.Component<Props> {
    static defaultProps: Props = {
        defaultData: {lessons: [], words: []}
    };

    // componentDidMount() {
    //
    // }
    //
    // componentWillUnmount() {
    //
    // }

    _onClickHandler = (options: any) => {
        const {id} = options;
        history.push(`lesson/${id}`);
    };


    /**
     * React render
     * @return {React.Component}
     */
    render() {
        const {lessons} = this.props.defaultData;

        return (
            <Container>
                <Header/>

                <Row className={'my-2'}/>

                {_.map(lessons, (v: any, k: number) => {
                    return (
                        <Button key={k}
                            color="secondary" block={true}
                            onClick={() => this._onClickHandler({id: v.id})}>
                            {v.title}
                        </Button>
                    );
                })}

            </Container>
        );
    }
}

export {Dashboard};


import WordsDataContext from '../../../contexts/data';

/**
 * ConnectedStartup
 * Connected Startup component to WordsDataContext
 * @param {props} props
 * @return {React.Node}
 */
export default function ConnectedDashboard(props: any) {
    return (
        <WordsDataContext.Consumer>
            {({data}) =>
                <Dashboard {...props} defaultData={data}/>
            }
        </WordsDataContext.Consumer>
    );
}
