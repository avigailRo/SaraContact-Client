import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyToComponent } from './apply-to.component';

describe('ApplyToComponent', () => {
  let component: ApplyToComponent;
  let fixture: ComponentFixture<ApplyToComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyToComponent]
    });
    fixture = TestBed.createComponent(ApplyToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
