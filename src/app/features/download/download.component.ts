import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [TranslocoModule],
  template: `
    <section class="px-6 py-28 text-center">
      <div class="mx-auto max-w-2xl">
        <p class="text-sm font-semibold uppercase tracking-[.2em] text-indigo-300">
          {{ 'download.eyebrow' | transloco }}
        </p>
        <h1 class="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
          {{ 'download.title' | transloco }}
        </h1>
        <p class="mt-6 leading-7 text-zinc-400">{{ 'download.description' | transloco }}</p>
      </div>
    </section>
  `,
})
export class DownloadComponent {}
