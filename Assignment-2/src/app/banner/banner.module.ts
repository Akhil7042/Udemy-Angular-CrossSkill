import { NgModule } from "@angular/core";
import { BannerComponent } from "./banner.component";
import { CommonModule } from "@angular/common";
import { BannerRoutingModule } from "./banner-routing.module";

@NgModule({
    declarations: [BannerComponent],
    imports: [CommonModule,BannerRoutingModule]
})
export class BannerModule{}