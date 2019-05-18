import { NgModule } from '@angular/core';
import { ProductsComponent } from "./products.component";
import { Routes, RouterModule } from "@angular/router";
// formloop *ngif keliye we shoudl ahev commonModule
import { CommonModule } from "@angular/common";
import {  MereDoDoBappModule} from "../meredodobaap/meredodobaap.module";
const myRoutes: Routes = [
  { path: "", component: ProductsComponent }
]

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    MereDoDoBappModule,
    RouterModule.forChild(myRoutes)
  ],
  providers: [],
})
export class ProductModule { }
