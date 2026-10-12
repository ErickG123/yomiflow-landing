import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { MediaPlaceholderComponent } from '../../../../shared/components/media-placeholder/media-placeholder.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslocoModule, RouterLink, MediaPlaceholderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly featureKeys = ['media', 'notebook', 'shadowing', 'srs', 'morphman', 'kana'];
  readonly featureRoutes: Record<string, string> = {
    media: '/features/immersion',
    notebook: '/features/notebook',
    shadowing: '/features/shadowing',
    srs: '/features/srs',
    morphman: '/features/analytics',
    kana: '/features/kana',
  };
  readonly insightKeys = ['dojo', 'pomodoro', 'heatmap', 'jlpt'];
  scrollToFeatures(): void {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  }
}
