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
  ];

  items = [
    {
     image:'/assets/image/couch.jpeg',
     title:'Couch',
     description:'This is a lovely couch'
    },
    {
      image:'/assets/image/dresser.jpeg',
      title:'Dresser',
      description:'This is a great dresser to put objects'
     }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
