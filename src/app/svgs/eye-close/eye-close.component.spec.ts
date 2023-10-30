import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeCloseComponent } from './eye-close.component';

describe('EyeCloseComponent', () => {
  let component: EyeCloseComponent;
  let fixture: ComponentFixture<EyeCloseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EyeCloseComponent]
    });
    fixture = TestBed.createComponent(EyeCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
