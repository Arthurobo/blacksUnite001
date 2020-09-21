<template>
  <div>
    <v-container>
      <v-row class="job-top-color">
        <v-col cols="4"> </v-col>
        <v-col cols="4">
          <v-text-field
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
            class=""
          >
          </v-text-field>
        </v-col>
        <v-col cols="4">
          <JobsDialog />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3"> </v-col>
        <v-col cols="6"> </v-col>
        <v-col cols="3"> </v-col>
      </v-row>
      <v-row>
        <v-col cols="0.5" class=""> </v-col>

        <v-col cols="11" class="second-column" align="center">
            <h1>Jobs</h1>
          <JobsCard />
        </v-col>

        <v-col cols="0.5" class=""> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import JobsDialog from "./JobsDialog";
import JobsCard from "./JobsCard";

export default {
  components: {
    JobsDialog,
    JobsCard,
  },
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
</style>
