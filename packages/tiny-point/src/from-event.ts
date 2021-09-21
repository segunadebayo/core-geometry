import { point } from "./create"
import type { Point } from "./types"

const isTouch = (e: any): e is TouchEvent => "touches" in e
type PointType = "page" | "client"
type Event = MouseEvent | TouchEvent | PointerEvent

export function fromPointerEvent(e: Event, t: PointType = "page"): Point {
  const fallback = { [`${t}X`]: 0, [`${t}Y`]: 0 }
  const p = isTouch(e) ? e.touches[0] || e.changedTouches[0] || fallback : e
  return point(p[`${t}X`], p[`${t}Y`])
}
