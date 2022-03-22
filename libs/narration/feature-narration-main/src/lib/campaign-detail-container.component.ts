import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { pluck, switchMap } from 'rxjs';

import { NarrationsService } from '@ahlcg-tools/narration/data-access';
import { NarrationAudioComponentModule } from '@ahlcg-tools/narration/ui';
import { FullCampaign } from '@ahlcg-tools/shared/util/models';

@Component({
  selector: 'ahlcg-tools-campaign-detail-container',
  template: `
    <main class="space-y-8" *ngIf="campaign$ | async as campaignData">
      <h1 class="text-3xl text-bold">{{ campaignData.campaign.name }}</h1>
      <a class="text-xl text-medium" [routerLink]="['..']">
        < Volver a listado de campañas
      </a>

      <div class="bg-gray-400">
        <h2 class="text-xl text-bold">Setup</h2>
        <ng-container *ngFor="let step of campaignData.campaign.steps">
          <ahlcg-tools-narration-audio
            *ngIf="step.narration as narration"
            [narration]="narration"
          >
          </ahlcg-tools-narration-audio>
        </ng-container>
      </div>

      <div class="bg-orange-300">
        <h2 class="text-xl text-bold">Escenarios</h2>
        <p
          class="mt-4 text-lg text-medium"
          *ngFor="let scenarioId of campaignData.campaign.scenarios"
        >
          <a [routerLink]="[scenarioId]">{{
            getScenarioNameById(campaignData, scenarioId)
          }}</a>
        </p>
      </div>
    </main>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignDetailContainerComponent {
  campaign$ = this.route.params.pipe(
    pluck('id'),
    switchMap((id: string) => this.narrationsService.getCampaign(id))
  );

  constructor(
    private narrationsService: NarrationsService,
    private route: ActivatedRoute
  ) {}

  getScenarioNameById(campaignData: FullCampaign, scenarioId: string) {
    return campaignData.scenarios.find((scenario) => scenario.id === scenarioId)
      ?.full_name;
  }
}

@NgModule({
  declarations: [CampaignDetailContainerComponent],
  imports: [
    CommonModule,
    NarrationAudioComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: CampaignDetailContainerComponent,
      },
      {
        path: ':scenarioId',
        loadChildren: () =>
          import('./campaign-scenario-container.component').then(
            (module) => module.CampaignScenarioContainerComponentModule
          ),
      },
    ]),
  ],
  exports: [CampaignDetailContainerComponent],
})
export class CampaignDetailContainerComponentModule {}
