import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { TopPageComponent } from './pages/top/components/top-page/top-page.component';
import { ChatComponent } from './pages/chat/chat.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// import { AccountModule } from './account/account.module';

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
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
