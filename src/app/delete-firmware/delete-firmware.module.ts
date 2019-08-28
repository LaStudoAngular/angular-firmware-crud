import { NgModule } from '@angular/core';

// MODULES
import { SharedModule } from '../@shared/shared.module';
import { DeleteFirmwareRoutingModule } from './delete-firmware-routing.module';

// COMPONENTS
import { DeleteFirmwareComponent } from './delete-firmware/delete-firmware.component';

@NgModule({
  declarations: [DeleteFirmwareComponent],
  imports: [DeleteFirmwareRoutingModule, SharedModule],
})
export class DeleteFirmwareModule {}
