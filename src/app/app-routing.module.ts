import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';

const ProductsModule = () => import('./products/products.module').then(x => x.ProductsModule);

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', loadChildren: ProductsModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }