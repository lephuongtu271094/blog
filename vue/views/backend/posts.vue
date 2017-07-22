<template>
<div>
    <header-admin></header-admin>
        <div class="container">
        <div class="row">
            <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
            <div v-if="errors">
                <div class="alert alert-danger" v-for="error in errors">{{error.msg}}</div>
            </div>
                <form method="POST">
                    <div class="form-group">
                        <a class="btn btn-default" href="/list">Back</a>
                        <button class="btn btn-default" type="submit">Save</button>
                    </div>
                    <div class="form-group">
                        Title: <input name="title" class="input-group" style="width: 100%" :value="title"/>
                    </div>
                    <div class="form-group">
                        Description:
                        <div id="post-description">{{ description }}</div>
                    </div>
                    <div class="form-group">
                        Content:
                        <div id="post-content">{{ content }}</div>
                    </div>
                </form>

            </div>
        </div>
    </div>
    <myfooter></myfooter>

</div>
</template>
<script>
    export default {
        data() {
            return{
                title: '',
                description: '',
                content: ''
            }
        }
    }
</script>