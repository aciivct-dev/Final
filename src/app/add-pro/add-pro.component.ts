import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyApiService } from'../warehouse/my-api.service';

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent {
  productDetails={name:'',price:0,quantity:0,photo:0};
  constructor(public myApi:MyApiService,public router:Router) {}

  ngOnInit() {}
  addProduct() {
    this.myApi.createProduct(this.productDetails).subscribe((data: {}) => {
      this.router.navigate(['/list-product'])
    })
  }
}


