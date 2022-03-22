import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('./campaign-list-container.component').then(
            (module) => module.CampaignListContainerComponentModule
          ),
      },
      {
        path: 'campaign/:id',
        loadChildren: () =>
          import('./campaign-detail-container.component').then(
            (module) => module.CampaignDetailContainerComponentModule
          ),
      },
      { path: '**', redirectTo: '' },
    ]),
  ],
})
export class NarrationFeatureNarrationMainModule {}
