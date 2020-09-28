<template>
  <div class="body">
    
    <v-row wrap>
      <v-col cols="12" md="3" align="center">
        <div class="first-column scroll">
        <HomeLeftComponent />
        </div>
      </v-col>

      <v-col cols="12" md="6" align="center" class="second-column">
        <HomeCenterComponent />
      </v-col>

      <v-col cols="12" md="3">
        <div class="third-column">
        <HomeRightComponent />
        </div>
      </v-col>
    </v-row>
    
  </div>
</template>


<script>
import HomeLeftComponent from "./HomeLeftComponent";
import HomeRightComponent from "./HomeRightComponent";
import HomeCenterComponent from "./HomeCenterComponent";

export default {
  components: {
    HomeLeftComponent,
    HomeRightComponent,
    HomeCenterComponent,
  },

  data() {
    return {
      posts: [
        {
          title: "Why I like the Black Community",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, sint!",
        },
        {
          title: "Why I like the Black Community",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, sint!",
        },
        {
          title: "Why I like the Black Community",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, sint!",
        },
        {
          title: "Why I like the Black Community",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, sint!",
        },
      ],
    };
  },
};
</script>

<style scoped>

.body{
  background-color: #F7F7F7
}
.first-column {
  background-color: #f7f7f7;
  position: fixed;
  width: 22%;
  height: 100vh;
  overflow: scroll;
  padding:5px; 
  overflow-x: hidden; 
  overflow-y: auto; 
  text-align:justify; 
}

.scroll { 
            } 

.second-column {
  background-color: #fff;

}

.third-column {
  background-color: #f7f7f7;
  position: fixed;
  width: 22%;
  height: 100vh;
  overflow: scroll;
  padding:5px; 
  overflow-x: hidden; 
  overflow-y: auto; 
  text-align:justify; 
}

.fourth-column {
  background-color: yellow;
}

.flexing {
}
</style>

