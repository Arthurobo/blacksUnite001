<template>
<div>
  <h1>Posts</h1>
  <h1>Holla</h1>
  
  <ul v-if="posts && posts.length">
    <li v-for="post of posts" :key="post">
      <p><strong>{{post.user}}</strong></p>
      <p>{{post.company_name}}</p>
      <p>{{post.job_title}}</p>
      <p>{{post.job_location}}</p>
      <p>{{post.job_country_location}}</p>
      <p>{{post.company_phone_number}}</p>
      <p>{{post.company_info}}</p>
      <p><strong>{{post.experience_level}}</strong></p>
      <p>{{post.job_country_location}}</p>
      <p>{{post.company_email}}</p>
      <p>{{post.date_created}}</p>
      <p>{{post.last_updated}}</p><hr>
    </li><hr>
  </ul><hr>
</div>
  <!-- <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{error.message}}
    </li>
  </ul> -->
</template>



<script>
import axios from 'axios'
export default {
    components: {
      TestAdd,
    },

    data() {
        return {
            posts: [],
            errors: []
        }
    },

    created() {
        axios.get('http://127.0.0.1:8000/api/jobs/users/list/')
        .then(response => {
            this.posts = response.data
        })
        .catch(e => {
            this.errors.push(e)
        })
    },
}
</script>