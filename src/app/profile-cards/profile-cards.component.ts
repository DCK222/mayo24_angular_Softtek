import { Component, Input } from '@angular/core';
import { User } from '../_servicios/api.service';

@Component({
  selector: 'app-profile-cards',
  standalone: true,
  imports: [],
  templateUrl: './profile-cards.component.html',
  styleUrl: './profile-cards.component.css'
})
export class ProfileCardsComponent {
  bgColor = 'indigo';

  @Input() user: User | undefined;
  
 

  handleClick() {
    this.bgColor = 'tomato';
  }
}
