import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampignheaderComponent } from './campignheader.component';

describe('CampignheaderComponent', () => {
  let component: CampignheaderComponent;
  let fixture: ComponentFixture<CampignheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampignheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampignheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
