import { NgModule } from '@angular/core';

// MODULES
import { SharedModule } from '../@shared/shared.module';
import { CreateUpdateModule } from '../@shared/create-update.module';
import { UpdateFirmwareRoutingModule } from './update-firmware-routing.module';

// COMPONENTS
import { UpdateFirmwareComponent } from './update-firmware/update-firmware.component';

@NgModule({
  declarations: [UpdateFirmwareComponent],
  imports: [UpdateFirmwareRoutingModule, SharedModule, CreateUpdateModule],
})
export class UpdateFirmwareModule {}
