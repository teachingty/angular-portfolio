import { Component, OnInit} from "@angular/core";
import {MatDialogRef} from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ngdialogview',
  templateUrl: './ngdialogview.component.html',
  styleUrls: ['./ngdialogview.component.scss']
})
export class NgdialogviewComponent {
  public hide = true;

  constructor(public dialogRef: MatDialogRef<NgdialogviewComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.hide);
  }
}
