import type { Point } from "tiny-point"
import { corners, isRect } from "."
import type { Rect } from "./types"

export function containsPoint(r: Rect, p: Point): boolean {
  return r.minX <= p.x && p.x <= r.maxX && r.minY <= p.y && p.y <= r.maxY
}

export function containsRect(a: Rect, b: Rect): boolean {
  return corners(b).value.every((c) => containsPoint(a, c))
}

export function contains(r: Rect, v: Rect | Point): boolean {
  return isRect(v) ? containsRect(r, v) : containsPoint(r, v)
}
