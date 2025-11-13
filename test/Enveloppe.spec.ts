import "mocha";
import { expect } from "chai";
import Enveloppe from "../src/Enveloppe"

describe("test Enveloppe", () => {
    it("test default constructor", () => {
        const e = new Enveloppe();
        expect(e.isEmpty()).to.be.true;
    });
    it("test enveloppe with coordinates", () => {
        const e = new Enveloppe([3.0, 4.0], [5.0, 6.0]);
        expect(e.isEmpty()).to.be.false;
        expect(e.getXmin()).to.deep.equal(3.0);
        expect(e.getYmin()).to.deep.equal(4.0);
        expect(e.getXmax()).to.deep.equal(5.0);
        expect(e.getYmax()).to.deep.equal(6.0);
        expect(e.toString()).to.equal(`Enveloppe[(3,4), (5,6)]`)
    });

});
