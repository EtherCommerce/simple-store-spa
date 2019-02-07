import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../catalog.models';
import { CatalogApiService } from '../catalog-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  items$: Observable<Product[]>;

  constructor(private _api: CatalogApiService) { }

  ngOnInit() {
    this.items$ = this._api.getProductList();
  }

}
