import { Product } from "./product";
import { ResponseModel } from "./responseModel";
//extends = interface i interface e inherit eder.
export interface ProductResponseModel extends ResponseModel{
    data:Product[]   
}