<template>
  <v-app>
    <Appbar/>
<v-container>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="8" md="4">
            <div class="text-title">
              <h3>Today's Events</h3>
            </div>
            <v-card class="mx-auto rounded-xl">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                style="width: 100%; height: 100px"
              ></v-img>
              <v-card-text>Sat, 20 jan 2021 , 17:00 - 22:00</v-card-text>
              <v-card-title>US ALumni Annual Gathering 2020</v-card-title>
              <v-card-text>
                <v-icon>mdi-pin</v-icon> Crowne Plaza Vientiane</v-card-text
              >
              <v-row>
                <v-col md="2"> </v-col>
                <v-spacer></v-spacer>
                <v-col md="">
                  <v-btn style="color: #4287f5">Edit</v-btn>
                </v-col>
                <v-col md="5">
                  <v-btn style="background-color: #4287f5; color: white"
                    >Check-in</v-btn
                  >
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

        <v-card class="mx-auto " style="margin-top:100px; rounded-xl">
          <v-row justify-center>
            <v-col xs="12" md="12">
              <v-container>
                <div class="text">
                  <h3>Up coming Events</h3>
                  <h6>Jan 2020</h6>
                </div>
              </v-container>
            </v-col>

            <v-row class="justify-space-between">
              <v-col xs="6" md="4"> </v-col>

              <v-col  xs="4" cols="4" md="1">
                <p style="color: #4287f5"><b>See all</b></p>
              </v-col>
            </v-row>
          </v-row>
          
          <v-row >
            <v-col md="12">
              <hooper :itemsToShow="3" style="height: 350px">
                <slide style="margin: 10px">
                  <v-row>
                    <v-col cols="12">
                      <v-card class="rounded-xl" style="">
                        <v-img
                          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                          width="100%"
                          max-height="100"
                        >
                        </v-img>
                        <v-card-text
                          >Sat, 20 jan 2021 , 17:00 - 22:00</v-card-text
                        >
                        <v-card-title
                          >US ALumni Annual Gathering 2020</v-card-title
                        >
                        <v-card-text>
                          <v-icon>mdi-pin</v-icon> Crowne Plaza
                          Vientiane</v-card-text
                        >
                        <v-row>
                          <v-col md="4"></v-col>
                          <v-col md="4">
                            <v-btn style="color: #4287f5">Edit</v-btn>
                          </v-col>
                          <v-col md="4">
                            <v-btn
                              style="background-color: #4287f5; color: white"
                              >Check in
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                  </v-row>
                </slide>
                <slide style="margin: 10px">
                  <v-row>
                    <v-col cols="12">
                      <v-card class="rounded-xl">
                        <v-img
                          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                          width="100%"
                          max-height="100"
                        >
                        </v-img>
                        <v-card-text
                          >Sat, 20 jan 2021 , 17:00 - 22:00</v-card-text
                        >
                        <v-card-title
                          >US ALumni Annual Gathering 2020</v-card-title
                        >
                        <v-card-text>
                          <v-icon>mdi-pin</v-icon> Crowne Plaza
                          Vientiane</v-card-text
                        >
                        <v-row>
                          <v-col md="4"></v-col>
                          <v-col md="4">
                            <v-btn style="color: #4287f5">Edit</v-btn>
                          </v-col>
                          <v-col md="4">
                            <v-btn
                              style="background-color: #4287f5; color: white"
                              >Check in
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                  </v-row>
                  
                </slide>

                <slide style="margin: 10px">
                  <v-row>
                    <v-col>
                      <v-card class="rounded-xl">
                        <v-img
                          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                          width="100%"
                          max-height="100"
                        >
                        </v-img>
                        <v-card-text
                          >Sat, 20 jan 2021 , 17:00 - 22:00</v-card-text
                        >
                        <v-card-title
                          >US ALumni Annual Gathering 2020</v-card-title
                        >
                        <v-card-text>
                          <v-icon>mdi-pin</v-icon> Crowne Plaza
                          Vientiane</v-card-text
                        >
                        <v-row>
                          <v-col md="4"></v-col>
                          <v-col md="4">
                            <v-btn style="color: #4287f5">Edit</v-btn>
                          </v-col>
                          <v-col md="4">
                            <v-btn
                              style="background-color: #4287f5; color: white"
                              >Check in
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                  </v-row>
                </slide>
              </hooper>
            </v-col>
          </v-row>
        </v-card>


          <div class="new-month">
            <v-container>
              <v-row>
                <v-col cols="8" md="4">
                  <br />
                  <div class="text-title">
                    <h3>Feb 2020</h3>
                  </div>

                  <v-card class="mx-auto rounded-xl">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                      style="width: 100%; height: 100px"
                    ></v-img>
                    <v-card-text>Sat, 20 jan 2021 , 17:00 - 22:00</v-card-text>
                    <v-card-title>US ALumni Annual Gathering 2020</v-card-title>
                    <v-row>
                      <v-col md="2"> </v-col>
                      <v-spacer></v-spacer>
                      <v-col md="">
                        <v-btn style="color: #4287f5">Edit</v-btn>
                      </v-col>
                      <v-col md="5">
                        <v-btn color="primary">Check-in</v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
          
            </v-container>
          </div>

    </v-main>
  </v-container>
  <alert></alert>
  </v-app>
</template>


<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import alert from './alert.vue';
import Appbar from '../views/Appbar.vue';
export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    alert,
    Appbar
  },
};
</script>

<style>
</style>