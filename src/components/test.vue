<template>
  <v-app>
    <v-main>
      <div v-bind:person="person" v-for="item in person" :key="item.id">
        <h1>{{item.id}}</h1>
        <h1>{{item.name}}</h1>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  
}
</script>

<style>

</style>