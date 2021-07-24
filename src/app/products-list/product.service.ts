import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductListResponse} from "./interfaces/product.modal";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'https://www.westelm.com/services/catalog/v4/';

  constructor(private httpClient: HttpClient) {
  }

  getProducts(): Observable<ProductListResponse> {
    return this.httpClient.get<ProductListResponse>(this.baseUrl + 'category/shop/new/all-new/index.json');
  }

  getLocalProducts(){
    return this.httpClient.get<ProductListResponse>('assets/index.json');
  }
}
