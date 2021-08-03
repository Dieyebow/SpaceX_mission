<template>
  <div>
    <v-container>
     <v-row  >
       <v-col    md="3" >
    <v-card
    class="mx-auto"

    tile
  >
    <v-list disabled>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >

      <v-list-item-content>
          <v-list-item-title v-html="'flight number: ' + details.name"></v-list-item-title>
          <v-list-item-subtitle v-html=" "></v-list-item-subtitle>
        </v-list-item-content>
        <v-divider
     ></v-divider>

     <v-list-item-content>
         <v-list-item-title v-html="'Mission name: ' + details.mission_name"></v-list-item-title>
         <v-list-item-subtitle v-html=" "></v-list-item-subtitle>
       </v-list-item-content>
       <v-divider
    ></v-divider>

    <v-list-item-content>
        <v-list-item-title v-html="'Mission id: ' + details.mission_id"></v-list-item-title>
        <v-list-item-subtitle v-html=" "></v-list-item-subtitle>
      </v-list-item-content>
      <v-divider
   ></v-divider>
   <v-list-item-content>
       <v-list-item-title v-html="'Upcoming: ' + details.upcoming"></v-list-item-title>
       <v-list-item-subtitle v-html=" "></v-list-item-subtitle>
     </v-list-item-content>
     <v-divider
  ></v-divider>
  <v-list-item-content>
      <v-list-item-title v-html="'Launch year: ' + details.launch_year"></v-list-item-title>
      <v-list-item-subtitle v-html=" "></v-list-item-subtitle>
    </v-list-item-content>
    <v-divider
 ></v-divider>
 <v-list-item-content>
     <v-list-item-title v-html="'Launch date utc: ' + details.launch_date_utc"></v-list-item-title>
     <v-list-item-subtitle v-html=" "></v-list-item-subtitle>
   </v-list-item-content>
   <v-divider
></v-divider>
<v-list-item-content>
    <v-list-item-title v-html="'Launch date local: ' + details.launch_date_local"></v-list-item-title>
    <v-list-item-subtitle v-html=" "></v-list-item-subtitle>
  </v-list-item-content>
  <v-divider
></v-divider>
<v-list-item-content>
    <v-list-item-title v-html="'is_tantative: ' + details.is_tantative"></v-list-item-title>
    <v-list-item-subtitle v-html=" "></v-list-item-subtitle>
  </v-list-item-content>
  <v-divider
></v-divider>

<v-list-item-content>
    <v-list-item-title v-html="'tentative max precision: ' + details.tentative_max_precision"></v-list-item-title>
    <v-list-item-subtitle v-html=" "></v-list-item-subtitle>
  </v-list-item-content>
  <v-divider
></v-divider>
<v-list-item-content>
    <v-list-item-title v-html="'Tbd: ' + details.tbd"></v-list-item-title>
    <v-list-item-subtitle v-html=" "></v-list-item-subtitle>
  </v-list-item-content>
  <v-divider
></v-divider>
<v-list-item-content>
    <v-list-item-title v-html="'Launch window: ' + details.launch_window"></v-list-item-title>
    <v-list-item-subtitle v-html=" "></v-list-item-subtitle>
  </v-list-item-content>
  <v-divider
></v-divider>

<v-list-item-content>
    <v-list-item-title v-html="'Launch Success: ' + details.launch_success"></v-list-item-title>
    <v-list-item-subtitle v-html=" "></v-list-item-subtitle>
  </v-list-item-content>


      </v-list-item-group>
    </v-list>
  </v-card>

  </v-col>
   <v-col    md="9" >
     <v-card class="mx-auto" tile  >
       <v-row  >
     <v-col cols="6" >
       <v-card>
         <v-img
           :src="details.links.mission_patch"
           height="525"
           class="grey darken-4"
         ></v-img>


       </v-card>
     </v-col>
 <v-col cols="6" >
   <v-card-title class="title">
     {{details.rocket_name}}
   </v-card-title>
   <p class="text-justify">
      {{details.mission_name}}
 </p>
 <p class="text-justify">
   Site name:  {{details.site_name}}
</p>
 <p class="text-justify">
    {{details.details}}
</p>
<v-card-actions>
  <a

      :href="details.links.article_link"
  >
  <v-btn color="deep-purple lighten-2"
  text  >Article</v-btn>

  </a>

  <a
      :href="details.links.wikipedia"
  >
  <v-btn
    color="deep-purple lighten-2"
    text
  >
    wikipedia
  </v-btn>
</a>

  <a

      :href="details.links.video_link"
  >
  <v-btn
    color="deep-purple lighten-2"
    text

  >
    video link
  </v-btn>
</a>

</v-card-actions>
 </v-col>

</v-row >

    </v-card>

   </v-col>

</v-row >
</v-container>


  </div>
</template>

<script>

import Lauch from './launcher/launch'

export default {
  name: 'Home',
  title :'',
  props: ["idflight"],

  components: {
  'launch-card': Lauch
},
  data () {
    return {
      msg: 'La home page',
      loading: false,
      selection: 1,
      flight : null,
      details :null,
      path : 'https://datas-impact.com/flight/get'


      }
  },
  mounted(){
    this.getDetailsLaunches();
  },
  methods: {
    getDetailsLaunches(){
        this.$http.get(this.path+'/'+this.idflight).then(response => {
            if (response.data)
            {
                this.details = response.data
            }
           }, error => {

         });
     }
  },
 }

</script>

<style scoped>

</style>
