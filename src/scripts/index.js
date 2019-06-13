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


import DataContext from './contexts/data';
import SettingsContext from './contexts/settings';

/**
 * Application component.
 * Bunch application opntext to  it's state
 */
class App extends React.Component<*> {
    setData = options => {
        const {lessons, words} = options;
        // eslint-disable-next-line no-invalid-this
        this.setState({data: {lessons, words}});
    };

    state = {
        data: {lessons: [], words: []},
        settings: {theme: 'light'},
        // eslint-disable-next-line no-invalid-this
        setData: this.setData
    };

    setData = options => {
        const {lessons, words} = options;
        // eslint-disable-next-line no-invalid-this
        this.setState({data: {lessons, words}});
    };

    render() {
        return (
            <IntlProvider locale={locale} messages={messages}>

                <SettingsContext.Provider value={this.state.settings}>
                    <DataContext.Provider value={{data: this.state.data, setData: this.state.setData}}>

                        <Startup>

                            <Router history={history}>
                                <Switch>
                                    <Route exact={true} path={'/'} component={Dashboard}/>
                                    <Route path={'/lesson'} component={Lesson}/>
                                    <Route path={'/quiz'} component={Quiz}/>
                                    <Route path={'/settings'} component={Settings}/>

                                    <Route render={() => <Redirect to={'/'}/>}/>
                                </Switch>
                            </Router>

                        </Startup>

                    </DataContext.Provider>
                </SettingsContext.Provider>

            </IntlProvider>
        );
    }
}

render(<App/>, document.querySelector('#root'));