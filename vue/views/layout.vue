<template>
    <!DOCTYPE html>
    <html>
    <head>
        <link rel="icon" href="/images/coffee-3.ico">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="keywords"
              content="Coffee Break Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template,
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design"/>
        <script type="application/x-javascript"> addEventListener("load", function () {
            setTimeout(hideURLbar, 0);
        }, false);
        function hideURLbar() {
            window.scrollTo(0, 1);
        } </script>
        <link href="/css/bootstrap.css" rel='stylesheet' type='text/css'/>
        <link href="/Trumbowyg-master/dist/ui/trumbowyg.min.css" rel="stylesheet">
        <link href="/css/style.css" rel='stylesheet' type='text/css'/>
        <script src="/js/jquery.min.js"></script>
        <script src="/js/vue.min.js"></script>
        <!---- start-smoth-scrolling---->
        <script type="text/javascript" src="/js/move-top.js"></script>
        <script type="text/javascript" src="/js/easing.js"></script>
        <script type="text/javascript">
            jQuery(document).ready(function ($) {
                $(".scroll").click(function (event) {
                    event.preventDefault();
                    $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
                });
            });
        </script>
        <script>
            $(document).ready(function () {
                $("span.menu").click(function () {
                    $(" ul.navig").slideToggle("slow", function () {
                    });
                });
            })
        </script>
        <script type="text/javascript">
            $(window).load(function () {
                $("#flexiselDemo3").flexisel({
                    visibleItems: 5,
                    animationSpeed: 1000,
                    autoPlay: true,
                    autoPlaySpeed: 3000,
                    pauseOnHover: true,
                    enableResponsiveBreakpoints: true,
                    responsiveBreakpoints: {
                        portrait: {
                            changePoint: 480,
                            visibleItems: 2
                        },
                        landscape: {
                            changePoint: 640,
                            visibleItems: 3
                        },
                        tablet: {
                            changePoint: 768,
                            visibleItems: 3
                        }
                    }
                });
            });
        </script>
        <script src="/Trumbowyg-master/dist/trumbowyg.min.js"></script>
        <script type="text/javascript" src="/js/jquery.flexisel.js"></script>
        <!--start-smoth-scrolling-->
        <script src="/js/modernizr.custom.97074.js"></script>
        <script src="/js/jquery.chocolat.js"></script>
        <script type="text/javascript" src="/js/jquery.hoverdir.js"></script>
        <link rel="stylesheet" href="/css/chocolat.css" type="text/css" media="screen" charset="utf-8">
        <!--light-box-files -->
        <script type="text/javascript" charset="utf-8">
            $(function () {
                $('.gallery a').Chocolat();

                 $(' #da-thumbs > li ').each(function () {
                    $(this).hoverdir();
                });
                $('#post-description').trumbowyg();
                $('#post-content').trumbowyg();
            });
        </script>

    </head>
    <body>

    {{{app}}}
    {{{script}}}


    </body>
    </html>
</template>
<script>
</script>