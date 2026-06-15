# Blog Example

A clean, readable blog layout built with QuantumCSS.

## HTML Structure

```html
<div class="q-layout">
  <nav class="q-navbar q-border-b">
    <div class="q-container">
      <div class="q-navbar-brand">DevBlog</div>
    </div>
  </nav>

  <main class="q-py-12">
    <div class="q-container q-max-w-3xl">
      <article class="q-mb-16">
        <header class="q-mb-8">
          <div class="q-flex q-items-center q-gap-2 q-mb-2">
            <span class="q-badge q-badge-secondary">Engineering</span>
            <span class="q-text-sm q-text-secondary">Oct 24, 2023</span>
          </div>
          <h1 class="q-text-3xl q-font-bold">The Future of CSS Frameworks</h1>
        </header>
        <section class="q-typography">
          <p>QuantumCSS is leading the way in modular, lightweight styling...</p>
          <p>Why choose utility-first when you can have the best of both worlds?</p>
        </section>
        <footer class="q-mt-8 q-pt-8 q-border-t">
          <div class="q-flex q-items-center q-gap-4">
            <div class="q-spinner q-spinner-sm"></div>
            <span class="q-text-sm">Loading comments...</span>
          </div>
        </footer>
      </article>

      <section class="q-grid q-gap-8">
        <h2 class="q-text-xl q-font-bold">Related Posts</h2>
        <div class="q-card">
          <div class="q-card-body">
            <h3 class="q-text-lg q-font-bold">Understanding Flexbox</h3>
            <p class="q-text-sm q-text-secondary">A deep dive into modern layouts.</p>
          </div>
        </div>
      </section>
    </div>
  </main>
</div>
```
