// @flow
import _ from 'lodash';

/**
 * React render
 * @param {options} options
 * @return {Array<number>}
 */
export default function wordsIdsAsNumbers(options) {
    const {wordsIds} = options;

    const numbers = [];
    const words = _.words(wordsIds, /[^, ]+/g);

    _.each(words, (v: any) => {
        if (_.toNumber(v))
            numbers.push(_.toNumber(v));
        else {
            const periodNumbers = _.words(v);
            numbers.push(_.range(_.toNumber(_.first(periodNumbers)), _.toNumber(_.last(periodNumbers)) + 1));
        }
    });

    return _.flatten(numbers);
}
