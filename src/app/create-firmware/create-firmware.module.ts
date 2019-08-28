import { NgModule } from '@angular/core';

// MODULES
import { SharedModule } from '../@shared/shared.module';
import { CreateUpdateModule } from '../@shared/create-update.module';
import { CreateFirmwareRoutingModule } from './create-firmware-routing.module';

// COMPONENTS
import { CreateFirmwareComponent } from './create-firmware/create-firmware.component';

@NgModule({
  declarations: [CreateFirmwareComponent],
  imports: [CreateFirmwareRoutingModule, SharedModule, CreateUpdateModule],
})
export class CreateFirmwareModule {}
