import { Component, Input, OnInit} from "@angular/core";
import {MatDialogRef} from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { ValueSharedService } from "../../../services/value-shared/value-shared.service";


@Component({
  selector: 'app-ngdialogview',
  templateUrl: './ngdialogview.component.html',
  styleUrls: ['./ngdialogview.component.scss']
})
export class NgdialogviewComponent {
  public hide:boolean = true;

  constructor(public dialogRef: MatDialogRef<NgdialogviewComponent>, public vs:ValueSharedService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log(this.hide);
  }

}
