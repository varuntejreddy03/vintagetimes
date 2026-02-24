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
      image: 'https://oldpress.com/wp-content/uploads/2025/06/5.webp',
      alt: 'Vintage Times Vision'
    },
    {
      title: 'Brand Snapshot',
      text: "Category creator of the vintage newspaper photobooth industry in India. Cities Live: Hyderabad, Vizag, Vijayawada. Activations across weddings, malls, and corporates. Viral + Organic Pull with high UGC frequency. We are not a photobooth company. We are building India's nostalgia media brand.",
      image: 'https://oldpress.com/wp-content/uploads/2025/06/5-2.webp',
      alt: 'Brand Snapshot'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="duo"
      className="duo-wrapper section-pb relative h-[200vh] md:h-[400vh]"
    >
      <div className="duo sticky top-16 md:top-5 h-[calc(100vh-5rem)] md:h-[calc(100vh-1.25rem)] flex items-end overflow-hidden pb-5">
        <div className="container h-full mx-auto px-5">
          <div className="duo__body h-full flex flex-col-reverse md:flex-row items-stretch gap-4 md:gap-9">

            {/* Left Side - Image */}
            <div className="duo__leftside flex-1 md:flex-[0_0_calc(50.2%-1.125rem)] h-[50%] md:h-full">
              <div className="duo__image h-full relative rounded overflow-hidden">
                {content.map((item, index) => (
                  <img
                    key={index}
                    decoding="async"
                    src={item.image}
                    alt={item.alt}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-in-out ${activeIndex === index
                      ? 'translate-y-0'
                      : 'translate-y-[-100%]'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="duo__rightside flex-1 md:flex-[0_0_calc(49.8%-1.125rem)] flex flex-col justify-between border-b border-[#eee] pb-4 md:pb-6 gap-3 md:gap-6">

              {/* Titles */}
              <div className="duo__titles flex flex-row gap-3">
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
              <div className="duo__content relative w-full md:w-1/2 md:ml-auto text-[#222020] font-['Onest'] text-[1rem] md:text-[1.5vw] font-medium leading-[130%] md:leading-[115%]">
                {content.map((item, index) => (
                  <p
                    key={index}
                    className={`md:absolute md:right-0 md:bottom-[2.625vw] transition-all duration-[2000ms] ease-in-out ${activeIndex === index
                      ? 'relative opacity-100 visible scale-100'
                      : 'md:absolute opacity-0 invisible scale-90 hidden md:block'
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
