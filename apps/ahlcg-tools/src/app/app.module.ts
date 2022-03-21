import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { getAppConfigProvider } from '@ahlcg-tools/shared/util/app-config';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@ahlcg-tools/narration-feature-narration-main').then(
              (module) => module.NarrationFeatureNarrationMainModule
            ),
        },
        { path: '**', redirectTo: '' },
      ],
      {
        preloadingStrategy: PreloadAllModules,
        scrollPositionRestoration: 'enabled',
      }
    ),
  ],
  providers: [getAppConfigProvider(environment)],
  bootstrap: [AppComponent],
})
export class AppModule {}
