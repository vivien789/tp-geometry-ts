import "mocha";
import { expect } from "chai";
import EnveloppeBuilder from "../src/EnveloppeBuilder"

describe("test Enveloppe Builder", () => {
    it("test enveloppe builder with coordinates", () => {
        const b = new EnveloppeBuilder([1.0,2.0]);
        {
            b.insert([0.0,1.0]);
            const e = b.build();
            expect(e.toString()).to.equal(`Enveloppe([0,1], [1,2])`);
        }
        {
            b.insert([2.0,0.0]);
            const e = b.build();
            expect(e.toString()).to.equal(`Enveloppe([0,0], [2,2])`);
        }
        {
            b.insert([0.0,3.0]);
            const e = b.build();
            expect(e.toString()).to.equal(`Enveloppe([0,0], [2,3])`);
        }       
        
    });

});