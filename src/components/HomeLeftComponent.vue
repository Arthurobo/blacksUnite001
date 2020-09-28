<template>
  <div>
          <h2>Our Heritage</h2>
          <v-text-field
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            
            id="heritage-search"
            align="center"
            style="margin-left: 10px; margin-right: 40px"
          >
          </v-text-field>
          <v-container>
            <v-row class="row-space" >
              <v-col cols="12" class="our-heritage" align="left" v-for="heritage in ourHeritage" :key="heritage">
                <h4>{{heritage.title}}</h4>
              </v-col>
              <v-spacer></v-spacer>
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
      ourHeritage: {
        title: "",
      },

    };
  },

  mounted () {
    axios
    .get('http://127.0.0.1:8000/api/blog/')
    .then(response => (
      this.ourHeritage = response.data
    ))
    .catch(e => {
      this.errors.push(e)
    })
  },
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

.our-heritage {
  padding-left: 20px;
}

.row-space {
  margin-bottom: 200px;
}

</style>

