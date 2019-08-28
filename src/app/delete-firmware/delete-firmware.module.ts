import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteFirmwareRoutingModule } from './delete-firmware-routing.module';
import { DeleteFirmwareComponent } from './delete-firmware/delete-firmware.component';

@NgModule({
  declarations: [DeleteFirmwareComponent],
  imports: [CommonModule, DeleteFirmwareRoutingModule],
})
export class DeleteFirmwareModule {}
