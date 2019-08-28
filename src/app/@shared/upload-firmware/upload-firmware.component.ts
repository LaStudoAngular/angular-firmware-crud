import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cr-upload-firmware',
  templateUrl: './upload-firmware.component.html',
  styleUrls: ['./upload-firmware.component.scss'],
})
export class UploadFirmwareComponent {
  @Output() loadData = new EventEmitter();

  onSelectBinFile(event: Event) {
    const target: HTMLInputElement = event.target as HTMLInputElement;
    const fileList: FileList = target.files;

    if (!fileList.length) {
      return;
    }

    const file: File = fileList.item(0);
    this.loadData.emit(file);
  }
}
