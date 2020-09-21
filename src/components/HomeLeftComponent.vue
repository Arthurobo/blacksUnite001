<template>
  <div>
          <h2>Our Heritage</h2>
          <v-container>
            <v-row>
              <v-col cols="auto" align="center" v-for="heritage in ourHeritage" :key="heritage">
                <h4>{{heritage.title}}</h4>
              </v-col>
              <v-spacer></v-spacer>
              <v-btn color="green" align="center">Learn More</v-btn>
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

