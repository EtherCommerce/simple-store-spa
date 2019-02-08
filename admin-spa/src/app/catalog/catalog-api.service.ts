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

  public updateCategory = (id: string, item: Category): Observable<Category> =>
    this._http.put<Category>(`${this._apiUrl}/categories/${id}`, item)

  public deleteCategory = (id: string): Observable<Category> =>
    this._http.delete<Category>(`${this._apiUrl}/categories/${id}`)


  public getProductList = (): Observable<Product[]> =>
    this._http.get<Product[]>(`${this._apiUrl}/products`)

  public createProduct = (item: Category): Observable<Product> =>
    this._http.post<Product>(`${this._apiUrl}/products`, item)

  public updateProduct = (id: string, item: Category): Observable<Product> =>
    this._http.put<Product>(`${this._apiUrl}/products/${id}`, item)

  public deleteProduct = (id: string): Observable<Product> =>
    this._http.delete<Product>(`${this._apiUrl}/products/${id}`)

}
