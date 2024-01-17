<template>
  <div id="app">
 
    <Welcome msg="Welcome to Geo Info"/>

  <!-- <img alt="Free stock image by Lina Kivaka" src="./assets/Postbox.jpeg"> -->
      
    <form>
      <p><b>Postcode: </b></p>
      <p><input type="text" required v-model="postcode" placeholder="e.g. BT41 1XP"></p>
      <button type="submit">Search</button>    
    </form>
        
  </div>
</template>

<script>

import Welcome from './components/Welcome.vue';

export default {
  name: 'App',
  components: {
    Welcome
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
  margin-top: 10px;
  background-color: #F2F1EB;
 
  

}
</style>
