// @flow

import _ from 'lodash';
import * as React from 'react';

import styles from './index.pcss';

import {Row, Col, Button} from 'reactstrap';


import wordsIdsAsNumbers from '../../../utilities/words_lessons/wordsIdsAsNumbers';
import getWordById from '../../../utilities/words_lessons/getWordById';
import getRandomWords from '../../../utilities/words_lessons/getRandomWords';

type Props = {
    wordId: number,
    words: Array<*>,
    onSend: Function
}
//
type DefaultProps = {
    onSend: Function
};

/**
 * View component.
 */
class Quiz1 extends React.Component<Props> {
    static defaultProps: DefaultProps = {
        onSend: x => x
    };

    // componentDidMount() {
    //
    // }
    //
    // componentWillUnmount() {
    //
    // }

    _onSend = () => {
        // eslint-disable-next-line no-invalid-this
        this.props.onSend();
    };

    /**
     * React render
     * @return {React.Component}
     */
    render() {
        const {wordId, words} = this.props;

        const LNGS = ['en', 'srb', 'ru'];
        const quizLng = _.sample(LNGS);

        const word = getWordById({wordsId: wordId, words: words});

        const quizWord = _.get(word, `word_${quizLng}`);
        const answerWords = _.compact(_.map(LNGS, (v: String) => {
            return v !== quizLng ? _.get(word, `word_${v}`) : '';
        }));

        const QNT_VARIANTS = 6;
        const variants = getRandomWords({excludedWordId: wordId, words, quantity: QNT_VARIANTS});


        console.log('answerWords', answerWords);
        console.log('variants', variants);

        return (
            <React.Fragment>
                <Row>
                    <Col className={'text-center font-weight-bold'}>
                        {quizWord}
                    </Col>
                </Row>

            </React.Fragment>
        );
    }
}

export {Quiz1};

import WordsDataContext from '../../../contexts/data';
import Container from 'reactstrap/es/Container';

/**
 * ConnectedQuiz1
 * Connected Startup component to WordsDataContext
 * @param {props} props
 * @return {React.Node}
 */
export default function ConnectedQuiz1(props: any) {
    return (
        <WordsDataContext.Consumer>
            {({data}) => {
                const words = _.get(data, `words`);

                return (
                    <Quiz1 {...props} words={words}/>
                );
            }

            }
        </WordsDataContext.Consumer>
    );
}

