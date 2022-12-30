import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule { 
  id:string='';
  name:string='';
  price:number=0;
  quantity:number=0;
  photo:any;
}
