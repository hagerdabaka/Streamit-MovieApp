import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../service/movie-service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
            },
      400: {
        items: 3
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    // nav: true
  }


  customOptions2: OwlOptions = {
    loop: true,
    autoplay:true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    // nav: true
  }

  bannerResult: any= [];
  trendingMovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];
  isLoading=true;
  constructor(private service:MovieServiceService){}
  ngOnInit(): void {
   this.bannerData();
   this.trendingData();
   this.actionMovie();
   this.adventureMovie();
   this.comedyMovie();
   this.animationMovie();
   this.documentaryMovie();
   this.sciencefictionMovie();
   this.thrillerMovie();
  }
  
  //bannerData
  bannerData(){
    this.service.bannerApiData().subscribe(res=>{
      console.log(res,'bannerresult#');
      this.bannerResult=res.results;
      this.isLoading = false;
    })
  }

  //trending Data

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
      this.isLoading = false;
       
    });
  }

  
  // action 
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
      this.isLoading = false;
    });
  }




  // adventure 
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
      this.isLoading = false;
    });
  }


  // animation 
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
      this.isLoading = false;
    });
  }


  // comedy 
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
      this.isLoading = false;
    });
  }

  // documentary 
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
      this.isLoading = false;
    });
  }


  // science-fiction 
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
      this.isLoading = false;
    });
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
      this.isLoading = false;
    });
  }

}
