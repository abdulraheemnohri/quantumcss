# Landing Page Example

This document provides an example of a landing page built using the QuantumCSS framework. The landing page showcases various components and utilities available in QuantumCSS.

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../dist/quantum.min.css">
    <title>Landing Page</title>
</head>
<body>
    <header class="q-navbar">
        <div class="q-navbar-brand">QuantumCSS</div>
        <nav class="q-navbar-menu">
            <a href="#features" class="q-btn">Features</a>
            <a href="#pricing" class="q-btn">Pricing</a>
            <a href="#contact" class="q-btn">Contact</a>
        </nav>
    </header>

    <main>
        <section class="q-hero">
            <h1 class="q-heading">Welcome to QuantumCSS</h1>
            <p class="q-text">A lightweight, modular, and modern CSS framework.</p>
            <a href="#get-started" class="q-btn q-btn-primary">Get Started</a>
        </section>

        <section id="features" class="q-features">
            <h2 class="q-heading">Features</h2>
            <div class="q-card">
                <h3 class="q-card-title">Modular Architecture</h3>
                <p class="q-card-content">Easily import only what you need.</p>
            </div>
            <div class="q-card">
                <h3 class="q-card-title">Responsive Design</h3>
                <p class="q-card-content">Built with mobile-first in mind.</p>
            </div>
        </section>

        <section id="pricing" class="q-pricing">
            <h2 class="q-heading">Pricing</h2>
            <p class="q-text">Choose a plan that fits your needs.</p>
            <div class="q-card">
                <h3 class="q-card-title">Free</h3>
                <p class="q-card-content">Basic features for personal use.</p>
            </div>
            <div class="q-card">
                <h3 class="q-card-title">Pro</h3>
                <p class="q-card-content">Advanced features for professionals.</p>
            </div>
        </section>

        <section id="contact" class="q-contact">
            <h2 class="q-heading">Contact Us</h2>
            <p class="q-text">We'd love to hear from you!</p>
            <form>
                <input type="text" placeholder="Your Name" class="q-input" required>
                <input type="email" placeholder="Your Email" class="q-input" required>
                <textarea placeholder="Your Message" class="q-input" required></textarea>
                <button type="submit" class="q-btn q-btn-primary">Send Message</button>
            </form>
        </section>
    </main>

    <footer class="q-footer">
        <p>&copy; 2023 QuantumCSS. All rights reserved.</p>
    </footer>
</body>
</html>
```

## CSS Styles

```css
.q-hero {
    background-color: var(--q-color-primary);
    color: white;
    padding: var(--q-spacing-unit) 0;
    text-align: center;
}

.q-features, .q-pricing, .q-contact {
    padding: var(--q-spacing-unit);
}

.q-card {
    margin: var(--q-spacing-unit);
    padding: var(--q-spacing-unit);
    border: 1px solid #ddd;
    border-radius: 4px;
}

.q-footer {
    text-align: center;
    padding: var(--q-spacing-unit);
    background-color: #f8f9fa;
}
``` 

This example demonstrates how to create a simple yet effective landing page using QuantumCSS, showcasing its components and utilities.