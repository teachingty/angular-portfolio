import { Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NgdialogviewComponent } from "./ngdialogview/ngdialogview.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(NgdialogviewComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
