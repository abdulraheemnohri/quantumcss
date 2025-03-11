import { mount } from '@vue/test-utils';
import LandingPage from '../../src/components/LandingPage.vue';

describe('LandingPage Integration Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(LandingPage);
  });

  it('renders the landing page correctly', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.q-hero').exists()).toBe(true);
    expect(wrapper.find('.q-cta').text()).toContain('Get Started');
  });

  it('displays the correct title', () => {
    const title = wrapper.find('.q-title');
    expect(title.text()).toBe('Welcome to QuantumCSS');
  });

  it('has a functional call-to-action button', async () => {
    const button = wrapper.find('.q-btn');
    await button.trigger('click');
    expect(wrapper.emitted().ctaClicked).toBeTruthy();
  });
});