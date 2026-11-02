import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { ScrollRevealDirective } from '../../../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslocoModule, RouterLink, ScrollRevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly featureKeys = ['media', 'notebook', 'shadowing', 'srs', 'morphman', 'kana'];
  readonly featureRoutes: Record<string, string> = {
    media: '/features/immersion',
    immersion: '/features/immersion',
    notebook: '/features/notebook',
    shadowing: '/features/shadowing',
    srs: '/features/srs',
    morphman: '/features/analytics',
    kana: '/features/kana',
  };
  readonly workflowSteps = ['immersion', 'notebook', 'srs'];
  readonly workflowMedia: Record<string, string> = {
    immersion: 'immersion',
    notebook: 'notebook',
    srs: 'srs',
  };
  readonly insightKeys = ['dojo', 'pomodoro', 'heatmap', 'jlpt'];
  readonly comparisonPainKeys = ['setup', 'extensions', 'internet', 'scattered'];
  readonly comparisonBenefitKeys = ['unified', 'fsrs', 'offline', 'notebook'];
  readonly pricingFeatureKeys = ['workspace', 'offline', 'openSource', 'updates'];
  scrollToFeatures(): void {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  }
}
