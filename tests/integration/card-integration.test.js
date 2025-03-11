import { mount } from '@vue/test-utils';
import Card from '../../src/components/Card.vue';

describe('Card Integration Tests', () => {
  it('handles click events', async () => {
    const wrapper = mount(Card, {
      props: {
        clickable: true
      }
    });
    
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('applies theme classes correctly', () => {
    const wrapper = mount(Card, {
      props: {
        theme: 'dark'
      }
    });
    
    expect(wrapper.classes()).toContain('q-theme-dark');
  });

  it('renders nested components properly', () => {
    const wrapper = mount(Card, {
      slots: {
        header: '<div class="custom-header">Header</div>',
        default: '<p>Content</p>',
        footer: '<button>Action</button>'
      }
    });
    
    expect(wrapper.find('.custom-header').exists()).toBe(true);
    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });
});
