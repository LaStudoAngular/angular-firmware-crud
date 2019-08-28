import { NgModule } from '@angular/core';

// MODULES
import { MatSelectModule, MatButtonModule, MatSnackBarModule } from '@angular/material';

// COMPONENTS
import { UploadFirmwareComponent } from './upload-firmware/upload-firmware.component';

@NgModule({
  declarations: [UploadFirmwareComponent],
  imports: [MatSelectModule, MatButtonModule, MatSnackBarModule],
  exports: [MatSelectModule, MatButtonModule, MatSnackBarModule, UploadFirmwareComponent],
})
export class CreateUpdateModule {}
