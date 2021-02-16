<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <v-avatar>
          <img
            src="../assets/img/usa-flag-circle-logo-vector-18915398 (1).jpg"
            alt=""
          />
        </v-avatar>
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
      <v-img
        src="../assets/img/233307.jpg"
        style="height: 260px; width: 100%"
      ></v-img>

      <v-card>
        <v-row>
          <v-col cols="12" md="8" sm="8" xs="12">
            <v-card-title class="text-sm-body-2"
              ><b> US Alumni Thanksgiving 2020</b>
            </v-card-title>
            <v-card-text class="text-sm-caption"
              >Could Native Bangkok 2020: The begining of could Native
              era</v-card-text
            >
          </v-col>
          <v-col cols="12" sm="4" class="d-flex justify-end align-end">
            <v-btn small elevation="" color="" width="150px" class="mr-5"
              >Going</v-btn
            >
          </v-col>
        </v-row>
      </v-card>
      <v-container>
        <v-row class="mt-3">
          <!-- Left side-->
          <v-col cols="12" md="8" sm="8">
            <h3>Details</h3>
            <br />
            <p class="text-sm-caption">
              Could Native Bangkok 2020: The begining of cloud native era
            </p>
            <p class="text-sm-caption">
              An event that brings developer who are passionate about Cloud
              Native Technology to share their Cloud Native experiences and
              interesting ideas.
            </p>

            <p class="text-sm-caption">Agenda:</p>
            <p class="text-sm-caption ma-0">1:00 - 1:30: Registration</p>
            <p class="text-sm-caption ma-0">1:45 - 1:50: Opening speech</p>
            <p class="text-sm-caption ma-0">
              2:00 - 2:40: No more painful k8s YAML with grafana Tanka
            </p>
            <p class="text-sm-caption ma-0">
              By Nattapon Pondongnok (Jab), Full Stack Engineer @ Metrabyte
              Cloud
            </p>
            <br />
            <p class="text-sm-caption ma-0">
              2:50 - 3:30: GitOps: Next Generation of Infrastructure as Code
            </p>
            <p class="text-sm-caption ma-0">
              By Jirayut Nimsaeng (Dear), CEO @ Opsta
            </p>
            <br />
            <p class="text-sm-caption ma-0">
              3:30 - 4:00:simply Storing Helm Kubernetes Packages with Github
            </p>
            <p class="text-sm-caption ma-0">Container Registry</p>
            <p class="text-sm-caption ma-0">
              Bt Sirinat Paphatsirinatthi (Oam), Co-Founder @ KubeOps Skills
            </p>
            <br />
            <p class="text-sm-caption">
              4:00 onward: After-Party (Free Pizza + soft Drink)
            </p>
            <p class="text-sm-caption ma-0">Location:</p>
            <p class="text-sm-caption ma-0">
              Cons Robotics Company Limited, Wiset Siri Building,Room 303, next
              to Sanam Pao
            </p>
            <p class="text-sm-caption ma-0">BTS Station, exit 4</p>
            <br />
            <p class="text-sm-caption">Note:</p>
            <p class="text-sm-caption">To compliance with Meetup policy:</p>
            <p class="text-sm-caption ma-0">
              If you are under tha age of 18 and willing to attend our event,
              you must be
            </p>
            <p class="text-sm-caption">accompanied by your family.</p>

            <v-row>
              <v-col
                cols="12"
                md="12"
                xs="12"
                sm="12"
                class="d-flex justify-space-between"
              >
                <h3>Attendess</h3>
                <p>See all</p>
              </v-col>
            </v-row>
            <!-- <v-card class="ma-1">
                <v-col cols="12" md="3" xs="3" sm="3">
                  <v-avatar size="80">
                    <img src="../assets/img/risa.jpg" alt="risa" />
                  </v-avatar>
                </v-col>
               <p style="font-size:10px;" class="text-center ma-0">Lisa blackpink</p>
               <div class="d-flex flex-column justify-center align-center">
               <p style="font-size:8px;" class="ma-0">YSELI, UGRAD</p>
               <p style="font-size:8px;" class="">Humpherey, Fullbright</p>
               </div>
              </v-card>

              <v-card class="ma-1">
                <v-col cols="12" md="3" xs="3" sm="3">
                  <v-avatar size="80">
                    <img src="../assets/img/risa.jpg" alt="risa" />
                  </v-avatar>
                </v-col>
               <p style="font-size:10px;" class="text-center ma-0">Lisa blackpink</p>
               <div class="d-flex flex-column justify-center align-center">
               <p style="font-size:8px;" class="ma-0">YSELI, UGRAD</p>
               <p style="font-size:8px;" class="">Humpherey, Fullbright</p>
               </div>
              </v-card>

              <v-card class="ma-1">
                <v-col cols="12" md="3" xs="3" sm="3">
                  <v-avatar size="80">
                    <img src="../assets/img/risa.jpg" alt="risa" />
                  </v-avatar>
                </v-col>
               <p style="font-size:10px;" class="text-center ma-0">Lisa blackpink</p>
               <div class="d-flex flex-column justify-center align-center">
               <p style="font-size:8px;" class="ma-0">YSELI, UGRAD</p>
               <p style="font-size:8px;" class="">Humpherey, Fullbright</p>
               </div>
              </v-card>

              <v-card class="ma-1">
                <v-col cols="12" md="3" xs="3" sm="3">
                  <v-avatar size="80">
                    <img src="../assets/img/risa.jpg" alt="risa" />
                  </v-avatar>
                </v-col>
               <p style="font-size:10px;" class="text-center ma-0">Lisa blackpink</p>
               <div class="d-flex flex-column justify-center align-center">
               <p style="font-size:8px;" class="ma-0">YSELI, UGRAD</p>
               <p style="font-size:8px;" class="">Humpherey, Fullbright</p>
               </div>
              </v-card> -->
            <div class="scroll-menu">
              <div class="ma-2">
                <v-card
                  max-width="250px"
                  class="d-flex justify-center flex-column align-center pa-2">
                  <v-avatar size="80" color="red" class="rounded-circle">
                    <img src="../assets/img/risa.jpg" alt="alt" />
                  </v-avatar>
                  <p class="caption mb-2">Lisa Blackpink</p>
                  <p class="caption ma-0">YSEALI , URGRAD</p>
                  <p class="caption ma-0">Humphrey , Fullbright</p>
                </v-card>
              </div>

              <div class="ma-2">
                <v-card
                  max-width="250px"
                  class="d-flex justify-center flex-column align-center pa-2">
                  <v-avatar size="80" color="red" class="rounded-circle">
                    <img src="../assets/img/risa.jpg" alt="alt" />
                  </v-avatar>
                  <p class="caption mb-2">Lisa Blackpink</p>
                  <p class="caption ma-0">YSEALI , URGRAD</p>
                  <p class="caption ma-0">Humphrey , Fullbright</p>
                </v-card>
              </div>

              <div class="ma-2">
                <v-card
                  max-width="250px"
                  class="d-flex justify-center flex-column align-center pa-2">
                  <v-avatar size="80" color="red" class="rounded-circle">
                    <img src="../assets/img/risa.jpg" alt="alt" />
                  </v-avatar>
                  <p class="caption mb-2">Lisa Blackpink</p>
                  <p class="caption ma-0">YSEALI , URGRAD</p>
                  <p class="caption ma-0">Humphrey , Fullbright</p>
                </v-card>
              </div>
              
              <div class="ma-2">
                <v-card
                  max-width="250px"
                  class="d-flex justify-center flex-column align-center pa-2">
                  <v-avatar size="80" color="red" class="rounded-circle">
                    <img src="../assets/img/risa.jpg" alt="alt" />
                  </v-avatar>
                  <p class="caption mb-2">Lisa Blackpink</p>
                  <p class="caption ma-0">YSEALI , URGRAD</p>
                  <p class="caption ma-0">Humphrey , Fullbright</p>
                </v-card>
              </div>
            </div>
          </v-col>
          <!-- right side-->
          <v-col cols="" sm="4" md="4" xs="4">
            <v-col style="position: sticky; top: 0">
              <v-img src="../assets/img/1_qYUvh-EtES8dtgKiBRiLsA.png"></v-img>
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
.scroll-menu{
  overflow: auto;
  white-space: nowrap;
}
.scroll-menu div {
  display: inline-block;
}
</style>