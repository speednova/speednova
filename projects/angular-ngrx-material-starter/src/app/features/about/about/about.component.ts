// import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Component, AfterViewInit } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

declare var Swiper: any;

@Component({
  selector: 'anms-about',
  template: `



      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="assets/logo.svg" style=" width: 30%; "></div>
          <div class="swiper-slide"><img src="assets/logo.svg" style=" width: 30%; "></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>

`,
  styleUrls: ['./swiper.min.scss', './about.component.scss' ]
})





export class AboutComponent implements AfterViewInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  releaseButler = require('../../../../assets/release-butler.png');
  name = 'Angular with Swiper';
  
  constructor() {}


  ngAfterViewInit() {
  
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
    //  centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });





    
  }
  
}
