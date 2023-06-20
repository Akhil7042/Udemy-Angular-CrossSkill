import { NgModule } from "@angular/core";
import { TableComponent } from "./table.component";
import { CommonModule } from "@angular/common";
import { TableRoutingModule } from "./table-routing.module";
import { HttpClientModule } from "@angular/common/http";



@NgModule({
    declarations: [TableComponent],
    imports: [CommonModule,TableRoutingModule,HttpClientModule]
})
export class TableModule {
   
   
}