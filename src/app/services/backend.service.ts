import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private db: AngularFireDatabase) { }

  postForm(message){
    return this.db.list('/forms').push(message);
  }

  getForms(){
    return this.db.list('/forms');
  }

  delete(id){
    return this.db.list('/forms').remove(id)
  }
}

