import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import {switchMap, map} from "rxjs/operators";
import { UserService } from './user.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService, private router: Router) { }

  canActivate() : Observable<boolean>{
    localStorage.setItem('isAdmin', '0')

    return this.auth.user$
    .pipe(
      switchMap(
        res=> {
          if(res)
            return this.userService.getUsers(res.uid)?.valueChanges()
          
            return of(null)
          }
      ), map(
        appuser=> {
          if(!appuser?.isAdmin) {
            this.router.navigateByUrl('/login')
          }
          
          localStorage.setItem('isAdmin', '1')
          return  appuser.isAdmin
        }
    ))
  }
}
