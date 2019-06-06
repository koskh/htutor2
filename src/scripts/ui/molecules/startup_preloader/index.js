// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

// type Props = {
//
// }
//
// type DefaultProps = {
//     data: Object
// };

/**
 * Startup View component.
 */
class Startup extends React.Component<> {
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
            <div className={styles.preloader}></div>
        );
    }
}

export default Startup;
