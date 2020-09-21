import Home from './components/Home.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import Jobs from './components/Jobs.vue';
import Notifications from './components/Notifications.vue';
import Businesses from './components/Businesses.vue';
import Profile from './components/Profile.vue';
import Search from './components/Search.vue';
import Messages from './components/Messages.vue';
import Nearby from './components/Nearby.vue';
import Test from './components/Test.vue';


export default [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/sign-up', component: SignUp },
    { path: '/jobs', component: Jobs },
    { path: '/notifications', component: Notifications },
    { path: '/businesses', component: Businesses },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search },
    { path: '/messages', component: Messages },
    { path: '/nearby', component: Nearby },
    { path: '/test', component: Test },
]