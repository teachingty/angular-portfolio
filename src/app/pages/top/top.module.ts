import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopPageComponent } from './components/top-page/top-page.component';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [TopPageComponent, AboutComponent],
  imports: [
    CommonModule
  ],
  exports:[TopPageComponent, AboutComponent]
})
export class TopModule { }
