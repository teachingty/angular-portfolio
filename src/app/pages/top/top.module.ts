import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { environment } from '../../../environments/environment';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

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
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  exports:[
    TopPageComponent,
    AboutComponent,
    ChatComponent
  ]
})
export class TopModule { }
