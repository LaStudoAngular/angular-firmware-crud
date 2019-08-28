import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetFirmwareComponent } from './get-firmware/get-firmware.component';

const routes: Routes = [{ path: '', component: GetFirmwareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetFirmwareRoutingModule {}
