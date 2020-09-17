import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { ChatComponent } from './chat/chat.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    component: AboutComponent 
  },
  { path: "list", component: ListComponent },
  { path: "about", component: AboutComponent },
  { path: "chat", component: ChatComponent },
  { path: "detail/:id", component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
