<template>

        <div class="about-tre">

            <div class="a-1">
                <div class="col-md-6 abt-left" v-for="data in dataA">
                    <a href="/single"><img :src="'/images/'+ data.img " alt=""/></a>
                    <h6>{{data.most}}</h6>
                    <h3><a href="/single">{{data.title}}</a></h3>
                    <p>{{data.text}}</p>
                    <label>{{data.date}}</label>
                </div>
                <div class="clearfix"></div>
            </div>

            <div class="a-1">
                <div class="col-md-6 abt-left" v-for="data in dataB">
                    <a href="/single"><img :src="'/images/'+ data.img " alt=""/></a>
                    <h6>{{data.most}}</h6>
                    <h3><a href="/single">{{data.title}}</a></h3>
                    <p>{{data.text}}</p>
                    <label>{{data.date}}</label>
                </div>
                <div class="clearfix"></div>
            </div>

            <div class="a-1">
                <div class="col-md-6 abt-left" v-for="data in dataC">
                    <a href="/single"><img :src="'/images/'+ data.img " alt=""/></a>
                    <h6>{{data.most}}</h6>
                    <h3><a href="/single">{{data.title}}</a></h3>
                    <p>{{data.text}}</p>
                    <label>{{data.date}}</label>
                </div>
                <div class="clearfix"></div>
            </div>
       </div>

</template>
<script>
   export default{
       data () {
           return {
               dataA: [
                   {
                       most: 'Find The Most',
                       img: 'c-3.jpg',
                       date: 'May 29, 2015',
                       title:'Tasty Coffee',
                       text:
                       'Vivamus interdum diam diam, ' +
                       'non faucibus tortor consequat vitae.' +
                       ' Proin sit amet augue sed massa pellentesque ' +
                       'viverra. Suspendisse iaculis purus eget est ' +
                       'pretium aliquam ut sed diam.'
                   },
                   {
                       most: 'Find The Most',
                       img: 'c-4.jpg',
                       date: 'May 29, 2015',
                       title:'Tasty Coffee',
                       text:
                       'Vivamus interdum diam diam, ' +
                       'non faucibus tortor consequat vitae.' +
                       ' Proin sit amet augue sed massa pellentesque ' +
                       'viverra. Suspendisse iaculis purus eget est ' +
                       'pretium aliquam ut sed diam.'
                   }

               ],
               dataB: [
                   {
                       most: 'Find The Most',
                       img: 'c-5.jpg',
                       date: 'May 29, 2015',
                       title:'Tasty Coffee',
                       text:
                       'Vivamus interdum diam diam, ' +
                       'non faucibus tortor consequat vitae.' +
                       ' Proin sit amet augue sed massa pellentesque ' +
                       'viverra. Suspendisse iaculis purus eget est ' +
                       'pretium aliquam ut sed diam.'
                   },
                   {
                       most: 'Find The Most',
                       img: 'c-6.jpg',
                       date: 'May 29, 2015',
                       title:'Tasty Coffee',
                       text:
                       'Vivamus interdum diam diam, ' +
                       'non faucibus tortor consequat vitae.' +
                       ' Proin sit amet augue sed massa pellentesque ' +
                       'viverra. Suspendisse iaculis purus eget est ' +
                       'pretium aliquam ut sed diam.'
                   }

               ],
               dataC: [
                   {
                       most: 'Find The Most',
                       img: 'c-7.jpg',
                       date: 'May 29, 2015',
                       title:'Tasty Coffee',
                       text:
                       'Vivamus interdum diam diam, ' +
                       'non faucibus tortor consequat vitae.' +
                       ' Proin sit amet augue sed massa pellentesque ' +
                       'viverra. Suspendisse iaculis purus eget est ' +
                       'pretium aliquam ut sed diam.'
                   },
                   {
                       most: 'Find The Most',
                       img: 'c-8.jpg',
                       date: 'May 29, 2015',
                       title:'Tasty Coffee',
                       text:
                       'Vivamus interdum diam diam, ' +
                       'non faucibus tortor consequat vitae.' +
                       ' Proin sit amet augue sed massa pellentesque ' +
                       'viverra. Suspendisse iaculis purus eget est ' +
                       'pretium aliquam ut sed diam.'
                   }

               ]
           }
       }
   }
</script>