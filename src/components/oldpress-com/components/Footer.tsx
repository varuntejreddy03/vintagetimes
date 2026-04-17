
export default function Footer() {
  const menuLinks = [
    { title: "Home", href: "#" },
    { title: "About us", href: "#duo" },
    { title: "Services", href: "#services" },
    { title: "Reviews", href: "#experiences" },
    { title: "FAQ", href: "#faq" },
  ];

  const legalLinks = [
    { title: "Cooperation", href: "/cooperation" },
    { title: "Terms & Conditions", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy" },
  ];

  const socialLinks = [
    { title: "Instagram", href: "https://instagram.com/vintagetimes.in" },
    { title: "Facebook", href: "https://facebook.com/vintagetimes" },
  ];

  return (
    <footer className="footer bg-white pt-20 pb-12 overflow-hidden">
      <div className="container mx-auto px-5 md:px-10">
        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 border-t border-gray-100 pt-16 mb-20 relative">

          {/* Column 1 */}
          <div className="md:px-8 border-l md:border-l-0 border-gray-100">
            <ul className="flex flex-col gap-2">
              {menuLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-[#222020] font-['Onest'] text-[0.9375rem] font-medium leading-[140%] hover:text-[#75160d] transition-colors duration-300">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="md:px-8 md:border-l border-gray-100">
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-[#222020] font-['Onest'] text-[0.9375rem] font-medium leading-[140%] hover:text-[#75160d] transition-colors duration-300">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="md:px-8 md:border-l border-gray-100">
            <ul className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-[#222020] font-['Onest'] text-[0.9375rem] font-medium leading-[140%] hover:text-[#75160d] transition-colors duration-300">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact & WhatsApp */}
          <div className="md:px-8 md:border-l border-gray-100 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
            <div className="flex flex-col gap-2">
              <a href="tel:+917075746236" className="text-[#222020] font-['Onest'] text-[1.125rem] md:text-[0.9375rem] font-medium leading-[140%] hover:text-[#75160d] transition-colors duration-300">
                +91 70757 46236
              </a>
              <a href="mailto:contact@vintagetimes.in" className="text-[#222020] font-['Onest'] text-[1.125rem] md:text-[0.9375rem] font-medium leading-[140%] hover:text-[#75160d] transition-colors duration-300">
                contact@vintagetimes.in
              </a>
            </div>

            <a href="https://wa.me/917075746236" className="w-12 h-12 md:w-10 md:h-10 flex items-center justify-center bg-[#222020] rounded-full text-white hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.038 3.069l-.469 2.355 2.441-.471c.705.4 1.761.644 2.757.644l.001.001c3.182 0 5.768-2.586 5.768-5.766a5.756 5.756 0 00-5.768-5.768zm3.449 8.212c-.149.42-.746.764-1.028.814-.247.043-.568.077-1.603-.314-1.319-.498-2.103-1.834-2.17-1.922-.066-.088-.539-.718-.539-1.37s.341-.971.463-1.104c.12-.132.261-.166.348-.166s.174.001.249.005c.081.003.19-.033.298.228.114.277.391.956.424 1.022.033.066.054.144.011.23-.043.088-.066.144-.132.221-.066.077-.139.172-.198.235-.066.066-.135.138-.058.269.077.132.341.562.732.91.503.448.928.587 1.059.654.131.066.208.054.285-.033.077-.087.327-.384.414-.515.088-.131.174-.11.294-.066l1.206.6c.121.054.2.088.23.131.028.046.028.264-.121.684z" />
              </svg>
            </a>
          </div>
        </div>


        {/* Logo Image Only */}
        <div className="footer__logo w-full mt-20 md:mt-32 border-t border-gray-100 pt-10">
          <div className="flex justify-center items-center py-10 md:py-20">
            <img
              src="/WEBSITE12-Photoroom.png"
              alt="Vintage Times Logo"
              className="footer-logo-img select-none"
              draggable="false"
            />
          </div>
        </div>

        {/* Legal & Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-12 md:mt-20 pt-8 border-t border-gray-100">
          <span className="text-[#9d9a95] font-['Onest'] text-[0.875rem] leading-[140%]">
            2026 © Vintage Times. All rights reserved.
          </span>

          <div className="flex gap-8">
            <button className="text-[#222020] font-['Onest'] text-[0.9375rem] font-medium leading-[140%] flex items-center gap-2">
              English
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

