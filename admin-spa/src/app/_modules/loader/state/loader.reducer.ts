import { Action, createReducer, on } from '@ngrx/store';

import { LoaderState, initializeState } from './loader.state';
import * as LoaderActions from './loader.actions';

export const initialState = initializeState();

const _loaderReducer = createReducer<LoaderState>(
  initialState,
  on(LoaderActions.show, state => ({ ...state, show: true })),
  on(LoaderActions.hide, state => ({ ...state, show: false }))
);

export function loaderReducer(state: LoaderState | undefined, action: Action) {
  return _loaderReducer(state, action);
}

export const loaderFeatureKey = 'loader';
