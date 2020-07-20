import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainScheduleComponent } from './rain-schedule.component';

describe('RainScheduleComponent', () => {
  let component: RainScheduleComponent;
  let fixture: ComponentFixture<RainScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
