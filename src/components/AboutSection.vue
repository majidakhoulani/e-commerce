<template>

    <section class="about text-center pt-12 pb-12" id="aboutSection">

      <div class="about-title pt-6">
          <h1 class="text-h4 font-weight-bold pb-2 text-uppercase">
            <!-- ABOUT -->   {{ $t('message.about.sectionName') }}
          </h1>
          <p class="text-grey font-italic">  {{ $t('message.about.title') }}</p>
      </div>
      <div class="about-content mt-16">
          <v-container>
              <v-timeline align="start" class="w-75 ma-auto">
                  <v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="year.color"
                      :icon="year.icon" size="large">

                      <template v-slot:opposite>
                          <div :class="`pt-1 headline font-weight-bold text-left text-${year.color}`"
                              v-text="year.year"></div>
                      </template>
                      <div class="displayBox" data-aos="zoom-in"  data-aos-duration="3000"  data-aos-offset="600px" data-aos-easing="ease-in-out">
                          <h2 :class="`mt-n1 headline font-weight-light  text-left mb-4 text-${year.color}`">
                              {{ year . title }}
                          </h2>
                          <div class="text-left">
                              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut,
                              sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando
                              voluptatibus, vix an salutandi sententiae.
                          </div>
                      </div>
                  </v-timeline-item>
              </v-timeline>
          </v-container>
      </div>
  </section>
</template>
<script>
import AOS from 'aos'
export default{
  data(){
    return{
      years: [{
                  color: 'cyan',
                  // icon:'',
                  year: 'August 2022',
                  title: ' HTML',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!'
              },
              {
                  color: 'green',
                  year: 'September & October 2022',
                  title: 'CSS && BULMAY',
              },
              {
                  color: 'pink',
                  year: 'November 2022',
                  title: 'JAVASCRIPT',
              },
              {
                  color: 'amber',
                  year: 'December 2022',
                  title: 'VUE',
              },
              {
                  color: 'red',
                  year: 'January 2023',
                  title: 'VUETIFY && PINIA',
              }
          ],
    }
  },
  mounted() {
    AOS.init()
  },
}
</script>
