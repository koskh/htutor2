import * as React from 'react';
import renderer from 'react-test-renderer';

import Component from '../';

describe('Component', () => {
    test('Component can render', () => {
        const component = renderer.create(<Component />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
