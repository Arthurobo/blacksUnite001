<template>
  <div>
        <h3 align="center">Top Businesses Near You</h3>
        <v-container>
          <v-row justify="space-between">
            <v-col cols="auto" class="d-flex" v-for="shop in shopsNearMe" :key="shop" >
                  <v-img height="80" width="80" 
                    src="https://cdn.vuetifyjs.com/images/cards/store.jpg">
                  </v-img>
              <div>
              <p>{{ shop.address }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      posts: [
        {
          title: "Why I like the Black Community",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, sint!",
        },
        {
          title: "Why I like the Black Community",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, sint!",
        },
        {
          title: "Why I like the Black Community",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, sint!",
        },
        {
          title: "Why I like the Black Community",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, sint!",
        },
      ],
      ourHeritage: [
        { title: "Yoruba Culture" },
        { title: "Igbo Culture" },
        { title: "Eleme Culture" },
        { title: "Ogoni Culture" },
        { title: "Jamaican Culture" },
        { title: "Ibibio Culture" },
        { title: "Etche Culture" },
        { title: "Yoruba Culture" },
        { title: "Igbo Culture" },
        { title: "Eleme Culture" },
      ],
      shopsNearMe: [
        { name: 'Pivla', address: 'No. 25 East West Road Alode Eleme Rivers State'},
        { name: 'Pivla', address: 'No. 25 East West Road Alode Eleme Rivers State'},
        { name: 'Pivla', address: 'No. 25 East West Road Alode Eleme Rivers State'},
        { name: 'Pivla', address: 'No. 25 East West Road Alode Eleme Rivers State'},
        { name: 'Pivla', address: 'No. 25 East West Road Alode Eleme Rivers State'},
        { name: 'Pivla', address: 'No. 25 East West Road Alode Eleme Rivers State'},
        { name: 'Pivla', address: 'No. 25 East West Road Alode Eleme Rivers State'},
        { name: 'Pivla', address: 'No. 25 East West Road Alode Eleme Rivers State'},
        { name: 'Pivla', address: 'No. 25 East West Road Alode Eleme Rivers State'},
        { name: 'Pivla', address: 'No. 25 East West Road Alode Eleme Rivers State'},
        { name: 'Pivla', address: 'No. 25 East West Road Alode Eleme Rivers State'},
        { name: 'Pivla', address: 'No. 25 East West Road Alode Eleme Rivers State'},
      ],
    };
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

.flexing {
}
</style>

