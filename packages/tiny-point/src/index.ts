import { Point, PointValue } from "./types"

export function point(v: PointValue): Point
export function point(x: number, y: number): Point
export function point(...a: any[]): Point {
  const v = a.length === 1 ? Object.assign({}, a[0]) : { x: a[0], y: a[1] }
  return Object.freeze(v)
}
 
export function isPoint(v: any): v is Point {
  return Object.prototype.toString.call(v) === "[object Object]" && "x" in v && "y" in v
}

export function toDeg(r: number) {
  return ((180 * r) / Math.PI) % 360
}

export function toRad(d: number) {
  return ((d % 360) * Math.PI) / 180
}

export function angleBetween(a: Point, b: Point): number {
  return Math.atan2(a.y - b.y, a.x - b.x)
}

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
  const sin = Math.sin(r)
  const cos = Math.cos(r)
  const x = a.x - c.x
  const y = a.y - c.y
  return point(c.x + x * cos - y * sin, c.y + x * sin + y * cos)
}

export function round(a: Point, t: number): Point {
  const m = Math.pow(10, t)
  return point(Math.round(a.x / m) * m, Math.round(a.y / m) * m)
}

export function snapToGrid(a: Point, grid: number): Point {
  return point(Math.round(a.x / grid) * grid, Math.round(a.y / grid) * grid)
}

export function length(a: Point): number {
  return Math.hypot(a.x, a.y)
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

export type { Point, PointValue }
