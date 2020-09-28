<template>
  <v-app id="inspire">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3 white--text" dark>
      <!-- <v-toolbar-side-icon class="white--text"></v-toolbar-side-icon> -->
      
      <v-toolbar-title style="width: 400px" class="ml-0 pl-0 ">
        <router-link to="/" class="white-link">
        <span class="">Luntil
      <!-- <v-btn icon class="hidden-sm-and-down btn-today">
        <v-icon>mdi-home</v-icon>
      </v-btn>-->
      </span> 
        </router-link>
      </v-toolbar-title>

      <v-text-field flat solo-inverted hide-details 
                    prepend-inner-icon="mdi-magnify" 
                     
                    class="hidden-sm-and-down">
      </v-text-field>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      
        <router-link to="/jobs">
      <v-btn icon class="hidden-sm-and-down btn-today">
        <!-- <v-icon>mdi-plus-circle</v-icon> -->
        <v-icon>mdi-briefcase</v-icon>
      </v-btn>
        </router-link>
      <v-spacer></v-spacer>
        <router-link to="/businesses">
      <v-btn icon class="hidden-sm-and-down btn-today">
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
        </router-link>
      <v-spacer></v-spacer>
        <router-link to="/notifications">
      <v-btn icon class="hidden-sm-and-down btn-today">
        <v-icon>mdi-bell</v-icon>
      </v-btn>
        </router-link>
      <v-spacer></v-spacer>
        <router-link to="/messages">
      <v-btn icon class="hidden-sm-and-down btn-today">
        <v-icon>mdi-message-text</v-icon>
      </v-btn>
        </router-link>
      <v-spacer></v-spacer>
          <!-- <a :href="'/users/profile'"> -->
        <router-link to="/profile">
        <v-avatar class="profile-icon">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
        </v-avatar>
        </router-link>
      <v-btn icon color="white" class="hidden-sm-and-down">
        <v-icon>mdi-menu-down</v-icon>
      </v-btn>  
    </v-app-bar>
  </v-app>

</template>

<script>
  export default {
    data() {
      return {
        sideDraw: false,
        items: [
        { title: 'Click Me1' },
        { title: 'Click Me2' },
        { title: 'Click Me3' },
        { title: 'Click Me4' },
      ],
      }
    }
  }
    
</script>

<style scoped>
a {
  text-decoration: none;
}

.btn-today {
  background-color: #3475be;
}

.white-link {
  color: white;
}

.router-link-active .btn-today {
  background-color: #032f61;
}
</style>