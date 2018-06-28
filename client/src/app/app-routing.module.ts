import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';
import { PackageComponent } from './package/package.component';
import { SubGalleryComponent } from './sub-gallery/sub-gallery.component';
import { ProductComponent } from './+products/components/product/product.component';
import { ColorListComponent } from './+products/components/color-list/color-list.component';
import { ProductDetailsComponent } from './+products/components/product-details/product-details.component';
import { ProductFilterComponent } from './+products/components/product-filter/product-filter.component';
import { ProductListComponent } from './+products/components/product-list/product-list.component';
import { ShoppingCartComponent } from './+products/components/shopping-cart/shopping-cart.component';

import { moreRoutes } from './app.routes';

const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: 'color-list', component: ColorListComponent},
  {path: 'product-details', component: ProductDetailsComponent},
  {path: 'product-filter', component: ProductFilterComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'subfolio/:id', component: SubGalleryComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'happy/', component: PackageComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: '/home'},
].concat(moreRoutes as any[]);

// const moreROutes: Routes = [{path: 'products', loadChildren: './+products/products.module#ProductsModule'}];

// const routesfull: Routes = routes.concat(moreRoutes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
