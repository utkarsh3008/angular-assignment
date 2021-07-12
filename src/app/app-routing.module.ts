import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductComponent } from './component/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: 'home',
   component: HomeComponent,
   data: { title:  'Home'} ,
   },
  { path: 'product/:country',
   component: ProductComponent,
   data: { title:  'Category'} ,
  },
  { path: 'product-detail/:name', 
  component: ProductDetailComponent,
  data: { title:  'SubCategory'} ,

 },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }