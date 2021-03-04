import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { Projects } from '@/types/projects';

import projects from '@/projects.json';

export interface State {
  projects: Projects;
  filter: string;
}

export const key: InjectionKey<Store<State>> = Symbol('store_key');

export default createStore<State>({
  state: {
    projects,
    filter: '',
  },
  getters: {
    getProject: (state) => (id: string) => state.projects.find((value) => value.id === id),
    currentProjects: (state) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      state.projects.filter((p) => {
        console.log(p.name, state.filter);
        return p.name.toLowerCase().includes(state.filter.toLowerCase());
      }),
  },
  mutations: {
    setFilter(state, newFilter: string) {
      state.filter = newFilter;
    },
  },
  actions: {},
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
