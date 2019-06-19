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

    _onSend = (options: any) => {
        // eslint-disable-next-line no-invalid-this
        const {wordId, words} = this.props;
        const {id} = options;

        if (wordId === id) {
            // eslint-disable-next-line no-invalid-this
            this.props.onSend();
        }

    };

    /**
     * React render
     * @return {React.Component}
     */
    render() {
        const {wordId, words} = this.props;
        const LNGS = ['en', 'srb', 'ru'];

        const quizLng = _.sample(LNGS);
        _.remove(LNGS, v => v === quizLng);

        const word = getWordById({wordsId: wordId, words: words});

        const QNT_VARIANTS = 6;
        const variants = getRandomWords({excludedWordId: wordId, words, quantity: QNT_VARIANTS});

        const answers = _.shuffle([...variants, word]);


        return (
            <React.Fragment>
                <Row>
                    <Col className={'text-center font-weight-bold'}>
                        {_.get(word, `word_${quizLng}`)}
                    </Col>
                </Row>

                <Row className={'my-2'}/>

                {_.map(answers, (v: any, k: number) => {
                    const lng = _.sample(LNGS);

                    return (
                        <Button key={k} outline={true} color="info" block={true}
                                onClick={() => this._onSend({id: v.id})}
                        >
                            {_.get(v, `word_${lng}`)}
                        </Button>
                    );
                })}


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

