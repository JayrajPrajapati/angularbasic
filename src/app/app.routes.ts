import { Routes } from '@angular/router';
import { Home } from './componenets/pages/home/home';
import { About } from './componenets/pages/about/about';
import { Login } from './componenets/pages/login/login';
import { Profile } from './componenets/pages/profile/profile';
import { Pagenotfound } from './componenets/pages/pageNotFound/pagenotfound/pagenotfound';
import { ContactUs } from './componenets/pages/contact-us-route-param/contact-us/contact-us';
import { Users } from './componenets/pages/users/users/users';
import { UsersDetails } from './componenets/pages/users-details/users-details/users-details';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "about", component: About },
    { path: "login", component: Login },
    { path: "profile", component: Profile },
    { path: "contactUs/:data/:secondObj", component: ContactUs },
    { path: "contactUs", component: ContactUs }, // For Optional a Route Parameter
    { path: "user", component: Users },
    { path: "user-details/:id", component: UsersDetails },
    
    { path: "**", component: Pagenotfound }, //If you have page and want to show then use this.
    //{ path: "**", redirectTo: '' }, //If you want to redirect to other page
];
