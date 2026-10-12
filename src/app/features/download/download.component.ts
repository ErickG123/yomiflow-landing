import { Component, signal } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { DownloadPlatform, ReleaseNoteKey } from './models/download.model';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
})
export class DownloadComponent {
  readonly platforms: DownloadPlatform[] = ['windows', 'macos', 'linux'];
  readonly releaseNotes: ReleaseNoteKey[] = ['audioVault', 'shadowingMorphman', 'notebook'];
  readonly activeDownload = signal<DownloadPlatform | null>(null);

  simulateDownload(platform: DownloadPlatform): void {
    this.activeDownload.set(platform);
  }
}
