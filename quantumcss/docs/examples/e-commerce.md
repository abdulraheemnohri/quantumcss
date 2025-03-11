# E-commerce Example

This document provides an example of an e-commerce page built using the QuantumCSS framework. The example showcases various components and utilities available in QuantumCSS to create a responsive and visually appealing e-commerce layout.

## Page Structure

The e-commerce page consists of the following sections:

1. **Header**: Contains the navigation bar and logo.
2. **Product Listings**: Displays a grid of products with images, titles, prices, and add-to-cart buttons.
3. **Footer**: Includes links to additional information and social media.

## Example Code

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/quantumcss/dist/quantum.min.css">
    <title>E-commerce Page</title>
</head>
<body>
    <header class="q-navbar">
        <div class="q-navbar-brand">My E-commerce Store</div>
        <nav class="q-navbar-menu">
            <a href="#" class="q-navbar-item">Home</a>
            <a href="#" class="q-navbar-item">Products</a>
            <a href="#" class="q-navbar-item">Contact</a>
        </nav>
    </header>

    <main class="q-container">
        <h1 class="q-text-center">Featured Products</h1>
        <div class="q-grid">
            <div class="q-card" v-for="product in products" :key="product.id">
                <img :src="product.image" alt="Product Image" class="q-card-image">
                <div class="q-card-body">
                    <h2 class="q-card-title">{{ product.title }}</h2>
                    <p class="q-card-price">${{ product.price }}</p>
                    <button class="q-btn q-btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    </main>

    <footer class="q-footer">
        <p>&copy; 2023 My E-commerce Store. All rights reserved.</p>
    </footer>
</body>
</html>
```

### CSS Styles

```css
/* Custom styles for the e-commerce page */
.q-container {
    padding: var(--q-spacing-unit);
}

.q-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: var(--q-spacing-unit);
}

.q-card {
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
}

.q-card-image {
    width: 100%;
    height: auto;
}

.q-footer {
    text-align: center;
    padding: var(--q-spacing-unit);
    background-color: var(--q-color-secondary);
    color: white;
}
```

## Conclusion

This example demonstrates how to create a simple e-commerce page using QuantumCSS. By utilizing the framework's components and utilities, developers can build responsive and attractive web applications efficiently.