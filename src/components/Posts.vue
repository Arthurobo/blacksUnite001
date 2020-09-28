<template>
  <div>
            <v-container v-for="post in posts" :key="post.id">
                  <v-card>
              <v-row justify="space-between">
                <v-col cols="">
                  <!-- <v-img height="200" width="200"
                    src="https://cdn.vuetifyjs.com/images/cards/store.jpg">
                  </v-img> -->
                  <h4 class="post-content">{{post.user }}</h4>
                  <p class="post-content">{{post.content }}</p>
                  <p class="post-content">{{post.date_created }}</p>
                </v-col>
              </v-row>
                  </v-card>
            </v-container>

  </div>
</template>


<script>
//import axios from 'axios'

export default {

  data() {
    return {

      posts: []
    };
  },

  // mounted () {
  //   axios
  //   .get('http://127.0.0.1:8000/api/posts/',)
  //   .then(response => (
  //     this.posts = response.data
  //   ))
  //   .catch(e => {
  //     this.errors.push(e)
  //   })
  // },

    created() {
        this.$http.get('http://127.0.0.1:8000/api/posts/').then(function(data){
            // this.blogs = data.body.slice(0,10);
            return data.json();
        }).then(function(data){
            var blogsArray = [];
            for (let key in data) {
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.posts = blogsArray;
        })
    },


}
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

.post-content {
  padding: 0px 100px;
  text-align: left;
}
</style>

