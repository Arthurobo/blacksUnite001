<template>
<div>
    <v-container>
    <v-row>
     <v-col  cols="12">
  <v-card  v-for="job in jobs" :key="job">
    <v-img height="100" class="rounded-circle" style="margin-top: 10px" width="100" 
    src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />
    <v-card-title>{{ job.jobTitle }}</v-card-title>
    <v-card-text>
      <div>
        <h4>$ {{ job.salary }}</h4>
      </div>
      <div>{{ job.jobType }}</div>
      <div>{{ job.datePosted }}</div>
    </v-card-text>
      <v-btn color="green" text> Details</v-btn>
  </v-card>
  </v-col>
  </v-row>
  </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
      jobs: [
          { jobTitle: 'Frontend Web Developer', salary: '50,000 - 100,000', jobType: 'Remote/Fulltime', datePosted: '2 Hors Ago'},
          { jobTitle: 'Frontend Web Developer', salary: '50,000 - 100,000', jobType: 'Remote/Fulltime', datePosted: '2 Hors Ago'},
          { jobTitle: 'Frontend Web Developer', salary: '50,000 - 100,000', jobType: 'Remote/Fulltime', datePosted: '2 Hors Ago'},
          { jobTitle: 'Frontend Web Developer', salary: '50,000 - 100,000', jobType: 'Remote/Fulltime', datePosted: '2 Hors Ago'},
          { jobTitle: 'Frontend Web Developer', salary: '50,000 - 100,000', jobType: 'Remote/Fulltime', datePosted: '2 Hors Ago'},
          { jobTitle: 'Frontend Web Developer', salary: '50,000 - 100,000', jobType: 'Remote/Fulltime', datePosted: '2 Hors Ago'},
          { jobTitle: 'Frontend Web Developer', salary: '50,000 - 100,000', jobType: 'Remote/Fulltime', datePosted: '2 Hors Ago'},
          { jobTitle: 'Frontend Web Developer', salary: '50,000 - 100,000', jobType: 'Remote/Fulltime', datePosted: '2 Hors Ago'},
          { jobTitle: 'Frontend Web Developer', salary: '50,000 - 100,000', jobType: 'Remote/Fulltime', datePosted: '2 Hors Ago'},
          { jobTitle: 'Frontend Web Developer', salary: '50,000 - 100,000', jobType: 'Remote/Fulltime', datePosted: '2 Hors Ago'},
      ],
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>