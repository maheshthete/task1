import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  data: string;

  constructor(public dialogRef: MatDialog) { }


  ngOnInit(): void {
  }

  close() {
  this.dialogRef.closeAll()
  }

}
