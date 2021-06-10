export interface IAttraction {
    id: number;
    name: string;
    img: string;
    description: string;
}

class Attraction implements IAttraction {
    public id: number;
    public name: string;
    public img: string;
    public description: string;

    constructor(attraction: IAttraction) {
        this.name = attraction.name;
        this.id = attraction.id;
        this.img = attraction.img;
        this.description = attraction.description;
    }
}

export default Attraction;
