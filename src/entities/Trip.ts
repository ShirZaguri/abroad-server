import Attraction from './Attraction';

export interface ITrip {
    destination: string;
    attractions: [{ attraction: Attraction; date: Date }];
    startDate: Date;
    endDate: Date;
    img: string;
}

// TODO: update entity
class Trip implements ITrip {
    public id: number;
    public destination: string;
    public attractions: [{ attraction: Attraction; date: Date }];
    public startDate: Date;
    public endDate: Date;
    public img: string;

    constructor(
        id: number,
        destination: string,
        attractions: [{ attraction: Attraction; date: Date }],
        startDate: Date,
        endtDate: Date,
        img: string
    ) {
        this.id = id;
        this.destination = destination;
        this.attractions = attractions;
        this.startDate = startDate;
        this.endDate = endtDate;
        this.img = img;
    }
}

export default Trip;
