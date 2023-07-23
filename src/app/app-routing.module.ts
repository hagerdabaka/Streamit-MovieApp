import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpinnerComponent } from './sharedComponent/spinner/spinner.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { Banner2Component } from './sharedComponent/banner2/banner2.component';
import { CtSliderComponent } from './sharedComponent/ct-slider/ct-slider.component';
import { TrendingComponent } from './movie-component/trending/trending.component';
import { ActionComponent } from './movie-component/action/action.component';
import { AnimationComponent } from './movie-component/animation/animation.component';
import { ComdyComponent } from './movie-component/comdy/comdy.component';
import { DocumentaryComponent } from './movie-component/documentary/documentary.component';
import { SciencefictionComponent } from './movie-component/sciencefiction/sciencefiction.component';
import { ThrillerComponent } from './movie-component/thriller/thriller.component';
import { AdventureComponent } from './movie-component/adventure/adventure.component';
import { UserComponent } from './user/user/user.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'movie/:id' , component:MovieDetailsComponent},
  {path:'spinner' , component:SpinnerComponent},
  {path:'about' , component:AboutComponent},
  {path:'detail/:id',component:MovieDetailsComponent},
  {path:'banner',component:Banner2Component},
  {path:'trend',component:TrendingComponent},
  {path:'action',component:ActionComponent},
  {path:'comdy',component:ComdyComponent},
  {path:'animate',component:AnimationComponent},
  {path:'doc',component:DocumentaryComponent},
  {path:'science',component:SciencefictionComponent},
  {path:'thriller',component:ThrillerComponent},
  {path:'advanture',component:AdventureComponent},
  {path:'slide',component:CtSliderComponent},
  {path:'signin', component:UserComponent},
  {path:'signup', component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
