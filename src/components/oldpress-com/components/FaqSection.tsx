import React from 'react';

export default function FAQ() {
  return (
    <section className="faq section-pb pb-24 md:pb-[10.75vw]" id="faq">
      <div className="container mx-auto px-4 md:px-5">
        <div className="faq__body flex flex-col md:flex-row gap-8 md:gap-10">
          <div className="faq__header flex-1 md:sticky md:top-5">
            <div className="heading-2">
              <h2 className="text-[2.4375rem] md:text-[4.75vw] font-semibold leading-[90%] md:leading-[95%] text-[#222020]">
                Questions? <br />
                We're glad <br />
                you asked
              </h2>
            </div>
          </div>

          <div className="faq__content flex-1">
            <ol className="faq__list">
              <FAQItem
                question="What is Vintage Times and how does it work?"
                answer="Vintage Times is India's first nostalgia-commerce ecosystem. We transform live moments into personalised, vintage newspaper prints — a tactile memory artifact designed for emotional value, display, gifting, and virality."
                needsExpand={false}
              />

              <FAQItem
                question="How does your business model work?"
                answer="We operate a dual revenue ecosystem: 1) Centralized Event Allocation where we assign enquiries to franchise partners based on territory and quality scores. 2) Local Booth Profit Centres where partners monetise kiosks in malls, cafes, resorts, and events. This ensures fairness and guaranteed deal flow."
                needsExpand={true}
                shortText="We operate a dual revenue ecosystem: 1) Centralized Event Allocation where we assign enquiries to franchise partners based on territory and quality scores. 2) Local Booth Profit Centres where partners monetise kiosks in"
              />

              <FAQItem
                question="What is the workflow at live events?"
                answer="The guest steps in, a professional photo is captured. Our software applies an auto-layout with your custom event headline and branding. The newspaper is printed in just 20-30 seconds and handed over as a premium keepsake. It's fast, emotional, and share-worthy."
                needsExpand={false}
              />

              <FAQItem
                question="What hardware and software are used?"
                answer="We use high-end DSLR/Mirrorless cameras, i5+ laptops, professional DNP/Epson photo printers, and professional lighting. Our proprietary layout software handles auto-formatting and instant printing, while Photoshop allows for custom branding on every template."
                needsExpand={false}
              />

              <FAQItem
                question="Where can I find a Vintage Times booth?"
                answer="We are currently live in Hyderabad, Vizag, and Vijayawada. You can find our kiosks in major malls, wedding venues, and corporate activations. We are expanding across tourism hubs and experiential spaces nationwide."
                needsExpand={false}
              />

              <FAQItem
                question="Can the newspaper design be customized?"
                answer="Absolutely! Every event gets a custom headline like 'Be the headline today'. We also integrate your event logos, QR codes for digital copies, and specific storytelling details to make it a unique front-page news artifact."
                needsExpand={false}
              />

              <FAQItem
                question="How do I become a franchise partner?"
                answer="We expand deliberately with select partners only to ensure a premium experience. We look for partners who can maintain our high quality scores and execution records within controlled territories. Contact us to check availability in your city."
                needsExpand={false}
              />
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  needsExpand = false,
  shortText = "",
}: {
  question: string;
  answer: string;
  needsExpand?: boolean;
  shortText?: string;
}) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <li className="faq-item flex items-start gap-6 md:gap-0 pt-6 pb-6 md:pt-6 md:pb-6 border-t border-[#eee]">
      <div className="faq-item__content flex flex-col gap-2 flex-1">
        <span className="heading-6 font-['Onest'] text-base md:text-[1.125vw] font-medium leading-[110%] text-[#222020]">
          {question}
        </span>
        <div className="showmore relative">
          <p className="showmore__text description font-['Onest'] text-sm md:text-[0.9375vw] leading-[125%] text-[#9d9a95]">
            {needsExpand && !isExpanded ? (
              <>
                <span className="showmore__short">{shortText}</span>
                <span
                  className="showmore__button cursor-pointer text-[#222020] font-medium relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.0625rem] after:bg-[#9d9a95] hover:opacity-70 transition-opacity ml-1"
                  onClick={() => setIsExpanded(true)}
                >
                  See more
                </span>
              </>
            ) : (
              <>
                <span>{answer}</span>
                {needsExpand && isExpanded && (
                  <span
                    className="showmore__button cursor-pointer text-[#222020] font-medium relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[0.0625rem] after:bg-[#9d9a95] hover:opacity-70 transition-opacity ml-1"
                    onClick={() => setIsExpanded(false)}
                  >
                    See less
                  </span>
                )}
              </>
            )}
          </p>
        </div>
      </div>
    </li>
  );
}
