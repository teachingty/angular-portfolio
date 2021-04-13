import { Component, OnInit} from "@angular/core";
import {MatDialogRef} from '@angular/material/dialog';
// import { MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-ngdialogview',
  templateUrl: './ngdialogview.component.html',
  styleUrls: ['./ngdialogview.component.scss']
})
export class NgdialogviewComponent {

  constructor(public dialogRef: MatDialogRef<NgdialogviewComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
