# Utilities Documentation for QuantumCSS

## Overview
QuantumCSS provides a set of utility classes that help in managing spacing, colors, and typography throughout your application. These utility classes are designed to be flexible and easy to use, allowing for rapid development and consistent styling.

## Utility Classes

### Spacing Utilities
The spacing utilities provide classes for margin and padding. You can use these classes to quickly adjust the spacing of elements.

- **Margin Classes**
  - `.m-{size}`: Sets margin on all sides.
  - `.mt-{size}`: Sets margin-top.
  - `.mr-{size}`: Sets margin-right.
  - `.mb-{size}`: Sets margin-bottom.
  - `.ml-{size}`: Sets margin-left.
  - `.mx-{size}`: Sets horizontal margins (left and right).
  - `.my-{size}`: Sets vertical margins (top and bottom).

- **Padding Classes**
  - `.p-{size}`: Sets padding on all sides.
  - `.pt-{size}`: Sets padding-top.
  - `.pr-{size}`: Sets padding-right.
  - `.pb-{size}`: Sets padding-bottom.
  - `.pl-{size}`: Sets padding-left.
  - `.px-{size}`: Sets horizontal padding (left and right).
  - `.py-{size}`: Sets vertical padding (top and bottom).

### Color Utilities
The color utilities allow you to easily apply colors to text, backgrounds, and borders.

- **Text Color Classes**
  - `.text-{color}`: Sets the text color.
  
- **Background Color Classes**
  - `.bg-{color}`: Sets the background color.

- **Border Color Classes**
  - `.border-{color}`: Sets the border color.

### Typography Utilities
The typography utilities provide classes for adjusting font sizes, weights, and line heights.

- **Font Size Classes**
  - `.text-xs`: Extra small text.
  - `.text-sm`: Small text.
  - `.text-md`: Medium text.
  - `.text-lg`: Large text.
  - `.text-xl`: Extra large text.

- **Font Weight Classes**
  - `.font-light`: Light font weight.
  - `.font-normal`: Normal font weight.
  - `.font-bold`: Bold font weight.

- **Line Height Classes**
  - `.leading-normal`: Normal line height.
  - `.leading-loose`: Loose line height.

## Usage Example
```html
<div class="m-4 p-2 bg-blue-500 text-white">
  <h1 class="text-lg font-bold">Hello, QuantumCSS!</h1>
</div>
```

## Conclusion
The utility classes in QuantumCSS are designed to enhance your development experience by providing quick and easy ways to style your application. Use these classes to maintain consistency and speed up your workflow.