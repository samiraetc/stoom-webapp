import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateYourOwnPizzaComponent } from './create-your-own-pizza/create-your-own-pizza.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '@core/core.module';
import { MatSliderModule, MatStepperModule, MatCardModule, MatButtonModule,
   MatFormFieldModule, MatInputModule, MatCheckboxModule, MatRadioModule, MatToolbarModule, MatListModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RecommendationPizzaComponent } from './recommendation-pizza/recommendation-pizza.component';



@NgModule({
  declarations: [CreateYourOwnPizzaComponent, HomeComponent, RecommendationPizzaComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    MatSliderModule,
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    
  ]
})
export class ViewsModule { }
