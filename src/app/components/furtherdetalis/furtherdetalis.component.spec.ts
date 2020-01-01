import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurtherdetalisComponent } from './furtherdetalis.component';

describe('FurtherdetalisComponent', () => {
  let component: FurtherdetalisComponent;
  let fixture: ComponentFixture<FurtherdetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurtherdetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurtherdetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
