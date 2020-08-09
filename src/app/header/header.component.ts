import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()  loadedFeature=new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(feature:String){
    this.loadedFeature.emit(feature);
  }

}
