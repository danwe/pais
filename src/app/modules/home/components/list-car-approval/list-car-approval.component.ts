import {Component,EventEmitter,Input,Output,input} from '@angular/core';
import {MatTableModule} from '@angular/material/table';


import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource,} from '@angular/material/table';
import { CarApproval } from '../../../../core/models/const/carApproval';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { CreateApprovalCarComponent } from '../../../../shared/Components/approvalCar/create-approval-car/create-approval-car.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-list-car-approval',
  templateUrl: './list-car-approval.component.html',
  styleUrl: './list-car-approval.component.scss'
})
export class ListCarApprovalComponent  implements AfterViewInit {
    onClickId(carApproval: CarApproval) {

      this.openDialog('3000ms', '1500ms' , carApproval);
  }
  @Input() listCarApproval : Array<CarApproval> = [];
  @Output() getListAgain = new EventEmitter<string>();
  dataSource = new MatTableDataSource<CarApproval>(this.listCarApproval);
  displayedColumns: string[] = ['id', 'name','lastName','age', 'department', 'role','carCompony'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<CarApproval>(this.listCarApproval);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, carApproval: CarApproval): void {
    let dialogRef  = this.dialog.open(CreateApprovalCarComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: carApproval
    });
    dialogRef.afterClosed().subscribe(result => {

      if (result != null && result.dataChange)
        this.getListAgain.emit()

      // Handle the result data here
    });
  }

}
