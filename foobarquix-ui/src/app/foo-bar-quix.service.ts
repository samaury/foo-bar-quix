import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooBarQuixService {
  constructor(private httpClient:HttpClient) { }

  public convertNumber(numberToConvert: Number): Observable<String>{
  return this.httpClient.get<String>(`http://localhost:8080/foo-bar-quix/${numberToConvert}`);
  }
}
