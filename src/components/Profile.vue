<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <v-img
          src="../assets/img/usa-flag-circle-logo-vector-18915398 (1).jpg"
          style="width: 50px; height: 30px"
        >
        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on">
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-title> Log in </v-list-title>
          </v-list-item>
        </v-list>
        <v-list>
          <v-list-item>
            <v-list-title> Log Out </v-list-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

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
          <v-col  xs="12" md=" 12" style="position: relative;">
            <v-avatar 
              size="150px"
              style="  position:absolute; top:-75px;"
            >
              <img src="../assets/img/risa.jpg" />
            </v-avatar>
          </v-col>
        </v-row>
        <v-row>

          <v-col  cols="12" xs="12" sm="6" class="mx-auto mt-12">
            <h3 class="">Lalisa Manoban (Lisa)</h3>
            <p class="caption">General manager <b>LaoBrewery co,Ltd</b></p>
          </v-col>
          <v-col  cols="12" sm="6" xs="12">
                <v-btn color="" outlined>+ Edit Profile</v-btn>    
         </v-col>
        </v-row>
        <v-row class="d-flex ">
          <v-col cols="12" xs="12" sm="6" class="d-sm-flex flex-row ">
            <v-icon style="font-size:12px;" >mdi-chart-box-outline</v-icon>
            <span class="mr-2" style="font-size:12px;">Lalisa Manoban</span>
            <v-icon style="font-size:12px;">mdi-email</v-icon>
            <span style="font-size:12px;">Lalisauslumni.la</span>
          </v-col>
        </v-row>
          </v-container>
        </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>

</style>