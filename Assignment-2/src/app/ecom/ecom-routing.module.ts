import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcomComponent } from './ecom.component';

const routes: Routes = [{ path: '', component: EcomComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class EcomRoutingModule {

}