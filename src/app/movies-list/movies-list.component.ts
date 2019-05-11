import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../shared/movie.mock-data.service';
import { SearchPipe } from '../shared/movie.search.pipe';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  searchMovie: string;
  names: string[] = [];
  rates: string[] = [];
  genres: string[] = ['action', 'adventure', 'biography', 'comedy', 'crime',
    'drama', 'history', 'mystery', 'scifi', 'sport', 'thriller']

  constructor(private movieServise: MockDataService) { }

  ngOnInit() {
    this.movieServise.getMovies().subscribe((result) => {
      this.names.push(result['name']);
    });
  }

}
