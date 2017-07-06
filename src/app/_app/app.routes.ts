import { Routes, CanActivate } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { PingComponent } from '../pages/ping/ping.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { CallbackComponent } from '../pages/callback/callback.component';

import { AuthGuardService as AuthGuard } from '../services/auth/auth-guard.service';
import { ScopeGuardService as ScopeGuard } from '../services/auth/scope-guard.service';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'ping', component: PingComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [ScopeGuard], data: { expectedScopes: ['write:messages']} },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
