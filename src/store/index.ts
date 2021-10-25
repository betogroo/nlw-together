import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export interface State {
  count: number
  name: string
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 2,
    name: 'beto'
  },
  mutations: {},
  actions: {},
  modules: {}
})

export const useStore = (): any => {
  return baseUseStore(key)
}
