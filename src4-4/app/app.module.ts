import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatingsystemComponent } from './operatingsystem/operatingsystem.component';
import { PrograminglanguagesComponent } from './programinglanguages/programinglanguages.component';
import { DatabasesComponent } from './databases/databases.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatingsystemComponent,
    PrograminglanguagesComponent,
    DatabasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
