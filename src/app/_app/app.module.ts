// @angular lib imports
import { NgModule }                           from '@angular/core';
import { FormsModule }                        from '@angular/forms';
import { HttpModule, Http, RequestOptions }   from '@angular/http';
import { RouterModule }                       from '@angular/router';
import { BrowserModule }                      from '@angular/platform-browser';
import { BrowserAnimationsModule }            from '@angular/platform-browser/animations';
import {  MaterialModule,
          MdButtonModule,
          MdSidenavModule,
          MdListModule,
          MdCardModule,
          MdMenuModule,
          MdInputModule,
          MdGridListModule
} from '@angular/material';

// Import gesture libs
import 'hammerjs';

// load app and routes
import { ROUTES } from './app.routes';
import { AppComponent }   from './app.component';

// import authentication libs (https://manage.auth.com)
import { AuthService }            from '../services/auth/auth.service';
import { AuthHttp, AuthConfig }   from 'angular2-jwt';

// import all page components
import { HomeComponent }          from '../pages/home/home.component';
import { ProfileComponent }       from '../pages/profile/profile.component';
import { PingComponent }          from '../pages/ping/ping.component';
import { CallbackComponent }      from '../pages/callback/callback.component';
import { AdminComponent }         from '../pages/admin/admin.component';

// import services
import { AuthGuardService }       from '../services/auth/auth-guard.service';
import { ScopeGuardService }      from '../services/auth/scope-guard.service';

// UIkit components
import { HeaderComponent }        from '../components/header/header.component';
import { NavContainerComponent }  from '../components/navContainer/navContainer.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenGetter: (() => localStorage.getItem('access_token')),
        globalHeaders: [{'Content-Type': 'application/json'}],
  }), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PingComponent,
    ProfileComponent,
    AdminComponent,
    CallbackComponent,
    HeaderComponent,
    NavContainerComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdButtonModule, MdSidenavModule, MdListModule,MdCardModule,MdMenuModule,MdInputModule,MdGridListModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    AuthService,
    AuthGuardService,
    ScopeGuardService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
