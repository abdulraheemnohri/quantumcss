import { render } from '@testing-library/vue';
import Card from '../../src/components/Card.vue';

describe('Card Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(Card, {
      props: {
        title: 'Card Title',
        content: 'This is the card content.',
      },
    });

    expect(getByText('Card Title')).toBeInTheDocument();
    expect(getByText('This is the card content.')).toBeInTheDocument();
  });

  it('applies the correct class for shadow effect', () => {
    const { container } = render(Card, {
      props: {
        shadow: true,
      },
    });

    expect(container.firstChild).toHaveClass('q-card-shadow');
  });

  it('does not apply shadow class when shadow prop is false', () => {
    const { container } = render(Card, {
      props: {
        shadow: false,
      },
    });

    expect(container.firstChild).not.toHaveClass('q-card-shadow');
  });

  it('renders card with custom class', () => {
    const { container } = render(Card, {
      props: {
        customClass: 'custom-card'
      },
    });

    expect(container.firstChild).toHaveClass('custom-card');
  });

  it('handles empty content gracefully', () => {
    const { container } = render(Card);
    expect(container.firstChild).toBeInTheDocument();
  });
});