<template>
    <div>
	<!--slide-starts-->
	<div class="slide">
		<div class="container">
			<div class="fle-xsel">
			<ul id="flexiselDemo3">
				<li v-for="slide in slides">
					<a href="#">
						<div class="banner-1">
							<img :src="'/images/'+slide.img" class="img-responsive" alt="">
						</div>
					</a>
				</li>
			</ul>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>	
	<!--slide-end-->

    </div>
</template>
<script>
	export default{
		data () {
			return{
                slides:[
                    {img:'s-1.jpg',},
                    {img:'s-2.jpg',},
                    {img:'s-3.jpg',},
                    {img:'s-4.jpg',},
                    {img:'s-5.jpg',},
                    {img:'s-6.jpg',}
                    ]
			}
		}
	}
</script>

