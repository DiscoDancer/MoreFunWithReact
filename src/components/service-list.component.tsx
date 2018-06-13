import * as React from "react";

import ServiceIcon from "./service-icon.component";

interface ServiceListState {

}

interface ServiceListProps {

}

export default class ServiceList extends React.Component<ServiceListProps, ServiceListState> {
    render() {
        return (
            <div>
                <ServiceIcon/>
                <ServiceIcon/>
                <ServiceIcon/>
            </div>
        );
    }
}