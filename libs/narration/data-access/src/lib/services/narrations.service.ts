import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs';

import { FullCampaign, Scenario } from '@ahlcg-tools/shared/util/models';
import { NarrationCampaignStep } from '@ahlcg-tools/narration/util-models';

@Injectable({ providedIn: 'root' })
export class NarrationsService {
  constructor(private http: HttpClient) {}

  getCampaigns() {
    return this.http
      .get<FullCampaign[]>('./assets/campaigns/allCampaigns_es.json')
      .pipe(
        map((campaigns) =>
          campaigns.sort((a, b) => a.campaign.position - b.campaign.position)
        ),
        shareReplay(1)
      );
  }

  getCampaign(campaignId: string) {
    return this.getCampaigns().pipe(
      map((campaigns) =>
        campaigns.find(({ campaign }) => campaign.id === campaignId)
      )
    );
  }

  getScenarioOfCampaign(campaignId: string, scenarioId: string) {
    return this.getCampaign(campaignId).pipe(
      map((campaign) =>
        campaign?.scenarios.find((scenario) => scenario.id === scenarioId)
      )
    );
  }
}
