import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from './shared';
import { MaterialModule } from './_modules/material';
import { LoaderModule } from './_modules/loader';
import { CatalogModule } from './catalog/catalog.module';

registerLocaleData(localeRu);

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      }
    }),
    LoaderModule,
    CatalogModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru-RU' },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
