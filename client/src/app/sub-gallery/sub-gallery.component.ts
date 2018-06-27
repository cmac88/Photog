import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-gallery',
  templateUrl: './sub-gallery.component.html',
  styleUrls: ['./sub-gallery.component.css']
})
export class SubGalleryComponent implements OnInit {
image = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  constructor() { }

  ngOnInit() {
  }

}
