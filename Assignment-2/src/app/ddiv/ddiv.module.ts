import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { DdivComponent } from "./ddiv.component";
import { CommonModule } from "@angular/common";
import { DdivRoutingModule } from "./ddiv-routing.module";
import { AmIvisibleDirective } from "../am-ivisible.directive";


@NgModule({
    declarations: [
      DdivComponent,
      AmIvisibleDirective
    ],
    imports: [
      CommonModule,
      DdivRoutingModule,
      FormsModule
    ]
  })
export class DdivModule {}