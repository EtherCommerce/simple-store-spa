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
  displayedColumns: string[] = ['sku', 'title', 'description', 'cost', 'price', 'buttons'];
  dataSource$: Observable<Product[]>;

  constructor(
    private _api: CatalogApiService,
    private _dialog: MatDialog
  ) {
    this.init();
  }

  create() {
    const product = new Product();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = product;
    dialogConfig.minWidth = '50%';

    const dialogRef = this._dialog.open(ProductDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      val => {
        if (val) {
          this._api.createProduct(val).subscribe(_ => this.init());
        }
      }
    );
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
          this._api.updateProduct(val._id, val).subscribe(_ => this.init());
        }
      }
    );
  }

  delete(product: Product) {
    if (!product) { return; }
    if (!confirm(`Удалить ${product.title}?`)) { return; }
    this._api.deleteProduct(product._id).subscribe(_ => this.init());
  }


  private init = () => this.dataSource$ = this._api.getProductList();
}
