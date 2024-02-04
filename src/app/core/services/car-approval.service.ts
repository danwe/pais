import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  CarApproval } from '../models/const/carApproval';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CarApprovalService {

  getAllItemsUrl : string = 'http://localhost:3000/approvalCar/';

  carApproval : CarApproval | undefined;
  constructor(  private http: HttpClient,) { }

  getAllItems(): Observable<Array<CarApproval>> {
    return this.http.get<any>(this.getAllItemsUrl)
  }

  addItems(carApproval: CarApproval): Observable<any> {
    return this.http.post<any>(this.getAllItemsUrl , carApproval)
  }

  editItems(carApproval: CarApproval): Observable<any> {
    return this.http.put<any>(`${this.getAllItemsUrl}${carApproval.id}`, carApproval)
  }
}
