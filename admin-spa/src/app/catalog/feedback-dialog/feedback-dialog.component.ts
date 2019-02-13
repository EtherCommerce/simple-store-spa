import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Feedback, Meta } from '../catalog.models';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: 'feedback-dialog.component.html',
  styleUrls: ['feedback-dialog.component.css']
})
export class FeedbackDialogComponent {
  form: FormGroup;
  description: string;

  constructor(
    fb: FormBuilder,
    private dialogRef: MatDialogRef<FeedbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) feedback: Feedback
  ) {
    this.description = 'Отзыв';
    this.form = fb.group({
      _id: [feedback._id],
      content: [feedback.content],
    });
  }


  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
