import { Component, OnInit, OnChanges } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]= [
    new Ingredient("apples",10), new Ingredient("tomatoes",20)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  
  onItemAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }


}
