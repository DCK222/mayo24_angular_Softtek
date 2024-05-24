import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  active: boolean = true;

  get message() {
    return this.active ? 'encendido' : 'apagado';
  }

  handleClick() {
    this.active = !this.active;
  }
}
