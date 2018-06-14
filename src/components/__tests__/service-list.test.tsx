import * as React from "react";
import * as renderer from "react-test-renderer";
import ServiceIconModel from "../../models/service-icon.model";
import ServiceListModel from "../../models/service-list.model";
import ServiceList from "../service-list.component";
import {mount} from "enzyme";

const fakeData = new ServiceListModel([
    new ServiceIconModel("http://elo.dev.localhost/-/media/toimitilat_elo_fi-kuvat/palveluikonit/64px/ke_k.ashx?h=100&amp;w=100&amp;la=fi-FI&amp;hash=AD46B11FB0D795D9705443A66BDCFE22EF86E694",
        "http://elo.dev.localhost/-/media/toimitilat_elo_fi-kuvat/palveluikonit/64px/ke_h.ashx?h=100&w=101&la=fi-FI&hash=025C1206A4F4B594BF55BF72F2F7D317DE19F715",
        "Keskustan palvelut",
        "Keskeisen sijainnin ansiosta kaikki keskustan palvelut helposti saavutettavissa."),
    new ServiceIconModel("http://elo.dev.localhost/-/media/toimitilat_elo_fi-kuvat/palveluikonit/64px/ke_k.ashx?h=100&amp;w=100&amp;la=fi-FI&amp;hash=AD46B11FB0D795D9705443A66BDCFE22EF86E694",
        "http://elo.dev.localhost/-/media/toimitilat_elo_fi-kuvat/palveluikonit/64px/ke_h.ashx?h=100&w=101&la=fi-FI&hash=025C1206A4F4B594BF55BF72F2F7D317DE19F715",
        "Keskustan palvelut2",
        "Keskeisen sijainnin ansiosta kaikki keskustan palvelut helposti saavutettavissa.2"),
    new ServiceIconModel("http://elo.dev.localhost/-/media/toimitilat_elo_fi-kuvat/palveluikonit/64px/ke_k.ashx?h=100&amp;w=100&amp;la=fi-FI&amp;hash=AD46B11FB0D795D9705443A66BDCFE22EF86E694",
        "http://elo.dev.localhost/-/media/toimitilat_elo_fi-kuvat/palveluikonit/64px/ke_h.ashx?h=100&w=101&la=fi-FI&hash=025C1206A4F4B594BF55BF72F2F7D317DE19F715",
        "Keskustan palvelut3",
        "Keskeisen sijainnin ansiosta kaikki keskustan palvelut helposti saavutettavissa.3"),
]);

const fakeDataService = {
    getServiceListModel: (propertyId: string) => Promise.resolve(fakeData)
};

it("ServiceList is being changed visually when ServiceIcon is clicked", () => {

    const component = mount(<ServiceList dataService={fakeDataService} propertyId={""}/>);


    return Promise
        .resolve(component)
        .then(() => {
            component.update();

            // find service icons node
            let lis = component.find('ul li');

            // assert: there are 3 of them
            expect(lis.length).toBe(3);

            // assert: all have passive state
            component.find('ul li').forEach(node => {
                expect(node.hasClass("passive")).toBe(true);
            });

            // assert: description is empty
            expect(component.find(".description").at(0).text()).toEqual("");

            // action: do click and then update parsed nodes
            lis.at(0).simulate("click");
            component.update();
            lis = component.find('ul li');

            // assert service icons state
            expect(lis.at(0).hasClass("active")).toBe(true);
            expect(lis.at(1).hasClass("passive")).toBe(true);
            expect(lis.at(2).hasClass("passive")).toBe(true);

            // assert description is updated
            expect(component.find(".description").at(0).text()).toEqual(fakeData.serviceIcons[0].Description);
        });
});

test('ServiceList snapshot test', () => {
        const component = renderer.create(
            <ServiceList dataService={fakeDataService} propertyId={""}/>,
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    }
);
