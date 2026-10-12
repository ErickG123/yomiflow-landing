import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
    title: 'YomiFlow - Japon\u00eas no seu ritmo',
    description:
      'Imers\u00e3o em japon\u00eas e repeti\u00e7\u00e3o espa\u00e7ada, offline-first. Seu estudo fica guardado localmente.',
    image: '/assets/yomiflow-og.svg',
    locale: 'pt_BR',
  },
  es: {
    title: 'YomiFlow - Japon\u00e9s a tu ritmo',
    description:
      'Inmersi\u00f3n en japon\u00e9s y repetici\u00f3n espaciada, offline-first. Tu estudio se guarda localmente.',
    image: '/assets/yomiflow-og.svg',
    locale: 'es_ES',
  },
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  update(language: string): void {
    const data = content[language] ?? content['en'];
    const image = new URL(data.image, globalThis.location.origin).href;
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });

    for (const [property, value] of Object.entries({
      'og:title': data.title,
      'og:description': data.description,
      'og:image': image,
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
  }
}

