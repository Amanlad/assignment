import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { productClass } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  
  URL= "../../../assets/data/product.json";

  constructor(private http: HttpClient) { }

  
getProductServiceData(){
  return this.http.get<productClass[]>(this.URL);
}






}

