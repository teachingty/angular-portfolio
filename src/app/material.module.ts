import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from "@angular/material/button";
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

const material=[
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatCardModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
