// @flow

import _ from 'lodash';
import * as React from 'react';

import history from '../../../utilities/history';

import cn from 'classnames';
import styles from './index.pcss';

import {Container, Row, Col, Button} from 'reactstrap';
import {Header} from '../../organisms';

import wordsIdsAsNumbers from '../../../utilities/words_lessons/wordsIdsAsNumbers';
import getWordById from '../../../utilities/words_lessons/getWordById';

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
 * Lesson View component.
 */
class Lesson extends React.Component<Props> {
    // static defaultProps: DefaultProps = {
    //
    // };

    // componentDidMount() {
    //     console.log('lessonId', this.props.lessonId);
    //     console.log('lesson', this.props.lesson);
    //     console.log('words', this.props.words);
    // }
    //
    // componentWillUnmount() {
    //
    // }

    _onQuizStartHandler = () => {
        // eslint-disable-next-line no-invalid-this
        const {lessonId} = this.props;
        history.push(`/quiz/${lessonId}`);
    };


    /**
     * React render
     * @return {React.Component}
     */
    render() {
        // const wordsIds = wordsIdsAsNumbers({wordsIds: this.props.lesson.wordsIds});
        // console.log('wordsId', wordsIdsAsNumbers({wordsIds: this.props.lesson.wordsIds}));
        // console.log('getWordById', getWordById({wordsId: wordsIds[2], words: this.props.words}));


        const {words} = this.props;
        const {wordsIds} = this.props.lesson;


        // const {}
        // console.log('_getWordIds', this._getWordIds({wordsId}));

        return (
            <Container>
                <Header/>

                <Row className={'my-2'}/>

                <Row><Col><b>{this.props.lesson.title}</b></Col></Row>

                <Row className={'my-2'}/>

                <Button
                    color="info" block={true}
                    onClick={this._onQuizStartHandler}
                >
                    Начать тест...
                </Button>

                <Row className={'my-2'}/>

                {_.map(wordsIdsAsNumbers({wordsIds: this.props.lesson.wordsIds}), (v: any, k: number)=>{
                    const word = getWordById({wordsId: v, words: this.props.words});

                    if (!word)
                        return null;

                    return (
                        <div key={k}>
                            {word.id} {word.word_en} [{word.transcript_en}] - {word.word_srb} - {word.word_ru}
                        </div>
                    );
                })}

            </Container>
        );
    }
}

export {Lesson};


import WordsDataContext from '../../../contexts/data';

/**
 * ConnectedStartup
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
                    <Lesson {...props} lessonId={lessonId} lesson={lesson} words={words}/>
                );
            }

            }
        </WordsDataContext.Consumer>
    );
}
