import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeConfig from "./store-config.js";

describe("Store test", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store(storeConfig);

  it("Test state used actions", () => {
    store.dispatch("initTasks");
    expect(store.state.todos.length).toBe(0);
  });
  it('Test mutation "createPost"', () => {
    let newTask = "newTask";
    store.commit("createPost", newTask);
    expect(store.state.todos[0].text).toBe("newTask");
    expect(store.state.todos[0].isComplete).toBe(false);
  });
  it('Test mutation "setFilter"', () => {
    const newFilter = "newFilter";
    store.commit("setFilter", newFilter);
    expect(store.state.filter).toBe(newFilter);
  });
  it('Test getter "filteredTasks"', () => {
    store.state.filter = "All";
    expect(store.getters.filteredTasks).toBe(store.state.todos);
    store.state.filter = "Active";
    expect(store.getters.filteredTasks.length).toBe(1);
    store.state.filter = "Completed";
    expect(store.getters.filteredTasks.length).toBe(0);
  });
  it('Test mutation "deleteCompleted"', () => {
    store.commit("deleteCompleted");
    expect(store.state.todos).toStrictEqual(
      store.state.todos.filter(todo => !todo.isComplete)
    );
  });
});
