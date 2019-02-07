import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../catalog.models';
import { CatalogApiService } from '../catalog-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  displayedColumns: string[] = ['sku', 'title', 'description', 'cost', 'price'];
  dataSource$: Observable<Product[]>;

  constructor(api: CatalogApiService) {
    this.dataSource$ = api.getProductList();
  }

}
