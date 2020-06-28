import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { FormGroup } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { BackendService } from './services/backend.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessPostMessageComponent } from './success-post-message/success-post-message.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GREAT KIdS';

}
