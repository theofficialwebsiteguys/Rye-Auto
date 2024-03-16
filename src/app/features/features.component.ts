import { Component, AfterViewInit } from '@angular/core';



@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent implements AfterViewInit {
  ngAfterViewInit() {
    const container1 = document.querySelector('.container') as HTMLElement;
    const slider1 = document.querySelector('.slider') as HTMLInputElement;
    slider1.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      container1.style.setProperty('--position', `${target.value}%`);
    });

    const container2 = document.querySelector('.container2') as HTMLElement;
    const slider2 = document.querySelector('.slider2') as HTMLInputElement;
    slider2.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      container2.style.setProperty('--position', `${target.value}%`);
    });

    const container3 = document.querySelector('.container3') as HTMLElement;
    const slider3 = document.querySelector('.slider3') as HTMLInputElement;
    slider3.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      container3.style.setProperty('--position', `${target.value}%`);
    });
  }
}
