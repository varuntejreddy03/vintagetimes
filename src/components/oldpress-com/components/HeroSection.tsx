export default function HeroSection() {
  return (
    <section id="hero" className="w-full h-screen relative">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image */}
        <picture className="absolute inset-0">
          <source
            media="(max-width: 991px)"
            srcSet="/compressed_website6.jpg.jpeg"
          />
          <img
            src="/compressed_website6.jpg.jpeg"
            alt="Vintage moments"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </picture>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6">
          <div className="flex flex-col items-center gap-4">
            <span className="text-white text-[12px] md:text-sm uppercase tracking-[0.5em] font-medium opacity-80 [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              Vintage Times Presents
            </span>
            <h1 className="text-white text-[8vw] md:text-[4.5rem] lg:text-[6rem] font-serif font-black leading-tight uppercase max-w-[90%] drop-shadow-2xl">
              Your moments, <br />
              <span className="font-playfair italic normal-case font-medium">front-page</span> news
            </h1>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute inset-x-0 bottom-12 z-10 flex flex-col items-center pointer-events-none">
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 animate-bounce opacity-70">
            <span className="text-white text-[10px] uppercase tracking-[0.3em] font-medium [text-shadow:_0_1px_8px_rgba(0,0,0,0.8)]">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent shadow-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
