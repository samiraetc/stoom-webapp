import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationPizzaComponent } from './recommendation-pizza.component';

describe('RecommendationPizzaComponent', () => {
  let component: RecommendationPizzaComponent;
  let fixture: ComponentFixture<RecommendationPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
