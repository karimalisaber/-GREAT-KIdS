import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LightboxModule } from 'ngx-lightbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from "@angular/fire"
import {AngularFireDatabaseModule} from "@angular/fire/database"
import { environment } from './../environments/environment';
import { BackendService } from './services/backend.service';
import { SuccessPostMessageComponent } from './success-post-message/success-post-message.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './components/home/home.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DeletedialogComponent } from './components/deletedialog/deletedialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './component/login/login.component';
import { AuthService } from './services/auth.service';
import { AppointemntComponent } from './components/appointemnt/appointemnt.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessPostMessageComponent,
    NavbarComponent,
    AdminComponent,
    HomeComponent,
    DeletedialogComponent,
    LoginComponent,
    AppointemntComponent
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LightboxModule,
    FormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatTableModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  entryComponents:[
    DeletedialogComponent
  ],
  providers: [
    BackendService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
