import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false}) nameElementRef :ElementRef;
  @ViewChild('amountInput',{static:false}) amountElementRef :ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }
  addItem(){
    const ingName= this.nameElementRef.nativeElement.value;
    const ingAmount= this.amountElementRef.nativeElement.value;
    const ingredient =  new Ingredient(ingName,ingAmount);
    this.ingredientAdded.emit(ingredient);
  }

}
