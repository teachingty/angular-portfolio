import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgdialogviewComponent } from './components/ngdialogview/ngdialogview.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NgdialogviewComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[HeaderComponent,FooterComponent],
  // entryComponents:[NgdialogviewComponent]
})
export class SharedModule {}
