import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessPostMessageComponent } from 'src/app/success-post-message/success-post-message.component';

@Component({
  selector: 'app-appointemnt',
  templateUrl: './appointemnt.component.html',
  styleUrls: ['./appointemnt.component.scss']
})
export class AppointemntComponent implements OnInit {
error: boolean = false;
@ViewChild('userForm') userForm;

constructor(private backend: BackendService, private snack: MatSnackBar) { }

  ngOnInit(): void {}

  send(data){
    this.error = true;
    if(!this.userForm.valid){
      this.error = true;
      return false
    }
    this.backend.postForm(data).then(
      res=>{
        this.snack
          .openFromComponent(SuccessPostMessageComponent,{duration: 2000, panelClass: 'background-none', horizontalPosition: 'right', verticalPosition: 'top'})
            .afterDismissed().subscribe(
              res=>{
                this.snack.open('تم ارسال رسالتك، شكرًا لك' , 'x', {duration: 1500 ,  panelClass: 'second-message'}).afterDismissed().subscribe(
                  res=>{
                    location.reload();
                  },
                  ()=> location.reload()
                );
          });
      }
    );
  }
}
