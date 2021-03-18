import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HideoutComponent } from './hideout.component';

describe('HideoutComponent', () => {
  let component: HideoutComponent;
  let fixture: ComponentFixture<HideoutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HideoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
