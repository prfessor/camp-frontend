import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http" 

import { Observable } from 'rxjs';

import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({ //enjekte edilebilir servis manasına gelir.
  providedIn: 'root'
})

export class ProductService {
  apiUrl = "http://localhost:50012/api/" //sabit adres
  
  constructor(private httpClient:HttpClient) { }
  getProducts():Observable<ListResponseModel<Product>> {   //observable döndür
    let newPath = this.apiUrl + "products/getall" //apiurlsini değiştirilebilir yaptık böylece
    
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
    
      //gelen response un datası tanımlanan productsa yani Product[] ine eşit
    //fonksiyona üstte tanımlanmış değişken çağırırken this kullanılır.
  }
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> { //observable döndür
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId //apiurlsini değiştirilebilir yaptık böylece
    return this.httpClient.get<ListResponseModel<Product>>(newPath)  
  }

}
