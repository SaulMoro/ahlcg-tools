import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ahlcg-tools-campaign-detail-container',
  template: ` <p>campaign-detail-container works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignDetailContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [CampaignDetailContainerComponent],
  exports: [CampaignDetailContainerComponent],
})
export class CampaignDetailContainerComponentModule {}
