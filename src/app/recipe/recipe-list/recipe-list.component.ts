import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Village salad', 'yummy food', 'https://kaynutrition.com/wp-content/uploads/2020/07/greek-village-salad-horiatiki.jpg' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
