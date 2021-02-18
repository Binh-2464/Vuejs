<template>
  <v-app>
    <v-main>
      <Appbar></Appbar>
      <v-container>
        <v-row>
          <v-col cols="12" sm="4" md="4">
            <h3>Today's Events</h3>
            <v-card>
              <v-img src="../assets/img/233307.jpg" height="15vh" width="100%">
              </v-img>
              <div class="d-flex flex-column">
                <p class="caption font-weight-light ma-0">
                  Sat , 20 jan 2021 , 17:00 - 22:00
                </p>
                <h4 class="text-md-body-1 text-sm-body-2 font-weight-bold">
                  US Alumni Annual Gathering 2020
                </h4>
              </div>

              <v-row no-gutters class="mt-2">
                <v-col>
                  <div>
                    <v-icon style="font-size: 15px" class="ma-0"
                      >mdi-radiobox-marked</v-icon
                    >
                    <span style="font-size: 10px">Crowne Plaza Vientiane</span>
                  </div>
                  <div class="d-flex justify-end mb-2 mr-1">
                    <v-btn
                      small
                      elevation="3"
                      color="primary"
                      outlined
                      class="mr-1"
                    >
                      <v-icon outlined> mdi-comment-edit</v-icon>Edit</v-btn
                    >
                    <v-btn small elevation="3" color="primary">
                      <v-icon color="" style="font-size: 12px">mdi-map-marker</v-icon>
                      <p class="ma-0" style="font-size: 11px">
                        Check-in
                      </p></v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <!-- upcoming Events-->
        <div class="scrollmenu">
          <div class="d-flex justify-space-between mt-12">
            <div>
              <h2>Upcoming Events</h2>
              <p>jan 2020</p>
            </div>
            <div>
              <v-btn elevation="4" color="primary"> + Add Event</v-btn>
            </div>
          </div>

          <div class="block ma-1" v-for="(item , index) in card_sc" :key="index.id">
            <v-card max-width="370px" height="200" class="pa-1">
              <v-img
                :src="item.img"
                height="10vh"
                width="100%"></v-img>
              <p class="caption ma-0">{{item.time}}</p>
              <h5>{{item.title}}</h5>

              <div class="mt-2">
                <v-icon style="font-size: 15px" class="ma-0">{{item.icon1}}</v-icon>
                <span style="font-size: 10px">{{item.text1}}</span>
              </div>

              <div class="d-flex justify-end mb-2 mr-1 align-end" style="height:50px;">
                <v-btn
                  small
                  elevation="3"
                  color="primary"
                  outlined
                  class="mr-1"
                >
                <v-icon outlined> {{item.icon2}}</v-icon>{{item.text2}}</v-btn>
                <v-btn small elevation="3" color="primary">
                  <v-icon color="" style="font-size: 12px">{{item.icon3}}</v-icon>
                  <p class="ma-0" style="font-size: 11px">{{item.text3}}</p></v-btn>
              </div>
            </v-card>
          </div>
        </div>




        <v-row class="mt-5">
          <v-col cols="12" sm="4" md="4">
            <h6>Feb 2020</h6>
            <v-card>
              <v-img src="../assets/img/233307.jpg" height="15vh" width="100%">
              </v-img>
              <div class="d-flex flex-column">
                <p class="caption font-weight-light ma-0">
                  Sat , 20 jan 2021 , 17:00 - 22:00
                </p>
                <h4 class="text-md-body-1 text-sm-body-2 font-weight-bold">
                  US Alumni Annual Gathering 2020
                </h4>
              </div>

              <v-row no-gutters class="mt-2">
                <v-col>
                  <div>
                    <v-icon style="font-size: 15px" class="ma-0"
                      >mdi-radiobox-marked</v-icon
                    >
                    <span style="font-size: 10px">Crowne Plaza Vientiane</span>
                  </div>
                  <div class="d-flex justify-end mb-2 mr-1">
                    <v-btn
                      small
                      elevation="3"
                      color="primary"
                      outlined
                      class="mr-1"
                    >
                      <v-icon outlined> mdi-comment-edit</v-icon>Edit</v-btn
                    >
                    <v-btn small elevation="3" color="primary">
                      <v-icon color="" style="font-size: 12px"
                        >mdi-map-marker</v-icon
                      >
                      <p class="ma-0" style="font-size: 11px">
                        Check-in
                      </p></v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Appbar from "../views/Appbar.vue";
export default {
  components: {
    Appbar,
  },
  computed:{
    card_sc(){
      return this.$store.state.card_sc;
    }
  }
};
</script>

<style scoped>
.scrollmenu {
  overflow: auto;
  white-space: nowrap;
}
.scrollmenu .block{
  display: inline-block;
}

</style>