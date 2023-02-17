<template>
<section class="team text-center pt-16 pb-16">
      <div class="team-title pt-6">
          <h1 class="text-h4 font-weight-bold pb-2 text-uppercase">
            <!-- OUR AMAZING TEAM --> {{ $t('message.team.sectionName') }}
          </h1>
          <p class="text-grey font-italic">{{ $t('message.team.title') }}</p>
      </div>
      <div class="team-content mt-12 ">
          <v-container>
              <v-row no-gutters>
                  <v-col v-for="team in teamList" :key="team.id" cols="12" sm="4"
                      class="d-flex  mb-6 justify-space-around">
                      <div>
                          <v-img  loading="lazy" :src="team.src" height="200px" width="200px" cover class="rounded-circle"
                              style="border:8px solid rgb(193 193 193 / 66%);"></v-img>
                          <h3 class="mt-6 font-weight-black" color="#212529">{{ team . title }}</h3>
                          <p class="mt-2 mb-4" color="#6c757d">{{ team . explain }}</p>
                          <a href="#" class="ma-2">
                              <v-icon color="black">
                                  mdi-twitter
                              </v-icon>

                          </a>
                          <a :href="team . href" class="ma-2">
                              <v-icon color="black">
                                  mdi-github
                              </v-icon>

                          </a>
                          <a href="#" class="ma-2">
                              <v-icon x-large color="black">
                                  mdi-linkedin
                              </v-icon>
                          </a>

                      </div>
                  </v-col>
                  <v-col cols="6" class="text-center ma-auto mt-8">
                      <p color="#6c757d">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
                          laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                  </v-col>
              </v-row>
          </v-container>
      </div>
  </section>
</template>


<script>
  export default {
  data: () => ({

        teamList: [{
                  id: 1,
                  src: '/assets/images/team/1.jpg',
                  title: 'Roduan Kareem Aldeen',
                  explain: 'FullStack Developer',
                  href:'https://github.com/RoduanKD'

              },
              {
                  id: 2,
                  src: '/assets/images/team/3.jpg',
                  title: 'Majida Khoulani',
                  explain: 'Frontend Developer',
                  href:'https://github.com/majidakhoulani'
              },
              {
                  id: 3,
                  src: '/assets/images/team/2.jpg',
                  title: 'Taiseer Almedani',
                  explain: 'FullStack Developer',
                  href:'https://github.com/TaiseerAlmedani'
              },
          ],
      }),
  }
</script>

<style>


  .team {
      background-color: #F8F9FA;
  }

  .team-content a {
      text-decoration: none;
  }
</style>
