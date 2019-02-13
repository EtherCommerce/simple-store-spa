import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';

import { Feedback } from '../catalog.models';
import { CatalogApiService } from '../catalog-api.service';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent {

  displayedColumns: string[] = ['_id', 'rate', 'content', 'author', 'email', 'buttons'];
  dataSource$: Observable<Feedback[]>;

  constructor(
    private _api: CatalogApiService,
    private _dialog: MatDialog
  ) {
    this.init();
  }

  show(feedback: Feedback) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = feedback;
    dialogConfig.minWidth = '50%';

    const dialogRef = this._dialog.open(FeedbackDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        val => { }
    );
  }

  delete(feedback: Feedback) {
    if (!feedback) { return; }
    if (!confirm(`Удалить отзыв '${feedback._id}'?`)) { return; }
    this._api.removeFeedback(feedback._id).subscribe(result => this.init());
  }


  private init = () => this.dataSource$ = this._api.getFeedbackList();

}
