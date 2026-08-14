import React from 'react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import ProductGrid from '../products/ProductGrid'
import { getFeaturedProducts } from '../../data/products'

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts()

  if (featuredProducts.length === 0) return null

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          title="Featured Products"
          subtitle="Our Best-Selling Solutions"
        />

        <div className="mt-12">
          <ProductGrid products={featuredProducts} columns={3} />
        </div>
      </Container>
    </section>
  )
}

export default FeaturedProducts