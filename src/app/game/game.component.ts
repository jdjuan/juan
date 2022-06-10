import { Component, OnInit } from '@angular/core';
import { level1, level2, level3 } from 'src/app/game/challenges';
import { shuffle } from 'lodash-es';

@Component({
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  challenge?: string;
  shouldShowHiddenMessage?: boolean;
  hiddenMessage?: string;
  hasHiddenMessage?: boolean;
  level1 = shuffle(level1);
  level2 = shuffle(level2);
  level3 = shuffle(level3);

  constructor() {}

  ngOnInit(): void {}

  show(level: number): void {
    this.shouldShowHiddenMessage = false;
    let poolOfChallenges;
    switch (level) {
      case 1:
        poolOfChallenges = this.level1;
        break;
      case 2:
        poolOfChallenges = this.level2;
        break;
      case 3:
        poolOfChallenges = this.level3;
        break;
    }
    const challenge = poolOfChallenges?.pop();
    this.challenge = challenge?.description;
    this.hasHiddenMessage = !!challenge?.hiddenMessage;
    this.hiddenMessage = challenge?.hiddenMessage;
  }

  showHiddenMessage(): void {
    this.shouldShowHiddenMessage = true;
  }
}
