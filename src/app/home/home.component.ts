import { Component } from '@angular/core';

import { ContactComponent } from '../contact/contact.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContactComponent,
    TestimonialsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
