import { Component, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { SupportedLanguage } from '../../../core/i18n/models/language.model';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './language-switcher.component.html',
})
export class LanguageSwitcherComponent {
  private readonly transloco = inject(TranslocoService);
  get currentLanguage(): SupportedLanguage {
    return this.transloco.getActiveLang() as SupportedLanguage;
  }
  changeLanguage(language: string): void {
    this.transloco.setActiveLang(language);
  }
}
