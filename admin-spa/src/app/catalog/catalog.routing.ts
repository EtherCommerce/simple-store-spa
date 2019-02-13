import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';

import { CategoryDialogComponent } from './category-dialog/category-dialog.component';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { FeedbackDialogComponent } from './feedback-dialog/feedback-dialog.component';

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
      },
      {
        path: 'feedbacks',
        children: [
          {
            path: '',
            component: FeedbackListComponent,
            data: { title: 'Feedback list' }
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
  CategoryListComponent,
  FeedbackListComponent
];

export const entryComponents = [
  CategoryDialogComponent,
  ProductDialogComponent,
  FeedbackDialogComponent
];
