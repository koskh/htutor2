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
    onSend: Function,

    settings: {
        availabledLngs: Array<string>
    }

}
//
type DefaultProps = {
    settings: {
        availabledLngs: Array<string>
    },
    onSend: Function
};

type State = {
    isCorrect: ?boolean,
    quizLng: string
}

/**
 * View component.
 */
class Quiz1 extends React.Component<Props, State> {
    static defaultProps: DefaultProps = {
        settings: {
            availabledLngs: ['en', 'srb', 'ru']
        },
        onSend: x => x
    };

    state: State = {
        // eslint-disable-next-line no-invalid-this
        quizLng: _.sample(this.props.settings.availabledLngs),
        isCorrect: undefined
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
            this.props.onSend({isCorrect: true});
            // eslint-disable-next-line no-invalid-this
            this.setState({isCorrect: true});
        } else
        // eslint-disable-next-line no-invalid-this
            this.setState({isCorrect: false});
    };

    /**
     * React render
     * @return {React.Component}
     */
    render() {
        const {wordId, words, settings} = this.props;
        const {quizLng} = this.state;

        const variantsLngs = _.without(settings.availabledLngs, quizLng);

        const word = getWordById({wordsId: wordId, words: words});
        const quizWord = _.get(word, `word_${quizLng}`);
        const quizTranslate = _.get(word, `transcript_${quizLng}`);
        const quizAddition = _.get(word, `addition_${quizLng}`);

        const quizIndex = _.random(_.words(quizWord, /[^,]+/g).length - 1);

        const QNT_VARIANTS = 6;
        const variants = getRandomWords({excludedWordId: wordId, words, quantity: QNT_VARIANTS});

        const answers = _.shuffle([...variants, word]);

        return (
            <React.Fragment>
                <Row>
                    <Col className={'text-center font-weight-bold'}>
                        <Button color={this.state.isCorrect === false ? 'danger' : 'light'} block={true}>
                            {_.get(_.words(quizWord, /[^,]+/g), quizIndex)}&nbsp;
                            {quizTranslate ? `[${_.get(_.words(quizTranslate, /[^,]+/g), quizIndex)}]` : ''}
                            {quizAddition ? `(${_.get(_.words(quizAddition, /[^,]+/g), quizIndex)})` : ''}
                        </Button>
                    </Col>
                </Row>

                <Row className={'my-2'}/>

                {_.map(answers, (v: any, k: number) => {
                    const lng = _.sample(variantsLngs);
                    const addition = _.get(v, `addition_${lng}`);

                    return (
                        <Button key={k} outline={true} color="info" block={true}
                            onClick={() => this._onSend({id: v.id})}
                        >
                            {_.sample(_.words(_.get(v, `word_${lng}`), /[^,]+/g))}
                            &nbsp; {addition? `(${addition})`: ''}

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

