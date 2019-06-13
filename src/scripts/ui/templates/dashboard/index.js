// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

import {Container, Row, Col} from 'reactstrap';
import {Header} from '../../organisms';

// type Props = {
//
// }
//
// type DefaultProps = {
//     data: Object
// };

/**
 * Dashboard View component.
 */
class Dashboard extends React.Component<*> {
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
            <Container>
                <Header/>

                <Row className={'my-2'}/>

                <Row><Col>Доступные уроки</Col></Row>

            </Container>
        );
    }
}

export default Dashboard;
