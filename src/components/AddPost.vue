<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Add Post
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add A Post</span>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close
                <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container>
                <v-form ref="form"   v-if="!submitted"> 
            <v-row>
              <v-col cols="12" >
                <v-text-field v-model.lazy="posts.user" label="User" placeholder="User" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" >
                <v-text-field v-model.lazy="posts.content" label="Content" placeholder="Content" required></v-text-field>
                
                <!-- <v-file-input v-model.lazy="posts.image" accept="image/*" 
                label="Click to Upload" ></v-file-input>  -->
              </v-col>
              
            </v-row>
          <v-spacer></v-spacer>
            <v-btn color="blue" dark @click.prevent="post">Upload</v-btn>
                </v-form>
                
      <div v-if="submitted">
          <h3>Thanks for adding your post</h3>
      </div>
          </v-container>
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-dialog> 
  </v-row>
</template>

<script>
//from axios import 'axios'

  export default {

        
  data() {
    return {
        posts: {
            user: "",
            content: "",
            //image: "",
        },
        submitted: false,
        dialog: false,
    }
  },

  methods: {
      post: function() {
     //let headers = {'Content-Type': 'application/json;charset=utf-8'};
          //this.$http.post('http://127.0.0.1:8000/api/posts/', this.posts,  {headers: headers} ).then(function(data) {
          this.$http.post('http://127.0.0.1:8000/api/posts/', this.posts ).then(function(data) {
              console.log(data);
              this.submitted = true;
          });
      }
  }
  }
</script>