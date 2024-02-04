import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApprovalCarComponent } from './create-approval-car.component';

describe('CreateApprovalCarComponent', () => {
  let component: CreateApprovalCarComponent;
  let fixture: ComponentFixture<CreateApprovalCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateApprovalCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateApprovalCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
