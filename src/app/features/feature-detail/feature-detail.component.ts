import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { DeepDiveBenefit, DeepDiveFeature } from './feature-detail.model';

const featureMedia: Record<DeepDiveFeature, string> = {
  notebook: 'notebook',
  audioVault: 'audio-vault',
  immersion: 'immersion',
  shadowing: 'shadowing',
  srs: 'srs',
  analytics: 'analytics',
  kana: 'kana',
};

@Component({
  selector: 'app-feature-detail',
  standalone: true,
  imports: [TranslocoModule, RouterLink],
  templateUrl: './feature-detail.component.html',
  styleUrl: './feature-detail.component.scss',
})
export class FeatureDetailComponent {
  readonly feature = inject(ActivatedRoute).snapshot.data['feature'] as DeepDiveFeature;
  readonly mediaName = featureMedia[this.feature];
  readonly videoSource = `/assets/videos/${this.mediaName}.mp4`;
  readonly videoPoster = `/assets/videos/posters/${this.mediaName}.jpg`;
  readonly benefits: DeepDiveBenefit[] = ['first', 'second', 'third', 'fourth'];
}
