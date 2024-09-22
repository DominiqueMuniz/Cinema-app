import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import path from 'path';

@NgModule({
  imports: [
    MatButtonModule,
  ],
})
export class AppModule { }
interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  synopsis: string;
}

@Component({
  selector: 'app-movie-list',
  standalone: true, // Componente standalone
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  imports: [CommonModule, HttpClientModule, RouterModule]
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private http: HttpClient, private router: Router) {} // Injetando Router

  ngOnInit(): void {
    this.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3000/movies');
  }
  
  goToDetails(movieId: number){
    this.router.navigate(['/movie', movieId]);
  }

  goToAddComment(){
    this.router.navigate(['/add-comment']);
  }
  
}
