import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgdialogviewComponent } from "../ngdialogview/ngdialogview.component";
import { Input, Output, EventEmitter } from '@angular/core';
import { ValueSharedService } from "../../../services/value-shared/value-shared.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private vs:ValueSharedService) {}

  openDialog() {
    const dialogRef = this.dialog.open(NgdialogviewComponent);
    dialogRef.afterClosed().subscribe();
  }

  loginWrapperFunc(){
    this.vs.loginFlag=true;
    this.openDialog();
    console.log(this.vs.loginFlag)
  }
  signupWrapperFunc(){
    this.vs.loginFlag=false;
    this.openDialog();
    console.log(this.vs.loginFlag)
  }

  ngOnInit(): void {
  }

}
