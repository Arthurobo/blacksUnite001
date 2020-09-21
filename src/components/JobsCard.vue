<template>

<v-container fluid>
    <v-row dense>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card  max-width="300" v-for="job in jobs" :key="job">
    <v-img height="100" class="rounded-circle" style="margin-top: 10px" width="100" 
    src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />
    <v-card-title align="center"><h6>{{ job.jobTitle }}</h6></v-card-title>
    
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

    <!--  -->
</template>

<script>

export default {
  data() {
    return {

    cards: [
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 3,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 3,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 3,
      },
    ],
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
    posts: [],
    errors: [],
    blogs: [],
    }
    },

  created() {
    this.$http.get('http://localhost:8000/api/jobs/users/list/').then(function(data){
        this.blogs = data.body.slice(0, 10);
    });
  },
};
</script>








  