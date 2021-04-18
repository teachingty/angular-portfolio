import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NgdialogviewComponent } from "../../shared/components/ngdialogview/ngdialogview.component";

@Component({
  selector: 'app-ngdialogpage',
  templateUrl: './ngdialogpage.component.html',
  styleUrls: ['./ngdialogpage.component.scss']
})
export class NgdialogpageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(NgdialogviewComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {}
}

