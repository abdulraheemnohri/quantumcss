# Portfolio Example

A professional portfolio layout built with QuantumCSS.

## HTML Structure

```html
<div class="q-layout">
  <nav class="q-navbar q-bg-white q-border-b">
    <div class="q-container q-flex q-justify-between q-items-center">
      <div class="q-text-xl q-font-bold">John Doe</div>
      <div class="q-flex q-gap-4">
        <a href="#work" class="q-text-md">Work</a>
        <a href="#about" class="q-text-md">About</a>
        <a href="#contact" class="q-btn q-btn-primary q-btn-small">Hire Me</a>
      </div>
    </div>
  </nav>

  <header class="q-py-20 q-bg-light">
    <div class="q-container q-text-center">
      <h1 class="q-text-4xl q-font-bold q-mb-4">Creative Developer & Designer</h1>
      <p class="q-text-lg q-text-secondary q-max-w-2xl q-mx-auto">
        I build high-performance, beautiful websites with modern technologies.
      </p>
    </div>
  </header>

  <section id="work" class="q-py-16">
    <div class="q-container">
      <h2 class="q-text-2xl q-font-bold q-mb-8">Selected Projects</h2>
      <div class="q-grid q-grid-cols-1 md:q-grid-cols-2 q-gap-8">
        <div class="q-card">
          <div class="q-card-header q-p-0">
            <img src="https://via.placeholder.com/600x400" alt="Project 1" class="q-w-full">
          </div>
          <div class="q-card-body">
            <h3 class="q-text-xl q-font-bold">E-commerce Platform</h3>
            <p class="q-text-secondary">A full-featured online store built with React and QuantumCSS.</p>
            <div class="q-flex q-gap-2 q-mt-4">
              <span class="q-badge q-badge-primary">React</span>
              <span class="q-badge q-badge-secondary">Node.js</span>
            </div>
          </div>
        </div>
        <div class="q-card">
          <div class="q-card-header q-p-0">
            <img src="https://via.placeholder.com/600x400" alt="Project 2" class="q-w-full">
          </div>
          <div class="q-card-body">
            <h3 class="q-text-xl q-font-bold">Social Media App</h3>
            <p class="q-text-secondary">Real-time networking app with messaging and feed features.</p>
            <div class="q-flex q-gap-2 q-mt-4">
              <span class="q-badge q-badge-primary">Vue.js</span>
              <span class="q-badge q-badge-secondary">Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="q-py-8 q-bg-dark q-text-white">
    <div class="q-container q-text-center">
      <p>&copy; 2023 John Doe. Built with QuantumCSS.</p>
    </div>
  </footer>
</div>
```
