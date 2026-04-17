import { useState, useCallback } from 'react';

export default function ContactForm() {
  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userType, setUserType] = useState('client');
  const [userComment, setUserComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const message = `Hello!%0AMy name is: ${userName}%0AEmail: ${userMail}%0APhone: ${userPhone}%0AI am a: ${userType}%0AInterested in: ${userComment}`;
    const whatsappUrl = `https://wa.me/917075746236?text=${message}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, '_blank');
    }, 1000);
  }, [userName, userMail, userPhone, userType, userComment, isSubmitting]);

  if (isSuccess) {
    return (
      <section className="contact-us section-pb py-12 md:py-24" id="form">
        <div className="container mx-auto px-5">
          <div className="relative overflow-hidden min-h-[500px] md:min-h-[850px] flex items-start md:items-center justify-center pt-8 pb-8 md:py-10 rounded-[12px] bg-black">
            <div className="absolute inset-0 pointer-events-none">
              <img src="https://oldpress.com/wp-content/uploads/2025/06/form-desktop-scaled.webp" alt="" className="w-full h-full object-cover opacity-30" />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-6 text-center px-10">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#9b4136] shadow-2xl mb-4">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-white font-serif text-[48px] uppercase tracking-tighter leading-none">SUCCESS</h3>
              <p className="text-white/80 text-lg max-w-[280px] leading-relaxed">Beautiful stories start with the first step. See you in the frame!</p>
              <button onClick={() => setIsSuccess(false)} className="mt-8 text-white uppercase tracking-[0.2em] text-[12px] font-semibold border border-white/30 px-10 py-3 rounded-full hover:bg-white hover:text-[#9b4136] transition-all">
                Send another message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-us section-pb py-12 md:py-24" id="form">
      <div className="container mx-auto px-5">
        <div className="relative overflow-hidden min-h-0 md:min-h-[850px] flex items-start md:items-center justify-center pt-6 pb-6 md:py-10 rounded-[12px] bg-black">

          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <img src="https://oldpress.com/wp-content/uploads/2025/06/form-desktop-scaled.webp" alt="" className="w-full h-full object-cover opacity-30" />
          </div>

          <div className="relative z-10 w-full max-w-[440px] mx-4 md:mx-0">
            <div className="bg-white rounded-[4px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col gap-4 md:gap-6" style={{ padding: '1.5rem 1.5rem', }}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>

                {/* Name */}
                <div style={{ paddingTop: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #f5f5f5' }}>
                  <label style={{ display: 'block', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '24px', color: '#222020', marginBottom: '4px' }}>
                    Hello! My name is
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="type..."
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: '20px',
                      color: '#222020',
                      padding: '4px 0',
                      WebkitAppearance: 'none',
                      appearance: 'none',
                    }}
                  />
                </div>

                {/* Email */}
                <div style={{ paddingTop: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #f5f5f5' }}>
                  <label style={{ display: 'block', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '24px', color: '#222020', marginBottom: '4px' }}>
                    . this is my email
                  </label>
                  <input
                    type="text"
                    value={userMail}
                    onChange={(e) => setUserMail(e.target.value)}
                    placeholder="type..."
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: '20px',
                      color: '#222020',
                      padding: '4px 0',
                      WebkitAppearance: 'none',
                      appearance: 'none',
                    }}
                  />
                </div>

                {/* Phone */}
                <div style={{ paddingTop: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #f5f5f5' }}>
                  <label style={{ display: 'block', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '24px', color: '#222020', marginBottom: '4px' }}>
                    and my phone number
                  </label>
                  <input
                    type="tel"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    placeholder="type..."
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: '20px',
                      color: '#222020',
                      padding: '4px 0',
                      WebkitAppearance: 'none',
                      appearance: 'none',
                    }}
                  />
                </div>

                {/* Type Selection */}
                <div style={{ paddingTop: '1rem', paddingBottom: '1rem', borderBottom: '1px solid #f5f5f5' }}>
                  <label style={{ display: 'block', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '24px', color: '#222020', marginBottom: '8px' }}>
                    i'm the
                  </label>
                  <div style={{ display: 'flex', gap: '2rem', padding: '4px 0' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="contactUserType"
                        value="client"
                        checked={userType === 'client'}
                        onChange={(e) => setUserType(e.target.value)}
                        style={{ width: '18px', height: '18px', accentColor: '#222020', cursor: 'pointer' }}
                      />
                      <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '20px', color: userType === 'client' ? '#222020' : '#d1d5db' }}>client</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="contactUserType"
                        value="partner"
                        checked={userType === 'partner'}
                        onChange={(e) => setUserType(e.target.value)}
                        style={{ width: '18px', height: '18px', accentColor: '#222020', cursor: 'pointer' }}
                      />
                      <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '20px', color: userType === 'partner' ? '#222020' : '#d1d5db' }}>partner</span>
                    </label>
                  </div>
                </div>

                {/* Interest */}
                <div style={{ paddingTop: '1rem', paddingBottom: '1rem', marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '24px', color: '#222020', marginBottom: '4px' }}>
                    i'm interested in
                  </label>
                  <input
                    type="text"
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                    placeholder="type..."
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: '20px',
                      color: '#222020',
                      padding: '4px 0',
                      borderBottom: '1px solid #f5f5f5',
                      WebkitAppearance: 'none',
                      appearance: 'none',
                    }}
                  />
                </div>

                {/* Submit */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button
                    type="submit"
                    disabled={!userName || !userMail || !userPhone || isSubmitting}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: 'italic',
                      fontSize: '26px',
                      color: '#9b4136',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: 0,
                      opacity: (!userName || !userMail || !userPhone) ? 0.3 : 1,
                    }}
                  >
                    <span style={{ borderBottom: '1px solid #9b4136', paddingBottom: '2px' }}>Be the headline</span>
                    <span>↗</span>
                  </button>
                  <p style={{ fontSize: '11px', color: '#b0b0b0', fontFamily: "'Onest', sans-serif" }}>
                    By clicking the button, you agree to <a href="#" style={{ textDecoration: 'underline' }}>Privacy Policy</a>.
                  </p>
                </div>
              </form>

              {/* Footer Contact Box */}
              <div style={{ marginTop: '1.5rem', border: '1px solid #eeeeee', borderRadius: '8px', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textAlign: 'center' }}>
                  <a href="tel:+917075746236" style={{ color: '#222020', fontSize: '18px', fontFamily: "'Onest', sans-serif", fontWeight: 600 }}>+91 70757 46236</a>
                  <a href="mailto:contact@vintagetimes.in" style={{ color: '#222020', fontSize: '14px', fontFamily: "'Onest', sans-serif", fontWeight: 500 }}>contact@vintagetimes.in</a>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://wa.me/917075746236" target="_blank" rel="noreferrer" style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#222020', color: 'white', borderRadius: '50%' }}>
                    <svg style={{ width: '22px', height: '22px' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.038 3.069l-.469 2.355 2.441-.471c.705.4 1.761.644 2.757.644l.001.001c3.182 0 5.768-2.586 5.768-5.766a5.756 5.756 0 00-5.768-5.768zm3.449 8.212c-.149.42-.746.764-1.028.814-.247.043-.568.077-1.603-.314-1.319-.498-2.103-1.834-2.17-1.922-.066-.088-.539-.718-.539-1.37s.341-.971.463-1.104c.12-.132.261-.166.348-.166s.174.001.249.005c.081.003.19-.033.298.228.114.277.391.956.424 1.022.033.066.054.144.011.23-.043.088-.066.144-.132.221-.066.077-.139.172-.198.235-.066.066-.135.138-.058.269.077.132.341.562.732.91.503.448.928.587 1.059.654.131.066.208.054.285-.033.077-.087.327-.384.414-.515.088-.131.174-.11.294-.066l1.206.6c.121.054.2.088.23.131.028.046.028.264-.121.684z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
