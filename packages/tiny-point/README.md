<div align="center">
    <h1>Core Graphics - Point</h1>
    <p>Simple JavaScript utility to create and manipulate a point on screen (x, y)</p>
</div>

Point class is a structure that helps to manage an element's `x` and `y` position values. It is used in the `Rect` class
but can also be used standalone.

`Point` represents a `x` and `y` co-ordinate on screen.

## The problem

1. You want to find a point from a touch or mouse click event
2. You want to measure the distance between two points
3. You want to find the closest point to another point
4. You want to rotate multiple points (line) around an origin
5. You want to find the center of two points
6. You want to get the value of a point relative to an element

## Installation

```sh
yarn add @core-graphics/point
# or
npm i @core-graphics/point
```

## Usage

### Creating a point

```jsx
import { Point } from "@core-graphics/point"

// Create a new instance of a point
const point = new Point({ x: 0, y: 0 })

// Create a point, passing the values as arguments
const point = Point.create(0, 0)

// Create a point from pointer event (mouse, touch or pointer event)
const point = Point.fromPointerEvent(mouseEvent)
```

## Identities and Special Values

Rect has a zero property, which defines its identity value.

```js
Point.zero // {x: 0, y: 0}
```

You can also create initialize an empty point by calling `Point.init()`. This will create a point with `x`, and `y`
values set to `0`

```js
const rect = Point.init()
rect.values // {x: 0, y: 0}
```

### Point Properties

You can access the computed values of the point like `x` and `y`

```js
// Given this point
const rect = new Rect({ x: 20, y: 0 })
rect.x // 20
rect.y // 0
```

### Getting the center between two points

To compute the center point between 2 points, you can use the static `center` method.

```js
// Given this rect
const pointA = Point.create(0, 0)
const pointB = Point.create(20, 0)

Point.center(pointA, pointB) // {x: 10, y: 0}
```

### Getting the distance between two points

To compute the distance between 2 points, use the static `distance` method.

```js
// Given this rect
const pointA = Point.create(0, 0)
const pointB = Point.create(20, 0)

Point.center(pointA, pointB) // {x: 10, y: 0}
```

### Get the closest point

```js
// `Point.closest` returns a function to test the value with
const getClosest = Point.closest({ x: 0, y: 0 }, { x: 10, y: 0 }, { x: 30, y: 0 })

// checking the closest point
const closest = getClosest({ x: 12.5, y: 0 }) // { x: 10, y:0 }
```

### Point operations

You can perform common mathematical operations on a point such as `add`, `subtract`, `divide`, `negate`, `set`,
`toFixed`, etc.

```js
const point = new Point({ x: 0, y: 0 })

point.add({ x: 2 }) // { x:2, y:0 }
point.multiply(3) // { x:6: y:0 }
point.negate() // { x:-6, y:0 }

point.set({ x: 6.256, y: 1.225 })
point.toFixed(2) // { x:6.26, y:1.23 }
```

### Rotating a point

You can rotate a point around around an origin

```js
const point = new Point({ x: 40, y: 30 })

// rotate the point by 10 degrees
point.rotate(10)
```

### Get the point values relative to a node

When building components you might need to get the point values relative to a DOM node in screen (not the window). You
can leverage the `.relativeToNode` method to achieve this.

```js
const point = new Point({ x: 400, y: 600 })
const res = point.relativeToNode(element)
res.point // the new point instance
res.progress // the progress of the point compared to the node's width/height
```

### Testing rect values

**Test if a value is a point**

To test or validate that a given value is a point data, you can call the `.is()` method.

> A value is consider a point if it includes all required members (x, y)

```js
Point.is({ x: 0, y: 0 }) // true
Point.is({ x: 0, t: 0 }) // false
```

**Test if two points are equal**

To test that two points are equal, use the `isEqual` static method.

```js
Point.is({ x: 0, y: 0 }) // true
Point.is({ x: 0, t: 0 }) // false
```

## Inspiration

Most of the code was inspired by [SwiftUI](https://developer.apple.com/documentation/coregraphics/cgpoint),
[.NET](https://docs.microsoft.com/en-us/dotnet/api/coregraphics.cgpoint?view=xamarin-ios-sdk-12) and
[Dart's](https://api.dart.dev/stable/2.12.4/dart-math/Point-class.html) approach to creating geometric primitives that
made it easier to manage UI interactions.

## Contribution

Yes please! See the [contributing guidelines](https://github.com/chakra-ui/core/blob/main/CONTRIBUTING.md) for details.

## Licence

This project is licensed under the terms of the [MIT license](https://github.com/chakra-ui/core/blob/main/LICENSE).
