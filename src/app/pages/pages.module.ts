import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule} from '@angular/router';
import { environment } from '../../environments/environment';

import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TopModule } from './top/top.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AboutComponent,
    ChatComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    SharedModule,
    TopModule
  ],
  exports:[
    AboutComponent,
    ChatComponent,
    PageNotFoundComponent
  ],
})
export class PagesModule {}
