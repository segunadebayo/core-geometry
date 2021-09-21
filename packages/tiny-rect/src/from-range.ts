import { rect } from "./create"
import { fromElement } from "./from-element"
import type { Rect } from "./types"
import { union } from "./union"

export function fromRange(range: Range): Rect {
  const rs: Rect[] = []
  const rects = Array.from(range.getClientRects())
  if (rects.length) {
    for (const r of rects) {
      rs.push(rect(r))
    }
  } else {
    let start: Node | ParentNode | null = range.startContainer
    if (start.nodeType === Node.TEXT_NODE) {
      start = start.parentNode
    }
    if (start instanceof HTMLElement) {
      let r = fromElement(start)
      r = rect({ ...r, x: r.maxX, width: 0 })
      rs.push(r)
    }
  }

  return union(...rs)
}
