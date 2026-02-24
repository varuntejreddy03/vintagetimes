import React from 'react';

export default function ExperiencesSection() {
  const [activeSlide, setActiveSlide] = React.useState(2); // Start with slide 03 as per screenshot
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  const slides = [
    {
      video: "https://oldpress.com/wp-content/uploads/2025/06/IYC2025-Anniversary-Paris-052025-Hotel-de-Ville.mp4.mp4",
      title: "PREMIUM WEDDING ACTIVATION, HYDERABAD, 2025"
    },
    {
      video: "https://oldpress.com/wp-content/uploads/2025/06/Citys-1000-years-celebration-Chartres-052025.mp4.mp4",
      title: "CORPORATE BRAND ACTIVATION, HYDERABAD, 2025"
    },
    {
      video: "https://oldpress.com/wp-content/uploads/2025/06/Anniversary-30-%D1%80%D1%96%D1%87%D1%87%D1%8F-%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D1%96%D1%97-Porto-052025.mp4.mp4",
      title: "RETAIL KIOSK MODEL, VIZAG MALL, 2025"
    },
    {
      video: "https://oldpress.com/wp-content/uploads/2025/06/VIVAIA-Shop-opening-Rome-052025.mp4.mp4",
      title: "BOUTIQUE STORE OPENING, VIJAYAWADA, 2025"
    },
    {
      video: "https://oldpress.com/wp-content/uploads/2025/06/National-Podiatry-Congress-Vila-do-Conde-Portugal-052025-1.mp4",
      title: "EXPERIENTIAL COLLEGE FEST, HYDERABAD, 2025"
    },
    {
      video: "https://oldpress.com/wp-content/uploads/2025/06/Forum-IIRH-Lisbon-052025.mp4.mp4",
      title: "CORPORATE HR ENGAGEMENT, HYDERABAD, 2025"
    }
  ];

  const handleBulletClick = (index: number) => {
    setActiveSlide(index);
  };

  React.useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeSlide) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      }
    });
  }, [activeSlide]);

  return (
    <section id="experiences" className="experiences py-20 overflow-hidden bg-white">
      <div className="container mx-auto">
        <div className="experiences__title mb-16 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-serif font-bold uppercase text-[#222020] tracking-tight">
            Our clients tell
          </h2>
        </div>

        <div className="experiences__content relative">

          {/* Brackets Overlay Fixed to Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+40px)] z-20 w-[92%] md:w-[75%] lg:w-[715px] aspect-[715/470] pointer-events-none">
            <img
              src="https://oldpress.com/wp-content/themes/old-press/assets/img/corners.webp"
              alt="corners"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Slider Strip */}
          <div className="flex items-center justify-center relative w-full pb-20">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(calc(50% - ${(activeSlide * 500) + 250}px))` }} // Adjusted for closer spacing
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-[80vw] md:w-[640px] mx-2 transition-all duration-700 transform ${index === activeSlide ? 'opacity-100 scale-100 z-10' : 'opacity-20 scale-[0.6] z-0 blur-[2px]'
                    }`}
                >
                  <div className="relative aspect-[695/450] rounded-lg overflow-hidden bg-zinc-100 experiences-video-shadow">
                    <video
                      ref={(el) => { videoRefs.current[index] = el; }}
                      src={slide.video}
                      muted
                      playsInline
                      loop
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-8 bg-black/5">
                      <span className="text-white text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase text-center max-w-[80%] [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]">
                        {slide.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ruler Pagination */}
          <div className="mt-8 max-w-[600px] mx-auto relative px-10">
            {/* The Ruler Line with Ticks */}
            <div className="relative flex items-end justify-between h-8 border-b border-[#eee] mb-4">
              {slides.map((_, index) => (
                <React.Fragment key={index}>
                  {/* Number Position */}
                  <div className="relative flex flex-col items-center group">
                    {/* Tick Mark */}
                    <div
                      className={`w-[1px] transition-all duration-500 bg-[#eee] ${index === activeSlide ? 'h-8 w-[2px] bg-[#222020] translate-y-[-1px]' : 'h-3 group-hover:bg-[#ccc]'
                        }`}
                    />
                  </div>

                  {/* Intermediate Ticks between slides */}
                  {index < slides.length - 1 && (
                    <div className="flex-1 flex justify-evenly items-end h-full">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-[1px] h-2 bg-[#f2f2f2]" />
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Numbers Row */}
            <div className="flex justify-between items-start text-[11px] md:text-xs font-semibold tracking-wider text-[#9d9a95]">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleBulletClick(index)}
                  className={`uppercase transition-colors duration-300 w-8 text-center ${index === activeSlide ? 'text-[#222020]' : 'hover:text-[#222020]'
                    }`}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .experiences-video-shadow {
           box-shadow: 0 30px 60px -12px rgba(0,0,0,0.25);
        }
      `}</style>
    </section>
  );
}

