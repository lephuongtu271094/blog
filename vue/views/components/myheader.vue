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
                            <li><a href="/about">About</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/admin">Admin</a></li>
                        </ul>
                    </div>
                    <div class="header-right">
                        <div class="search-bar">
                            <input type="text" value="Search" onfocus="this.value = '';"
                                   onblur="if (this.value == '') {this.value = 'Search';}">
                            <input type="submit" value="">
                        </div>
                        <ul>
                            <li><a href="#"><span class="fb"> </span></a></li>
                            <li><a href="#"><span class="twit"> </span></a></li>
                            <li><a href="#"><span class="pin"> </span></a></li>
                            <li><a href="#"><span class="rss"> </span></a></li>
                            <li><a href="#"><span class="drbl"> </span></a></li>
                        </ul>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <!--banner-starts-->
        <div class="banner">
            <div class="container">
                <div class="banner-top">
                    <div class="banner-text">
                        <h2>Aliquam erat</h2>
                        <h1 >posts</h1>
                        <div class="banner-btn">
                            <a href="/single">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--banner-end-->
    </div>
</template>

<script>
    export default{
        props: ['posts'],
    }
</script>