<!--The UserForm component contains the user form code -->

<template>
<div>
    <input type="text" name="postcode" id="postcode" placeholder="e.g. BT41 1XP">

    <button>Submit</button>
</div>


</template>

<!--This is where the function logic goes-->
<script>

fetchResponse(document.getElementById('postcode').value)
{

}

export default {
    name: 'UserForm',
    props: {
      msg: String
      
    }
  }

</script>