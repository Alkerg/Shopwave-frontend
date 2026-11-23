import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/landing-page/landing-page').then((m) => m.LandingPage),
    },
    {
        path: 'cart',
        loadComponent: () => import('./pages/cart-page/cart-page').then((m) => m.CartPage),
    },
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile-page/profile-page').then((m) => m.ProfilePage),
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found-page/not-found-page').then((m) => m.NotFoundPage)
    }
];
