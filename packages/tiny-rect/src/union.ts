import { fromPoints } from "./from-points"
import type { Rect } from "./types"

const { min, max } = Math

/**
 * Returns a new Rect that represents the union between multiple Rects
 */
export function union(...rs: Rect[]): Rect {
  const pMin = {
    x: min(...rs.map((r) => r.minX)),
    y: min(...rs.map((r) => r.minY)),
  }
  const pMax = {
    x: max(...rs.map((r) => r.maxX)),
    y: max(...rs.map((r) => r.maxY)),
  }
  return fromPoints(pMin, pMax)
}
