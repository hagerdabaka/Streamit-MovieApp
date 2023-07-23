import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-comdy',
  templateUrl: './comdy.component.html',
  styleUrls: ['./comdy.component.scss']
})
export class ComdyComponent implements OnInit {
  comedyMovieResult: any = [];

  constructor(private service:MovieServiceService){}
  ngOnInit(): void {
    this.comedyMovie();
  }
  
  // comedy 
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }


}
