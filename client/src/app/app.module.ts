import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PackageComponent } from './package/package.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SubGalleryComponent } from './sub-gallery/sub-gallery.component';
import { UsergalleryComponent } from './usergallery/usergallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PackageComponent,
    GalleryComponent,
    PortfolioComponent,
    SubGalleryComponent,
    UsergalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
