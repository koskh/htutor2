// @flow
import _ from 'lodash';

/**
 * React render
 * @param {options} options
 * @return {Object}
 */
export default function getRandomWords(options: { excludedWordId: number, words: Array<*>, quantity: number}): Array<*> {
    const MAX_RECURSION = 3;
    const {excludedWordId, words, quantity = 6} = options;

    const found = {};

    for (let i = 0; i < quantity; i++) {
        const w = getRandomWord(excludedWordId, words, found);

        found[w.id] = w;
    }

    return _.map(found, v => v);

    function getRandomWord(excludedWordId: number, words: Array<*>, found: object, recursionStep = 0) {
        const w = _.sample(words);
        return recursionStep >= MAX_RECURSION || !_.has(found, w.id) && w.id !== excludedWordId ? w : getRandomWord(excludedWordId, words, found, ++recursionStep);
    }
}
