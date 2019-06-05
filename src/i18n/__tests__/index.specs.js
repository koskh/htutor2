import i18n from '../index';

const DefaultTestSuiteLocale = 'en';
const NotPresentLocale = 'fr';

const localeData ={
    'en': require('../en'),
    'ru': require('../ru')
};

const currencies = require('../currency');

describe('i18n', () => {
    test('return local without region code', () => {
        expect(i18n.getBrowserLocale()).toBe(DefaultTestSuiteLocale);
    });

    test('return locale data ', () => {
        expect(i18n.getMessages(DefaultTestSuiteLocale)).toEqual(localeData[DefaultTestSuiteLocale]);
        expect(i18n.getMessages(NotPresentLocale)).toEqual(localeData[DefaultTestSuiteLocale]);
    });

    test('return locale currency code', () => {
        expect(i18n.getCurrency(DefaultTestSuiteLocale)).toEqual(currencies[DefaultTestSuiteLocale]);
        expect(i18n.getCurrency(NotPresentLocale)).toEqual(currencies[DefaultTestSuiteLocale]);
    });
});
