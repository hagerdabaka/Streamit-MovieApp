import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})

export class TrendingComponent implements OnInit {

  trendingMovieResult:any=[];
  
  constructor(private service:MovieServiceService){}
  ngOnInit(): void {
    this.trendingData();
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult');
      this.trendingMovieResult = result.results;
       
    });
  }
}


