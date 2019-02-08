import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category, Product } from './catalog.models';

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


  public getCategoryList = (): Observable<Category[]> =>
    this._http.get<Category[]>(`${this._apiUrl}/categories`)

  public createCategory = (item: Category): Observable<Category> =>
    this._http.post<Category>(`${this._apiUrl}/categories`, item)


  public getProductList = (): Observable<Product[]> =>
    this._http.get<Product[]>(`${this._apiUrl}/products`)

}
