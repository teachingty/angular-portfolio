import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/top/components/about/about.component';
import { TopPageComponent } from './pages/top/components/top-page/top-page.component';
import { NgdialogpageComponent } from './ngdialogpage/ngdialogpage.component';

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
    path:"dialog",
    component:NgdialogpageComponent
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
