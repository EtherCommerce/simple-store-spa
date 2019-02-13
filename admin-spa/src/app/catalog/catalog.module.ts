import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule, routedComponents, entryComponents } from './catalog.routing';
import { CatalogApiService } from './catalog-api.service';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    CatalogRoutingModule
  ],
  declarations: [
    CatalogComponent,
    ...routedComponents,
    ...entryComponents
  ],
  entryComponents: [
    ...entryComponents
  ],
  providers: [
    CatalogApiService
  ]
})
export class CatalogModule { }
