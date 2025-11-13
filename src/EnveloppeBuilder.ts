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
        let xmin = this.coordinates[0][0];
        let ymin = this.coordinates[0][1];
        let xmax = xmin + 1;
        let ymax = ymin + 1;
        for (let coor of this.coordinates) {
            if (coor[0] < xmin) {
                xmin = coor[0];
            }
            else if (coor[0] > xmax) {
                xmax = coor[0];
            }
            else if (coor[1] < ymin) {
                ymin = coor[1];
            }
            else if (coor[1] > ymax) {
                ymax = coor[1];
            }
        }
        
        return new Enveloppe([xmin, ymin], [xmax, ymax]);
    }
}