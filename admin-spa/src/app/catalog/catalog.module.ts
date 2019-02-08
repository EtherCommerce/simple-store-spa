import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared';
import { MaterialModule } from '../material';
import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule, routedComponents } from './catalog.routing';
import { CatalogApiService } from './catalog-api.service';
import { CategoryDialogComponent } from './category-dialog/category-dialog.component';

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
    CategoryDialogComponent
  ],
  entryComponents: [
    CategoryDialogComponent
  ],
  providers: [
    CatalogApiService
  ]
})
export class CatalogModule { }
