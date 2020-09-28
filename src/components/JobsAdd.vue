<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="3"> </v-col>
        <v-col cols="6"> </v-col>
        <v-col cols="3"> </v-col>
      </v-row>
      <v-row>
        <v-col cols="0.5" class=""> </v-col>

        <v-col cols="11" class="second-column" align="center">
            <h1>Add A Job</h1>
            
                <v-form ref="form"   v-if="!submitted"> 
            <v-row>
              <v-col cols="6" >
                <v-text-field v-model.lazy="jobs.user" label="User" 
                    placeholder="User" required>
                </v-text-field>
              </v-col>
              <v-col cols="6" >
                <v-text-field v-model.lazy="jobs.company_name"  label="User" 
                    placeholder="company_name" required> 
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" >
                <v-text-field v-model.lazy="jobs.job_title" 
                    placeholder="job_title" required>
                </v-text-field>
              </v-col>
              <v-col cols="3" >
                <v-text-field v-model.lazy="jobs.job_location" 
                    placeholder="job_location" required> 
                </v-text-field>
              </v-col>
              <v-col cols="3" >
                <v-text-field v-model.lazy="jobs.job_country_location" 
                    placeholder="job_country_location" required> 
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" >
                <v-text-field v-model.lazy="jobs.company_phone_number" 
                    placeholder="company_phone_number" required>
                </v-text-field>
              </v-col>
              <v-col cols="6" >
                <v-text-field v-model.lazy="jobs.company_info" 
                    placeholder="company_info" required> 
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" >
                <v-text-field v-model.lazy="jobs.experience_level" 
                    placeholder="experience_level" required>
                </v-text-field>
              </v-col>
              <v-col cols="6" >
                <v-text-field v-model.lazy="jobs.salary" 
                    placeholder="salary" required> 
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" >
                <v-text-field v-model.lazy="jobs.company_email" 
                    placeholder="company_email" required>
                </v-text-field>
              </v-col>
              <v-col cols="6" >
                <v-text-field v-model.lazy="jobs.job_type" 
                    placeholder="job_type" required> 
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8" >
                <v-text-field v-model.lazy="jobs.job_description" 
                    placeholder="job_description" required> 
                </v-text-field>
              </v-col>
              <v-col cols="1" ></v-col>
              <v-col cols="3" >
                <v-file-input v-model.lazy="jobs.image" accept="image/*" label="Click to Upload"></v-file-input>
              </v-col>

            </v-row>
          <v-spacer></v-spacer>
            <v-btn color="blue" dark @click.prevent="post">Post</v-btn>
                </v-form>
                      <div v-if="submitted">
          <h3>Thanks for adding your post</h3>
      </div>
          
        </v-col>

        <v-col cols="0.5" class=""> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  components: {
    //JobsDialog,
  },
  data() {
      return {
          submitted: false,
          jobs: {
              user: "",
              company_name: "",
              job_title: "",
              job_location: "",
              job_country_location: "",
              company_phone_number: "",
              company_info: "",
              job_description: "",
              experience_level: "",
              salary: "",
              company_email: "",
              job_type: "",
              image: "",

          }
      }
  }, 

  methods: {
      post: function() {
          this.$http.post('http://127.0.0.1:8000/api/jobs/users/list/', this.jobs).then(function(data) {
              console.log(data)
              this.submitted = true
          });
      }
  }
};
</script>

<style scoped>
.first-column {
  background-color: red;
}
.second-column {
  background-color: #f0f0f0;
}

.third-column {
  background-color: green;
}

.job-top-color {
  background-color: #f0f0f0;
}

a {
text-decoration: none;

}
</style>
