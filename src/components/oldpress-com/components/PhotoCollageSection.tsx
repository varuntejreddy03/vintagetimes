export default function PhotosSection() {
  return (
    <section id="photos" className="photos-wrapper section-pb" style={{ height: 'auto' }}>
      <div className="photos">
        <div className="container">
          <div className="photos__body relative">

            <div className="photos__image sticky flex justify-center items-center min-h-[70vh] max-w-[70vw] mx-auto bottom-[1.25vw] md:bottom-0" style={{ zIndex: 10 }}>
              <img
                decoding="async"
                src="https://oldpress.com/wp-content/uploads/2025/06/IMG_1679-scaled.webp"
                alt="Image 1"
                className="absolute top-0 left-0 w-full h-full object-contain"
                style={{ transform: 'translate(2.06vw, -2.68vh)' }}
              />
            </div>

            <div className="photos__image sticky flex justify-center items-center min-h-[70vh] max-w-[70vw] mx-auto bottom-[1.25vw] md:bottom-0" style={{ zIndex: 9 }}>
              <img
                decoding="async"
                src="https://oldpress.com/wp-content/uploads/2025/06/photo_2025-02-24-22.48.43.webp"
                alt="Image 2"
                className="absolute top-0 left-0 w-full h-full object-contain"
                style={{ transform: 'translate(-3.8vw, 1.45vh)' }}
              />
            </div>

            <div className="photos__image sticky flex justify-center items-center min-h-[70vh] max-w-[70vw] mx-auto bottom-[1.25vw] md:bottom-0" style={{ zIndex: 8 }}>
              <img
                decoding="async"
                src="https://oldpress.com/wp-content/uploads/2025/06/IMG_1673-scaled.webp"
                alt="Image 3"
                className="absolute top-0 left-0 w-full h-full object-contain"
                style={{ transform: 'translate(3.49vw, -0.49vh)' }}
              />
            </div>

            <div className="photos__image sticky flex justify-center items-center min-h-[70vh] max-w-[70vw] mx-auto bottom-[1.25vw] md:bottom-0" style={{ zIndex: 7 }}>
              <img
                decoding="async"
                src="https://oldpress.com/wp-content/uploads/2025/06/IMG_2048-scaled.webp"
                alt="Image 4"
                className="absolute top-0 left-0 w-full h-full object-contain"
                style={{ transform: 'translate(4.61vw, -0.83vh)' }}
              />
            </div>

            <div className="photos__image sticky flex justify-center items-center min-h-[70vh] max-w-[70vw] mx-auto bottom-[1.25vw] md:bottom-0" style={{ zIndex: 6 }}>
              <img
                decoding="async"
                src="https://oldpress.com/wp-content/uploads/2025/06/IMG_9433.webp"
                alt="Image 5"
                className="absolute top-0 left-0 w-full h-full object-contain"
                style={{ transform: 'translate(3.41vw, -0.85vh)' }}
              />
            </div>

            <div className="photos__image sticky flex justify-center items-center min-h-[70vh] max-w-[70vw] mx-auto bottom-[1.25vw] md:bottom-0" style={{ zIndex: 5 }}>
              <img
                decoding="async"
                src="https://oldpress.com/wp-content/uploads/2025/06/IMG_6276-scaled-e1751011460519.webp"
                alt="Image 6"
                className="absolute top-0 left-0 w-full h-full object-contain"
                style={{ transform: 'translate(-4.19vw, -2.55vh)' }}
              />
            </div>

            <div className="photos__image sticky flex justify-center items-center min-h-[70vh] max-w-[70vw] mx-auto bottom-[1.25vw] md:bottom-0" style={{ zIndex: 4 }}>
              <img
                decoding="async"
                src="https://oldpress.com/wp-content/uploads/2025/06/IMG_5930-scaled.webp"
                alt="Image 7"
                className="absolute top-0 left-0 w-full h-full object-contain"
                style={{ transform: 'translate(-2.21vw, 4.24vh)' }}
              />
            </div>

            <div className="photos__image sticky flex justify-center items-center min-h-[70vh] max-w-[70vw] mx-auto bottom-[1.25vw] md:bottom-0" style={{ zIndex: 3 }}>
              <img
                decoding="async"
                src="https://oldpress.com/wp-content/uploads/2025/06/photo_2025-04-17_11-57-28.webp"
                alt="Image 8"
                className="absolute top-0 left-0 w-full h-full object-contain"
                style={{ transform: 'translate(-4.04vw, 0.59vh)' }}
              />
            </div>

            <div className="photos__image sticky flex justify-center items-center min-h-[70vh] max-w-[70vw] mx-auto bottom-[1.25vw] md:bottom-0" style={{ zIndex: 2 }}>
              <img
                decoding="async"
                src="https://oldpress.com/wp-content/uploads/2025/06/IMG_2837.webp"
                alt="Image 9"
                className="absolute top-0 left-0 w-full h-full object-contain"
                style={{ transform: 'translate(3.71vw, 1.56vh)' }}
              />
            </div>

            <div
              className="photos__image photos-last-child sticky flex max-w-[47.5rem] md:max-w-[47.5vw] mx-auto flex-col gap-[1.5625rem] md:gap-[1.5625vw] text-center bottom-[1.25vw] md:bottom-0"
              style={{ zIndex: 1, opacity: 0, transform: 'translate(0, 0)' }}
            >
              <div className="photos-last-child__title font-['Cinzel'] text-[2rem] md:text-[4.75vw] font-semibold leading-[95%] text-[#222020]">
                Partnership? <br /> Let&apos;s create <br /> magic together!
              </div>

              <p className="description font-['Onest'] text-[0.875rem] md:text-[0.9375vw] leading-[125%] text-[#9d9a95] max-w-[34.375rem] md:max-w-[34.375vw] mx-auto">
                Partner with Vintage Times and bring retro-photo magic to your event, brand, or space.
                Whether you&apos;re an event agency, a wedding planner, a hotel, or a festival organizer — our vintage-style photographers will make your guests the stars of their own printed newspaper. <br /> <br /> Explore our B2B packages with commission options and exclusive perks for long-term partners. Chat with us.
              </p>

              <a
                href="#form"
                className="custom-link link inline-flex w-max items-center gap-[0.3125rem] mx-auto font-['Onest'] text-[0.9375rem] md:text-[0.9375vw] font-medium leading-[120%] text-[#222020]"
              >
                <span className="pb-[0.125rem] relative">Learn more</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
