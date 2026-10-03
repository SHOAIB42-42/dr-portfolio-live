// Dr. Farooq Portfolio v1.0.1 - Vercel Live Build
import React, { useState, useEffect } from 'react';
import { presetDoctors } from './data/presetDoctors';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ServicesSection from './components/ServicesSection';
import ScheduleSection from './components/ScheduleSection';
import PublicationsSection from './components/PublicationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import AppointmentModal from './components/AppointmentModal';
import CVModal from './components/CVModal';
import AdminPanel from './components/AdminPanel';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  const [activeDoctor, setActiveDoctor] = useState(presetDoctors[0]);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [initialService, setInitialService] = useState('');
  const [initialLocation, setInitialLocation] = useState('');

  // Secret Admin Access (Ctrl + Shift + A OR #admin in URL)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };

    const checkSecretUrl = () => {
      if (window.location.hash === '#admin' || window.location.search.includes('admin=true')) {
        setIsAdminOpen(true);
      }
    };

    checkSecretUrl();
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('hashchange', checkSecretUrl);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', checkSecretUrl);
    };
  }, []);

  const handleOpenAppointment = (serviceOrLocation = '') => {
    if (serviceOrLocation) {
      if (activeDoctor.practiceLocations.some(l => l.hospitalName === serviceOrLocation)) {
        setInitialLocation(serviceOrLocation);
        setInitialService('');
      } else {
        setInitialService(serviceOrLocation);
        setInitialLocation('');
      }
    } else {
      setInitialService('');
      setInitialLocation('');
    }
    setIsAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900 transition-colors duration-300">
      
      {/* Sticky Header Navigation */}
      <Navbar
        doctorData={activeDoctor}
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* Main Portfolio Sections */}
      <main>
        <Hero
          doctorData={activeDoctor}
          onOpenAppointment={() => handleOpenAppointment()}
          onOpenCV={() => setIsCVOpen(true)}
        />

        <AboutSection doctorData={activeDoctor} />

        <EducationSection doctorData={activeDoctor} />

        <ExperienceSection doctorData={activeDoctor} />

        <ServicesSection
          doctorData={activeDoctor}
          onOpenAppointment={handleOpenAppointment}
        />

        <ScheduleSection
          doctorData={activeDoctor}
          onOpenAppointment={handleOpenAppointment}
        />

        {activeDoctor.publications && activeDoctor.publications.length > 0 && (
          <PublicationsSection doctorData={activeDoctor} />
        )}

        {activeDoctor.testimonials && activeDoctor.testimonials.length > 0 && (
          <TestimonialsSection doctorData={activeDoctor} />
        )}
      </main>

      {/* Footer */}
      <Footer
        doctorData={activeDoctor}
        onOpenAppointment={() => handleOpenAppointment()}
      />

      {/* Interactive Modals */}
      <AppointmentModal
        doctorData={activeDoctor}
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        initialService={initialService}
        initialLocation={initialLocation}
      />

      <CVModal
        doctorData={activeDoctor}
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />

      <AdminPanel
        activeDoctor={activeDoctor}
        onUpdateDoctor={(updatedDoc) => setActiveDoctor(updatedDoc)}
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Floating WhatsApp Button (Bottom Right) */}
      <FloatingWhatsApp doctorData={activeDoctor} />

    </div>
  );
}
