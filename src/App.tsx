
import Header from '@/components/oldpress-com/components/Header';
import Preloader from '@/components/oldpress-com/components/Preloader';
import HeroSection from '@/components/oldpress-com/components/HeroSection';
import InfoSection from '@/components/oldpress-com/components/InfoSection';
import MomentSection from '@/components/oldpress-com/components/MomentSection';
import DuoContentSection from '@/components/oldpress-com/components/DuoContentSection';
import ServicesSection from '@/components/oldpress-com/components/ServicesSection';
import ExperiencesSection from '@/components/oldpress-com/components/ExperiencesSection';
import PhotoCollageSection from '@/components/oldpress-com/components/PhotoCollageSection';
import FaqSection from '@/components/oldpress-com/components/FaqSection';
import ContactUsSection from '@/components/oldpress-com/components/ContactUsSection';
import Footer from '@/components/oldpress-com/components/Footer';
import '@/components/oldpress-com/styles.css';

export default function App() {
  return (
    <>
      <Header />
      <main className="page pt-20" data-id="t-219">
        <Preloader />
        <HeroSection />
        <InfoSection />
        <MomentSection />
        <DuoContentSection />
        <ServicesSection />
        <ExperiencesSection />
        <PhotoCollageSection />
        <FaqSection />
        <ContactUsSection />
      </main>
      <Footer />

    </>
  );
}
