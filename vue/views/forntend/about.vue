<template>
    <div>
        <myheader :posts="posts"></myheader>
        <!--welcome-starts-->
        <div class="welcome">
            <div class="container">
                <div class="welcome-top heading">
                    <h3>WELCOME</h3>
                    <div class="welcome-bottom">
                        <img src="images/abt-1.jpg" alt=""/>
                        <p>
                            Vivamus interdum diam diam, non faucibus tortor consequat vitae. Proin sit amet augue sed massa pellentesque viverra. Suspendisse iaculis purus eget est pretium aliquam ut sed diam. Nullam non magna lobortis, faucibus erat eu, consequat justo. Suspendisse commodo nibh odio, vel elementum nulla luctus sit amet.</p>
                        <p>
                            Nulla in tempor lectus. Etiam ac mauris lacinia nulla ultricies porta sit amet eleifend ligula. Quisque tincidunt vitae turpis at efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sagittis, magna a sagittis dapibus, ipsum metus interdum lectus, quis feugiat leo ipsum nec diam.</p>
                    </div>
                </div>
            </div>
        </div>
        <!--welcome-end-->
        <!--team-starts-->
        <div class="team">
            <div class="container">
                <div class="team-top heading">
                    <h3>OUR TEAM</h3>
                </div>
                <div class="team-bottom">
                    <div class="col-md-3 team-left" v-for="author in authors">
                        <img :src="'/images/'+author.img" alt=""/>
                        <h4>{{author.name}}</h4>
                        <p>{{author.description}}</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
        <!--team-end-->
        <slide></slide>
        <myfooter></myfooter>
    </div>
</template>
<script>
    export default{
        data (){
            return {
                authors: [
                    {
                        img: 't-1.jpg',
                        name: 'Rita Nelson',
                        description: 'Fusce at elementum diam. Integer pellentesque ultricies pharetra.'
                    },
                    {
                        img: 't-2.jpg',
                        name: 'Marta Healy',
                        description: 'Fusce at elementum diam. Integer pellentesque ultricies pharetra.'
                    },
                    {
                        img: 't-3.jpg',
                        name: 'John Black',
                        description: 'Fusce at elementum diam. Integer pellentesque ultricies pharetra.'
                    },
                    {
                        img: 't-4.jpg',
                        name: 'Kate Tompson',
                        description: 'Fusce at elementum diam. Integer pellentesque ultricies pharetra.'
                    }
                ]
            }
        }

    }
</script>
