export interface IAttraction {
    id: number;
    name: string;
    price: number;
    description: string;
}

class Attraction implements IAttraction {
    public id: number;
    public name: string;
    public price: number;
    public description: string;

    constructor(attraction: IAttraction) {
        this.name = attraction.name;
        this.id = attraction.id;
        this.price = attraction.price;
        this.description = attraction.description;
    }
}

export default Attraction;
