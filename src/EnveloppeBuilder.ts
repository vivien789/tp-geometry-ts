import Enveloppe from "./Enveloppe";
import Coordinate from "./Coordinate";

export default class EnveloppeBuilder {

    private coordinates?: Array<Coordinate>;

    constructor(coordinates?: Coordinate) {
        this.coordinates = Array(coordinates) || [];
    }
    
    insert(coordinate: Coordinate) {
        this.coordinates.push(coordinate);
    }

    build(): Enveloppe {
        let xmin = this.coordinates[1][0];
        let ymin = this.coordinates[1][1];
        let xmax = this.coordinates[1][0];;
        let ymax = this.coordinates[1][1];;
        for (let coor of this.coordinates) {
            if (coor[0] <= xmin) {
                xmin = coor[0];
            }
            else if (coor[0] >= xmax) {
                xmax = coor[0];
            }
            if (coor[1] <= ymin) {
                ymin = coor[1];
            }
            else if (coor[1] >= ymax) {
                ymax = coor[1];
            }
        }
        
        return new Enveloppe([xmin, ymin], [xmax, ymax]);
    }
}