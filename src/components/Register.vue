<template>
  <v-app>
    <Appbar/>
    <v-main>
      <v-container>
        <v-card class="mt-3 mx-auto">
          <v-row>
            <v-col cols="4">
              <v-card-title> Add Events</v-card-title>
            </v-col>
            <v-col cols="4"> </v-col>
            <v-col cols="4">
              <v-card-text> Recive Registration </v-card-text>
            </v-col>
          </v-row>
          <v-form v-model="valid">
            <v-container>
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field
                      value="Lao US Alumni Thanksgiving 2020"
                      label="Events Title"
                      outlined
                      readonly
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      value="12/11/2020 - 01/12/2021"
                      label="Date"
                      outlined
                      readonly
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      value="17:00 - 21:00 "
                      label="Time"
                      outlined
                      readonly
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      value=" Lao Embassador US"
                      label="Location Name"
                      outlined
                      readonly
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      value=" Lao Embassador US"
                      label="Location"
                      outlined
                      readonly
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                        <google-map />
                  </v-col>
                </v-row>
                <v-row style="height:400px;">
                  <v-col>
                    <vue-editor v-model="editor" style="height:300px;"></vue-editor>
                  </v-col>
                </v-row>
                <v-row  class=" d-flex justify-end">
                  <v-col cols="2">
                    <v-btn block medium color="primary" outlined>Cancel</v-btn>
                  </v-col>
                  <v-col cols="2">
                    <v-btn block medium color="primary" :disabled="!valid">Save</v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-container>
          </v-form>
                
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import GoogleMap from '../components/GoogleMap.vue';
import { VueEditor } from 'vue2-editor';
import Appbar from '../views/Appbar.vue';
export default {
  components: {
    VueEditor,
    GoogleMap,
    Appbar  
  },
  data(){
    return{
      editor: "",
      valid: true,
    }
  }
};
</script>

<style>
</style>