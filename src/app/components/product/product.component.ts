import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
//httpclient = backend deki dataya ulaşma


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : Product[] = []
  dataLoaded = false

  // prooductResponseModel:ProductResponseModel={
  //   data:this.products,
  //   message:"",
  //   success:true //data tarifi
  // }
  constructor(private productService:ProductService, 
    private activatedroute:ActivatedRoute) {    
  }

  ngOnInit(): void {
      this.activatedroute.params.subscribe(params=>{
        if(params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
        }
        else{
        this.getProducts()
        }
    })
  }
  getProducts() {
    this.productService.getProducts().subscribe(response=>
    {this.products = response.data
    this.dataLoaded = true})
    
  }
  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>
    {this.products = response.data
    this.dataLoaded = true})
    
  }


  
}




//this.httpClient.get<ProductResponseModel>(this.apiUrl)
//.subscribe((response)=>{
//this.products = response.data //gelen response un datası tanımlanan productsa yani Product[] ine eşit
//}) //fonksiyona üstte tanımlanmış değişken çağırırken this kullanılır.