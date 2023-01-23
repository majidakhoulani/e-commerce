<template>
    <v-card>
        <v-layout>

            <v-main style="background-color: #CFCFCF;">


                <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6 pa-4">
                    <h1 class="page-title">Users</h1>
                    <!-- <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                             <v-btn v-bind="attrs" v-on="on" color="secondary"
                                class="text-capitalize button-shadow">Add New User
                            </v-btn>

                        </template>

                    </v-menu> -->
                </v-row>
                <!-- <v-row>
                  <v-col>
                    <v-form @submit.prevent="addProductAndClear(todo)">
    <v-text-field v-model="todo" type="text"></v-text-field>
    <v-btn type="submit" class="primary">Add</v-btn>
  </v-form>
                  </v-col>
                </v-row> -->
                <v-row>
                    <v-col>
                        <p class="pa-2">UsersCount is : {{ getUsersCount }}</p>
                    </v-col>
                </v-row>
                <section class=" w-75 ma-auto pt-8 pb-8">
                    <v-row justify="center">
                        <v-col align="center">
                            <v-simple-table class="table">
                                <template v-slot:default align="center">
                                    <thead align="center">
                                        <tr>
                                            <th class="text-center text-green bg-grey-darken-3">
                                                Number
                                            </th>
                                            <th class="text-center text-green bg-grey-darken-3">
                                                UserName
                                            </th>
                                            <th class="text-center text-green bg-grey-darken-3">
                                                Email
                                            </th>
                                            <th class="text-center text-green bg-grey-darken-3">
                                                Phone
                                            </th>
                                            <th class="text-center text-green bg-grey-darken-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody align="left" class="bg-white">
                                        <tr v-for="user in users" :key="user.id">
                                            <td  class="text-center text-green bg-grey-darken-3">
                                                {{ user . id }}</td>
                                            <td> {{ user . firstName }} {{ user . lastName }}</td>
                                            <td class="text-center w-25">{{ user . email }}</td>
                                            <td class="text-center w-25">{{ user . phone }}</td>

                                            <td class="text-center w-25">
                                                <!-- <v-btn class="primary" @click="removeProduct(item.id)">
                remove
            </v-btn> -->

                                                <v-icon size="15" class="text-red-darken-2 ma-2 "
                                                    @click="removeUser(user.id)">mdi-delete</v-icon>
                                                <v-icon size="15" color="bg-red" class="text-green-darken-2 ma-2 ">
                                                    mdi-pencil</v-icon>
                                            </td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-col>
                    </v-row>

                </section>
                <!-- <ProductTable /> -->
            </v-main>
        </v-layout>
    </v-card>
</template>
<script>
    // import ProductTable from '@/components/ProductTable.vue';
    import {
        useAdminUsersStore
    } from '@/store/AdminUsers';

    import {
        mapActions
    } from 'pinia';
    import {
        mapState
    } from 'pinia';
    import {
        mapStores
    } from 'pinia';
    export default {
        data() {
            return {
                //
            };
        },
        computed: {
            ...mapState(useAdminUsersStore, ["users", "getUsers", "getUsersCount"])
        },
        created() {
            this.fetchUsers();
        },
        methods: {
            trucate(value, length = 50) {
                return value.length <= length ?
                    value : value.substring(0, length) + "...";
            },
            ...mapActions(useAdminUsersStore, ["fetchUsers", "removeUser"]),
        },
    }
</script>
<style>
    .table th,
    td {
        border: 1px solid grey;
        padding: 5px;
    }
</style>
