import { EventSearchComponent } from './../components/event-search/event-search.component';
import { EventFormComponent } from './../components/event-form/event-form.component';
import { EventsListComponent } from './../components/events-list/events-list.component';
import { AuthGuard } from '../guard/auth.guard';
import { IndexPageComponent } from '../pages/index-page/index-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'index',
    component: IndexPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        component: EventsListComponent,
        outlet: 'listOutlet'
      },
      {
        path: 'new',
        component: EventFormComponent,
        outlet: 'listOutlet'
      },
      {
        path: 'search',
        component: EventSearchComponent,
        outlet: 'listOutlet'
      },
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    resolve: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
