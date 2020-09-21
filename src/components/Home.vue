<template>
  <div>
    <v-row wrap>
      <v-col cols="12" md="2" align="center" class="first-column">
        <HomeLeftComponent />
      </v-col>

      <v-col cols="12" md="7" align="center" class="second-column">
        <HomeCenterComponent />
      </v-col>

      <v-col cols="12" md="3" class="third-column">
        <HomeRightComponent />
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
.first-column {
  background-color: #f7f7f7;
  position: relative;
}

.second-column {
  background-color: #fff;
}

.third-column {
  background-color: #f7f7f7;
}

.fourth-column {
  background-color: yellow;
}

.flexing {
}
</style>

