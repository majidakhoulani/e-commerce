<template>
    <!-- {{ userInfo }} -->
    <section>
        <v-card class="ma-8 pa-8" color="#F8F9FA">
            <v-container>
                <v-row>

                    <v-col cols="4" align="center">
                        <div class="d-flex  flex-column ">
                            <!-- <v-sheet class="ma-2 pa-2"> -->
                            <v-card class="mx-auto " width="300" height="400" color="rgb(255,235,238,1)">

                                <v-avatar  size="150" rounded="50" class="ma-4">
                                    <v-img cover src="../assets/images/team/2.jpg"></v-img>
                                </v-avatar>
                                <!-- <v-list-item class="text-white" :title="userInfo.firstName + '' + userInfo.lastName"
                                        :subtitle="userInfo.title"></v-list-item>
                                    <v-list-item class="text-white" :title="userInfo.email"></v-list-item> -->
                                <v-card-item>
                                    <!-- <div>
                                        <div class="text-overline mb-1" :title="userInfo.firstName + '' + userInfo.lastName">

                                        </div>
                                        <div class="text-h6 mb-1">
                                            Headline
                                        </div>
                                        <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
                                    </div> -->
                                    <v-card-title class="text-h6 text-pink pb-2">
                                        {{ userInfo . firstName + ' ' + userInfo . lastName }}
                                    </v-card-title>
                                    <v-card-subtitle class="text-pink">{{ userInfo . email }}</v-card-subtitle>
                                    <v-card-text class="text-pink">{{ userInfo . phone }}</v-card-text>
                                </v-card-item>
                                <v-card-actions class="d-flex justify-center">
                                    <v-btn variant="outlined" color="#ffc800">
                                        FOLLOW
                                    </v-btn>
                                    <v-btn variant="outlined" class="bg-purple-darken-2">
                                        MESSAGE
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                            <!-- </v-sheet> -->
                            <!-- <v-sheet class="mt-4"> -->
                            <v-card class="mx-auto mt-4" width="300" height="300">
                                <v-list height="300" class="bg-orange-lighten-3">
                                    <v-list-subheader class=" text-red-darken-2 pa-4">Contact Me</v-list-subheader>

                                    <v-list-item v-for="(item, i) in items" :key="i" >
                                        <template v-slot:prepend>
                                            <v-icon :icon="item.icon" class="text-red-darken-4"></v-icon>
                                        </template>

                                        <v-list-item-title v-text="item.text" class="text-pink"></v-list-item-title>
                                        <v-divider></v-divider>
                                    </v-list-item>

                                </v-list>
                            </v-card>
                            <!-- </v-sheet> -->
                        </div>
                    </v-col>

                    <v-col cols="8" class="pl-8">
                       <div class="d-flex  flex-column ">
                            <!-- <v-sheet class="ma-2 pa-2"> -->
                              <v-card>
                            <v-table>
                                <thead>
                                    <tr style="background-color:rgb(255,235,238,1)">
                                        <th class="text-left text-red-darken-2">
                                            Information
                                        </th>
                                        <th class="text-left text-red-darken-2">
                                            Details
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-purple-darken-4">Full Name</td>
                                        <td class="text-orange-lighten-2">{{ userInfo . firstName }} {{ userInfo.lastName }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-purple-darken-4">Age</td>
                                        <td class="text-orange-lighten-2">{{ userInfo . age }}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-purple-darken-4">Gender</td>
                                        <td class="text-orange-lighten-2">{{ userInfo . gender}}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-purple-darken-4">BirthDate</td>
                                        <td class="text-orange-lighten-2">{{ userInfo . birthDate}}</td>
                                    </tr>
                                    <tr>
                                        <td class="text-purple-darken-4">University</td>
                                        <td class="text-orange-lighten-2">{{ userInfo . university}}</td>
                                    </tr>

                                    <!-- <tr>
                                        <td>Full Name</td>
                                        <td>{{ userInfo . firstName }}</td>
                                    </tr>
                                    <tr>
                                        <td>Full Name</td>
                                        <td>{{ userInfo . firstName }}</td>
                                    </tr>
                                    <tr>
                                        <td>Full Name</td>
                                        <td>{{ userInfo . firstName }}</td>
                                    </tr> -->
                                </tbody>
                            </v-table>
                        </v-card>

                            <!-- </v-sheet> -->
                            <!-- <v-sheet class="mt-4"> -->
                            <v-card class=" mt-4"  height="410">
                              <ApexChartProfile />
                            </v-card>
                            <!-- </v-sheet> -->
                        </div>



                    </v-col>

                </v-row>
            </v-container>
        </v-card>
    </section>
    <!-- <section class="profile pa-6 mt-6">
        <v-container>
            <v-row justify="center">

                <v-card class="mx-auto" width="500px" height="500px" rounded="50px">
                    <v-img height="100%" cover src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg">
                        <v-avatar color="grey" size="150" rounded="0">
                            <v-img cover :src="userInfo.image"></v-img>
                        </v-avatar>
                        <v-list-item class="text-white" :title="userInfo.firstName + '' + userInfo.lastName" :subtitle="userInfo.title"></v-list-item>
                        <v-list-item class="text-white" :title="userInfo.email"></v-list-item>
                    </v-img>
                </v-card>

            </v-row>
        </v-container>
    </section> -->
</template>
<script>

    // import axios from 'axios'
    import {
        mapState
    } from 'pinia';
    import {
        useUserStore
    } from '@/store/User';
import ApexChartProfile from '@/components/ApexChartProfile.vue';
    export default {
      components:{
    ApexChartProfile
},
        data: () => ({
            userInfo: {},
            selectedItem: 1,
            items: [{
                    text: 'mdpjeanne',
                    icon: 'mdi-instagram'
                },
                {
                    text: 'mdnjeanneGit',
                    icon: 'mdi-github'
                },
                {
                    text: '@mdnjeanne',
                    icon: 'mdi-twitter'
                },
                {
                    text: 'jeanne',
                    icon: 'mdi-facebook'
                },
            ],
        }),
        computed: {
            ...mapState(useUserStore, ['user'])
        },
        created() {
            this.axios.get('https://dummyjson.com/users/' + this.user.id)
                .then(response => this.userInfo = response.data);
            // fetch('https://dummyjson.com/users/' + this.user.id, {
            //         headers: {
            //             Authorization: 'Bearer ' + this.user.token
            //         },
            //     })
            //     .then(res => res.json())
            //     .then(data => this.userInfo = data);
        },
    }
</script>

<style>
    /* .profile{
  background-image:url('../assets/heroAbout.jpg');
      background-repeat: no-repeat;
      background-size: cover;

} */
</style>
