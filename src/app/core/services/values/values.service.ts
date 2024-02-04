import { Injectable } from '@angular/core';
import { CarApproval } from '../../models/const/carApproval';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  constructor() { }
  roleLIst : Array<string> = ['מפתח FS', 'מפתח BI', 'גזבר', 'משא"ן'];
  departmentLIst : Array<string> = ['מערכות מידע','כספים','משא"ן','דיגיטאל'];
  carApprovalList: Array<CarApproval> = [];
  updateArrayList(list: Array<CarApproval>): void {
    this.carApprovalList = list;
  }

  getArrayListCarApproavl(): Array<CarApproval> {
    return this.carApprovalList;
  }
}
