import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { ProductsComponent } from "./products/products.component";
import { TeachingComponent } from "./services/teaching/teaching.service";
import {  MereDoDoBappModule } from "./meredodobaap/meredodobaap.module";
import { Routes, RouterModule } from "@angular/router";

const myRoutes: Routes = [
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  {
    path: "services", component: ServicesComponent, children: [
      { path: 'teaching', component: TeachingComponent }
    ]
  },
  // lazy loading
  { path: "products", loadChildren:'./products/product.module#ProductModule'},
]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    TeachingComponent
  ],
  imports: [
    BrowserModule,
    MereDoDoBappModule,
    RouterModule.forRoot(myRoutes,      { enableTracing: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
