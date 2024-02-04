import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAprovCarComponent } from './add-aprov-car.component';

describe('AddAprovCarComponent', () => {
  let component: AddAprovCarComponent;
  let fixture: ComponentFixture<AddAprovCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAprovCarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAprovCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
