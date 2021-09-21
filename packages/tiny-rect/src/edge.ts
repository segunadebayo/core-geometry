import { corners } from "./corner"
import type { Rect, RectEdge, RectEdges } from "./types"

export function edges(a: Rect): RectEdges {
  const c = corners(a)
  const t: RectEdge = [c.topLeft, c.topRight]
  const r: RectEdge = [c.topRight, c.bottomRight]
  const b: RectEdge = [c.bottomLeft, c.bottomRight]
  const l: RectEdge = [c.topLeft, c.bottomLeft]
  return {
    top: t,
    right: r,
    bottom: b,
    left: l,
    value: [t, r, b, l],
  }
}
