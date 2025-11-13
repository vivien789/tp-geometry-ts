import "mocha";
import { expect } from "chai";
import Linestring from "../src/LineString";
import Point from "../src/Point";

describe("test Linestring", () => {
    it("test default constructor", () => {
        const l = new Linestring();
        expect(l.getNumPoints()).to.equal(0);
        expect(l.getType()).to.equal("Linestring");
    }); 
    it("test constructor with coordinates", () => {
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const l = new Linestring([a,b]);
        expect(l.getNumPoints()).to.equal(2);
        expect(l.getPointN(0)).to.equal(a);
        expect(l.getPointN(1)).to.equal(b);
    });
});