import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { finalize, catchError } from 'rxjs/operators';

import { LoaderStateService } from './loader-state.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(private _loaderService: LoaderStateService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showLoader();
    return next.handle(req).pipe(
      finalize(() => this.hideLoader()),
      catchError(err => {
        this.hideLoader();
        return of(err.message ? err.message : err);
      })
    );
  }


  private showLoader = (): void => this._loaderService.show();

  private hideLoader = (): void => this._loaderService.hide();

}
