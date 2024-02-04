import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemApprovalCarComponent } from './create-item-approval-car.component';

describe('CreateItemApprovalCarComponent', () => {
  let component: CreateItemApprovalCarComponent;
  let fixture: ComponentFixture<CreateItemApprovalCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateItemApprovalCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateItemApprovalCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
