 <template>
  <div v-if="product">

  <!-- <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(image,imageIndex) in product.images"
      :key="imageIndex"
      :src="image[imageIndex]"
      cover
    ></v-carousel-item>
  </v-carousel> -->
  <v-carousel show-arrows="hover">
  <v-carousel-item
    src="@/assets/images/portfolio/1.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="@/assets/images/portfolio/2.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="@/assets/images/portfolio/3.jpg"
    cover
  ></v-carousel-item>
</v-carousel>

   <h1>{{ product.title }}</h1>
  <p>{{ product.description }}</p>
 </div>
 <div v-else>
 <p>lodding product details</p>
 </div>

  </template>
  <script>
  export default{
    props:['id'],
    data(){
      return{
        product:null
      }
    },
    created(){
      this.axios.get('https://dummyjson.com/products/'+this.id)
                  .then(response => this.product= response.data)
    }
  }
  </script>


