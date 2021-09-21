import { isPoint, point } from "tiny-point"
import { isSize, size } from "tiny-size"
import type { Rect, RectValue } from "./types"

export function rect(x: number, y: number, w: number, h: number): Rect
export function rect(v: RectValue): Rect
export function rect(...a: any[]): Rect {
  const v =
    a.length === 4 ? { x: a[0], y: a[1], width: a[2], height: a[3] } : a[0]
  const r = Object.freeze(Object.assign({}, point(v), size(v)))
  return {
    ...r,
    area: r.width * r.height,
    minX: r.x,
    midX: r.x + r.width / 2,
    maxX: r.x + r.width,
    minY: r.y,
    midY: r.y + r.height / 2,
    maxY: r.y + r.height,
  }
}

export const zeroRect = rect(0, 0, 0, 0)

export function isRect(v: any): v is RectValue {
  return isPoint(v) && isSize(v)
}

export function equal(a: Rect, b: Rect): boolean {
  return ["x", "y", "width", "height"].every((k) => a[k] === b[k])
}
