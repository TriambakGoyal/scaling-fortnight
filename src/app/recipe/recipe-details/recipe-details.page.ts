import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  singleRecipe:Recipe;
  constructor(private activatedRoute:ActivatedRoute,
    private recipeService:RecipeService,
    private router:Router) { }

  ngOnInit() {

    // paramMap is An observable to extract the activated route and the id from the route
    this.activatedRoute.paramMap.subscribe(parMap=>
     {
       if(!parMap.has('recipeid'))
       {
         
         return;
       }

       const RecipeID= parMap.get('recipeid');
       this.singleRecipe=this.recipeService.getOneRecipe(RecipeID);
     } )
  }

  delete()
  {
    this.recipeService.deleteRecipe(this.singleRecipe.id);
    console.log(this.singleRecipe.id)
    this.router.navigate(['/recipe']);
  }

}
