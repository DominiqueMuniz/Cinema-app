import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class AddCommentComponent {
  name: string = '';
  email: string = '';
  comment: string = '';

  constructor(private router: Router) {}

  submitComment(): void {
    // Aqui você pode fazer o que quiser com o comentário,
    // como enviá-lo para uma API ou armazená-lo localmente.

    // Exemplo de redirecionar após o envio
    this.router.navigate(['/']);
  }
}
