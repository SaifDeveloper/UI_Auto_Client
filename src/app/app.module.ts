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

const routes: Routes = [
  { path: 'index', component: IndexComponent  },
  { path: 'builder', component: BuilderComponent  },
  { path: 'reactive', component: Reactive1Component  },
  { path: '**', component: IndexComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    Reactive1Component,
    BuilderComponent,
    IndexComponent
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
  ],
  providers: [PopulateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
