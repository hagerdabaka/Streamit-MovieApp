import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-ct-slider',
  templateUrl: './ct-slider.component.html',
  styleUrls: ['./ct-slider.component.scss']
})
export class CtSliderComponent implements OnInit {
  trendingMovieResult: any = [];
  constructor(private service:MovieServiceService){}
  ngOnInit(): void {
   this.trendingData();
  }

    //trending Data

    trendingData() {
      this.service.trendingMovieApiData().subscribe((result) => {
        console.log(result, 'trendingresult#');
       this.trendingMovieResult = result.results;
      })
    }

}
