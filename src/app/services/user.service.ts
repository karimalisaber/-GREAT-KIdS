import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {  // return application user object
    return this.db.object('/users/'+ user.uid).update({
      name: user.displayName,
      email: user.email
    });
  } 

  getUsers(uid): AngularFireObject<AppUser>{
    return this.db.object('/users/' + uid);      
  }
}




export interface AppUser{
  name: string, 
  email: string , 
  isAdmin: boolean
}