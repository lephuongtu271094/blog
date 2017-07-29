<template>
    <div>
        <myheader></myheader>
        <div class="gallery">
            <div class="container">
                <div class="gallery-top heading">
                    <h3>OUR GALLERY</h3>
                </div>
                <section>
                    <ul id="da-thumbs" class="da-thumbs">
                        <li v-for="gallery in galleries">
                            <a :href="'/images/'+ gallery.img" rel="title" class="b-link-stripe b-animate-go  thickbox">
                                <img :src="'/images/'+ gallery.img" alt=""/>
                                <div>
                                    <h5>{{gallery.title}}</h5>
                                    <span>{{gallery.des}}</span>
                                </div>
                            </a>
                        </li>
                        <div class="clearfix"></div>
                    </ul>
                </section>


            </div>
        </div>
        <myfooter></myfooter>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                galleries: [
                    {
                        img: 'g-1.jpg',
                        title: 'Coffee',
                        des: 'non suscipit leo fringilla non suscipit leo fringilla molestie'
                    },
                    {
                        img: 'g-2.jpg',
                        title: 'Coffee',
                        des: 'non suscipit leo fringilla non suscipit leo fringilla molestie'
                    },
                    {
                        img: 'g-3.jpg',
                        title: 'Coffee',
                        des: 'non suscipit leo fringilla non suscipit leo fringilla molestie'
                    },
                    {
                        img: 'g-4.jpg',
                        title: 'Coffee',
                        des: 'non suscipit leo fringilla non suscipit leo fringilla molestie'
                    },
                    {
                        img: 'g-5.jpg',
                        title: 'Coffee',
                        des: 'non suscipit leo fringilla non suscipit leo fringilla molestie'
                    },
                    {
                        img: 'g-6.jpg',
                        title: 'Coffee',
                        des: 'non suscipit leo fringilla non suscipit leo fringilla molestie'
                    },
                    {
                        img: 'g-7.jpg',
                        title: 'Coffee',
                        des: 'non suscipit leo fringilla non suscipit leo fringilla molestie'
                    },
                    {
                        img: 'g-8.jpg',
                        title: 'Coffee',
                        des: 'non suscipit leo fringilla non suscipit leo fringilla molestie'
                    },
                    {
                        img: 'g-9.jpg',
                        title: 'Coffee',
                        des: 'non suscipit leo fringilla non suscipit leo fringilla molestie'
                    }
                ]
            }
        }
    }
</script>
