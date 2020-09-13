import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    component: AboutComponent 
  },
  { path: "about", component: AboutComponent },
  { path: "list", component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
