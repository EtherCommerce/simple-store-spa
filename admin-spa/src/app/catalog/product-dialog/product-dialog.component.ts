import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Product } from '../catalog.models';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent {
  form: FormGroup;
  description: string;

  constructor(
    fb: FormBuilder,
    private dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) product: Product
  ) {
    this.description = product.title;
    this.form = fb.group({
      _id: [product._id],
      sku: [product.sku, Validators.required],
      title: [product.title, Validators.required],
      description: [product.description, Validators.required],
      categoryId: [product.categoryId, Validators.required],
      cost: [product.cost, Validators.required],
      price: [product.price, Validators.required],
      stockQuantity: [product.stockQuantity],
      thumbnailImageUrl: [product.thumbnailImageUrl]
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
