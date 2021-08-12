/* eslint-disable import/no-extraneous-dependencies */
import { mount } from '@vue/test-utils';
import { ICategory } from '../types/index';
import Category from '@/components/Category.vue';

const category: ICategory = {
  alias: 'restaurants',
  icon: 'restaurant',
  color: '#6366F1 ',
  title: 'Restaurants',
};

describe('Category.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Category, {
      props: {
        isSelected: false,
        category,
      },
    });
    expect(wrapper.html().includes(category.color));
    expect(wrapper.text()).toContain(category.icon);
  });
});
