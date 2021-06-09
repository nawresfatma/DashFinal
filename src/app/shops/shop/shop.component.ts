import { Component, OnInit } from '@angular/core';
import {ShopService} from '../../shared/shop.service';
import{NotificationService}from'../../shared/notification.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(public service: ShopService,private notificationService: NotificationService ,public dialogRef:MatDialogRef<ShopComponent>) { }

  ngOnInit(): void {
    this.service.getShops();

  }
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();

  }
  onSubmit() {
    if(this.service.form.get('$key').value===null){
      console.log("this start");
    this.service.insertShop(this.service.form.value);}
    else{
      console.log("update function started");
      this.service.updateShop(this.service.form.value);
    }
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success("Submitted Successfully");
    this.onClose();
  }

      onClose(){
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.dialogRef.close();
    
    
  }
}
