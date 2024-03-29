import { Component } from "@angular/core";
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: "app-notifier",
  standalone: true,
  imports: [MatBadgeModule, MatIconModule, MatButtonModule],
  templateUrl: "./notifier.component.html",
  styleUrl: "./notifier.component.css",
})
export class NotifierComponent {
  count: number = 0;
  incrementBadge(){
    this.count++;
  }
}
