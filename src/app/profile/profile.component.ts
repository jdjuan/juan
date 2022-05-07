import { Component, OnInit } from '@angular/core';

@Component({ selector: 'app-profile', templateUrl: './profile.component.html' })
export class ProfileComponent implements OnInit {
  links = [
    { url: 'https://twitter.com/jdjuan/status/1320760929211002884', text: 'Dealing with Bad Habits' },
    { url: 'https://twitter.com/jdjuan/status/1299984661200941058', text: 'How to ask for Mentorship' },
    { url: 'https://twitter.com/jdjuan/status/1293112496505724929', text: 'Differences: Austria and Colombia' },
    { url: 'https://twitter.com/jdjuan/status/1288466193968517126', text: 'Frontend Desde Cero' },
    { url: 'https://twitter.com/jdjuan/status/1280868324973387778', text: 'How to do Public Speaking' },
    { url: 'https://twitter.com/jdjuan/status/1275028906115043333', text: 'Cómo Trabajar en el Exterior' },
    { url: 'https://twitter.com/jdjuan/status/1276411410688413696', text: 'The Quiet Path of Software' },
    { url: 'https://twitter.com/jdjuan/status/1266715418212929536', text: 'Improve Your Development Cycle' },
    { url: 'https://twitter.com/jdjuan/status/1263440610893201408', text: 'How to Upgrade Your Curriculum' },
  ];
  constructor() {}

  ngOnInit() {}
}
