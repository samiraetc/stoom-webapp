import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateYourOwnPizzaComponent } from '@views/create-your-own-pizza/create-your-own-pizza.component';
import { HomeComponent } from '@views/home/home.component';
import { RecommendationPizzaComponent } from '@views/recommendation-pizza/recommendation-pizza.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Pizzaria Mamma Mia' }
  },
  {
    path: 'montar-pizza',
    component: CreateYourOwnPizzaComponent,
    data: { title: 'Monte sua pizza - Pizzaria Mamma Mia' }
  },
  {
    path: 'recomendacao',
    component: RecommendationPizzaComponent,
    data: { title: 'Recomendação - Pizzaria Mamma Mia' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
