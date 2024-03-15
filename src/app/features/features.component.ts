import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms'; // Add this line

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  sliderValue = 50;
}
