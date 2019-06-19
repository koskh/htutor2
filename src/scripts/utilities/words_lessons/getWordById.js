// @flow
import _ from 'lodash';

/**
 * React render
 * @param {options} options
 * @return {Object}
 */
export default function getWordById(options: {wordsId: number, words: Array<*>}): ?Object {
    const {wordsId, words} = options;

    return _.get(words, `${wordsId}`, _.find(words, v=> v.id === wordsId));
}
