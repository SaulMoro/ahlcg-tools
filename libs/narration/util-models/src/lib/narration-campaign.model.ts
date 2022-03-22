import { NarrationCampaignStep } from './narration-campaign-step.model';

export interface NarrationCampaign {
  id: string;
  name: string;
  steps?: NarrationCampaignStep[];
}
