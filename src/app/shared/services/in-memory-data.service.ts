import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as dataBase  from '../mock/data-base';


export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    return { 
      'pizza-order': dataBase.pizza_orders,
      'pizza-size': dataBase.pizza_size,
      'pizza-dough': dataBase.pizza_dough,
      'pizza-ingredient': dataBase.pizza_ingredients,
      'week-promo': dataBase.week_promo,
    };
  }

  genId(): number {
    return Math.round(Math.random() * 1000000);
  }

}
