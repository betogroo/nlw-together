import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import StateAuth from '@/modules/core/auth/types/State'

/* export interface State {
  count: number
  name: string
} */

export const key: InjectionKey<Store<StateAuth>> = Symbol()

export const store = createStore<StateAuth>({
  state: {
    loggedUser: {
      email: 'email@email.com',
      displayName: 'Beto',
      role: 'user',
      uid: '887766'
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})

export const useStore = (): any => {
  return baseUseStore(key)
}
