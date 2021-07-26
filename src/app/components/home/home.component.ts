import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  product:any = {
    "prodNo": 10,
        "prodNameAr": "product 3 Ar",
        "prodNameEn": "product 3 En",
        "prodName": "product 3 Ar",
        "prodDscAr": "text text 3 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2",
        "prodDsc": null,
        "styleNo": 1,
        "finishNo": 4,
        "prodAvailability": 1,
        "prodPrice": 200,
        "prodQuantity": 4,
        "dimHight": 11,
        "dimWidth": 11,
        "dimDepth": 11,
        "createAdm": 1,
        "createOn": "2021-07-05T14:51:42.306+00:00",
        "prodDscEn": "1111",
        "catNo": 1,
        "catName": "غرف نوم",
        "styleName": "ورنيش",
        "finishName": "ورنيش",
        "images": [],
        "prodColorList": [
          {
            "colorImg": "img.jpg",
            "secondColorNo": null,
            "colorNo": 7,
            "prodNo": 10,
            "secondColorNm": null,
            "colorNm": "اخضر21"
          },
          {
            "colorImg": "img2.jpg",
            "secondColorNo": 7,
            "colorNo": 3,
            "prodNo": 10,
            "secondColorNm": "اخضر21",
            "colorNm": "1احمر"
          },
          {
            "colorImg": "img4.jpg",
            "secondColorNo": 7,
            "colorNo": 4,
            "prodNo": 10,
            "secondColorNm": "اخضر21",
            "colorNm": "اخضر2"
          }
        ],
        "prodMaterialList": [
          {
            "prodMatrlNo": 1,
            "materialNo": 2,
            "materialNm": null,
            "prodNm": null,
            "prodNo": 10
          }
        ],
        "taxNo": 1,
        "discountNo": 1,
        "warranty": 5,
        "relatedProducts": null,
        "discountValue": null,
        "taxValue": null,
        "viewsCount": 0,
        "prodImages": null
  };

  constructor() { }

  ngOnInit(): void {
  }

}
