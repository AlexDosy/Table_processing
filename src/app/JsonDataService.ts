import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  private apiUrl = 'http://localhost:3000/api'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  updateJsonData(data: any): Observable<any> {
    const url = `${this.apiUrl}/update-json`;
    return this.http.put(url, data);
  }
}
