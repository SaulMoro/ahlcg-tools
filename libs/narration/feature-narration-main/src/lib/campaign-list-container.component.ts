import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ahlcg-tools-campaign-list-container',
  template: ` <p>campaign-list-container works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignListContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [CampaignListContainerComponent],
  exports: [CampaignListContainerComponent],
})
export class CampaignListContainerComponentModule {}
