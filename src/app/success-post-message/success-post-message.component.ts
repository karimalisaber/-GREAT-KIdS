import { Component, OnInit } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-success-post-message',
  templateUrl: './success-post-message.component.html',
  styleUrls: ['./success-post-message.component.scss']
})
export class SuccessPostMessageComponent implements OnInit {

  constructor(public snackBarRef: MatSnackBarRef<SuccessPostMessageComponent>) { }

  ngOnInit(): void {
  }

}
