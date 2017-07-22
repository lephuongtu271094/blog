<template>
    <div>   
       <h2>
            {{ error.status }} {{ message }}
       </h2>
        
       <pre>
        {{ error.stack }}
       </pre>
    </div>
</template>

<script>
export default {
    data () {
       return{

           error: '',
           message:''
       }
    }
}
</script>