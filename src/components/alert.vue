<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col cols="auto">
          <v-dialog
            v-model="dialog"
            max-width="356px"
            transition="dialog-top-transition"
            >
            <v-card>
              <v-card-subtitle class="text-center font-weight-bold">Welcome to US Alumni of Laos Websites</v-card-subtitle>
              <v-img src="../assets/img/welcom.jpg" class="pa-0" height="120"></v-img>
              <p class="text-caption text-center ma-2">It seem like you're here for the the first time, Please help us bt updating your contact in formation</p>

              <v-card-actions class="d-flex flex-column justify-center">
                <v-btn small elevation="3" color="primary" v-model="Edit" width="200px">Edit profile</v-btn>

                <a href="#" class="caption" @click="dialog= false">Skip</a>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
      Edit: "",
    };
  },
};
</script>

<style scoped>

.v-dialog {
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>