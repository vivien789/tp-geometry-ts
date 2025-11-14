import "mocha";
import { expect } from "chai";
import Geometry from "../src/Geometry";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktWriter from "../src/WktWriter"

describe("test WKT", () => {

    it("test point constructor", () => {
        const g = new Point([3.0,4.0]);
        const writer = new WktWriter();
        const s = writer.write(g);
        expect(s).to.equal(`POINT(3.0 4.0)`)
    });

    it("test linestring constructor", () => {
        const a = new Point([3.0, 4.0]);
        const b = new Point([5.0, 6.0]);
        const l = new LineString([a, b]);
        const writer = new WktWriter();
        const s = writer.write(l);
        expect(s).to.equal(`LINESTRING(3.0 4.0, 5.0 6.0)`)
    });

});