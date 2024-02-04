import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateApprovalCarComponent } from '../../approvalCar/create-approval-car/create-approval-car.component';
import { CarApproval } from '../../../../core/models/const/carApproval';

@Component({
  selector: 'app-button-add-item',
  templateUrl: './button-add-item.component.html',
  styleUrl: './button-add-item.component.scss'
})
export class ButtonAddItemComponent {
  constructor(public dialog: MatDialog) {}
  @Output() getListAgain = new EventEmitter<string>();
  @Input() listCarApproval :Array<CarApproval> =  [];
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef  = this.dialog.open(CreateApprovalCarComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result != null && result.dataChange)
        this.getListAgain.emit()
      // Handle the result data here
    });
  }
}
