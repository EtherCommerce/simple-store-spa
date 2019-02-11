import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Category, Meta } from '../catalog.models';

@Component({
  selector: 'category-dialog',
  templateUrl: 'category-dialog.component.html',
  styleUrls: ['category-dialog.component.css']
})
export class CategoryDialogComponent {
  form: FormGroup;
  description: string;

  constructor(
    fb: FormBuilder,
    private dialogRef: MatDialogRef<CategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) category: Category
  ) {
    this.description = category.name;
    this.form = fb.group({
      _id: [category._id],
      name: [category.name, Validators.required],
      description: [category.description],
      thumbnailImageUrl: [category.thumbnailImageUrl],
      metaTitle: [category.meta.title],
      metaDescription: [category.meta.description],
    });
  }


  save() {
    const value = this.getValueFromForm();
    this.dialogRef.close(value);
  }

  close() {
    this.dialogRef.close();
  }


  private getValueFromForm(): Category {
    const f = this.form.value;
    return {
      _id: f._id,
      name: f.name,
      description: f.description,
      thumbnailImageUrl: f.thumbnailImageUrl,
      meta: {
        title: f.metaTitle,
        description: f.metaDescription
      } as Meta
    } as Category;
  }
}
