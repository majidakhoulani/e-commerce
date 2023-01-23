<template>
  <!-- <TheNavbar /> -->
 <HeroSection title="Welcome To Our Studio!" src="../src/assets/about2.jpg"/>
<AboutSection id="aboutSection"/>
<TeamSection/>
  <TheFooter />
</template>


<script>
  // import TheNavbar from '@/components/TheNavbar.vue';
  import HeroSection from '@/components/HeroSection.vue';
import TheFooter from '@/components/TheFooter.vue';
import AboutSection from '@/components/AboutSection.vue';
import TeamSection from '@/components/TeamSection.vue';

  export default {
      components: {
    // TheNavbar,
    TheFooter,
    HeroSection,
    AboutSection,
    TeamSection
},

      data: () => ({
        // Welcome To Our Studio!
        title:'',
        bgHeroImage:'',

        // teamList: [{
        //           id: 1,
        //           src: '../src/assets/images/team/1.jpg',
        //           title: 'Parveen Anand',
        //           explain: 'Lead Designer'
        //       },
        //       {
        //           id: 2,
        //           src: '../src/assets/images/team/2.jpg',
        //           title: 'Diana Petersen',
        //           explain: 'Lead Marketer'
        //       },
        //       {
        //           id: 3,
        //           src: '../src/assets/images/team/3.jpg',
        //           title: 'Larry Parker',
        //           explain: 'Lead Developer'
        //       }
        //   ],
          // valid: false,
          // name: '',
          // nameRules: [
          //     v => !!v || 'Name is required',
          //     v => v.length <= 10 || 'Name must be less than 10 characters',
          // ],
          // phone: '',
          // phoneRules: [
          //     v => !!v || 'Name is required',
          //     v => v.length <= 12 || 'Name must be less than 10 characters',
          // ],
          // email: '',
          // emailRules: [
          //     v => !!v || 'E-mail is required',
          //     v => /.+@.+/.test(v) || 'E-mail must be valid',
          // ],


      }),
  }
</script>

<style>




  /* .testimonials {
      background-color: #F8F9FA;
  } */

  /* .contact {
      background-image: url(../assets/map-image.png);
      background-repeat: no-repeat;
      background-size: cover;
      background-color: black;
  } */

  /* .contact #form {
      color: #ced4da;
      background-color: #000;
  } */

  /* .contact #form #input{
background-color: #fff !important;
color: #F8F9FA !important;
  } */

  /* .team {
      background-color: #F8F9FA;
  }

  .team-content a {
      text-decoration: none;
  } */
  /* .testimonials .v-card.on-hover.theme--dark {
      background-color: rgba(#FFF, 0.8)
       box-shadow: 5px px 10px 10px   rgba(#FFF, 0.8);
  } */
</style>
