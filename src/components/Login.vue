<template>
      <v-container class="fill-height" fluid >
        <v-row align="center" justify="center" >
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-10">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title class="center-login">Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Email" name="login" prepend-icon="mdi-account" type="email"></v-text-field>
                  <v-text-field id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>

</script>

<style>
    .nav-wrapper {
        background: #333;
    }

    .nav-list-item {
        background: #333;
    }

    .center-login {
        text-align: center;
    }
</style>