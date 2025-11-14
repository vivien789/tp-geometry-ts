import Enveloppe from "../src/Enveloppe"
import EnveloppeBuilder from "../src/EnveloppeBuilder"

export default interface Geometry {
    getType(): string;
    isEmpty(): boolean;
    translate(dx: number, dy: number);
    clone(): Geometry;
    getEnveloppe(): Enveloppe;
}