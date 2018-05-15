import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MaterialModule} from './shared/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import {Reactive1Component} from './components/reactive1/reactive1.component';
import { BuilderComponent } from './components/builder/builder.component';
import { IndexComponent } from './components/index/index.component';
import {PopulateService} from './services/populate.service';
import {HttpClientModule} from '@angular/common/http';
import { FormgenComponent } from './components/formgen/formgen.component';
import {DialogService} from './services/dialog.service';
import { DialogComponent } from './components/formgen/dialog/dialog.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent  },
  { path: 'builder', component: BuilderComponent  },
  { path: 'reactive', component: Reactive1Component  },
  { path: 'formgen', component: FormgenComponent  },
  { path: '**', component: IndexComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    Reactive1Component,
    BuilderComponent,
    IndexComponent,
    FormgenComponent,
    DialogComponent,
  ],
  entryComponents:[
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes
    ),
    HttpClientModule
  ],
  providers: [PopulateService,DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
