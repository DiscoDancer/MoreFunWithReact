import * as React from "react";
import ServiceIcon from "../service-icon.component";
import * as renderer from 'react-test-renderer';
import ServiceIconModel from "../../models/service-icon.model";
import {shallow} from 'enzyme';

const model = new ServiceIconModel(
    "/icon.jpg",
    "/active_icon.jpg",
    "name",
    "description"
);

it("ServiceIcon is being changed visually when activeness is changed", () => {

    // assign/action
    const component = shallow(<ServiceIcon model={model} isActive={false}/>);

    // assert
    expect(component.hasClass("passive")).toBe(true);

    // action
    component.setProps({
        model: model,
        isActive: true
    });

    // assert
    expect(component.hasClass("active")).toBe(true);
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