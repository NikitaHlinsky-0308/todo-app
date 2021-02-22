import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Footer from "@/components/TDFooter.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for component input", () => {
  let mutations;
  let store;
  beforeEach(() => {
    mutations = {
      setFilter: jest.fn()
    };
    store = new Vuex.Store({
      mutations
    });
  });

  it("contain in App", () => {
    const wrapper = mount(Footer, { store, localVue });

    wrapper.find("input").trigger("change");
    expect(mutations.setFilter).toHaveBeenCalled();
  });
  it("render a Footer", () => {
    const wrapper = mount(Footer, { store, localVue });
    expect(wrapper.find("Tab")).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
});
