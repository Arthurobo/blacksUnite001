import Home from './components/Home.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import Jobs from './components/Jobs.vue';
import Notifications from './components/Notifications.vue';
import Businesses from './components/Businesses.vue';
import BusinessesAdd from './components/BusinessesAdd.vue';
import Profile from './components/Profile.vue';
import Search from './components/Search.vue';
import Messages from './components/Messages.vue';
import Test from './components/Test.vue';
import JobsAdd from './components/JobsAdd.vue';



export default [
    { path: '/', component: Home },
    { path: '/users/login', component: Login },
    { path: '/users/sign-up', component: SignUp },
    { path: '/jobs', component: Jobs },
    { path: '/jobs/add', component: JobsAdd },
    { path: '/notifications', component: Notifications },
    { path: '/businesses', component: Businesses },
    { path: '/businesses/add', component: BusinessesAdd },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search },
    { path: '/messages', component: Messages },
    { path: '/test', component: Test },
]