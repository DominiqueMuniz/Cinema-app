import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true, // Indica que o componente é autônomo
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule ,MovieListComponent, MovieDetailComponent, AddCommentComponent]
})
export class AppComponent {
  title = 'cinema-app';
}
