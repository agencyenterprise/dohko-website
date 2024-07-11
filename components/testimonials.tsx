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
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Coming Soon</div>

            <h1 className="h2 mb-4">So easy, your grandma could do it.</h1>
            <p className="text-xl text-gray-400">Anyone with a computer and an internet connection can easily earn passive income by running the Dohko client. Set it. Forget it. Profit. </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <div className="h4">Step 1 - Connect</div>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Download the Dohko client and connect your idle CPU to our secure network.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">MacOS</a> |
                <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Linux</a> |
                <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Windows</a>
              </div>
            </div>

            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <div className="h4">Step 2 - Activate</div>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Your computer works on verifying computations and generating proofs in the background.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Learn More</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Read the docs</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <div className="h4">Step 3 - Earn</div>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Once your proof has been verified by the network, rewards will be added to your account.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Learn More</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Rewards</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
