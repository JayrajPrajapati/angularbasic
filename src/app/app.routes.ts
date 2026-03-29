import { Routes } from '@angular/router';
import { ProdcutList } from './components/product/prodcut-list/prodcut-list';
import { ProdcutDetails } from './components/product/prodcut-details/prodcut-details';

export const routes: Routes = [{
    path: '', component: ProdcutList
}, {
    path: 'details/:id', component: ProdcutDetails,
}];
