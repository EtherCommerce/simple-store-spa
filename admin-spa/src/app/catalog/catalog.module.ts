import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule, routedComponents } from './catalog.routing';
import { CatalogApiService } from './catalog-api.service';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
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
