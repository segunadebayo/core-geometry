import { fromPoints } from "./from-points"
import type { Rect } from "./types"

const { min, max } = Math

/**
 * Returns a new Rect that represents the union between multiple Rects
 */
export function union(...rs: Rect[]): Rect {
  const pMin = {
    x: min.apply(
      Math,
      rs.map((r) => r.minX),
    ),
    y: min.apply(
      Math,
      rs.map((r) => r.minY),
    ),
  }
  const pMax = {
    x: max.apply(
      Math,
      rs.map((r) => r.maxX),
    ),
    y: max.apply(
      Math,
      rs.map((r) => r.maxY),
    ),
  }
  return fromPoints(pMin, pMax)
}
