import axios from 'axios'

export const state = () => ({
  directory: '',
  todos: []

})
export const getters = {
  getTodos(state) {
    return state.todos;
  }
}
export const mutations = {
  saveInfo(state, payload) {
    state.directory = payload.directory
  },
  setTodos(state, data) {
    state.todos = data;
  }
}
export const actions = {
  async getTodos ({commit}) {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    commit('setTodos', res.data);
  }
}
