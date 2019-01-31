import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './dashboards/home/home.component';
import { NewsComponent } from './dashboards/news/news.component';
import { ContactComponent } from './dashboards/contact/contact.component';
import { AboutComponent } from './dashboards/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'news', component: NewsComponent
      },
      {
        path: 'contact', component: ContactComponent
      },
      {
        path: 'about', component: AboutComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
