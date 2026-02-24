import { useRef, useState } from 'react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Vintage wedding memories',
      image: 'https://oldpress.com/wp-content/uploads/2025/06/Vintage-wedding-memories.webp',
      alt: 'Wedding and B2C',
      description: [
        '– ELEGANT PHOTOGRAPHERS MATCH YOUR WEDDING STYLE',
        '– RETRO NEWSPAPERS = UNIQUE KEEPSAKES FOR GUESTS',
        '– ALL PHOTOS ARE SAVED & CAN BE RESENT DIGITALLY',
        '– FITS INTO ANY VENUE: 0.5 M², NO POWER OR INTERNET NEEDED',
        '– INSTANT PRINT: NEWSPAPERS PRINTED IN 7 SECONDS',
        '– UP TO 100 CUSTOM PRINTS PER HOUR',
        'AUTONOMOUS. ELEGANT. UNFORGETTABLE.'
      ]
    },
    {
      title: 'Corporate events experience',
      image: 'https://oldpress.com/wp-content/uploads/2025/06/Corporate-events-experience.webp',
      alt: 'Corporate and B2B',
      description: [
        '– CUSTOM BRANDED HEADLINES FOR YOUR COMPANY',
        '– HIGH ENGAGEMENT FOR CORPORATE MARKETING',
        '– PROFESSIONAL LIGHTING & SETUP INCLUDED',
        '– PERFECT FOR PRODUCT LAUNCHES & ROADSHOWS',
        '– DATA ACCUMULATION FOR DIGITAL MARKETING',
        '– SEAMLESS INTEGRATION INTO EVENT FLOW',
        'PROFESSIONAL. BRANDED. ENGAGING.'
      ]
    },
    {
      title: 'Festival & Large scale events',
      image: 'https://oldpress.com/wp-content/uploads/2025/06/Festival-retro-moments.webp',
      alt: 'Commercial activations',
      description: [
        '– HIGH CAPACITY PRINTING SYSTEM',
        '– MOBILE GEAR FOR STREET PHOTO MAGIC',
        '– WEATHERPROOF INDOOR & OUTDOOR SETUP',
        '– VIRAL SOCIAL MEDIA SHARING INCLUDED',
        '– SPONSOR BRANDING ON EVERY NEWSPAPER',
        '– DUAL PRINTER SYSTEM FOR MAX SPEED',
        'SCALABLE. VIRAL. IMMERSIVE.'
      ]
    },
    {
      title: 'Live Retail & Mall Kiosks',
      image: 'https://oldpress.com/wp-content/uploads/2025/06/Celebrations-more.webp',
      alt: 'Mall kiosks',
      description: [
        '– PERMANENT KIOSK AT HIGH TRAFFIC LOCATIONS',
        '– BOOSTS MALL CUSTOMER DWELL TIME',
        '– LOW MAINTENANCE AUTONOMOUS OPERATION',
        '– ATTRACTIVE VINTAGE AESTHETIC DESIGN',
        '– CUSTOM THEMES FOR HOLIDAYS & SEASONS',
        '– INTEGRATED PAYMENT OPTIONS',
        'PERMANENT. STYLISH. PROFITABLE.'
      ]
    }
  ];

  return (
    <section className="services-wrapper py-16 md:py-32" id="services">
      <div className="services">
        {/* Header */}
        <div className="services__top mb-8 md:mb-12 border-b border-gray-100 pb-8">
          <div className="container mx-auto px-5 md:px-20">
            <div className="services__body">
              <h2 className="text-3xl md:text-6xl lg:text-7xl font-serif font-semibold leading-tight text-[#222020] uppercase tracking-tight">
                OUR SERVICES
              </h2>
            </div>
          </div>
        </div>

        {/* Services Horizontal Scroll on Mobile */}
        <div className="services__content">
          <div className="services__slider overflow-x-auto no-scrollbar snap-x snap-mandatory flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 md:px-20 pb-10">
            {services.map((service, index) => (
              <ServiceSlide key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

function ServiceSlide({ service }: { service: any; index: number }) {
  const slideRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardTap = () => {
    // Toggle expanded state on tap (for mobile)
    setIsExpanded(prev => !prev);
  };

  return (
    <div
      ref={slideRef}
      className="services__slide flex-shrink-0 w-[85vw] md:w-auto snap-center group cursor-pointer"
      onClick={handleCardTap}
    >
      <div className="services-card">
        <div className="services-card__image relative aspect-[4/5] md:aspect-[400/565] overflow-hidden rounded-sm transition-shadow duration-500 hover:shadow-2xl">
          <img
            decoding="async"
            src={service.image}
            alt={service.alt}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          {/* Tap indicator for mobile */}
          <div className={`absolute bottom-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center md:hidden transition-transform duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#222020" strokeWidth="2" strokeLinecap="round">
              <line x1="7" y1="2" x2="7" y2="12" />
              <line x1="2" y1="7" x2="12" y2="7" />
            </svg>
          </div>
        </div>

        <div className="services-card__content pt-6 pb-4 md:py-6">
          <div className="subtitle text-xl md:text-xl font-medium pb-4 text-[#222020] font-playfair italic capitalize flex items-center justify-between">
            <span>{service.title}</span>
            <svg
              className={`w-4 h-4 text-[#9d9a95] md:hidden transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>

          {/* Info - visible on tap (mobile) or hover (desktop) */}
          <div
            className={`services-card__info flex flex-col gap-6 transition-all duration-500 ease-in-out overflow-hidden
              md:opacity-0 md:translate-y-4 md:max-h-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:max-h-[600px]
              ${isExpanded ? 'max-h-[600px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 md:max-h-0'}`}
          >
            <p className="body-copy text-[11px] md:text-sm leading-[1.6] font-serif uppercase text-[#222020] tracking-wider pt-2">
              {service.description.map((line: string, i: number) => (
                <span key={i} className="block mb-0.5">{line}</span>
              ))}
            </p>
            <a
              href="#form"
              onClick={(e) => e.stopPropagation()}
              className="link flex items-center gap-2 text-sm md:text-base font-medium transition-all group/link"
            >
              <span className="relative pb-0.5 border-b border-[#222020]">
                Get in touch
              </span>
              <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" viewBox="0 0 18 18" fill="none">
                <path d="M1 17L17 1M17 1H1M17 1V17" stroke="currentColor" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
