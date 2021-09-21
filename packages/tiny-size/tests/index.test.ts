import { aspectRatio, flip, fromRadius, fromSquare, resize, size } from "../src"

describe("tiny-size", () => {
  test("should create a size", () => {
    const s = size(10, 5)
    expect(s).toMatchObject({ width: 10, height: 5 })
    expect(aspectRatio(s)).toEqual(2)
    expect(flip(s)).toMatchObject({ width: 5, height: 10 })
  })

  test("should create size from radius", () => {
    expect(fromRadius(4)).toMatchObject({ width: 8, height: 8 })
    expect(fromSquare(10)).toMatchObject({ width: 10, height: 10 })
  })

  test("should update size", () => {
    const s = size(10, 5)
    const val = resize(s, { width: 20 }, true)
    expect(val).toMatchObject({ width: 20, height: 10 })
  })
})
