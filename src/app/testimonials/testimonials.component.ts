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
    role: '',
    description: 'Matt and his workers did a fantastic job. Started on time and kept to the schedule he told us even with a couple of rainy days. We even added in a couple of extra things and Matt’s reply each time was always “no problem “. We highly recommend him',
    image: '/assets/Lynn_test.jpg'
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
  },
  {
    name: 'Brittany Lynn',
    role: '',
    description: 'We couldn\'t be happier with our retaining wall! Matt and his team were very professional, efficient and trustworthy!! We highly recommend them!!!!',
    image: '/assets/mezzio_test.jpg'
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