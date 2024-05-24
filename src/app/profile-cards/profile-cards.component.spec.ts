import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { CommonModule } from '@angular/common'; // Example: Needed if using *ngIf, *ngFor, etc.

import { ProfileCardsComponent } from './profile-cards.component';

describe('ProfileCardsComponent', () => {
  let component: ProfileCardsComponent;
  let fixture: ComponentFixture<ProfileCardsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule, // Include other necessary modules
        ProfileCardsComponent // Import the standalone component directly
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ProfileCardsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges(); // Detect changes to handle initial data binding and lifecycle hook execution
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia mostrar el nombre completo', () => {
    const headerDe = fixture.debugElement.query(By.css('h1'));
    const headerEl = headerDe.nativeElement;
    const testUser = {
        _id: '12345',
        first_name: 'Mario',
        last_name: 'Girón',
        email: 'mario@gmail.com',
        username: 'mariog',
        id: 3,
        image: '',
        password: '1212'
    };
    component.user = testUser;
    fixture.detectChanges();
    expect(headerEl.textContent).toBe(`${testUser.first_name} ${testUser.last_name}`);
  });

  it('deberia modificar el color de fondo cuando hagamos click en el botón', () => {
    const btnDe = fixture.debugElement.query(By.css('#btnSelectUser'));
    const divDe = fixture.debugElement.query(By.css('.user-card'));
    btnDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(divDe.nativeElement.style.backgroundColor).toBe('tomato');
  });
});
