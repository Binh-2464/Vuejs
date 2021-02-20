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
      card_l1:[ // Left side
        {
          id:1,
          text_tt: 'Global Undergraduate Exchange Program',
          icon1: 'mdi-account-details',
          text1: 'Old Dominion University',
          icon2: 'mdi-radiobox-marked',
          text2: 'NortFolk,VirGinia,US',
          icon3: 'mdi-calendar-blank',
          text3: '20 August 2018 , - 16 Dec 2020',
        },
        {
          id:2,
          text_tt: 'YSEALI Some Program Spring',
          icon1: 'mdi-radiobox-marked',
          text1: 'New York, USA',
          icon3: 'mdi-calendar-blank',
          text3: '20 August 2018 , - 16 Dec 2020',

        },
        {
          id:3,
          text_tt: 'YSEALI Regional Spring',
          icon1: 'mdi-radiobox-marked',
          text1: 'Ho Chi Minh, VietNam',
          icon3: 'mdi-calendar-blank',
          text3: '20 August 2018 , - 16 Dec 2020',
        }, 
      ],
      card_r1:[ //Right Side
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
  getters:{
    get_Profile_id: (state) => (id) =>{
      return state.card_l1.find(x => x.id ===id)
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
