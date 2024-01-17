//Vue.js Communication Script

/*new Vue ({

    el: '#app',
   
//result gets populated and returned to UI
    data () {
        return {
            info: null
        }
    },

mounted () {
    axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
    }
})

//Component Methods for interacting with API
 /*   methods: {
        fetchAPIData( ) { 

            //this.responseAvailable = false;
            fetch("https://catfact.ninja/fact", {
                "method": "GET",
            })

            //Error handling on returned response
            .then(response => { 
                if(response.ok){
                    return response.json()    
                } else{
                    alert("Server returned " + response.status + " : " + response.statusText);
                }                
            })

            //response data
            .then(response => {
                this.result = response.body; 
                this.responseAvailable = true;
            })
            //Error handling on data storing
            .catch(err => {
                console.log(err);
            });
            
            
         }
    }

})*/