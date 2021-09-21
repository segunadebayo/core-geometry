import type { PointValue } from "tiny-point"
import { rect } from "./create"
import type { Rect } from "./types"

const { min, max } = Math

export function fromPoints(...pts: PointValue[]): Rect {
  const xs = pts.map((p) => p.x)
  const ys = pts.map((p) => p.y)
  const x = min(...xs)
  const y = min(...ys)
  const width = max(...xs) - x
  const height = max(...ys) - y
  return rect(x, y, width, height)
}
