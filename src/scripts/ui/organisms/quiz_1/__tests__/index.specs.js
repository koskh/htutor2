import * as React from 'react';
import renderer from 'react-test-renderer';

import {BrowserRouter as Router} from 'react-router-dom';

import Component from '../';

describe('Component', () => {
    test('Component can render', () => {
        const component = renderer.create(<Router><Component/></Router>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
