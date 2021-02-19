<template>
  
      <v-main>
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
      </v-main>

</template>

<script>
export default {
    name:'Profile_top'

}
</script>

<style>

</style>