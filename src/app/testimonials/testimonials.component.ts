import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


import 'owl.carousel';

declare var $: any;
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})

export class TestimonialsComponent {
  users = [{
    name: 'Michael Mezzio',
    description: 'Matt and his workers did a fantastic job. Started on time and kept to the schedule he told us even with a couple of rainy days. We even added in a couple of extra things and Matt’s reply each time was always “no problem “. We highly recommend him',
    image: 'assets/mezzio_test.jpg',
    rating: 5 // Add rating property
  },
  {
    name: 'Brittany Lynn',
    description: 'We couldn\'t be happier with our retaining wall! Matt and his team were very professional, efficient and trustworthy!! We highly recommend them!!!!',
    image: 'assets/Lynn_test.jpg',
    rating: 5 // Add rating property
  }

  ];

  chunkedUsers = this.chunkArray(this.users, 4);

  // Function to chunk the array into groups of size
  chunkArray(array: any[], size: number): any[] {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
      chunkedArr.push(array.slice(index, size + index));
      index += size;
    }
    return chunkedArr;
  }
}