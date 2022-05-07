import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ templateUrl: './birthday.component.html' })
export class BirthdayComponent implements OnInit {
  name: string;
  // guests = [
  //   'maria',
  //   'carsten',
  //   'thomas',
  //   'andrea',
  //   'verena',
  //   'clara',
  //   'kilian',
  //   'larissa',
  //   'paolo',
  //   'jan',
  //   'jose',
  //   'konny',
  //   'anna',
  //   'silvia',
  //   'julien',
  //   'jonathan',
  //   'sam',
  //   'katy',
  //   'rubaeat',
  // ];

  constructor(private activatedRoute: ActivatedRoute) {
    this.name = this.activatedRoute.snapshot.paramMap.get('name') || 'friend';
  }

  ngOnInit(): void {}
}
