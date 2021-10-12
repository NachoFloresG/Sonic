import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sg',
  templateUrl: './sg.page.html',
  styleUrls: ['./sg.page.scss'],
})
export class SGPage implements OnInit {

  constructor() { }

  option = {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay:true,
  }

  ngOnInit() {
  }

}
