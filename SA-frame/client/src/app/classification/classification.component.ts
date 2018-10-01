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
  inputProduct = ''; classSelect:number = -1; typeSelect:number = -1; countrySelect:number = -1;
  products: Array<any>;
  countrys: Array<any>;
  classifications: Array<any>;
  types: Array<any>;
  dataSource:any;
  displayedColumns: string[] = ['productId', 'productName', 'classification', 'country','type'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private classificationService: ClassificationService) { }
ngOnInit() {
    this.classificationService.getProduct().subscribe(data => {
      this.products = data;
      const ELEMENT_DATA: PeriodicElement[] = [];
      console.log(this.products);
      for (let index = 0; index < data["length"]; index++) {
        ELEMENT_DATA.push({
          productId: data[index].productId,
          productName: data[index].productName,
          classification: data[index].classification.className,
          country: data[index].country.countryName,
          type: data[index].type.typeName,
        })
      }  
      //console.log('Element data 0 : '+ELEMENT_DATA[0].type);
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
    //เอาข้อมูลเข้าcombo box
    this.classificationService.getCountry().subscribe(data => {
      this.countrys = data;
      console.log(this.countrys);
    });
    this.classificationService.getTypes().subscribe(data => {
      this.types = data;
      console.log(this.types);
    });
    this.classificationService.getClassification().subscribe(data => {
      this.classifications = data;
      console.log(this.classifications);
    });
  }


  save(){
    if(this.inputProduct == '' || this.classSelect == -1 || this.typeSelect == -1 || this.countrySelect == -1){
      console.log('กรอกข้อมูลไม่ครบ!');
    }
    else{
      //post
        
        console.log('Product : ' +this.inputProduct);
        console.log('classification : ' +this.classSelect);
        console.log('type : '+this.typeSelect);
        console.log('country : '+this.countrySelect);
      this.classificationService.addProductClassification(this.inputProduct,this.classSelect,this.typeSelect,this.countrySelect).subscribe(
        data => {
        console.log('Product : ' +this.inputProduct);
        console.log('classification : ' +this.classSelect);
        console.log('type : '+this.typeSelect);
        console.log('country : '+this.countrySelect);
      });
    }
  }
}