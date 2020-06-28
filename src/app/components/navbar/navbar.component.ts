import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAdmin: boolean = false; 
  constructor(private auth: AuthService, private user: UserService) { }

  ngOnInit(): void {
  
   this.auth.checkAdmin()
    .subscribe(
      res=> this.isAdmin = res
    )
  }

  logout(){
    this.auth.logout();
    this.isAdmin = null;
  }
}
