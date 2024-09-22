import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { RouterModule} from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouterModule, useValue: AppRoutingModule }, provideAnimationsAsync()
  ]
})
  .catch(err => console.error(err));
