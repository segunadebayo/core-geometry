import { point } from "tiny-point"
import type { Rect, RectCorners } from "./types"

export function corners(a: Rect): RectCorners {
  const tl = point(a.minX, a.minY)
  const tr = point(a.maxX, a.minY)
  const br = point(a.minX, a.maxY)
  const bl = point(a.maxX, a.maxY)
  return {
    topLeft: tl,
    topRight: tr,
    bottomRight: br,
    bottomLeft: bl,
    value: [tl, tr, br, bl],
  }
}
