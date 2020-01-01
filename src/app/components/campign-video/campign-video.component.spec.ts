import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampignVideoComponent } from './campign-video.component';

describe('CampignVideoComponent', () => {
  let component: CampignVideoComponent;
  let fixture: ComponentFixture<CampignVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampignVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampignVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
