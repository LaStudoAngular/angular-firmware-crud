import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFirmwareComponent } from './create-firmware/create-firmware.component';

const routes: Routes = [{ path: '', component: CreateFirmwareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateFirmwareRoutingModule {}
