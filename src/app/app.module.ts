import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PrivacyPolicyComponent,
    BirthdayComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ProfileComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'game',
        component: GameComponent,
      },
      {
        path: ':name',
        component: BirthdayComponent,
      },
      {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
