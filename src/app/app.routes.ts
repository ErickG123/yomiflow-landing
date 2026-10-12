import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'download',
    loadComponent: () =>
      import('./features/download/download.component').then((m) => m.DownloadComponent),
  },
  {
    path: 'features/notebook',
    data: { feature: 'notebook' },
    loadComponent: () =>
      import('./features/feature-detail/feature-detail.component').then(
        (m) => m.FeatureDetailComponent,
      ),
  },
  {
    path: 'features/audio-vault',
    data: { feature: 'audioVault' },
    loadComponent: () =>
      import('./features/feature-detail/feature-detail.component').then(
        (m) => m.FeatureDetailComponent,
      ),
  },
  {
    path: 'features/immersion',
    data: { feature: 'immersion' },
    loadComponent: () =>
      import('./features/feature-detail/feature-detail.component').then(
        (m) => m.FeatureDetailComponent,
      ),
  },
  {
    path: 'features/shadowing',
    data: { feature: 'shadowing' },
    loadComponent: () =>
      import('./features/feature-detail/feature-detail.component').then(
        (m) => m.FeatureDetailComponent,
      ),
  },
  {
    path: 'features/srs',
    data: { feature: 'srs' },
    loadComponent: () =>
      import('./features/feature-detail/feature-detail.component').then(
        (m) => m.FeatureDetailComponent,
      ),
  },
  {
    path: 'features/analytics',
    data: { feature: 'analytics' },
    loadComponent: () =>
      import('./features/feature-detail/feature-detail.component').then(
        (m) => m.FeatureDetailComponent,
      ),
  },
  {
    path: 'features/kana',
    data: { feature: 'kana' },
    loadComponent: () =>
      import('./features/feature-detail/feature-detail.component').then(
        (m) => m.FeatureDetailComponent,
      ),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent),
  },
  { path: '**', redirectTo: '' },
];
