import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarApprovalComponent } from './list-car-approval.component';

describe('ListCarApprovalComponent', () => {
  let component: ListCarApprovalComponent;
  let fixture: ComponentFixture<ListCarApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCarApprovalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCarApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
