<template>

    <div class="about-tre">

        <div class="a-1">
            <div class="col-md-6 abt-left" v-for="post in posts">
                <a :href="'/single/'+post.id"><img :src="'/image-posts/'+ post.img " alt=""/></a>
                <h3><a href="/single">{{post.title}}</a></h3>
                <p> {{reversedMessage(post.description)}} </p>
                <label>{{ post.created }}</label>
            </div>
            <div class="clearfix"></div>
        </div>

        

</template>
<script>
    export default{
        props: ['posts'],
        methods: { 
				reversedMessage(description) {
					return description.substring(0,150) + '. . .'
				}
			}
    }
</script>