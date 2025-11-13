import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test Linestring", () => {
    it("test default constructor", () => {
        const l = new LineString();
        expect(l.getNumPoints()).to.equal(0);
        expect(l.getType()).to.equal("LineString");
        expect(l.isEmpty()).to.be.true;
    }); 

    it("test constructor with coordinates", () => {
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const l = new LineString([a,b]);
        expect(l.getNumPoints()).to.equal(2);
        expect(l.getPointN(0)).to.equal(a);
        expect(l.getPointN(1)).to.equal(b);
        expect(l.isEmpty()).to.be.false;
    });

    it("should translate point", () => {
        const a = new Point([3.0,4.0]);
        const b = new Point([5.0,6.0]);
        const l = new LineString([a,b]);
        l.translate(1.0,2.0);
        expect(l.getPointN(0)).to.deep.equal(new Point([4.0,6.0]));
        expect(l.getPointN(1)).to.deep.equal(new Point([6.0,8.0]));
        expect(a.getCoordinate()).to.deep.equal([4.0,6.0]);
        expect(b.getCoordinate()).to.deep.equal([6.0,8.0]);
    });

});
