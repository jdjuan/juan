import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({ templateUrl: './birthday.component.html' })
export class BirthdayComponent implements OnInit {
  name: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.name = this.activatedRoute.snapshot.paramMap.get('name') || 'friend';
  }

  ngOnInit(): void {}
}
