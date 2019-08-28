import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirmwareService } from '../../@services/firmware.service';
import { Firmware } from '../../@models/firmware';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'cr-delete-firmware',
  templateUrl: './delete-firmware.component.html',
  styleUrls: ['./delete-firmware.component.scss'],
})
export class DeleteFirmwareComponent implements OnInit {
  form: FormGroup;
  firmware: Firmware;
  errorMessage = '';

  constructor(private fb: FormBuilder, private firmwareService: FirmwareService) {}

  ngOnInit() {
    this.form = this.fb.group({
      boot_version: [null, [Validators.required]],
      fw_version: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const bootVersion = this.form.get('boot_version').value;
      const fwVersion = this.form.get('fw_version').value;
      this.firmwareService.deleteFirmware(bootVersion, fwVersion).subscribe(
        () => {},
        error => {
          this.errorMessage = error.status
            ? environment.FirmwareDictionary.DELETE[error.status]
            : null;
        },
      );
    }
  }
}
