# @core-graphics/rect

## 0.1.6

### Patch Changes

- 8784edb: Add side check helper functions

## 0.1.5

### Patch Changes

- f1c5928: Refactor to ensure consistent API
- c1ca09f: Add support for visual viewport in window rect
- Updated dependencies [f1c5928]
  - @core-graphics/point@0.1.5
  - @core-graphics/size@0.1.4

## 0.1.4

### Patch Changes

- 1cb1958: Patch bump for all packages
- Updated dependencies [1cb1958]
  - @core-graphics/point@0.1.4
  - @core-graphics/size@0.1.3

## 0.1.3

### Patch Changes

- 26350da: Update rect logic and propagate changes to point and size
- Updated dependencies [26350da]
  - @core-graphics/point@0.1.3
  - @core-graphics/size@0.1.2

## 0.1.2

### Patch Changes

- Updated dependencies [3872a1b]
  - @core-graphics/point@0.1.2

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

- Updated dependencies [071f5de]
- Updated dependencies [ad1d5bf]
  - @core-graphics/point@0.1.1
  - @core-graphics/size@0.1.1

## 0.1.0

### Minor Changes

- 62e3e1a: Initial release

### Patch Changes

- Updated dependencies [62e3e1a]
  - @core-graphics/point@0.1.0
  - @core-graphics/size@0.1.0
