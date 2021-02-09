<template>
      <v-app-bar app>
      <v-toolbar-title>
        <v-avatar
          size="40"
          color="red"
        >
          <img src="../assets/img/usa-flag-circle-logo-vector-18915398.jpg" alt="alt">
        </v-avatar>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-avatar
        size="40"
        color="red"
        class="mr-2"
      >
        <img src="../assets/img/risa.jpg" alt="alt">
      </v-avatar>
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" fab icon>
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

</template>

<script>
export default {

}
</script>

<style>

</style>