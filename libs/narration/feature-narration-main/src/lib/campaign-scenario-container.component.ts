import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { NarrationsService } from '@ahlcg-tools/narration/data-access';
import { NarrationAudioComponentModule } from '@ahlcg-tools/narration/ui';

@Component({
  selector: 'ahlcg-tools-campaign-scenario-container',
  template: `
    <main class="space-y-8" *ngIf="scenario$ | async as scenario">
      <h1 class="text-3xl text-bold">{{ scenario.full_name }}</h1>
      <a class="text-xl text-medium" [routerLink]="['..']">
        < Volver a campaña
      </a>

      <div>
        <h2 class="text-xl text-bold">Pasos</h2>
        <ng-container *ngFor="let step of scenario.steps">
          <ahlcg-tools-narration-audio
            *ngIf="step.narration as narration"
            [narration]="narration"
          >
          </ahlcg-tools-narration-audio>
        </ng-container>
      </div>

      <div>
        <h2 class="text-xl text-bold">Resoluciones</h2>
        <ng-container *ngFor="let resolution of scenario.resolutions">
          <ahlcg-tools-narration-audio
            *ngIf="resolution.narration as narration"
            [narration]="narration"
          >
          </ahlcg-tools-narration-audio>
        </ng-container>
      </div>
    </main>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignScenarioContainerComponent {
  scenario$ = this.route.params.pipe(
    map(({ id, scenarioId }) => ({ id, scenarioId })),
    switchMap(({ id, scenarioId }) =>
      this.narrationsService.getScenarioOfCampaign(id, scenarioId)
    )
  );

  constructor(
    private narrationsService: NarrationsService,
    private route: ActivatedRoute
  ) {}
}

@NgModule({
  imports: [
    CommonModule,
    NarrationAudioComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: CampaignScenarioContainerComponent,
      },
    ]),
  ],
  declarations: [CampaignScenarioContainerComponent],
  exports: [CampaignScenarioContainerComponent],
})
export class CampaignScenarioContainerComponentModule {}
