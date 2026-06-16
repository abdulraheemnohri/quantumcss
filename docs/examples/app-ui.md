# Full App UI Example

A comprehensive application interface built with QuantumCSS, showcasing advanced components like Avatars, Tags, and Input Groups.

## HTML Structure

```html
<div class="q-layout q-flex">
  <!-- Sidebar -->
  <aside class="q-sidebar q-bg-dark q-text-white q-p-6" style="width: 280px; height: 100vh;">
    <div class="q-navbar-brand q-mb-8">QuantumApp</div>
    <nav class="q-list">
      <div class="q-list-item">Dashboard</div>
      <div class="q-list-item">Projects</div>
      <div class="q-list-item">Tasks</div>
      <div class="q-list-item">Settings</div>
    </nav>
  </aside>

  <!-- Main Content -->
  <main class="q-flex-1 q-bg-light q-p-8">
    <header class="q-flex q-justify-between q-items-center q-mb-8">
      <h1 class="q-text-2xl q-font-bold">Project Overview</h1>
      <div class="q-flex q-items-center q-gap-4">
        <div class="q-avatar q-avatar-md">JD</div>
      </div>
    </header>

    <div class="q-grid q-grid-cols-1 md:q-grid-cols-3 q-gap-6">
      <!-- Summary Card -->
      <div class="q-card">
        <div class="q-card-header">Active Tasks</div>
        <div class="q-card-body">
          <div class="q-text-4xl q-font-bold">12</div>
          <div class="q-progress q-mt-4">
            <div class="q-progress-bar" style="width: 45%;"></div>
          </div>
        </div>
      </div>

      <!-- Alert Section -->
      <div class="q-card md:q-col-span-2">
        <div class="q-card-header">System Notifications</div>
        <div class="q-card-body">
          <div class="q-alert q-alert-info">
            New update available for the analytics engine.
          </div>
          <div class="q-alert q-alert-warning">
            Your subscription will expire in 3 days.
          </div>
        </div>
      </div>

      <!-- Task List -->
      <div class="q-card md:q-col-span-3">
        <div class="q-card-header q-flex q-justify-between q-items-center">
          <span>Recent Tasks</span>
          <div class="q-input-group" style="width: 300px;">
            <input type="text" class="q-input" placeholder="Search tasks...">
            <button class="q-btn q-btn-primary">Search</button>
          </div>
        </div>
        <div class="q-card-body">
          <table class="q-table">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Assignee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Setup CI/CD</td>
                <td><span class="q-tag">In Progress</span></td>
                <td><span class="q-badge q-badge-danger">High</span></td>
                <td><div class="q-avatar q-avatar-sm">AS</div></td>
              </tr>
              <tr>
                <td>Design System Audit</td>
                <td><span class="q-tag">Done</span></td>
                <td><span class="q-badge q-badge-success">Low</span></td>
                <td><div class="q-avatar q-avatar-sm">MK</div></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</div>
```
