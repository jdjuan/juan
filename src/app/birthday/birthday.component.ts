import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({ templateUrl: './birthday.component.html' })
export class BirthdayComponent implements OnInit {
  name$: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.name$ = this.activatedRoute.paramMap.pipe(pluck('params', 'name')) as Observable<string>;
  }

  ngOnInit(): void {}
}
