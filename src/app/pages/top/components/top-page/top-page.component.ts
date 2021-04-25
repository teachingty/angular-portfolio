import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css']
})
export class TopPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images2 = [
    {
        path: '../../../../../assets/photo-1444065707204-12decac917e8.jfif',
    },
    {
        path: '../../../../../assets/photo-1445452916036-9022dfd33aa8.jfif',
    },
    {
        path: '../../../../../assets/photo-1443996104801-80c82e789b18.jfif',
    },
    {
        path: '../../../../../assets/photo-1505839673365-e3971f8d9184.jfif',
    },
    {
        path: '../../../../../assets/photo-1545420333-23a22b18b8fa.jfif',
    },
];

//   images2 = [
//     {
//         path: '/assets/photo-1444065707204-12decac917e8.jfif',
//     },
//     {
//         path: '/assets/photo-1445452916036-9022dfd33aa8.jfif',
//     },
//     {
//         path: '/assets/photo-1443996104801-80c82e789b18.jfif',
//     },
//     {
//         path: '/assets/photo-1505839673365-e3971f8d9184.jfif',
//     },
//     {
//         path: '/assets/photo-1545420333-23a22b18b8fa.jfif',
//     },
// ];

}
