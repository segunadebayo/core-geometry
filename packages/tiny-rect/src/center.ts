import { point, Point } from "tiny-point"
import type { Rect, RectCenters } from "./types"

export function center(a: Rect): Point {
  return point(a.midX, a.midY)
}

export function centers(a: Rect): RectCenters {
  const t = point(a.midX, a.minY)
  const r = point(a.maxX, a.midY)
  const b = point(a.midX, a.maxY)
  const l = point(a.minX, a.midY)
  return {
    topCenter: t,
    rightCenter: r,
    bottomCenter: b,
    leftCenter: l,
    value: [t, r, b, l],
  }
}
