import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { SeoService } from './core/seo/services/seo.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly transloco = inject(TranslocoService);
  private readonly seo = inject(SeoService);
  constructor() {
    this.seo.update(this.transloco.getActiveLang() || 'en');
    this.transloco.langChanges$.subscribe((lang) => this.seo.update(lang));
  }
}
