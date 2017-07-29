<template>
    <div>
        <header-admin></header-admin>
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1">
                    <!--{% if messages %}
                        {% for key,value in messages %}
                            <div class="alert alert-{{ key }}">{{ value }}</div>
                        {% endfor %}
                    {% endif %}-->
                    <a class="btn btn-default" href="/admin/register">New User</a>
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Display name</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr v-for="user in users">
                            <td>{{ user.id }}</td>
                            <td><a href="#">{{ user.username }}</a></td>
                            <td><a href="#">{{user.displayname}}</a></td>
                            <td><a href="#">{{ user.email}}</a></td>
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
    export default{
        data() {
            return {
                users : ''
            }
        }
    }
</script>