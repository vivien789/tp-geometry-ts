import "mocha";
import { expect } from "chai";
import LogGeometryVisitor from "../src/LogGeometryVisitor"
import WktVisitor from "../src/WktVisitor"
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LogGeometryVisitor", () => {
    it("should work with empty point", () => {
        const p = new Point();
        let result = "";
        const visitor = new WktVisitor((message) => {
            result = message;
        })
        p.accept(visitor);
        expect(result).to.equal("Je suis un point vide.");
        const wkt = visitor.getResult();
        expect(wkt).to.equal("Je suis un point vide.");
    });
    it("should work with point", () => {
        const p = new Point([3.0, 4.0]);
        let result = "";
        const visitor = new WktVisitor((message) => {
            result = message;
        })
        p.accept(visitor);
        expect(result).to.equal(`POINT(3.0 4.0)`)
        const wkt = visitor.getResult();
        expect(wkt).to.equal(`POINT(3.0 4.0)`);
    });
    it("should work with empty linestring", () => {
        const l = new LineString();
        let result = "";
        const visitor = new WktVisitor((message) => {
            result = message;
        })
        l.accept(visitor);
        expect(result).to.equal(`Je suis une polyligne vide.`)
        const wkt = visitor.getResult();
        expect(wkt).to.equal(`Je suis une polyligne vide.`);
    });
    it("should work with linestring", () => {
        const a = new Point([3.0, 4.0]);
        const b = new Point([5.0, 6.0]);
        const l = new LineString([a, b]);
        let result = "";
        const visitor = new WktVisitor((message) => {
            result = message;
        })
        l.accept(visitor);
        expect(result).to.equal(`LINESTRING(3.0 4.0, 5.0 6.0)`)
        const wkt = visitor.getResult();
        expect(wkt).to.equal(`LINESTRING(3.0 4.0, 5.0 6.0)`);
    });

});