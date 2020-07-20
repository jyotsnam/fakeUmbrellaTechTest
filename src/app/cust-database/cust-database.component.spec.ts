import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDatabaseComponent } from './cust-database.component';

describe('CustDatabaseComponent', () => {
  let component: CustDatabaseComponent;
  let fixture: ComponentFixture<CustDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
