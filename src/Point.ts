import Coordinate from "./Coordinate";
import Geometry from "./Geometry";
import Enveloppe from "../src/Enveloppe"
import EnveloppeBuilder from "../src/EnveloppeBuilder"

export default class Point implements Geometry {
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate || [];
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  getType(): string {
    return "Point"
  }

  isEmpty(): boolean {
    return this.coordinate.length == 0;
  }

  translate(dx: number, dy: number) {
    this.coordinate[0] = dx + this.coordinate[0];
    this.coordinate[1] = dy + this.coordinate[1];
  }

  clone(): Point {
    const obj = new Point()
    obj.coordinate = this.coordinate
    return obj;
  }

  x(): number {
    return this.coordinate[0];
  }

  y(): number {
    return this.coordinate[1];
  }

  getEnveloppe(): Enveloppe {
    const c = this.coordinate
    const b = new EnveloppeBuilder(c);
    b.insert(c);
    return b.build();
  }

}
