<template>
    <div>
        <header-admin></header-admin>

        <div class="container" style="margin-top:30px">
            <div class="col-md-10 col-md-offset-1">
                <div class="panel panel-default">
                    <div class="panel-heading"><h3 class="panel-title"><strong>Register</strong></h3></div>

                    <div class="panel-body">

                        <div v-if="errors">
                            <div class="alert alert-danger"  v-for="error in errors">
                                <a class="close" data-dismiss="alert" href="#">×</a>
                                {{ error.msg }}
                            </div>

                        </div>


                        <form method="post">
                            <div class="form-group">
                                <input type="text" name="username" id="username" class="form-control "
                                       placeholder="User Name" tabindex="3" :value="username">
                            </div>
                            <div class="form-group">
                                <input type="text" name="display_name" id="display_name" class="form-control "
                                       placeholder="Display Name" tabindex="3" :value="display_name">
                            </div>
                            <div class="form-group">
                                <input type="email" name="email" id="email" class="form-control "
                                       placeholder="Email Address"
                                       tabindex="4">
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="password" name="password" id="password" class="form-control "
                                               placeholder="Password" tabindex="5">
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-6">
                                    <div class="form-group">
                                        <input type="password" name="confirm_password" id="confirm_password"
                                               class="form-control " placeholder="Confirm Password" tabindex="6">
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-success">Sign in</button>
                        </form>
                    </div>
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
                errors: '',
                username: '',
                display_name: '',
                email: '',
                password: '',
                confirm_password: ''
            }
        }
    }
</script>