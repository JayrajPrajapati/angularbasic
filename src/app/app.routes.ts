import { Routes } from '@angular/router';
import { Home } from './componenets/pages/home/home';
import { About } from './componenets/pages/about/about';
import { Login } from './componenets/pages/login/login';
import { Profile } from './componenets/pages/profile/profile';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"about",component:About},
    {path:"login",component:Login},
    {path:"profile",component:Profile}
];
