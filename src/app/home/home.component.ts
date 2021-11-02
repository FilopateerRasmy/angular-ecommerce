import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, AfterViewInit {
@ViewChild('matCarouselSlide') MatCarousel!:MatCarousel;
  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {'image': '../assets/pexels-andrea-piacquadio-919436.jpg'},
    {'image': '../assets/pexels-nataliya-vaitkevich-6214384.jpg'},
    {'image': '../assets/pexels-photomix-company-230544.jpg'},
    {'image': '../assets/pexels-kindel-media-6994108.jpg'},
  
  ];
ngAfterViewInit(){
  console.log(this.MatCarousel)
}
}
