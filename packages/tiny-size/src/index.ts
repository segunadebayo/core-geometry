const { pow, round: rond } = Math

export type SizeValue = {
  height: number
  width: number
}

export type Size = Readonly<SizeValue>

export function size(v: SizeValue): Size
export function size(w: number, h: number): Size
export function size(...a: any[]): Size {
  const v = a.length === 1 ? Object.assign({}, a[0]) : { width: a[0], height: a[1] }
  return Object.freeze(v)
}

export function fromRadius(r: number): Size {
  return size(r * 2, r * 2)
}

export function fromSquare(v: number): Size {
  return size(v, v)
}

export const zeroSize = size(0, 0)

export function isSize(v: any): v is Size {
  return Object.prototype.toString.call(v) === "[object Object]" && "width" in v && "height" in v
}

export function aspectRatio(v: Size): number {
  return v.width / v.height
}

export function isEmpty(v: Size): boolean {
  return v.width === 0 && v.height === 0
}

export function round(v: Size, t = 0) {
  const m = pow(10, t)
  return size(rond(v.width * m) / m, rond(v.height * m) / m)
}

export function flip(v: Size): Size {
  return size(v.height, v.width)
}

export function equal(a: Size, b: Size) {
  return a.width === b.width && a.height === b.height
}

export function resize(a: Size, b: Partial<Size>, lock = false): Size {
  let w = b.width ?? a.width
  let h = b.height ?? a.height
  if (lock) {
    const r = aspectRatio(a)
    if (b.width == null && b.height != null) w = h * r
    else if (b.width != null && b.height == null) h = w / r
  }
  return size(w, h)
}
