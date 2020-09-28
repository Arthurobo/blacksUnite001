<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="3"> </v-col>
        <v-col cols="6"> </v-col>
        <v-col cols="3"> </v-col>
      </v-row>
      <v-row>
        <v-col cols="0.5" class=""> </v-col>

        <v-col cols="11" class="second-column" align="center">
            <h1>Add A Business</h1>
            
                <v-form ref="form"   v-if="!submitted"> 
            <v-row>
              <v-col cols="6" >
                <v-text-field v-model.lazy="businesses.user" label="User" 
                    placeholder="User" required>
                </v-text-field>
              </v-col>
              <v-col cols="6" >
                <v-text-field v-model.lazy="businesses.page_name"  label="User" 
                    placeholder="page_name" required> 
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" >
                <v-text-field v-model.lazy="businesses.page_description" 
                    placeholder="page_description" required>
                </v-text-field>
              </v-col>
              <v-col cols="6" >
                <v-text-field v-model.lazy="businesses.country_location_of_page" 
                    placeholder="country_location_of_page" required> 
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" >
                <v-text-field v-model.lazy="businesses.state_location_of_page" 
                    placeholder="state_location_of_page" required>
                </v-text-field>
              </v-col>
              <v-col cols="6" >
                <v-text-field v-model.lazy="businesses.city_location_of_page" 
                    placeholder="city_location_of_page" required> 
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" >
                <v-text-field v-model.lazy="businesses.office_address" 
                    placeholder="office_address" required>
                </v-text-field>
              </v-col>
              <v-col cols="6" >
                <v-text-field v-model.lazy="businesses.ip_address" 
                    placeholder="ip_address" required> 
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" >
                <v-text-field v-model.lazy="businesses.zip_code" 
                    placeholder="zip_code" required>
                </v-text-field>
              </v-col>
              <v-col cols="6" >
                <v-text-field v-model.lazy="businesses.type_of_business" 
                    placeholder="type_of_business" required> 
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8" >
                <v-text-field v-model.lazy="businesses.category_of_business" 
                    placeholder="category_of_business" required> 
                </v-text-field>
              </v-col>
              <v-col cols="1" ></v-col>
              <!-- <v-col cols="3" >
                <v-file-input v-model.lazy="jobs.image" accept="image/*" label="Click to Upload"></v-file-input>
              </v-col> -->
            </v-row>
          <v-spacer></v-spacer>
            <v-btn color="blue" dark @click.prevent="post">Post</v-btn>
                </v-form>
                      <div v-if="submitted">
          <h3>Thanks for adding your New Page</h3>
      </div>
          
        </v-col>

        <v-col cols="0.5" class=""> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  components: {
    //JobsDialog,
  },
  data() {
      return {
          submitted: false,
          businesses: {
              user: "",
              page_name: "",
              page_description: "",
              country_location_of_page: "",
              state_location_of_page: "",
              city_location_of_page: "",
              office_address: "",
              ip_address: "",
              zip_code: "",
              type_of_business: "",
              category_of_business: "",

          }
      }
  }, 

  methods: {
      post: function() {
          this.$http.post('http://127.0.0.1:8000/api/business-pages/list/', this.businesses).then(function(data) {
              console.log(data)
              this.submitted = true
          });
      }
  }
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

a {
text-decoration: none;

}
</style>
