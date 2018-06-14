import * as React from "react";
import ServiceIconModel from "../models/service-icon.model";

interface ServiceIconState {

}

interface ServiceIconProps {
    model: ServiceIconModel;
    isActive: boolean;
}

export default class ServiceIcon extends React.Component<ServiceIconProps, ServiceIconState> {
    render() {
        return (
            <h1>I am a service icon</h1>
        );
    }
}