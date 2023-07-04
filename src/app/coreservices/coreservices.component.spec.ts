import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreservicesComponent } from './coreservices.component';

describe('CoreservicesComponent', () => {
  let component: CoreservicesComponent;
  let fixture: ComponentFixture<CoreservicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreservicesComponent]
    });
    fixture = TestBed.createComponent(CoreservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
