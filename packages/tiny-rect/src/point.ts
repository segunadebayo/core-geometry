import type { Point } from "tiny-point"
import { center, centers } from "./center"
import { corners } from "./corner"
import type { Rect, RectPoint } from "./types"

export function getPoint(r: Rect, point: RectPoint): Point {
  const cn = corners(r)
  const cc = centers(r)
  const map: Record<RectPoint, Point> = {
    "top-left": cn.topLeft,
    "top-right": cn.topRight,
    "top-center": cc.topCenter,
    "bottom-left": cn.bottomLeft,
    "bottom-center": cc.bottomCenter,
    "bottom-right": cn.bottomRight,
    "left-center": cc.leftCenter,
    "right-center": cc.rightCenter,
    center: center(r),
  }
  return map[point]
}
