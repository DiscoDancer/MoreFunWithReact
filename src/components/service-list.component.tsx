import * as React from "react";

import ServiceIcon from "./service-icon.component";
import ServiceListModel from "../models/service-list.model";
import ApiService from "../services/api.service";
import ServiceIconModel from "../models/service-icon.model";
import CopyService from "../services/copy-service";

interface ServiceListState {
    model: ServiceListModel
    iconStates: Array<boolean>;
    description: string;
}

interface ServiceListProps {

}

export default class ServiceList extends React.Component<ServiceListProps, ServiceListState> {

    constructor(props: ServiceListProps) {
        super(props);

        this.state = {
            model: new ServiceListModel([]),
            iconStates: [],
            description: ""
        };
    }

    handleIconClicked(index: number) {

        const copyModel = CopyService.deepcopy<ServiceListModel>(this.state.model);
        const newStates = Array(copyModel.serviceIcons.length).fill(false);
        newStates[index] = true;

        this.setState({
            model: copyModel,
            iconStates: newStates,
            description: copyModel.serviceIcons[index].Description
        });
    }

    componentDidMount() {
        const self = this;
        ApiService.propertyServices.then((model) => {
            self.setState({
                model: model,
                iconStates: Array(model.serviceIcons.length).fill(false),
                description: ""
            });
        }).catch((err) => {
            console.log("error " + err);
        });
    }

    renderServiceIcon(model: ServiceIconModel, index: number) {
        return (
            <ServiceIcon
                model={model}
                isActive={this.state.iconStates[index]}
                onClick={() => this.handleIconClicked(index)}
            />
        );
    }

    render() {
        const serviceIcons = this.state.model.serviceIcons
            .map((m, index) => this.renderServiceIcon(m,index));

        return (
            <section className={"service-list"}>
                <ul className={"row"}>
                    {serviceIcons}
                </ul>
                <div className={"description"}>
                    {this.state.description}
                </div>
            </section>
        );
    }
}