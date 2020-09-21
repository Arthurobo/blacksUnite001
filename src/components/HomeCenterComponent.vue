<template>
  <div>
          <h4>Add a Post</h4>
          <v-card class="d-inline-block mx-auto" v-for="post in posts" :key="post">
            <v-container>
              <v-row justify="space-between">
                <v-col cols="auto">
                  <h4>{{post.title}}</h4>
                  <v-img
                    height="200"
                    width="200"
                    src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                  ></v-img>
                  <p>{{post.content }}</p>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
  </div>
</template>


<script>

export default {
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

