import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
// import { MatProgressSpinnerModule } from '@angular/material';

import * as loaderFeature from './state/loader.reducer';
import { LoaderInterceptorService } from './services/loader.interceptor';
import { LoaderComponent } from './loader.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(loaderFeature.loaderFeatureKey, loaderFeature.loaderReducer)
    // MatProgressSpinnerModule
  ],
  declarations: [
    LoaderComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }
  ],
  exports: [
    LoaderComponent
  ],
})
export class LoaderModule { }
