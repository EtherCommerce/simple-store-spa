import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../catalog.models';
import { CatalogApiService } from '../catalog-api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  displayedColumns: string[] = ['_id', 'name', 'description'];
  dataSource$: Observable<Category[]>;

  constructor(api: CatalogApiService) {
    this.dataSource$ = api.getCategoryList();
  }

}
