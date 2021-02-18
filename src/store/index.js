import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      // Events_1 data
    card_sc:[
        {
          id:1,
          img : require('../assets/img/233307.jpg'),
          time: 'Sat, 20 Jan 2021, 17:00 - 22:00',
          title: 'US Alumni Annual Gathering 2020',
          icon1: 'mdi-radiobox-marked',
          text1: 'Crowne Plaza Vientiane',
          icon2 : 'mdi-comment-edit',
          text2: 'Edit',
          icon3: 'mdi-map-marker',
          text3: 'Check-in'
        },
        {
          id:2,
          img : require('../assets/img/233307.jpg'),
          time: 'Sat, 20 Jan 2021, 17:00 - 22:00',
          title: 'US Alumni Annual Gathering 2020',
          icon1: 'mdi-radiobox-marked',
          text1: 'Crowne Plaza Vientiane',
          icon2 : 'mdi-comment-edit',
          icon3: 'mdi-map-marker',
          text2: 'Check-in'
        },
        {
          id:3,
          img : require('../assets/img/233307.jpg'),
          time: 'Sat, 20 Jan 2021, 17:00 - 22:00',
          title: 'US Alumni Annual Gathering 2020',
          icon1: 'mdi-radiobox-marked',
          text1: 'Crowne Plaza Vientiane',
          icon2 : 'mdi-comment-edit',
          icon3: 'mdi-map-marker',
          text2: 'Check-in'
        },
        {
          id:4,
          img : require('../assets/img/233307.jpg'),
          time: 'Sat, 20 Jan 2021, 17:00 - 22:00',
          title: 'US Alumni Annual Gathering 2020',
          icon1: 'mdi-radiobox-marked',
          text1: 'Crowne Plaza Vientiane',
          icon2 : 'mdi-comment-edit',
          icon3: 'mdi-map-marker',
          text2: 'Check-in'
        },
      ],

      //Profile data
      card_r1:[
        {
          id:1,
          title:"Attending Events",
          img: require('../assets/img/233307.jpg'),
          time: 'Fri, 27 Nov 2020 , 17:00-22:00',
          text_tt: ' US Alumni Thanks Giving with the US Ambassador of Laos',
          icon1: 'mdi-map-marker-radius',
          text1: 'US Ambassador House',
          btn: 'Going',
          see : 'See all'

        },  
      ],
      card_r2:[
        {
          id:1,
          title: 'Project',
          img: require('../assets/img/233307.jpg'),
          text_tt:'   Environ-man,Environmental Protextion Act by Youth',
          icon1: 'mdi-map-marker-radius',
          text1: '04 November 2020',
          btn:'Going',
          see : 'See all'
        },
        {
          id:2,
          title: 'Articles',
          img: require('../assets/img/233307.jpg'),
          text_tt:' How a group of few Leaders lead hundreds to save the Earth',
          icon1: 'mdi-map-marker-radius',
          text1: '04 November 2020',
          btn:'Going',
          see : 'See all'
        }
      ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
