import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    inputValue: '',
    ViewDate: 'All'
  },
  getters: {
    getStatusLength (state) {
      return state.data.filter(x => x.done === false).length
    },
    ViewDatetoggle (state) {
      if (state.ViewDate === 'All') {
        return state.data
      } else if (state.ViewDate === 'undone') {
        return state.data.filter(x => x.done === false)
      } else if (state.ViewDate === 'done') {
        return state.data.filter(x => x.done === true)
      }
      return state.data
    }
  },
  mutations: {
    // 获取数据传给state
    getList (state, data) {
      state.data = data
    },
    setInputValue (state, val) {
      state.inputValue = val
    },
    addItem (state) {
      const obj = {
        data: state.inputValue,
        id: state.data.length,
        done: true
      }
      state.data.push(obj)
      state.inputValue = ''
    },
    removeItem (state, id) {
      const i = state.data.filter(x => x.id !== id)
      state.data = i
    },
    checkedItem (state, e) {
      const i = state.data.findIndex(x => x.id === e.id)
      state.data[i].done = e.val
    },
    removeFinishItem (state) {
      const i = state.data.filter(x => x.done === false)
      state.data = i
    },
    toggto (state, val) {
      state.ViewDate = val
    }
  },
  actions: {
    // 异步请求值
    dataAsync (context) {
      axios.get('/list.json').then(({ data }) => {
        // console.log(list.data)
        context.commit('getList', data)
      })
    }
  },
  modules: {
  }
})
