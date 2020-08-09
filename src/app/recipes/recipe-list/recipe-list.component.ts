import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected= new EventEmitter<Recipe>();
    recipes: Recipe[] = [
    new Recipe('Pasta','Recipe for pasta','https://pinchofyum.com/wp-content/uploads/Vegan-Vodka-Pasta-Square.jpg')
    ,new Recipe('Pizza','Recipe for pizza','https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  recipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
