import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProComponent } from './add-pro/add-pro.component';
import { EditProComponent } from './edit-pro/edit-pro.component';
import { ListProComponent } from './list-pro/list-pro.component';

const routes: Routes = [ 
  {
    path:'',pathMatch:'full',redirectTo:'creat-product'
  },
  {
    path:'creat-product',component:AddProComponent
  },
  {
    path:'edit-product',component:EditProComponent
  },
  {
    path:'list-product',component:ListProComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
