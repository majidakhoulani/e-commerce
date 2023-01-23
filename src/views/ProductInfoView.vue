<template>
    <v-card>
        <v-layout>

            <v-main style="background-color: #CFCFCF;">
                <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6 pa-4">
                    <h1 class="page-title">Products</h1>
                    <!-- <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                             <v-btn v-bind="attrs" v-on="on" color="secondary"
                                class="text-capitalize button-shadow">Add New Product
                            </v-btn>

                        </template>

                    </v-menu> -->
                </v-row>
                <!-- <v-row>
                  <v-col>
                    <v-form @submit.prevent="addProductAndClear(todo)">
    <v-text-field v-model="todo" type="text"/>
    <v-btn type="submit" class="primary">Add</v-btn>
  </v-form>
                  </v-col>
                </v-row> -->
                <v-row justify="center">
                    <v-col cols="12" align="left">
                        <div>
                            <h3 class="py-2 px-2 text-center">Product List</h3>
                            <!-- d-inline -->
                            <div class="d-flex justify-center align-center ">
                                <div class="w-25">
                                    <h5 class="px-3">Product Name</h5>
                                    <v-text-field type="text" v-model="ProductName" class=" px-3 py-3" />
                                </div>
                                <div class="w-25">
                                    <h5  class="px-3">Category</h5>
                                    <v-text-field type="text" v-model="Category" class=" px-3 py-3"/>
                                </div>
                                <div>
                                <v-btn color="primary" @click="AddNewProduct()" class="px-auto">
                                    <v-icon dark>mdi-plus</v-icon>AddProduct
                                </v-btn>
                            </div>
                            </div>

                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <p class="pa-2">ProductsCount is : {{ getProductsCount }}</p>
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
                                                ProductName
                                            </th>
                                            <th class="text-center text-green bg-grey-darken-3">
                                                Category
                                            </th>
                                            <th class="text-center text-green bg-grey-darken-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody align="left" class="bg-white">
                                        <tr v-for="item in products" :key="item.id">
                                            <td class="text-center text-green bg-grey-darken-3">
                                                {{ item . id }}</td>
                                            <td> {{ item . title }}</td>
                                            <td class="text-center w-25">{{ item . category }}</td>
                                            <td class="text-center w-25">

                                                <div class="d-flex jistify-row ">
                                                    <v-btn variant="text">
                                                        <v-icon size="15" class="text-red-darken-2 ma-2"
                                                            @click="removeProduct(item.id)">mdi-delete</v-icon>
                                                    </v-btn>
                                                    <!-- <v-icon size="15" color="bg-red" class="text-green-darken-2 ma-2 ">
                                                    mdi-pencil</v-icon> -->
                                                    <AdminEditProduct class="pa-3" />
                                                </div>
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
        useAdminProductsStore
    } from '@/store/AdminProducts';

    import {
        mapActions
    } from 'pinia';
    import {
        mapState
    } from 'pinia';
    import {
        mapStores
    } from 'pinia';
    import AddNewProductForm from '@/components/AddNewProductForm.vue';
    import AdminEditProduct from '@/components/AdminEditProduct.vue';


    export default {
        data() {
            return {
                ProductName: '',
                Category: ''
            }
        },
        components: {
            AddNewProductForm,
            AdminEditProduct,
        },
        computed: {
            ...mapState(useAdminProductsStore, ['products', ' ProductName', ' Category', 'getProductName',
                'getProducts', 'getProductsCount'
            ])
        },
        created() {
            this.fetchProducts()
        },
        methods: {
            trucate(value, length = 50) {
                return value.length <= length ?
                    value : value.substring(0, length) + "...";
            },
            AddNewProduct() {
                const id = this.products.length + 1
                const data = {
                    id: id,
                    title: this.ProductName,
                    category: this.Category
                }
                this.products.push(data)
                this.ProductName = ''
                this.Category = ''
            },
            ...mapActions(useAdminProductsStore, ['fetchProducts', 'removeProduct']),
            //   addProductAndClear(item) {
            //   if (item.length === 0) {
            //     return
            //   }
            //   //...mapActions(useAdminProductsStore,['addNewProduct'])
            // this.addNewProduct(item)
            // this.todo=''
            //   // todo.value = ''
            // }
        }

    }
</script>
<style>
    /* .table{
  background-color: #aaa;
} */
    .table th,
    td {
        border: 1px solid grey;
        padding: 5px;
    }

    .header {
        color: #8AF837
    }
</style>
