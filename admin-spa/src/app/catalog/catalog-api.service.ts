import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './catalog.models';

@Injectable({
  providedIn: 'root'
})
export class CatalogApiService {
  private _apiUrl: string;

  constructor(
    @Inject('API_BASE_URL')apiBaseUrl,
    private _http: HttpClient
  ) {
    this._apiUrl = apiBaseUrl;
  }


  public getProductList = (): Observable<Product[]> =>
    this._http.get<Product[]>(`${this._apiUrl}/products`)

}
