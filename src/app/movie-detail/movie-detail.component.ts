import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  synopsis: string;
  showTime: string; // Hora fictícia
}

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie!: Movie;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    const movies = JSON.parse(localStorage.getItem('movies') || '[]'); // Exemplo de armazenamento
    this.movie = movies.find((m: Movie) => m.id === movieId);
    this.movie.showTime = "20:00"; // Exemplo de horário fictício
  }
}
