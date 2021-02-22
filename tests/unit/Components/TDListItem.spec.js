import { mount, shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ListItem from "@/views/Home.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for component Input", () => {
  let mutations;
  let store;
  let getters;

  beforeEach(() => {
    mutations = {
      initTasks: jest.fn()
    };
    getters = {
      filteredTasks: () => [
        {
          // id: '1',
          text: "222",
          isComplete: false
        },
        {
          // id: '2',
          text: "111",
          isComplete: false
        }
      ]
    };
    store = new Vuex.Store({
      mutations,
      getters
    });
  });

  test("render a task", () => {
    const wrapper = mount(ListItem, { store, localVue });
    expect(wrapper.find("label")).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
  test("contain a task", () => {
    const wrapper = shallowMount(ListItem, { store, localVue });
    expect(wrapper.find("div")).toBeTruthy();
  });
  test("contain a Task of input", () => {
    const wrapper = mount(ListItem, { store, localVue });
    expect(wrapper.find("input")).toBeTruthy();
  });
  test("setChecked", () => {
    const wrapper = mount(ListItem, { store, localVue });
    const checkboxInput = wrapper.find('input[type="checkbox"]');
    checkboxInput.trigger("click");
    expect(checkboxInput.element.checked).toBeTruthy();
  });
});
