import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignListContainerComponent } from './campaign-list-container.component';

describe('CampaignListContainerComponent', () => {
  let component: CampaignListContainerComponent;
  let fixture: ComponentFixture<CampaignListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampaignListContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
