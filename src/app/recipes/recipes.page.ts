import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Menudo Express',
      imageUrl: 'https://panlasangpinoy.com/wp-content/uploads/2017/12/Filipino-Pork-Menudo-Recipe-.jpg',
      ingredients: ['Pork bits', 'carrots', 'Menudo Mix']
    },
    {
      id: 'r2',
      title: 'Spaghetti Special',
      imageUrl: 'https://pngimg.com/uploads/spaghetti/spaghetti_PNG23.png',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
    {
      id: 'r3',
      title: 'Spaghetti Special 2',
      imageUrl: 'https://pngimg.com/uploads/spaghetti/spaghetti_PNG23.png',
      ingredients: ['Spaghetti', 'Pork', 'Tomatoes']
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
