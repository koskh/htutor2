// @flow

// import _ from 'lodash';
import * as React from 'react';

import styles from './index.pcss';

import {Button} from 'reactstrap';


type Props = {
    defaultData: {
        title: string,
        id: string
    }
}
//
// type DefaultProps = {
//     data: Object
// };

/**
 * View component.
 */
class Lesson extends React.Component<Props> {
    static defaultProps: Props = {
        defaultData: {
            title: '',
            id: ''
        }
    };

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
            null
        );
    }
}

export default Lesson;
