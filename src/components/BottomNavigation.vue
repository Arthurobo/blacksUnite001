<template>
  <div class="overflow-hidden show-on-scroll hidden-md-and-up">

<v-container>
    <v-bottom-navigation app v-model="activeBtn" :input-value="showNav">
      <v-spacer></v-spacer>
      <v-btn>
        <span>Home</span>
        <router-link to="/">
        <v-icon>mdi-home</v-icon>
        </router-link>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn>
        <span>Notifications</span>
        <router-link to="/notifications">
        <v-icon>mdi-bell</v-icon>
        </router-link>
      </v-btn>
      <v-spacer></v-spacer>
    
      <v-btn>
        <span>Jobs</span>
        <router-link to="/jobs">
        <v-icon >mdi-briefcase</v-icon>
        </router-link>
      </v-btn>
      <v-spacer></v-spacer>    

      <v-btn>
        <span>Nearby</span>
        <router-link to="/businesses">
        <v-icon>mdi-map-marker</v-icon>
        </router-link>
      </v-btn>
      <v-spacer></v-spacer>

    </v-bottom-navigation>
    </v-container>
  </div>
</template>



<script>
  export default {
    data () {
      return {
        activeBtn: 1,
        showNav: true,
      }
    },
  }
</script>


<style scoped>
a {
text-decoration: none;

}

a:active {
  color: red;
}
.exact-active {
  color: red;
}
</style>