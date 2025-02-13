import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface SmartBand {
  id: number;
  serialNumber: string;
  status: 'Active' | 'Inactive' | 'Suspended';
  activationDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class SmartBandService {
  private smartBands: SmartBand[] = [
    {
      id: 1,
      serialNumber: 'SB001',
      status: 'Active',
      activationDate: new Date()
    }
  ];

  constructor() { }

  getSmartBands(): Observable<SmartBand[]> {
    return of(this.smartBands);
  }

  addSmartBand(smartBand: SmartBand): Observable<SmartBand> {
    this.smartBands.push(smartBand);
    return of(smartBand);
  }

  updateSmartBand(id: number, status: 'Active' | 'Inactive' | 'Suspended'): Observable<SmartBand | undefined> {
    const band = this.smartBands.find(b => b.id === id);
    if (band) {
      band.status = status;
      return of(band);
    }
    return of(undefined);
  }
}
