import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassificationService} from '../shared/classification/classification.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
export interface PeriodicElement {
  productId: number;
  productName: string;
  classification:string;
  country:string;
  type:string;
}
@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})
export class ClassificationComponent implements OnInit {
  productSelect:string = ''; classSelect:string = ''; typeSelect:string = ''; countrySelect:string = '';
  inputClass:string = ''; inputCountry:string = ''; inputType:string = '';
  products: Array<any>;
  countrys: Array<any>;
  classifications: Array<any>;
  types: Array<any>;
  dataSource:any;
  displayedColumns: string[] = ['productId', 'productName', 'classification', 'country','type'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private classificationService: ClassificationService) { }
ngOnInit() {
      this.getProductList();
      this.getClassificationList();
      this.getCountryList();
      this.getTypeList();
  }
  //------------Load data -------------
  getProductList(){
    this.classificationService.getProduct().subscribe(data => {
      this.products = data;
      const productList: PeriodicElement[] = [];
      console.log(this.products);
      for (let index = 0; index < this.products["length"]; index++) {
        productList.push({
          productId: this.products[index].productId,
          productName: this.products[index].productName,
          classification: this.products[index].classification.className,
          country: this.products[index].country.countryName,
          type: this.products[index].type.typeName,
        })
      }  
      //console.log('productList[0].type =  : '+productList[0].type); 
      this.dataSource = new MatTableDataSource(productList);
      this.dataSource.paginator = this.paginator;
    });
  }  
  getTypeList(){
    this.classificationService.getTypes().subscribe(data => {
      this.types = data;
      console.log(this.types);
    });
  }

  getCountryList(){
    this.classificationService.getCountry().subscribe(data => {
      this.countrys = data;
      console.log(this.countrys);
    });
  }

  getClassificationList(){
    this.classificationService.getClassification().subscribe(data => {
      this.classifications = data;
      console.log(this.classifications);
    });
  }
//------------------------------------------------------------------------------------------------------

  updateProduct(){
    if(this.productSelect == '' || this.classSelect == '' || this.typeSelect == '' || this.countrySelect == ''){
      console.log('กรอกข้อมูลไม่ครบ!');
    }
    else{
      //put
      this.classificationService.putProduct(this.productSelect,this.classSelect,this.typeSelect,this.countrySelect).subscribe(data => {
        console.log('update Success');
        this.productSelect = '';
        this.classSelect = '';
        this.typeSelect = '';
        this.countrySelect = '';
        this.getProductList();
      });
        console.log('Product : ' +this.productSelect);
        console.log('classification : ' +this.classSelect);
        console.log('type : '+this.typeSelect);
        console.log('country : '+this.countrySelect);
    }
  }

  addClassification(){
    this.classificationService.addClassification(this.inputClass).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.getClassificationList();
        this.inputClass = '';
      },
      error => {
        console.log("Error", error);
      }
    );
  }
  addType(){
    this.classificationService.addType(this.inputType).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.getTypeList();
        this.inputType = '';
      },
      error => {
        console.log("Error", error);
      }
    );
  }
  addCountry(){
    this.classificationService.addCountry(this.inputCountry).subscribe(
      data => {
        console.log("POST Request is successful ", data);
        this.getCountryList();
        this.inputCountry = '';
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}