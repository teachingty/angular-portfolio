import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";
// import {MatDialogModule} from '@angular/material/dialog';


const material=[
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  // MatDialogModule
]

@NgModule({
  // imports: [material],
  exports: [material]
})
export class MaterialModule { }
