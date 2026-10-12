import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { DeepDiveFeature } from './feature-detail.model';
import { MediaPlaceholderComponent } from '../../shared/components/media-placeholder/media-placeholder.component';

@Component({
  selector: 'app-feature-detail',
  standalone: true,
  imports: [TranslocoModule, MediaPlaceholderComponent],
  templateUrl: './feature-detail.component.html',
})
export class FeatureDetailComponent {
  readonly feature = inject(ActivatedRoute).snapshot.data['feature'] as DeepDiveFeature;
  readonly benefits = ['first', 'second', 'third'];
}
