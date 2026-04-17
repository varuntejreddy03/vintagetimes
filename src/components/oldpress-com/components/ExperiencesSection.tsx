import React from 'react';

type Slide = {
  title: string;
  subtitle: string;
  video?: string;
};

export default function ExperiencesSection() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  const slides: Slide[] = [
    {
      title: 'LATEST REEL',
      subtitle: 'Vintage Times moments, captured live.',
      video: '/WhatsApp Video 2026-04-08 at 7.13.28 PM.mp4',
    },
    {
      title: 'COMING SOON',
      subtitle: 'More client reels will be added here soon.',
    },
    {
      title: 'COMING SOON',
      subtitle: 'New weddings, activations, and event stories on the way.',
    },
  ];

  React.useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeSlide) {
        video.play().catch(() => {});
      } else {
        video.pause();
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
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+40px)] z-20 w-[92%] md:w-[75%] lg:w-[715px] aspect-[715/470] pointer-events-none">
            <img
              src="https://oldpress.com/wp-content/themes/old-press/assets/img/corners.webp"
              alt="corners"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex items-center justify-center relative w-full pb-20">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(calc(50% - ${(activeSlide * 500) + 250}px))` }}
            >
              {slides.map((slide, index) => {
                const isActive = index === activeSlide;

                return (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-[80vw] md:w-[640px] mx-2 transition-all duration-700 transform ${isActive ? 'opacity-100 scale-100 z-10' : 'opacity-20 scale-[0.6] z-0 blur-[2px]'}`}
                  >
                    <div className="relative aspect-[695/450] rounded-lg overflow-hidden bg-zinc-100 experiences-video-shadow">
                      {slide.video ? (
                        <video
                          ref={(el) => {
                            videoRefs.current[index] = el;
                          }}
                          src={slide.video}
                          muted
                          playsInline
                          loop
                          controls
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3f2c28_0%,#1f1715_45%,#100d0c_100%)]" />
                      )}

                      <div className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center ${slide.video ? 'bg-black/10' : 'bg-black/28'}`}>
                        <span className="text-white text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase max-w-[80%] [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]">
                          {slide.title}
                        </span>
                        <p className="mt-3 max-w-[420px] text-white/88 text-sm md:text-base leading-[1.4]">
                          {slide.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 max-w-[600px] mx-auto relative px-10">
            <div className="relative flex items-end justify-between h-8 border-b border-[#eee] mb-4">
              {slides.map((_, index) => (
                <React.Fragment key={index}>
                  <div className="relative flex flex-col items-center group">
                    <div
                      className={`w-[1px] transition-all duration-500 bg-[#eee] ${index === activeSlide ? 'h-8 w-[2px] bg-[#222020] translate-y-[-1px]' : 'h-3 group-hover:bg-[#ccc]'}`}
                    />
                  </div>

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

            <div className="flex justify-between items-start text-[11px] md:text-xs font-semibold tracking-wider text-[#9d9a95]">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`uppercase transition-colors duration-300 w-8 text-center ${index === activeSlide ? 'text-[#222020]' : 'hover:text-[#222020]'}`}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-sm md:text-base text-[#8c857d] font-['Onest']">
            More client reels coming soon.
          </p>
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
