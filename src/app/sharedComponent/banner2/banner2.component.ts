import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.scss']
})
export class Banner2Component implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    items:1,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navText: ['', ''],
    // nav: true,
    mouseDrag:true,
    dots:false,
    navSpeed:700,
    animateOut: 'fadeOut',
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
  }



  bannerResult: any= [];
  isLoading=true;

  constructor(private service:MovieServiceService){}
  ngOnInit(): void {
   this.bannerData();
  }

  bannerData(){
    this.service.bannerApiData().subscribe(res=>{
      console.log(res,'bannerresult#');
      this.bannerResult=res.results;
      this.isLoading=false;
    })
  }

}
