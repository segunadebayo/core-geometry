import { Size } from "../src"

test("should create a size", () => {
  const size = Size.create(10, 5)
  expect(size).toMatchObject({ width: 10, height: 5 })

  expect(size.longestSide).toBe(10)
  expect(size.shortestSide).toBe(5)

  expect(size.aspectRatio).toEqual(2)
  expect(size.flip()).toMatchObject({ width: 5, height: 10 })
})

test("should create size from radius", () => {
  expect(Size.fromRadius(4)).toMatchObject({ width: 8, height: 8 })
  expect(Size.square(10)).toMatchObject({ width: 10, height: 10 })
})

test("should update size", () => {
  const size = Size.create(10, 5)
  size.set({ width: 20, height: 10 })
  expect(size).toMatchObject({ width: 20, height: 10 })
})

test("should update size with aspectRatio lock", () => {
  const size = Size.create(10, 5)
  size.set({ width: 20 }, true)
  expect(size).toMatchObject({ width: 20, height: 10 })
})
