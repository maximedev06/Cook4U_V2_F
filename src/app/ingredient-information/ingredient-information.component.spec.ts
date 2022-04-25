import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInformationComponent } from './ingredient-information.component';

describe('IngredientInformationComponent', () => {
  let component: IngredientInformationComponent;
  let fixture: ComponentFixture<IngredientInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
