import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetFirmwareRoutingModule } from './get-firmware-routing.module';
import { GetFirmwareComponent } from './get-firmware/get-firmware.component';

@NgModule({
  declarations: [GetFirmwareComponent],
  imports: [CommonModule, GetFirmwareRoutingModule],
})
export class GetFirmwareModule {}
