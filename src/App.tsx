import React from 'react';
import Hero from './components/Hero';
import PersonalitySection from './components/PersonalitySection';
import WhatIDoSection from './components/WhatIDoSection';
import SelectedWorkSection from './components/SelectedWorkSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>Charan's Portfolio | UI/UX, Dev, Branding</title>
        <meta name="description" content="Portfolio of Charan: UI/UX Designer, Developer, and Branding Specialist. Explore projects in design, development, and branding." />
        <meta name="keywords" content="UI/UX, React, Developer, Portfolio, Branding, Charan, Gemini AI, Health Tech, Web Design" />
        <meta property="og:title" content="Charan's Portfolio" />
        <meta property="og:description" content="Showcasing UI/UX, development, and branding projects by Charan." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/src/Assets/me1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen bg-cosmic-gradient">
        <main>
          <Hero />
          <PersonalitySection />
          <WhatIDoSection />
          <SelectedWorkSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;