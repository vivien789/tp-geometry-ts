import Coordinate from "./Coordinate";
import Geometry from "./Geometry";

export default class Point implements Geometry {
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    coordinate ? this.coordinate = coordinate : undefined;
  }

  getCoordinate(): Coordinate {
    return this.coordinate ? this.coordinate : undefined;
  }

  getType(): string {
    return "Point"
  }

  x(): number {
    return this.coordinate ? this.coordinate[0] : Number.NaN ;
  }

  y(): number {
    return this.coordinate ? this.coordinate[1] : Number.NaN ;
  }

}
