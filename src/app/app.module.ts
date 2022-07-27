import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuorListComponent } from './component/tuor-list/tuor-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SaveComponent } from './component/save/save.component';
import { EditTuorComponent } from './component/edit-tuor/edit-tuor.component';

@NgModule({
  declarations: [
    AppComponent,
    TuorListComponent,
    SaveComponent,
    EditTuorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
