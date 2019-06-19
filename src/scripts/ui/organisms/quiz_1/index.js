// @flow

import _ from 'lodash';
import * as React from 'react';

import styles from './index.pcss';

import {Row, Col, Button} from 'reactstrap';


import wordsIdsAsNumbers from '../../../utilities/words_lessons/wordsIdsAsNumbers';
import getWordById from '../../../utilities/words_lessons/getWordById';

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
        const LNGS = ['en', 'srb', 'ru'];
        const quizLng = _.sample(LNGS);

        const word = getWordById({wordsId: this.props.wordId, words: this.props.words});

        const quizWord = _.get(word, `word_${quizLng}`);

        console.log('quizWord', quizWord);

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

