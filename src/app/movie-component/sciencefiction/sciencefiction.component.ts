import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-sciencefiction',
  templateUrl: './sciencefiction.component.html',
  styleUrls: ['./sciencefiction.component.scss']
})
export class SciencefictionComponent implements OnInit {
  sciencefictionMovieResult: any = [];

  constructor(private service: MovieServiceService) { }

  ngOnInit(): void {
    this.sciencefictionMovie();
  }



  // science-fiction 
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

}
