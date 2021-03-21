import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http" 

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';



@Injectable({ //enjekte edilebilir servis manasına gelir.
  providedIn: 'root'
})

export class CategoryService {
  apiUrl = "http://localhost:50012/api/categories/getall"
  
  constructor(private httpClient:HttpClient) { }
  getCategories():Observable<ListResponseModel<Category>> { //observable döndür
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl)
      
      //gelen response un datası tanımlanan productsa yani Product[] ine eşit
    //fonksiyona üstte tanımlanmış değişken çağırırken this kullanılır.
  }

}
