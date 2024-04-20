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
    name: 'Daniel W.',
    description: 'I had an amazing experience today. I\'m a contractor with an eight-year-old work truck that sees sawdust, mud, dog hair, etc. and I was blown away with the attention to detail from the interior of my truck to the exterior to the undercoating. Customer service was spectacular. My truck looks just like I took it off to showroom Floor.',
    image: 'assets/daniel.jpg',
    rating: 5 // Add rating property
  },
  {
    name: 'Tom S.',
    description: 'I should have written this earlier and have used Rye Auto Detailing for a number of years. They do my small boat and vehicles regularly and I am a stickler for polish and professionalism. I could not be happier with their service and responsiveness. Thai and his crew\'s work ethic never disappoint and I am pleased to offer this unsolicited endorsement of their service.',
    image: 'assets/tom.jpg',
    rating: 4 // Add rating property
  },
  {
    name: 'Jaimi C.',
    description: 'I recently had my Ford Edge detailed by the team over at Rye Auto Detailing and I couldn\'t be happier! The process was simple and they worked around my schedule. They picked it up from my work and brought it back after it was all finished. Good quality work for a great price! Feels like I\'m driving a brand spanking new car!',
    image: 'assets/jaimi.png',
    rating: 5 // Add rating property
  },
  {
    name: 'Rebecca G.',
    description: 'The only people I let detail my vehicle. Had my suv looking and smelling like new!! Rye Detailing does not disappoint',
    image: 'assets/rebecca.png',
    rating: 5 // Add rating property
  },
  {
    name: 'N I.',
    description: 'I had my vehicle detailed today. Came out in pristine condition. The owner was very friendly. I will be a returning customer. Thank you',
    image: 'assets/NI.jpg',
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