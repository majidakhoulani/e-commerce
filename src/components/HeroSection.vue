<template>
    <section class="hero-section">
      <v-parallax dark :src="src">

    <v-row align="center" justify="center" class="hero-section-content">
              <v-col class="text-center" cols="12">
                  <h1 class="text-h4 font-weight-light mb-4 text-white font-italic">
                    <!-- {{ title }} -->
                    {{ $t('message.hero.title') }}
                  </h1>
                  <h3 class="subheading text-h3 text-white font-weight-bold">
                         {{ $t('message.hero.subtitle') }}
                  </h3>
                  <!-- {{ $t('message.hello') }} -->
                  <v-btn  color="orange darken-2" elevation="2" class="mt-12 pa-4 h-75 hero-button" width="224">
                      <span class="text-white text-uppercase text-h6">  {{ $t('message.hero.button') }}</span>
                  </v-btn>
              </v-col>
          </v-row>

      </v-parallax>
  </section>
</template>
<script>
export default{
  props:{
  title:'Welcome To Our Studio!',
   src:'/assets/images/header-bg.jpg'
},
}
</script>
<style>
  .hero-section .hero-section-content {
      margin-top: 15%;
  }
  @media screen and (max-width:914px){

.hero-button{
  margin-bottom:20px

}
.hero-section h1,h3{
  font-size: 14px;
}
  }

  </style>
