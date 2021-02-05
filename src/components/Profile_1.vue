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
                  <span class="mr-2" style="font-size: 12px"
                    >Lalisa Manoban</span
                  >
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
                    ><v-icon class="mr-2">mdi-plus</v-icon> Edit Profile</v-btn >
                </v-col>
              </v-row>

              <v-row
                style="height: auto;"
                class="d-flex flex-row align-sm-end ml-2">
                
                <v-col cols="12" sm="12" md="12" xs="12" class="d-flex flex-column">
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
        <v-row class="mt-12">
          <!-- Left side-->
          <v-col cols="12" sm="8" xs="12" md="8">
            <v-row class="d-flex justify-space-between">
              <v-col>
                <h3>Program</h3>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                    <v-btn small elevation="" color="primary" outlined>+ Add program</v-btn>
              </v-col>
            </v-row>
            
            <v-row>
              <v-col cols="12" sm="12" md="12" xs="12">
                <v-card>
                  <v-card-title class="caption text-sm-body-2"> Global Undergraduate Exchange Programs</v-card-title>
                  <v-col cols="12" sm="12" xs="12" md="12" class="d-flex justify-sm-space-between flex-column flex-sm-row">  
                      <div>
                      <v-icon color="" style="font-size: 15px" class="ma-0">mdi-account-details</v-icon>
                      <span style="font-size: 10px">Old Dominoin University</span>
                        </div>

                        <div>
                      <v-icon style="font-size: 15px" class="ma-0">mdi-radiobox-marked</v-icon>
                      <span style="font-size: 10px">Nortfolk , Vagina , US</span>
                        </div>
                        
                        <div>
                      <v-icon color="" style="font-size: 15px" class="ma-0">mdi-calendar-blank</v-icon>
                      <span style="font-size: 10px" class="pr-2">20 August 2018 , - 16 Dec 2020</span>
                      </div>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>
            

            <v-row>
              <v-col cols="12" sm="12" md="12" xs="12">
                <v-card>
                  <v-card-title class="caption text-sm-body-2"> YESEALI Some Program Spring </v-card-title>
                  <v-col cols="12" sm="12" xs="12" md="12" class="d-flex justify-sm-space-between flex-column flex-sm-row">  
                        <div>
                      <v-icon style="font-size: 15px" class="ma-0">mdi-radiobox-marked</v-icon>
                      <span style="font-size: 10px">Nortfolk , Vagina , US</span>
                        </div>
                        
                        <div>
                      <v-icon color="" style="font-size: 15px" class="ma-0">mdi-calendar-blank</v-icon>
                      <span style="font-size: 10px" class="pr-2">20 August 2018 , - 16 Dec 2020</span>
                      </div>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>

              <v-row>
              <v-col cols="12" sm="12" md="12" xs="12">
                <v-card>
                  <v-card-title class="caption text-sm-body-2"> YESEALI Regional Vietnam</v-card-title>
                  <v-col cols="12" sm="12" xs="12" md="12" class="d-flex justify-sm-space-between flex-column flex-sm-row">  
                        <div>
                      <v-icon style="font-size: 15px" class="ma-0">mdi-radiobox-marked</v-icon>
                      <span style="font-size: 10px">Hochiminh ,Vietnam</span>
                        </div>
                        
                        <div>
                      <v-icon color="" style="font-size: 15px" class="ma-0">mdi-calendar-blank</v-icon>
                      <span style="font-size: 10px" class="pr-2">20 August 2018 , - 16 Dec 2020</span>
                      </div>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>

            <v-row class="d-flex justify-space-between ">
              <v-col >
                <h3>Career & Experience</h3>
              </v-col>
            
              <v-col sm="4">
                    <v-btn small elevation="" color="primary"  outlined>+ Add Experince</v-btn>
              </v-col>
            </v-row>
             
             <v-row>
              <v-col cols="12" sm="12" md="12" xs="12">
                <v-card>
                  <v-card-title class="caption text-sm-body-2"> General Manager</v-card-title>
                  <v-col cols="12" sm="12" xs="12" md="12" class="d-flex justify-sm-space-between flex-column flex-sm-row">  
                        <div>
                      <v-icon style="font-size: 15px" class="mr-1">mdi-radiobox-marked</v-icon>
                      <span style="font-size: 10px" class="mr-2">Lao brewery co,ltd</span>
                      <v-icon style="font-size: 15px" class="">mdi-radiobox-marked</v-icon>
                      <span style="font-size: 10px">Hochiminh ,Vietnam</span>
                        </div>
                        
                        <div>
                      <v-icon color="" style="font-size: 15px" class="">mdi-calendar-blank</v-icon>
                      <span style="font-size: 10px" class="pr-2">20 August 2018 , - Now</span>
                      </div>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>

             <v-row class="d-flex justify-space-between mt-3">
              <v-col>
                <h3>Education</h3>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                    <v-btn small elevation="" color="primary" outlined>+ Add Education</v-btn>
              </v-col>
            </v-row>

             <v-row>
              <v-col cols="12" sm="12" md="12" xs="12">
                <v-card>
                  <v-card-title class="caption text-sm-body-2">Nongbone High School</v-card-title>
                  <v-col cols="12" sm="12" xs="12" md="12" class="d-flex justify-sm-space-between flex-column flex-sm-row">  
                        <div>
                      <v-icon style="font-size: 15px" class="mr-1">mdi-radiobox-marked</v-icon>
                      <span style="font-size: 10px" class="mr-2">Lao brewery co,ltd</span>
                        </div>

                        <div>
                      <v-icon color="" style="font-size: 15px" class="">mdi-calendar-blank</v-icon>
                      <span style="font-size: 10px" class="pr-2">20 August 2018 , - Now</span>
                      </div>
                  </v-col>
                </v-card>
              </v-col>
            </v-row>

          </v-col>

          <!-- Right side-->
          <v-col sm="4" cols="12" xs="12" md="4">

            <v-row>
              <v-col cols="12" xs="12" sm="12" md="12">
                 <h3>Attending Events</h3>
                <v-card width="350px">

                  <v-img src="../assets/img/233307.jpg" height="10vh" width="100%"></v-img>
                  <p style="font-size:10px;" class="ma-0">Fri, 27 Nov 2020,17:00-21:00</p>
                  <p class=" text-body-2 text-sm-caption ma-0 pa-0">US Alumni Thanks Giving with the US AMbassador of Laos</p>
                  <v-icon style="font-size: 15px" class="ma-0">mdi-radiobox-marked</v-icon>
                  <span style="font-size:10px;">Embassador of Laos</span>
                 
                  <v-col cols="12" sm="12" xs="12" md="12" class="d-flex justify-end">
                        <v-btn small elevation="" color="primary" outlined>Going </v-btn>  
                  </v-col>
                </v-card>
                <v-col cols="12" xs="12" md="12" sm="12" class="d-flex justify-end">
                  <p style="font-size:10px;" class="text-sm-body-2">See all</p>
                </v-col>
              </v-col>
            </v-row>

             <v-row>     
              <v-col cols="12" xs="12" sm="12" md="12">
                <h3>Projects</h3>
                <v-card width="">

                  <v-img src="../assets/img/233307.jpg" height="10vh" width="100%"></v-img>
                  <p style="font-size:10px;" class="ma-0">Fri, 27 Nov 2020,17:00-21:00</p>
                  <p class="text-body-2 text-sm-caption ma-0 pa-0 mr-1">US Alumni Thanks Giving with the US AMbassador of Laos</p>
                  <v-icon style="font-size: 15px" class="ma-0">mdi-radiobox-marked</v-icon>
                  <span style="font-size:10px;">Embassador of Laos</span>
                 
                  <v-col cols="12" sm="12" xs="12" md="12" class="d-flex justify-end">
                        <v-btn small elevation="" color="primary" outlined>Going </v-btn>  
                  </v-col>
                </v-card>
                <v-col cols="12" xs="12" md="12" sm="12" class="d-flex justify-end">
                  <p style="font-size:12px;" class="text-sm-body-2 ma-0 pa-0">See all</p>
                </v-col>
              </v-col>
            </v-row>
  
             <v-row>
              <v-col cols="12" xs="12" sm="12" md="12">
                 <h3>Projects</h3>
                <v-card width="350px">

                  <v-img src="../assets/img/233307.jpg" height="10vh" width="100%"></v-img>
                  <p style="font-size:10px;" class="ma-0">Fri, 27 Nov 2020,17:00-21:00</p>
                  <p class="text-body-2 text-sm-caption ma-0 pa-0 mr-1">US Alumni Thanks Giving with the US AMbassador of Laos</p>
                  <v-icon style="font-size: 15px" class="ma-0">mdi-radiobox-marked</v-icon>
                  <span style="font-size:10px;">Embassador of Laos</span>
                 
                  <v-col cols="12" sm="12" xs="12" md="12" class="d-flex justify-end">
                        <v-btn small elevation="" color="primary" outlined>Going </v-btn>  
                  </v-col>
                </v-card>
                <v-col cols="12" xs="12" md="12" sm="12" class="d-flex justify-end">
                  <p style="font-size:12px;" class="text-sm-body-2 ma-0 pa-0">See all</p>
                </v-col>
              </v-col>
            </v-row>

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
</style>