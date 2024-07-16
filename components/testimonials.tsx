import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Technical Overview</div>

            <h1 className="h2 mb-4">How it Works</h1>
            <p className="text-xl text-gray-400">A technical overview of the Dohko protocol</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <div className="h4">Network Architecture</div>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Dohko utilizes a decentralized network of node operators to create a scalable infrastructure for verifiable computation. This distributed architecture ensures high availability and resilience, effectively creating a powerful, decentralized supercomputer for complex ZK proof generation and ML inference tasks.

              </blockquote>

            </div>

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <div className="h4">Proof Generation Process</div>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">When a computation request is submitted, Dohko breaks it down and distributes tasks across the network for parallel processing. Dohko enables rapid proof generation for large computational graphs, resulting in succinct, verifiable proofs without revealing underlying data.

              </blockquote>

            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <div className="h4">Interoperable</div>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Dohko is designed for seamless integration with existing blockchain networks, smart contract platforms, and ML frameworks. We provide robust APIs and SDKs, allowing developers to easily incorporate Dohko's verifiable computation capabilities into their applications across various platforms.
              </blockquote>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
