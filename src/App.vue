<template>
  <v-app>
    <v-app-bar app color="#262626" text--white>
      <Navbar />
    </v-app-bar>

    <v-main>
      <router-view>
        <Home />
        <Jobs />
        <Notifications />
        <Businesses />
        <Profile />
        <Search />
        <Messages />
        <Test />
        <JobsAdd />
      <!--<Login />
        <SignUp />-->
      </router-view>   

      <BottomNavigation />
    </v-main>

  </v-app>
</template>

<script>
import Home from './components/Home';
//import Login from './components/Login';
//import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import BottomNavigation from './components/BottomNavigation';
import Jobs from './components/Jobs';
import Notifications from './components/Notifications';
import Businesses from './components/Businesses';
import Profile from './components/Profile';
import Search from './components/Search';
import Messages from './components/Messages';
import Test from './components/Test';
import JobsAdd from './components/JobsAdd';

export default {
  name: 'App',

  components: {
    Home,
    //Login,
    //SignUp,
    Jobs,
    Notifications,
    Businesses,
    Profile,
    Search,
    Navbar,
    BottomNavigation,
    Messages,
    Test,
    JobsAdd,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .ul-elements {
    display: flex;
  }

  .ul-elements li {
    list-style: none;
    padding: 0px 10px;
  }

   .ul-elements a {
    list-style: none;
    padding: 0px 10px;
    color: #fff;
    text-decoration: none;
  }
  .title {
    display:flex;
  }
</style>















