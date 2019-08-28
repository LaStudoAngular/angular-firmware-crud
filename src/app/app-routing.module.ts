import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'get',
    loadChildren: () =>
      import('./get-firmware/get-firmware.module').then(mod => mod.GetFirmwareModule),
  },
  {
    path: 'create',
    loadChildren: () =>
      import('./create-firmware/create-firmware.module').then(mod => mod.CreateFirmwareModule),
  },
  {
    path: 'update',
    loadChildren: () =>
      import('./update-firmware/update-firmware.module').then(mod => mod.UpdateFirmwareModule),
  },
  {
    path: 'delete',
    loadChildren: () =>
      import('./delete-firmware/delete-firmware.module').then(mod => mod.DeleteFirmwareModule),
  },
  {
    path: '**',
    redirectTo: '/get',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
