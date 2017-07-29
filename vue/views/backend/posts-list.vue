<template>
    <div>
        <header-admin></header-admin>
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
                    <!--<div v-if="messages">
                        <div v-for"key,value in messages">
                             <div class="alert alert-{{ key }}">{{ value }}</div>
                        </div>
                    </div>-->

                    <a class="btn btn-default" href="/admin/posts">New post</a>
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr v-for="post in posts">
                            <td>{{ post.id }}</td>
                            <td><a :href="'/admin/posts/'+post.id">{{ post.title}}</a></td>
                        </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        <myfooter></myfooter>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                posts: ''
            }
        }
    }
</script>