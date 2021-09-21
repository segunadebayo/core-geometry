import type { Point, PointValue } from "./types"

export function point(v: PointValue): Point
export function point(x: number, y: number): Point
export function point(...a: any[]): Point {
  const v = a.length === 1 ? Object.assign({}, a[0]) : { x: a[0], y: a[1] }
  return Object.freeze(v)
}

export function isPoint(v: any): v is Point {
  return Object.prototype.toString.call(v) === "[object Object]" && "x" in v && "y" in v
}

export const zeroPoint = point(0, 0)
