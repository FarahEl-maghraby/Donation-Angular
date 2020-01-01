import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakedonationComponent } from './makedonation.component';

describe('MakedonationComponent', () => {
  let component: MakedonationComponent;
  let fixture: ComponentFixture<MakedonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakedonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakedonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
