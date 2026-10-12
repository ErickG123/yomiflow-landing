import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly featureKeys = ['media', 'notebook', 'shadowing', 'srs', 'morphman', 'kana'];
  readonly featureIcons = ['?', '?', '?', '?', '?', '?'];
  readonly insightKeys = ['dojo', 'pomodoro', 'heatmap', 'jlpt'];
  readonly bars = [24, 36, 31, 54, 46, 69, 62, 84, 72, 96, 82, 100];
  readonly heatmap = Array.from({ length: 40 }, (_, i) =>
    i % 9 === 0
      ? 'bg-zinc-800'
      : i % 5 === 0
        ? 'bg-emerald-900'
        : i % 3 === 0
          ? 'bg-emerald-600'
          : 'bg-emerald-500/60',
  );
}
