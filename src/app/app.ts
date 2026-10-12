import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { SeoService } from './core/seo/services/seo.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LanguageService } from './core/i18n/services/language.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, TranslocoModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly transloco = inject(TranslocoService);
  private readonly seo = inject(SeoService);
  private readonly router = inject(Router);
  private readonly languages = inject(LanguageService);
  constructor() {
    this.seo.update(this.languages.currentLanguage);
    this.transloco.langChanges$.subscribe((lang) => this.seo.update(lang));
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.seo.update(this.languages.currentLanguage);
    });
  }
}
