# @core-graphics/size

## 0.1.4

### Patch Changes

- f1c5928: Refactor to ensure consistent API

## 0.1.3

### Patch Changes

- 1cb1958: Patch bump for all packages

## 0.1.2

### Patch Changes

- 26350da: Update rect logic and propagate changes to point and size

## 0.1.1

### Patch Changes

- 071f5de: Patch all packages
- ad1d5bf: - Add `reset` method to `Point`, `Rect`, and `Size`

  ### Rect

  - Change `inflate` to `inset` method
  - Add support for getting the collision edges between rects
  - Remove `fromString` static method
  - Add `clone` method

  ### Line

  - Add `toFixed` method to round values to decimal places
  - Remove `fromString` static method
  - Add `centerPoint` property
  - Update constructor signature
  - Update `clone` method
  - Add `reset` method

  ### Point

  - Add `toFixed` method to round values to decimal places
  - Add numeric package to dependency
  - Update `angle` formula
  - Update `center` to return a point

## 0.1.0

### Minor Changes

- 62e3e1a: Initial release
