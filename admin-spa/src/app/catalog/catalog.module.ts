import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule, routedComponents } from './catalog.routing';
import { CatalogApiService } from './catalog-api.service';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  declarations: [
    CatalogComponent,
    ...routedComponents
  ],
  providers: [
    CatalogApiService
  ]
})
export class CatalogModule { }
