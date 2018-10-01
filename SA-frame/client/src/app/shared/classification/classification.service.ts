import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  public API = '//localhost:8080';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get(this.API + '/Product');
  }

  getCountry(): Observable<any> {
    return this.http.get(this.API + '/Country');
  }

  getClassification(): Observable<any> {
    return this.http.get(this.API + '/Classification');
  }
  getTypes(): Observable<any> {
    return this.http.get(this.API + '/Type');
  }
  public addProductClassification(inputProduct:string ,classSelect:number ,typeSelect:number,countrySelect:number):Observable<any>{
    return this.http.post(this.API + '/Product/addClassification',{
      "productID": 0,"productName": inputProduct ,"classID": classSelect ,"typeID": typeSelect ,"countryID":countrySelect
    });
  }
}
