import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    children: [
      {
        path: '',
        component: ProductListComponent,
        data: { title: 'Catalog list' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }


export const routedComponents = [
  ProductListComponent
];
