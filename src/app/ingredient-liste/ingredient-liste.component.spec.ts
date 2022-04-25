import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientListeComponent } from './ingredient-liste.component';

describe('IngredientListeComponent', () => {
  let component: IngredientListeComponent;
  let fixture: ComponentFixture<IngredientListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
