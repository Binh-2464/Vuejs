<template>
  <v-app>
    <v-main> 
      <v-layout>
        <v-dialog
          v-model="dialog"
          scrollable fullscreen 
          persistent :overlay="false"
          max-width="500px"
          transition="dialog-top-transition"
        >
        <v-row>
          <v-col cols="12" xs="12" md="12">
            <v-card-text class="text-center"> Welcome to US Alumni of Laos Webiste</v-card-text>
          </v-col>
          <v-btn @click="dialog = false">End</v-btn>
        </v-row>
        </v-dialog>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      dialog: true,
    }
  }
};
</script>

<style>
</style>