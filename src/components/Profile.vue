<template>
  <v-main>
    <Appbar />
    <div id="image">
      <v-img
        src="../assets/img/Yseali-ThailandWorkshopRelease_img.jpg"
        style="height: 300px; padding-top: 50px"
        max-width="100%"
      ></v-img>
    </div>
    <v-card>
      <v-container>
        <v-row>
          <v-col cols="12" xs="12" sm="6" style="position: relative">
            <v-row>
              <v-col cols="12" sm="12">
                <v-avatar size="150px" style="position: absolute; top: -75px">
                  <img src="../assets/img/risa.jpg" />
                </v-avatar>
              </v-col>
            </v-row>
            
            <v-row>
              <v-col class="mx-auto mt-12">
                <h3 class="">Lalisa Manoban (Lisa)</h3>
                <p class="body-2">General manager <b>LaoBrewery co,Ltd</b></p>
                <v-icon style="font-size: 20px">mdi-chart-box-outline</v-icon>
                <span class="mr-2" style="font-size: 12px">Lalisa Manoban</span>
                <v-icon style="font-size: 20px">mdi-email</v-icon>
                <span style="font-size: 12px">Lalisauslumni.la</span>
              </v-col>
            </v-row>
          </v-col>

          <v-col
            cols="12"
            sm="6"
            class="d-flex flex-column-reverse flex-sm-column"
          >
            <v-row>
              <v-col cols="12" sm="12" md="12" class="d-flex justify-end">
                <v-btn small elevation="" color=""
                  ><v-icon class="mr-2">mdi-plus</v-icon> Edit Profile</v-btn
                >
              </v-col>
            </v-row>

            <v-row
              style="height: auto"
              class="d-flex flex-row align-sm-end ml-2"
            >
              <v-col
                cols="12"
                sm="12"
                md="12"
                xs="12"
                class="d-flex flex-column"
              >
                <div class="d-flex justify-sm-end mr-2">
                  <v-icon style="font-size: 15px">mdi-cake-variant</v-icon>
                  <span style="font-size: 15px">27 March 2020</span>
                </div>

                <div class="d-flex justify-sm-end mr-2">
                  <v-icon style="font-size: 20px">mdi-square-circle</v-icon>
                  <span style="font-size: 15px"
                    >NongBone , Saysaettha , Vientiane</span
                  >
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <v-container>
      <v-row no-gutters>
        <!-- Left side -->
        <v-col cols="12" sm="8" md="8" class="d-flex flex-wrap">
          <v-row>
            <v-col
              cols="12"
              sm="7"
              md="8"
              xs="12"
              class="order-1 d-flex flex-wrap order-sm-1"
            >
              <h3>Program</h3>
            </v-col>
            <v-col
              cols="12"
              sm="5"
              md="4"
              xs="12"
              class="order-5 d-flex flex-wrap order-sm-2"
            >
              <v-btn  elevation="" color="primary" block outlined medium >
                + Add program</v-btn
              >
            </v-col>
            <v-col cols="12" sm="12" md="12" xs="12" class="order-2" v-for="(item , index) in card_l1" :key="index.id">
              <v-card>
                <v-col>
                  <h5>{{item.text_tt}}</h5>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  xs="12"
                  class="d-flex justify-sm-space-between flex-column flex-sm-row"
                >
                  <div>
                    <v-icon color="" style="font-size: 15px" class="ma-0">{{item.icon1}}</v-icon>
                    <span style="font-size: 10px">{{item.text1}}</span>
                  </div>

                  <div>
                    <v-icon style="font-size: 15px" class="ma-0">{{item.icon2}}</v-icon>
                    <span style="font-size: 10px">{{item.text2}}</span>
                  </div>

                  <div>
                    <v-icon color="" style="font-size: 15px" class="ma-0">{{item.icon3}}</v-icon>
                    <span style="font-size: 10px" class="pr-2">{{item.text3}}</span>
                  </div>
                </v-col>
              </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="12" xs="12" class="order-3" v-for="(item , index) in card_l2" :key="index.id">
              <v-card>
                <v-col>
                  <h5>{{item.text_tt}}</h5>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  xs="12"
                  class="d-flex justify-sm-space-between flex-column flex-sm-row"
                >
                  <div>
                    <v-icon style="font-size: 15px" class="ma-0">{{item.icon1}}</v-icon>
                    <span style="font-size: 10px">{{item.text1}}</span>
                  </div>

                  <div>
                    <v-icon color="" style="font-size: 15px" class="ma-0">{{item.icon2}}</v-icon>
                    <span style="font-size: 10px" class="pr-2">{{item.text2}}</span>
                  </div>
                </v-col>
              </v-card>
            </v-col>
          </v-row>

          <v-row class="mt-5 d-flex flex-wrap">
            <v-col cols="12" md="8" sm="7" class="d-flex flex-wrap order-1 order-sm-1">
              <h3>Career & Experience</h3>
            </v-col>
            <v-col col="12" md="4" sm="5" xs="12" class="d-flex flex-wrap order-3 order-sm-2">
              <v-btn color="primary" block outlined medium >+ Add Experience</v-btn>
            </v-col>

            <v-col cols="12" sm="12" md="12" xs="12" class="order-2 order-sm-3" >
              <v-card>
                <v-col>
                  <h5>General Manager</h5>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  xs="12"
                  class="d-flex justify-sm-space-between flex-column flex-sm-row"
                >
                  <div>
                    <v-icon color="" style="font-size: 15px" class="ma-0">mdi-account-details</v-icon>
                    <span style="font-size: 10px">Lao Brewery Co., Ltd</span>
                    <v-icon style="font-size: 15px" class="ml-2">mdi-radiobox-marked</v-icon>
                    <span style="font-size: 10px">Vientiane,Laos</span>
                  </div>

                  <div>
                    <v-icon color="" style="font-size: 15px" class="ma-0"
                      >mdi-calendar-blank</v-icon
                    >
                    <span style="font-size: 10px" class="pr-2"
                      >20 August 2018 , - 16 Dec 2020</span
                    >
                  </div>
                </v-col>
              </v-card>
            </v-col>
          </v-row>

          <v-row class="mt-5 d-flex flex-wrap">
            <v-col cols="12" md="8" sm="7" class="d-flex flex-wrap order-1 order-sm-1">
              <h3>Education</h3>
            </v-col>
            <v-col col="12" md="4" sm="5" xs="12" class="d-flex flex-wrap order-3 order-sm-2">
              <v-btn color="primary" block outlined medium>+ Add Education</v-btn>
            </v-col>

            <v-col cols="12" sm="12" md="12" xs="12" class="order-2 order-sm-3" >
              <v-card>
                <v-col>
                  <h5>NongBone High School</h5>
                </v-col>
                <v-col
                  cols="12"
                  sm="12"
                  md="12"
                  xs="12"
                  class="d-flex justify-sm-space-between flex-column flex-sm-row"
                >
                  <div>
                    <v-icon style="font-size: 15px">mdi-radiobox-marked</v-icon>
                    <span style="font-size: 10px">Vientiane,Laos</span>
                  </div>

                  <div>
                    <v-icon color="" style="font-size: 15px" class="ma-0"
                      >mdi-calendar-blank</v-icon
                    >
                    <span style="font-size: 10px" class="pr-2"
                      >20 August 2018 , - 16 Dec 2020</span
                    >
                  </div>
                </v-col>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <!-- Right side -->
        <v-col cols="12" sm="4" md="4">
          <v-col cols="12" md="12" sm="12" xs="12" v-for="item in card_r1" :key="item.id">
            <h3>{{item.title}}</h3>
            <v-card>
              <v-img :src="item.img" height="10vh"></v-img>
              <p class="caption ml-1">{{item.time}}</p>
              <h5 class="ml-1">
                {{item.text_tt}}
              </h5>
              <div>
                <v-icon style="font-size: 15px">{{item.icon1}}</v-icon>
                <span class="caption">{{item.text1}}</span>
              </div>
              <div class="d-flex justify-end">
                <v-btn
                  small
                  elevation=""
                  color="primary"
                  outlined
                  class="mr-2 mb-1"
                  >{{item.btn}}</v-btn>
              </div>
            </v-card>
            <div class="caption d-flex justify-end align-end light-blue--text">
              <p>{{item.see}}</p>
            </div>
          </v-col>

          <v-col cols="12" sm="12" md="12" xs="12" class="ma-0" v-for="item in card_r2" :key="item.id">
            <v-row no-gutters>
              <v-col>
                <h3>{{item.title}}</h3>
               
                <v-card>
              <v-img :src="item.img" height="10vh"></v-img>
              <h5 class="ml-1">
                {{item.text_tt}}
              </h5>
              <v-col cols="12" sm="12" md="12" xs="12" class="d-flex justify-space-between">
                <div>
                <v-icon style="font-size: 15px">{{item.icon1}}</v-icon>
                <span class="caption">{{item.text1}}</span>
              </div>
               <v-btn
                  small
                  elevation=""
                  color="primary"
                  outlined
                  class="mr-2 mb-1"
                  >{{item.btn}}</v-btn>
              </v-col>
            </v-card>
            <div class="caption d-flex justify-end align-end light-blue--text">
              <p>
                {{item.see}}
              </p>
            </div>
              </v-col>
            </v-row>
          </v-col>         
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Appbar from "../views/Appbar.vue";
export default {
  components: {
    Appbar,
  },
  computed:{
    card_l1(){
      return this.$store.state.card_l1;
    },
    card_l2(){
      return this.$store.state.card_l2;
    },
    card_r1(){
      return this.$store.state.card_r1;
    },
    card_r2(){
      return this.$store.state.card_r2;
    }
  }
};
</script>

<style>
</style>