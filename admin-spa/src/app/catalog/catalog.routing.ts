import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        children: [
          {
            path: '',
            component: ProductListComponent,
            data: { title: 'Product list' }
          }
        ]
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            component: CategoryListComponent,
            data: { title: 'Category list' }
          }
        ]
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
  ProductListComponent,
  CategoryListComponent
];
