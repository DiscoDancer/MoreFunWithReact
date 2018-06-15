import ServiceListModel from "../models/service-list.model";
import ServiceIconModel from "../models/service-icon.model";

export interface DataService {
    getServiceListModel: (propertyId: string) => Promise<ServiceListModel>;
}

export default class ApiService implements DataService {
    constructor() {}

    getServiceListModel(propertyId: string): Promise<ServiceListModel> {
        return Promise.resolve(new ServiceListModel([
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
        ]));
    }
}