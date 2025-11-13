import Coordinate from "./Coordinate";

export default class Enveloppe {
    private bottomLeft?: Coordinate;
    private topRight?: Coordinate;

    constructor(bottomLeft?: Coordinate, topRight?: Coordinate) {
        this.bottomLeft = bottomLeft || [];
        this.topRight = topRight || [];
    }

    isEmpty(): boolean {
        return this.bottomLeft.length == 0 && this.topRight.length == 0;
    }

    getXmin(): number {
        return this.bottomLeft[0];
    }

    getYmin(): number {
        return this.bottomLeft[1];
    }

    getXmax(): number {
        return this.topRight[0];
    }

    getYmax(): number {
        return this.topRight[1];
    }

    toString(): String {
        return `Enveloppe[(${this.bottomLeft}), (${this.topRight})]`;
    }
}