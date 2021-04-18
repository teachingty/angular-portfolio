import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopPageComponent } from './components/top-page/top-page.component';
import { AboutComponent } from './components/about/about.component';

import { IvyCarouselModule } from 'angular-responsive-carousel';



@NgModule({
  declarations: [
    TopPageComponent, 
    AboutComponent,
  ],
  imports: [
    CommonModule,
    IvyCarouselModule
  ],
  exports:[
    TopPageComponent, 
    AboutComponent, 
  ]
})
export class TopModule { }
