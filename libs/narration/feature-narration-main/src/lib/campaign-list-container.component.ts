import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NarrationsService } from '@ahlcg-tools/narration/data-access';

@Component({
  selector: 'ahlcg-tools-campaign-list-container',
  template: `
    <main
      class="flex flex-col space-y-8"
      *ngIf="campaigns$ | async as campaigns"
    >
      <ng-container *ngFor="let campaignData of campaigns">
        <a [routerLink]="['campaign', campaignData.campaign.id]">
          <span class="text-3xl text-bold">
            {{ campaignData.campaign.name }}
          </span>
        </a>
      </ng-container>
    </main>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignListContainerComponent {
  campaigns$ = this.narrationsService.getCampaigns();

  constructor(private narrationsService: NarrationsService) {}
}

@NgModule({
  declarations: [CampaignListContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CampaignListContainerComponent,
      },
    ]),
  ],
  exports: [CampaignListContainerComponent],
})
export class CampaignListContainerComponentModule {}
