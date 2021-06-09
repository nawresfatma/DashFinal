import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http:HttpClient) { }
  shopList!: any;
  
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    storeName: new FormControl('', Validators.required),
    storeDescriptionShort: new FormControl('', Validators.required),
    storeDescription: new FormControl(''),
    storeImage: new  FormControl(null),
    storeLocation: new FormControl('',Validators.required),
    openingHour: new FormControl(''),
    longitude: new FormControl(''),
    latitude: new FormControl('')
  });
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      storeName: '',
      storeDescriptionShort: '',
      storeDescription:'',
      storeImage: '',
     storeLocation: '',
      openingHour: '',
      longitude:'',
       latitude:'',
   
    });
  }
  getShops() {
    return this.http.get("http://localhost:8080/api/shops", {responseType: "json"});

   }
  insertShop(shop:any) {
    var ShopInsert={storeName: shop.storeName,
      storeImage: shop.storeImage,
       storeLocation: shop.storeLocation,
       storeDescriptionShort: shop.storeDescriptionShort,
       storeDescription:shop.storeDescription,
       openingHour: shop.openingHour,
       longitude: shop.longitude,
       latitude: shop.latitude,} ;
    this.http.post(`http://localhost:8080/api/shop`,ShopInsert,{responseType: "text",}).subscribe((data)=>{
    console.log(data);
  });
  }
  updateShop(shop:any) {
    var ShopInsert={storeName: shop.storeName,
      storeImage: shop.storeImage,
       storeLocation: shop.storeLocation,
       storeDescriptionShort: shop.storeDescriptionShort,
       storeDescription:shop.storeDescription,
       openingHour: shop.openingHour,
       longitude: shop.longitude,
       latitude: shop.latitude,} ;
       console.log(shop.$key);
    this.http.put(`http://localhost:8080/api/shop/`+shop.$key,ShopInsert,{responseType: "text",}).subscribe((data)=>{
    console.log(data);
  });
  }
  deleteShop($key: string) {
    this.http.delete(`http://localhost:8080/api/shop/`+$key,{responseType: "text",}).subscribe((data)=>{
    console.log(data);
  });
  }
  complete(shop:any){
    this.form.setValue({
    $key:shop.id,
    storeName: shop.storeName,
    storeImage: shop.storeImage,
     storeLocation: shop.storeLocation,
     storeDescriptionShort: shop.storeDescriptionShort,
     storeDescription:shop.storeDescription,
     openingHour: shop.openingHour,
     longitude: shop.longitude,
     latitude: shop.latitude,
  });
  
  }
  
  
}
