<template>
  <div>
        <h3 align="center">Top Businesses Near You</h3>
        <v-container>
          <v-row justify="space-between" class="row-space">
            <v-col cols="auto" class="d-flex" v-for="business in topBusinesses" :key="business.id" >
                  <v-img height="80" width="80" 
                    src="https://cdn.vuetifyjs.com/images/cards/store.jpg">
                  </v-img>
                  <!-- <v-img height="80" width="80" 
                    :src=" business.image" 
                    alt="https://cdn.vuetifyjs.com/images/cards/store.jpg">
                  </v-img> -->
              <div>
              <p>{{ business.office_address }}</p>
              </div>
            </v-col>
            <v-btn color="green" align="center">Learn More</v-btn>
          </v-row>
        </v-container>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      topBusinesses: {
        image: "",
        country_location_of_page: "",
        office_address: "",
      }
    };
  },

  mounted () {
    axios
    .get('http://127.0.0.1:8000/api/business-pages/list/')
    .then(response => (
      this.topBusinesses = response.data
    ))
    .catch(e => {
      this.errors.push(e)
    })
  }
};
</script>

<style scoped>
.first-column {
  background-color: #f7f7f7;
  position: relative;
}

.second-column {
  background-color: #fff;
}

.third-column {
  background-color: #f7f7f7;
}

.fourth-column {
  background-color: yellow;
}

.flexing {
}

.row-space {
  margin-bottom: 200px;
}
</style>

