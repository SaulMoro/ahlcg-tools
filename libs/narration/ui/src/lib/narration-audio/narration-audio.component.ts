import {
  Component,
  ChangeDetectionStrategy,
  NgModule,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Narration } from '@ahlcg-tools/shared/util/models';

@Component({
  selector: 'ahlcg-tools-narration-audio',
  template: `
    <p>
      <span>{{ narration.name }}</span>
      <audio controls>
        <source
          src="{{
            'https://static.arkhamcards.com/audio/es/' + narration.id + '.mp3'
          }}"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NarrationAudioComponent {
  @Input() narration!: Narration;

  constructor() {}
}

@NgModule({
  imports: [CommonModule],
  declarations: [NarrationAudioComponent],
  exports: [NarrationAudioComponent],
})
export class NarrationAudioComponentModule {}
