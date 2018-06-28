import {Routes, RouterModule} from '@angular/router';
import { ProductComponent } from './+products/components/product/product.component';

// const moreRoutes: Routes[];

export const moreRoutes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: 'products'},
  {path: 'products', component: ProductComponent, loadChildren: './+products/products.module#ProductsModule'}
];
