import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  click :  boolean = false;
  items = [
    {title:'What is your name?', content: 'I am Sijan Ghimire'},
    {title:'Where do you live?', content: 'I live in kathmandu'},
    {title:'How old are you?', content: 'I am 22 years old'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.click = !this.click;
  }

}
