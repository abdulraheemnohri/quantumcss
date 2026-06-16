# Framework Integrations

QuantumCSS provides official wrappers for popular JavaScript frameworks to improve the developer experience and provide type safety.

## React

The `@quantumcss/react` package provides a set of reusable React components.

### Installation

```bash
npm install @quantumcss/react
```

### Usage

```tsx
import { Button, Card, Badge } from '@quantumcss/react';

function App() {
  return (
    <Card title="Project Update">
      <p>QuantumCSS React components are ready!</p>
      <Badge variant="success">Active</Badge>
      <Button primary onClick={() => console.log('Clicked!')}>
        View Details
      </Button>
    </Card>
  );
}
```

### Components

#### Button
- `primary`: boolean
- `disabled`: boolean
- `loading`: boolean
- `onClick`: function

#### Badge
- `variant`: 'primary' | 'success' | 'warning' | 'danger'
- `dot`: boolean

#### Card
- `title`: ReactNode
- `footer`: ReactNode

## Vue 3

*(Coming Soon)* Official Vue 3 components are under development. In the meantime, you can use the core CSS classes directly.

## Angular

QuantumCSS works seamlessly with Angular. Simply include the CSS in your `angular.json` and use the classes in your templates.
