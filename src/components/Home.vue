<template>

  <div>
    <v-container>
     <v-row  >
       <v-col    md="4" v-for="launch,kiki in launches">
             <launch-card :resume="launch" :keylaunch="kiki" @removelauncher="deletelauncher" > </launch-card>
      </v-col>
    </v-row >
</v-container>
  </div>
</template>

<script>

import Lauch from './launcher/launch'

export default {
  name: 'Home',
  components: {
  'launch-card': Lauch
},
  data () {
    return {
      msg: 'La home page',
      loading: false,
      selection: 1,
      perscroll: 6,
      begin: 0,
      launches : null,
      all_launches :null,
      bottomOfWindow : null,

      path: 'https://datas-impact.com/flight/get/all',
      path_remove : 'https://datas-impact.com/flight/delete'

      }
  },
  mounted(){
    this.getAllLaunches();
  },
  watch:{
    begin(value){
       this.getNextUser();
    },
    all_launches(values){
      this.launches = [];
      for (var k = 0; k <=this.begin; k++) {
        if (values[k] !== undefined)
        {
           this.launches.push(values[k]);
        }
      }
     }

  },
  created(){
    window.onscroll = () => {
      this.bottomOfWindow = document.documentElement.scrollTop + window.innerHeight+2 >= document.documentElement.offsetHeight;

       if (this.bottomOfWindow)
       {
          this.begin+=this.perscroll+1;
       }
    }
  },
  methods: {
    getAllLaunches(){
       let Oldthis = this
       this.$http.get(Oldthis.path).then(response => {
            if (response.data) {
              this.all_launches = [];
              this.all_launches = response.data;
              this.launches = [];
              for (var i =this.begin; i <=(this.begin+this.perscroll); i++) {
                this.launches.push(this.all_launches[i]);
              }
            }
           }, error => {

         });
     },
     removeOnlineLaunche(idfd){

       this.$http.get(this.path_remove+'/'+idfd ).then(response => {
             if (response.data) {
                this.all_launches = response.data;


            }

           }, error => {

         });
     },
     deletelauncher(to_remove){

      this.removeOnlineLaunche(to_remove.flight_to_remove);
     },
     getNextUser() {
        let Oldthis = this;
       for (var i =this.begin; i <=(this.begin+this.perscroll); i++) {
         this.launches.push(this.all_launches[i]);
       }
    }
  },

   }

</script>

<style scoped>

</style>
