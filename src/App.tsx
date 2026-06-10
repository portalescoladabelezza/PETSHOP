/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Services from './components/Services';
import Products from './components/Products';
import BookingSteps from './components/BookingSteps';
import About from './components/About';
import BookingCTA from './components/BookingCTA';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-orange/20 selection:text-brand-orange">
      {/* 1. Header component */}
      <Header />

      {/* Main layout */}
      <main className="flex-grow">
        {/* 2. Hero banner */}
        <Hero />

        {/* 3. Highlighting text bar */}
        <Highlights />

        {/* 4. Services list section */}
        <Services />

        {/* 5. Products in-prominence panel */}
        <Products />

        {/* 6. Booking sequential guide */}
        <BookingSteps />

        {/* 7. About biographical panel */}
        <About />

        {/* 8. Conversion action bar */}
        <BookingCTA />

        {/* 9. Address and schedule details */}
        <ContactLocation />
      </main>

      {/* 10. Footer panel */}
      <Footer />

      {/* 11. Custom Floating WhatsApp Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}

