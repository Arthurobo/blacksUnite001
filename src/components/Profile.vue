<template>
  <div>
    <v-container>
    <v-row class="third-column">
      <v-col cols="12" md="3">
        <div class="first-column">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end rounded-image" height="400px" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
            <v-card-title>Abigail Obo-Nwakaji</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>
              <h3>Software Engineer </h3>
              <h5 class="green-color"><b>Rivers State, Nigeria</b></h5>
              <h5 class="green-color">Yoruba Tribe</h5>
            </div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, iusto. 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, iusto. 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, iusto. 
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, iusto. 
              Voluptatem hic nostrum amet pariatur. Necessitatibus quasi officiis perferendis neque.
            </div>
          </v-card-text>
            <div class="open-to-work" >
            <v-btn color="#4CAF50" dark><h4>Open For Work</h4></v-btn>
            </div>
        </v-card> 
        </div>     
      </v-col>
      <v-col cols="12" md="9" align="center" >
              <div>
            <v-btn color="blue" text><h5>1888 Followers</h5></v-btn>
            <v-btn color="blue"  dark>Follow</v-btn>
            <v-btn color="blue" text><h5>1888 Followers</h5></v-btn>
            <v-btn color="blue" dark>Unfollow</v-btn>
            </div>

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
      </v-col>
    </v-row>
        <v-row>
          <v-col align="center">
          <h2>Posts</h2>
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
  
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myPages: [
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

.first-column {
  /* background-color: #f7f7f7; 
  align: right;
  position: fixed;
  width: 22%;
  height: 100vh;
  overflow: scroll;
  padding:5px; 
  overflow-x: hidden; 
  overflow-y: auto; 
  text-align:justify;  */
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

.green-color {
  color: #1565C0;
}

.open-to-work {
  /*background-color:#4CAF50; */
  padding: 15px; 
  text-align: left;
} 

.open-to-work h4 {
  color: #fff;
}

.open-to-work p {
  margin-right: 300px
}

.top-buttons btn {
  margin: 10px;
}
</style>>
