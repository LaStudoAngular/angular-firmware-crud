import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateFirmwareComponent } from './update-firmware/update-firmware.component';

const routes: Routes = [{ path: '', component: UpdateFirmwareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateFirmwareRoutingModule {}
