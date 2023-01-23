<template>

    <v-container>


            <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6 pa-4">
                <h1 class="page-title">Charts</h1>
                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" color="secondary" class="text-capitalize button-shadow">Latest
                            Reports</v-btn>
                    </template>

                </v-menu>
            </v-row>

            <v-row  justify="center">
                <v-col>
                    <v-card>
                        <!-- <v-card-text class="pa-4 pt-0">
              <v-row no-gutters>
                <v-col cols="12"> -->

                  <UserChartSection />

                <!-- </v-col>
              </v-row>
            </v-card-text> -->
                    </v-card>
                </v-col>
                <v-col >
                    <v-card >
                        <!-- <v-card-text class="pa-4 pt-0">
              <v-row no-gutters>
                <v-col cols="12"> -->

                        <ChartSection />

                        <!-- </v-col>
              </v-row>
            </v-card-text> -->
                    </v-card>
                </v-col>
                <v-col>
                    <v-card >
                        <!-- <v-card-text class="pa-4 pt-0">
              <v-row no-gutters>
                <v-col cols="12"> -->

                        <ChartSection />

                        <!-- </v-col>
              </v-row>
            </v-card-text> -->
                    </v-card>
                </v-col>
            </v-row>

        <!-- <div> -->
            <v-row >
                <v-col>
                    <v-card width="775">
                        <!-- <v-card-text class="pa-4 pt-0">
              <v-row no-gutters>
                <v-col cols="12"> -->

                        <StaticsChartSection />

                        <!-- </v-col>
              </v-row>
            </v-card-text> -->
                    </v-card>
                </v-col>
                <!-- <v-col>
                    <v-card>


                  <UserChartSection />

                    </v-card>
                </v-col> -->

            </v-row>

        <!-- </div> -->

    </v-container>
   
</template>
<script>
    import ChartSection from './charts/ChartSection.vue'
    import StaticsChartSection from './charts/StaticsChartSection.vue';
    import UserChartSection from './charts/UserChartSection.vue';


    export default {
        // data() {
        //     return {
        //         series: [{
        //             name: "Jan",
        //             data: this.generateData(20, {
        //                 min: -30,
        //                 max: 55
        //             })
        //         }, {
        //             name: "Feb",
        //             data: this.generateData(20, {
        //                 min: -30,
        //                 max: 55
        //             })
        //         }, {
        //             name: "Mar",
        //             data: this.generateData(20, {
        //                 min: -30,
        //                 max: 55
        //             })
        //         }, {
        //             name: "Apr",
        //             data: this.generateData(20, {
        //                 min: -30,
        //                 max: 55
        //             })
        //         }, {
        //             name: "May",
        //             data: this.generateData(20, {
        //                 min: -30,
        //                 max: 55
        //             })
        //         }, {
        //             name: "Jun",
        //             data: this.generateData(20, {
        //                 min: -30,
        //                 max: 55
        //             })
        //         }, {
        //             name: "Jul",
        //             data: this.generateData(20, {
        //                 min: -30,
        //                 max: 55
        //             })
        //         }, {
        //             name: "Aug",
        //             data: this.generateData(20, {
        //                 min: -30,
        //                 max: 55
        //             })
        //         }, {
        //             name: "Sep",
        //             data: this.generateData(20, {
        //                 min: -30,
        //                 max: 55
        //             })
        //         }],
        //         chartOptions: {
        //             chart: {
        //                 height: 350,
        //                 type: "heatmap",
        //             },
        //             plotOptions: {
        //                 heatmap: {
        //                     shadeIntensity: 0.5,
        //                     radius: 0,
        //                     useFillColorAsStroke: true,
        //                     colorScale: {
        //                         ranges: [{
        //                             from: -30,
        //                             to: 5,
        //                             name: "low",
        //                             color: "#00A100"
        //                         }, {
        //                             from: 6,
        //                             to: 20,
        //                             name: "medium",
        //                             color: "#128FD9"
        //                         }, {
        //                             from: 21,
        //                             to: 45,
        //                             name: "high",
        //                             color: "#FFB200"
        //                         }, {
        //                             from: 46,
        //                             to: 55,
        //                             name: "extreme",
        //                             color: "#FF0000"
        //                         }]
        //                     }
        //                 }
        //             },
        //             dataLabels: {
        //                 enabled: false
        //             },
        //             stroke: {
        //                 width: 1
        //             },
        //             title: {
        //                 text: "HeatMap Chart with Color Range"
        //             },
        //             options: {
        //                 chart: {
        //                     id: "vuechart-example"
        //                 },
        //                 xaxis: {
        //                     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        //                 }
        //             },
        //             series: [{
        //                 name: "series-1",
        //                 data: [30, 40, 45, 50, 49, 60, 70, 91]
        //             }]
        //         },
        //     };
        // },
        // methods: {
        //     generateData(count, yrange) {
        //         var i = 0;
        //         var series = [];
        //         while (i < count) {
        //             var x = (i + 1).toString();
        //             var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        //             series.push({
        //                 x: x,
        //                 y: y
        //             });
        //             i++;
        //         }
        //         return series;
        //     }
        // },
        components: {
            ChartSection,
            StaticsChartSection,
            UserChartSection
        }
    }
</script>
