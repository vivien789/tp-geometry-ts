import Point from "./Point";
import Geometry from "./Geometry";
import Enveloppe from "../src/Enveloppe"
import EnveloppeBuilder from "../src/EnveloppeBuilder"
import GeometryVisitor from "./GeometryVisitor";
import WktVisitor from "./WktVisitor";

export default class LineString implements Geometry {
  private points?: Point[];

  constructor(points?: Point[]) {
    this.points = points || [];
  }

  getNumPoints(): number {
    return this.points.length;
  }

  isEmpty(): boolean {
    return this.points.length == 0;
  }

  translate(dx: number, dy: number) {
    for (let point of this.points) {
      point.translate(dx, dy)
    }
  }

  clone(): LineString {
    const obj = new LineString()
    obj.points = this.points
    return obj;
  }

  getType(): string {
    return "LineString"
  }

  getPointN(n: number): Point {
    return this.points[n];
  }

  getEnveloppe(): Enveloppe {
    const b = new EnveloppeBuilder(this.points[0].getCoordinate());
    for (let point of this.points) {
      let c = point.getCoordinate();
      b.insert(c);
    }
    return b.build()
  }

  accept(visitor: GeometryVisitor){
    visitor.visitLineString(this);
  }

  asText(): string {
    const visitor = new WktVisitor()
    this.accept(visitor)
    return visitor.getResult();
  }
}
