<template>
  <div>
    <v-container>
    <v-row class="third-column">
      <v-col cols="12" md="3" class="first-column">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end rounded-image" height="300px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
            <v-card-title>Lucy Obo-Nwakaji</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>Software Engineer</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit sunt id sed deserunt voluptatibus corporis quasi hic blanditiis quisquam!</div>
          </v-card-text>
          <v-card-actions align="center">
            <div>
            <v-btn color="blue" text>1888 Followers</v-btn>
            <v-btn color="blue">Follow</v-btn>
            </div>
            <!-- <div>
            <v-btn color="blue" text>1888 Following</v-btn>
            <v-btn color="blue">UnFollow</v-btn>
            </div> -->
          </v-card-actions>
        </v-card>      
      </v-col>
      <v-col cols="12" md="9" class="" align="center">
          <h2>My Businesses</h2>
        <v-row>
          <v-col align="center" cols="4" v-for="page in myPages" :key="page">
        <v-card class="mx-auto" max-width="300">
          <v-img class="white--text align-end" height="200px" :src="page.imageUrl ">
          </v-img>
          <v-card-text class="text--primary">
            <div>
              <h3><b>{{ page.name }}</b></h3>
            </div>
            <p>{{ page.description }}</p>
          </v-card-text>
          <v-card-actions align="center">
          </v-card-actions>
        </v-card>  
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
          <v-btn color="green" align="center" >View All</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
          <h4>Posts</h4>
        <v-row>
          <v-col align="center" cols="12" v-for="page in myPages" :key="page">
        <v-card class="mx-auto" max-width="300">
          <v-img class="white--text align-end" height="200px" :src="page.imageUrl ">
          </v-img>
          <v-card-text class="text--primary">
            <div>
              <h3><b>{{ page.name }}</b></h3>
            </div>
            <p>{{ page.description }}</p>
          </v-card-text>
          <v-card-actions align="center">
          </v-card-actions>
        </v-card>  
          </v-col>
        </v-row>
          </v-col>
        </v-row>         
      </v-col>
    </v-row>
  
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myPages: [
        { name: 'Pivla Ecommerce Solution', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit sunt id sed deserunt voluptatibus', imageUrl: 'https://bit.ly/3ifGHj0'},
        { name: 'Pivla Ecommerce Solution', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit sunt id sed deserunt voluptatibus', imageUrl: 'https://bit.ly/35mMAYq'},
        { name: 'Pivla Ecommerce Solution', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum velit sunt id sed deserunt voluptatibus', imageUrl: 'https://bit.ly/3ifGHj0'},
      ]
    }
  }
}
</script>


<style scoped>
img {
  background-color: #f7f7f7;
  padding-top: 50px;
}

.second-column {
  background-color: red;
}

.third-column {
  background-color: #f7f7f7;
}

.fourth-column {
  background-color: yellow;
}

.rounded-image{
    border-radius: 50px;
} 
</style>>
