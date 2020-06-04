import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.scss']
})
export class DetailProductsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  clickSilde(event){
    console.log(event, 'event target') // lấy hết trong sự kiện
    let imgMain = document.getElementById('img_Main_Side')
    imgMain.setAttribute("src",event.srcElement.currentSrc) //tìm trong sự kiện
  }
}
