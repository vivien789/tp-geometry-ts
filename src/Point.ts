import Coordinate from "./Coordinate";
import Geometry from "./Geometry";
import AbstractGeometry from "./AbstractGeometry";
import Enveloppe from "../src/Enveloppe"
import EnveloppeBuilder from "../src/EnveloppeBuilder"
import GeometryVisitor from "./GeometryVisitor";
import WktVisitor from "./WktVisitor";

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

  accept(visitor: GeometryVisitor){
    visitor.visitPoint(this);
  }

  asText(): string {
    const visitor = new WktVisitor()
    this.accept(visitor)
    return visitor.getResult();
  }

}
