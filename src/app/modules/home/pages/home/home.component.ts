import { ValuesService } from './../../../../core/services/values/values.service';
import { CarApproval } from '../../../../core/models/const/carApproval';
import { CarApprovalService } from './../../../../core/services/car-approval.service';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private carApprovalService : CarApprovalService , private cdr: ChangeDetectorRef, private valuesService: ValuesService)  {}
  listCarApproval : Array< CarApproval> = []
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.carApprovalService.getAllItems().subscribe((data: any) => {
      //  this.submitted = false;
      this.listCarApproval = data;
      this.valuesService.updateArrayList(data);
      console.log(data);
    })
  }
  getListAgain() {
    location.reload();
  }

}
