import * as React from "react";

import ServiceIcon from "./service-icon.component";
import ServiceListModel from "../models/service-list.model";
import ApiService from "../services/api.service";

interface ServiceListState {
    model: ServiceListModel
}

interface ServiceListProps {

}

export default class ServiceList extends React.Component<ServiceListProps, ServiceListState> {

    constructor(props: ServiceListProps) {
        super(props);

        this.state = {
            model: new ServiceListModel([]),
        };
    }

    componentDidMount() {
        const self = this;
        ApiService.propertyServices.then((model) => {
            self.setState({
                model
            });
        }).catch((err) => {
            console.log("error " + err);
        });
    }

    render() {
        const serviceIcons = this.state.model.serviceIcons.map((m, index) => {
            return (
                <ServiceIcon
                    model={m}
                    isActive={false}
                />
            );
        });

        return (
            serviceIcons
        );
    }
}