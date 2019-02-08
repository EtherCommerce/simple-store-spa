import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';

import { Product } from '../catalog.models';
import { CatalogApiService } from '../catalog-api.service';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  displayedColumns: string[] = ['sku', 'title', 'description', 'cost', 'price'];
  dataSource$: Observable<Product[]>;

  constructor(
    private _api: CatalogApiService,
    private _dialog: MatDialog
  ) {
    this.dataSource$ = _api.getProductList();
  }

  edit(product: Product) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = product;
    dialogConfig.minWidth = '50%';

    const dialogRef = this._dialog.open(ProductDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        val => {
          if (val) {
            // this._api.createProduct(val);
          }
        }
    );
  }

}
