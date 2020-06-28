import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import {AngularFireAuth} from "@angular/fire/auth"
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user;

  constructor(private auth: AuthService, private afAuth: AngularFireAuth, userService: UserService) { 
    
  }

  ngOnInit(): void {

  }

  
  login(){
    this.auth.login(); 

    // this.auth.getCurrentUser();    
  }

  // isAdmin(){
  //   this
  // }
}
