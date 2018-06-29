import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
user: any;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.user={name:'', password:''}
  }

  onSubmit(){
    let person = this.user.password
    let observable = this._http.getUser(this.user)
    observable.subscribe(data=>{
      // console.log(data.data.password)
      if(status== 'bad'){
        console.log(data)
      }
      else if(person == data.data.password){
        //route me to gallery
      }
    })
  }
}
