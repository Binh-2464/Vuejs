<template>
  <div class="scroll-menu">
    <div class="block ma-1" v-for="(item , index) in card" :key="index.id">
      <v-card max-width="250px" height="auto" class="pa-1">
        <v-img
        :src="item.img"
          height="10vh"
          width="100%"
        ></v-img>
        <p class="caption ma-0">{{item.time}}</p>
        <h5>{{item.title}}</h5>
        <div class="mt-2">
          <v-icon style="font-size: 15px" class="ma-0"
            >{{item.icon1}}</v-icon>

          <span style="font-size: 10px">{{item.text1}}</span>
        </div>
        <div class="d-flex justify-end mb-2 mr-1">
          <v-btn small elevation="3" color="primary" outlined class="mr-1">
            <v-icon outlined>{{item.icon2}}</v-icon></v-btn>
          <v-btn small elevation="3" color="primary">
            <v-icon color="" style="font-size: 12px">{{item.icon3}}</v-icon>
            <p class="ma-0" style="font-size: 11px">{{item.text2}}</p></v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      card: [
        {
          id:1,
          img : require('../assets/img/233307.jpg'),
          time: 'Sat, 20 Jan 2021, 17:00 - 22:00',
          title: 'US Alumni Annual Gathering 2020',
          icon1: 'mdi-radiobox-marked',
          text1: 'Crowne Plaza Vientiane',
          icon2 : 'mdi-comment-edit',
          icon3: 'mdi-map-marker',
          text2: 'Check-in'
        }
      ]
    }
  }
};
</script>

<style scoped>
.scroll-menu{
  overflow: auto;
  white-space: nowrap;
}
.scroll-menu .block{
  display: inline-block;
}

</style>