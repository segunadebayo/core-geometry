import { PointValue, rotate as rotatePoint } from "tiny-point"
import { corners } from "./corner"
import { rect } from "./create"
import { fromPoints } from "./from-points"
import type { Rect, RectSide } from "./types"

export type RectInset = Partial<Record<RectSide, number>>

export type SymmetricRectInset = { dx?: number; dy?: number }

export const isSymmetric = (v: any): v is SymmetricRectInset => "dx" in v || "dy" in v

export function inset(r: Rect, i: RectInset | SymmetricRectInset): Rect {
  const v = isSymmetric(i) ? { left: i.dx, right: i.dx, top: i.dy, bottom: i.dy } : i
  const { top = 0, right = 0, bottom = 0, left = 0 } = v
  return rect(left, top, r.width - left - right, r.height - top - bottom)
}

export function expand(r: Rect, v: number | SymmetricRectInset): Rect {
  const value = typeof v === "number" ? { dx: -v, dy: -v } : v
  return inset(r, value)
}

export function shrink(r: Rect, v: number | SymmetricRectInset): Rect {
  const value = typeof v === "number" ? { dx: -v, dy: -v } : v
  return inset(r, value)
}

export function shift(r: Rect, o: Partial<PointValue>): Rect {
  const { x = 0, y = 0 } = o
  return rect(r.x + x, r.y + y, r.width, r.height)
}

export function rotate(r: Rect, deg: number, origin: PointValue): Rect {
  return fromPoints.apply(
    undefined,
    corners(r).value.map((p) => rotatePoint(p, deg, origin)),
  )
}
