import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';
import { PackageComponent } from './package/package.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'happy', component: PackageComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
