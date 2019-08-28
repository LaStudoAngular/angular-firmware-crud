import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { FirmwareService } from '../../@services/firmware.service';
import { Firmware } from '../../@models/firmware';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'cr-update-firmware',
  templateUrl: './update-firmware.component.html',
  styleUrls: ['./update-firmware.component.scss'],
})
export class UpdateFirmwareComponent implements OnInit {
  statuses: string[];
  form: FormGroup;
  firmware: Firmware;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private firmwareService: FirmwareService,
    private popup: MatSnackBar,
  ) {}

  ngOnInit() {
    this.statuses = environment.statuses;
    this.form = this.fb.group({
      boot_version: [null, [Validators.required]],
      fw_version: [null, [Validators.required]],
      status: [null, [Validators.required]],
      data: [null, [Validators.required]],
    });
  }

  showPopupUpdate(message, action) {
    this.popup.open(message, action, { duration: 3000 });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const bootVersion = this.form.get('boot_version').value;
      const fwVersion = this.form.get('fw_version').value;
      const status = this.form.get('status').value;
      const data = this.form.get('data').value;
      this.firmwareService.editFirmware(bootVersion, fwVersion, status, data, 'update').subscribe(
        response => {
          this.showPopupUpdate(environment.FirmwareDictionary.PUT.SUCCESS, 'Close');
        },
        error => {
          this.errorMessage = error.status
            ? environment.FirmwareDictionary.PUT[error.status]
            : null;
        },
      );
    }
  }

  onLoadData(event: any) {
    this.form.patchValue({
      data: event,
    });
  }
}
