<!--App.vue is the root component that coordiantes all other components, any changes made here will be rendered
and mounted by main.js and index.html - this file contains HTML, CSS, JS -->

<template>
  <div id="app">
 
    <!--Custom html tag that calls Welcome.vue component-->
    <Welcome msg="Welcome to Geo Info"/>

    <!--body of text explaining the app to user-->
    <div>{{greeting}}</div>

    <!--UI components-->  
    <button v-bind:submitButton="isDisabled">Submit</button>
    <!--Returned results box-->


  </div>
</template>


<script>
//Imports
import Welcome from './components/Welcome.vue';
//import UserForm from './components/UserForm.vue';
//import API from './components/API.vue';

//Exports
export default {
  name: 'App',
  data(){
    return {
      greeting: "Search for geographical information by providing a valid postcode",
      isDisabled: true,
    };
  }, 
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
