import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from "@angular/common/http" 
import { ProductResponseModel } from 'src/app/models/productResponseModel';
//httpclient = backend deki dataya ulaşma


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  apiUrl = "http://localhost:50012/api/products/getall"
  products: Product[] =
    []
  // prooductResponseModel:ProductResponseModel={
  //   data:this.products,
  //   message:"",
  //   success:true //data tarifi
  // }
  constructor(private httpClient:HttpClient) { 
    
  }

  ngOnInit(): void {
    console.log("init çalıştı")
    this.getProducts()
  }
  getProducts() {
    this.httpClient.get<ProductResponseModel>(this.apiUrl)
    .subscribe((response)=>{
      this.products = response.data //gelen response un datası tanımlanan productsa yani Product[] ine eşit
    }) //fonksiyona üstte tanımlanmış değişken çağırırken this kullanılır.
  }
}
