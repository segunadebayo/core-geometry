import { toRad } from "./angle"
import { point } from "./create"
import type { Point } from "./types"

const { cos, sin, pow, round: rond } = Math

export function lerp(a: Point, b: Point, t: number): Point {
  return add(a, multiply(subtract(b, a), t))
}

export function add(a: Point, b: Point): Point {
  return point(a.x + b.x, a.y + b.y)
}

export function subtract(a: Point, b: Point): Point {
  return point(a.x - b.x, a.y - b.y)
}

export function multiply(a: Point, t: number): Point {
  return point(a.x * t, a.y * t)
}

export function divide(a: Point, t: number): Point {
  return point(a.x / t, a.y / t)
}

export function negate(a: Point): Point {
  return point(-a.x, -a.y)
}

export function rotate(a: Point, d: number, c: Point): Point {
  const r = toRad(d)
  const x = a.x - c.x
  const y = a.y - c.y
  return point(c.x + x * cos(r) - y * sin(r), c.y + x * sin(r) + y * cos(r))
}

export function round(a: Point, t: number): Point {
  const m = pow(10, t)
  return point(rond(a.x / m) * m, rond(a.y / m) * m)
}

export function snap(a: Point, grid: number): Point {
  return point(rond(a.x / grid) * grid, rond(a.y / grid) * grid)
}
