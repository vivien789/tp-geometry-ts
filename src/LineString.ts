import Point from "./Point";
import Geometry from "./Geometry";

export default class LineString implements Geometry {
  private points?: Point[];

  constructor(points?: Point[]) {
    this.points = points || [] ;
  }

  getNumPoints(): Number {
    return this.points.length;
  }

  isEmpty(): boolean {
      return this.points.length==0;
  }

  getType(): string {
      return "Linestring"
  }

  getPointN(n: number) : Point {
    return this.points[n];
  }

}
