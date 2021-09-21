import type { Point } from "./types"

const { PI, atan2 } = Math

export function toDeg(rad: number) {
  return ((180 * rad) / PI) % 360
}

export function toRad(deg: number) {
  return ((deg % 360) * PI) / 180
}

export function angleBetween(a: Point, b: Point): number {
  return atan2(a.y - b.y, a.x - b.x)
}
