import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Input from "@/components/TDInput.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for Input sunbmit", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      createPost: jest.fn()
    };
    store = new Vuex.Store({
      mutations
    });
  });

  it('call "createTask"', () => {
    const wrapper = shallowMount(Input, { store, localVue });
    wrapper.find("form").trigger("submit.prevent");
    expect(mutations.createPost).toHaveBeenCalled();
  });
});

describe("test for component Input", () => {
  const wrapper = shallowMount(Input);

  test("render a input", () => {
    expect(wrapper.find("input")).toBeTruthy();
  });
  test("visibility", () => {
    expect(wrapper.isVisible()).toBe(true);
  });
  test("setData", async () => {
    await wrapper.setData({ text: "TaskText1" });
    expect(wrapper.vm.text).toBe("TaskText1");
  });
});
