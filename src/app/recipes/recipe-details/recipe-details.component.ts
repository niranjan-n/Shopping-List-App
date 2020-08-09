import { Component, OnInit, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
