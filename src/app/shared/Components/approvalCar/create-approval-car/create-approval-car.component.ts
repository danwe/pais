import { CarApproval } from './../../../../core/models/const/carApproval';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../popup/create-item-approval-car/create-item-approval-car.component';

@Component({
  selector: 'app-create-approval-car',
  templateUrl: './create-approval-car.component.html',
  styleUrl: './create-approval-car.component.scss'
})
export class CreateApprovalCarComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateApprovalCarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CarApproval,
  ) {}
  carApproval:  CarApproval | undefined;
ngOnInit(): void {
  this.carApproval = this.data;
}
  onNoClick(): void {
    this.dialogRef.close();
  }

  getAgainList() {
    this.dialogRef.close({ dataChange: true });
  }
}
