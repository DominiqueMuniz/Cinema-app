import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

const routes: Routes = [
  { path: '', component: MovieListComponent}, // Rota inicial
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'add-comment', component: AddCommentComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
