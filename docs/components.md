# Components Documentation

QuantumCSS provides a set of pre-built components that can be easily integrated into your projects. Below is a list of the available components along with their usage and examples.

## Button

The button component is designed for various actions within your application. It supports different styles and sizes.

### Classes
- `.q-btn`: Base button class.
- `.q-btn-primary`: Primary button variant.
- `.q-btn-secondary`: Secondary button variant.
- `.q-btn-large`: Large button size.
- `.q-btn-small`: Small button size.

### Example
```html
<button class="q-btn q-btn-primary">Primary Button</button>
<button class="q-btn q-btn-secondary">Secondary Button</button>
```

## Card

The card component is used to display content in a structured format. It can include images, text, and actions.

### Classes
- `.q-card`: Base card class.
- `.q-card-header`: Header section of the card.
- `.q-card-body`: Body section of the card.
- `.q-card-footer`: Footer section of the card.

### Example
```html
<div class="q-card">
  <div class="q-card-header">Card Title</div>
  <div class="q-card-body">This is some content inside the card.</div>
  <div class="q-card-footer">
    <button class="q-btn q-btn-primary">Action</button>
  </div>
</div>
```

## Modal

The modal component is used for displaying content in a dialog overlay. It can be used for alerts, confirmations, or forms.

### Classes
- `.q-modal`: Base modal class.
- `.q-modal-content`: Content area of the modal.
- `.q-modal-header`: Header section of the modal.
- `.q-modal-body`: Body section of the modal.
- `.q-modal-footer`: Footer section of the modal.

### Example
```html
<div class="q-modal">
  <div class="q-modal-content">
    <div class="q-modal-header">Modal Title</div>
    <div class="q-modal-body">This is the modal body content.</div>
    <div class="q-modal-footer">
      <button class="q-btn q-btn-secondary">Close</button>
    </div>
  </div>
</div>
```

## Navbar

The navbar component is used for navigation links and branding. It can be customized to fit the needs of your application.

### Classes
- `.q-navbar`: Base navbar class.
- `.q-navbar-item`: Individual item in the navbar.
- `.q-navbar-brand`: Branding section of the navbar.

### Example
```html
<nav class="q-navbar">
  <div class="q-navbar-brand">Brand</div>
  <div class="q-navbar-item">Home</div>
  <div class="q-navbar-item">About</div>
  <div class="q-navbar-item">Contact</div>
</nav>
```

## Conclusion

These components are designed to be flexible and easy to use. You can customize them further by applying additional utility classes as needed. For more detailed information on utility classes, refer to the [Utilities Documentation](utilities.md).