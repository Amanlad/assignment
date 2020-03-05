import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { productClass } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 productcontainer: productClass[] = [];
 newName: string;
 newAge: number;
 editIndex: number;
//  ProdData: productClass[]=[];
  constructor(private Productserviceservice: ProductserviceService,private router: Router) { }

  ngOnInit() {
    this.getData();
   
  }

  getData(){
    this.Productserviceservice.getProductServiceData().subscribe(
      (data)=>
      {
        console.log(data);
        this.productcontainer = data;

      }
    )
  }

  addNewItem(){
    var ProdData = new productClass();
    
    
    ProdData.name =this.newName;
    ProdData.age = this.newAge;
    
    this.productcontainer.push(ProdData);
    
    this.newName ='';
    this.newAge = null;
  
    console.log("abc");
  }

  deleteItem(ind: number){
    this.productcontainer.splice(ind,1);
  }  
    
  editItem(i: number){
     var ProdData = new productClass();
   ProdData.name =  this.productcontainer[i].name;
   ProdData.age =  this.productcontainer[i].age;
   this.newName = ProdData.name;
   this.newAge = ProdData.age;
   this.editIndex = i;
  }

  updateItem(){
    var ProdData1 = new productClass();
    ProdData1.name = this.newName;
    ProdData1.age = this.newAge;
    this.productcontainer[this.editIndex] = ProdData1;
   
  }

}
