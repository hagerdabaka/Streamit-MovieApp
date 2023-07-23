import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule  }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from'@angular/platform-browser/animations'
// import{ MatToolbarModule} from '@angular/material/toolbar';
// import{ MatSidenavModule} from '@angular/material/sidenav';
// import {MatIconModule} from '@angular/material/icon';
// import {MatListModule}from '@angular/material/list';
// import{MatButtonModule}from '@angular/material/button';
import { HeaderComponent } from './sharedComponent/header/header.component';
import { FooterComponent } from './sharedComponent/footer/footer.component';
import { SpinnerComponent } from './sharedComponent/spinner/spinner.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http'
import { MovieServiceService } from './service/movie-service.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Banner2Component } from './sharedComponent/banner2/banner2.component';
import { CtSliderComponent } from './sharedComponent/ct-slider/ct-slider.component';
import { UserComponent } from './user/user/user.component';
import { TrendingComponent } from './movie-component/trending/trending.component';
import { ActionComponent } from './movie-component/action/action.component';
import { AdventureComponent } from './movie-component/adventure/adventure.component';
import { AnimationComponent } from './movie-component/animation/animation.component';
import { DocumentaryComponent } from './movie-component/documentary/documentary.component';
import { SciencefictionComponent } from './movie-component/sciencefiction/sciencefiction.component';
import { ThrillerComponent } from './movie-component/thriller/thriller.component';
import { ComdyComponent } from './movie-component/comdy/comdy.component';
import { SignupComponent } from './user/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    HomeComponent,
    AboutComponent,
    SearchComponent,
    MovieDetailsComponent,
    Banner2Component,
    CtSliderComponent,
    UserComponent,
    TrendingComponent,
    ActionComponent,
    AdventureComponent,
    AnimationComponent,
    DocumentaryComponent,
    SciencefictionComponent,
    ThrillerComponent,
    ComdyComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule
    // MatButtonModule,
    // MatIconModule,
    // MatListModule,
    // MatToolbarModule,
    // MatSidenavModule
  ],
  providers: [MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
