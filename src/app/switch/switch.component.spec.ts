import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
  let component: SwitchComponent;
  let fixture: ComponentFixture<SwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia cambiar el valor del boolean en cada click', () => {
    expect(component.active).toBeTrue();
    component.handleClick();
    expect(component.active).toBeFalse();
    component.handleClick();
    expect(component.active).toBeTrue();
});
it('deberia modificarse el mensaje cuando cambiamos el boolean', () => {
  expect(component.message)
      .withContext('Antes del click')
      .toMatch(/encendido/);  // Assume the initial state includes "encendido"
  component.handleClick();
  expect(component.message)
      .withContext('Después del click')
      .toMatch(/apagado/);  // Check for the new state, assuming it should now match "apagado"
});
});
