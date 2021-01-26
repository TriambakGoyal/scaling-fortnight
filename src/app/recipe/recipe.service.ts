import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipe:Recipe[]=[
    {
      id: '1',
      name:"Jalebi",
      location:"Bhopal"
    },
    {
      id: '2',
      name:"Poha",
      location:"Indore"
    },
    {
      id: '3',
      name:"Pav bhaji",
      location:"Mumbai"
    },

  ];
  constructor() { }

  getAll(){
    // [...this.recipe] creates a copy of the above recipe array
    return [...this.recipe];
  } 

  getOneRecipe(recipeid:string)
  {
    // Curly braces crates a copy and send that
    // find function is performed on each item in the Recipe array
    return {
      ...this.recipe.find(recipe => {
        return recipeid === recipe.id;
      })
    }
  }

  deleteRecipe(recipeid:string)
  {
    this.recipe=this.recipe.filter(recipeID=>
      {
        console.log(recipeID.id)
        console.log(recipeid)

        console.log(recipeID.id != recipeid)
        return recipeID.id !== recipeid;
      })
      console.log(this.recipe)
  }
}
