'use client';

import { useEffect, useRef, useState } from 'react';

export default function DuoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - viewportHeight)));

      // Switch content at 50% scroll
      if (scrollProgress < 0.5) {
        setActiveIndex(0);
      } else {
        setActiveIndex(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = [
    {
      title: 'Our Vision',
      text: "Our vision is to establish Vintage Times Booths as cultural nostalgia points across malls, tourism hubs, weddings, and experiential spaces nationwide. We transform live moments into personalised, vintage newspaper prints — a tactile memory artifact designed for emotional value, display, gifting, and virality.",
      image: '/compressed_website4.jpg.jpeg',
      alt: 'Vintage Times Vision'
    },
    {
      title: 'Brand Snapshot',
      text: "Category creator of the vintage newspaper photobooth industry in India. Cities Live: Hyderabad, Vizag, Vijayawada. Activations across weddings, malls, and corporates. Viral + Organic Pull with high UGC frequency. We are not a photobooth company. We are building India's nostalgia media brand.",
      image: '/WhatsApp Image 2026-04-08 at 5.46.27 PM.jpeg',
      alt: 'Brand Snapshot'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="duo"
      className="duo-wrapper section-pb relative h-[170vh] md:h-[280vh]"
    >
      <div className="duo sticky top-16 md:top-5 h-[calc(100vh-5rem)] md:h-[calc(100vh-2.5rem)] flex items-center overflow-hidden py-3 md:py-6">
        <div className="container h-full mx-auto px-5">
          <div className="duo__body h-full flex flex-col-reverse md:flex-row items-center gap-5 md:gap-10">

            {/* Left Side - Image */}
            <div className="duo__leftside flex-1 md:flex-[0_0_calc(44%-1.25rem)] h-[48vh] md:h-[72vh]">
              <div className="duo__image h-full w-full relative rounded-xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
                {content.map((item, index) => (
                  <img
                    key={index}
                    decoding="async"
                    src={item.image}
                    alt={item.alt}
                    className={`absolute top-0 left-0 w-full h-full object-cover object-center transition-transform duration-[1600ms] ease-in-out ${activeIndex === index
                      ? 'translate-y-0'
                      : 'translate-y-[-100%]'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="duo__rightside flex-1 md:flex-[0_0_calc(56%-1.25rem)] flex flex-col justify-start border-b border-[#eee] pb-4 md:pb-8 gap-6 md:gap-10">

              {/* Titles */}
              <div className="duo__titles flex flex-row gap-4">
                {content.map((item, index) => (
                  <span
                    key={index}
                    className={`subheading font-['Onest'] text-[0.75rem] md:text-[0.9375vw] font-semibold leading-[110%] uppercase transition-colors duration-800 ${activeIndex === index ? 'text-[#222020]' : 'text-[#9d9a95]'
                      }`}
                  >
                    {item.title}
                  </span>
                ))}
              </div>

              {/* Text Content */}
              <div className="duo__content relative min-h-[220px] w-full md:min-h-[420px] md:w-[60%] md:ml-auto text-[#222020] font-['Onest'] text-[0.98rem] md:text-[1.18vw] font-medium leading-[130%] md:leading-[122%]">
                {content.map((item, index) => (
                  <p
                    key={index}
                    className={`md:absolute md:right-0 md:top-0 transition-all duration-[2000ms] ease-in-out ${activeIndex === index
                      ? 'relative opacity-100 visible scale-100 translate-y-0'
                      : 'md:absolute opacity-0 invisible scale-95 translate-y-4 hidden md:block'
                      }`}
                  >
                    {item.text}
                  </p>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
