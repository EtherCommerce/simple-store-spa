import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { LoaderStateService } from './services/loader-state.service';
import { LoaderState } from './state';

@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  // @Input() value = 50;
  // @Input() mode = 'indeterminate';
  // @Input() color = 'primary';

  state$: Observable<LoaderState>;

  constructor(private _loaderService: LoaderStateService) {
    this.state$ = _loaderService.state$;
  }

}
