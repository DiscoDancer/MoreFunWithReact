import * as React from "react";
import * as renderer from "react-test-renderer";
import ServiceIconModel from "../../models/service-icon.model";
import ServiceListModel from "../../models/service-list.model";
import ServiceList from "../service-list.component";
import {mount} from "enzyme";

const fakeData = new ServiceListModel([
    new ServiceIconModel("https://toimitilat.elo.fi/-/media/toimitilat_elo_fi-kuvat/palveluikonit/64px/ke_k.ashx?h=75&amp;w=75&amp;la=fi-FI&amp;hash=CDBA18119596D6C82E72B3CC99A740C86724C9CE",
        "https://toimitilat.elo.fi/-/media/toimitilat_elo_fi-kuvat/palveluikonit/64px/ke_h.ashx?h=75&amp;w=75&amp;la=fi-FI&amp;hash=EEB4F350F70835B33356C8DBFE8F3AEC2298FB3A",
        "Keskustan palvelut",
        "Keskeisen sijainnin ansiosta kaikki keskustan palvelut helposti saavutettavissa."),
    new ServiceIconModel("https://toimitilat.elo.fi/-/media/toimitilat_elo_fi-kuvat/palveluikonit/64px/ru_k.ashx?h=75&amp;w=75&amp;la=fi-FI&amp;hash=A02376C544198D14DA1184A844C89BC6BE4784B5",
        "https://toimitilat.elo.fi/-/media/toimitilat_elo_fi-kuvat/palveluikonit/64px/ru_h.ashx?h=75&amp;w=75&amp;la=fi-FI&amp;hash=864B9D73A68E47602E33316B1C8D45348133BC3B",
        "Lounas",
        "Kiinteistössä palvelevien ravintoloiden lisäksi keskustan kattava lounasravintolatarjonta helposti saavutettavissa kiinteistön loistavan sijainnin ansiosta."),
    new ServiceIconModel("https://toimitilat.elo.fi/-/media/toimitilat_elo_fi-kuvat/palveluikonit/64px/py_k.ashx?h=75&amp;w=75&amp;la=fi-FI&amp;hash=6AD90BEEED2F3589026C47358755359864821433",
        "https://toimitilat.elo.fi/-/media/toimitilat_elo_fi-kuvat/palveluikonit/64px/py_h.ashx?h=75&amp;w=75&amp;la=fi-FI&amp;hash=42286B5103DBDE784A111B6B6148237722F2F238",
        "Pysäköinti",
        "Kellarikerroksessa on omia pysäköintipaikkoja ja lähietäisyydellä useita pysäköintihalleja."),
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

        component.root.instance.setState({
            model: fakeData,
            iconStates: Array(3).fill(false),
            description: ""
        });

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    }
);
