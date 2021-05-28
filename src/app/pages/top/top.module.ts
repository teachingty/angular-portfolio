import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SharedModule } from 'src/app/shared/shared.module';

import { TopPageComponent } from './components/top-page/top-page.component';




@NgModule({
  declarations: [
    TopPageComponent
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    SharedModule,
    FormsModule,
  ],
  exports:[
    TopPageComponent
  ]
})
export class TopModule { }
