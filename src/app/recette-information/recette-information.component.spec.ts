import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteInformationComponent } from './recette-information.component';

describe('RecetteInformationComponent', () => {
  let component: RecetteInformationComponent;
  let fixture: ComponentFixture<RecetteInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetteInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
