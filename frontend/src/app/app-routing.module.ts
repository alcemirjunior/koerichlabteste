import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { ATIVIDADE001Component } from './components/atividade001/atividade001.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "ATIVIDADE-001",
    component: ATIVIDADE001Component
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
