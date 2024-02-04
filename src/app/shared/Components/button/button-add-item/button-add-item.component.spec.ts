import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddItemComponent } from './button-add-item.component';

describe('ButtonAddItemComponent', () => {
  let component: ButtonAddItemComponent;
  let fixture: ComponentFixture<ButtonAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonAddItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
