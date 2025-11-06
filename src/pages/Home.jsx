import React from 'react'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/layout/Hero'
import AiTools from '../components/layout/AiTools'
import Footer from '../components/layout/Footer'
import Pricing from '../components/layout/Pricing'
import Testimonial from '../components/layout/Testimonials'
import FadeInWhenVisible from '../components/utils/FadeWhenVisible'

function Home() {
  return (
    <>
      <Navbar />

      <FadeInWhenVisible>
        <section id="hero">
          <Hero />
        </section>
      </FadeInWhenVisible>

      
      <FadeInWhenVisible>
        <section id="features">
          <AiTools />
        </section>
      </FadeInWhenVisible>

      
      <FadeInWhenVisible>
        <section id="pricing">
          <Pricing />
        </section>
      </FadeInWhenVisible>

    
      <FadeInWhenVisible>
        <section id="testimonials">
          <Testimonial />
        </section>
      </FadeInWhenVisible>

  
      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>
    </>
  )
}

export default Home
