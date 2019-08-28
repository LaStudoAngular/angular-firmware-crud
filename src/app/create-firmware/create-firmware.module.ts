import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateFirmwareRoutingModule } from './create-firmware-routing.module';
import { CreateFirmwareComponent } from './create-firmware/create-firmware.component';

@NgModule({
  declarations: [CreateFirmwareComponent],
  imports: [CommonModule, CreateFirmwareRoutingModule],
})
export class CreateFirmwareModule {}
