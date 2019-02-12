import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';

import { Category } from '../catalog.models';
import { CatalogApiService } from '../catalog-api.service';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  displayedColumns: string[] = ['_id', 'name', 'description', 'buttons'];
  dataSource$: Observable<Category[]>;

  constructor(
    private _api: CatalogApiService,
    private _dialog: MatDialog
  ) {
    this.dataSource$ = _api.getCategoryList();
  }

  create() {
    const category = new Category();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = category;
    dialogConfig.minWidth = '50%';

    const dialogRef = this._dialog.open(CategoryDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      val => {
        if (val) {
          this._api.createCategory(val).subscribe(result => console.log(result));
        }
      }
    );
  }

  edit(category: Category) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = category;
    dialogConfig.minWidth = '50%';

    const dialogRef = this._dialog.open(CategoryDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        val => {
          if (val) {
            this._api.updateCategory(val._id, val).subscribe(result => console.log(result));
          }
        }
    );
  }

  delete(category: Category) {
    if (!category) { return; }
    if (!confirm(`Удалить ${category.name}?`)) { return; }
    this._api.deleteCategory(category._id).subscribe(result => console.log(result));
  }

}
