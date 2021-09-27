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

export function lerp(a: PointValue, b: PointValue, t: number): Point {
  return add(a, multiply(subtract(b, a), t))
}

export function add(a: PointValue, b: PointValue): Point {
  return point(a.x + b.x, a.y + b.y)
}

export function subtract(a: PointValue, b: PointValue): Point {
  return point(a.x - b.x, a.y - b.y)
}

export function multiply(a: PointValue, t: number): Point {
  return point(a.x * t, a.y * t)
}

export function divide(a: PointValue, t: number): Point {
  return point(a.x / t, a.y / t)
}

export function negate(a: PointValue): Point {
  return point(-a.x, -a.y)
}

export function round(a: PointValue, t: number): Point {
  const m = Math.pow(10, t)
  return point(Math.round(a.x / m) * m, Math.round(a.y / m) * m)
}

export function snapToGrid(a: PointValue, grid: number): Point {
  return point(Math.round(a.x / grid) * grid, Math.round(a.y / grid) * grid)
}

export function length(a: PointValue): number {
  return Math.hypot(a.x, a.y)
}

export function mid(a: PointValue, b: PointValue): Point {
  return multiply(add(a, b), 0.5)
}

export function project(a: PointValue, b: PointValue, c: number) {
  return add(a, multiply(b, c))
}

export function unit(a: PointValue) {
  return divide(a, length(a))
}

export function dot(a: PointValue) {
  return a.x * a.x + a.y * a.y
}

export type { Point, PointValue }
