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
 * Settings View component.
 */
class Settings extends React.Component<> {
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

                <Row><Col>Settings</Col></Row>

            </Container>
        );
    }
}

export default Settings;
