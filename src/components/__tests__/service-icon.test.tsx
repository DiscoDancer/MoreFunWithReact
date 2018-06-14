import * as React from "react";
import * as ReactDOM from "react-dom";
import ServiceIcon from "../service-icon.component";
import * as renderer from 'react-test-renderer';
import ServiceIconModel from "../../models/service-icon.model";
import * as TestUtils from 'react-dom/test-utils';
import {shallow} from 'enzyme';

const model = new ServiceIconModel(
    "/icon.jpg",
    "/active_icon.jpg",
    "name",
    "description"
);

it("ServiceIcon is being changed visually after click", () => {

    const component = shallow(<ServiceIcon model={model} isActive={false}/>);

    component.hasClass("passive");

    expect(component.hasClass("passive")).toBe(true);
});

test('ServiceIcon passive by props snapshot test', () => {

    const component = renderer.create(
        <ServiceIcon model={model} isActive={false}/>,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('ServiceIcon active by props snapshot test', () => {
    const component = renderer.create(
        <ServiceIcon model={model} isActive={true}/>,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
