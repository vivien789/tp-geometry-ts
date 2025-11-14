import Geometry from "./Geometry";
import Point from "../src/Point";
import LineString from "./LineString";

export default class WktWriter {

    write(geometry: Geometry): string {

        if ( geometry instanceof Point ){
            const p = `POINT(`;
            const x = geometry.x();
            const y = geometry.y();
            return p + x + `.0 `+ y + `.0)`;
            
        } else if ( geometry instanceof LineString ){
            const l = `LINESTRING(`;
            let res = ``
             for (let i = 0; i < geometry.getNumPoints(); i++) {
                let p1 = geometry.getPointN(i);
                const x = p1.x();
                const y = p1.y();
                if (i != (geometry.getNumPoints() - 1)) {
                    res = res + x + `.0 `+ y + `.0, `
                }
                else {
                    res = res + x + `.0 `+ y + `.0`
                }
            }
            return l + res + `)`;
            
        }
        
    }
}