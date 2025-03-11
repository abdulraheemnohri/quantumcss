import { render, fireEvent } from '@testing-library/vue';
import ThemeSwitch from '../../src/components/ThemeSwitch.vue';

describe('ThemeSwitch Component', () => {
  it('toggles between light and dark themes', async () => {
    const { getByRole, emitted } = render(ThemeSwitch, {
      props: {
        theme: 'light'
      }
    });
    
    const toggle = getByRole('switch');
    await fireEvent.click(toggle);
    
    expect(emitted()['update:theme'][0]).toEqual(['dark']);
  });

  it('persists theme preference', async () => {
    const { getByRole } = render(ThemeSwitch);
    const toggle = getByRole('switch');
    
    await fireEvent.click(toggle);
    expect(localStorage.getItem('theme-preference')).toBe('dark');
  });
});
