import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss',
})
export class DownloadComponent {}
