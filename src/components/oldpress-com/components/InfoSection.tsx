export default function InfoSection() {
  return (
    <section id="info" className="section-pb py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-20">
        <div className="flex flex-col items-center gap-12 md:gap-16">
          <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl text-center">
            <div className="font-playfair italic text-2xl md:text-3xl lg:text-4xl leading-tight text-[#222020]">
              Turning live moments into vintage newspaper memories. Personalised. Emotional. Viral-worthy.
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full border border-gray-100 scale-150 opacity-20 animate-pulse"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full border border-dashed border-gray-200 p-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="w-12 h-12 md:w-16 md:h-16 info-star-motion"
                  viewBox="0 0 132 132"
                  fill="none"
                >
                  <path d="M0 66C36.4482 66 66 95.5518 66 132C66 95.5518 95.5518 66 132 66C95.5518 66 66 36.4482 66 0C66 36.4482 36.4482 66 0 66Z" fill="#222020"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full max-w-5xl mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <a
                href="tel:+917075746236"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-40 flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
                </div>
                <span className="text-[10px] font-['Cinzel'] font-semibold tracking-[0.24em] text-[#9d9a95] uppercase mb-2">Call Us</span>
                <span className="text-[#222020] font-playfair text-xl md:text-2xl group-hover:scale-105 transition-transform duration-500 tracking-[0.02em]">+91 70757 46236</span>
              </a>

              <a
                href="https://www.instagram.com/vintagetimes.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-40 flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4A3.6,3.6 0 0,0 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6A3.6,3.6 0 0,0 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,5.75A0.75,0.75 0 0,1 18.75,6.5A0.75,0.75 0 0,1 18,7.25A0.75,0.75 0 0,1 17.25,6.5A0.75,0.75 0 0,1 18,5.75Z" /></svg>
                </div>
                <span className="text-[10px] font-['Cinzel'] font-semibold tracking-[0.24em] text-[#9d9a95] uppercase mb-2">Connect</span>
                <span className="text-[#222020] font-playfair text-xl md:text-2xl group-hover:scale-105 transition-transform duration-500 tracking-[0.02em]">@vintagetimes.in</span>
              </a>

              <a
                href="mailto:contact@vintagetimes.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-40 flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
                </div>
                <span className="text-[10px] font-['Cinzel'] font-semibold tracking-[0.24em] text-[#9d9a95] uppercase mb-2">Write to us</span>
                <span className="text-[#222020] font-playfair text-xl md:text-2xl group-hover:scale-105 transition-transform duration-500 tracking-[0.02em]">contact@vintagetimes.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
