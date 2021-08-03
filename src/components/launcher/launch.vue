<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
      <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="resume.links.mission_patch_small"
    ></v-img>
    <v-card-title> Mission name : {{resume.mission_name}} &nbsp;&nbsp;&nbsp; <v-chip class="deep-purple accent-4 white--text"> N°  {{resume.flight_number}}</v-chip> </v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >


        <div class="grey--text ml-4">
        launch year <strong>{{resume.launch_year}}</strong>
        </div> <br>
        <div class="grey--text ml-4">
        Rocket name  <strong>{{resume.rocket.rocket_name}} </strong>
        </div> <br>
      </v-row>
      <v-row
        align="center"
        class="mx-0"
      >
      <div class="grey--text ml-4">
      Site name <strong>{{resume.launch_site.site_name_long| truncate(40)}} </strong>
      </div>
    </v-row>
     </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>{{resume.details| truncate(40) }}  </v-card-text>

    <v-card-text>

    </v-card-text>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve" :to="'/flight/'+resume.flight_number"
      >
        Ouvrir
      </v-btn>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Modifier
      </v-btn>
      <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        color="deep-purple lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Supprimer
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
        Supprimer  element
        </v-card-title>
        <v-card-text>êtes vous sûr de vouloir supprimer cet element?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Annuler
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="removelaunch"
          >
            Supprimer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'lauch',
  props: {
    resume: Object,
    keylaunch: Number,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loading: false,
      selection: 1,
      dialog: false,

      }
  },
  mounted(){

  },
  methods: {
     reserve () {
       this.loading = true

       setTimeout(() => (this.loading = false), 2000)
     },
     removelaunch(){
        this.dialog = false;
       this.$emit('removelauncher', {
        flight_to_remove:this.resume.flight_number,

      })
     }

   }

}
</script>

<style scoped>

</style>
