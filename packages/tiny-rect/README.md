<div align="center">
    <h1>Core Graphics - Rect</h1>
    <p>Simple JavaScript utility to create and manipulate rects</p>
</div>

When building UI components, there's often the need to measure an element's rect, edges, or center point and perform
some calcuations with that.

`Rect` represents a rectangle and is defined by an origin point (`Point`) and a size (`Size`).

## The problem

1. You want to measure an element's rect to get its mid-points, corner points, or edges.
2. You want to measure the distance between an element and a point on a screen
3. You want to align an element to other element on a screen using their rects.

## Installation

```sh
yarn add @core-graphics/rect
# or
npm i @core-graphics/rect
```

## Usage

### Creating a rect

```js
import { Rect } from "@core-graphics/rect"

// Create a new instance of a rect
const rect = new Rect({ x: 0, y: 0, width: 30, height: 30 })

// Create a rect from a DOM element
const rect = Rect.fromElement(el)

// Create a rect from points (x, y)
const rect = Rect.fromPoints({ x: 0, y: 0 }, { x: 0, y: 30 }, { x: 30, y: 30 }, { x: 30, y: 0 })
```

## Identities and Special Values

Rect has a zero property, which defines its identity value.

```js
Rect.zero // {x: 0, y: 0, width: 0, height: 0}
```

You can also create initialize an empty rect by calling `Rect.init()`. This will create a rect with `width`, `height`,
`x`, and `y` values set to `0`

```js
const rect = Rect.init()
rect.values // {x: 0, y: 0, width: 0, height: 0}
```

### Rect Properties

You can access the computed values of the rect like `origin`, `minX`, `maxX`, `midX`, `minY`, `maxY`, `midY`,
`centerPoint`, `centerPoints`, `cornerPoints`

```js
// Given this rect
const rect = new Rect({ x: 0, y: 0, width: 30, height: 30 })

rect.x // 0
rect.y // 0
rect.origin // {x: 0, y: 0}
rect.size // {width: 30, height: 30}
```

### Getting the min, mid, and max values

Although a rect can be defined as origin point `(x, y)` + size `(width and height)`, you can access convenience
properties to get the minimum (min), median (mid), and maximum (max) values in the x and y co-ordinates

```js
// Given this rect
const rect = new Rect({ x: 0, y: 0, width: 30, height: 30 })

rect.minX // 0
rect.midX // 15
rect.maxX // 30

rect.minY // 0
rect.midY // 15
rect.maxY // 30
```

The recommended way to get points of a rect is to use the `.get()` method.

```js
const rect = new Rect({ x: 0, y: 0, width: 30, height: 30 })
rect.get("top-start") // { x: 0, y: 30 }
rect.get("top-center") // { x: 15, y: 30 }
```

### Getting the center of a rectangle

To compute the center point of a rect, you can use the `centerPoint` property.

```js
// Given this rect
const rect = new Rect({ x: 0, y: 0, width: 30, height: 30 })

// get the center point of the rect
rect.centerPoint // {x: 15, y: 15}
```

### Getting the corner points of a rectangle

Every rectangle is made of four corner points and you can use the `cornerPoints` property to compute the point values.

> You can also access specific point values like `topLeftPoint`, `topCenterPoint`, `bottomRightPoint`, etc

```js
const rect = new Rect({ x: 0, y: 0, width: 30, height: 30 })

// get the center point of the rect
rect.cornerPoints
// => [{ x: 0, y: 0 },
//    { x: 0, y: 30 },
//    { x: 30, y: 30 },
//    { x: 30, y: 0 }]
```

### Check if a rect contains a point/rect

```js
const rect = new Rect({ x: 0, y: 0, width: 30, height: 30 })

// checking a point
rect.contains({ x: 0, y: 10 }) // true
rect.contains({ x: 50, y: 40 }) // false

// checking a rect
const rectB = new Rect({ x: 0, y: 0, width: 10, height: 10 })
rect.contains(rectB) // true
```

### Rect relationships

Rect class includes methods to evaluating two or more rectangles.

**Intersection**

Two rectangles intersect if they overlap at any of their edges. You can determine whether 2 rects overlaps by called
`.intersect` .

```js
const rectA = new Rect({ x: 0, y: 0, width: 30, height: 30 })
const rectB = new Rect({ x: 20, y: 0, width: 20, height: 10 })

rectA.intersects(rectB) // true
// or
Rect.intersects(rectA, rectB) // true
```

The intersection is the smallest rectangle that encompasses all points contained by both rectangles. You can get that by
calling `.intersection`

```js
const rect = rectA.intersection(rectB) // { x: 20, y: 0, width: 10, height: 10 }
// or
Rect.intersection(rectA, rectB) // { x: 20, y: 0, width: 10, height: 10 }
```

**Union**

The union of two rectangles is the smallest rectangle that encompasses all of the points contained by either rectangle.

To get the union of 2 rects, you can call the `.union` method

```js
const rectA = new Rect({ x: 0, y: 0, width: 30, height: 30 })
const rectB = new Rect({ x: 20, y: 0, width: 20, height: 10 })

const rectC = rectA.union(rectB) //
// or
Rect.intersects(rectA, rectB) // true
```

### Transforming Rectangles

Rect class includes methods to transform the size and origin.

**Translating Rectangles**

Translation describes the geometric operation of moving a shape from one location to another.

Use the `shift` method to translate a rectangle’s origin by a specified x and y distance.

```js
const rect = new Rect({ x: 0, y: 0, width: 30, height: 30 })

// shift the rectangle by `10px` on `x` and `20px` on `y`
rect.shift({ dx: 10, dy: 20 }) // {x: 10, y: 20, width: 30, height: 30}
```

**Contracting and Expanding Rectangles**

You can contract/expand a rectangle from its center point by using the `.inset()` method.

When passed a positive value for either component, this method returns a rectangle that shrinks by the specified amount
from each side as computed from the center point.

```js
const rect = new Rect({ x: 0, y: 0, width: 40, height: 30 })
rect.inset({ dx: 10 }) // { x: 10, y: 0, width: 20, height: 30 }
```

When passed a negative value for either component, the rectangle grows by that amount from each side.

```js
const rect = new Rect({ x: 0, y: 0, width: 40, height: 30 })

rect.inset({ dx: -10 }) // { x: -10, y: 0, width: 60, height: 30 }
// or
rect.inset({ dx: 5 }) // { x: 5, y: 0, w: 30, h: 30 }
```

### Testing rect values

To test or validate that a given value is a rectangle data, you can call the `.is()` method.

> A value is consider a rect if it includes all required members (x, y, width, height)

```js
Rect.is({ x: 0, y: 0, width: 0, height: 0 }) // true
Rect.is({ x: 0, y: 0, width: 0, h: 0 }) // false
```

## Inspiration

Most of the code was inspired by [SwiftUI](https://developer.apple.com/documentation/coregraphics/cgrect), and
[Flutter's](https://api.flutter.dev/flutter/dart-ui/Rect-class.html) approach to creating geometric primitives that made
it easier to manage UI interactions.

## Contribution

Yes please! See the [contributing guidelines](https://github.com/chakra-ui/core/blob/main/CONTRIBUTING.md) for details.

## Licence

This project is licensed under the terms of the [MIT license](https://github.com/chakra-ui/core/blob/main/LICENSE).
