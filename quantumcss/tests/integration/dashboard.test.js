import { mount } from '@vue/test-utils';
import Dashboard from '../../src/components/Dashboard.vue';

describe('Dashboard Integration Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Dashboard);
  });

  it('renders the dashboard title', () => {
    const title = wrapper.find('.dashboard-title');
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe('Dashboard');
  });

  it('displays the correct number of cards', () => {
    const cards = wrapper.findAll('.card');
    expect(cards.length).toBe(3); // Adjust based on expected number of cards
  });

  it('navigates to the correct route when a card is clicked', async () => {
    const card = wrapper.find('.card');
    await card.trigger('click');
    expect(wrapper.vm.$route.path).toBe('/expected-route'); // Adjust based on expected route
  });

  afterEach(() => {
    wrapper.destroy();
  });
});