import * as React from 'react';
import renderer from 'react-test-renderer';

import Component from '../';

import {StartupPreloader} from '../../../molecules';
import DumbComponent from '../../../../../scripts/utilities/templates/component';

import axios from 'axios';

jest.mock('axios');

describe('Startup Component', () => {
    test('Component  need children for render', () => {
        expect(()=>renderer.create(<Component/>)).toThrow();
    });

    test('Component can render', () => {
        const component = renderer.create(<Component><DumbComponent/></Component>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Component render preloader then state.isPending = true', () => {
        const preloaderComponent = renderer.create(<StartupPreloader/>);

        const component = renderer.create(<Component><DumbComponent/></Component>);
        const instance = component.getInstance();

        expect(instance.state.isPending).toBeTruthy();
        expect(component.toJSON()).toEqual(preloaderComponent.toJSON());
    });

    test('Component render children then state.isPending = false', () => {
        const component = renderer.create(<Component><DumbComponent/></Component>);
        const instance = component.getInstance();

        instance.setState({isPending: false});
        expect(component.toJSON()).toEqual(renderer.create(<DumbComponent/>).toJSON());
    });

    test('get application global data', () => {
        const response = {
            data: 'Dumb mock text'
        };
        axios.get.mockResolvedValue(response);

        const component = renderer.create(<Component><DumbComponent/></Component>);
        const instance = component.getInstance();

        return instance.componentDidMount().then(() => {
            expect(instance.state.isPending).toBeFalsy();
        });
    });
});

