import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input()
  buttonName: string = 'test';

  
}
