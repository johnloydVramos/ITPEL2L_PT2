/* eslint-disable arrow-body-style */
import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
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
      title: 'Special Chicken Adobo',
      imageUrl: 'https://irepo.primecp.com/2019/05/411600/Filipino-Adobo-Chicken_ExtraLarge1000_ID-3219461.jpg?v=3219461',
      ingredients: ['Chicken', 'Soy Sauce', 'Vinegar']
    }
  ];

  constructor() { }
  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
   return{
     ...this.recipes.find(recipe => {return recipe.id === recipeId;})
   };
}
onDeleteRecipe(recipeId: string){
  this.recipes = this.recipes.filter(recipe =>{
    return recipe.id !== recipeId;
  });
}
}
