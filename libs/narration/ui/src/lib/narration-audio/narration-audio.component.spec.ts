import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrationAudioComponent } from './narration-audio.component';

describe('NarrationAudioComponent', () => {
  let component: NarrationAudioComponent;
  let fixture: ComponentFixture<NarrationAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NarrationAudioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NarrationAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
