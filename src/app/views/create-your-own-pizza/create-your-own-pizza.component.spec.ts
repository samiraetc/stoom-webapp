import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYourOwnPizzaComponent } from './create-your-own-pizza.component';

describe('MontePizzaComponent', () => {
  let component: CreateYourOwnPizzaComponent;
  let fixture: ComponentFixture<CreateYourOwnPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateYourOwnPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateYourOwnPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
