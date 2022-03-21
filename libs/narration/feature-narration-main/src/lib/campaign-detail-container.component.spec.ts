import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailContainerComponent } from './campaign-detail-container.component';

describe('CampaignDetailContainerComponent', () => {
  let component: CampaignDetailContainerComponent;
  let fixture: ComponentFixture<CampaignDetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampaignDetailContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
