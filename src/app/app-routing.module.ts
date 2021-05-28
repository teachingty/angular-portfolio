import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { TopPageComponent } from './pages/top/components/top-page/top-page.component';
import { ChatComponent } from './pages/chat/chat.component';

const routes: Routes = [
  {
    path:"",
    component:TopPageComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"chat",
    component:ChatComponent
  },
  {
    path:"**",
    redirectTo:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
