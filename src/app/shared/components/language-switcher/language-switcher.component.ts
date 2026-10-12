import { Component, inject } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { SupportedLanguage } from '../../../core/i18n/models/language.model';
import { LanguageService } from '../../../core/i18n/services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  private readonly languages = inject(LanguageService);
  get currentLanguage(): SupportedLanguage {
    return this.languages.currentLanguage;
  }
  changeLanguage(event: Event): void {
    const language = (event.currentTarget as HTMLSelectElement).value as SupportedLanguage;
    this.languages.setLanguage(language);
  }
}
