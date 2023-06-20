import { RouterModule, Routes } from "@angular/router";
import { DdivComponent } from "./ddiv.component";
import { NgModule } from "@angular/core";


const routes: Routes = [{ path: '', component: DdivComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DdivRoutingModule {

}