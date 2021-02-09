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
              <p class="caption font-weight-light ma-0">Sat , 20 jan 2021 , 17:00 - 22:00</p>
              <h4 class="text-md-body-1 text-sm-body-2 font-weight-bold ">US Alumni Annual Gathering 2020</h4>
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
                    <v-btn small elevation="3" color="primary" outlined class="mr-1">  <v-icon outlined> mdi-comment-edit</v-icon>Edit</v-btn>
                    <v-btn small elevation="3" color="primary">  <v-icon color="" style="font-size:12px;">mdi-map-marker</v-icon><p class="ma-0" style="font-size:11px;">Check-in</p></v-btn>
                        
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <v-col cols="12" sm="12" xs="4" md="12" >
         <div class="d-flex justify-space-between">
            <div>
            <h3>Upcoming Events</h3>
            <p class="caption font-weight-light">Jan 2020</p>
            </div>

            <div>
                  <v-btn small elevation="3" color="primary">+ Add event</v-btn>
            </div>
                </div>
           
   <div class="scrollmenu">
            <v-row class="d-flex flex-row flex-wrap">

         <v-col cols="12" sm="4" md="4">
            <v-card>
              <v-img src="../assets/img/233307.jpg" height="15vh" width="100%">
              </v-img>
              <div class="d-flex flex-column">
              <p class="caption font-weight-light ma-0">Sat , 20 jan 2021 , 17:00 - 22:00</p>
              <h4 class="text-md-body-1 text-sm-body-2 font-weight-bold ">US Alumni Annual Gathering 2020</h4>
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
                    <v-btn small elevation="3" color="primary" outlined class="mr-1">  <v-icon outlined> mdi-comment-edit</v-icon>Edit</v-btn>
                    <v-btn small elevation="3" color="primary">  <v-icon color="" style="font-size:12px;">mdi-map-marker</v-icon><p class="ma-0" style="font-size:11px;">Check-in</p></v-btn>
                        
                  </div>
                </v-col>
              </v-row>
                 </v-card>

                 </v-col>
              <v-col cols="12" sm="4" md="4">
           <v-card>
              <v-img src="../assets/img/233307.jpg" height="15vh" width="100%"></v-img>
              <div class="d-flex flex-column">
              <p class="caption font-weight-light ma-0">Sat , 20 jan 2021 , 17:00 - 22:00</p>
              <h4 class="text-md-body-1 text-sm-body-2 font-weight-bold ">US Alumni Annual Gathering 2020</h4>
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
                    <v-btn small elevation="3" color="primary" outlined class="mr-1">  <v-icon outlined> mdi-comment-edit</v-icon>Edit</v-btn>
                    <v-btn small elevation="3" color="primary">  <v-icon color="" style="font-size:12px;">mdi-map-marker</v-icon><p class="ma-0" style="font-size:11px;">Check-in</p></v-btn>
                        
                  </div>
                </v-col>
              </v-row>
             </v-card>

             </v-col>



        <v-col cols="12" sm="4" md="4">
            <v-card>
              <v-img src="../assets/img/233307.jpg" height="15vh" width="100%">
              </v-img>
              <div class="d-flex flex-column">
              <p class="caption font-weight-light ma-0">Sat , 20 jan 2021 , 17:00 - 22:00</p>
              <h4 class="text-md-body-1 text-sm-body-2 font-weight-bold ">US Alumni Annual Gathering 2020</h4>
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
                    <v-btn small elevation="3" color="primary" outlined class="mr-1">  <v-icon outlined> mdi-comment-edit</v-icon>Edit</v-btn>
                    <v-btn small elevation="3" color="primary">  <v-icon color="" style="font-size:12px;">mdi-map-marker</v-icon><p class="ma-0" style="font-size:11px;">Check-in</p></v-btn>
                        
                  </div>
                </v-col>
              </v-row>
             </v-card>

            </v-col>
            
            </v-row>
        </div>
          </v-col>
        </v-row>

        <v-row class="mt-5">
          <v-col cols="12" sm="4" md="4"  >
            <h6>Feb 2020</h6>
              <v-card>
              <v-img src="../assets/img/233307.jpg" height="15vh" width="100%">
              </v-img>
              <div class="d-flex flex-column">
              <p class="caption font-weight-light ma-0">Sat , 20 jan 2021 , 17:00 - 22:00</p>
              <h4 class="text-md-body-1 text-sm-body-2 font-weight-bold ">US Alumni Annual Gathering 2020</h4>
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
                    <v-btn small elevation="3" color="primary" outlined class="mr-1">  <v-icon outlined> mdi-comment-edit</v-icon>Edit</v-btn>
                    <v-btn small elevation="3" color="primary">  <v-icon color="" style="font-size:12px;">mdi-map-marker</v-icon><p class="ma-0" style="font-size:11px;">Check-in</p></v-btn>
                        
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
import Appbar from '../views/Appbar.vue';
export default {
  components:{
    Appbar
  }
}
</script>

<style scoped>
.scrollmenu{
  overflow: auto;
  white-space: nowrap;
}
</style>