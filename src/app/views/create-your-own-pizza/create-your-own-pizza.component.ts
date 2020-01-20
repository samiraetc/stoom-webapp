import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PizzaOrderService, IPizza } from '@shared/services/pizza-order.service';
import { PizzaSizeService, IPizzaSize } from '@shared/services/pizza-size.service';
import { Observable } from 'rxjs';
import { PizzaDoughService, IPizzaDough } from '@shared/services/pizza-dough.service';
import { IPizzaIngredient, PizzaIngredientsService } from '@shared/services/pizza-ingredient.service';
import { IWeekPromo, WeekPromoService } from '@shared/services/week-promo.service';


@Component({
  selector: 'app-create-your-own-pizza',
  templateUrl: './create-your-own-pizza.component.html',
  styleUrls: ['./create-your-own-pizza.component.scss']
})
export class CreateYourOwnPizzaComponent implements OnInit {

  itens = [];
  print = [];
  pizzaSize$: Observable<IPizzaSize[]>;
  pizzaDough$: Observable<IPizzaDough[]>;
  pizzaIngredient$: Observable<IPizzaIngredient[]>;
  weekPromo$: Observable<IWeekPromo>;

  day: string;

  


  constructor(private _formBuilder: FormBuilder,
    private pizzaOrderService: PizzaOrderService,
    private pizzaSizeService: PizzaSizeService,
    private pizzaDoughService: PizzaDoughService,
    private pizzaIngredientsService: PizzaIngredientsService,
    private weekPromoService: WeekPromoService) {}

  firstFormGroup: FormGroup;
  segundoFormGroup: FormGroup;
  terceiroFormGroup: FormGroup;
  quartoFormGroup: FormGroup;

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.segundoFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.terceiroFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

    this.quartoFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });

  
   
    
      
  }

  getAllPizzaSize() {
    this.pizzaSize$ = this.pizzaSizeService.findAll();
  }

  getAllPizzaDough() {
    this.pizzaDough$ = this.pizzaDoughService.findAll();
  }

  getAllPizzaIngredient() {
    this.pizzaIngredient$ = this.pizzaIngredientsService.findAll();
  }

  getFindIDWeekPromo() {
    this.day = new Date().getDay().toString();
    this.weekPromoService.findById(this.day).subscribe(console.log);
  }

  save(): void {
    const number = Math.floor(Math.random() * 10000) + 1
    const pizza: IPizza = {
      id: number.toString(),
      name: this.firstFormGroup.controls['firstCtrl'].value,
      size: this.segundoFormGroup.controls['secondCtrl'].value,
      dough: this.terceiroFormGroup.controls['thirdCtrl'].value,
      ingredients: this.quartoFormGroup.controls['fourthCtrl'].value,
      
    };

    this.pizzaOrderService.save(pizza).subscribe(console.log);

    this.pizzaOrderService.findById(number.toString()).subscribe(console.log);

    this.pizzaOrderService.findAll().subscribe(console.log);

    this.pizzaOrderService.delete('1');
  
  }


    
  


  


}
