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

import {Dashboard, Lesson, Quiz, Settings} from './ui/templates';

render(
    <IntlProvider locale={locale} messages={messages}>
        <Router history={history}>
            <Switch>
                <Route exact={true} path={'/'} component={Dashboard}/>
                <Route path={'/lesson'} component={Lesson}/>
                <Route path={'/quiz'} component={Quiz}/>
                <Route path={'/settings'} component={Settings}/>

                <Route render={() => <Redirect to={'/'}/>}/>
            </Switch>
        </Router>
    </IntlProvider>,
    document.querySelector('#root')
);
