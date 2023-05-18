import { types } from 'react-bricks/frontend'

import Hero from './hero'

import ProductList from './product/productList'
import ProductItem from './product/productItem'

import Testimonials from './testimonial/testimonials'
import TestimonialItem from './testimonial/testimonialItem'

import ContactUs from './contactUs'

const bricks: types.Theme[] = [
  {
    themeName: 'Custom Theme 1',
    categories: [
      {
        categoryName: 'Components',
        bricks: [
          Hero,
          ProductList,
          ProductItem,
          Testimonials,
          TestimonialItem,
          ContactUs,
        ], // Custom Bricks
      },
    ],
  },
]

export default bricks
