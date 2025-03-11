import { mount } from '@vue/test-utils';
import Modal from '../../src/components/Modal.vue';

describe('Modal Integration Tests', () => {
  it('opens and closes correctly', async () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: false
      }
    });
    
    await wrapper.setProps({ modelValue: true });
    expect(wrapper.classes()).toContain('q-modal-open');
    
    await wrapper.setProps({ modelValue: false });
    expect(wrapper.classes()).not.toContain('q-modal-open');
  });

  it('handles keyboard events', async () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: true
      }
    });
    
    await wrapper.trigger('keydown.esc');
    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0]).toEqual([false]);
  });

  it('prevents body scroll when open', async () => {
    const wrapper = mount(Modal, {
      props: {
        modelValue: true
      }
    });
    
    expect(document.body.style.overflow).toBe('hidden');
    await wrapper.setProps({ modelValue: false });
    expect(document.body.style.overflow).toBe('');
  });
});
