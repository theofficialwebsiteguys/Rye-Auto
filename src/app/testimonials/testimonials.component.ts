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
    name: 'Bruce Hardy',
    role: 'Software Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/PKHvlRS.jpg'
  },
  {
    name: 'Mark Smith',
    role: 'Web Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/w2CKRB9.jpg'
  },
  {
    name: 'Veera Duncan',
    role: 'Software Architect',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/ACeArwY.jpg'
  },
  {
    name: 'John Hardy',
    role: 'Software Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/PKHvlRS.jpg'
  },
  {
    name: 'greg Smith',
    role: 'Web Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/w2CKRB9.jpg'
  },
  {
    name: 'jean Duncan',
    role: 'Software Architect',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/ACeArwY.jpg'
  },
  {
    name: 'jean Duncan',
    role: 'Software Architect',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/ACeArwY.jpg'
  },
  {
    name: 'jean Duncan',
    role: 'Software Architect',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/ACeArwY.jpg'
  },
  {
    name: 'Bruce Hardy',
    role: 'Software Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/PKHvlRS.jpg'
  },
  {
    name: 'Mark Smith',
    role: 'Web Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/w2CKRB9.jpg'
  },
  {
    name: 'Veera Duncan',
    role: 'Software Architect',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/ACeArwY.jpg'
  },
  {
    name: 'John Hardy',
    role: 'Software Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/PKHvlRS.jpg'
  },
  {
    name: 'greg Smith',
    role: 'Web Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/w2CKRB9.jpg'
  },
  {
    name: 'jean Duncan',
    role: 'Software Architect',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/ACeArwY.jpg'
  },
  {
    name: 'jean Duncan',
    role: 'Software Architect',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/ACeArwY.jpg'
  },
  {
    name: 'jean Duncan',
    role: 'Software Architect',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: 'https://i.imgur.com/ACeArwY.jpg'
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