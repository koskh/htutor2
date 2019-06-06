import {addLocaleData} from 'react-intl';

import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

addLocaleData([...en, ...ru]);

const localeData = {
    'en': require('../i18n/en'),
    'ru': require('../i18n/ru')
};

const DefaultLocale = localeData.en;


export default {
    getBrowserLocale() {
        const language = (navigator.languages && navigator.languages.toString().split(',')[0]) || navigator.language || navigator.userLanguage;
        return language.toLowerCase().split(/[_-]+/)[0];
    },

    getMessages(languageWithoutRegionCode) {
        return localeData[languageWithoutRegionCode] || DefaultLocale;
    }
};
