import { ValuesService } from './../../../../core/services/values/values.service';
import { CarApproval } from './../../../../core/models/const/carApproval';
import { Component , EventEmitter, Input, Output} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from '../../../../untils/Validators';
import { CarApprovalService } from '../../../../core/services/car-approval.service';
import { hebrewValidator } from '../../../../untils/validations/hebrewValidator';
import { noNumbersValidator } from '../../../../untils/validations/noNumbersValidator';

export interface DialogData {
  access: true;

}

@Component({
  selector: 'app-create-item-approval-car',
  templateUrl: './create-item-approval-car.component.html',
  styleUrl: './create-item-approval-car.component.scss'
})
export class CreateItemApprovalCarComponent {
  @Input() item: CarApproval = {
    age: 0, carCompony: false, department: '', name: '', id: 0, lastName: '',
    role: ''
  };

  @Output() getAgainList = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder, private carApprovalService: CarApprovalService, private valuesService: ValuesService) {}

  access: boolean = false;
  errorExist: boolean = false;
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    role: new FormControl(''),
    department: new FormControl(''),
    carCompony: new FormControl(false),
  });
  submitted: boolean = false;
  roleLIst : Array<string> = this.valuesService.roleLIst;
  departmentLIst : Array<string> =  this.valuesService.departmentLIst;
  historyValue : Array<CarApproval> = this.valuesService.getArrayListCarApproavl();
  carApprovalNew  : CarApproval = {age: 0,carCompony: false,department : '',lastName: '',id: 0,name : '',role : ''}

  validationAdd() {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(2), hebrewValidator()]],
        lastName: [
          '',
          [
            Validators.required,
            hebrewValidator(),
            Validators.minLength(2),
          ]
        ],
        carCompony:[],
        role: ['', [Validators.required]],
        department: ['', [Validators.required]],
        age: ['', [Validators.required, Validators.min(18), Validators.max(99)]],

      },

    );
  }
  initCont() {
     this.validationAdd();
    if (this.item !== null) {
      this.form.controls["age"].setValue(this.item.age);
      this.form.controls["carCompony"].setValue(this.item.carCompony);
      this.form.controls["department"].setValue(this.item.department);
      this.form.controls["lastName"].setValue(this.item.lastName);
      this.form.controls["name"].setValue(this.item.name);
      this.form.controls["role"].setValue(this.item.role);
    }
    }

    formInit() {
      this.form = new FormGroup({
        name: new FormControl(''),
        lastName: new FormControl(''),
        age: new FormControl(''),
        role: new FormControl(''),
        department: new FormControl(''),
        carCompony: new FormControl(false),
      });
    }
  ngOnInit(): void {
    this.formInit();
    this.initCont();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.errorExist = false;
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.carApprovalNew = this.form.value;
    this.firstFunction()
      .then(() => this.secondFunction())
      .then(() => {
        console.log('Both functions executed successfully.');
      })
      .catch(error => {
        console.error('Error in one or more functions:', error);
      });
  }
  firstFunction(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.historyValue.forEach((value, index) => {
        if (value.name === this.form.value.name && value.lastName === this.form.value.lastName && this.item == null) {
          this.errorExist = true;

        }
        if (value.name === this.form.value.name && value.lastName === this.form.value.lastName && this.item != null && this.item.id != value.id) {
          this.errorExist = true;

        }
      });
      setTimeout(() => {
        resolve();
      }, 1000); // Adjust the timeout based on your needs
    });
  }

  secondFunction(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (!this.errorExist) {


      if (this.item == null) {
        this.carApprovalService.addItems(this.carApprovalNew).subscribe((data: any) => {
          this.access = true;
            setTimeout(()=>{                           //<<<---using ()=> syntax
              this.access = false;
              this.getAgainList.emit();
        }, 3000);
        })
      }
      else {
        this.carApprovalNew.id = this.item.id;
        this.carApprovalService.editItems(this.carApprovalNew).subscribe((data: any) => {
            this.access = true;
            setTimeout(()=>{                           //<<<---using ()=> syntax
              this.getAgainList.emit();
        }, 3000);
        })
      }
    }
      setTimeout(() => {
        resolve();
      }, 1000); // Adjust the timeout based on your needs
    });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.formInit();
    this.initCont();
  }
}
