<!-- The Welcome component contains the welcome text and app information provided to the user -->


<!--This the html element which uses the placeholder of msg in the script element,
   which dynamically changes according to data changes (reactively re-renders ) 
  Template tags toggle it's content based on conditional statements if provided -->
<template>
    <div class="hello">
      <h1>{{ msg }}</h1>

     
    </div>


  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
      
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  