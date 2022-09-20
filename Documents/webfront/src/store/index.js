import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
  },
  getters: {
  },
  mutations: {
    setUser(state,user){
      state.user = user;
    },
    setToken(state,token){
      state.token = token;
      localStorage.token = token;
    },
    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },
  },

  actions: {
    login({commit}, credentials) {
    

      axios.post('http://localhost:8000/users/login/', {
      email: credentials.email,
      password: credentials.password,
    })
    .then(res => {
      localStorage.setItem('jwt', res.data.jwt);
      console.log(res.data.jwt);

      commit('setToken', res.data.jwt);
      router.push({path: '/category'});
      
    })
  },
   authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        console.log(user.token);
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}
    
  },
  modules: {
  }
})
