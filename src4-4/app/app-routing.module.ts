import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrograminglanguagesComponent  } from "./programinglanguages/programinglanguages.component";
import { OperatingsystemComponent } from "./operatingsystem/operatingsystem.component";
import { DatabasesComponent } from "./databases/databases.component";
import {AppComponent  } from "./app.component";

const routes: Routes = [
  //{path:'', component:AppComponent},
  {path:'programinglanguages', component:PrograminglanguagesComponent},
  {path:'operatingsystems', component:OperatingsystemComponent},
  {path:'databases', component:DatabasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
