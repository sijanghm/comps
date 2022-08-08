import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {

  stats = [
    { value : 22, label:' # of Users'},
    { value : 900, label:'Total Revenue'},
    { value: 50, label: 'Reviews'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
