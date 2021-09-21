import { rotate } from "tiny-point"
import { center } from "./center"
import { corners } from "./corner"
import { rect } from "./create"
import type { Rect } from "./types"

const { min, max } = Math

export function fromRotation(r: Rect, deg: number): Rect {
  const rr = corners(r).value.map((p) => rotate(p, deg, center(r)))
  const minX = min(...rr.map((p) => p.x))
  const minY = min(...rr.map((p) => p.y))
  const maxX = max(...rr.map((p) => p.x))
  const maxY = max(...rr.map((p) => p.y))
  return rect(minX, minY, maxX - minX, maxY - minY)
}
