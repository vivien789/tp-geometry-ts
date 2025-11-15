import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";

export default class WktVisitor implements GeometryVisitor {

    private buffer?: string;
    constructor(private log = console.log, buffer?: string) {
        this.buffer = buffer;
    }

    visitPoint(point: Point) {
        if (point.isEmpty()) {
            this.buffer = `Je suis un point vide.`
            this.log("Je suis un point vide.")
        }
        else {
            const p = `POINT(`;
            const x = point.x();
            const y = point.y();
            const resultat = p + x + `.0 ` + y + `.0)`
            this.buffer = resultat;
            this.log(resultat)
        }
    }

    visitLineString(linestring: LineString) {
        if (linestring.isEmpty()) {
            this.buffer = `Je suis une polyligne vide.`
            this.log("Je suis une polyligne vide.")
        }
        else {
            const l = `LINESTRING(`;
            let res = ``
            for (let i = 0; i < linestring.getNumPoints(); i++) {
                let p1 = linestring.getPointN(i);
                const x = p1.x();
                const y = p1.y();
                if (i != (linestring.getNumPoints() - 1)) {
                    res = res + x + `.0 ` + y + `.0, `
                }
                else {
                    res = res + x + `.0 ` + y + `.0`
                }
            }
            const resultat = l + res + `)`;
            this.buffer = resultat;
            this.log(resultat);
        }
    }

    getResult(): string {
        return this.buffer;
    }
}