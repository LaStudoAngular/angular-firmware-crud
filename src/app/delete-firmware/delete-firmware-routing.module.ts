import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteFirmwareComponent } from './delete-firmware/delete-firmware.component';

const routes: Routes = [{ path: '', component: DeleteFirmwareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteFirmwareRoutingModule {}
