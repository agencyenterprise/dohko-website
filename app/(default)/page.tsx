export const metadata = {
  title: 'Dohko - The next generation of computing for a decentralized future',
  description: 'Dohko is making verifiable machine learning accessible, secure, and cost-effective for all.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Zigzag />
      <Newsletter />
    </>
  )
}
