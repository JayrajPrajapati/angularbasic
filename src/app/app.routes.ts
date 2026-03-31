import { Routes } from '@angular/router';
import { ProdcutList } from './components/product/prodcut-list/prodcut-list';
import { ProdcutDetails } from './components/product/prodcut-details/prodcut-details';
import { UserList } from './components/user/user-list/user-list';
import { AddUser } from './components/user/add-user/add-user';

export const routes: Routes = [
    {
        path: '', component: ProdcutList
    },
    {
        path: 'details/:id', component: ProdcutDetails,
    },
    {
        path: 'user', component: UserList
    },
    {
        path: 'addUser', component: AddUser,
    },
    {
        path: 'editUser/:id', component: AddUser
    }];
