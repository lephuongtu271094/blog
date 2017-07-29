<template>
    <div>
        <header-admin></header-admin>
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
                    <div v-if="errors">
                        <div class="alert alert-danger" v-for="error in errors">{{error.msg}}</div>
                    </div>
                    <div v-if="description">
                        <form method="POST" action="?_method=DELETE">
                            <button class="btn btn-danger pull-right" type="submit">Delete</button>
                        </form>
                    </div>


                    <form method="POST" enctype="multipart/form-data">
                        <div class="form-group">
                            <button class="btn btn-default" type="submit">Save</button>
                        </div>
                        <div class="form-group">
                            Title: <input name="title" class="input-group" style="width: 100%" :value="title"/>
                        </div>
                         <div class="form-group">
                            Image:
                            <div class="row">
                            <div class="col-lg-2 col-md-2">
                                <input type="file" name="image" class="file-loading" style="width: 100%"/>
                            </div>
                            <div class="col-lg-10 col-md-10">
                                <input name="image_url" class="file-loading" style="width: 100%"/>
                            </div>
                            </div>
                            
                            
                        </div>
                        <div class="form-group">
                            Description:
                            <textarea name="post-description" id="post-description" cols="93" rows="10">{{ description }}</textarea>
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
            return {
                title: '',
                description: '',
                content: '',
                errors: ''
            }

        }
    }
</script>