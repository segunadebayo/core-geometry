import { zeroPoint } from "./create"
import { add, divide, multiply } from "./operations"
import type { Point } from "./types"

const { pow, hypot, sqrt } = Math

export function distance(a: Point, b: Point = zeroPoint): number {
  return sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2))
}

export function length(a: Point): number {
  return hypot(a.x, a.y)
}

export function mid(a: Point, b: Point): Point {
  return multiply(add(a, b), 0.5)
}

export function project(a: Point, b: Point, c: number) {
  return add(a, multiply(b, c))
}

export function unit(a: Point) {
  return divide(a, length(a))
}

export function dot(a: Point) {
  return a.x * a.x + a.y * a.y
}
