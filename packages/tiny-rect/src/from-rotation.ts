import { rotate } from "tiny-point"
import { center } from "./center"
import { corners } from "./corner"
import { rect } from "./create"
import type { Rect } from "./types"

const { min, max } = Math

export function fromRotation(r: Rect, deg: number): Rect {
  const rr = corners(r).value.map((p) => rotate(p, deg, center(r)))
  const xs = rr.map((p) => p.x)
  const ys = rr.map((p) => p.y)
  const minX = min.apply(Math, xs)
  const minY = min.apply(Math, ys)
  const maxX = max.apply(Math, xs)
  const maxY = max.apply(Math, ys)
  return rect(minX, minY, maxX - minX, maxY - minY)
}
