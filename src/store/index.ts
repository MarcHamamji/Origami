import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { Projects } from '@/types/projects';

import projects from '@/projects.json';

export interface State {
  projects: Projects;
}

export const key: InjectionKey<Store<State>> = Symbol('store_key');

export default createStore<State>({
  state: {
    projects,
  },
  getters: {
    getProject: (state) => (id: string) => state.projects.find((value) => value.id === id),
  },
  mutations: {},
  actions: {},
  modules: {},
});

export function useStore() {
  return baseUseStore(key);
}
