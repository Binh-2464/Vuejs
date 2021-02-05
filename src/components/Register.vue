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
        <template v-slot:activator="{}">
          <v-icon>mdi-menu-down</v-icon>
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
      <br />
      <v-container>
        <v-card class="mt-5 mx-auto">
          <v-row>
            <v-col cols="4">
              <v-card-title> Add Events</v-card-title>
            </v-col>
            <v-col cols="4"> </v-col>
            <v-col cols="4">
              <v-card-text> Recive Registration </v-card-text>
            </v-col>
          </v-row>
          <v-form>
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
                    <v-btn block>Cancel</v-btn>
                  </v-col>
                  <v-col cols="2">
                    <v-btn block>Save</v-btn>
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
export default {
  components: {
    VueEditor,
    GoogleMap,
  },
  data(){
    return{
      editor: "",
    }
  }
};
</script>

<style>
</style>