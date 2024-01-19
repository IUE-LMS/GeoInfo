<!--App.vue is the root component that coordiantes all other components, any changes made here will be rendered
and mounted via main.js to index.html -->

<template>
  <div id="app">

    <!--Static title and info class-->
    <h2 class="title">Welcome to Geo Info</h2>
    <div>{{greeting}}</div>

    <!--Form for user input -->
    <div class="add-form">
 
      <h2>Enter a Postcode:</h2>
      
      <input type="text" v-model="postcode" required placeholder="e.g. BT41 1RG">
     
      <input type="submit" value="search" class="btn-btn-block" @click="fetchAPI(postcode)"/>
    </div>
 
  <!--Header changes based on postcode provided by user, appears if results returned -->
    <h4 v-if="resultsReturned">Results for {{postcode}}</h4>

   <!--JSON results displayed in browser unmodified-->
    <div v-if="resultsReturned">
      <pre>
        {{ JSON.stringify(jsonResponse, null, 2) }}
      </pre>


<!-- json response as text - partially working, issue with returning codes as json as well as text?
     Possibly use computed property for excluding codes?
     
      <h2 v-for="result in jsonResponse" :key="result.first">{{ result.first }} {{ result.second }}</h2>
      <h3 v-for="(key, value) in jsonResponse.result" :key="value"> {{ value }} {{ key }}</h3>
      <h4 v-for="(key, value) in jsonResponse.result.codes" :key="value"> {{value }} {{ key }}</h4>

-->

   </div> 
 </div>
</template>

<script>
//Imports

//Exports
export default {
  data(){
    return {
      greeting: "Search for geographical information by providing a valid postcode",
      jsonResponse: null,
      resultsReturned: false,
      postcode: "",
    };
  }, 
  methods: {
    //FetchAPI - takes postcode and fetches json data from postcodes.io
    async fetchAPI(postcode){

      try{
          const response = await fetch('https://api.postcodes.io/postcodes/' + postcode);
          this.jsonResponse = await response.json();
          this.resultsReturned = true;
      }
      catch (error)
      { 
        console.error('Error fetching data:', error);
      }     
    },
    mounted(){
      this.fetchAPI();
    },

    //Regex Validation of postcode - needs work
 /*   validatePostcode(postcode) {
      if (/^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i.test(postcode)) {
        return
      } else {
        alert("Postcode invalid!")
      }
    }
  },

  //Watcher for postcode Validation
  watch: {
    postcode(value){
      this.postcode = value;
      this.validatePostcode(value);
    }
  },*/
  
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

.title{
  text-align: center;
  font-size: xx-large;
  color: goldenrod;
}

.resultsHeader
{
  text-align: center;
  font-size: x-large;

}

.results{
  text-align: center;
  font-size: large;
  
}
</style>
