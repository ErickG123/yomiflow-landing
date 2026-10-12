import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { SupportedLanguage } from '../models/language.model';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly transloco = inject(TranslocoService);

  constructor() {
    this.updateDocumentLanguage(this.transloco.getActiveLang() || 'en');
    this.transloco.langChanges$.subscribe((language) => {
      this.updateDocumentLanguage(language);
    });
  }

  get currentLanguage(): SupportedLanguage {
    return (this.transloco.getActiveLang() || 'en') as SupportedLanguage;
  }

  setLanguage(language: SupportedLanguage): void {
    this.transloco.setActiveLang(language);
  }

  private updateDocumentLanguage(language: string): void {
    this.document.documentElement.lang = language;
  }
}
