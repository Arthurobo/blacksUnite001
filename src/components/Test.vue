<template>
<div>
  <v-container>
    <v-row>
      <v-col cols="2">
      </v-col>
      <v-col cols="8">
  <v-form ref="form" v-if="!submitted">
    
    <v-text-field v-model="title" :counter="50" label="Title" required />


    <!-- <v-text-field v-model="email" :rules="emailRules"
      label="E-mail" required>   
    </v-text-field> -->
    <v-btn  color="success" class="mr-4" @click.prevent="post">
      Submit
    </v-btn>
  </v-form>
      </v-col>
      <v-col cols="2">
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>

export default {
  
  data() {
    return {
        blog: {
            user: "",
            company_name: "",
            job_title: "",
            job_location: '',
            job_country_location: "",
            company_phone_number: "",
            company_info: "",
            job_description: '',
            experience_level: "",
            salary: "",
            company_email: "",
        },
        authors: ['Arthur Obo-Nwakaji', 'Titus', 'Mike', 'John'],
        submitted: false,
        salary: "",
        title: "",
    }
  },
  methods: {
      post: function() {
          this.$http.post('http://127.0.0.1:8000/api/blog/', this.title ).then(function(data) {
              console.log(data);
              this.submitted = true;
          });
      },
   
  }
}
</script>





















<script>
  // export default {

  //   data: () => ({
  //     valid: true,
  //     name: '',
  //     nameRules: [
  //       v => !!v || 'Name is required',
  //       v => (v && v.length <= 50) || 'Name must be less than 10 characters',
  //     ],
  //     email: '',
  //     emailRules: [
  //       v => !!v || 'E-mail is required',
  //       v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  //     ],
  //   }),
  // }
</script>