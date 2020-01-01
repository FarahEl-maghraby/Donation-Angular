import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdetalisComponent } from './cdetalis.component';

describe('CdetalisComponent', () => {
  let component: CdetalisComponent;
  let fixture: ComponentFixture<CdetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
