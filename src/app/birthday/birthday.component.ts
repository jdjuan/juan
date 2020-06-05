import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss'],
})
export class BirthdayComponent implements OnInit {
  name$: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.name$ = this.activatedRoute.paramMap.pipe(pluck('params', 'name'));
  }

  ngOnInit(): void {}
}
