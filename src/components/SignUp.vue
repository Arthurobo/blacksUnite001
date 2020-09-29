<template>
      <v-container class="fill-height" fluid >
        <v-row align="center" justify="center" >
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-10" > <!--hidden-md-and-up-->
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title class="center-login">Sign Up</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-if="!submitted">
                  <v-text-field label="Username" v-model.lazy="register.username" prepend-icon="mdi-account" type="text"></v-text-field>
                  <v-text-field label="Email" v-model.lazy="register.email" prepend-icon="mdi-account" type="email"></v-text-field>
                  <v-text-field id="password" v-model.lazy="register.password1" label="Password" prepend-icon="mdi-lock" type="password"></v-text-field>
                  <v-text-field id="password" v-model.lazy="register.password2" label="Confirm Password" prepend-icon="mdi-lock" type="password"></v-text-field>
                  <v-btn color="primary" dark @click.prevent="post">Sign Up</v-btn>
                </v-form>
                <!-- <v-text-field v-model.lazy="jobs.job_type" 
                    placeholder="job_type" required> 
                </v-text-field> -->
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
                      <div v-if="submitted">
          <h3>Your account has beed created, you can now sign in.</h3>
      </div>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
  data() {
    return {
      submitted: false,
      register: {
        username: "",
        email: "",
        password1: "",
        password2: "",
      }
    }
  },

  methods: {
    post: function () {
      this.$http.post('http://127.0.0.1:8000/api/users/registration/', this.register).then(function(data) {
        console.log(data)
        this.submitted = true
      })
    }
  }
}

</script>

<style>
    .nav-wrapper {
        background: #333;
    }

    .nav-list-item {
        background: #333;
    }

    .center-login {
        text-align: center;
    }
</style>