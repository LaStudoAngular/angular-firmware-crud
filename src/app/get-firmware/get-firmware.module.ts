import { NgModule } from '@angular/core';

// MODULES
import { SharedModule } from '../@shared/shared.module';
import { GetFirmwareRoutingModule } from './get-firmware-routing.module';

// COMPONENTS
import { GetFirmwareComponent } from './get-firmware/get-firmware.component';

@NgModule({
  declarations: [GetFirmwareComponent],
  imports: [GetFirmwareRoutingModule, SharedModule],
})
export class GetFirmwareModule {}
