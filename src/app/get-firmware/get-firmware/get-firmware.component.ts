import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirmwareService } from '../../@services/firmware.service';
import { Firmware } from '../../@models/firmware';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'cr-get-firmware',
  templateUrl: './get-firmware.component.html',
  styleUrls: ['./get-firmware.component.scss'],
})
export class GetFirmwareComponent implements OnInit {
  form: FormGroup;
  firmwares: Firmware[];
  errorMessage = '';

  constructor(private fb: FormBuilder, private firmwareService: FirmwareService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      boot_version: [null, [Validators.required]],
      fw_version: [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const bootVersion = this.form.get('boot_version').value;
      const fwVersion = this.form.get('fw_version').value;
      this.firmwareService.getFirmware(bootVersion, fwVersion).subscribe(
        (response: Firmware | Firmware[]) => {
          this.firmwares = Array.isArray(response) ? response : [response];
        },
        error => {
          this.errorMessage = error.status
            ? environment.FirmwareDictionary.GET[error.status]
            : null;
        },
      );
    }
  }
}
