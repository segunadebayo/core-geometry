import { distance } from "./properties"
import type { Point } from "./types"

export function closest(...pts: Point[]) {
  return (a: Point): Point => {
    const ds = pts.map((b) => distance(b, a))
    const c = Math.min.apply(Math, ds)
    return pts[ds.indexOf(c)]
  }
}
