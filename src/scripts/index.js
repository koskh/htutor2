// @flow

import '@babel/polyfill';

import React from 'react';
import {render} from 'react-dom';

import {IntlProvider} from 'react-intl';
import i18n from '../i18n';

const locale = i18n.getBrowserLocale();
const messages = i18n.getMessages(locale);

import {Router, Redirect, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

import {Startup} from './ui/organisms';
import {Dashboard, Lesson, Quiz, Settings} from './ui/templates';

window.application_data = {}; // global applcation storage, MVP version

render(
    <IntlProvider locale={locale} messages={messages}>
        <Startup>

            {/*<Router history={history}>*/}
            {/*    <Switch>*/}
            {/*        <Route exact={true} path={'/'} component={Dashboard}/>*/}
            {/*        <Route path={'/lesson'} component={Lesson}/>*/}
            {/*        <Route path={'/quiz'} component={Quiz}/>*/}
            {/*        <Route path={'/settings'} component={Settings}/>*/}

            {/*        <Route render={() => <Redirect to={'/'}/>}/>*/}
            {/*    </Switch>*/}
            {/*</Router>*/}

        </Startup>
    </IntlProvider>,
    document.querySelector('#root')
);
