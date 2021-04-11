import { Component} from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'modal-login-content-dialog',
  templateUrl: './login-content-dialog.html',
})
export class ModalLoginContentDialog {
  constructor(public dialog:MatDialog){}
  
  openLoginDialog(){
    const dialogRef=this.dialog.open(LoginContentDialog);

    dialogRef.afterClosed().subscribe(result=>{
      console.log(`Dialog resutl:${result}`);
    })
  }
}

@Component({
  selector:'login-content',
  templateUrl:'./login-content-dialog-view.html',
})
export class LoginContentDialog{}
