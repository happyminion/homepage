import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  items: Array<any> = [];
  project2_items: Array<any> = [];

  screenSize() {
    return window.screen.availWidth;
  }

  constructor() {
    this.items = [
      { name: 'assets/img/page1.png' },
      { name: 'assets/img/page2.png' },
      { name: 'assets/img/page3.png' },
      { name: 'assets/img/page1.png' },
      { name: 'assets/img/page2.png' },
      { name: 'assets/img/page3.png' },
      { name: 'assets/img/page1.png' },
      { name: 'assets/img/page2.png' },
      { name: 'assets/img/page3.png' },
      { name: 'assets/img/page1.png' },
      { name: 'assets/img/page2.png' },
      { name: 'assets/img/page3.png' }
    ]
    this.project2_items = [
      { name: 'assets/img/project2_img2.png' },
      { name: 'assets/img/project2_img1.png' },
      { name: 'assets/img/project2_img3.png' },
      { name: 'assets/img/project2_img4.png' },
      { name: 'assets/img/project2_img2.png' },
      { name: 'assets/img/project2_img1.png' },
      { name: 'assets/img/project2_img3.png' },
      { name: 'assets/img/project2_img4.png' },
      { name: 'assets/img/project2_img2.png' },
      { name: 'assets/img/project2_img1.png' },
      { name: 'assets/img/project2_img3.png' },
      { name: 'assets/img/project2_img4.png' }
    ]
  }

  ngOnInit() {

  }

  navigateToWebsite() {
    window.location.href = 'http://alexandranovikova.com/landingpage';
  }

  navigateToInfoPage() {
    window.location.href = 'http://alexandranovikova.com/infopage';
  }

}
