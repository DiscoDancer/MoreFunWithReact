import * as React from "react";
import * as renderer from "react-test-renderer";
import ServiceIconModel from "../../models/service-icon.model";
import ServiceListModel from "../../models/service-list.model";
import ServiceList from "../service-list.component";

test('ServiceList snapshot test', () => {

        const fakeDataService = {
            serviceListModel: Promise.resolve(new ServiceListModel([
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
            ]))
        };

        const component = renderer.create(
            <ServiceList dataService={fakeDataService}/>,
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    }
);
