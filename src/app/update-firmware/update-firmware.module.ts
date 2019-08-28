import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateFirmwareRoutingModule } from './update-firmware-routing.module';
import { UpdateFirmwareComponent } from './update-firmware/update-firmware.component';

@NgModule({
  declarations: [UpdateFirmwareComponent],
  imports: [CommonModule, UpdateFirmwareRoutingModule],
})
export class UpdateFirmwareModule {}
