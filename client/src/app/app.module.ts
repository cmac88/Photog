import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PackageComponent } from './package/package.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SubGalleryComponent } from './sub-gallery/sub-gallery.component';

import {ProductsModule} from './+products/products.module';
import {ProductsService} from './services/products.service';
import {CartService} from './services/cart.service';
import {Location, CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PackageComponent,
    GalleryComponent,
    PortfolioComponent,
    SubGalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpModule,
    ProductsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [HttpService, ProductsService, CartService, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
