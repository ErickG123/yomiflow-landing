import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SeoContent } from '../models/seo-content.model';

const content: Record<string, SeoContent> = {
  en: {
    title: 'YomiFlow - Japanese, in your own flow',
    description:
      'An offline-first Japanese immersion and spaced repetition workspace. Your study life stays local.',
    image: '/assets/yomiflow-og.svg',
    locale: 'en_US',
  },
  pt: {
    title: 'YomiFlow - Japonês no seu ritmo',
    description:
      'Imersão em japonês e repetição espaçada, offline-first. Seu estudo fica guardado localmente.',
    image: '/assets/yomiflow-og.svg',
    locale: 'pt_BR',
  },
  es: {
    title: 'YomiFlow - Japonés a tu ritmo',
    description:
      'Inmersión en japonés y repetición espaciada, offline-first. Tu estudio se guarda localmente.',
    image: '/assets/yomiflow-og.svg',
    locale: 'es_ES',
  },
};

const canonicalOrigin = 'https://yomiflow.app';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);

  update(language: string): void {
    const data = content[language] ?? content['en'];
    const image = new URL(data.image, canonicalOrigin).href;
    const canonical = new URL(this.router.url, canonicalOrigin);
    canonical.search = '';
    canonical.hash = '';
    const canonicalUrl = canonical.href;

    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });

    for (const [property, value] of Object.entries({
      'og:title': data.title,
      'og:description': data.description,
      'og:image': image,
      'og:url': canonicalUrl,
      'og:type': 'website',
      'og:locale': data.locale,
    })) {
      this.meta.updateTag({ property, content: value });
    }

    for (const [name, value] of Object.entries({
      'twitter:card': 'summary_large_image',
      'twitter:title': data.title,
      'twitter:description': data.description,
      'twitter:image': image,
    })) {
      this.meta.updateTag({ name, content: value });
    }

    let canonicalLink = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.rel = 'canonical';
      this.document.head.append(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
  }
}
