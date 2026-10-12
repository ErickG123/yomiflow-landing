import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { DeepDiveBenefit, DeepDiveFeature } from './feature-detail.model';
import { MediaPlaceholderComponent } from '../../shared/components/media-placeholder/media-placeholder.component';

@Component({
  selector: 'app-feature-detail',
  standalone: true,
  imports: [TranslocoModule, MediaPlaceholderComponent, RouterLink],
  templateUrl: './feature-detail.component.html',
  styleUrl: './feature-detail.component.scss',
})
export class FeatureDetailComponent {
  readonly feature = inject(ActivatedRoute).snapshot.data['feature'] as DeepDiveFeature;
  readonly benefits: DeepDiveBenefit[] = ['first', 'second', 'third', 'fourth'];
}
