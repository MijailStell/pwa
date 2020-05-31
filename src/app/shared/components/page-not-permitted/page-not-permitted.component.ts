import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-permitted',
  templateUrl: './page-not-permitted.component.html',
  styleUrls: ['./page-not-permitted.component.scss']
})
export class PageNotPermittedComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back() {
    this.location.back();
  }
}
