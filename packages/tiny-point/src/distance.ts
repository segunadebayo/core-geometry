import type { PointValue } from "./types"

export function distance(a: PointValue, b: PointValue = { x: 0, y: 0 }): number {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
}

export function closest(...pts: PointValue[]) {
  return (a: PointValue): PointValue => {
    const ds = pts.map((b) => distance(b, a))
    const c = Math.min.apply(Math, ds)
    return pts[ds.indexOf(c)]
  }
}
