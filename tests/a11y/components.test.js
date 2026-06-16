import { render } from '@testing-library/vue';
import { axe, toHaveNoViolations } from 'jest-axe';
import Button from '../../src/components/Button.vue';
import Card from '../../src/components/Card.vue';

expect.extend(toHaveNoViolations);

describe('Accessibility tests', () => {
  it('Button should have no a11y violations', async () => {
    const { container } = render(Button, {
      slots: { default: 'Click me' }
    });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Card should have no a11y violations', async () => {
    const { container } = render(Card, {
      propsData: { title: 'Test Card' },
      slots: { default: 'Content' }
    });
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
