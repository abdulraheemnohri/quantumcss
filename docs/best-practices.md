# Best Practices for QuantumCSS

To get the most out of QuantumCSS, follow these best practices for clean, maintainable, and performant code.

## 1. Modular Imports
Only import the modules you need. This keeps your CSS bundle size as small as possible.

```css
/* Instead of importing everything */
@import 'quantumcss/dist/quantum.min.css';

/* Import only what you need */
@import 'quantumcss/src/base/reset.css';
@import 'quantumcss/src/components/button.css';
@import 'quantumcss/src/utilities/spacing.css';
```

## 2. Utility-First for Layout, Components for UI
Use utility classes for spacing, alignment, and simple layout adjustments. Use pre-built components for complex UI elements like Modals, Navbars, and Cards.

## 3. Leverage CSS Variables
Avoid hardcoding colors. Use the provided CSS variables to ensure consistency across themes.

```css
.custom-element {
  background-color: var(--q-color-primary);
  padding: var(--q-spacing-md);
}
```

## 4. Mobile-First Design
Start styling for mobile devices first and use utility classes or media queries to scale up for larger screens.

## 5. Accessibility
Always include labels for form elements and use semantic HTML. QuantumCSS components are designed with accessibility in mind, but proper implementation is key.
