import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {value: 22, label: '# of Users'},
    {value: 900, label: 'Revenue'},
    {value: 50, label: 'Reviews'},
  ];
  items = [
    { image: '/assets/blue.png', title: 'Blue', description: 'An image with blue colour' },
    { image: '/assets/green.png',title: 'Green', description: 'An image with green colour' },
    { image: '/assets/red.png',  title: 'Red', description: 'An image with red colour' }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
