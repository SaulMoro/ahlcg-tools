import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignScenarioContainerComponent } from './campaign-scenario-container.component';

describe('CampaignScenarioContainerComponent', () => {
  let component: CampaignScenarioContainerComponent;
  let fixture: ComponentFixture<CampaignScenarioContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampaignScenarioContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignScenarioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
