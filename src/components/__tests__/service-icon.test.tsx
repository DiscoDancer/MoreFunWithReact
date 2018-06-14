import * as React from "react";
import ServiceIcon from "../service-icon.component";
import * as renderer from 'react-test-renderer';
import ServiceIconModel from "../../models/service-icon.model";

test('ServiceIcon passive by props snapshot test', () => {

    const model = new ServiceIconModel(
        "/icon.jpg",
        "/active_icon.jpg",
        "name",
        "description"
    );

    const component = renderer.create(
        <ServiceIcon model={model} isActive={false}/>,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('ServiceIcon active by props snapshot test', () => {

    const model = new ServiceIconModel(
        "/icon.jpg",
        "/active_icon.jpg",
        "name",
        "description"
    );

    const component = renderer.create(
        <ServiceIcon model={model} isActive={true}/>,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
