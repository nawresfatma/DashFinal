import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { ProductsSellerComponent } from './products-seller/products-seller.component';
import { SellerComponent } from './seller.component';


const routes: Routes = [
  {
    path: '',
    component: SellerComponent,
    children: [
      { path: '', redirectTo: 'seller/product', pathMatch: 'full' },
      {
        path: 'product',
        component: ProductsSellerComponent
      }
      
    ]
  },
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
