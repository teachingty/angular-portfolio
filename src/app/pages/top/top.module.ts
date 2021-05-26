import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SharedModule } from 'src/app/shared/shared.module';

import { TopPageComponent } from './components/top-page/top-page.component';
import { AboutComponent } from './components/about/about.component';
import { ChatComponent } from './components/chat/chat.component';



@NgModule({
  declarations: [
    TopPageComponent,
    AboutComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    IvyCarouselModule,
    SharedModule,
    FormsModule
  ],
  exports:[
    TopPageComponent,
    AboutComponent,
    ChatComponent
  ]
})
export class TopModule { }
