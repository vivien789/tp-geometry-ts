import "mocha";
import { expect } from "chai";
import EnveloppeBuilder from "../src/EnveloppeBuilder"

describe("test Enveloppe Builder", () => {
    it("test enveloppe builder with coordinates", () => {
        const b = new EnveloppeBuilder([1.0,2.0]);
        {
            b.insert([0.0,1.0]);
            b.build();
        }
        {
            b.insert([2.0,0.0]);
            b.build();
        }
        {
            b.insert([0.0,3.0]);
            b.build();
        }       
        
    });

});