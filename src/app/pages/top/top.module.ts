import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SharedModule } from 'src/app/shared/shared.module';

import { TopPageComponent } from './components/top-page/top-page.component';
import { AboutComponent } from './components/about/about.component';




@NgModule({
  declarations: [
    TopPageComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    SharedModule
  ],
  exports:[
    TopPageComponent,
    AboutComponent,
  ]
})
export class TopModule { }
