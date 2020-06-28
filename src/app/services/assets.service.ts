import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {map, take} from "rxjs/operators"; 
import { DeletedialogComponent } from './../components/deletedialog/deletedialog.component';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private dialog: MatDialog) { }

  
  deleteAlert(id) {
    return  this.dialog.open(DeletedialogComponent,{
      panelClass: 'confirm-dialog-container',
      position: {top: '20px'}
    })
      .afterClosed().pipe(map(res=>{
        if(res === "yes") return true;
  
        return false;
      }),take(1));
  }
}
