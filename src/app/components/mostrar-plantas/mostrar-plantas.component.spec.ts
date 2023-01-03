import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPlantasComponent } from './mostrar-plantas.component';

describe('MostrarPlantasComponent', () => {
  let component: MostrarPlantasComponent;
  let fixture: ComponentFixture<MostrarPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPlantasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
