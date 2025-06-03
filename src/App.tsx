import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
    </Layout>
  );
}

export default App;