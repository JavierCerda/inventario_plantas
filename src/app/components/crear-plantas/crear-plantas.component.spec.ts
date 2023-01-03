import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlantasComponent } from './crear-plantas.component';

describe('CrearPlantasComponent', () => {
  let component: CrearPlantasComponent;
  let fixture: ComponentFixture<CrearPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPlantasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
