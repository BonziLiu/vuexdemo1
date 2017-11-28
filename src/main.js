// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//引入vuex
import Vuex from 'vuex'

//全局注册
Vue.use(Vuex)

//实例化vuex仓库
const store = new Vuex.Store({
//这个就是状态（数据）
  state: {
    //总价钱
    money:0
  },
  //要修改vuex仓库中的state的状态（数据）的话，必要通过mutations中的方法来操作
  mutations: {
    //我们习惯把mutations里的方法写成大写
    ADD (state, price) {
      //在mutations里的所有方法的第一个参数就是我们仓库中的state 这里不要用this.state
      state.money += price 
    },
    REDUCE (state, price) {
      state.money -= price
    }
  },
  actions: {
    add1 ({commit}, price) {
      commit('ADD', price);
    },
    reduce1 ({commit}, price) {
      commit('REDUCE', price)
    }
  },
  getters: {
    //格式化返回数据
    getMoneyStr (state) {
      return "总价钱：" + state.money + "元";
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //关联vuex
  store,
  template: '<App/>',
  components: { App }
})
