import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/landing-page/landing-page').then((m) => m.LandingPage),
    },
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile-page/profile-page').then((m) => m.ProfilePage),
    }
];
