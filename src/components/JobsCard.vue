<template>

<v-container fluid>
            <v-row>
          <v-col align="center" cols="3" v-for="job in jobs" :key="job.id">
        <v-card class="" width="250">
          <v-img class="white--text align-end" height="200px" :src="job.image ">
          </v-img>
        <v-avatar align="left" style="margin-top: 5px; border-radius: 40px" class="profile-icon">
          <img :src="job.image" alt="John">
        </v-avatar>
            
    <v-card-text>
      <div>
        <h3>{{ job.company_name }}</h3>
      </div>
      <div>
        <h4 class="job-title">{{ job.job_title }}</h4>
        <h4>$ {{ job.salary }}</h4>
      </div>
      <div><h4>{{ job.job_type }}</h4></div>
      <div>{{ job.date_created }}</div>
    </v-card-text>
          <v-card-actions align="center">
          </v-card-actions>
        </v-card>  
          </v-col>
        </v-row>
  </v-container>

    <!--  -->
</template>

<script>
import axios from 'axios'

export default {
    data () {
        return {
            jobs: null,
        }
    },

    mounted () {
        axios
        .get('http://127.0.0.1:8000/api/jobs/users/list/',)
        .then(response => (
            this.jobs = response.data
        ))
        .catch(e => {
            this.errors.push(e)
        })
      
    },
};
</script>


<style scoped>
.job-title {
  background-color: #f2f2f2;
  border-radius: 50px;
  padding: 3px 0px;
}
</style>






  