<template>
  <div>

    <b-navbar toggleable="lg" type="dark" variant="info">



<b-navbar-nav class="ms-auto">

  <router-view />
    <nav>
      <router-link to="/">Home</router-link><br>
      <router-link v-if = "token" to="/comment">Comment</router-link><br>
      <router-link v-if = "token" to="/category">Category</router-link><br>  
      <router-link v-if = "!token" to="/login">Login</router-link><br>
      <router-link v-if = "token" to="/post">Post</router-link><br> 
      <router-link v-if = "token" to="/user">User</router-link><br> 
      <input type = "submit" value = "Log out" @click = "logout();reloadPage()">
    </nav>
</b-navbar-nav>


</b-navbar>

  </div>
</template>





<script>

import { mapState, mapMutations } from 'vuex';


export default {
  name: 'App',

  computed: {
    ...mapState([
      'token'
    ])
  },

  mounted() {

    if (localStorage.token) {
      this.setToken(localStorage.token);
    }
  },

  methods: {
    ...mapMutations([
      'removeToken',
      'setToken'
    ]),

    logout() { this.removeToken(); },

    reloadPage(){
          window.location.reload();
        }

  }


}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 15px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>