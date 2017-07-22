<template>
    <div>
        <!--header-top-starts-->
        <div class="header-top">
            <div class="container">
                <div class="head-main">
                    <a href="/"><img src="/images/logo-1.png" alt=""/></a>
                </div>
            </div>
        </div>
        <!--header-top-end-->
        <!--start-header-->
        <div class="header">
            <div class="container">
                <div class="head">
                    <div class="navigation">
                        <span class="menu"></span>
                        <ul class="navig">
                            <li><a href="/" class="active">Home</a></li>
                            <li><a href="/admin/register">Register</a></li>
                            <li><a href="/admin/posts">Posts</a></li>
                            <li><a href="/admin/post-list">Post-List</a></li>
                            
                        </ul>
                    </div>
                    <div class="header-right">
                        
                        <ul class="navig">
                            <li><a href="/admin/logout">Logout</a></li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data () {
            return {}
        }
    }
</script>