import { point } from "./create"
import type { Point } from "./types"

type RelativeValue = {
  point: Point
  progress: { x: number; y: number }
}

export function relativeToNode(p: Point, el: HTMLElement): RelativeValue {
  const dx = p.x - el.offsetLeft - el.clientLeft + el.scrollLeft
  const dy = p.y - el.offsetTop - el.clientTop + el.scrollTop
  return {
    point: point(dx, dy),
    progress: { x: dx / el.offsetWidth, y: dy / el.offsetHeight },
  }
}
