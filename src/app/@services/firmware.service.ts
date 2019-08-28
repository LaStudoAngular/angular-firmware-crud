import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Firmware } from '../@models/firmware';

@Injectable({
  providedIn: 'root',
})
export class FirmwareService {
  constructor(private http: HttpClient) {}

  getFirmware(bootVersion: number, fwVersion: number): Observable<Firmware[]> {
    const URL = `${environment.baseURL}?boot_version=${bootVersion}&fw_version=${fwVersion}`;
    return this.http.get<Firmware[]>(URL);
  }

  deleteFirmware(bootVersion: number, fwVersion: number): Observable<any> {
    const URL = `${environment.baseURL}?boot_version=${bootVersion}&fw_version=${fwVersion}`;
    return this.http.delete(URL);
  }

  editFirmware(
    bootVersion: number,
    fwVersion: number,
    status: string,
    data: any,
    flag: 'create' | 'update',
  ): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('BootVersion', bootVersion.toString());
    formData.append('FwVersion', fwVersion.toString());
    formData.append('Status', status);
    formData.append('Data', data);
    if (flag === 'create') {
      return this.http.post(environment.baseURL, formData, {
        responseType: 'text',
        observe: 'response',
      });
    } else {
      return this.http.put(environment.baseURL, formData, {
        responseType: 'text',
        observe: 'response',
      });
    }
  }
}
