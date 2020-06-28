import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {auth} from 'firebase';
import { Observable, of } from 'rxjs';
import {AngularFireAuth} from "@angular/fire/auth"
import {switchMap, map} from "rxjs/operators";
import { UserService } from './user.service';
import * as firebase from "firebase";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
// user;
user$ : Observable<firebase.User>;
  constructor(
    public router: Router,
     public afAuth: AngularFireAuth,
     private route: ActivatedRoute,
     private userService: UserService

     ) {
      this.user$ = afAuth.authState ; 
      // afAuth.authState.subscribe(
      //   user=>  {
      //     if(user){
      //       this.user = user.displayName
      //       userService.save(user);
      //     }
      //   }
      // )
    }

  logout(){
    localStorage.removeItem('isAdmin');
    this.afAuth.signOut();
    this.router.navigateByUrl('/');
  }

  login(){
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider ()).then(
    res=>{
      this.isAdmin()
    }

    )
  }

  isAdmin(){
   return this.user$
    .pipe(
      switchMap(
        res=> this.userService.getUsers(res?.uid).valueChanges()
      ), map(
        appuser=> appuser?.isAdmin
    )).subscribe(res=> {
      if(res) this.router.navigateByUrl('/admin')

      else return false
    }
    )
  }

  checkAdmin(){
    return this.user$
    .pipe(
      switchMap(
        res=> this.userService.getUsers(res?.uid).valueChanges()
      ), map(
        appuser=> appuser?.isAdmin
    ))
  }
}
