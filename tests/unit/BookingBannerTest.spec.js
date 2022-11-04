import { mount } from "@vue/test-utils";
import BookingBanner from '@/components/BookingBanner.vue'


describe("BookingBanner", () => {
  test('Booking banner component contains a div element', () => {
    const wrapper = mount(BookingBanner);
    expect(wrapper.find("div").exists()).toBe(true)
  })
});
