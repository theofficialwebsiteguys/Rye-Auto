import { Component } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
}
