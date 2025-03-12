import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SmartBand } from '../../shared/models/smart-band.model';
import { API_CONFIG } from './api-config';

@Injectable({
  providedIn: 'root'
})
export class SmartBandService {
  private apiUrl = `${API_CONFIG.baseUrl}/smart-bands`;

  constructor(private http: HttpClient) {}

  getAllBands(): Observable<SmartBand[]> {
    return this.http.get<SmartBand[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          console.error('Error fetching smart bands', error);
          return throwError(() => new Error(error.error.message || 'Failed to fetch smart bands'));
        })
      );
  }

  getBandById(id: string): Observable<SmartBand> {
    return this.http.get<SmartBand>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(error => {
          console.error(`Error fetching smart band with id ${id}`, error);
          return throwError(() => new Error(error.error.message || 'Failed to fetch smart band details'));
        })
      );
  }

  getBandsByGroup(groupName: string): Observable<SmartBand[]> {
    return this.http.get<SmartBand[]>(`${this.apiUrl}/group/${groupName}`)
      .pipe(
        catchError(error => {
          console.error(`Error fetching smart bands for group ${groupName}`, error);
          return throwError(() => new Error(error.error.message || 'Failed to fetch smart bands for this group'));
        })
      );
  }

  createBand(band: Omit<SmartBand, 'id'>): Observable<SmartBand> {
    return this.http.post<SmartBand>(this.apiUrl, band)
      .pipe(
        catchError(error => {
          console.error('Error creating smart band', error);
          return throwError(() => new Error(error.error.message || 'Failed to create smart band'));
        })
      );
  }

  updateBand(id: string, band: Partial<SmartBand>): Observable<SmartBand> {
    return this.http.put<SmartBand>(`${this.apiUrl}/${id}`, band)
      .pipe(
        catchError(error => {
          console.error(`Error updating smart band with id ${id}`, error);
          return throwError(() => new Error(error.error.message || 'Failed to update smart band'));
        })
      );
  }

  deleteBand(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(error => {
          console.error(`Error deleting smart band with id ${id}`, error);
          return throwError(() => new Error(error.error.message || 'Failed to delete smart band'));
        })
      );
  }
}
