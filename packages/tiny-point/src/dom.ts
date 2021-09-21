import type { Point } from "."
import { point } from "."

const isTouch = (e: any): e is TouchEvent => "touches" in e
type PointType = "page" | "client"
type Event = MouseEvent | TouchEvent | PointerEvent

export function fromPointerEvent(e: Event, t: PointType = "page"): Point {
  const fallback = { [`${t}X`]: 0, [`${t}Y`]: 0 }
  const p = isTouch(e) ? e.touches[0] || e.changedTouches[0] || fallback : e
  return point(p[`${t}X`], p[`${t}Y`])
}

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
