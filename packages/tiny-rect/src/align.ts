import { rect } from "."
import type { Rect } from "./types"

export function hAlign(a: Rect, ref: Rect, align: HAlign): Rect {
  let x = ref.x
  if (align === "left-inside") x = ref.x
  if (align === "left-outside") x = ref.x - ref.width
  if (align === "right-inside") x = ref.maxX - ref.width
  if (align === "right-outside") x = ref.maxX
  if (align === "center") x = ref.midX - ref.width / 2
  return rect({ ...a, x })
}

export function vAlign(a: Rect, ref: Rect, align: VAlign): Rect {
  let y = ref.y
  if (align === "top-inside") y = ref.y
  if (align === "top-outside") y = ref.y - a.height
  if (align === "bottom-inside") y = ref.maxY - a.height
  if (align === "bottom-outside") y = ref.maxY
  if (align === "center") y = ref.midY - a.height / 2
  return rect({ ...a, y })
}

export function align(a: Rect, ref: Rect, options: AlignOptions): Rect {
  const { horizontal, vertical } = options
  return vAlign(hAlign(a, ref, horizontal), ref, vertical)
}

export type AlignOptions = {
  horizontal: HAlign
  vertical: VAlign
}

export type HAlign =
  | "left-inside"
  | "left-outside"
  | "center"
  | "right-inside"
  | "right-outside"

export type VAlign =
  | "top-inside"
  | "top-outside"
  | "center"
  | "bottom-inside"
  | "bottom-outside"
