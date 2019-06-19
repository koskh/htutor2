// @flow

import _ from 'lodash';
import * as React from 'react';

import styles from './index.pcss';

import {Container, Row, Col} from 'reactstrap';
import {Header} from '../../organisms';

import wordsIdsAsNumbers from '../../../utilities/words_lessons/wordsIdsAsNumbers';
import getWordById from '../../../utilities/words_lessons/getWordById';

import Quiz1 from '../../organisms/quiz_1';

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

    _onSend = () => {

    }

    /**
     * React render
     * @return {React.Component}
     */
    render() {
        // const wordsIds = wordsIdsAsNumbers({wordsIds: this.props.lesson.wordsIds});
        // console.log('wordsId', wordsIdsAsNumbers({wordsIds: this.props.lesson.wordsIds}));
        // console.log('getWordById', getWordById({wordsId: wordsIds[2], words: this.props.words}));

        return (
            <Container>
                <Header/>

                <Row className={'my-2'}/>

                <Quiz1 wordId={0} onSend={this._onSend}/>

            </Container>
        );
    }
}

export {Quiz};

import WordsDataContext from '../../../contexts/data';

/**
 * ConnectedQuiz
 * Connected Startup component to WordsDataContext
 * @param {props} props
 * @return {React.Node}
 */
export default function ConnectedLesson(props: any) {
    return (
        <WordsDataContext.Consumer>
            {({data}) => {
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
