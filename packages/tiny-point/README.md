<div align="center">
    <h1>Core Graphics - Point</h1>
    <p>Simple JavaScript utility to create and manipulate a point on screen (x, y)</p>
</div>

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
yarn add tiny-point
# or
npm i tiny-point
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
