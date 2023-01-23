<template>
 <HeroSection title="Welcome To Our Studio!" src="../src/assets/images/header-bg.jpg">
 </HeroSection>
<ServiceSection/>
 <PortfolioSection/>
<AboutSection/>
<TeamSection/>
<SponserSection/>
<TestimonialsSection />
<FeaturesSection/>
<ContactSection/>
  <TheFooter />
</template>
<script>
  import HeroSection from '@/components/HeroSection.vue';
import ServiceSection from '@/components/ServiceSection.vue';
import PortfolioSection from  '@/components/PortfolioSection.vue'
import TheFooter from '@/components/TheFooter.vue';
import AboutSection from '@/components/AboutSection.vue';
import TeamSection from '@/components/TeamSection.vue';
import TestimonialsSection from '@/components/TestimonialsSection.vue';
import SponserSection from '@/components/SponserSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FeaturesSection from '@/components/FeaturesSection.vue';

  export default {
      components: {
    TheFooter,
    HeroSection,
    ServiceSection,
    PortfolioSection,
    AboutSection,
    TeamSection,
    TestimonialsSection,
    SponserSection,
    ContactSection,
    FeaturesSection
},
      data(){
        return{
          title:'',
        bgHeroImage:'',
        // src:'../src/assets/images/heroAbout.jpg'
        }
      }
    }


</script>

<style>







/*
  .team {
      background-color: #F8F9FA;
  }

  .team-content a {
      text-decoration: none;
  } */

</style>
