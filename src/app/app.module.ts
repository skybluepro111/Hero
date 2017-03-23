import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [
     BrowserModule,
     FormsModule,
     RouterModule.forRoot(routes)
  ],
  declarations: [
     AppComponent,
     HeroDetailComponent,
     HeroesComponent,
     DashboardComponent
 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
