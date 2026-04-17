export default function MomentSection() {
  const headlineImage = "/WhatsApp Image 2026-04-08 at 5.46.27 PM.jpeg";

  return (
    <section className="moment section-pb pb-[10.75vw] md:pb-24" id="moment">
      <div className="container mx-auto px-5">
        <div className="moment__body relative">
          <div className="moment__video absolute top-0 left-0 w-full h-full rounded overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-[2] before:bg-gradient-to-t before:from-[rgba(34,32,32,0.15)] before:to-[rgba(34,32,32,0.15)]">
            <picture>
              <source
                media="(max-width: 991px)"
                srcSet={headlineImage}
              />
              <source
                media="(min-width: 992px)"
                srcSet={headlineImage}
              />
              <img
                decoding="async"
                src={headlineImage}
                alt="Timeless memories, on paper"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </picture>
          </div>

          <div className="moment__content relative z-[2] aspect-[2/3] md:aspect-video flex flex-col justify-between p-5 text-white">
            <div className="moment__top h-full flex gap-6">
              <div className="moment__leftside flex-[0_0_calc(55.5%-0.75rem)] md:flex-[0_0_calc(50%-0.75rem)]">
                <div className="heading-2 sticky top-5">
                  <h2 className="text-[2rem] md:text-[4.75vw] font-serif font-semibold leading-[95%] uppercase">
                    Be the headline
                  </h2>
                </div>
              </div>

              <div className="moment__rightside flex-[0_0_calc(44.5%-0.75rem)] md:flex-[0_0_calc(50%-0.75rem)]">
                <ul className="sticky top-5 flex flex-col gap-[0.3125rem] font-['Onest'] text-[1.625rem] md:text-[3.125vw] font-semibold leading-[100%]">
                  <li>Pose.</li>
                  <li>Print.</li>
                  <li>Preserve.</li>
                </ul>
              </div>
            </div>

            <div className="moment__bottom w-full md:w-[calc(50%-0.75rem)] ml-auto">
              <a
                href="#form"
                className="link inline-block font-['Onest'] text-[0.9375rem] md:text-[0.9375vw] font-medium leading-[120%] pb-[0.125rem] relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[0.0625rem] after:bg-white/25 before:content-[''] before:absolute before:z-[2] before:left-0 before:bottom-0 before:w-full before:h-[0.0625rem] before:bg-white before:scale-x-0 before:origin-[100%_50%] before:transition-transform before:duration-[0.6s] before:ease-[cubic-bezier(0.85,0,0.15,1)] hover:before:scale-x-100 hover:before:origin-[0%_50%]"
              >
                Be the headline
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
