<template>
    <div>
        <myheader></myheader>

        <!--about-starts-->
        <div class="about">
            <div class="container">
                <div class="about-main">
                    <div class="col-md-8 about-left">
                        <div class="about-one">
                            <p>Find The Most</p>
                            <h3>Coffee of the month</h3>
                        </div>
                        <div class="about-two">
                            <a href="/single"><img src="images/c-1.jpg" alt=""/></a>
                            <p>Posted by <a href="#">Johnson</a> on 10 feb, 2015 <a href="#">comments(2)</a></p>
                            <p>
                                Phasellus fringilla enim nibh, ac pharetra nulla vestibulum ac. Donec tempor fermentum felis, non placerat sem ultrices ut. Nam molestie nunc nec felis hendrerit, in pulvinar arcu mollis. Quisque eget purus nec velit venenatis tincidunt vitae ac massa. Proin vel ornare tellus. Duis consectetur gravida tellus ut varius. Aenean tellus massa, laoreet ut euismod et, pretium id ex. Mauris hendrerit suscipit hendrerit.</p>
                            <p>
                                Quisque ultrices ligula a nisl porttitor, vitae porta tortor eleifend. Nulla nec imperdiet ipsum, ut cursus mauris. Proin ut sodales sem, quis vestibulum libero. Proin tempor venenatis congue. Phasellus mollis massa sit amet pharetra consequat. Aliquam quis lacus at sapien tempor semper. Sed ultrices et metus et elementum. Nunc sed justo at erat consequat mollis et eu lectus.</p>
                            <div class="about-btn">
                                <a href="/single">Read More</a>
                            </div>
                            <ul>
                                <li><p>Share : </p></li>
                                <li><a href="#"><span class="fb"> </span></a></li>
                                <li><a href="#"><span class="twit"> </span></a></li>
                                <li><a href="#"><span class="pin"> </span></a></li>
                                <li><a href="#"><span class="rss"> </span></a></li>
                                <li><a href="#"><span class="drbl"> </span></a></li>
                            </ul>
                        </div>
                        <index-list></index-list>
                    </div>
                    <div class="col-md-4 about-right heading">
                        <div class="abt-1">
                            <h3>ABOUT US</h3>
                            <div class="abt-one">
                                <img src="images/c-2.jpg" alt=""/>
                                <p>
                                    Quisque non tellus vitae mauris luctus aliquam sit amet id velit. Mauris ut dapibus nulla, a dictum neque.</p>
                                <div class="a-btn">
                                    <a href="single.html">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="abt-2">
                            <h3>YOU MIGHT ALSO LIKE</h3>
                            <div class="might-grid">
                                <div class="grid-might">
                                    <a href="single.html"><img src="images/c-12.jpg" class="img-responsive" alt=""> </a>
                                </div>
                                <div class="might-top">
                                    <h4><a href="single.html">Duis consectetur gravida</a></h4>
                                    <p>
                                        Nullam non magna lobortis, faucibus erat eu, consequat justo. Suspendisse commodo nibh odio.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="might-grid">
                                <div class="grid-might">
                                    <a href="single.html"><img src="images/c-10.jpg" class="img-responsive" alt=""> </a>
                                </div>
                                <div class="might-top">
                                    <h4><a href="single.html">Duis consectetur gravida</a></h4>
                                    <p>
                                        Nullam non magna lobortis, faucibus erat eu, consequat justo. Suspendisse commodo nibh odio.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                            <div class="might-grid">
                                <div class="grid-might">
                                    <a href="single.html"><img src="images/c-11.jpg" class="img-responsive" alt=""> </a>
                                </div>
                                <div class="might-top">
                                    <h4><a href="single.html">Duis consectetur gravida</a></h4>
                                    <p>
                                        Nullam non magna lobortis, faucibus erat eu, consequat justo. Suspendisse commodo nibh odio.</p>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <div class="abt-2">
                            <h3>ARCHIVES</h3>
                            <ul>
                                <li><a href="/single">{{data.text}}</a></li>
                                <li><a href="/single">{{data.text1}}</a></li>
                                <li><a href="/single">{{data.text2}}</a></li>
                                <li><a href="/single">{{data.text3}}</a></li>
                                <li><a href="/single">{{data.text4}}</a></li>
                                <li><a href="/single">{{data.text5}}</a></li>
                                <li><a href="/single">{{data.text6}}</a></li>
                            </ul>
                        </div>
                        <div class="abt-2">
                            <h3>NEWS LETTER</h3>
                            <div class="news">
                                <form>
                                    <input type="text" value="Email" onfocus="this.value = '';"
                                           onblur="if (this.value == '') {this.value = 'Email';}"/>
                                    <input type="submit" value="Subscribe">
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <!--about-end-->
        <slide></slide>
        <myfooter></myfooter>
    </div>

</template>
<script>
    export default{
        data (){
            return{
                data:{
                        text:`Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.`,

                        text1:`Lorem Ipsum has been the industry'
                        s standard dummy text ever since the 1500s`,

                        text2:`When an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.`,
                        
                        text3:`It has survived not only five
                        centuries, but also the leap into electronic typesetting`,

                        text4:`Remaining essentially
                        unchanged. It was popularised in the 1960s with the release of`,

                        text5:`Software like Aldus
                        PageMaker including versionsof Lorem Ipsum.`,
                        
                        text6:`It has survived not only five
                        centuries, but also the leap into electronic typesetting`

                    }
            }
        }
    }
</script>