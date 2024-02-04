import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarApproval } from '../../../../core/models/const/carApproval';

@Component({
  selector: 'app-add-aprov-car',
  templateUrl: './add-aprov-car.component.html',
  styleUrl: './add-aprov-car.component.scss'
})
export class AddAprovCarComponent {
  @Output() getListAgain  = new EventEmitter<string>();

getListAg() {
  this.getListAgain.emit();
}

}
