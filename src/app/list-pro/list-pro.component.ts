import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyApiService } from'../warehouse/my-api.service';

@Component({
  selector: 'app-list-pro',
  templateUrl: './list-pro.component.html',
  styleUrls: ['./list-pro.component.css']
})
export class ListProComponent {
  Product: any = [];
  constructor(public myApi:MyApiService,public router:Router) {}
  ngOnInit(): void {
  this.loadProducts()
  }
  loadProducts() {
  return this.myApi.getProducts().subscribe((data: {}) => {
  this.Product = data;
  })
  } 

}

