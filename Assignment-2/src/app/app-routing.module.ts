import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/banner', pathMatch: 'full' },
  {
    path: 'banner',
    loadChildren: () =>
      import('./banner/banner.module').then((m) => m.BannerModule),
  },
  {
    path: 'ecom',
    loadChildren: () =>
      import('./ecom/ecom.module').then((m) => m.EcomModule),
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./table/table.module').then((m) => m.TableModule),
  },
  {
    path: 'div',
    loadChildren: () =>
      import('./ddiv/ddiv.module').then((m) => m.DdivModule),
  },
  {
    path: 'timer',
    loadChildren: () =>
      import('./timer/timer.module').then((m) => m.TimerModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
