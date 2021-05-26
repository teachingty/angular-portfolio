import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgdialogviewComponent } from './components/ngdialogview/ngdialogview.component';
import { ProjectCardBarComponent } from './components/project-card-bar/project-card-bar.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule} from '@angular/router';
import { ChatDatePipe } from './pipes/chat-date/chat-date.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NgdialogviewComponent,
    ProjectCardBarComponent,
    ChatDatePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ProjectCardBarComponent,
    ChatDatePipe
  ],
  // entryComponents:[NgdialogviewComponent]
})
export class SharedModule {}
