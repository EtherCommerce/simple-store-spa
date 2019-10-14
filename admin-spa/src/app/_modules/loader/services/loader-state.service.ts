import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { LoaderState } from '../state';
import * as LoaderActions from '../state/loader.actions';
import { loaderFeatureKey } from '../state/loader.reducer';

@Injectable({
  providedIn: 'root'
})
export class LoaderStateService {
  state$: Observable<LoaderState> = this._store.select(loaderFeatureKey);

  constructor(private _store: Store<LoaderState>) { }

  show = () => this._store.dispatch(LoaderActions.show());
  hide = () => this._store.dispatch(LoaderActions.hide());

}
