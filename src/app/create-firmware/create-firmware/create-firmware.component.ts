import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirmwareService } from '../../@services/firmware.service';
import { environment } from '../../../environments/environment';
import { Firmware } from '../../@models/firmware';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'cr-create-firmware',
  templateUrl: './create-firmware.component.html',
  styleUrls: ['./create-firmware.component.scss'],
})
export class CreateFirmwareComponent implements OnInit {
  form: FormGroup;
  firmware: Firmware;
  errorMessage = '';
  statuses: string[];

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

  showPopupCreate(message, action) {
    this.popup.open(message, action, { duration: 3000 });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const bootVersion = this.form.get('boot_version').value;
      const fwVersion = this.form.get('fw_version').value;
      const status = this.form.get('status').value;
      const data = this.form.get('data').value;
      this.firmwareService.editFirmware(bootVersion, fwVersion, status, data, 'create').subscribe(
        response => {
          this.showPopupCreate(environment.FirmwareDictionary.POST.SUCCESS, 'Close');
        },
        error => {
          this.errorMessage = error.status
            ? environment.FirmwareDictionary.POST[error.status]
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
