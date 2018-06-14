import * as React from "react";
import ServiceIconModel from "../models/service-icon.model";

interface ServiceIconState {

}

interface ServiceIconProps {
    model: ServiceIconModel;
    isActive: boolean;
    onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}

export default class ServiceIcon extends React.Component<ServiceIconProps, ServiceIconState> {
    render() {
        const activityClass = this.props.isActive ? "active" : "passive";

        return (
            <li
                className={"col-2 service-icon " + activityClass}
                onClick={this.props.onClick}
            >
                <figure>
                    <img
                        className={"passive-image"}
                        src={this.props.model.imageUrl}
                        alt="service icon image"
                    />
                    <img
                        className={"active-image"}
                        src={this.props.model.ActiveImageUrl}
                        alt="service icon image when it's active"
                    />
                    <figcaption>
                        {this.props.model.Name}
                    </figcaption>
                </figure>
            </li>
        );
    }
}