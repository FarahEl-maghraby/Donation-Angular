import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaigndetalisComponent } from './campaigndetalis.component';

describe('CampaigndetalisComponent', () => {
  let component: CampaigndetalisComponent;
  let fixture: ComponentFixture<CampaigndetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaigndetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaigndetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
