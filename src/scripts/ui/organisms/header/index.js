// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

import {Row, Col} from 'reactstrap';
import {Navigation} from '../../molecules';


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
class Header extends React.Component<> {
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
            <Row>
                <Col xs={2}>Logo</Col>
                <Col>
                    <Navigation/>
                </Col>
            </Row>
        );
    }
}

export default Header;
