import { mount } from "@vue/test-utils";
import Radio from "@/components/TDRadio.vue";

describe("component Radio", () => {
  const wrapper = mount(Radio, {
    propsData: {
      value: "All"
    }
  });

  test("input props", () => {
    expect(wrapper.props().value).toBe("All");
  });
  test("exist is radio", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
