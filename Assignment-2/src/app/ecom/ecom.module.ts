import { NgModule } from "@angular/core";
import { EcomComponent } from "./ecom.component";
import {  HttpClientModule } from '@angular/common/http';
import { EcomRoutingModule } from "./ecom-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
@NgModule({
    declarations:[
        EcomComponent
    ],
    imports: [CommonModule,EcomRoutingModule,FormsModule,HttpClientModule]
})
export class EcomModule{

}