// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

import {Container, Row, Col} from 'reactstrap';
import {Header} from '../../organisms';
import WordsDataContext from "../../../contexts/data";
import _ from "lodash";
import {Lesson} from "../lesson";

type Props = {
    lesson: {
        id: number,
        title: string,
        wordsIds: string
    },
    words: Array<*>,
    lessonId: string
}
//
// type DefaultProps = {
//     data: Object
// };

/**
 * Quiz View component.
 */
class Quiz extends React.Component<Props> {
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

                <Row><Col>Quiz</Col></Row>

            </Container>
        );
    }
}

export {Quiz};

/**
 * ConnectedQuiz
 * Connected Startup component to WordsDataContext
 * @param {props} props
 * @return {React.Node}
 */
export default function ConnectedLesson(props: any) {
    return (
        <WordsDataContext.Consumer>
            {({data}) =>{
                const lessonId = _.get(props, 'match.params.id');
                const lesson = _.get(data, `lessons[${lessonId}]`);
                const words = _.get(data, `words`);

                return (
                    <Quiz {...props} lessonId={lessonId} lesson={lesson} words={words}/>
                );
            }

            }
        </WordsDataContext.Consumer>
    );
}