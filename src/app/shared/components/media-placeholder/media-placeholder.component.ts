import { Component, input } from '@angular/core';
import { MediaPlaceholderType } from './media-placeholder.model';

@Component({
  selector: 'app-media-placeholder',
  standalone: true,
  templateUrl: './media-placeholder.component.html',
  styleUrl: './media-placeholder.component.scss',
})
export class MediaPlaceholderComponent {
  readonly type = input.required<MediaPlaceholderType>();
  readonly label = input.required<string>();
}
