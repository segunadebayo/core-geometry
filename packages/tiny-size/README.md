<div align="center">
    <h1>Core Graphics - Size</h1>
    <p>Simple JavaScript utility to create and manipulate sizes (width + height)</p>
</div>

Size class is a structure that helps to manage an element's width and height values. It is used in the `Rect` class but
can also be used standalone.

`Size` represents a `width` and `height` value.

## The problem

1. Given the width and height of an element, you want to get its aspect ratio, longest side or shortest side.
2. You want to modify an element's size but keep its aspect ratio.

## Installation

```sh
yarn add @core-graphics/size
# or
npm i @core-graphics/size
```

## Usage

### Creating a size

```js
import { Size } from "@core-graphics/size"

// Create a new instance of a size
const size = new Size({ width: 30, height: 30 })

// Create a size equal width and height
const size = Size.square(40) // { width: 40, height, 40 }

// Create a size from a given radius
const size = Size.fromRadius(4)
```

## Identities and Special Values

Size has a zero property, which defines its identity value.

```js
Size.zero // {width: 0, height: 0}
```

You can also create initialize an empty size by calling `Size.init()`. This will create a size with `width` and `height`
values set to `0`

```js
const size = Size.init()
size.values // {width: 0, height: 0}
```

### Size Properties

You can access the computed values of the size like `width`, `height`, `aspectRatio`, `longestSize`, `shortestSize`,
`isEmpty`.

```js
// Given this size
const size = new Size({ width: 60, height: 30 })

size.width // 60
size.height // 30

size.longestSide // 60
size.shortestSide // 30

size.aspectRatio // 2

size.isEmpty // false
```

### Transforming Size

The Size class includes methods to transform its values

**Flipping the size**

Flipping involves swapping the `width` and `height` values such that the `width` becomes `height` and vice-versa.

```js
const size = new Size({ width: 60, height: 30 })
size.flip() // { width: 30, height: 60 }
```

**Changing the size**

You can change the size (width or/and height) by using the `.set()` method. This method provides an optional argument to
lock the aspect ratio of the size.

```js
const size = new Size({ width: 60, height: 30 })
size.set({ width: 120 }) // { width: 120, height: 30 }
// or with lock aspect ratio active
size.set({ width: 120 }, true) // { width: 120, height: 60 }
```

## Inspiration

Most of the code was inspired by [SwiftUI](https://developer.apple.com/documentation/coregraphics/cgsize),
[.NET](https://docs.microsoft.com/en-us/dotnet/api/coregraphics.cgsize?view=xamarin-ios-sdk-12) and
[Flutter's](https://api.flutter.dev/flutter/dart-ui/Size-class.html) approach to creating geometric primitives that made
it easier to manage UI interactions.

## Contribution

Yes please! See the [contributing guidelines](https://github.com/chakra-ui/core/blob/main/CONTRIBUTING.md) for details.

## Licence

This project is licensed under the terms of the [MIT license](https://github.com/chakra-ui/core/blob/main/LICENSE).
