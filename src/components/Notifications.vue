<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="3"> </v-col>
        <v-col cols="6"> </v-col>
        <v-col cols="3"> </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class=""> </v-col>

        <v-col cols="6" class="second-column" align="center">
          <h2>Notifications</h2>
          <NotificationsCard />
        </v-col>

        <v-col cols="3" class=""> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NotificationsCard from "./NotificationsCard";

export default {
  components: {
    NotificationsCard,
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
